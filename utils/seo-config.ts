import type { ManifestOptions } from 'vite-plugin-pwa';

/**
 * Defines the default SEO configuration for the website
 */
export const seoConfig = {
  baseURL: 'https://cwf.tayles.co.uk',
  siteName: 'Clockwork Fish',
  description: 'CWF is a design and development agency based in Toronto, Canada',
  type: 'website',
  image: {
    url: 'https://cwf.tayles.co.uk/img/tayles-opengraph.png',
    alt: 'Clockwork Fish',
    width: 1200,
    height: 630,
  },
  twitter: {
    card: 'summary_large_image',
  },
};

/**
 * Defines the configuration for PWA webmanifest
 */
export const manifest: Partial<ManifestOptions> = {
  name: seoConfig.siteName,
  short_name: seoConfig.siteName,
  description: seoConfig.description,
  theme_color: '#ff8200',
  background_color: '#2980b9',
  display: 'minimal-ui',
  icons: [
    {
      src: '/favicons/favicon-192x192.png',
      sizes: '192x192',
      type: 'image/png',
    },
    {
      src: '/favicons/favicon-512x512.png',
      sizes: '512x512',
      type: 'image/png',
    },
    {
      src: '/favicons/favicon-512x512.png',
      sizes: '512x512',
      type: 'image/png',
      purpose: 'any maskable',
    },
  ],
};
