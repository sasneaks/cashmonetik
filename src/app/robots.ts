import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/cgv', '/mentions-legales', '/politique-confidentialite'],
      },
    ],
    sitemap: 'https://cashmonetik.fr/sitemap.xml',
  };
}
