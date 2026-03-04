#!/usr/bin/env node

/**
 * Comprehensive Page Generator for Vadodara Mistry
 * Generates SEO-optimized pages with:
 * - 700+ words unique content
 * - 10 unique FAQs per page with FAQ Schema
 * - Business address & testimonials
 * - Booking form in hero section
 * - Full schema markup (LocalBusiness, Service, FAQ, Breadcrumb)
 */

const fs = require("fs");
const path = require("path");

// Data file path
const dataFilePath = path.join(__dirname, "../lib/data.ts");
const dataContent = fs.readFileSync(dataFilePath, "utf-8");

// Extract arrays using regex
function extractArray(content, arrayName) {
  const regex = new RegExp(`export const ${arrayName} = \\[([\\s\\S]*?)\\];`, "m");
  const match = content.match(regex);
  if (!match) return [];
  
  const arrayContent = match[1];
  const items = [];
  
  const objectRegex = /\{\s*slug:\s*"([^"]+)"(?:,\s*(?:title|name|areaName):\s*"([^"]+)")?(?:,\s*description:\s*"([^"]+)")?\s*\}/g;
  let objMatch;
  while ((objMatch = objectRegex.exec(arrayContent)) !== null) {
    items.push({
      slug: objMatch[1],
      title: objMatch[2] || "",
      description: objMatch[3] || "",
    });
  }
  return items;
}

function extractKeywordsWithCategory(content, arrayName, category) {
  const items = extractArray(content, arrayName);
  return items.map((item) => ({ ...item, category }));
}

// Parse data
const paintingKeywords = extractKeywordsWithCategory(dataContent, "paintingKeywords", "painting");
const civilKeywords = extractKeywordsWithCategory(dataContent, "civilKeywords", "civil");
const plumbingKeywords = extractKeywordsWithCategory(dataContent, "plumbingKeywords", "plumbing");
const carpenterKeywords = extractKeywordsWithCategory(dataContent, "carpenterKeywords", "carpenter");
const fabricationKeywords = extractKeywordsWithCategory(dataContent, "fabricationKeywords", "fabrication");
const solarKeywords = extractKeywordsWithCategory(dataContent, "solarKeywords", "solar");
const areaKeywords = extractArray(dataContent, "areaKeywords").map((a) => ({
  ...a,
  areaName: a.title,
}));

const allKeywords = [
  ...paintingKeywords,
  ...civilKeywords,
  ...plumbingKeywords,
  ...carpenterKeywords,
  ...fabricationKeywords,
  ...solarKeywords,
];

console.log("Parsed data:");
console.log(`  All keywords: ${allKeywords.length}`);
console.log(`  Area keywords: ${areaKeywords.length}`);

const appDir = path.join(__dirname, "../app");

// Helper to convert slug to PascalCase
function toPascalCase(slug) {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
}

// Generate keyword page content
function generateKeywordPageContent(keyword) {
  const { slug, title, description, category } = keyword;
  
  return `import { Metadata } from "next";
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
  slug: "${slug}",
  title: "${title}",
  description: "${description}",
  category: "${category}" as const,
};

const category = "${category}";
const config = categoryConfig["${category}"];
const images = categoryImages["${category}"];
const content = categoryContent["${category}"];
const keywordContent = generateKeywordContent(keyword, "${category}");
const extendedContent = generateExtendedContent(keyword, "${category}");
const uniqueFAQs = generateUniqueFAQs(keyword, "${category}");

// Schema data
const faqSchema = generateFAQSchema(uniqueFAQs);
const localBusinessSchema = generateLocalBusinessSchema("${title}");
const serviceSchema = generateServiceSchema(keyword);
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "https://vadodaramistry.com" },
  { name: "${category.charAt(0).toUpperCase() + category.slice(1)}", url: "https://vadodaramistry.com/${category}-vadodara" },
  { name: "${title}", url: "https://vadodaramistry.com/${slug}" },
]);

const relatedServices = allKeywords
  .filter((kw) => kw.category === "${category}" && kw.slug !== "${slug}")
  .slice(0, 8);

export const metadata: Metadata = {
  title: \`${title} in Vadodara | Professional ${title} Services - Vadodara Mistry\`,
  description: \`Looking for ${title.toLowerCase()} in Vadodara? Vadodara Mistry offers professional ${description.toLowerCase()}. ✓ 12+ Years Experience ✓ 10,000+ Happy Customers ✓ Best Prices ✓ Quality Work. Call +91 93139 82980\`,
  keywords: [
    "${title}",
    "${title} Vadodara",
    "${title} services",
    "best ${title.toLowerCase()}",
    "${title.toLowerCase()} near me",
    "${title.toLowerCase()} cost Vadodara",
    "Vadodara Mistry",
  ],
  openGraph: {
    title: \`${title} in Vadodara | Vadodara Mistry\`,
    description: \`Professional ${title.toLowerCase()} services in Vadodara. 12+ years experience, 10,000+ satisfied customers.\`,
    url: "https://vadodaramistry.com/${slug}",
    siteName: "Vadodara Mistry",
    locale: "en_IN",
    type: "website",
  },
};

export default function ${toPascalCase(slug)}Page() {
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
            <li><Link href="/${category}-vadodara" className="hover:text-orange-600">${category.charAt(0).toUpperCase() + category.slice(1)}</Link></li>
            <li>/</li>
            <li className="text-orange-600 font-medium">${title}</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={\`\${config.gradient} py-8 md:py-20\`}>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left: Content */}
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm mb-4">
                <span>⭐ 4.8/5 Rating • 10,000+ Happy Customers</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
                ${title} in Vadodara
              </h1>
              <p className="text-lg md:text-xl mb-6 text-white/90">
                ${description} in Vadodara. Trusted by thousands of customers. 
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
                  href={\`https://wa.me/919313982980?text=Hi, I need ${title} service in Vadodara\`}
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
              <BookingForm title={\`Get Free ${title} Quote\`} />
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
            Why Choose Us for ${title}?
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
                About ${title} Services in Vadodara
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p>{keywordContent.introduction}</p>
                <p>{keywordContent.detailedDescription}</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Why ${title} Matters for Your Property
              </h3>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p>
                  Professional ${title.toLowerCase()} services are essential for maintaining and enhancing your property in Vadodara. 
                  Whether you own a residential property in Alkapuri, a commercial establishment in Sayajigunj, or an industrial 
                  facility in Makarpura GIDC, quality ${title.toLowerCase()} work ensures longevity, aesthetics, and value.
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
            Why Choose Vadodara Mistry for ${title}?
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
            Our ${title} Process
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We follow a systematic approach to ensure quality results for every ${title.toLowerCase()} project
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
      <Testimonials filterService="${category}" limit={6} />

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            ${title} Service Areas in Vadodara
          </h2>
          <p className="text-center text-gray-600 mb-12">
            We provide ${title.toLowerCase()} services across all Vadodara areas
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {vadodaraAreas.map((area) => (
              <Link
                key={area.slug}
                href={\`/services-\${area.slug}-vadodara\`}
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
            Frequently Asked Questions About ${title}
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Find answers to common questions about our ${title.toLowerCase()} services in Vadodara
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
                href={\`/\${service.slug}\`}
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
                Book ${title} Service Today
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
      <section className={\`\${config.gradient} py-16\`}>
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Need ${title} Service in Vadodara?
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
`;
}

// Generate area page content
function generateAreaPageContent(areaKeyword) {
  const { slug, areaName } = areaKeyword;
  
  return `import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { vadodaraAreas, categoryImages } from "@/lib/data";
import { businessConfig, testimonials, generateFAQSchema, generateLocalBusinessSchema, generateBreadcrumbSchema } from "@/lib/business-config";
import BookingForm from "@/components/BookingForm";
import CallButton from "@/components/CallButton";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ImageSlider from "@/components/ImageSlider";
import Testimonials from "@/components/Testimonials";
import BusinessInfo from "@/components/BusinessInfo";

const areaName = "${areaName}";

const nearbyAreas = vadodaraAreas.filter((a) => a.name !== "${areaName}").slice(0, 8);

const serviceCategories = [
  { title: "POP & Painting", services: ["POP False Ceiling", "Wall Painting", "Texture Painting", "Interior Painting"], href: "/pop-false-ceiling-vadodara", color: "orange" },
  { title: "Civil Work", services: ["Tile Fitting", "Waterproofing", "Bathroom Renovation", "Flooring"], href: "/civil-contractors-vadodara", color: "amber" },
  { title: "Plumbing", services: ["Pipe Fitting", "Water Leak Repair", "Geyser Repair", "Drainage Work"], href: "/plumbers-vadodara", color: "blue" },
  { title: "Carpenter", services: ["Modular Kitchen", "Wardrobe", "TV Unit", "Door Fitting"], href: "/carpenter-vadodara", color: "green" },
  { title: "Fabrication", services: ["Gate Fabrication", "Window Grill", "SS Railing", "Welding Work"], href: "/fabrication-vadodara", color: "gray" },
  { title: "Solar", services: ["Solar Installation", "Solar Cleaning", "Solar AMC", "Inverter Repair"], href: "/solar-maintenance-vadodara", color: "yellow" },
];

// Area-specific FAQs (10 unique)
const areaFAQs = [
  { question: "What services does Vadodara Mistry provide in ${areaName}?", answer: "Vadodara Mistry provides comprehensive home services in ${areaName} including POP false ceiling, wall painting, civil work, plumbing, carpentry, fabrication, and solar services. We've served hundreds of families and businesses in ${areaName} with quality workmanship." },
  { question: "How quickly can you reach ${areaName} for emergency services?", answer: "For emergency services in ${areaName}, our team typically arrives within 30-60 minutes. We have professionals stationed across Vadodara to ensure quick response times in all areas including ${areaName}." },
  { question: "Do you charge extra for services in ${areaName}?", answer: "No, we do not charge any extra for services in ${areaName}. Our pricing is uniform across all areas of Vadodara. The cost depends only on the scope of work and materials used, not on location." },
  { question: "What is your service area coverage near ${areaName}?", answer: "Besides ${areaName}, we serve all nearby localities in Vadodara. Our complete coverage includes 40+ areas across the city, ensuring seamless service no matter where your property is located." },
  { question: "Can I see examples of your work in ${areaName}?", answer: "Yes! We've completed numerous projects in ${areaName} and surrounding areas. Contact us and we'll share photos and references from satisfied customers in your area for the type of work you need." },
  { question: "What are your working hours for ${areaName} services?", answer: "We work 7 days a week from 7 AM to 9 PM in ${areaName}. For emergencies, we provide 24/7 plumbing services. Weekend and holiday services are available at no extra charge." },
  { question: "How do I book a service in ${areaName}?", answer: "Booking is easy! Call us at +91 93139 82980, send a WhatsApp message, or fill our online form. Our team will confirm your booking and schedule a convenient time for site visit in ${areaName}." },
  { question: "Do you provide warranty for work done in ${areaName}?", answer: "Absolutely! All our work in ${areaName} comes with comprehensive warranty. The warranty period varies by service type - from 1 year for painting to 5 years for waterproofing. We honor all warranty claims promptly." },
  { question: "What payment options do you accept in ${areaName}?", answer: "We accept all payment methods including cash, UPI (Google Pay, PhonePe, Paytm), bank transfer, and cheque. For larger projects, we offer milestone-based payment terms for customer convenience." },
  { question: "Why should ${areaName} residents choose Vadodara Mistry?", answer: "With 12+ years of experience, 10,000+ happy customers, and deep local knowledge, Vadodara Mistry is ${areaName}'s trusted home services partner. We offer transparent pricing, quality workmanship, and after-service support." },
];

const faqSchema = generateFAQSchema(areaFAQs);
const localBusinessSchema = generateLocalBusinessSchema("Home Services in ${areaName}");
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "https://vadodaramistry.com" },
  { name: "Areas", url: "https://vadodaramistry.com/areas" },
  { name: "${areaName}", url: "https://vadodaramistry.com/${slug}" },
]);

export const metadata: Metadata = {
  title: \`Home Services in ${areaName}, Vadodara | Painter, Plumber, Carpenter - Vadodara Mistry\`,
  description: \`Best home services in ${areaName}, Vadodara. Professional painters, plumbers, carpenters, civil contractors & fabrication work. 12+ years experience, 10,000+ customers. Call +91 93139 82980\`,
  keywords: \`home services ${areaName.toLowerCase()} vadodara, painter ${areaName.toLowerCase()}, plumber ${areaName.toLowerCase()}, carpenter ${areaName.toLowerCase()}, civil contractor ${areaName.toLowerCase()}\`,
  openGraph: {
    title: \`Home Services in ${areaName}, Vadodara | Vadodara Mistry\`,
    description: \`Professional home services in ${areaName}, Vadodara. Trusted by thousands of customers.\`,
    url: "https://vadodaramistry.com/${slug}",
    type: "website",
  },
};

export default function ${toPascalCase(slug)}Page() {
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
            <li><Link href="/areas" className="hover:text-orange-600">Areas</Link></li>
            <li>/</li>
            <li className="text-orange-600 font-medium">${areaName}</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section with Booking Form */}
      <section className="relative bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 text-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left: Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm mb-6">
                <span>📍 Serving ${areaName}, Vadodara</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                Best Home Services in ${areaName}, Vadodara
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Professional painters, plumbers, carpenters, civil contractors & more in ${areaName}. 
                Trusted by families and businesses across Vadodara.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                  <p className="text-3xl font-bold">12+</p>
                  <p className="text-sm text-white/80">Years Experience</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold">10K+</p>
                  <p className="text-sm text-white/80">Happy Customers</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold">4.8</p>
                  <p className="text-sm text-white/80">Google Rating</p>
                </div>
              </div>

              <div className="hidden md:flex flex-col sm:flex-row gap-4">
                <CallButton className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg" />
                <a
                  href={\`https://wa.me/919313982980?text=Hi, I need home services in ${areaName}, Vadodara\`}
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg inline-flex items-center justify-center gap-2"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>

            {/* Right: Booking Form */}
            <div className="bg-white rounded-2xl p-6 shadow-2xl">
              <BookingForm title={\`Get Free Quote in ${areaName}\`} />
            </div>
          </div>
        </div>
      </section>

      {/* Mobile CTA */}
      <div className="md:hidden sticky top-0 z-40 bg-white shadow-md p-3 flex gap-2">
        <CallButton className="flex-1 bg-orange-600 text-white py-3 rounded-lg font-semibold text-center" />
        <a
          href="https://wa.me/919313982980"
          className="flex-1 bg-green-600 text-white py-3 rounded-lg font-semibold text-center"
        >
          WhatsApp
        </a>
      </div>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Our Services in ${areaName}
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Comprehensive home services delivered by experienced professionals right in your neighborhood
          </p>
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

      {/* About Services in Area - Extended Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Professional Home Services in ${areaName}, Vadodara
            </h2>
            <div className="prose prose-lg max-w-none bg-white rounded-2xl p-8 shadow-sm">
              <p>
                ${areaName} is one of Vadodara's prominent localities, known for its residential and commercial establishments. 
                At Vadodara Mistry, we're proud to serve the ${areaName} community with comprehensive home services that 
                residents and businesses trust.
              </p>
              <p>
                Whether you're looking to renovate your home with modern POP false ceiling designs, refresh your walls with 
                premium Asian Paints, fix plumbing issues, or install custom furniture, our team of 50+ skilled professionals 
                is ready to help. We've successfully completed hundreds of projects in ${areaName} and surrounding areas.
              </p>
              <p>
                Our service approach in ${areaName} focuses on understanding local requirements, providing fair pricing, 
                and delivering quality workmanship. We use premium materials from trusted brands and ensure every project 
                meets our high standards. With 12+ years of experience serving Vadodara, we've built lasting relationships 
                with families who trust us for all their home service needs.
              </p>
              <p>
                What sets us apart in ${areaName} is our commitment to customer satisfaction. From the first call to project 
                completion, we maintain clear communication, stick to timelines, and ensure a clean handover. Our warranty 
                coverage gives you peace of mind, and our responsive support team is always available for any post-service concerns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Slider */}
      <section className="py-12 bg-white">
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why ${areaName} Residents Choose Vadodara Mistry
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: "✓", title: "Local Experts", desc: \`Professionals who know ${areaName} well\` },
              { icon: "⚡", title: "Quick Response", desc: "30-60 min arrival time" },
              { icon: "💰", title: "Fair Pricing", desc: "No hidden charges" },
              { icon: "🛡️", title: "Quality Work", desc: "Warranty on all services" },
            ].map((item, idx) => (
              <div key={idx} className="text-center p-6 rounded-xl bg-white shadow-sm">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials limit={6} />

      {/* FAQ Section with 10 Unique FAQs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Frequently Asked Questions - ${areaName}
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Common questions about our services in ${areaName}, Vadodara
          </p>
          <div className="max-w-3xl mx-auto space-y-4">
            {areaFAQs.map((faq, idx) => (
              <details
                key={idx}
                className="bg-gray-50 rounded-xl p-6 group"
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

      {/* Contact Section with Business Info */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Book Service in ${areaName}
              </h2>
              <p className="text-gray-600 mb-8">
                Fill the form and we&apos;ll contact you within 30 minutes
              </p>
              <BookingForm />
            </div>
            <div>
              <BusinessInfo variant="full" />
            </div>
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
                href={\`/services-\${area.slug}-vadodara\`}
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
            Need Home Services in ${areaName}?
          </h2>
          <p className="text-xl mb-8 text-white/90">Call us now for instant service!</p>
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
`;
}

// Create all pages
let created = 0;
let skipped = 0;

// Create keyword pages
for (const keyword of allKeywords) {
  const folderPath = path.join(appDir, keyword.slug);
  const pagePath = path.join(folderPath, "page.tsx");
  
  // Always overwrite existing pages to update content
  fs.mkdirSync(folderPath, { recursive: true });
  fs.writeFileSync(pagePath, generateKeywordPageContent(keyword));
  created++;
}

// Create area pages
for (const area of areaKeywords) {
  const folderPath = path.join(appDir, area.slug);
  const pagePath = path.join(folderPath, "page.tsx");
  // Always overwrite to update content
  fs.mkdirSync(folderPath, { recursive: true });
  fs.writeFileSync(pagePath, generateAreaPageContent(area));
  created++;
}

console.log(`\nDone!`);
console.log(`  Created/Updated: ${created} pages`);
console.log(`  Skipped: ${skipped} pages`);
