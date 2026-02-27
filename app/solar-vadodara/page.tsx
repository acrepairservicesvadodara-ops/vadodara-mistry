import { Metadata } from "next";
import HomeServiceTemplate from "@/components/HomeServiceTemplate";

export const metadata: Metadata = {
  title: "Solar Panel Installation in Vadodara | Solar System for Home",
  description: "Professional solar panel installation in Vadodara. On-grid & off-grid solar systems with government subsidy. 25-year warranty. Call +91 76003 37866",
  keywords: "solar panel vadodara, solar installation vadodara, solar system vadodara, rooftop solar vadodara, solar subsidy vadodara, solar inverter vadodara",
  openGraph: {
    title: "Solar Panel Installation in Vadodara | Vadodara Mistry",
    description: "Professional solar panel installation with government subsidy assistance.",
    url: "https://vadodaramistry.com/solar-vadodara",
    type: "website",
  },
};

const config = {
  title: "Solar Installation Services",
  metaTitle: "Solar Panel Installation in Vadodara | Solar System for Home",
  metaDescription: "Professional solar panel installation in Vadodara. On-grid & off-grid solar systems with government subsidy.",
  heroTitle: "Best Solar Panel Installation in Vadodara",
  heroDescription: "Go green with solar energy. Professional installation with government subsidy assistance. Save up to 90% on electricity bills.",
  category: "solar" as const,
  features: [
    "On-Grid Solar System",
    "Off-Grid Solar System",
    "Hybrid Solar System",
    "Rooftop Solar Installation",
    "Solar Panel Cleaning",
    "Solar Inverter Installation",
    "Net Metering Setup",
    "Government Subsidy Assistance",
    "Solar Battery Installation",
    "Solar Water Heater",
    "Solar Street Light",
    "Solar System AMC",
  ],
  pricing: [
    { service: "1kW Solar System", price: "₹55,000 - ₹65,000" },
    { service: "2kW Solar System", price: "₹95,000 - ₹1,10,000" },
    { service: "3kW Solar System", price: "₹1,40,000 - ₹1,60,000" },
    { service: "5kW Solar System", price: "₹2,20,000 - ₹2,50,000" },
    { service: "10kW Solar System", price: "₹4,20,000 - ₹4,80,000" },
    { service: "Solar Panel Cleaning (per panel)", price: "₹50 - ₹100" },
    { service: "Solar Inverter (per kW)", price: "₹8,000 - ₹12,000" },
    { service: "Battery (per kWh)", price: "₹10,000 - ₹15,000" },
  ],
  process: [
    { step: 1, title: "Site Survey", description: "Rooftop assessment & load analysis" },
    { step: 2, title: "Design", description: "System design & quotation" },
    { step: 3, title: "Installation", description: "Professional panel installation" },
    { step: 4, title: "Net Metering", description: "DISCOM approval & commissioning" },
  ],
  faqs: [
    {
      question: "What is the cost of 3kW solar system in Vadodara?",
      answer: "A 3kW on-grid solar system costs ₹1,40,000-1,60,000 before subsidy. After PM Surya Ghar Yojana subsidy of ₹43,764, the effective cost is around ₹1,00,000-1,20,000."
    },
    {
      question: "How much electricity does solar panel generate?",
      answer: "In Vadodara, 1kW solar system generates approximately 4-5 units per day or 120-150 units per month. A 3kW system can power a typical home completely."
    },
    {
      question: "What is PM Surya Ghar solar subsidy?",
      answer: "Under PM Surya Ghar Yojana, you get ₹14,588 subsidy for 1kW, ₹29,176 for 2kW, and ₹43,764 for 3kW or above rooftop solar system. We handle complete subsidy paperwork."
    },
    {
      question: "What is the warranty on solar panels?",
      answer: "Solar panels come with 25-year performance warranty (80% output guaranteed). Inverters have 5-year warranty. We provide free service for 1 year after installation."
    },
    {
      question: "Do you help with net metering approval?",
      answer: "Yes, we handle complete net metering process including GUVNL application, meter installation, and DISCOM approval. This takes 2-4 weeks after installation."
    },
  ],
  relatedServices: [
    { name: "On-Grid Solar", href: "/on-grid-solar-vadodara" },
    { name: "Off-Grid Solar", href: "/off-grid-solar-vadodara" },
    { name: "Solar Subsidy", href: "/solar-subsidy-vadodara" },
    { name: "Solar Panel Cleaning", href: "/solar-panel-cleaning-vadodara" },
    { name: "Solar Inverter", href: "/solar-inverter-vadodara" },
    { name: "Net Metering", href: "/net-metering-vadodara" },
    { name: "Solar Battery", href: "/solar-battery-vadodara" },
    { name: "Rooftop Solar", href: "/rooftop-solar-vadodara" },
  ],
  areas: [
    { name: "Alkapuri", href: "/solar-alkapuri-vadodara" },
    { name: "Gotri", href: "/solar-gotri-vadodara" },
    { name: "Manjalpur", href: "/solar-manjalpur-vadodara" },
    { name: "Akota", href: "/solar-akota-vadodara" },
    { name: "Bhayli", href: "/solar-bhayli-vadodara" },
    { name: "Karelibaug", href: "/solar-karelibaug-vadodara" },
    { name: "Waghodia Road", href: "/solar-waghodia-vadodara" },
    { name: "Makarpura", href: "/solar-makarpura-vadodara" },
    { name: "Chhani", href: "/solar-chhani-vadodara" },
    { name: "Harni", href: "/solar-harni-vadodara" },
    { name: "Fatehgunj", href: "/solar-fatehgunj-vadodara" },
    { name: "Gorwa", href: "/solar-gorwa-vadodara" },
  ],
};

export default function SolarPage() {
  return <HomeServiceTemplate config={config} slug="solar-vadodara" />;
}
