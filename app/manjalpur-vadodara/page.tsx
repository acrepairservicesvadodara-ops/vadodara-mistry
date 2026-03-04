import { Metadata } from "next";
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

const areaName = "Manjalpur";

const nearbyAreas = vadodaraAreas.filter((a) => a.name !== "Manjalpur").slice(0, 8);

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
  { question: "What services does Vadodara Mistry provide in Manjalpur?", answer: "Vadodara Mistry provides comprehensive home services in Manjalpur including POP false ceiling, wall painting, civil work, plumbing, carpentry, fabrication, and solar services. We've served hundreds of families and businesses in Manjalpur with quality workmanship." },
  { question: "How quickly can you reach Manjalpur for emergency services?", answer: "For emergency services in Manjalpur, our team typically arrives within 30-60 minutes. We have professionals stationed across Vadodara to ensure quick response times in all areas including Manjalpur." },
  { question: "Do you charge extra for services in Manjalpur?", answer: "No, we do not charge any extra for services in Manjalpur. Our pricing is uniform across all areas of Vadodara. The cost depends only on the scope of work and materials used, not on location." },
  { question: "What is your service area coverage near Manjalpur?", answer: "Besides Manjalpur, we serve all nearby localities in Vadodara. Our complete coverage includes 40+ areas across the city, ensuring seamless service no matter where your property is located." },
  { question: "Can I see examples of your work in Manjalpur?", answer: "Yes! We've completed numerous projects in Manjalpur and surrounding areas. Contact us and we'll share photos and references from satisfied customers in your area for the type of work you need." },
  { question: "What are your working hours for Manjalpur services?", answer: "We work 7 days a week from 7 AM to 9 PM in Manjalpur. For emergencies, we provide 24/7 plumbing services. Weekend and holiday services are available at no extra charge." },
  { question: "How do I book a service in Manjalpur?", answer: "Booking is easy! Call us at +91 93139 82980, send a WhatsApp message, or fill our online form. Our team will confirm your booking and schedule a convenient time for site visit in Manjalpur." },
  { question: "Do you provide warranty for work done in Manjalpur?", answer: "Absolutely! All our work in Manjalpur comes with comprehensive warranty. The warranty period varies by service type - from 1 year for painting to 5 years for waterproofing. We honor all warranty claims promptly." },
  { question: "What payment options do you accept in Manjalpur?", answer: "We accept all payment methods including cash, UPI (Google Pay, PhonePe, Paytm), bank transfer, and cheque. For larger projects, we offer milestone-based payment terms for customer convenience." },
  { question: "Why should Manjalpur residents choose Vadodara Mistry?", answer: "With 12+ years of experience, 10,000+ happy customers, and deep local knowledge, Vadodara Mistry is Manjalpur's trusted home services partner. We offer transparent pricing, quality workmanship, and after-service support." },
];

const faqSchema = generateFAQSchema(areaFAQs);
const localBusinessSchema = generateLocalBusinessSchema("Home Services in Manjalpur");
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "https://vadodaramistry.com" },
  { name: "Areas", url: "https://vadodaramistry.com/areas" },
  { name: "Manjalpur", url: "https://vadodaramistry.com/manjalpur-vadodara" },
]);

export const metadata: Metadata = {
  title: `Home Services in Manjalpur, Vadodara | Painter, Plumber, Carpenter - Vadodara Mistry`,
  description: `Best home services in Manjalpur, Vadodara. Professional painters, plumbers, carpenters, civil contractors & fabrication work. 12+ years experience, 10,000+ customers. Call +91 93139 82980`,
  keywords: `home services manjalpur vadodara, painter manjalpur, plumber manjalpur, carpenter manjalpur, civil contractor manjalpur`,
  openGraph: {
    title: `Home Services in Manjalpur, Vadodara | Vadodara Mistry`,
    description: `Professional home services in Manjalpur, Vadodara. Trusted by thousands of customers.`,
    url: "https://vadodaramistry.com/manjalpur-vadodara",
    type: "website",
  },
};

export default function ServicesManjalpurVadodaraPage() {
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
            <li className="text-orange-600 font-medium">Manjalpur</li>
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
                <span>📍 Serving Manjalpur, Vadodara</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                Best Home Services in Manjalpur, Vadodara
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Professional painters, plumbers, carpenters, civil contractors & more in Manjalpur. 
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
                  href={`https://wa.me/919313982980?text=Hi, I need home services in Manjalpur, Vadodara`}
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg inline-flex items-center justify-center gap-2"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>

            {/* Right: Booking Form */}
            <div className="bg-white rounded-2xl p-6 shadow-2xl">
              <BookingForm title={`Get Free Quote in Manjalpur`} />
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
            Our Services in Manjalpur
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
              Professional Home Services in Manjalpur, Vadodara
            </h2>
            <div className="prose prose-lg max-w-none bg-white rounded-2xl p-8 shadow-sm">
              <p>
                Manjalpur is one of Vadodara's prominent localities, known for its residential and commercial establishments. 
                At Vadodara Mistry, we're proud to serve the Manjalpur community with comprehensive home services that 
                residents and businesses trust.
              </p>
              <p>
                Whether you're looking to renovate your home with modern POP false ceiling designs, refresh your walls with 
                premium Asian Paints, fix plumbing issues, or install custom furniture, our team of 50+ skilled professionals 
                is ready to help. We've successfully completed hundreds of projects in Manjalpur and surrounding areas.
              </p>
              <p>
                Our service approach in Manjalpur focuses on understanding local requirements, providing fair pricing, 
                and delivering quality workmanship. We use premium materials from trusted brands and ensure every project 
                meets our high standards. With 12+ years of experience serving Vadodara, we've built lasting relationships 
                with families who trust us for all their home service needs.
              </p>
              <p>
                What sets us apart in Manjalpur is our commitment to customer satisfaction. From the first call to project 
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
            Why Manjalpur Residents Choose Vadodara Mistry
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: "✓", title: "Local Experts", desc: `Professionals who know Manjalpur well` },
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
            Frequently Asked Questions - Manjalpur
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Common questions about our services in Manjalpur, Vadodara
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
                Book Service in Manjalpur
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
                href={`/${area.slug}-vadodara`}
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
            Need Home Services in Manjalpur?
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
