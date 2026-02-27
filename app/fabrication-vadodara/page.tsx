import { Metadata } from "next";
import HomeServiceTemplate from "@/components/HomeServiceTemplate";

export const metadata: Metadata = {
  title: "Fabrication Work Vadodara | Steel & Metal Fabrication Services",
  description: "Professional fabrication services in Vadodara. Expert welding, steel fabrication, gate making, grill work, railing & MS fabrication. Call +91 76003 37866",
  keywords: "fabrication vadodara, welding vadodara, steel fabrication vadodara, gate making vadodara, grill work vadodara, railing vadodara",
  openGraph: {
    title: "Fabrication Work Vadodara | Vadodara Mistry",
    description: "Professional steel & metal fabrication in Vadodara. Expert welding and fabrication work.",
    url: "https://vadodaramistry.com/fabrication-vadodara",
    type: "website",
  },
};

const config = {
  title: "Fabrication & Welding Services",
  metaTitle: "Fabrication Work Vadodara | Steel & Metal Fabrication Services",
  metaDescription: "Professional fabrication services in Vadodara. Expert welding, steel fabrication, gate making, grill work, railing & MS fabrication.",
  heroTitle: "Best Fabrication Work in Vadodara",
  heroDescription: "Expert metal fabrication, welding, and steel work for residential, commercial & industrial needs. Quality craftsmanship with durable materials.",
  category: "fabrication" as const,
  features: [
    "MS Gate Fabrication",
    "Window Grill Work",
    "Safety Grill Installation",
    "Stainless Steel Railing",
    "Iron Staircase",
    "Shed Fabrication",
    "Industrial Fabrication",
    "Welding Repair Work",
    "Steel Structure",
    "Main Gate Design",
    "Balcony Railing",
    "Rolling Shutter",
  ],
  pricing: [
    { service: "MS Main Gate (per kg)", price: "₹75 - ₹120" },
    { service: "Window Grill (per sq.ft)", price: "₹80 - ₹150" },
    { service: "SS Railing (per running ft)", price: "₹350 - ₹650" },
    { service: "Safety Grill (per sq.ft)", price: "₹90 - ₹180" },
    { service: "Shed Structure (per sq.ft)", price: "₹60 - ₹120" },
    { service: "Iron Staircase (complete)", price: "₹15,000 onwards" },
    { service: "Welding Repair", price: "₹300 onwards" },
    { service: "Rolling Shutter (per sq.ft)", price: "₹100 - ₹180" },
  ],
  process: [
    { step: 1, title: "Site Visit", description: "Measurement and design discussion" },
    { step: 2, title: "Design & Quote", description: "Custom design with pricing" },
    { step: 3, title: "Fabrication", description: "Workshop fabrication with quality materials" },
    { step: 4, title: "Installation", description: "On-site installation & finishing" },
  ],
  faqs: [
    {
      question: "What types of fabrication work do you handle?",
      answer: "We handle all types of metal fabrication including MS gates, window grills, safety grills, SS railings, iron staircases, industrial sheds, steel structures, and custom fabrication work for residential and commercial projects."
    },
    {
      question: "What is the cost of MS gate in Vadodara?",
      answer: "MS gate costs ₹75-120 per kg depending on design complexity. A standard main gate weighing 80-120 kg costs approximately ₹8,000-15,000 including installation. Designer gates cost more."
    },
    {
      question: "Do you work with stainless steel?",
      answer: "Yes, we do SS (stainless steel) work including railings, gates, kitchen work, and custom fabrication. SS 304 grade is commonly used for residential work while SS 316 is used for industrial applications."
    },
    {
      question: "Can you fabricate industrial structures?",
      answer: "Yes, we have experience in industrial fabrication including factory sheds, mezzanine floors, platforms, conveyors, tanks, and structural steel work. We serve industrial areas like Makarpura GIDC and Nandesari GIDC."
    },
    {
      question: "How long does gate fabrication take?",
      answer: "A standard MS gate takes 3-5 days for fabrication and installation. Complex designer gates may take 7-10 days. We ensure quality work with proper finishing including primer and paint."
    },
  ],
  relatedServices: [
    { name: "Gate Fabrication", href: "/gate-fabrication-vadodara" },
    { name: "Window Grill", href: "/window-grill-vadodara" },
    { name: "SS Railing", href: "/ss-railing-vadodara" },
    { name: "Safety Grill", href: "/safety-grill-vadodara" },
    { name: "Welding Work", href: "/welding-vadodara" },
    { name: "Shed Fabrication", href: "/shed-fabrication-vadodara" },
    { name: "Iron Stairs", href: "/iron-staircase-vadodara" },
    { name: "Rolling Shutter", href: "/rolling-shutter-vadodara" },
  ],
  areas: [
    { name: "Alkapuri", href: "/fabrication-alkapuri-vadodara" },
    { name: "Gotri", href: "/fabrication-gotri-vadodara" },
    { name: "Manjalpur", href: "/fabrication-manjalpur-vadodara" },
    { name: "Makarpura", href: "/fabrication-makarpura-vadodara" },
    { name: "Makarpura GIDC", href: "/fabrication-makarpura-gidc-vadodara" },
    { name: "Nandesari GIDC", href: "/fabrication-nandesari-gidc-vadodara" },
    { name: "Waghodia GIDC", href: "/fabrication-waghodia-gidc-vadodara" },
    { name: "Por Ramangamdi", href: "/fabrication-por-vadodara" },
    { name: "Savli Manjusar", href: "/fabrication-savli-vadodara" },
    { name: "Bhayli", href: "/fabrication-bhayli-vadodara" },
    { name: "Karelibaug", href: "/fabrication-karelibaug-vadodara" },
    { name: "Gorwa", href: "/fabrication-gorwa-vadodara" },
  ],
};

export default function FabricationVadodaraPage() {
  return <HomeServiceTemplate config={config} slug="fabrication-vadodara" />;
}
