import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import CallButton from "@/components/CallButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://atlasaircons.com"),
  title: {
    default: "Atlas Aircon - AC Repair & Service in Vadodara | AC Installation Expert",
    template: "%s | Atlas Aircon Vadodara"
  },
  description: "Best AC repair & service in Vadodara. Expert AC installation, AMC, gas refilling, chiller repair & HVAC solutions. 20+ years experience. Call +91 97272 57141 for same-day service.",
  keywords: [
    "AC repair Vadodara",
    "AC service Vadodara",
    "AC installation Vadodara",
    "AC AMC Vadodara",
    "chiller repair Vadodara",
    "HVAC service Vadodara",
    "split AC repair",
    "window AC service",
    "central AC maintenance",
    "AC gas refilling Vadodara",
    "panel AC service",
    "VRF VRV system",
    "Atlas Aircon"
  ],
  authors: [{ name: "Atlas Aircon" }],
  creator: "Atlas Aircon",
  publisher: "Atlas Aircon",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://atlasaircons.com",
    siteName: "Atlas Aircon",
    title: "Atlas Aircon - Best AC Repair & Service in Vadodara",
    description: "Professional AC repair, service & installation in Vadodara. 20+ years experience, 5000+ satisfied customers. Same-day service available.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Atlas Aircon - AC Repair Service Vadodara",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Atlas Aircon - AC Repair & Service Vadodara",
    description: "Expert AC repair, installation & maintenance in Vadodara. Call +91 97272 57141",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://atlasaircons.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://atlasaircons.com",
  name: "Atlas Aircon",
  image: "https://atlasaircons.com/logo.png",
  description: "Professional AC repair, service & installation company in Vadodara with 20+ years of experience.",
  url: "https://atlasaircons.com",
  telephone: "+919727257141",
  email: "atlasaircon1@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Sayajigunj",
    addressLocality: "Vadodara",
    addressRegion: "Gujarat",
    postalCode: "390005",
    addressCountry: "IN"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 22.3072,
    longitude: 73.1812
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "20:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "10:00",
      closes: "18:00"
    }
  ],
  priceRange: "₹₹",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "500",
    bestRating: "5",
    worstRating: "1"
  },
  areaServed: [
    { "@type": "City", name: "Vadodara" },
    { "@type": "City", name: "Ahmedabad" },
    { "@type": "City", name: "Surat" },
    { "@type": "City", name: "Bharuch" },
    { "@type": "City", name: "Anand" },
    { "@type": "City", name: "Rajkot" }
  ],
  sameAs: [
    "https://www.facebook.com/atlasaircon",
    "https://www.instagram.com/atlasaircon"
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "AC Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AC Repair",
          description: "Professional AC repair services for all brands"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AC Installation",
          description: "Expert AC installation with warranty"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AC AMC",
          description: "Annual maintenance contracts for AC"
        }
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <CallButton />
      </body>
    </html>
  );
}
