import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: {
    default: "Professional Website Design $40/month - Custom Sites with Hosting Included",
    template: "%s | Affordable Professional Web Design"
  },
  description: "Get a stunning custom website built in just 7 days for only $40/month. Includes hosting, domain, SSL, and lifetime support. No setup fees, no hidden costs. Perfect for small businesses ready to grow online.",
  keywords: [
    "affordable website design",
    "custom website $40",
    "small business website",
    "website with hosting included",
    "professional web design",
    "responsive website development",
    "cheap website design",
    "website hosting domain included",
    "fast website delivery",
    "SEO optimized websites"
  ],
  authors: [{ name: "BuildQuick" }],
  creator: "BuildQuick",
  publisher: "BuildQuick",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://buildquick.io'),
  alternates: {
    canonical: '/',
  },
      openGraph: {
      type: 'website',
      locale: 'en_US',
      url: process.env.NEXT_PUBLIC_SITE_URL || 'https://buildquick.io',
      title: 'Professional Website Design $40/month - Custom Sites with Hosting Included',
      description: 'Get a stunning custom website built in just 7 days for only $40/month. Includes hosting, domain, SSL, and lifetime support.',
      siteName: 'BuildQuick',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Professional Website Design Services - $40/month with hosting included',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Professional Website Design $40/month - Custom Sites with Hosting Included',
      description: 'Get a stunning custom website built in just 7 days for only $40/month. Includes hosting, domain, SSL, and lifetime support.',
    images: ['/og-image.jpg'],
    creator: '@buildquick',
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
  verification: {
    google: process.env.GOOGLE_VERIFICATION_CODE,
    yandex: process.env.YANDEX_VERIFICATION_CODE,
    yahoo: process.env.YAHOO_VERIFICATION_CODE,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "BuildQuick",
    "description": "Affordable professional website design and development services starting at $40/month",
    "url": process.env.NEXT_PUBLIC_SITE_URL || "https://buildquick.io",
    "logo": `${process.env.NEXT_PUBLIC_SITE_URL || "https://buildquick.io"}/build.svg`,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-123-4567",
      "contactType": "customer service",
      "email": "hello@buildquick.io",
      "availableLanguage": "en",
      "areaServed": "US"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://github.com/buildquick",
      "https://linkedin.com/company/buildquick",
      "https://twitter.com/buildquick"
    ],
          "offers": {
        "@type": "Offer",
        "name": "Professional Website Design Package",
        "description": "Complete website design package including hosting, domain, and ongoing support",
        "price": "40",
      "priceCurrency": "USD",
      "priceSpecification": {
        "@type": "RecurringCharge",
        "frequency": "monthly"
      },
      "itemOffered": {
        "@type": "Service",
        "name": "Website Design and Development",
        "description": "Custom website design with hosting and domain included"
      }
    }
  };

  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Professional Website Design",
    "description": "Custom website design and development with hosting and domain included for $40/month",
    "provider": {
      "@type": "Organization",
      "name": "BuildQuick"
    },
    "areaServed": "US",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Website Design Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Website Design"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Website Hosting"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Domain Registration"
          }
        }
      ]
    }
  };

  return (
    <html lang="en" dir="ltr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteStructuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceStructuredData),
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#E07A5F" />
        <meta name="color-scheme" content="light" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="google-site-verification" content={process.env.GOOGLE_VERIFICATION_CODE} />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} antialiased font-inter`}
      >
        {/* Skip Navigation Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[#E07A5F] text-white px-4 py-2 rounded-lg z-[9999] transition-all duration-200"
        >
          Skip to main content
        </a>
        
        <div id="main-content">
          {children}
          
        </div>
        <GoogleAnalytics gaId='G-083KY4M62N' />
      </body>
    </html>
  );
}
