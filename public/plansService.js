// Import Dependencies
import { get, post, del } from "app/api/Fetcher";
import API_ENDPOINTS from "app/api/ressources.endpoints";

// ----------------------------------------------------------------------

/**
 * Service pour la gestion des plans de tarification
 */

/**
 * Récupérer tous les plans disponibles
 * @returns {Promise<Array>} Liste des plans
 */
export const getAllPlans = async (region, lang) => {
  try {
    const response = await post(API_ENDPOINTS.plans.getAllPlans,{region, lang});

    // Retourner les données des plans
    return response.data || [];
  } catch (error) {
    console.error('❌ Erreur lors de la récupération des plans:', error);
    throw error;
  }
};

/**
 * Récupérer un plan spécifique par son ID
 * @param {string} planId - ID du plan
 * @returns {Promise<Object>} Détails du plan
 */
export const getPlanById = async (planId) => {
  try {
    const response = await get(`${API_ENDPOINTS.plans.getAllPlans}/${planId}`);

    return response.data || null;
  } catch (error) {
    console.error('❌ Erreur lors de la récupération du plan:', error);
    throw error;
  }
};

/**
 * Formater les données d'un plan pour l'affichage
 * @param {Object} plan - Plan brut de l'API
 * @returns {Object} Plan formaté pour l'UI
 */
export const formatPlanForUI = (plan) => {
  if (!plan) return null;

  // Gérer la structure de prix de l'API
  const priceInfo = plan.price || {};
  const amount = typeof priceInfo === 'object' ? priceInfo.amount * 100  : priceInfo;
  const currency = typeof priceInfo === 'object' ? priceInfo.currency : 'USD';
  const billingPeriod = typeof priceInfo === 'object' ? priceInfo.billing_period : 'MONTHLY';

  // Convertir la période de facturation en format UI
  const duration = billingPeriod === 'YEARLY' ? 'year' : 'month';

  // Gérer les limites du plan
  const limits = plan.limits || {};

  return {
    id: plan._id || plan.id,
    name:  plan.display_name ||plan.name || 'Plan sans nom',
    original_name:  plan.name || 'Plan sans nom',
    price: amount || 0,
    currency: currency || 'USD',
    duration: duration,
    description: plan.description || '',
    features: plan.features || [], // Garder les features comme objets
    isPopular: plan.is_popular || plan.isPopular || false,
    isRecommended: plan.is_recommended || plan.isRecommended || false,
    trialDays: plan.trial_days || 0,
    status: plan.status || 'ACTIVE',
    // Limites du plan
    maxUsers: limits.max_users || null,
    maxStorage: limits.max_storage || null,
    maxCampaigns: limits.max_campaigns || null,
    maxStrategicSessions: limits.max_strategic_sessions || null,
    // IDs Stripe
    stripePriceId: plan.stripe_price_id || null,
    stripeProductId: plan.stripe_product_id || null,
    // Dates
    createdAt: plan.created_at || plan.createdAt,
    updatedAt: plan.updated_at || plan.updatedAt
  };
};

/**
 * Formater une liste de plans pour l'affichage
 * @param {Array} plans - Liste des plans bruts de l'API
 * @returns {Array} Liste des plans formatés pour l'UI
 */
export const formatPlansForUI = (plans) => {
  if (!Array.isArray(plans)) return [];
  
  return plans
    .filter(plan => plan && (plan._id || plan.id))
    .map(formatPlanForUI)
    .sort((a, b) => a.price - b.price); // Trier par prix croissant
};


export const createCheckoutSession = async (planId, companyId, successUrl, cancelUrl, authToken, mode) => {
  try {
    const response = await post(API_ENDPOINTS.abonnements.createCheckoutSession.replace(":companyId", companyId), {
      planId,
      successUrl,
      cancelUrl,
      mode
    }, { headers: {
      'Authorization': `Bearer ${authToken}`
    }});
    console.log('CHECKOUT SESSION RESPONSE ::', response);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la création de la session de paiement:', error);
    throw error;
  }
}

export const subscribeToPlan = async (planId, companyId, paymentMethodId, customerId, authToken, session) => {
  const response = await post(API_ENDPOINTS.abonnements.createSubscription.replace(":companyId", companyId), {
    planId,
    paymentMethodId,
    customerId,
    session
  }, {
    headers: {
      'Authorization': `Bearer ${authToken}`
    }
  });

  return response.data;
}

export const subscribeToTrialLicence = async (companyId, authToken) => { 
  const response = await post(API_ENDPOINTS.abonnements.createFreemiumSubscription.replace(":companyId", companyId), {}, {
    headers: {
      'Authorization': `Bearer ${authToken}`
    }
  });
  return response.data;
}

export const getActiveSubscription = async (companyId, authToken) => {

  const getOrganisationEndPoint = API_ENDPOINTS.abonnements.getActiveSubscription

  let res = await get(getOrganisationEndPoint.replace(':companyId', companyId), {
    headers: {
      'Authorization': `Bearer ${authToken}`
    }
  })
  return res.data
}


export const getPaymentMethods = async (companyId, authToken) => {
  const endPoint = API_ENDPOINTS.abonnements.getPaymentMethods.replace(':companyId', companyId)
  let res = await get(endPoint, {
    headers: {
      'Authorization': `Bearer ${authToken}`
    }
  })
  return res.data
}

export const addPaymentMethod = async (companyId,paymentMethodId,setAsDefault, authToken) => {
  const endPoint = API_ENDPOINTS.abonnements.addPaymentMethod.replace(':companyId', companyId)
  let res = await post(endPoint, {paymentMethodId, setAsDefault }, {
    headers: {
      'Authorization': `Bearer ${authToken}`
    }
  })
  return res.data
}

export const removePaymentMethod = async (paymentMethodId, authToken) => {
  const endPoint = API_ENDPOINTS.abonnements.deletePaymentMethod.replace(':paymentMethodId', paymentMethodId)
  let res = await del(endPoint, { }, {
    headers: {
      'Authorization': `Bearer ${authToken}`
    }
  })
  return res.data
}

export const getCustomerInvoices = async (customerId,companyId, options, authToken) => {
  const endPoint = API_ENDPOINTS.abonnements.getCustomerInvoices.replace(':customerId', customerId)
  let res = await post(endPoint, { options, companyId  }, {
    headers: {
      'Authorization': `Bearer ${authToken}`
    }
  })
  console.log('INVOICES ::', res.data)
  return res.data
}




