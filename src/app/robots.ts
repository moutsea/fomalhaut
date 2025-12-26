import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
    const siteUrl = process.env.NEXT_PUBLIC_WEB_URL || 'https://www.fomalhautlabs.com';

    return {
        rules: [
            {
                userAgent: '*',
                allow: ['/', '/ko/', '/zh/', '/fr/'],
                disallow: ['/api/', '/_next/', '/private/', '/dashboard'],
            },
        ],
        sitemap: `${siteUrl}/sitemap.xml`,
    };
}