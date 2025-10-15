/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.tonsite.com', // Remplace par ton domaine
  generateRobotsTxt: true, // Génère aussi robots.txt
}

// Ou version fonctionnelle pour un sitemap dynamique :
import { MetadataRoute } from 'next'

export default function sitemap(){
  return [
    {
      url: 'https://www.tonsite.com', // Page d'accueil
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://www.tonsite.com/a-propos', // Exemple page statique
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Ajoute dynamiquement tes pages (ex. depuis une DB) :
    // ...pages.map((page) => ({ url: `https://www.tonsite.com/${page.slug}`, ... }))
  ]
}