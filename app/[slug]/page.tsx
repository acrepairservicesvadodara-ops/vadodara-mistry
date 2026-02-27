import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  allKeywords,
  vadodaraAreas,
  categoryConfig,
  categoryImages,
  areaKeywords,
  ServiceCategory,
} from "@/lib/data";
import BookingForm from "@/components/BookingForm";
import CallButton from "@/components/CallButton";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ImageSlider from "@/components/ImageSlider";

// Generate static params for all keyword pages AND area pages
export async function generateStaticParams() {
  const keywordSlugs = allKeywords.map((kw) => ({ slug: kw.slug }));
  const areaSlugs = areaKeywords.map((area) => ({ slug: area.slug }));
  return [...keywordSlugs, ...areaSlugs];
}

// Generate metadata for each keyword page or area page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  
  // Check if it's an area page
  const areaPage = areaKeywords.find((a) => a.slug === slug);
  if (areaPage) {
    const title = `Home Services in ${areaPage.areaName}, Vadodara | Painter, Plumber, Carpenter`;
    const description = `Best home services in ${areaPage.areaName}, Vadodara. Professional painters, plumbers, carpenters, civil contractors & fabrication work. Call +91 76003 37866`;
    return {
      title,
      description,
      keywords: `home services ${areaPage.areaName.toLowerCase()} vadodara, painter ${areaPage.areaName.toLowerCase()}, plumber ${areaPage.areaName.toLowerCase()}`,
      openGraph: {
        title,
        description,
        url: `https://vadodaramistry.com/${slug}`,
        type: "website",
      },
    };
  }
  
  // It's a keyword page
  const keyword = allKeywords.find((kw) => kw.slug === slug);

  if (!keyword) {
    return {
      title: "Service Not Found | Vadodara Mistry",
    };
  }

  const title = `${keyword.title} in Vadodara | Professional ${keyword.title} Services - Vadodara Mistry`;
  const description = `Looking for ${keyword.title.toLowerCase()} in Vadodara? Vadodara Mistry offers professional ${keyword.description.toLowerCase()}. ✓ Experienced Team ✓ Best Prices ✓ Quality Work. Call +91 76003 37866`;

  return {
    title,
    description,
    keywords: [
      keyword.title,
      `${keyword.title} Vadodara`,
      `${keyword.title} services`,
      `best ${keyword.title.toLowerCase()}`,
      `${keyword.title.toLowerCase()} near me`,
      "Vadodara Mistry",
    ],
    openGraph: {
      title,
      description,
      url: `https://vadodaramistry.com/${slug}`,
      siteName: "Vadodara Mistry",
      locale: "en_IN",
      type: "website",
    },
  };
}

// Category-specific pricing
const categoryPricing: Record<ServiceCategory, { service: string; price: string; unit: string }[]> = {
  painting: [
    { service: "Interior Wall Painting", price: "₹12", unit: "per sq.ft" },
    { service: "Exterior Painting", price: "₹15", unit: "per sq.ft" },
    { service: "Texture Painting", price: "₹25", unit: "per sq.ft" },
    { service: "POP False Ceiling", price: "₹75", unit: "per sq.ft" },
    { service: "Gypsum Ceiling", price: "₹85", unit: "per sq.ft" },
    { service: "Wall Putty + Primer", price: "₹8", unit: "per sq.ft" },
  ],
  civil: [
    { service: "Floor Tile Fitting", price: "₹35", unit: "per sq.ft" },
    { service: "Wall Tile Fitting", price: "₹40", unit: "per sq.ft" },
    { service: "Bathroom Renovation", price: "₹35,000", unit: "onwards" },
    { service: "Waterproofing", price: "₹45", unit: "per sq.ft" },
    { service: "Marble/Granite Fitting", price: "₹60", unit: "per sq.ft" },
    { service: "Plastering Work", price: "₹25", unit: "per sq.ft" },
  ],
  plumbing: [
    { service: "Tap Installation", price: "₹150", unit: "per tap" },
    { service: "Pipe Repair", price: "₹300", unit: "onwards" },
    { service: "Bathroom Fitting", price: "₹2,500", unit: "complete" },
    { service: "Water Tank Installation", price: "₹1,500", unit: "onwards" },
    { service: "Drainage Cleaning", price: "₹500", unit: "per drain" },
    { service: "Geyser Installation", price: "₹800", unit: "per unit" },
  ],
  carpenter: [
    { service: "Modular Kitchen", price: "₹1,200", unit: "per sq.ft" },
    { service: "Wardrobe", price: "₹900", unit: "per sq.ft" },
    { service: "Door Installation", price: "₹2,500", unit: "per door" },
    { service: "Window Frame", price: "₹350", unit: "per running ft" },
    { service: "Furniture Repair", price: "₹500", unit: "onwards" },
    { service: "TV Unit", price: "₹15,000", unit: "onwards" },
  ],
  fabrication: [
    { service: "MS Grill", price: "₹120", unit: "per sq.ft" },
    { service: "SS Railing", price: "₹450", unit: "per running ft" },
    { service: "Main Gate", price: "₹18,000", unit: "onwards" },
    { service: "Window Grill", price: "₹150", unit: "per sq.ft" },
    { service: "Iron Door", price: "₹8,000", unit: "onwards" },
    { service: "Shed/Canopy", price: "₹85", unit: "per sq.ft" },
  ],
  solar: [
    { service: "1kW Solar System", price: "₹55,000", unit: "complete" },
    { service: "2kW Solar System", price: "₹1,00,000", unit: "complete" },
    { service: "3kW Solar System", price: "₹1,45,000", unit: "complete" },
    { service: "5kW Solar System", price: "₹2,30,000", unit: "complete" },
    { service: "Solar Panel Cleaning", price: "₹500", unit: "per panel" },
    { service: "Inverter Installation", price: "₹5,000", unit: "onwards" },
  ],
};

// Category-specific FAQs
const categoryFAQs: Record<ServiceCategory, { question: string; answer: string }[]> = {
  painting: [
    { question: "What is the cost of painting per sq.ft in Vadodara?", answer: "Interior painting starts from ₹12/sq.ft and exterior from ₹15/sq.ft including primer and two coats of paint. Texture painting costs around ₹25/sq.ft." },
    { question: "How long does house painting take?", answer: "A 2BHK apartment typically takes 4-5 days for complete interior painting including wall preparation, putty, primer, and two coats." },
    { question: "Do you provide warranty on painting work?", answer: "Yes, we provide 1-year warranty on all painting work. Premium paints like Asian Paints Royale come with extended warranty." },
    { question: "Can you work on weekends?", answer: "Yes, we work all 7 days. You can book painting services for weekends without extra charges." },
  ],
  civil: [
    { question: "What is tile fitting cost in Vadodara?", answer: "Floor tile fitting costs ₹35-45/sq.ft and wall tiles cost ₹40-50/sq.ft depending on tile size and pattern complexity." },
    { question: "How long does bathroom renovation take?", answer: "A complete bathroom renovation including tiles, fitting, and waterproofing takes 7-10 days." },
    { question: "Do you provide waterproofing warranty?", answer: "Yes, we provide 5-year warranty on terrace waterproofing and 3-year warranty on bathroom waterproofing." },
    { question: "What brands of tiles do you work with?", answer: "We work with all major brands including Kajaria, Somany, Johnson, Asian Granito, and imported tiles." },
  ],
  plumbing: [
    { question: "Do you provide 24/7 plumbing service?", answer: "Yes, we provide emergency plumbing services 24/7 in Vadodara for pipe leaks, blockages, and urgent repairs." },
    { question: "What is the visiting charge for plumber?", answer: "Our visiting charge is ₹200 which is adjustable against the work done. For AMC customers, there is no visiting charge." },
    { question: "Do you install water purifiers?", answer: "Yes, we install all types of water purifiers including RO, UV, and gravity-based systems from all major brands." },
    { question: "Can you fix concealed pipe leakage?", answer: "Yes, we use advanced techniques like pipe inspection cameras to detect and fix concealed pipe leakages with minimal damage." },
  ],
  carpenter: [
    { question: "What is modular kitchen cost in Vadodara?", answer: "Modular kitchen costs range from ₹1,200-2,500/sq.ft depending on material (MDF, plywood, BWP) and finish type." },
    { question: "Do you use termite-resistant plywood?", answer: "Yes, we use BWP (Boiling Water Proof) and marine plywood which are termite and water resistant. We also apply termite treatment." },
    { question: "How long does wardrobe making take?", answer: "A standard 8x7 ft wardrobe takes 5-7 days to complete including design, fabrication, and installation." },
    { question: "Do you provide furniture repair service?", answer: "Yes, we repair all types of wooden furniture including polish, veneer replacement, and structural repairs." },
  ],
  fabrication: [
    { question: "What is SS railing cost per foot?", answer: "SS 304 grade railing costs ₹450-600 per running foot and SS 202 costs ₹350-450 per running foot including installation." },
    { question: "How long does gate fabrication take?", answer: "A standard main gate takes 7-10 days including design finalization, fabrication, and installation." },
    { question: "Do you provide powder coating?", answer: "Yes, all MS fabrication work includes powder coating at no extra cost. We offer multiple color options." },
    { question: "Can you make designer gates?", answer: "Yes, we create custom designer gates with CNC cutting, laser patterns, and combination of MS with SS elements." },
  ],
  solar: [
    { question: "What is 1kW solar system cost in Vadodara?", answer: "A 1kW on-grid solar system costs around ₹55,000-65,000 including panels, inverter, mounting, and installation. Government subsidy of ₹14,588 is available." },
    { question: "How much electricity does 3kW solar produce?", answer: "A 3kW system produces approximately 12-15 units per day or 360-450 units per month depending on sunlight conditions." },
    { question: "What is the warranty on solar panels?", answer: "Solar panels come with 25-year performance warranty and 10-year product warranty. Inverters have 5-year warranty." },
    { question: "Do you help with government subsidy?", answer: "Yes, we handle complete documentation for GUVNL/DISCOM net metering and PM Surya Ghar Yojana subsidy application." },
  ],
};

export default async function KeywordPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  
  // Check if it's an area page
  const areaPage = areaKeywords.find((a) => a.slug === slug);
  if (areaPage) {
    return <AreaPageContent areaName={areaPage.areaName} />;
  }
  
  // It's a keyword page
  const keyword = allKeywords.find((kw) => kw.slug === slug);

  if (!keyword) {
    notFound();
  }

  const category = keyword.category;
  const config = categoryConfig[category];
  const pricing = categoryPricing[category];
  const faqs = categoryFAQs[category];
  const images = categoryImages[category];

  // Get related services from same category
  const relatedServices = allKeywords
    .filter((kw) => kw.category === category && kw.slug !== slug)
    .slice(0, 8);

  return (
    <>
      {/* Hero Section */}
      <section className={`${config.gradient} py-20`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {keyword.title} in Vadodara
            </h1>
            <p className="text-xl mb-8 text-white/90">
              {keyword.description} in Vadodara. Trusted by 10,000+ customers. 
              Quality work at affordable prices with warranty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CallButton className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg" />
              <a
                href={`https://wa.me/917600337866?text=Hi, I need ${keyword.title} service in Vadodara`}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg inline-flex items-center justify-center gap-2"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Our {config.title} Work Gallery
          </h2>
          <div className="max-w-4xl mx-auto">
            <ImageSlider images={images} autoPlay={true} interval={4000} />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Us for {keyword.title}?
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: "✓", title: "Experienced Team", desc: "10+ years of expertise" },
              { icon: "⚡", title: "Quick Response", desc: "Same day service available" },
              { icon: "💰", title: "Best Prices", desc: "Transparent pricing" },
              { icon: "🛡️", title: "Quality Assured", desc: "Warranty on all work" },
            ].map((feature, idx) => (
              <div key={idx} className="text-center p-6 rounded-xl bg-gray-50">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            {keyword.title} Price List in Vadodara
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Transparent pricing with no hidden charges
          </p>
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
            <table className="w-full">
              <thead className={`${config.gradient} text-white`}>
                <tr>
                  <th className="py-4 px-6 text-left">Service</th>
                  <th className="py-4 px-6 text-right">Price</th>
                  <th className="py-4 px-6 text-right">Unit</th>
                </tr>
              </thead>
              <tbody>
                {pricing.map((item, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="py-4 px-6">{item.service}</td>
                    <td className="py-4 px-6 text-right font-semibold text-orange-600">{item.price}</td>
                    <td className="py-4 px-6 text-right text-gray-600">{item.unit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-gray-500 mt-4 text-sm">
            *Prices may vary based on material and work complexity. Contact us for exact quote.
          </p>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            {keyword.title} Service Areas in Vadodara
          </h2>
          <p className="text-center text-gray-600 mb-12">
            We provide {keyword.title.toLowerCase()} services across all Vadodara areas
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {vadodaraAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/services-${area.slug}-vadodara`}
                className="p-3 bg-gray-50 hover:bg-orange-50 rounded-lg text-center text-sm hover:text-orange-600 transition"
              >
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="bg-white rounded-xl p-6 shadow-sm group"
              >
                <summary className="font-semibold cursor-pointer list-none flex justify-between items-center">
                  {faq.question}
                  <span className="text-orange-500 group-open:rotate-180 transition">
                    ▼
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Related Services
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {relatedServices.map((service) => (
              <Link
                key={service.slug}
                href={`/${service.slug}`}
                className="p-4 border border-gray-200 rounded-xl hover:border-orange-500 hover:shadow-md transition text-center"
              >
                <h3 className="font-medium">{service.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">
              Book {keyword.title} Service
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Fill the form below and we&apos;ll contact you within 30 minutes
            </p>
            <BookingForm />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`${config.gradient} py-16`}>
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Need {keyword.title} Service in Vadodara?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Call us now for instant service. Available 7 days a week.
          </p>
          <CallButton className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg" />
        </div>
      </section>

      <WhatsAppFloat />
    </>
  );
}

// Area Page Content Component
function AreaPageContent({ areaName }: { areaName: string }) {
  const nearbyAreas = vadodaraAreas.filter((a) => a.name !== areaName).slice(0, 8);
  
  const serviceCategories = [
    { title: "POP & Painting", services: ["POP False Ceiling", "Wall Painting", "Texture Painting", "Interior Painting"], href: "/pop-false-ceiling-vadodara", color: "orange" },
    { title: "Civil Work", services: ["Tile Fitting", "Waterproofing", "Bathroom Renovation", "Flooring"], href: "/civil-contractors-vadodara", color: "amber" },
    { title: "Plumbing", services: ["Pipe Fitting", "Water Leak Repair", "Geyser Repair", "Drainage Work"], href: "/plumbers-vadodara", color: "blue" },
    { title: "Carpenter", services: ["Modular Kitchen", "Wardrobe", "TV Unit", "Door Fitting"], href: "/carpenter-vadodara", color: "green" },
    { title: "Fabrication", services: ["Gate Fabrication", "Window Grill", "SS Railing", "Welding Work"], href: "/fabrication-vadodara", color: "gray" },
    { title: "Solar", services: ["Solar Installation", "Solar Cleaning", "Solar AMC", "Inverter Repair"], href: "/solar-maintenance-vadodara", color: "yellow" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm mb-6">
              <span>📍 Serving {areaName}, Vadodara</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Best Home Services in {areaName}, Vadodara
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Professional painters, plumbers, carpenters, civil contractors & more in {areaName}. 
              Trusted by families and businesses across Vadodara.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CallButton className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg" />
              <a
                href={`https://wa.me/917600337866?text=Hi, I need home services in ${areaName}, Vadodara`}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg inline-flex items-center justify-center gap-2"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Services in {areaName}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCategories.map((cat) => (
              <div key={cat.title} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{cat.title}</h3>
                <ul className="space-y-2 mb-4">
                  {cat.services.map((service) => (
                    <li key={service} className="flex items-center gap-2 text-gray-600">
                      <span className="text-green-500">✓</span> {service}
                    </li>
                  ))}
                </ul>
                <Link href={cat.href} className="text-orange-600 hover:text-orange-700 font-semibold">
                  View All →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Slider */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Work Gallery</h2>
          <div className="max-w-4xl mx-auto">
            <ImageSlider 
              images={[
                ...categoryImages.painting.slice(0, 2),
                ...categoryImages.civil.slice(0, 2),
                ...categoryImages.carpenter.slice(0, 2),
              ]} 
              autoPlay={true} 
              interval={4000} 
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Vadodara Mistry in {areaName}?
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: "✓", title: "Local Experts", desc: `Mistries who know ${areaName} well` },
              { icon: "⚡", title: "Quick Response", desc: "Same day service available" },
              { icon: "💰", title: "Fair Pricing", desc: "No hidden charges" },
              { icon: "🛡️", title: "Quality Work", desc: "Warranty on all services" },
            ].map((item, idx) => (
              <div key={idx} className="text-center p-6 rounded-xl bg-gray-50">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">
              Book Service in {areaName}
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Fill the form below and we&apos;ll contact you within 30 minutes
            </p>
            <BookingForm />
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Also Serving Nearby Areas</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {nearbyAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/services-${area.slug}-vadodara`}
                className="flex items-center gap-2 bg-gray-50 hover:bg-orange-50 border border-gray-200 hover:border-orange-300 p-4 rounded-lg transition"
              >
                <span className="text-orange-600">📍</span>
                <span className="font-medium text-gray-800">{area.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Need Home Services in {areaName}?
          </h2>
          <p className="text-xl mb-8 text-white/90">Call us now for instant service!</p>
          <CallButton className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg" />
        </div>
      </section>

      <WhatsAppFloat />
    </>
  );
}
