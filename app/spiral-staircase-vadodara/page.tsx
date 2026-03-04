import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import {
  allKeywords,
  vadodaraAreas,
  categoryConfig,
  categoryImages,
} from "@/lib/data";
import { generateKeywordContent, categoryFAQs, categoryContent, generateUniqueFAQs, generateExtendedContent } from "@/lib/seo-content";
import { businessConfig, testimonials, generateFAQSchema, generateLocalBusinessSchema, generateServiceSchema, generateBreadcrumbSchema } from "@/lib/business-config";
import BookingForm from "@/components/BookingForm";
import CallButton from "@/components/CallButton";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ImageSlider from "@/components/ImageSlider";
import Testimonials from "@/components/Testimonials";
import BusinessInfo from "@/components/BusinessInfo";

const keyword = {
  slug: "spiral-staircase-vadodara",
  title: "Spiral Staircase",
  description: "Spiral staircase design",
  category: "fabrication" as const,
};

const category = "fabrication";
const config = categoryConfig["fabrication"];
const images = categoryImages["fabrication"];
const content = categoryContent["fabrication"];
const keywordContent = generateKeywordContent(keyword, "fabrication");
const extendedContent = generateExtendedContent(keyword, "fabrication");
const uniqueFAQs = generateUniqueFAQs(keyword, "fabrication");

// Schema data
const faqSchema = generateFAQSchema(uniqueFAQs);
const localBusinessSchema = generateLocalBusinessSchema("Spiral Staircase");
const serviceSchema = generateServiceSchema(keyword);
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "https://vadodaramistry.com" },
  { name: "Fabrication", url: "https://vadodaramistry.com/fabrication-vadodara" },
  { name: "Spiral Staircase", url: "https://vadodaramistry.com/spiral-staircase-vadodara" },
]);

const relatedServices = allKeywords
  .filter((kw) => kw.category === "fabrication" && kw.slug !== "spiral-staircase-vadodara")
  .slice(0, 8);

export const metadata: Metadata = {
  title: `Spiral Staircase in Vadodara | Professional Spiral Staircase Services - Vadodara Mistry`,
  description: `Looking for spiral staircase in Vadodara? Vadodara Mistry offers professional spiral staircase design. ✓ 12+ Years Experience ✓ 10,000+ Happy Customers ✓ Best Prices ✓ Quality Work. Call +91 93139 82980`,
  keywords: [
    "Spiral Staircase",
    "Spiral Staircase Vadodara",
    "Spiral Staircase services",
    "best spiral staircase",
    "spiral staircase near me",
    "spiral staircase cost Vadodara",
    "Vadodara Mistry",
  ],
  openGraph: {
    title: `Spiral Staircase in Vadodara | Vadodara Mistry`,
    description: `Professional spiral staircase services in Vadodara. 12+ years experience, 10,000+ satisfied customers.`,
    url: "https://vadodaramistry.com/spiral-staircase-vadodara",
    siteName: "Vadodara Mistry",
    locale: "en_IN",
    type: "website",
  },
};

export default function SpiralStaircaseVadodaraPage() {
  return (
    <>
      {/* Schema Markup */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumb */}
      <nav className="bg-gray-100 py-3">
        <div className="container mx-auto px-4">
          <ol className="flex items-center gap-2 text-sm text-gray-600">
            <li><Link href="/" className="hover:text-orange-600">Home</Link></li>
            <li>/</li>
            <li><Link href="/fabrication-vadodara" className="hover:text-orange-600">Fabrication</Link></li>
            <li>/</li>
            <li className="text-orange-600 font-medium">Spiral Staircase</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={`${config.gradient} py-8 md:py-20`}>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left: Content */}
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm mb-4">
                <span>⭐ 4.8/5 Rating • 10,000+ Happy Customers</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
                Spiral Staircase in Vadodara
              </h1>
              <p className="text-lg md:text-xl mb-6 text-white/90">
                Spiral staircase design in Vadodara. Trusted by thousands of customers. 
                Quality work at affordable prices with warranty.
              </p>
              
              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-lg">
                  <span>✓</span>
                  <span className="text-sm">12+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-lg">
                  <span>✓</span>
                  <span className="text-sm">Free Quotation</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-lg">
                  <span>✓</span>
                  <span className="text-sm">Warranty Included</span>
                </div>
              </div>

              <div className="hidden md:flex flex-col sm:flex-row gap-4">
                <CallButton className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg" />
                <a
                  href={`https://wa.me/919313982980?text=Hi, I need Spiral Staircase service in Vadodara`}
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg inline-flex items-center justify-center gap-2"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  </svg>
                  WhatsApp Us
                </a>
              </div>
            </div>

            {/* Right: Booking Form */}
            <div className="bg-white rounded-2xl p-6 shadow-2xl">
              <BookingForm title={`Get Free Spiral Staircase Quote`} />
            </div>
          </div>
        </div>
      </section>

      {/* Mobile CTA Buttons */}
      <div className="md:hidden sticky top-0 z-40 bg-white shadow-md p-3 flex gap-2">
        <CallButton className="flex-1 bg-orange-600 text-white py-3 rounded-lg font-semibold text-center" />
        <a
          href="https://wa.me/919313982980"
          className="flex-1 bg-green-600 text-white py-3 rounded-lg font-semibold text-center"
        >
          WhatsApp
        </a>
      </div>

      {/* Business Address Bar */}
      <section className="py-4 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-orange-600">📍</span>
              <span>{businessConfig.address.locality}, {businessConfig.address.city}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-orange-600">📞</span>
              <a href="tel:+919313982980" className="hover:text-orange-600">{businessConfig.phoneDisplay}</a>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-orange-600">🕐</span>
              <span>Open 7 Days: {businessConfig.hours.weekdays}</span>
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
            Why Choose Us for Spiral Staircase?
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: "✓", title: "12+ Years Experience", desc: "Trusted expertise since 2012" },
              { icon: "⚡", title: "Quick Response", desc: "Same day service available" },
              { icon: "💰", title: "Best Prices", desc: "Transparent pricing, no hidden costs" },
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

      {/* Extended Content Section - 700+ Words */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                About Spiral Staircase Services in Vadodara
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p>{keywordContent.introduction}</p>
                <p>{keywordContent.detailedDescription}</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Why Spiral Staircase Matters for Your Property
              </h3>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p>
                  Professional spiral staircase services are essential for maintaining and enhancing your property in Vadodara. 
                  Whether you own a residential property in Alkapuri, a commercial establishment in Sayajigunj, or an industrial 
                  facility in Makarpura GIDC, quality spiral staircase work ensures longevity, aesthetics, and value.
                </p>
                <p>
                  At Vadodara Mistry, we understand that every project is unique. Our team of 50+ skilled professionals brings 
                  diverse expertise to handle everything from simple repairs to complex installations. We've served over 10,000 
                  customers across Vadodara, building a reputation for reliability, quality, and customer satisfaction.
                </p>
                <p>
                  Our approach combines traditional craftsmanship with modern techniques and materials. We stay updated with 
                  the latest industry standards and use premium quality materials from trusted brands, ensuring your investment 
                  delivers lasting results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Vadodara Mistry for Spiral Staircase?
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
            Our Spiral Staircase Process
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We follow a systematic approach to ensure quality results for every spiral staircase project
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

      {/* Testimonials Section */}
      <Testimonials filterService="fabrication" limit={6} />

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Spiral Staircase Service Areas in Vadodara
          </h2>
          <p className="text-center text-gray-600 mb-12">
            We provide spiral staircase services across all Vadodara areas
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {vadodaraAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/${area.slug}-vadodara`}
                className="p-3 bg-gray-50 hover:bg-orange-50 rounded-lg text-center text-sm hover:text-orange-600 transition"
              >
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section with 10 Unique FAQs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Frequently Asked Questions About Spiral Staircase
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Find answers to common questions about our spiral staircase services in Vadodara
          </p>
          <div className="max-w-3xl mx-auto space-y-4">
            {uniqueFAQs.map((faq, idx) => (
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

      {/* Final CTA with Business Info */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Book Spiral Staircase Service Today
              </h2>
              <p className="text-gray-600 mb-8">
                Fill the form and our team will contact you within 30 minutes to discuss your requirements.
              </p>
              <BookingForm />
            </div>
            <div>
              <BusinessInfo variant="full" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`${config.gradient} py-16`}>
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Need Spiral Staircase Service in Vadodara?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Call us now for instant service. Available 7 days a week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CallButton className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg" />
            <a
              href="https://wa.me/919313982980"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg inline-flex items-center justify-center gap-2"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <WhatsAppFloat />
    </>
  );
}
