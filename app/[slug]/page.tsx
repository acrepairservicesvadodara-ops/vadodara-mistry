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
import { generateKeywordContent, categoryFAQs, categoryContent } from "@/lib/seo-content";
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
  const faqs = categoryFAQs[category];
  const images = categoryImages[category];
  const content = categoryContent[category];
  const keywordContent = generateKeywordContent(keyword, category);

  // Get related services from same category
  const relatedServices = allKeywords
    .filter((kw) => kw.category === category && kw.slug !== slug)
    .slice(0, 8);

  return (
    <>
      {/* Hero Section */}
      <section className={`${config.gradient} py-8 md:py-20`}>
        <div className="container mx-auto px-4">
          {/* Mobile: Booking Form First */}
          <div className="md:hidden mb-6">
            <BookingForm title={`Book ${keyword.title}`} compact />
          </div>
          
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
              {keyword.title} in Vadodara
            </h1>
            <p className="text-lg md:text-xl mb-6 md:mb-8 text-white/90">
              {keyword.description} in Vadodara. Trusted by 10,000+ customers. 
              Quality work at affordable prices with warranty.
            </p>
            <div className="hidden md:flex flex-col sm:flex-row gap-4 justify-center">
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

      {/* Detailed Introduction Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              About {keyword.title} Services in Vadodara
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6 whitespace-pre-line">
                {keywordContent.introduction}
              </p>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {keywordContent.detailedDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Vadodara Mistry for {keyword.title}?
          </h2>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {content.whyChooseUs.map((reason, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <span className="text-green-600 font-bold text-xl">✓</span>
                <p className="text-gray-700">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Our {keyword.title} Process
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We follow a systematic approach to ensure quality results for every {keyword.title.toLowerCase()} project
          </p>
          <div className="max-w-4xl mx-auto space-y-6">
            {content.serviceProcess.map((step, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-sm flex gap-6">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-orange-600">{idx + 1}</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Benefits of Professional {keyword.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {content.benefits.map((benefit, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-bold text-lg text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Our {config.title} Expertise
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Comprehensive services covering all aspects of {config.title.toLowerCase()}
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {content.expertise.map((item, idx) => (
              <div key={idx} className="bg-white p-4 rounded-lg text-center">
                <span className="text-gray-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials We Use Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Quality Materials We Use
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {content.materials.map((material, idx) => (
              <div key={idx} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <span className="text-orange-600">▸</span>
                <span className="text-gray-700">{material}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Areas Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {keyword.title} Across Vadodara
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8 whitespace-pre-line">
              {keywordContent.localContext}
            </p>
          </div>
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
