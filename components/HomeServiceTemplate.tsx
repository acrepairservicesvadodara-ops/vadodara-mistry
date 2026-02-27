import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, Star, Clock, Shield, Award, MapPin, ArrowRight, Users } from "lucide-react";
import BookingForm from "@/components/BookingForm";

interface ServiceConfig {
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroDescription: string;
  features: string[];
  pricing: { service: string; price: string }[];
  process: { step: number; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  relatedServices: { name: string; href: string }[];
  areas: { name: string; href: string }[];
  category: "painting" | "civil" | "plumbing" | "carpenter" | "fabrication" | "solar";
}

interface HomeServiceTemplateProps {
  config: ServiceConfig;
  slug: string;
}

const categoryColors = {
  painting: { primary: "orange", gradient: "from-orange-600/95 via-orange-600/90 to-orange-500/85" },
  civil: { primary: "amber", gradient: "from-amber-700/95 via-amber-600/90 to-amber-500/85" },
  plumbing: { primary: "blue", gradient: "from-blue-700/95 via-blue-600/90 to-blue-500/85" },
  carpenter: { primary: "green", gradient: "from-green-700/95 via-green-600/90 to-green-500/85" },
  fabrication: { primary: "gray", gradient: "from-gray-800/95 via-gray-700/90 to-gray-600/85" },
  solar: { primary: "yellow", gradient: "from-yellow-600/95 via-orange-500/90 to-orange-400/85" },
};

const categoryBackgrounds = {
  painting: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1920&q=80",
  civil: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80",
  plumbing: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=1920&q=80",
  carpenter: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&q=80",
  fabrication: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1920&q=80",
  solar: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&q=80",
};

export default function HomeServiceTemplate({ config, slug }: HomeServiceTemplateProps) {
  const colors = categoryColors[config.category];
  const bgImage = categoryBackgrounds[config.category];

  return (
    <>
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={bgImage}
            alt={config.heroTitle}
            fill
            className="object-cover"
            priority
          />
          <div className={`absolute inset-0 bg-gradient-to-r ${colors.gradient}`} />
        </div>
        <div className="container mx-auto px-4 py-8 md:py-20 relative">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Mobile: Booking Form First */}
            <div className="md:hidden">
              <BookingForm title={`Get ${config.title} Quote`} compact />
            </div>
            
            <div className="order-2 md:order-1">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm mb-4 md:mb-6">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span>Trusted by 5000+ customers in Vadodara</span>
              </div>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
                {config.heroTitle}
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-6 md:mb-8 leading-relaxed">
                {config.heroDescription}
              </p>
              <div className="hidden md:flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="tel:+917600337866"
                  className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition shadow-lg"
                >
                  <Phone size={22} />
                  Call: +91 76003 37866
                </a>
                <a
                  href="https://wa.me/917600337866"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 transition"
                >
                  WhatsApp Us
                </a>
              </div>
              <div className="flex flex-wrap gap-3 md:gap-4 text-xs md:text-sm">
                {config.features.slice(0, 3).map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Desktop: Booking Form */}
            <div className="hidden md:block order-1 md:order-2">
              <BookingForm title={`Get ${config.title} Quote`} />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our {config.title}?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professional {config.title.toLowerCase()} with experienced mistries, quality materials, and guaranteed satisfaction.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {config.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{feature}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {config.title} Rates in Vadodara
            </h2>
            <p className="text-gray-600">Transparent pricing with no hidden charges</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <table className="w-full">
                <thead className="bg-orange-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Service</th>
                    <th className="px-6 py-4 text-right font-semibold">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {config.pricing.map((item, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-6 py-4 text-gray-900">{item.service}</td>
                      <td className="px-6 py-4 text-right font-semibold text-orange-600">{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-center text-sm text-gray-500 mt-4">
              * Prices may vary based on work requirements. Contact us for exact quotation.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-gray-600">Simple process to get your work done</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {config.process.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-orange-600">
                  {step.step}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className={`py-16 bg-gradient-to-r ${colors.gradient} text-white`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Vadodara Mistry?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Verified Mistries</h3>
              <p className="text-white/80">Background verified experts</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">10+ Years</h3>
              <p className="text-white/80">Experience in Vadodara</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">On-Time Delivery</h3>
              <p className="text-white/80">Punctual and reliable</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Guarantee</h3>
              <p className="text-white/80">Work warranty provided</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Related Services
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {config.relatedServices.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="bg-white hover:bg-orange-50 border border-gray-200 hover:border-orange-300 p-4 rounded-lg text-center transition group"
              >
                <span className="text-gray-800 group-hover:text-orange-600 font-medium text-sm">
                  {service.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {config.title} Service Areas
            </h2>
            <p className="text-gray-600">We provide services across all areas of Vadodara</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {config.areas.map((area) => (
              <Link
                key={area.href}
                href={area.href}
                className="flex items-center gap-2 bg-gray-50 hover:bg-orange-50 border border-gray-200 hover:border-orange-300 p-3 rounded-lg transition group"
              >
                <MapPin size={16} className="text-orange-600 flex-shrink-0" />
                <span className="text-gray-800 group-hover:text-orange-600 text-sm font-medium">
                  {area.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {config.faqs.map((faq, idx) => (
              <details key={idx} className="bg-white rounded-lg group border border-gray-200">
                <summary className="p-4 cursor-pointer font-semibold text-gray-900 flex justify-between items-center">
                  {faq.question}
                  <span className="text-orange-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-4 pb-4 text-gray-600">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-16 bg-gradient-to-r ${colors.gradient} text-white`}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need {config.title} in Vadodara?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get a free quotation today. Our experts are ready to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+917600337866"
              className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition"
            >
              <Phone size={22} />
              +91 76003 37866
            </a>
            <a
              href="https://wa.me/917600337866"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

// Export service configs for reuse
export const paintingServiceConfig = {
  areas: [
    { name: "Alkapuri", href: "/services-alkapuri-vadodara" },
    { name: "Gotri", href: "/services-gotri-vadodara" },
    { name: "Manjalpur", href: "/services-manjalpur-vadodara" },
    { name: "Akota", href: "/services-akota-vadodara" },
    { name: "Bhayli", href: "/services-bhayli-vadodara" },
    { name: "Karelibaug", href: "/services-karelibaug-vadodara" },
    { name: "Waghodia Road", href: "/services-waghodia-road-vadodara" },
    { name: "Makarpura", href: "/services-makarpura-vadodara" },
    { name: "Chhani", href: "/services-chhani-vadodara" },
    { name: "Harni", href: "/services-harni-vadodara" },
    { name: "Fatehgunj", href: "/services-fatehgunj-vadodara" },
    { name: "Gorwa", href: "/services-gorwa-vadodara" },
  ],
};

export const civilServiceConfig = {
  areas: paintingServiceConfig.areas,
};

export const plumbingServiceConfig = {
  areas: paintingServiceConfig.areas,
};

export const carpenterServiceConfig = {
  areas: paintingServiceConfig.areas,
};

export const fabricationServiceConfig = {
  areas: [
    ...paintingServiceConfig.areas,
    { name: "Makarpura GIDC", href: "/services-makarpura-gidc-vadodara" },
    { name: "Nandesari GIDC", href: "/services-nandesari-gidc-vadodara" },
  ],
};

export const solarServiceConfig = {
  areas: [
    { name: "Makarpura GIDC", href: "/services-makarpura-gidc-vadodara" },
    { name: "Nandesari GIDC", href: "/services-nandesari-gidc-vadodara" },
    { name: "Waghodia GIDC", href: "/services-waghodia-gidc-vadodara" },
    { name: "Por Ramangamdi", href: "/services-por-ramangamdi-vadodara" },
    { name: "Savli Manjusar", href: "/services-savli-manjusar-vadodara" },
    { name: "Ranoli GIDC", href: "/services-ranoli-gidc-vadodara" },
    { name: "Karjan", href: "/services-karjan-vadodara" },
    { name: "Padra", href: "/services-padra-vadodara" },
    { name: "Jambusar", href: "/services-jambusar-vadodara" },
  ],
};
