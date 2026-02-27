import { Metadata } from "next";
import HomeServiceTemplate from "@/components/HomeServiceTemplate";

export const metadata: Metadata = {
  title: "Plumber in Vadodara | Best Plumbing Services Near You",
  description: "Professional plumber services in Vadodara. Expert pipe fitting, bathroom fitting, leak repair, drainage cleaning & more. 24/7 service. Call +91 76003 37866",
  keywords: "plumber vadodara, plumbing services vadodara, pipe fitting vadodara, bathroom fitting vadodara, leak repair vadodara, drainage cleaning",
  openGraph: {
    title: "Plumber in Vadodara | Vadodara Mistry",
    description: "Professional plumbing services in Vadodara. 24/7 emergency plumber available.",
    url: "https://vadodaramistry.com/plumbing-vadodara",
    type: "website",
  },
};

const config = {
  title: "Plumbing Services",
  metaTitle: "Plumber in Vadodara | Best Plumbing Services Near You",
  metaDescription: "Professional plumber services in Vadodara. Expert pipe fitting, bathroom fitting, leak repair, drainage cleaning & more.",
  heroTitle: "Best Plumbing Services in Vadodara",
  heroDescription: "Expert plumbers for all your plumbing needs. Pipe fitting, bathroom renovation, leak repair, and 24/7 emergency services.",
  category: "plumbing" as const,
  features: [
    "24/7 Emergency Plumbing",
    "Pipe Fitting & Repair",
    "Bathroom Fitting",
    "Tap Installation & Repair",
    "Water Tank Installation",
    "Drainage Cleaning",
    "Leak Detection & Repair",
    "Geyser Installation",
    "Water Pump Repair",
    "Toilet Installation",
    "Kitchen Sink Fitting",
    "Water Line Connection",
  ],
  process: [
    { step: 1, title: "Book Service", description: "Call or WhatsApp us" },
    { step: 2, title: "Inspection", description: "Our plumber inspects the issue" },
    { step: 3, title: "Quote", description: "Transparent pricing shared" },
    { step: 4, title: "Repair", description: "Quick and quality repair" },
  ],
  faqs: [
    {
      question: "Do you provide 24/7 emergency plumbing service?",
      answer: "Yes, we provide 24/7 emergency plumbing services in Vadodara for pipe bursts, leaks, blocked drains, and other urgent issues. Our plumber reaches within 30-60 minutes."
    },
    {
      question: "What is the visiting charge for plumber in Vadodara?",
      answer: "Our visiting charge is ₹200 which is adjustable against the work done. For emergency night calls, there may be additional charges."
    },
    {
      question: "Can you fix concealed pipe leaks?",
      answer: "Yes, we have expertise in detecting and fixing concealed pipe leaks using advanced techniques. We ensure minimal wall damage during repair."
    },
    {
      question: "Do you install water purifiers?",
      answer: "Yes, we install all types of water purifiers including RO, UV, and gravity-based systems. We also provide AMC for water purifiers."
    },
    {
      question: "How much does bathroom fitting cost?",
      answer: "Complete bathroom fitting including taps, shower, toilet fitting costs ₹2,500-5,000 depending on the number of fittings and complexity."
    },
  ],
  relatedServices: [
    { name: "Pipe Fitting", href: "/pipe-fitting-vadodara" },
    { name: "Bathroom Fitting", href: "/bathroom-fitting-vadodara" },
    { name: "Water Tank", href: "/water-tank-vadodara" },
    { name: "Drainage Cleaning", href: "/drainage-cleaning-vadodara" },
    { name: "Leak Repair", href: "/leak-repair-vadodara" },
    { name: "Geyser Installation", href: "/geyser-installation-vadodara" },
    { name: "Tap Repair", href: "/tap-repair-vadodara" },
    { name: "Water Pump", href: "/water-pump-vadodara" },
  ],
  areas: [
    { name: "Alkapuri", href: "/plumber-alkapuri-vadodara" },
    { name: "Gotri", href: "/plumber-gotri-vadodara" },
    { name: "Manjalpur", href: "/plumber-manjalpur-vadodara" },
    { name: "Akota", href: "/plumber-akota-vadodara" },
    { name: "Bhayli", href: "/plumber-bhayli-vadodara" },
    { name: "Karelibaug", href: "/plumber-karelibaug-vadodara" },
    { name: "Waghodia Road", href: "/plumber-waghodia-vadodara" },
    { name: "Makarpura", href: "/plumber-makarpura-vadodara" },
    { name: "Chhani", href: "/plumber-chhani-vadodara" },
    { name: "Harni", href: "/plumber-harni-vadodara" },
    { name: "Fatehgunj", href: "/plumber-fatehgunj-vadodara" },
    { name: "Gorwa", href: "/plumber-gorwa-vadodara" },
  ],
};

export default function PlumbingPage() {
  return <HomeServiceTemplate config={config} slug="plumbing-vadodara" />;
}
