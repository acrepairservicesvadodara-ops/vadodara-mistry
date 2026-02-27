import { Metadata } from "next";
import HomeServiceTemplate from "@/components/HomeServiceTemplate";

export const metadata: Metadata = {
  title: "POP & Painting Contractor in Vadodara | False Ceiling & Wall Painting",
  description: "Professional POP false ceiling & painting services in Vadodara. Expert wall painting, texture paint, gypsum ceiling & POP work. Call +91 97272 57141",
  keywords: "pop contractor vadodara, painting vadodara, false ceiling vadodara, wall painting vadodara, texture paint vadodara, gypsum ceiling vadodara",
  openGraph: {
    title: "POP & Painting Services in Vadodara | Vadodara Mistry",
    description: "Professional POP false ceiling and painting services in Vadodara.",
    url: "https://vadodaramistry.com/pop-painting-vadodara",
    type: "website",
  },
};

const config = {
  title: "POP & Painting Services",
  metaTitle: "POP & Painting Contractor in Vadodara | False Ceiling & Wall Painting",
  metaDescription: "Professional POP false ceiling & painting services in Vadodara. Expert wall painting, texture paint, gypsum ceiling & POP work.",
  heroTitle: "Best POP & Painting Services in Vadodara",
  heroDescription: "Transform your home with expert POP false ceiling and professional painting services. Quality work at affordable prices.",
  category: "painting" as const,
  features: [
    "POP False Ceiling Design",
    "Gypsum False Ceiling",
    "Interior Wall Painting",
    "Exterior Painting",
    "Texture Painting",
    "POP Work & Finishing",
    "Wall Putty & Primer",
    "Asian Paints Application",
    "Berger Paints Application",
    "Enamel Painting",
    "Distemper & Emulsion",
    "POP Cornice Design",
  ],
  pricing: [
    { service: "Interior Painting (per sq.ft)", price: "₹12 - ₹18" },
    { service: "Exterior Painting (per sq.ft)", price: "₹15 - ₹25" },
    { service: "Texture Paint (per sq.ft)", price: "₹25 - ₹45" },
    { service: "POP False Ceiling (per sq.ft)", price: "₹75 - ₹120" },
    { service: "Gypsum Ceiling (per sq.ft)", price: "₹85 - ₹140" },
    { service: "Wall Putty + Primer (per sq.ft)", price: "₹8 - ₹12" },
    { service: "POP Cornice (per running ft)", price: "₹45 - ₹80" },
    { service: "Enamel Painting (per sq.ft)", price: "₹35 - ₹50" },
  ],
  process: [
    { step: 1, title: "Site Visit", description: "Free measurement & consultation" },
    { step: 2, title: "Quotation", description: "Detailed estimate provided" },
    { step: 3, title: "Preparation", description: "Surface preparation & primer" },
    { step: 4, title: "Execution", description: "Professional painting & finishing" },
  ],
  faqs: [
    {
      question: "What is the cost of wall painting per sq.ft in Vadodara?",
      answer: "Interior wall painting costs ₹12-18 per sq.ft including wall preparation, primer, and two coats of paint. Premium paints like Asian Paints Royale cost ₹18-25 per sq.ft."
    },
    {
      question: "How long does painting a 2BHK flat take?",
      answer: "A 2BHK flat (approx 800-1000 sq.ft) takes 4-6 days for complete painting including putty, primer, and two coats. We ensure proper drying between coats."
    },
    {
      question: "What is POP false ceiling cost per sq.ft?",
      answer: "POP false ceiling costs ₹75-120 per sq.ft and Gypsum false ceiling costs ₹85-140 per sq.ft including design, material, and installation."
    },
    {
      question: "Do you use branded paints only?",
      answer: "Yes, we use only branded paints from Asian Paints, Berger, Nerolac, and Dulux. We show you the paint containers before starting work."
    },
    {
      question: "Is there warranty on painting work?",
      answer: "Yes, we provide 1-year warranty on all painting work. Premium paints come with manufacturer warranty of 3-5 years against discoloration."
    },
  ],
  relatedServices: [
    { name: "False Ceiling", href: "/false-ceiling-vadodara" },
    { name: "Texture Painting", href: "/texture-painting-vadodara" },
    { name: "Wall Painting", href: "/wall-painting-vadodara" },
    { name: "POP Work", href: "/pop-work-vadodara" },
    { name: "Gypsum Ceiling", href: "/gypsum-false-ceiling-vadodara" },
    { name: "Exterior Painting", href: "/exterior-painting-vadodara" },
    { name: "Asian Paints", href: "/asian-paints-contractor-vadodara" },
    { name: "Wall Putty", href: "/wall-putty-vadodara" },
  ],
  areas: [
    { name: "Alkapuri", href: "/painting-alkapuri-vadodara" },
    { name: "Gotri", href: "/painting-gotri-vadodara" },
    { name: "Manjalpur", href: "/painting-manjalpur-vadodara" },
    { name: "Akota", href: "/painting-akota-vadodara" },
    { name: "Bhayli", href: "/painting-bhayli-vadodara" },
    { name: "Karelibaug", href: "/painting-karelibaug-vadodara" },
    { name: "Waghodia Road", href: "/painting-waghodia-vadodara" },
    { name: "Makarpura", href: "/painting-makarpura-vadodara" },
    { name: "Chhani", href: "/painting-chhani-vadodara" },
    { name: "Harni", href: "/painting-harni-vadodara" },
    { name: "Fatehgunj", href: "/painting-fatehgunj-vadodara" },
    { name: "Gorwa", href: "/painting-gorwa-vadodara" },
  ],
};

export default function POPPaintingPage() {
  return <HomeServiceTemplate config={config} slug="pop-painting-vadodara" />;
}
