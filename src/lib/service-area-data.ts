export const categoryImages: Record<string, { src: string; alt: string }[]> = {
  painting: [
    { src: "/images/services/painting-1.jpg", alt: "Wall Painting Work" },
    { src: "/images/services/painting-2.jpg", alt: "Interior Wall Painting" },
    { src: "/images/services/painting-3.jpg", alt: "Exterior House Painting" },
    { src: "/images/services/painting-4.jpg", alt: "Professional Painter at Work" },
  ],
  civil: [
    { src: "/images/services/civil-1.jpg", alt: "Tile Cutting for Flooring" },
    { src: "/images/services/civil-2.jpg", alt: "Tile Fitting Work" },
    { src: "/images/services/civil-3.jpg", alt: "Wall Tiling Work" },
    { src: "/images/services/civil-4.jpg", alt: "Renovation Work in Progress" },
  ],
  plumbing: [
    { src: "/images/services/plumbing-1.jpg", alt: "Pipe Fitting Work" },
    { src: "/images/services/plumbing-2.jpg", alt: "Plumbing Repair Work" },
    { src: "/images/services/plumbing-3.jpg", alt: "Water Heater Installation" },
    { src: "/images/services/plumbing-4.jpg", alt: "Bathroom Fitting Work" },
  ],
  carpenter: [
    { src: "/images/services/carpenter-1.jpg", alt: "Carpenter Measuring Wood" },
    { src: "/images/services/carpenter-2.jpg", alt: "Carpenter Sawing Wood" },
    { src: "/images/services/carpenter-3.jpg", alt: "Furniture Workshop" },
    { src: "/images/services/carpenter-4.jpg", alt: "Custom Woodwork" },
  ],
  fabrication: [
    { src: "/images/services/fabrication-1.jpg", alt: "Welding Work" },
    { src: "/images/services/fabrication-2.jpg", alt: "Metal Grinding Work" },
    { src: "/images/services/fabrication-3.jpg", alt: "Metal Gate Design" },
    { src: "/images/services/fabrication-4.jpg", alt: "Fabricated Gate Work" },
  ],
  solar: [
    { src: "/images/services/solar-1.jpg", alt: "Solar Panel Technician at Work" },
    { src: "/images/services/solar-2.jpg", alt: "Solar Panel Installation on Roof" },
    { src: "/images/services/solar-3.jpg", alt: "Solar Panel Setup" },
    { src: "/images/services/solar-4.jpg", alt: "Rooftop Solar Installation" },
  ],
};

export interface ServiceAreaService {
  slug: string;
  name: string;
  category: "painting" | "civil" | "plumbing" | "carpenter" | "fabrication" | "solar";
  description: string;
  keywords: string[];
}

export const mainServices: ServiceAreaService[] = [
  { slug: "pop-false-ceiling", name: "POP False Ceiling", category: "painting", description: "Professional POP false ceiling installation and design", keywords: ["POP ceiling", "false ceiling", "gypsum ceiling", "ceiling design", "LED false ceiling"] },
  { slug: "wall-painting", name: "Wall Painting", category: "painting", description: "Expert interior and exterior wall painting services", keywords: ["painting", "wall painting", "interior painting", "exterior painting", "house painting"] },
  { slug: "texture-painting", name: "Texture Painting", category: "painting", description: "Decorative texture and designer painting services", keywords: ["texture paint", "designer painting", "wall texture", "3D painting", "metallic paint"] },
  { slug: "tile-fitting", name: "Tile Fitting", category: "civil", description: "Professional tile fitting and flooring services", keywords: ["tile fitting", "floor tiles", "wall tiles", "marble fitting", "vitrified tiles"] },
  { slug: "waterproofing", name: "Waterproofing", category: "civil", description: "Complete waterproofing solutions for home and building", keywords: ["waterproofing", "terrace waterproofing", "bathroom waterproofing", "roof waterproofing", "seepage treatment"] },
  { slug: "bathroom-renovation", name: "Bathroom Renovation", category: "civil", description: "Complete bathroom renovation and remodeling services", keywords: ["bathroom renovation", "bathroom remodel", "bathroom fitting", "sanitary work", "CP fitting"] },
  { slug: "plumbing", name: "Plumbing Services", category: "plumbing", description: "Complete plumbing, pipe fitting and repair services", keywords: ["plumber", "plumbing", "pipe fitting", "leak repair", "drainage work"] },
  { slug: "geyser-repair", name: "Geyser Repair", category: "plumbing", description: "Water heater and geyser repair and installation", keywords: ["geyser repair", "water heater", "geyser installation", "bajaj geyser", "havells geyser"] },
  { slug: "modular-kitchen", name: "Modular Kitchen", category: "carpenter", description: "Custom modular kitchen design and installation", keywords: ["modular kitchen", "kitchen design", "kitchen cabinet", "L shaped kitchen", "parallel kitchen"] },
  { slug: "wardrobe", name: "Wardrobe Design", category: "carpenter", description: "Custom wardrobe and closet design services", keywords: ["wardrobe", "wardrobe design", "sliding wardrobe", "bedroom wardrobe", "walk-in closet"] },
  { slug: "carpenter", name: "Carpenter Services", category: "carpenter", description: "Professional carpentry and furniture services", keywords: ["carpenter", "furniture", "woodwork", "door fitting", "wood polish"] },
  { slug: "gate-fabrication", name: "Gate Fabrication", category: "fabrication", description: "Custom gate design and fabrication services", keywords: ["gate fabrication", "main gate", "MS gate", "SS gate", "iron gate"] },
  { slug: "ss-railing", name: "SS Railing", category: "fabrication", description: "Stainless steel railing design and installation", keywords: ["SS railing", "steel railing", "balcony railing", "staircase railing", "glass railing"] },
  { slug: "window-grill", name: "Window Grill", category: "fabrication", description: "Safety grill and window grill fabrication", keywords: ["window grill", "safety grill", "balcony grill", "door grill", "designer grill"] },
  { slug: "solar-installation", name: "Solar Installation", category: "solar", description: "Rooftop solar panel installation services", keywords: ["solar installation", "solar panel", "rooftop solar", "home solar", "commercial solar"] },
];

export const areas = [
  { slug: "alkapuri", name: "Alkapuri" },
  { slug: "gotri", name: "Gotri" },
  { slug: "manjalpur", name: "Manjalpur" },
  { slug: "akota", name: "Akota" },
  { slug: "bhayli", name: "Bhayli" },
  { slug: "karelibaug", name: "Karelibaug" },
  { slug: "waghodia-road", name: "Waghodia Road" },
  { slug: "makarpura", name: "Makarpura" },
  { slug: "chhani", name: "Chhani" },
  { slug: "harni", name: "Harni" },
  { slug: "fatehgunj", name: "Fatehgunj" },
  { slug: "gorwa", name: "Gorwa" },
  { slug: "sayajigunj", name: "Sayajigunj" },
  { slug: "tarsali", name: "Tarsali" },
  { slug: "ajwa-road", name: "Ajwa Road" },
  { slug: "subhanpura", name: "Subhanpura" },
  { slug: "tandalja", name: "Tandalja" },
  { slug: "sama", name: "Sama" },
  { slug: "vasna", name: "Vasna" },
  { slug: "nizampura", name: "Nizampura" },
  { slug: "atladara", name: "Atladara" },
  { slug: "sevasi", name: "Sevasi" },
  { slug: "vadsar", name: "Vadsar" },
  { slug: "race-course", name: "Race Course" },
  { slug: "pratap-nagar", name: "Pratap Nagar" },
  { slug: "ellora-park", name: "Ellora Park" },
  { slug: "new-vip-road", name: "New VIP Road" },
  { slug: "old-padra-road", name: "Old Padra Road" },
  { slug: "maneja", name: "Maneja" },
  { slug: "gotri-road", name: "Gotri Road" },
  { slug: "kalali", name: "Kalali" },
  { slug: "diwalipura", name: "Diwalipura" },
  { slug: "raopura", name: "Raopura" },
  { slug: "wadi", name: "Wadi" },
  { slug: "danteshwar", name: "Danteshwar" },
  { slug: "jetalpur", name: "Jetalpur" },
  { slug: "sindhrot", name: "Sindhrot" },
  { slug: "laxmipura", name: "Laxmipura" },
  { slug: "navapura", name: "Navapura" },
  { slug: "panigate", name: "Panigate" },
];

// Note: Tailwind's JIT scanner needs full literal class strings — it can't resolve
// `text-${color}-500` at build time — so every class variant used per category is
// spelled out here instead of interpolated at the call site.
export const categoryConfig = {
  painting: {
    color: "orange",
    gradient: "from-orange-500 to-orange-600",
    iconText: "text-orange-500",
    stepBg: "bg-orange-500",
    contactHoverText: "hover:text-orange-400",
    areaHoverBg: "hover:bg-orange-50",
    areaHoverBorder: "hover:border-orange-500",
  },
  civil: {
    color: "amber",
    gradient: "from-amber-500 to-amber-600",
    iconText: "text-amber-500",
    stepBg: "bg-amber-500",
    contactHoverText: "hover:text-amber-400",
    areaHoverBg: "hover:bg-amber-50",
    areaHoverBorder: "hover:border-amber-500",
  },
  plumbing: {
    color: "blue",
    gradient: "from-blue-500 to-blue-600",
    iconText: "text-blue-500",
    stepBg: "bg-blue-500",
    contactHoverText: "hover:text-blue-400",
    areaHoverBg: "hover:bg-blue-50",
    areaHoverBorder: "hover:border-blue-500",
  },
  carpenter: {
    color: "green",
    gradient: "from-green-600 to-green-700",
    iconText: "text-green-500",
    stepBg: "bg-green-500",
    contactHoverText: "hover:text-green-400",
    areaHoverBg: "hover:bg-green-50",
    areaHoverBorder: "hover:border-green-500",
  },
  fabrication: {
    color: "gray",
    gradient: "from-gray-600 to-gray-700",
    iconText: "text-gray-500",
    stepBg: "bg-gray-500",
    contactHoverText: "hover:text-gray-400",
    areaHoverBg: "hover:bg-gray-50",
    areaHoverBorder: "hover:border-gray-500",
  },
  solar: {
    color: "yellow",
    gradient: "from-yellow-500 to-orange-500",
    iconText: "text-yellow-500",
    stepBg: "bg-yellow-500",
    contactHoverText: "hover:text-yellow-400",
    areaHoverBg: "hover:bg-yellow-50",
    areaHoverBorder: "hover:border-yellow-500",
  },
} as const;

export function serviceAreaSlug(service: ServiceAreaService, areaName: string | null, isCity: boolean) {
  return isCity
    ? `${service.slug}-in-vadodara`
    : `${service.slug}-${areaName!.toLowerCase().replace(/\s+/g, "-")}-vadodara`;
}

export function generateFAQs(service: ServiceAreaService, areaName: string | null, isCity: boolean) {
  const location = isCity ? "Vadodara" : `${areaName}, Vadodara`;
  return [
    { question: `What is the cost of ${service.name} in ${location}?`, answer: `The cost of ${service.name} in ${location} depends on project size, materials, and complexity. We offer competitive rates starting from affordable packages. Contact us at +91 93139 82980 for a free quote based on your specific requirements.` },
    { question: `How long does ${service.name} take in ${location}?`, answer: `${service.name} project duration in ${location} varies based on scope. Small projects take 1-3 days, medium projects 3-7 days, and larger projects may take 1-2 weeks. We provide accurate timelines during consultation.` },
    { question: `Do you provide ${service.name} warranty in ${location}?`, answer: `Yes, we provide warranty on all ${service.name} work in ${location}. Workmanship warranty ranges from 6 months to 2 years depending on the service type. Material warranties are as per manufacturer terms.` },
    { question: `What materials do you use for ${service.name} in ${location}?`, answer: `We use premium quality materials from trusted brands for ${service.name} in ${location}. All materials are ISI certified and come with manufacturer warranty. We can also work with client-provided materials.` },
    { question: `How to book ${service.name} in ${location}?`, answer: `Booking ${service.name} in ${location} is easy! Call us at +91 93139 82980, WhatsApp us, or fill the booking form on this page. Our team will visit for inspection and provide a detailed quote within 24 hours.` },
    { question: `Are your ${service.name} workers trained in ${location}?`, answer: `Yes, all our ${service.name} workers serving ${location} are professionally trained with 5-10+ years of experience. They undergo regular skill upgrades and follow safety protocols for quality work.` },
    { question: `What areas near ${areaName || "Vadodara"} do you cover for ${service.name}?`, answer: `We provide ${service.name} across all areas of Vadodara including ${areas.slice(0, 8).map((a) => a.name).join(", ")} and more. Our service network covers the entire Vadodara district.` },
    { question: `Do you offer free estimates for ${service.name} in ${location}?`, answer: `Yes, we offer completely free site visits and estimates for ${service.name} in ${location}. Our expert will assess your requirements and provide a detailed quotation with no obligation.` },
    { question: `What makes your ${service.name} different in ${location}?`, answer: `Our ${service.name} in ${location} stands out due to: 10+ years experience, trained professionals, premium materials, on-time delivery, transparent pricing, and after-service support. We've completed 5000+ projects successfully.` },
    { question: `Can I see your previous ${service.name} work in ${location}?`, answer: `Absolutely! We maintain a portfolio of completed ${service.name} projects in ${location}. Request to see photos during consultation, or visit our completed project sites nearby with prior appointment.` },
  ];
}

const brandMap: Record<string, string> = {
  painting: "Asian Paints, Berger, Nerolac",
  civil: "Kajaria, Somany, Dr. Fixit",
  plumbing: "Astral, Supreme, Finolex",
  carpenter: "Greenply, Century, Merino",
  fabrication: "Tata, SAIL, JSW",
  solar: "Tata Solar, Adani, Waaree",
};

export function generateExtendedContent(service: ServiceAreaService, areaName: string | null, isCity: boolean) {
  const location = isCity ? "Vadodara" : `${areaName}, Vadodara`;
  const locationShort = isCity ? "Vadodara" : (areaName as string);

  return {
    intro: `Looking for professional ${service.name} in ${location}? Vadodara Mistry provides expert ${service.name.toLowerCase()} services with over 10 years of experience and 5000+ satisfied customers. Our team of skilled professionals delivers top-quality work at competitive prices, ensuring complete customer satisfaction with every project in ${locationShort}.`,
    detailed: `${service.name} is one of our core specialties at Vadodara Mistry. In ${location}, we have established ourselves as the most trusted name for ${service.keywords.slice(0, 3).join(", ")} and related services. Our expertise covers residential, commercial, and industrial projects of all sizes.\n\nOur ${service.name.toLowerCase()} services in ${locationShort} include comprehensive solutions tailored to your specific needs. Whether you're building a new home, renovating your existing space, or need repairs and maintenance, our experienced team handles every project with precision and care. We use only premium quality materials from trusted brands to ensure longevity and superior finish.\n\nWhat sets us apart in ${location} is our commitment to excellence. From the initial consultation to project completion, we maintain transparent communication, stick to agreed timelines, and deliver results that exceed expectations. Our pricing is competitive and honest - no hidden charges or surprise costs.`,
    localContent: `${service.name} Services Across ${locationShort}:\n\nWe serve all localities in and around ${locationShort}. Our clients in ${location} appreciate our quick response time and local presence. Being a Vadodara-based company, we understand the unique requirements of homes and businesses in this area.\n\n${locationShort} has witnessed significant real estate growth, and our ${service.name.toLowerCase()} services have contributed to beautifying numerous residential complexes, independent houses, offices, and commercial establishments here. From modern apartments to traditional Gujarati homes, we adapt our work to match every architectural style.\n\nOur service vehicle reaches ${locationShort} within 2-4 hours of booking confirmation. Emergency services are available for urgent requirements. We maintain a team dedicated to ${location} to ensure faster service delivery.`,
    conclusion: `Ready to transform your space with professional ${service.name} in ${location}? Contact Vadodara Mistry today! Call us at +91 93139 82980 or WhatsApp for instant response. Our team is ready to serve you with the best ${service.name.toLowerCase()} solutions at competitive prices.\n\nVisit our office at Shop No. 12, Shreeji Complex, Near Sayajigunj Circle, Sayajigunj, Vadodara, Gujarat 390005. Working hours: Monday to Saturday 8AM-8PM, Sunday 9AM-6PM.\n\nBook your free consultation now and join our 5000+ satisfied customers in ${locationShort} who trust Vadodara Mistry for their home service needs!`,
    brands: brandMap[service.category],
  };
}
