// Import Dependencies
import { Fragment, useContext, useRef } from "react";
import PropTypes from "prop-types";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import {
  PlusIcon,
  XMarkIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
// Suppression de Cog6ToothIcon non utilisé
import { useState, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";
//import { getPaymentMethods, addPaymentMethod } from "services/paymentMethodService";
import { PaymentCard } from "./components/PaymentCard";
import { useDisclosure } from "hooks";
import { Breadcrumbs } from "components/shared/Breadcrumbs";
import { Page } from "components/shared/Page"; // Add this import
// Ajout des importations manquantes
import { Button, Input, Circlebar } from "components/ui";
import { InvoiceTable } from "./components/InvoiceTable";
import { loadStripe } from "@stripe/stripe-js";
// Nouvelles importations pour Stripe Elements
import {
  Elements,
  CardElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";
import ManifestContext from "app/contexts/Business/Manifest.context";
import dayjs from "dayjs";
import { addPaymentMethod, getCustomerInvoices, getPaymentMethods, removePaymentMethod } from "services/plansService";
import { useAuthContext } from "app/contexts/auth/context";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

// ----------------------------------------------------------------------

export default function Billing() {
  const { t } = useTranslation();
  const breadcrumbs = [
    {
      title: t("nav.dashboards.home"),
      path: "/dashboards",
    },
    {
      title: t("nav.facturations.facturation"),
      path: "/facturation",
    },
  ];

  const { organisationSubscription, setInvoices } = useContext(ManifestContext)
  const { user } = useAuthContext()
  const authToken = window.localStorage.getItem('authToken')

  const [invoices, changeInvoices] = useState([])

  const fetchInvoices = useCallback(async () => {
    //setIsLoading(true);
    try {
      let result = await getCustomerInvoices(organisationSubscription?.stripe_customer_id, user.company, {
        limit: 100,
        //starting_after: null
      }, authToken)
      changeInvoices(result.invoices)
      setInvoices(result.invoices)
    } catch (error) {
      console.error('Erreur lors de la récupération des méthodes de paiement:', error);
    } finally {
      //setIsLoading(false);
    }
  }, [organisationSubscription]);

  useEffect(() => {
    fetchInvoices();
  }, [fetchInvoices]);

  /**
   * Vérifie si une facture est expirée.
   * @param {Object} invoice - L'objet facture.
   * @returns {boolean} - true si expirée, false sinon.
   */
  function isInvoiceExpired(organisationSubscription) {
    const dureePlan = dayjs(organisationSubscription?.end_date).diff(dayjs(organisationSubscription?.start_date), 'day');
    const dureeToToday = dayjs().diff(dayjs(organisationSubscription?.start_date), 'day');
    if (!dureePlan < !dureeToToday){
     return false
    }else{
      return true
    }
  }
  return (
    <Page title={t("nav.facturations.facturation")}>
      <div className="transition-content w-full px-[--margin-x] pb-8">
        <div className="flex items-center space-x-4 py-5 lg:py-6 rtl:space-x-reverse">
          <h2 className="text-xl font-medium tracking-wide text-gray-800 dark:text-dark-50 lg:text-2xl">
            {t("facturations.title")}
          </h2>
          <div className="hidden self-stretch py-1 sm:flex">
            <div className="h-full w-px bg-gray-300 dark:bg-dark-600"></div>
          </div>
          <Breadcrumbs items={breadcrumbs} className="max-sm:hidden justify-end" />
        </div>
        <div className="grid grid-cols-1 gap-2 sm:gap-5 lg:gap-4">
          <MemberPlan 
          plan={organisationSubscription}
          isInvoiceExpired={isInvoiceExpired} />

          <PaymentMethods company={user.company} token={authToken} />

          <div className="my-2 h-px bg-gray-200 dark:bg-dark-500"></div>

          <InvoiceSection invoices={invoices?.length ? invoices : []} />
        </div>
      </div>
    </Page>
  );
}

function MemberPlan({plan, isInvoiceExpired}) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  // Le composant affiche le plan d'abonnement actuel de l'organisation,
  // avec une barre de progression du temps restant et un bouton pour mettre à niveau.
  return (
    <div className="mt-5 rounded-lg bg-gray-100 p-4 dark:bg-dark-800">
      <div className="flex flex-col items-start justify-between sm:flex-row">
        <div>
          <p className="text-lg font-medium text-gray-800 dark:text-dark-100">
            {plan?.plan_id?.display_name}
          </p>
          <div className="mt-2 flex items-center gap-2">
            <Circlebar
              size={5}
              strokeWidth={12}
              variant="soft"
              value={(dayjs().diff(dayjs(plan?.start_date), 'day')*100/dayjs(plan?.end_date).diff(dayjs(plan?.start_date), 'day')).toFixed(2)}
              color="primary"
              className="flex"
            />
           
            {isInvoiceExpired(plan) && (
              <>
                <p>
                {dayjs(plan?.end_date).diff(dayjs(plan?.start_date), 'day') - dayjs().diff(dayjs(plan?.start_date), 'day')} 
                  {t("mois.jours")}
                  {/* {t("mois.mois")} */}
                </p>
                <div className=" text-xs text-red-600">
                {t("facturations.plan_expired_alert")}
                </div>
                <Button 
                  variant="soft"
                  color="secondary" 
                  className="mt-6 sm:mt-0"
                  // onClick={() => navigate("/pricing")}
                >
                  Renew
                </Button>
              </>
            )}
         
          </div>
        </div>
        <Button 
          color="primary" 
          className="mt-6 sm:mt-0"
          onClick={() => navigate("/pricing")}
        >
          {t("facturations.upgrade")}
        </Button>
        
      </div>
    </div>
  );
}

function PaymentMethods({company, token}) {
  const { t } = useTranslation();
  const [isOpen, { open, close }] = useDisclosure(false);
  const [methods, setMethods] = useState([]);
  //const [defaultPaymentMethodId, setDefaultPaymentMethodId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPaymentMethods = useCallback(async () => {
    setIsLoading(true);
    try {
      let result = await getPaymentMethods(company, token)
      setMethods(result)
    } catch (error) {
      console.error('Erreur lors de la récupération des méthodes de paiement:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  

  useEffect(() => {
    fetchPaymentMethods();
  }, [fetchPaymentMethods]);

  const handleUpdate = useCallback(() => {
    fetchPaymentMethods();
  }, [fetchPaymentMethods]);

  const handleDelete = useCallback(async (deletedId) => {
    setMethods(prev => prev.filter(method => method.id !== deletedId));
    await removePaymentMethod(deletedId, token)
    .then(() => {
      fetchPaymentMethods()
    })
  }, []);

  return (
    <>
      <div className="mt-4">
        <div className="flex justify-between">
          <div>
            <p className="text-base font-medium text-gray-800 dark:text-dark-100">
              {t("facturations.payment_methods")}
            </p>
            <p className="mt-0.5 text-balance">
              {t("facturations.manage_payment_methods")}
            </p>
          </div>
          <Button
            onClick={open}
            className="h-8 space-x-2 whitespace-nowrap px-2.5 text-xs rtl:space-x-reverse"
          >
            <PlusIcon className="size-4" />
            <span>{t("facturations.new_method")}</span>
          </Button>
        </div>
      </div>

      <div className="hide-scrollbar -mx-4 mt-4 flex items-start gap-3 overflow-x-auto px-4 sm:-mx-5 sm:px-5">
        {console.log('PAYMENT METHOD ::', methods)}
        {isLoading ? (
          <div className="flex w-full justify-center py-8">
            <div className="size-8 animate-spin rounded-full border-2 border-primary border-t-transparent"></div>
          </div>
        ) : methods.length === 0 ? (
          <div className="w-full py-8 text-center">
            <p>{t("facturations.no_payment_method")}</p>
          </div>
        ) : (
              [...methods].map((method, idx) => (
            <PaymentCard
              key={method.id}
              paymentMethod={method}
              isDefault={ idx===0 /* method.id === defaultPaymentMethodId */}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          )
          )
        )}
      </div>

      <AddPaymentModal companyId={company} token={token} isOpen={isOpen} onClose={close} onSuccess={handleUpdate} />
    </>
  );
}

function InvoiceSection({invoices}) {
  const { t } = useTranslation();
  
  return (
    <>
      <div>
        <p className="text-base font-medium text-gray-800 dark:text-dark-100">
          {t("facturations.invoices")}
        </p>
        <p className="mt-0.5 text-balance">
          {t("facturations.list_invoices")}
        </p>
      </div>
      <InvoiceTable invoices={invoices} />
    </>
  );
}



function AddPaymentModal({companyId, token, isOpen, onClose, onSuccess }) {
  const { t } = useTranslation();
  const searchRef = useRef(null);
  // const [cardHolderName, setCardHolderName] = useState('');
  // const [isSubmitting, setIsSubmitting] = useState(false);
  const [stripePromise, setStripePromise] = useState(null);

  useEffect(() => {
    // Charger Stripe une seule fois au montage du composant
    setStripePromise(loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY));
  }, []);

  // Wrapper du formulaire avec Elements
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden px-4 py-6 sm:px-5"
        onClose={onClose}
        initialFocus={searchRef}
      >
        <TransitionChild
          as="div"
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          className="absolute inset-0 bg-gray-900/50 backdrop-blur transition-opacity dark:bg-black/30"
        />

        <TransitionChild
          as={DialogPanel}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
          className="relative flex w-full max-w-lg origin-bottom flex-col overflow-hidden rounded-lg bg-white transition-all duration-300 dark:bg-dark-700"
        >
          <div className="flex items-center justify-between rounded-t-lg bg-gray-50 px-4 py-3 dark:bg-dark-800 sm:px-5">
            <DialogTitle
              as="h3"
              className="text-2xl font-black text-black dark:text-dark-100"
            >
              {t("facturations.add_card")}
            </DialogTitle>
            <Button
              onClick={onClose}
              variant="flat"
              isIcon
              className="size-7 rounded-full ltr:-mr-1.5 rtl:-ml-1.5"
            >
              <XMarkIcon className="size-4.5" />
            </Button>
          </div>
          {! stripePromise ? null : (
            <Elements stripe={stripePromise}>
              <CheckoutForm 
                companyId={companyId}
                authToken = {token}
                onClose={onClose} 
                onSuccess={onSuccess} 
                searchRef={searchRef} 
              />
            </Elements>
          )}
        </TransitionChild>
      </Dialog>
    </Transition>
  );
}

// Nouveau composant pour le formulaire de paiement avec Stripe Elements
function CheckoutForm({ companyId, authToken, onClose, onSuccess, searchRef }) {
  const { t } = useTranslation();
  const stripe = useStripe();
  const elements = useElements();
  const [cardHolderName, setCardHolderName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [cardError, setCardError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements || isSubmitting) return;
    
    setIsSubmitting(true);
    setCardError('');
    
    try {
      // Récupérer l'élément de carte
      const cardElement = elements.getElement(CardElement);
      
      // Créer un PaymentMethod avec Stripe Elements
      const { paymentMethod, error } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
        billing_details: {
          name: cardHolderName,
        },
      });
      
      if (error) {
        setCardError(error.message);
        throw new Error(error.message);
      }
      
      // Envoyer l'ID de la méthode de paiement à votre API
      await addPaymentMethod(companyId, paymentMethod.id, true, authToken);
      
      onSuccess();
      onClose();
      toast.success("Nouvelle carte de payement enregistree !!!")
    } catch (error) {
      console.error('Erreur lors de l\'ajout de la méthode de paiement:', error);
      toast.error("Erreur lors de l'ajout de la méthode de paiement")
      if (!cardError) {
        setCardError(error.message);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-4 sm:px-5">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-5">
          <Input
            label={t("facturations.card_holder_name")}
            placeholder={t("facturations.enter_card_holder_name")}
            type="text"
            ref={searchRef}
            prefix={<UserIcon className="size-4.5" />}
            value={cardHolderName}
            onChange={(e) => setCardHolderName(e.target.value)}
            required
          />
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              {t("facturations.card_information")}
            </label>
            <div className="rounded-md border border-gray-300 p-3 dark:border-gray-600">
              <CardElement 
                options={{
                  style: {
                    base: {
                      fontSize: '16px',
                      color: '#424770',
                      '::placeholder': {
                        color: '#aab7c4',
                      },
                    },
                    invalid: {
                      color: '#9e2146',
                    },
                  },
                }}
              />
            </div>
            {cardError && (
              <p className="mt-1 text-sm text-red-600">{cardError}</p>
            )}
          </div>
        </div>

        <div className="mt-8 flex justify-end gap-4">
          <Button onClick={onClose} className="min-w-[7rem]" disabled={isSubmitting} type="button">
            {t("boutons.annuler")}
          </Button>
          <Button
            type="submit"
            color="primary"
            className="min-w-[7rem]"
            disabled={isSubmitting || !stripe}
          >
            {isSubmitting ? (
              <div className="size-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
            ) : t("boutons.save")}
          </Button>
        </div>
      </form>
    </div>
  );
}

AddPaymentModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSuccess: PropTypes.func.isRequired,
};
