import Link from "next/link";
import { Phone, CheckCircle, Star, Clock, Shield, Award, MapPin, ArrowRight, Wrench, Settings, ThermometerSnowflake } from "lucide-react";

interface AreaPageProps {
  area: string;
  areaDisplay: string;
  city: string;
  cityDisplay: string;
  nearbyAreas: { name: string; slug: string }[];
}

export default function AreaPageTemplate({ area, areaDisplay, city, cityDisplay, nearbyAreas }: AreaPageProps) {
  const services = [
    { name: "AC Repair", slug: "ac-repair", icon: Wrench },
    { name: "AC Service", slug: "ac-service", icon: Settings },
    { name: "AC Installation", slug: "ac-installation", icon: ThermometerSnowflake },
    { name: "AC AMC", slug: "ac-amc", icon: Shield },
    { name: "AC Gas Refilling", slug: "ac-gas-refilling", icon: Settings },
    { name: "Chiller Repair", slug: "chiller-repair", icon: Wrench },
  ];

  const acTypes = [
    "Split AC",
    "Window AC",
    "Cassette AC",
    "Ductable AC",
    "Tower AC",
    "Central AC",
  ];

  const brands = [
    "Daikin", "Voltas", "Blue Star", "Carrier", "LG", "Samsung",
    "Hitachi", "O General", "Mitsubishi", "Panasonic", "Whirlpool", "Godrej"
  ];

  const faqs = [
    {
      question: `What is the AC repair cost in ${areaDisplay}, ${cityDisplay}?`,
      answer: `AC repair costs in ${areaDisplay} start from ₹199 for inspection. Basic repairs cost ₹500-₹2,000, while major repairs like compressor issues may cost ₹2,500-₹8,000. We provide transparent upfront pricing.`,
    },
    {
      question: `Do you provide same-day AC service in ${areaDisplay}?`,
      answer: `Yes! We offer same-day AC repair and service in ${areaDisplay}, ${cityDisplay}. Our technician can reach your location within 2-4 hours of booking.`,
    },
    {
      question: `Which AC brands do you service in ${areaDisplay}?`,
      answer: `We service all major AC brands in ${areaDisplay} including Daikin, Voltas, Blue Star, Carrier, LG, Samsung, Hitachi, O General, Mitsubishi, and more.`,
    },
    {
      question: `Is there any warranty on AC repairs in ${areaDisplay}?`,
      answer: `Yes, we provide 30-90 days warranty on all AC repairs in ${areaDisplay}. Spare parts come with manufacturer warranty.`,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm mb-6">
              <MapPin className="w-4 h-4" />
              <span>Serving {areaDisplay}, {cityDisplay}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              AC Repair & Service in{" "}
              <span className="text-yellow-400">{areaDisplay}</span>, {cityDisplay}
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Professional AC repair, service & installation in {areaDisplay}. 
              Same-day service, certified technicians, 90-day warranty. All AC brands covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="tel:+919727257141"
                className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition shadow-lg"
              >
                <Phone size={22} />
                +91 97272 57141
              </a>
              <a
                href="https://wa.me/919727257141"
                className="bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 transition"
              >
                WhatsApp Us
              </a>
            </div>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Same Day Service</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>90 Days Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Expert Technicians</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services in This Area */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            AC Services in {areaDisplay}
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Comprehensive AC solutions for homes and businesses in {areaDisplay}, {cityDisplay}
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/${service.slug}-${area}-${city}`}
                className="bg-gray-50 hover:bg-blue-50 p-6 rounded-xl border border-gray-200 hover:border-blue-300 transition group"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition">
                  <service.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition" />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600">
                  {service.name} in {areaDisplay}
                </h3>
                <p className="text-gray-600 text-sm">
                  Professional {service.name.toLowerCase()} service in {areaDisplay}. Fast response, expert technicians.
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* AC Types We Service */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            AC Types We Service in {areaDisplay}
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Expert service for all AC types in {areaDisplay}, {cityDisplay}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {acTypes.map((type) => (
              <div
                key={type}
                className="bg-white p-4 rounded-lg text-center border border-gray-200 hover:border-blue-300 hover:shadow-sm transition"
              >
                <span className="text-gray-800 font-medium">{type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands We Service */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            AC Brands We Service in {areaDisplay}
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Authorized service for all major AC brands
          </p>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {brands.map((brand) => (
              <div
                key={brand}
                className="bg-gray-50 p-4 rounded-lg text-center border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition"
              >
                <span className="text-gray-800 font-medium">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Atlas Aircon in {areaDisplay}?
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quick Response</h3>
              <p className="text-blue-100">2-4 hours in {areaDisplay}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">20+ Years</h3>
              <p className="text-blue-100">Trusted experience</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">4.9 Rating</h3>
              <p className="text-blue-100">500+ happy customers</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">90-Day Warranty</h3>
              <p className="text-blue-100">On all services</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            AC Service Price in {areaDisplay}
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Transparent pricing with no hidden charges
          </p>
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden">
            <table className="w-full">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="text-left py-4 px-6">Service</th>
                  <th className="text-right py-4 px-6">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-50">
                  <td className="py-4 px-6">AC Inspection & Diagnosis</td>
                  <td className="py-4 px-6 text-right font-semibold text-blue-600">₹199</td>
                </tr>
                <tr>
                  <td className="py-4 px-6">Basic AC Service (Split)</td>
                  <td className="py-4 px-6 text-right font-semibold text-blue-600">₹399</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-4 px-6">Deep Cleaning Service</td>
                  <td className="py-4 px-6 text-right font-semibold text-blue-600">₹799 - ₹1,199</td>
                </tr>
                <tr>
                  <td className="py-4 px-6">AC Gas Refilling</td>
                  <td className="py-4 px-6 text-right font-semibold text-blue-600">₹1,500 - ₹3,000</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-4 px-6">AC Installation (Split)</td>
                  <td className="py-4 px-6 text-right font-semibold text-blue-600">₹1,499 - ₹2,999</td>
                </tr>
                <tr>
                  <td className="py-4 px-6">AC Repair</td>
                  <td className="py-4 px-6 text-right font-semibold text-blue-600">₹500 - ₹5,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 text-center mt-4">
            * Final price depends on AC type, brand, and specific requirements
          </p>
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            AC Service Near {areaDisplay}
          </h2>
          <p className="text-gray-600 text-center mb-12">
            We also serve these nearby areas in {cityDisplay}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 max-w-4xl mx-auto">
            {nearbyAreas.map((nearbyArea) => (
              <Link
                key={nearbyArea.slug}
                href={`/ac-repair-${nearbyArea.slug}-${city}`}
                className="flex items-center gap-2 bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 p-3 rounded-lg transition"
              >
                <MapPin size={14} className="text-blue-600" />
                <span className="text-sm font-medium">{nearbyArea.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            AC Repair FAQs - {areaDisplay}
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="bg-white rounded-lg group shadow-sm">
                <summary className="p-4 cursor-pointer font-semibold text-gray-900 flex justify-between items-center">
                  {faq.question}
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-4 pb-4 text-gray-600">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need AC Service in {areaDisplay}?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Call now for expert AC repair, service & installation in {areaDisplay}, {cityDisplay}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919727257141"
              className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition"
            >
              <Phone size={22} />
              +91 97272 57141
            </a>
            <a
              href="https://wa.me/919727257141"
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
