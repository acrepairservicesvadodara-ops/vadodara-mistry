import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Phone, CheckCircle, Star, Clock, Shield, Award, MapPin, ArrowRight, Wrench, Settings, ThermometerSnowflake } from "lucide-react";

// AC Brands
export const acBrands = [
  { name: "Daikin", slug: "daikin", country: "Japan", description: "World's leading AC manufacturer known for energy efficiency and innovation" },
  { name: "Voltas", slug: "voltas", country: "India", description: "India's leading AC brand with wide service network" },
  { name: "Blue Star", slug: "blue-star", country: "India", description: "Premium AC brand for residential and commercial cooling" },
  { name: "Carrier", slug: "carrier", country: "USA", description: "Pioneer in air conditioning technology" },
  { name: "LG", slug: "lg", country: "South Korea", description: "Innovative AC with dual inverter technology" },
  { name: "Samsung", slug: "samsung", country: "South Korea", description: "Smart AC with WiFi and digital inverter" },
  { name: "Hitachi", slug: "hitachi", country: "Japan", description: "Japanese precision engineering in cooling" },
  { name: "O General", slug: "o-general", country: "Japan", description: "Premium Japanese AC for extreme cooling" },
  { name: "Mitsubishi", slug: "mitsubishi", country: "Japan", description: "Advanced technology for commercial cooling" },
  { name: "Panasonic", slug: "panasonic", country: "Japan", description: "Reliable Japanese AC with nanoe technology" },
  { name: "Whirlpool", slug: "whirlpool", country: "USA", description: "American brand with 6th Sense technology" },
  { name: "Godrej", slug: "godrej", country: "India", description: "Eco-friendly AC with green technology" },
  { name: "Haier", slug: "haier", country: "China", description: "Affordable AC with self-cleaning technology" },
  { name: "Lloyd", slug: "lloyd", country: "India", description: "Budget-friendly AC with good features" },
  { name: "IFB", slug: "ifb", country: "India", description: "Quality AC with strong after-sales service" },
  { name: "Toshiba", slug: "toshiba", country: "Japan", description: "Japanese technology for efficient cooling" },
  { name: "Midea", slug: "midea", country: "China", description: "Value-for-money AC brand" },
  { name: "TCL", slug: "tcl", country: "China", description: "Affordable smart AC options" },
  { name: "Onida", slug: "onida", country: "India", description: "Indian brand with good service network" },
  { name: "Blueair", slug: "blueair", country: "Sweden", description: "Premium air purification and cooling" },
];

export async function generateStaticParams() {
  return acBrands.map((brand) => ({
    brand: brand.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ brand: string }> }): Promise<Metadata> {
  const { brand } = await params;
  const brandData = acBrands.find((b) => b.slug === brand);
  
  if (!brandData) {
    return { title: "Brand Not Found" };
  }

  return {
    title: `${brandData.name} AC Service in Vadodara | ${brandData.name} AC Repair | Atlas Aircon`,
    description: `Professional ${brandData.name} AC repair & service in Vadodara. Authorized ${brandData.name} AC service center. Expert technicians, genuine parts, 90-day warranty. Call +91 97272 57141`,
    keywords: [
      `${brandData.name} AC service Vadodara`,
      `${brandData.name} AC repair Vadodara`,
      `${brandData.name} AC service center`,
      `${brandData.name} AC installation`,
      `${brandData.name} AC AMC`,
      `${brandData.name} AC gas refilling`,
    ],
    alternates: {
      canonical: `https://atlasaircons.com/${brand}-ac-service-vadodara`,
    },
  };
}

export default async function BrandPage({ params }: { params: Promise<{ brand: string }> }) {
  const { brand } = await params;
  const brandData = acBrands.find((b) => b.slug === brand);

  if (!brandData) {
    notFound();
  }

  const services = [
    { name: "AC Repair", icon: Wrench, description: `Expert ${brandData.name} AC repair` },
    { name: "AC Service", icon: Settings, description: `Complete ${brandData.name} servicing` },
    { name: "AC Installation", icon: ThermometerSnowflake, description: `Professional ${brandData.name} installation` },
    { name: "AC AMC", icon: Shield, description: `${brandData.name} maintenance contract` },
  ];

  const otherBrands = acBrands.filter((b) => b.slug !== brand).slice(0, 12);

  const faqs = [
    {
      question: `Are you authorized ${brandData.name} AC service center in Vadodara?`,
      answer: `We are an experienced AC service provider handling ${brandData.name} AC repairs for over 20 years. Our technicians are trained in ${brandData.name} AC systems and use genuine parts for all repairs.`,
    },
    {
      question: `What is the cost of ${brandData.name} AC service in Vadodara?`,
      answer: `${brandData.name} AC service starts from ₹399 for basic cleaning. Deep cleaning costs ₹799-₹1,199. Repair charges depend on the issue. Contact us for exact pricing.`,
    },
    {
      question: `Do you provide ${brandData.name} AC installation service?`,
      answer: `Yes, we provide professional ${brandData.name} AC installation with proper copper piping, electrical setup, and installation warranty.`,
    },
    {
      question: `Can you repair old ${brandData.name} AC models?`,
      answer: `Yes, we repair all ${brandData.name} AC models - old and new. We maintain stock of common spare parts for quick repairs.`,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm mb-6">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span>{brandData.country} Brand • Premium Service</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="text-yellow-400">{brandData.name}</span> AC Service in Vadodara
            </h1>
            <p className="text-xl text-blue-100 mb-4 leading-relaxed">
              Professional {brandData.name} AC repair, service & installation in Vadodara. 
              Expert technicians trained for {brandData.name} AC systems.
            </p>
            <p className="text-blue-200 mb-8">{brandData.description}</p>
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
                <span>Genuine {brandData.name} Parts</span>
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
          <h2 className="text-3xl font-bold text-center mb-12">
            {brandData.name} AC Services in Vadodara
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div
                key={service.name}
                className="bg-gray-50 p-6 rounded-xl border border-gray-200 text-center"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
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
            Why Choose Us for {brandData.name} AC Service?
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">20+ Years Experience</h3>
              <p className="text-blue-100">Expert {brandData.name} service</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Genuine Parts</h3>
              <p className="text-blue-100">Original {brandData.name} spares</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Same Day Service</h3>
              <p className="text-blue-100">Quick response</p>
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
            {brandData.name} AC Service Price in Vadodara
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Transparent pricing for {brandData.name} AC
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
                  <td className="py-4 px-6">{brandData.name} AC Basic Service</td>
                  <td className="py-4 px-6 text-right font-semibold text-blue-600">₹399 - ₹499</td>
                </tr>
                <tr>
                  <td className="py-4 px-6">{brandData.name} AC Deep Cleaning</td>
                  <td className="py-4 px-6 text-right font-semibold text-blue-600">₹799 - ₹1,199</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-4 px-6">{brandData.name} AC Gas Refilling</td>
                  <td className="py-4 px-6 text-right font-semibold text-blue-600">₹1,500 - ₹3,000</td>
                </tr>
                <tr>
                  <td className="py-4 px-6">{brandData.name} AC Repair</td>
                  <td className="py-4 px-6 text-right font-semibold text-blue-600">₹500 - ₹5,000</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-4 px-6">{brandData.name} AC Installation</td>
                  <td className="py-4 px-6 text-right font-semibold text-blue-600">₹1,499 - ₹2,999</td>
                </tr>
                <tr>
                  <td className="py-4 px-6">{brandData.name} AC AMC</td>
                  <td className="py-4 px-6 text-right font-semibold text-blue-600">₹999 - ₹2,499/year</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Other Brands */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Other AC Brands We Service
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {otherBrands.map((b) => (
              <Link
                key={b.slug}
                href={`/${b.slug}-ac-service-vadodara`}
                className="bg-gray-50 hover:bg-blue-50 p-4 rounded-lg text-center border border-gray-200 hover:border-blue-300 transition"
              >
                <span className="text-gray-800 font-medium">{b.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {brandData.name} AC Service FAQs
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
            Need {brandData.name} AC Service?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Expert {brandData.name} AC repair & service in Vadodara
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
