import { Metadata } from "next";
import HomeServiceTemplate from "@/components/HomeServiceTemplate";

export const metadata: Metadata = {
  title: "Civil Contractors Vadodara | Best Construction & Building Work",
  description: "Professional civil contractors in Vadodara. Expert construction, building work, tile fitting, masonry, wall construction & renovation services. Call +91 76003 37866",
  keywords: "civil contractors vadodara, construction work vadodara, building contractors vadodara, tile fitting vadodara, masonry vadodara, renovation vadodara",
  openGraph: {
    title: "Civil Contractors Vadodara | Vadodara Mistry",
    description: "Professional civil & construction work in Vadodara. Expert contractors for all building needs.",
    url: "https://vadodaramistry.com/civil-contractors-vadodara",
    type: "website",
  },
};

const config = {
  title: "Civil Construction Services",
  metaTitle: "Civil Contractors Vadodara | Best Construction & Building Work",
  metaDescription: "Professional civil contractors in Vadodara. Expert construction, building work, tile fitting, masonry, wall construction & renovation services.",
  heroTitle: "Best Civil Contractors in Vadodara",
  heroDescription: "Expert civil work and construction services for residential, commercial & industrial projects. Trusted contractors for all your building needs.",
  category: "civil" as const,
  features: [
    "Tile Fitting & Flooring",
    "Wall Construction & Brick Work",
    "Bathroom Renovation",
    "Kitchen Renovation",
    "Waterproofing Work",
    "Plastering & Finishing",
    "Building Construction",
    "RCC Work & Concrete",
    "House Renovation",
    "Commercial Construction",
    "Compound Wall Construction",
    "Stone & Marble Fitting",
  ],
  process: [
    { step: 1, title: "Site Inspection", description: "Free site visit and assessment" },
    { step: 2, title: "Planning & Quote", description: "Detailed work plan with cost estimate" },
    { step: 3, title: "Material Procurement", description: "Quality materials arranged" },
    { step: 4, title: "Construction", description: "Professional execution with supervision" },
  ],
  faqs: [
    {
      question: "What civil work services do you provide in Vadodara?",
      answer: "We provide complete civil work including tile fitting, wall construction, bathroom/kitchen renovation, waterproofing, plastering, RCC work, flooring, masonry, and building construction services across Vadodara."
    },
    {
      question: "How much does tile fitting cost in Vadodara?",
      answer: "Tile fitting charges range from ₹25-50 per sq.ft depending on tile size and pattern. Large format tiles (2x2 or bigger) cost slightly more. We provide free measurement and quotation."
    },
    {
      question: "Do you provide materials or only labor?",
      answer: "We provide both options - labor only if you arrange materials, or complete work including quality materials. We have tie-ups with building material suppliers for competitive rates."
    },
    {
      question: "How long does bathroom renovation take?",
      answer: "A standard bathroom renovation (demolition to finishing) takes 7-12 days depending on scope. This includes tile work, plumbing, fixtures, and finishing. We minimize inconvenience during work."
    },
    {
      question: "Do you work on commercial construction projects?",
      answer: "Yes, we handle commercial projects including office renovation, shop fitting, warehouse construction, and industrial civil work. Contact us for commercial project quotations."
    },
  ],
  relatedServices: [
    { name: "Tile Fitting", href: "/tile-fitting-vadodara" },
    { name: "Bathroom Renovation", href: "/bathroom-renovation-vadodara" },
    { name: "Kitchen Renovation", href: "/kitchen-renovation-vadodara" },
    { name: "Waterproofing", href: "/waterproofing-vadodara" },
    { name: "Plastering Work", href: "/plastering-vadodara" },
    { name: "Flooring Work", href: "/flooring-vadodara" },
    { name: "Masonry Work", href: "/masonry-vadodara" },
    { name: "RCC Construction", href: "/rcc-construction-vadodara" },
  ],
  areas: [
    { name: "Alkapuri", href: "/civil-contractors-alkapuri-vadodara" },
    { name: "Gotri", href: "/civil-contractors-gotri-vadodara" },
    { name: "Manjalpur", href: "/civil-contractors-manjalpur-vadodara" },
    { name: "Akota", href: "/civil-contractors-akota-vadodara" },
    { name: "Bhayli", href: "/civil-contractors-bhayli-vadodara" },
    { name: "Karelibaug", href: "/civil-contractors-karelibaug-vadodara" },
    { name: "Waghodia Road", href: "/civil-contractors-waghodia-vadodara" },
    { name: "Makarpura", href: "/civil-contractors-makarpura-vadodara" },
    { name: "Chhani", href: "/civil-contractors-chhani-vadodara" },
    { name: "Harni", href: "/civil-contractors-harni-vadodara" },
    { name: "Fatehgunj", href: "/civil-contractors-fatehgunj-vadodara" },
    { name: "Nandesari GIDC", href: "/civil-contractors-nandesari-vadodara" },
  ],
};

export default function CivilContractorsVadodaraPage() {
  return <HomeServiceTemplate config={config} slug="civil-contractors-vadodara" />;
}
