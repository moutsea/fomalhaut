import { MetadataRoute } from 'next'
import { locales } from '@/i18n/config'
import { getAllMarkdownFiles } from '@/lib/markdown'

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_WEB_URL || 'https://www.fomalhautlabs.com'

  // Define the routes we want to include (excluding dashboard)
  const routes = [
    '', // homepage
    '/usage',
    '/about',
    '/products',
    '/products/cs61b-beyond',
    '/products/code-by-ai',
    '/products/claude-ide',
    '/products/code-i'
  ]

  // Generate sitemap entries for all locales and regular routes
  const sitemapEntries: MetadataRoute.Sitemap = []

  // Add regular routes
  routes.forEach(route => {
    locales.forEach(locale => {
      const url = locale === 'en'
        ? `${baseUrl}${route}`
        : `${baseUrl}/${locale}${route}`

      sitemapEntries.push({
        url: url,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.7,
        alternates: {
          languages: {
            en: `${baseUrl}${route}`,
            zh: `${baseUrl}/zh${route}`,
            fr: `${baseUrl}/fr${route}`,
            ko: `${baseUrl}/ko${route}`
          }
        }
      })
    })
  })

  return sitemapEntries
}