export const serviceCategories = [
  { title: "POP & Painting", services: ["POP False Ceiling", "Wall Painting", "Texture Painting", "Interior Painting"], href: "/pop-false-ceiling-vadodara" },
  { title: "Civil Work", services: ["Tile Fitting", "Waterproofing", "Bathroom Renovation", "Flooring"], href: "/civil-contractors-vadodara" },
  { title: "Plumbing", services: ["Pipe Fitting", "Water Leak Repair", "Geyser Repair", "Drainage Work"], href: "/plumbers-vadodara" },
  { title: "Carpenter", services: ["Modular Kitchen", "Wardrobe", "TV Unit", "Door Fitting"], href: "/carpenter-vadodara" },
  { title: "Fabrication", services: ["Gate Fabrication", "Window Grill", "SS Railing", "Welding Work"], href: "/fabrication-vadodara" },
  { title: "Solar", services: ["Solar Installation", "Solar Cleaning", "Solar AMC", "Inverter Repair"], href: "/solar-maintenance-vadodara" },
];

export function generateAreaFAQs(areaName: string) {
  return [
    { question: `What services does Vadodara Mistry provide in ${areaName}?`, answer: `Vadodara Mistry provides comprehensive home services in ${areaName} including POP false ceiling, wall painting, civil work, plumbing, carpentry, fabrication, and solar services. We've served hundreds of families and businesses in ${areaName} with quality workmanship.` },
    { question: `How quickly can you reach ${areaName} for emergency services?`, answer: `For emergency services in ${areaName}, our team typically arrives within 30-60 minutes. We have professionals stationed across Vadodara to ensure quick response times in all areas including ${areaName}.` },
    { question: `Do you charge extra for services in ${areaName}?`, answer: `No, we do not charge any extra for services in ${areaName}. Our pricing is uniform across all areas of Vadodara. The cost depends only on the scope of work and materials used, not on location.` },
    { question: `What is your service area coverage near ${areaName}?`, answer: `Besides ${areaName}, we serve all nearby localities in Vadodara. Our complete coverage includes 40+ areas across the city, ensuring seamless service no matter where your property is located.` },
    { question: `Can I see examples of your work in ${areaName}?`, answer: `Yes! We've completed numerous projects in ${areaName} and surrounding areas. Contact us and we'll share photos and references from satisfied customers in your area for the type of work you need.` },
    { question: `What are your working hours for ${areaName} services?`, answer: `We work 7 days a week from 7 AM to 9 PM in ${areaName}. For emergencies, we provide 24/7 plumbing services. Weekend and holiday services are available at no extra charge.` },
    { question: `How do I book a service in ${areaName}?`, answer: `Booking is easy! Call us at +91 93139 82980, send a WhatsApp message, or fill our online form. Our team will confirm your booking and schedule a convenient time for site visit in ${areaName}.` },
    { question: `Do you provide warranty for work done in ${areaName}?`, answer: `Absolutely! All our work in ${areaName} comes with comprehensive warranty. The warranty period varies by service type - from 1 year for painting to 5 years for waterproofing. We honor all warranty claims promptly.` },
    { question: `What payment options do you accept in ${areaName}?`, answer: `We accept all payment methods including cash, UPI (Google Pay, PhonePe, Paytm), bank transfer, and cheque. For larger projects, we offer milestone-based payment terms for customer convenience.` },
    { question: `Why should ${areaName} residents choose Vadodara Mistry?`, answer: `With 12+ years of experience, 10,000+ happy customers, and deep local knowledge, Vadodara Mistry is ${areaName}'s trusted home services partner. We offer transparent pricing, quality workmanship, and after-service support.` },
  ];
}

export function generateAreaAbout(areaName: string) {
  return [
    `${areaName} is one of Vadodara's prominent localities, known for its residential and commercial establishments. At Vadodara Mistry, we're proud to serve the ${areaName} community with comprehensive home services that residents and businesses trust.`,
    `Whether you're looking to renovate your home with modern POP false ceiling designs, refresh your walls with premium Asian Paints, fix plumbing issues, or install custom furniture, our team of 50+ skilled professionals is ready to help. We've successfully completed hundreds of projects in ${areaName} and surrounding areas.`,
    `Our service approach in ${areaName} focuses on understanding local requirements, providing fair pricing, and delivering quality workmanship. We use premium materials from trusted brands and ensure every project meets our high standards. With 12+ years of experience serving Vadodara, we've built lasting relationships with families who trust us for all their home service needs.`,
    `What sets us apart in ${areaName} is our commitment to customer satisfaction. From the first call to project completion, we maintain clear communication, stick to timelines, and ensure a clean handover. Our warranty coverage gives you peace of mind, and our responsive support team is always available for any post-service concerns.`,
  ];
}
