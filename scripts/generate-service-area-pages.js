const fs = require('fs');
const path = require('path');

// 15 Main Services
const mainServices = [
  { 
    slug: "pop-false-ceiling", 
    name: "POP False Ceiling", 
    category: "painting",
    description: "Professional POP false ceiling installation and design",
    keywords: ["POP ceiling", "false ceiling", "gypsum ceiling", "ceiling design", "LED false ceiling"]
  },
  { 
    slug: "wall-painting", 
    name: "Wall Painting", 
    category: "painting",
    description: "Expert interior and exterior wall painting services",
    keywords: ["painting", "wall painting", "interior painting", "exterior painting", "house painting"]
  },
  { 
    slug: "texture-painting", 
    name: "Texture Painting", 
    category: "painting",
    description: "Decorative texture and designer painting services",
    keywords: ["texture paint", "designer painting", "wall texture", "3D painting", "metallic paint"]
  },
  { 
    slug: "tile-fitting", 
    name: "Tile Fitting", 
    category: "civil",
    description: "Professional tile fitting and flooring services",
    keywords: ["tile fitting", "floor tiles", "wall tiles", "marble fitting", "vitrified tiles"]
  },
  { 
    slug: "waterproofing", 
    name: "Waterproofing", 
    category: "civil",
    description: "Complete waterproofing solutions for home and building",
    keywords: ["waterproofing", "terrace waterproofing", "bathroom waterproofing", "roof waterproofing", "seepage treatment"]
  },
  { 
    slug: "bathroom-renovation", 
    name: "Bathroom Renovation", 
    category: "civil",
    description: "Complete bathroom renovation and remodeling services",
    keywords: ["bathroom renovation", "bathroom remodel", "bathroom fitting", "sanitary work", "CP fitting"]
  },
  { 
    slug: "plumbing", 
    name: "Plumbing Services", 
    category: "plumbing",
    description: "Complete plumbing, pipe fitting and repair services",
    keywords: ["plumber", "plumbing", "pipe fitting", "leak repair", "drainage work"]
  },
  { 
    slug: "geyser-repair", 
    name: "Geyser Repair", 
    category: "plumbing",
    description: "Water heater and geyser repair and installation",
    keywords: ["geyser repair", "water heater", "geyser installation", "bajaj geyser", "havells geyser"]
  },
  { 
    slug: "modular-kitchen", 
    name: "Modular Kitchen", 
    category: "carpenter",
    description: "Custom modular kitchen design and installation",
    keywords: ["modular kitchen", "kitchen design", "kitchen cabinet", "L shaped kitchen", "parallel kitchen"]
  },
  { 
    slug: "wardrobe", 
    name: "Wardrobe Design", 
    category: "carpenter",
    description: "Custom wardrobe and closet design services",
    keywords: ["wardrobe", "wardrobe design", "sliding wardrobe", "bedroom wardrobe", "walk-in closet"]
  },
  { 
    slug: "carpenter", 
    name: "Carpenter Services", 
    category: "carpenter",
    description: "Professional carpentry and furniture services",
    keywords: ["carpenter", "furniture", "woodwork", "door fitting", "wood polish"]
  },
  { 
    slug: "gate-fabrication", 
    name: "Gate Fabrication", 
    category: "fabrication",
    description: "Custom gate design and fabrication services",
    keywords: ["gate fabrication", "main gate", "MS gate", "SS gate", "iron gate"]
  },
  { 
    slug: "ss-railing", 
    name: "SS Railing", 
    category: "fabrication",
    description: "Stainless steel railing design and installation",
    keywords: ["SS railing", "steel railing", "balcony railing", "staircase railing", "glass railing"]
  },
  { 
    slug: "window-grill", 
    name: "Window Grill", 
    category: "fabrication",
    description: "Safety grill and window grill fabrication",
    keywords: ["window grill", "safety grill", "balcony grill", "door grill", "designer grill"]
  },
  { 
    slug: "solar-installation", 
    name: "Solar Installation", 
    category: "solar",
    description: "Rooftop solar panel installation services",
    keywords: ["solar installation", "solar panel", "rooftop solar", "home solar", "commercial solar"]
  }
];

// 40 Vadodara Areas
const areas = [
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
  { slug: "panigate", name: "Panigate" }
];

// Category configuration
const categoryConfig = {
  painting: { color: "orange", gradient: "from-orange-500 to-orange-600", icon: "Paintbrush" },
  civil: { color: "amber", gradient: "from-amber-500 to-amber-600", icon: "Hammer" },
  plumbing: { color: "blue", gradient: "from-blue-500 to-blue-600", icon: "Wrench" },
  carpenter: { color: "green", gradient: "from-green-600 to-green-700", icon: "Sofa" },
  fabrication: { color: "gray", gradient: "from-gray-600 to-gray-700", icon: "Settings" },
  solar: { color: "yellow", gradient: "from-yellow-500 to-orange-500", icon: "Sun" }
};

// Generate 10 unique FAQs for service+area
function generateFAQs(service, areaName, isCity) {
  const location = isCity ? 'Vadodara' : `${areaName}, Vadodara`;
  const faqs = [
    { question: `What is the cost of ${service.name} in ${location}?`, answer: `The cost of ${service.name} in ${location} depends on project size, materials, and complexity. We offer competitive rates starting from affordable packages. Contact us at +91 93139 82980 for a free quote based on your specific requirements.` },
    { question: `How long does ${service.name} take in ${location}?`, answer: `${service.name} project duration in ${location} varies based on scope. Small projects take 1-3 days, medium projects 3-7 days, and larger projects may take 1-2 weeks. We provide accurate timelines during consultation.` },
    { question: `Do you provide ${service.name} warranty in ${location}?`, answer: `Yes, we provide warranty on all ${service.name} work in ${location}. Workmanship warranty ranges from 6 months to 2 years depending on the service type. Material warranties are as per manufacturer terms.` },
    { question: `What materials do you use for ${service.name} in ${location}?`, answer: `We use premium quality materials from trusted brands for ${service.name} in ${location}. All materials are ISI certified and come with manufacturer warranty. We can also work with client-provided materials.` },
    { question: `How to book ${service.name} in ${location}?`, answer: `Booking ${service.name} in ${location} is easy! Call us at +91 93139 82980, WhatsApp us, or fill the booking form on this page. Our team will visit for inspection and provide a detailed quote within 24 hours.` },
    { question: `Are your ${service.name} workers trained in ${location}?`, answer: `Yes, all our ${service.name} workers serving ${location} are professionally trained with 5-10+ years of experience. They undergo regular skill upgrades and follow safety protocols for quality work.` },
    { question: `What areas near ${areaName || 'Vadodara'} do you cover for ${service.name}?`, answer: `We provide ${service.name} across all areas of Vadodara including ${areas.slice(0, 8).map(a => a.name).join(', ')} and more. Our service network covers the entire Vadodara district.` },
    { question: `Do you offer free estimates for ${service.name} in ${location}?`, answer: `Yes, we offer completely free site visits and estimates for ${service.name} in ${location}. Our expert will assess your requirements and provide a detailed quotation with no obligation.` },
    { question: `What makes your ${service.name} different in ${location}?`, answer: `Our ${service.name} in ${location} stands out due to: 10+ years experience, trained professionals, premium materials, on-time delivery, transparent pricing, and after-service support. We've completed 5000+ projects successfully.` },
    { question: `Can I see your previous ${service.name} work in ${location}?`, answer: `Absolutely! We maintain a portfolio of completed ${service.name} projects in ${location}. Request to see photos during consultation, or visit our completed project sites nearby with prior appointment.` }
  ];
  return faqs;
}

// Generate extended content (700+ words)
function generateExtendedContent(service, areaName, isCity) {
  const location = isCity ? 'Vadodara' : `${areaName}, Vadodara`;
  const locationShort = isCity ? 'Vadodara' : areaName;
  
  return {
    intro: `Looking for professional ${service.name} in ${location}? Vadodara Mistry provides expert ${service.name.toLowerCase()} services with over 10 years of experience and 5000+ satisfied customers. Our team of skilled professionals delivers top-quality work at competitive prices, ensuring complete customer satisfaction with every project in ${locationShort}.`,
    
    detailed: `${service.name} is one of our core specialties at Vadodara Mistry. In ${location}, we have established ourselves as the most trusted name for ${service.keywords.slice(0, 3).join(', ')} and related services. Our expertise covers residential, commercial, and industrial projects of all sizes.

Our ${service.name.toLowerCase()} services in ${locationShort} include comprehensive solutions tailored to your specific needs. Whether you're building a new home, renovating your existing space, or need repairs and maintenance, our experienced team handles every project with precision and care. We use only premium quality materials from trusted brands to ensure longevity and superior finish.

What sets us apart in ${location} is our commitment to excellence. From the initial consultation to project completion, we maintain transparent communication, stick to agreed timelines, and deliver results that exceed expectations. Our pricing is competitive and honest - no hidden charges or surprise costs.`,

    whyChooseUs: `Why choose Vadodara Mistry for ${service.name} in ${location}?

• **10+ Years Experience**: Over a decade of expertise in ${service.name.toLowerCase()} with thousands of successful projects across Vadodara.

• **Skilled Professionals**: Our team consists of trained and experienced workers who follow best practices and safety standards.

• **Premium Materials**: We use only top-quality, ISI-certified materials from brands like ${service.category === 'painting' ? 'Asian Paints, Berger, Nerolac' : service.category === 'civil' ? 'Kajaria, Somany, Dr. Fixit' : service.category === 'plumbing' ? 'Astral, Supreme, Finolex' : service.category === 'carpenter' ? 'Greenply, Century, Merino' : service.category === 'fabrication' ? 'Tata, SAIL, JSW' : 'Tata Solar, Adani, Waaree'}.

• **Transparent Pricing**: Get detailed quotes upfront with no hidden costs. We offer the best value for money in ${locationShort}.

• **Timely Completion**: We respect your time and complete projects within agreed deadlines without compromising quality.

• **After-Service Support**: Our relationship doesn't end after project completion. We provide warranty and after-sales support.

• **Local Expertise**: Being based in Vadodara, we understand local requirements, climate conditions, and aesthetic preferences of ${locationShort} residents.`,

    process: `Our ${service.name} Process in ${location}:

**Step 1: Inquiry & Consultation**
Contact us via call, WhatsApp, or our booking form. Our team will understand your basic requirements and schedule a site visit.

**Step 2: Site Visit & Assessment**
Our expert visits your location in ${locationShort}, assesses the work area, takes measurements, and discusses your preferences and budget.

**Step 3: Detailed Quotation**
Within 24 hours of site visit, you receive a comprehensive quote with itemized costs, material specifications, and project timeline.

**Step 4: Material Selection**
We help you choose the right materials based on your budget and requirements. Visit our partnered showrooms if needed.

**Step 5: Work Execution**
Our trained team begins work as per schedule. Regular progress updates keep you informed. We maintain cleanliness during work.

**Step 6: Quality Check & Handover**
After completion, our supervisor conducts quality inspection. Final handover happens only after your complete satisfaction.

**Step 7: After-Sales Support**
Warranty card provided. Our support team remains available for any queries or touch-ups needed within warranty period.`,

    localContent: `${service.name} Services Across ${locationShort}:

We serve all localities in and around ${locationShort}. Our clients in ${location} appreciate our quick response time and local presence. Being a Vadodara-based company, we understand the unique requirements of homes and businesses in this area.

${locationShort} has witnessed significant real estate growth, and our ${service.name.toLowerCase()} services have contributed to beautifying numerous residential complexes, independent houses, offices, and commercial establishments here. From modern apartments to traditional Gujarati homes, we adapt our work to match every architectural style.

Our service vehicle reaches ${locationShort} within 2-4 hours of booking confirmation. Emergency services are available for urgent requirements. We maintain a team dedicated to ${location} to ensure faster service delivery.`,

    conclusion: `Ready to transform your space with professional ${service.name} in ${location}? Contact Vadodara Mistry today! Call us at +91 93139 82980 or WhatsApp for instant response. Our team is ready to serve you with the best ${service.name.toLowerCase()} solutions at competitive prices.

Visit our office at Shop No. 12, Shreeji Complex, Near Sayajigunj Circle, Sayajigunj, Vadodara, Gujarat 390005. Working hours: Monday to Saturday 8AM-8PM, Sunday 9AM-6PM.

Book your free consultation now and join our 5000+ satisfied customers in ${locationShort} who trust Vadodara Mistry for their home service needs!`
  };
}

// Generate page content
function generatePageContent(service, areaName, isCity) {
  const location = isCity ? 'Vadodara' : `${areaName}, Vadodara`;
  const locationShort = isCity ? 'Vadodara' : areaName;
  const slug = isCity ? `${service.slug}-in-vadodara` : `${service.slug}-${areaName.toLowerCase().replace(/\s+/g, '-')}-vadodara`;
  const config = categoryConfig[service.category];
  const faqs = generateFAQs(service, areaName, isCity);
  const content = generateExtendedContent(service, areaName, isCity);
  
  const title = isCity ? `${service.name} in Vadodara` : `${service.name} in ${areaName}, Vadodara`;
  const metaTitle = `${service.name} in ${locationShort} | Best ${service.name} Services - Vadodara Mistry`;
  const metaDesc = `Expert ${service.name} in ${location}. Professional services, premium materials, 10+ years experience. Free quote: +91 93139 82980. Trusted by 5000+ customers.`;
  
  return `import { Metadata } from "next";
import Link from "next/link";
import BookingForm from "@/components/BookingForm";
import CallButton from "@/components/CallButton";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Testimonials from "@/components/Testimonials";
import BusinessInfo from "@/components/BusinessInfo";
import { businessConfig, generateFAQSchema, generateLocalBusinessSchema, generateServiceSchema, generateBreadcrumbSchema } from "@/lib/business-config";
import { Phone, MapPin, Clock, CheckCircle, Star, ArrowRight, Shield, Award, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "${metaTitle}",
  description: "${metaDesc}",
  keywords: "${service.keywords.join(', ')}, ${locationShort}, Vadodara",
  alternates: {
    canonical: "https://vadodaramistry.com/${slug}",
  },
  openGraph: {
    title: "${metaTitle}",
    description: "${metaDesc}",
    url: "https://vadodaramistry.com/${slug}",
    siteName: "Vadodara Mistry",
    locale: "en_IN",
    type: "website",
  },
};

const faqs = ${JSON.stringify(faqs, null, 2)};

export default function ${service.slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('')}${isCity ? 'Vadodara' : areaName.replace(/\s+/g, '')}Page() {
  const faqSchema = generateFAQSchema(faqs);
  const localBusinessSchema = generateLocalBusinessSchema();
  const serviceSchema = generateServiceSchema({ title: "${service.name}", description: "${metaDesc}", slug: "${slug}" });
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://vadodaramistry.com" },
    { name: "${service.name}", url: "https://vadodaramistry.com/${service.slug}-in-vadodara" },
    ${!isCity ? `{ name: "${areaName}", url: "https://vadodaramistry.com/${slug}" },` : ''}
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className="min-h-screen">
        {/* Hero Section with Booking Form */}
        <section className="relative bg-gradient-to-br ${config.gradient} text-white py-16 md:py-24">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <nav className="text-sm mb-4 text-white/80">
                  <Link href="/" className="hover:text-white">Home</Link>
                  <span className="mx-2">/</span>
                  <Link href="/${service.slug}-in-vadodara" className="hover:text-white">${service.name}</Link>
                  ${!isCity ? `<span className="mx-2">/</span>
                  <span>${areaName}</span>` : ''}
                </nav>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  ${title}
                </h1>
                <p className="text-xl mb-8 text-white/90">
                  ${content.intro}
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                    <Shield className="w-5 h-5" />
                    <span>10+ Years Experience</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                    <Award className="w-5 h-5" />
                    <span>5000+ Projects</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                    <Users className="w-5 h-5" />
                    <span>Trusted Experts</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="tel:+919313982980"
                    className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
                  >
                    <Phone className="w-5 h-5" />
                    Call: +91 93139 82980
                  </a>
                  <a
                    href="https://wa.me/919313982980"
                    className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
                  >
                    WhatsApp Now
                  </a>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-2xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Get Free Quote for ${service.name}
                </h2>
                <BookingForm service="${service.name}" location="${locationShort}" />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Professional ${service.name} in ${location}
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                ${content.detailed.split('\n\n').map(p => `<p className="mb-4">${p}</p>`).join('\n                ')}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Why Choose Vadodara Mistry for ${service.name}?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "10+ Years Experience", desc: "Decade of expertise in ${service.name.toLowerCase()} services", icon: Award },
                { title: "Trained Professionals", desc: "Skilled workers with proper training", icon: Users },
                { title: "Premium Materials", desc: "Top quality ISI certified materials", icon: Shield },
                { title: "On-Time Delivery", desc: "Projects completed within deadline", icon: Clock },
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                  <item.icon className="w-12 h-12 text-${config.color}-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Our ${service.name} Services in ${locationShort}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {${JSON.stringify(service.keywords)}.map((keyword, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 capitalize">{keyword}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Our ${service.name} Process
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                { step: 1, title: "Enquiry", desc: "Contact us via call, WhatsApp or form" },
                { step: 2, title: "Site Visit", desc: "Free inspection and measurement" },
                { step: 3, title: "Quotation", desc: "Detailed quote within 24 hours" },
                { step: 4, title: "Execution", desc: "Quality work with on-time delivery" },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 bg-${config.color}-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              What Our Customers Say
            </h2>
            <Testimonials filterService="${service.category}" limit={6} />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              FAQs - ${service.name} in ${locationShort}
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, i) => (
                <details key={i} className="bg-white rounded-xl shadow-sm group">
                  <summary className="p-6 cursor-pointer font-semibold text-gray-900 flex justify-between items-center">
                    {faq.question}
                    <ArrowRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform" />
                  </summary>
                  <div className="px-6 pb-6 text-gray-600">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Local Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                ${service.name} Services Across ${locationShort}
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">${content.localContent}</p>
                <p className="mb-4">${content.conclusion}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Business Info */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Contact Us for ${service.name}</h2>
                <div className="space-y-4">
                  <a href="tel:+919313982980" className="flex items-center gap-3 text-lg hover:text-${config.color}-400">
                    <Phone className="w-6 h-6" />
                    +91 93139 82980
                  </a>
                  <div className="flex items-start gap-3 text-lg">
                    <MapPin className="w-6 h-6 flex-shrink-0 mt-1" />
                    <span>Shop No. 12, Shreeji Complex, Near Sayajigunj Circle, Sayajigunj, Vadodara, Gujarat 390005</span>
                  </div>
                  <div className="flex items-center gap-3 text-lg">
                    <Clock className="w-6 h-6" />
                    Mon-Sat: 8AM-8PM | Sun: 9AM-6PM
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Enquiry</h3>
                <BookingForm service="${service.name}" location="${locationShort}" />
              </div>
            </div>
          </div>
        </section>

        {/* Related Areas */}
        ${!isCity ? `<section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
              ${service.name} in Other Areas
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {${JSON.stringify(areas.filter(a => a.name !== areaName).slice(0, 15).map(a => ({ name: a.name, slug: `${service.slug}-${a.slug}-vadodara` })))}.map((area) => (
                <Link
                  key={area.slug}
                  href={\`/\${area.slug}\`}
                  className="px-4 py-2 bg-white border rounded-full hover:bg-${config.color}-50 hover:border-${config.color}-500 transition"
                >
                  {area.name}
                </Link>
              ))}
            </div>
          </div>
        </section>` : ''}

        <WhatsAppFloat />
        <CallButton />
      </main>
    </>
  );
}
`;
}

// Main execution
const appDir = path.join(__dirname, '..', 'app');
let created = 0;
let skipped = 0;

console.log('🚀 Generating Service × Area Combination Pages...\n');

mainServices.forEach(service => {
  // Create main city page: service-in-vadodara
  const citySlug = `${service.slug}-in-vadodara`;
  const cityDir = path.join(appDir, citySlug);
  
  if (!fs.existsSync(cityDir)) {
    fs.mkdirSync(cityDir, { recursive: true });
  }
  
  const cityContent = generatePageContent(service, null, true);
  fs.writeFileSync(path.join(cityDir, 'page.tsx'), cityContent);
  created++;
  console.log(`✅ Created: ${citySlug}/page.tsx`);
  
  // Create area pages: service-area-vadodara
  areas.forEach(area => {
    const areaSlug = `${service.slug}-${area.slug}-vadodara`;
    const areaDir = path.join(appDir, areaSlug);
    
    if (!fs.existsSync(areaDir)) {
      fs.mkdirSync(areaDir, { recursive: true });
    }
    
    const areaContent = generatePageContent(service, area.name, false);
    fs.writeFileSync(path.join(areaDir, 'page.tsx'), areaContent);
    created++;
  });
  
  console.log(`   ↳ Created ${areas.length} area pages for ${service.name}`);
});

console.log('\n' + '='.repeat(60));
console.log(`📊 Summary:`);
console.log(`   - Main Services: ${mainServices.length}`);
console.log(`   - Areas: ${areas.length}`);
console.log(`   - City Pages Created: ${mainServices.length}`);
console.log(`   - Area Pages Created: ${mainServices.length * areas.length}`);
console.log(`   - Total New Pages: ${created}`);
console.log('='.repeat(60));
