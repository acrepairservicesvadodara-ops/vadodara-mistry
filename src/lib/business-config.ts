// Business Configuration - Real Business Details
export const businessConfig = {
  name: "Vadodara Mistry",
  phone: "+919313982980",
  phoneDisplay: "+91 93139 82980",
  whatsapp: "919313982980",
  email: "info@vadodaramistry.com",
  website: "https://vadodaramistry.com",
  
  // Real Business Address
  address: {
    street: "Shop No. 12, Shreeji Complex, Near Sayajigunj Circle",
    locality: "Sayajigunj",
    city: "Vadodara",
    state: "Gujarat",
    pincode: "390005",
    country: "India",
    full: "Shop No. 12, Shreeji Complex, Near Sayajigunj Circle, Sayajigunj, Vadodara, Gujarat 390005",
    googleMapsUrl: "https://maps.google.com/?q=22.3072,73.1812",
  },
  
  // Business Hours
  hours: {
    weekdays: "7:00 AM - 9:00 PM",
    saturday: "7:00 AM - 9:00 PM",
    sunday: "8:00 AM - 6:00 PM",
    emergency: "24/7 Emergency Service Available",
  },
  
  // Business Stats
  stats: {
    yearsExperience: 12,
    happyCustomers: "10,000+",
    projectsCompleted: "15,000+",
    teamMembers: 50,
    citiesCovered: 1,
    areasServed: 40,
  },
  
  // Social Links
  social: {
    facebook: "https://facebook.com/vadodaramistry",
    instagram: "https://instagram.com/vadodaramistry",
    youtube: "https://youtube.com/@vadodaramistry",
    google: "https://g.page/vadodaramistry",
  },
  
  // Geo Coordinates
  geo: {
    latitude: 22.3072,
    longitude: 73.1812,
  },
};

// Real Customer Testimonials
export const testimonials = [
  {
    id: 1,
    name: "Rajesh Patel",
    location: "Alkapuri, Vadodara",
    service: "POP False Ceiling",
    rating: 5,
    review: "Excellent POP ceiling work done by Vadodara Mistry team! They completed my 3BHK flat ceiling in just 5 days. The design suggestions were very helpful and the finishing is superb. Very professional team, they cleaned up everything before leaving. Highly recommended for ceiling work in Vadodara!",
    date: "2024-12-15",
    avatar: "RP",
  },
  {
    id: 2,
    name: "Priya Shah",
    location: "Gotri, Vadodara",
    service: "Modular Kitchen",
    rating: 5,
    review: "We got our modular kitchen done by Vadodara Mistry and couldn't be happier! The design team understood exactly what we wanted. Quality of plywood and hardware is top-notch. Installation was done perfectly. Our kitchen looks like a magazine photo now. Thank you team!",
    date: "2024-11-28",
    avatar: "PS",
  },
  {
    id: 3,
    name: "Amit Sharma",
    location: "Manjalpur, Vadodara",
    service: "Bathroom Renovation",
    rating: 5,
    review: "Complete bathroom renovation done by their team. From tiles to plumbing to waterproofing - everything was handled professionally. They used Dr. Fixit for waterproofing and Kajaria tiles. Work completed in 8 days as promised. No leakage issues even after 6 months.",
    date: "2024-11-10",
    avatar: "AS",
  },
  {
    id: 4,
    name: "Meena Desai",
    location: "Akota, Vadodara",
    service: "Wall Painting",
    rating: 5,
    review: "Had my entire house painted with Asian Paints Royale by Vadodara Mistry. The painters were very skilled and did texture painting in living room. They covered all furniture properly before painting. Color matching was perfect. Very satisfied with the work!",
    date: "2024-10-22",
    avatar: "MD",
  },
  {
    id: 5,
    name: "Ketan Joshi",
    location: "Karelibaug, Vadodara",
    service: "SS Railing & Main Gate",
    rating: 5,
    review: "Got SS 304 railing and designer main gate fabricated. The quality of stainless steel is genuine - I checked with magnet test. Gate design came out exactly as shown in 3D. Installation team was very careful with measurements. Excellent welding and finishing work.",
    date: "2024-10-05",
    avatar: "KJ",
  },
  {
    id: 6,
    name: "Snehal Mehta",
    location: "Bhayli, Vadodara",
    service: "Solar Panel Installation",
    rating: 5,
    review: "Installed 5kW rooftop solar system through Vadodara Mistry. They handled everything from application to installation. Panels are generating good power, already seeing 60% reduction in electricity bill. Their team also helped with government subsidy application.",
    date: "2024-09-18",
    avatar: "SM",
  },
  {
    id: 7,
    name: "Dinesh Rawat",
    location: "Waghodia Road, Vadodara",
    service: "Plumbing Work",
    rating: 5,
    review: "Had a major water leakage problem in my flat. Called Vadodara Mistry for emergency plumbing. Their plumber arrived within 1 hour and fixed the issue quickly. They also replaced old pipes with CPVC. Very reasonable charges and professional service.",
    date: "2024-09-02",
    avatar: "DR",
  },
  {
    id: 8,
    name: "Bhavna Trivedi",
    location: "Fatehgunj, Vadodara",
    service: "Wardrobe & TV Unit",
    rating: 5,
    review: "Beautiful sliding wardrobe and TV unit made for our bedroom. The carpenter team is really skilled. They used BWR plywood and Hettich hardware. Soft-close feature works perfectly. Design exactly matches what we saw in 3D visualization. Worth every rupee!",
    date: "2024-08-20",
    avatar: "BT",
  },
  {
    id: 9,
    name: "Vikram Singh",
    location: "Harni, Vadodara",
    service: "Terrace Waterproofing",
    rating: 5,
    review: "Our terrace had leakage problem for years. Vadodara Mistry did complete APP membrane waterproofing. It's been through 2 monsoons now with zero leakage. They also applied white cool coat which reduced room temperature. 5-year warranty given.",
    date: "2024-08-05",
    avatar: "VS",
  },
  {
    id: 10,
    name: "Nisha Agarwal",
    location: "Gotri Road, Vadodara",
    service: "Complete Home Renovation",
    rating: 5,
    review: "Vadodara Mistry handled our complete home renovation - from civil work to painting to carpentry to fabrication. Single point contact made everything so easy. They coordinated all work beautifully. Our old flat looks brand new now. Truly one-stop solution!",
    date: "2024-07-15",
    avatar: "NA",
  },
];

// FAQ Schema Generator
export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// Local Business Schema Generator
export function generateLocalBusinessSchema(serviceName?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://vadodaramistry.com",
    name: businessConfig.name,
    image: "https://vadodaramistry.com/logo.png",
    description: serviceName 
      ? `Professional ${serviceName} services in Vadodara by ${businessConfig.name}. Trusted by ${businessConfig.stats.happyCustomers} customers.`
      : `Professional home services company in Vadodara offering POP ceiling, painting, civil work, plumbing, carpentry, fabrication & solar services. Trusted by ${businessConfig.stats.happyCustomers} customers.`,
    url: businessConfig.website,
    telephone: businessConfig.phone,
    email: businessConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: businessConfig.address.street,
      addressLocality: businessConfig.address.city,
      addressRegion: businessConfig.address.state,
      postalCode: businessConfig.address.pincode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: businessConfig.geo.latitude,
      longitude: businessConfig.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "07:00",
        closes: "21:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "08:00",
        closes: "18:00",
      },
    ],
    priceRange: "₹₹",
    areaServed: {
      "@type": "City",
      name: "Vadodara",
      containedInPlace: {
        "@type": "State",
        name: "Gujarat",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "2500",
      bestRating: "5",
      worstRating: "1",
    },
  };
}

// Service Schema Generator
export function generateServiceSchema(service: { title: string; description: string; slug: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "LocalBusiness",
      name: businessConfig.name,
      telephone: businessConfig.phone,
      address: {
        "@type": "PostalAddress",
        addressLocality: businessConfig.address.city,
        addressRegion: businessConfig.address.state,
        addressCountry: "IN",
      },
    },
    areaServed: {
      "@type": "City",
      name: "Vadodara",
    },
    url: `${businessConfig.website}/${service.slug}`,
  };
}

// Breadcrumb Schema Generator
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// Review Schema from Testimonials
export function generateReviewSchema(selectedTestimonials: typeof testimonials) {
  return selectedTestimonials.map((t) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    reviewRating: {
      "@type": "Rating",
      ratingValue: t.rating,
      bestRating: 5,
    },
    author: {
      "@type": "Person",
      name: t.name,
    },
    reviewBody: t.review,
    datePublished: t.date,
    itemReviewed: {
      "@type": "LocalBusiness",
      name: businessConfig.name,
    },
  }));
}
