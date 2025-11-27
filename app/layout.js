// app/layout.js
import './globals.css';
import { Source_Sans_3 } from 'next/font/google';

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-source-sans',
});

const siteUrl = 'https://sawava.com';
const googleVerification = ''; // Google Search Console verification code
const phoneNumber = '+254-713-594-4140'; // Update company phone number
const email = 'hello@sawava.com'; // Update company email

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Sawava — Expert Virtual Assistant Services in Kenya',
    template: '%s | Sawava',
  },
  description:
    'Sawava provides professional virtual assistant services across Kenya and the world. From admin support to digital content creation, we help business owners save 20+ hours per week. Get your free consultation today.',
  keywords: [
    'virtual assistant Kenya',
    'virtual assistant services Nairobi',
    'remote admin support Kenya',
    'executive assistant Kenya',
    'digital content creation Kenya',
    'social media management Kenya',
    'business support services Kenya',
    'VA services Kenya',
    'administrative support Kenya',
    'small business support Kenya',
  ],
  authors: [{ name: 'Sawava Team' }],
  creator: 'Sawava',
  publisher: 'Sawava',
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Sawava — Kenya's Leading Virtual Assistant Service",
    description:
      'Professional virtual assistants helping businesses reclaim their time. Admin, tech, content, and social media support. Trusted by 100+ businesses across Kenya.',
    url: siteUrl,
    siteName: 'Sawava',
    locale: 'en_KE',
    type: 'website',
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Sawava - Virtual Assistant Services Kenya',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sawava – Virtual Assistant Services Kenya',
    description:
      'Save 20+ hours/week with expert virtual assistant support. Admin • Content • Tech • Social Media. Trusted by businesses across Kenya.',
    images: [`${siteUrl}/og-image.jpg`],
    creator: '@sawavake',
    site: '@sawavake', // Add site handle
  },
  verification: {
    google: googleVerification,
  },
  category: 'Business Services',
  classification: 'Virtual Assistant Services',
  
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'manifest', url: '/site.webmanifest' },
    ],
  },
};

export const viewport = {
  themeColor: '#e1292c',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: 'dark light', // Support both themes
};

export default function RootLayout({ children }) {
  // Organization Schema
  const orgLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteUrl}/#organization`,
    name: 'Sawava',
    alternateName: 'Sawava Virtual Assistants',
    url: siteUrl,
    logo: `${siteUrl}/logos/sawavalogo.png`,
    image: `${siteUrl}/og-image.jpg`,
    description:
      'Sawava helps startups and small businesses scale through branding, web design, virtual assistant services, and admin support.',
    email: email,
    telephone: phoneNumber,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'KE',
      addressLocality: 'Nairobi',
      addressRegion: 'Nairobi County',
    },
    sameAs: [
      'https://www.tiktok.com/@sawava.ke/',
      'https://www.instagram.com/sawava.ke/',
      'https://www.facebook.com/sawava.ke',
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: phoneNumber,
        contactType: 'customer service',
        areaServed: ['KE', 'Global'],
        availableLanguage: ['English', 'Swahili'],
        contactOption: 'TollFree',
      },
    ],
  };

  // LocalBusiness Schema
  const localBusinessLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${siteUrl}/#business`,
    name: 'Sawava',
    image: `${siteUrl}/og-image.jpg`,
    url: siteUrl,
    telephone: phoneNumber,
    email: email,
    priceRange: '$$', // pricing services
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'KE',
      addressLocality: 'Nairobi',
      addressRegion: 'Nairobi County',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -1.2921,
      longitude: 36.8219,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
    ],
    sameAs: [
      'https://www.tiktok.com/@sawava.ke/',
      'https://www.instagram.com/sawava.ke/',
      'https://www.facebook.com/sawava.ke',
    ],
    areaServed: {
      '@type': 'Country',
      name: 'Kenya',
    },
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: -1.2921,
        longitude: 36.8219,
      },
      geoRadius: '1000000', // Service radius in meters (Kenya-wide)
    },
  };

  // Website Schema
  const websiteLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    url: siteUrl,
    name: 'Sawava',
    description:
      'Professional virtual assistant services helping businesses reclaim their time.',
    publisher: {
      '@id': `${siteUrl}/#organization`,
    },
    inLanguage: 'en-KE',
  };

  return (
    <html lang="en" className={sourceSans.variable}>
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
        />
      </head>
      <body className="bg-brand-dark text-white">{children}</body>
    </html>
  );
}