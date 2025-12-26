import { MetadataRoute } from 'next'
import { locales } from '@/i18n/config'
import { getAllMarkdownFiles } from '@/lib/markdown'

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_WEB_URL || 'https://www.codebyai.net'

  // Define the routes we want to include (excluding dashboard and docs landing page)
  const routes = [
    '', // homepage
    '/usage'
  ]

  // Get all markdown files for the default locale to generate docs routes
  const docsFiles = getAllMarkdownFiles('en')
  const docsRoutes = docsFiles.map(file => `/docs/${file.category}/${file.slug}`)

  // Generate sitemap entries for all locales and regular routes
  const sitemapEntries: MetadataRoute.Sitemap = []

  // Add regular routes
  routes.forEach(route => {
    locales.forEach(locale => {
      // For default locale (en), we don't include the locale prefix
      // For other locales, we include the locale prefix
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

  // Add docs inner pages with higher priority
  docsRoutes.forEach(route => {
    locales.forEach(locale => {
      const url = locale === 'en'
        ? `${baseUrl}${route}`
        : `${baseUrl}/${locale}${route}`

      sitemapEntries.push({
        url: url,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
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