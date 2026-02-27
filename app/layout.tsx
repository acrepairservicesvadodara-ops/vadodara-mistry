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
  metadataBase: new URL("https://vadodaramistry.com"),
  title: {
    default: "Vadodara Mistry - Best Home Services in Vadodara | Painter, Civil, Plumber, Carpenter, Fabricator",
    template: "%s | Vadodara Mistry"
  },
  description: "Top-rated home services in Vadodara. Expert POP ceiling, painting, civil work, plumbing, carpentry, fabrication & solar services. Trusted mistry network. Call +91 97272 57141",
  keywords: [
    "Vadodara mistry",
    "home services Vadodara",
    "POP ceiling Vadodara",
    "painter Vadodara",
    "civil contractor Vadodara",
    "plumber Vadodara",
    "carpenter Vadodara",
    "fabrication Vadodara",
    "solar maintenance Vadodara",
    "false ceiling Vadodara",
    "home renovation Vadodara",
    "kadiya kam Vadodara",
    "suthar kam Vadodara",
    "lohedar kam Vadodara"
  ],
  authors: [{ name: "Vadodara Mistry" }],
  creator: "Vadodara Mistry",
  publisher: "Vadodara Mistry",
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
    url: "https://vadodaramistry.com",
    siteName: "Vadodara Mistry",
    title: "Vadodara Mistry - Best Home Services in Vadodara",
    description: "Professional home services - POP ceiling, painting, civil work, plumbing, carpentry, fabrication & solar. 10+ years experience, 5000+ happy customers.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vadodara Mistry - Home Services Expert",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vadodara Mistry - Home Services Expert",
    description: "Expert home services in Vadodara. Call +91 97272 57141",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://vadodaramistry.com",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.svg" },
    ],
  },
  manifest: "/manifest.json",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://vadodaramistry.com",
  name: "Vadodara Mistry",
  image: "https://vadodaramistry.com/logo.png",
  description: "Professional home services company in Vadodara offering POP ceiling, painting, civil work, plumbing, carpentry, fabrication & solar maintenance services.",
  url: "https://vadodaramistry.com",
  telephone: "+917600337866",
  email: "info@vadodaramistry.com",
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
      opens: "08:00",
      closes: "20:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "09:00",
      closes: "18:00"
    }
  ],
  priceRange: "₹₹",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "1500",
    bestRating: "5",
    worstRating: "1"
  },
  areaServed: [
    { "@type": "City", name: "Vadodara" },
    { "@type": "Place", name: "Alkapuri" },
    { "@type": "Place", name: "Manjalpur" },
    { "@type": "Place", name: "Gotri" },
    { "@type": "Place", name: "Waghodia Road" },
    { "@type": "Place", name: "Makarpura GIDC" }
  ],
  sameAs: [
    "https://www.facebook.com/vadodaramistry",
    "https://www.instagram.com/vadodaramistry"
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Home Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "POP & False Ceiling",
          description: "POP ceiling, gypsum ceiling, PVC panels installation"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Painting Services",
          description: "Interior, exterior, texture painting services"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Civil Work",
          description: "Construction, renovation, masonry services"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Plumbing Services",
          description: "Plumbing repair, installation, maintenance"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Carpentry Services",
          description: "Furniture making, repair, woodwork"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Fabrication & Welding",
          description: "MS/SS fabrication, gates, grills, industrial work"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Solar Maintenance",
          description: "Solar panel cleaning, repair, AMC services"
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
