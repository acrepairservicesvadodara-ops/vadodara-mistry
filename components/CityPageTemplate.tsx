import Link from "next/link";
import { Phone, CheckCircle, Star, Clock, Shield, Award, MapPin, ArrowRight, Wrench, Settings, ThermometerSnowflake, Building } from "lucide-react";

interface CityPageProps {
  city: string;
  cityDisplay: string;
  distance: string;
  state: string;
  nearbyCities: { name: string; slug: string }[];
}

export default function CityPageTemplate({ city, cityDisplay, distance, state, nearbyCities }: CityPageProps) {
  const services = [
    { name: "AC Repair", slug: "ac-repair", icon: Wrench, description: "Expert AC repair for all brands" },
    { name: "AC Service", slug: "ac-service", icon: Settings, description: "Complete servicing & maintenance" },
    { name: "AC Installation", slug: "ac-installation", icon: ThermometerSnowflake, description: "Professional installation" },
    { name: "AC AMC", slug: "ac-amc", icon: Shield, description: "Annual maintenance contracts" },
    { name: "Chiller Repair", slug: "chiller-repair", icon: Building, description: "Industrial chiller service" },
    { name: "HVAC Service", slug: "hvac-service", icon: Settings, description: "Commercial HVAC solutions" },
  ];

  const acTypes = [
    "Split AC", "Window AC", "Cassette AC", "Ductable AC", 
    "Tower AC", "Central AC", "VRF/VRV System", "Panel AC"
  ];

  const brands = [
    "Daikin", "Voltas", "Blue Star", "Carrier", "LG", "Samsung",
    "Hitachi", "O General", "Mitsubishi", "Panasonic", "Whirlpool", "Godrej"
  ];

  const features = [
    { title: "Same Day Service", description: `Quick response in ${cityDisplay}`, icon: Clock },
    { title: "20+ Years Experience", description: "Trusted expertise since 2004", icon: Award },
    { title: "All Brands Covered", description: "Service for all AC brands", icon: Star },
    { title: "90-Day Warranty", description: "On repairs and services", icon: Shield },
  ];

  const faqs = [
    {
      question: `Do you provide AC repair service in ${cityDisplay}?`,
      answer: `Yes! Atlas Aircon provides professional AC repair, service, and installation in ${cityDisplay}. We have experienced technicians serving ${cityDisplay} and surrounding areas. Call +91 97272 57141 for service.`,
    },
    {
      question: `What is the AC service cost in ${cityDisplay}?`,
      answer: `AC service in ${cityDisplay} starts from ₹399 for basic servicing. Deep cleaning costs ₹799-₹1,199. Contact us for exact pricing based on your AC type and requirements.`,
    },
    {
      question: `How quickly can you reach ${cityDisplay} for AC repair?`,
      answer: `We can provide AC repair service in ${cityDisplay} within 4-6 hours for standard requests. For emergency repairs, we offer same-day service. ${cityDisplay} is ${distance} from our Vadodara office.`,
    },
    {
      question: `Do you service commercial AC in ${cityDisplay}?`,
      answer: `Yes, we provide commercial AC service, chiller repair, and HVAC maintenance in ${cityDisplay}. We serve offices, hotels, factories, hospitals, and commercial establishments.`,
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
              <span>{distance} from Vadodara • {state}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              AC Repair & Service in{" "}
              <span className="text-yellow-400">{cityDisplay}</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Professional AC repair, service & installation in {cityDisplay}, {state}. 
              Certified technicians, genuine parts, 90-day warranty. Serving {cityDisplay} from our Vadodara base.
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
                <span>All Brands Covered</span>
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

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            AC Services in {cityDisplay}
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Complete AC solutions for residential and commercial customers in {cityDisplay}
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.slug}
                className="bg-gray-50 hover:bg-blue-50 p-6 rounded-xl border border-gray-200 hover:border-blue-300 transition group"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition">
                  <service.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition" />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600">
                  {service.name} in {cityDisplay}
                </h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Atlas Aircon in {cityDisplay}?
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-blue-100">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AC Types */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            AC Types We Service in {cityDisplay}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {acTypes.map((type) => (
              <div
                key={type}
                className="bg-white p-4 rounded-lg text-center border border-gray-200"
              >
                <span className="text-gray-800 font-medium">{type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            AC Brands We Service in {cityDisplay}
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {brands.map((brand) => (
              <div
                key={brand}
                className="bg-gray-50 p-4 rounded-lg text-center border border-gray-200"
              >
                <span className="text-gray-800 font-medium">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            AC Service Price in {cityDisplay}
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Transparent pricing. No hidden charges.
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
                  <td className="py-4 px-6">AC Service (Basic)</td>
                  <td className="py-4 px-6 text-right font-semibold text-blue-600">₹499 - ₹699</td>
                </tr>
                <tr>
                  <td className="py-4 px-6">AC Deep Cleaning</td>
                  <td className="py-4 px-6 text-right font-semibold text-blue-600">₹899 - ₹1,299</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-4 px-6">AC Repair</td>
                  <td className="py-4 px-6 text-right font-semibold text-blue-600">₹500 - ₹5,000</td>
                </tr>
                <tr>
                  <td className="py-4 px-6">AC Gas Refilling</td>
                  <td className="py-4 px-6 text-right font-semibold text-blue-600">₹1,800 - ₹3,500</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-4 px-6">AC Installation</td>
                  <td className="py-4 px-6 text-right font-semibold text-blue-600">₹1,999 - ₹3,499</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 text-center mt-4">
            * Prices for {cityDisplay} may include travel charges. Contact for exact quote.
          </p>
        </div>
      </section>

      {/* Nearby Cities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            AC Service in Cities Near {cityDisplay}
          </h2>
          <p className="text-gray-600 text-center mb-12">
            We also serve these nearby cities
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 max-w-4xl mx-auto">
            {nearbyCities.map((nearbyCity) => (
              <Link
                key={nearbyCity.slug}
                href={`/ac-repair-${nearbyCity.slug}`}
                className="flex items-center gap-2 bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 p-3 rounded-lg transition"
              >
                <MapPin size={14} className="text-blue-600" />
                <span className="text-sm font-medium">{nearbyCity.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            AC Repair FAQs - {cityDisplay}
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

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need AC Service in {cityDisplay}?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Professional AC repair & service for {cityDisplay}. Call now!
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
