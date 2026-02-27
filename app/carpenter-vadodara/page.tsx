import { Metadata } from "next";
import HomeServiceTemplate from "@/components/HomeServiceTemplate";

export const metadata: Metadata = {
  title: "Carpenter in Vadodara | Best Furniture & Woodwork Services",
  description: "Professional carpenter services in Vadodara. Expert furniture making, modular kitchen, wardrobe, wooden work, door fitting & repair. Call +91 76003 37866",
  keywords: "carpenter vadodara, furniture maker vadodara, modular kitchen vadodara, wardrobe vadodara, woodwork vadodara, door fitting vadodara",
  openGraph: {
    title: "Carpenter in Vadodara | Vadodara Mistry",
    description: "Professional carpenter & furniture services in Vadodara. Custom furniture and woodwork.",
    url: "https://vadodaramistry.com/carpenter-vadodara",
    type: "website",
  },
};

const config = {
  title: "Carpenter & Furniture Services",
  metaTitle: "Carpenter in Vadodara | Best Furniture & Woodwork Services",
  metaDescription: "Professional carpenter services in Vadodara. Expert furniture making, modular kitchen, wardrobe, wooden work, door fitting & repair.",
  heroTitle: "Best Carpenter Services in Vadodara",
  heroDescription: "Expert carpenters for custom furniture, modular kitchen, wardrobes, and all woodwork needs. Quality craftsmanship at affordable prices.",
  category: "carpenter" as const,
  features: [
    "Modular Kitchen Design & Installation",
    "Wardrobe & Cupboard Making",
    "Door & Window Fitting",
    "TV Unit & Entertainment Center",
    "Bed & Bedroom Furniture",
    "Office Furniture",
    "Kitchen Cabinet Work",
    "Wooden Partition",
    "Furniture Repair",
    "Polish & Laminate Work",
    "Sofa Repair & Reupholstery",
    "Custom Furniture Design",
  ],
  process: [
    { step: 1, title: "Discussion", description: "Understand your requirements" },
    { step: 2, title: "Design", description: "Create design with measurements" },
    { step: 3, title: "Fabrication", description: "Quality material & craftsmanship" },
    { step: 4, title: "Installation", description: "On-site fitting & finishing" },
  ],
  faqs: [
    {
      question: "What is the cost of modular kitchen in Vadodara?",
      answer: "Modular kitchen costs range from ₹800-1,800 per sq.ft depending on material (MDF, Plywood, BWR), finish (laminate, acrylic, membrane), and accessories. A standard 100 sq.ft kitchen costs ₹80,000-1,80,000."
    },
    {
      question: "Do you use marine plywood or MDF?",
      answer: "We work with all materials - Marine Plywood, BWR Plywood, MDF, HDF, and Particle Board. We recommend the best material based on your budget and requirements."
    },
    {
      question: "How long does wardrobe installation take?",
      answer: "A standard built-in wardrobe takes 5-8 days from measurement to installation. Sliding wardrobes may take slightly longer. We ensure minimal disruption during work."
    },
    {
      question: "Do you repair old furniture?",
      answer: "Yes, we provide furniture repair services including polish, laminate change, hinge replacement, handle change, and structural repairs. Repair costs depend on the condition and work required."
    },
    {
      question: "Can you design custom furniture?",
      answer: "Yes, we specialize in custom furniture design. Show us a reference image or describe your requirement, and we'll create exactly what you need with quality materials."
    },
  ],
  relatedServices: [
    { name: "Modular Kitchen", href: "/modular-kitchen-vadodara" },
    { name: "Wardrobe Design", href: "/wardrobe-vadodara" },
    { name: "TV Unit", href: "/tv-unit-vadodara" },
    { name: "Door Fitting", href: "/door-fitting-vadodara" },
    { name: "Furniture Repair", href: "/furniture-repair-vadodara" },
    { name: "Kitchen Cabinet", href: "/kitchen-cabinet-vadodara" },
    { name: "Wood Polish", href: "/wood-polish-vadodara" },
    { name: "Sofa Repair", href: "/sofa-repair-vadodara" },
  ],
  areas: [
    { name: "Alkapuri", href: "/carpenter-alkapuri-vadodara" },
    { name: "Gotri", href: "/carpenter-gotri-vadodara" },
    { name: "Manjalpur", href: "/carpenter-manjalpur-vadodara" },
    { name: "Akota", href: "/carpenter-akota-vadodara" },
    { name: "Bhayli", href: "/carpenter-bhayli-vadodara" },
    { name: "Karelibaug", href: "/carpenter-karelibaug-vadodara" },
    { name: "Waghodia Road", href: "/carpenter-waghodia-vadodara" },
    { name: "Makarpura", href: "/carpenter-makarpura-vadodara" },
    { name: "Chhani", href: "/carpenter-chhani-vadodara" },
    { name: "Harni", href: "/carpenter-harni-vadodara" },
    { name: "Fatehgunj", href: "/carpenter-fatehgunj-vadodara" },
    { name: "Gorwa", href: "/carpenter-gorwa-vadodara" },
  ],
};

export default function CarpenterVadodaraPage() {
  return <HomeServiceTemplate config={config} slug="carpenter-vadodara" />;
}
