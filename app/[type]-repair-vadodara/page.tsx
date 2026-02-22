import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Phone, CheckCircle, Star, Clock, Shield, Award, Wrench, Settings, ThermometerSnowflake } from "lucide-react";

// AC Types
export const acTypes = [
  { 
    name: "Split AC", 
    slug: "split-ac", 
    description: "Wall-mounted split AC systems with separate indoor and outdoor units",
    longDescription: "Split AC is the most popular air conditioning system for homes and offices. It consists of an indoor unit mounted on the wall and an outdoor unit (compressor). Split ACs are energy-efficient, quiet, and perfect for cooling individual rooms.",
    features: ["Energy efficient", "Low noise", "Easy installation", "Individual room cooling", "Inverter options available"],
    sizes: ["1 Ton", "1.5 Ton", "2 Ton", "2.5 Ton"]
  },
  { 
    name: "Window AC", 
    slug: "window-ac", 
    description: "Single unit AC fitted in window or wall",
    longDescription: "Window AC is a compact, single-unit air conditioner that fits in a window or wall opening. All components are housed in one box. Window ACs are economical, easy to install, and suitable for small to medium rooms.",
    features: ["Compact design", "Easy maintenance", "Affordable", "Single unit", "No separate outdoor unit"],
    sizes: ["0.75 Ton", "1 Ton", "1.5 Ton", "2 Ton"]
  },
  { 
    name: "Cassette AC", 
    slug: "cassette-ac", 
    description: "Ceiling-mounted AC for commercial spaces",
    longDescription: "Cassette AC is mounted in the ceiling with a visible square or rectangular panel. It provides 360-degree air distribution and is ideal for offices, shops, hospitals, and commercial establishments.",
    features: ["360° air distribution", "Ceiling mounted", "Aesthetic design", "Large area coverage", "Ideal for commercial use"],
    sizes: ["2 Ton", "3 Ton", "4 Ton", "5 Ton"]
  },
  { 
    name: "Ductable AC", 
    slug: "ductable-ac", 
    description: "Centralized cooling through ductwork",
    longDescription: "Ductable AC uses a network of ducts to distribute cool air throughout a building. The main unit is hidden in a false ceiling, and air is delivered through vents. Ideal for large offices, showrooms, and commercial buildings.",
    features: ["Hidden installation", "Multi-zone cooling", "Quiet operation", "Uniform cooling", "Commercial grade"],
    sizes: ["5.5 Ton", "8.5 Ton", "11 Ton", "16.5 Ton", "22 Ton"]
  },
  { 
    name: "Tower AC", 
    slug: "tower-ac", 
    description: "Floor-standing AC for large rooms",
    longDescription: "Tower AC is a floor-standing air conditioner with a tall, slim design. It provides powerful cooling for large rooms, halls, and commercial spaces. Easy to install without wall mounting.",
    features: ["Floor standing", "Powerful cooling", "No wall mounting", "Large room coverage", "Easy installation"],
    sizes: ["2 Ton", "2.5 Ton", "3 Ton", "4 Ton"]
  },
  { 
    name: "Central AC", 
    slug: "central-ac", 
    description: "Building-wide cooling system",
    longDescription: "Central AC is a comprehensive air conditioning system that cools an entire building from a central location. It uses ductwork to distribute cool air and is ideal for large buildings, hospitals, hotels, and malls.",
    features: ["Building-wide cooling", "Central control", "Energy efficient for large spaces", "Ductwork distribution", "Professional installation required"],
    sizes: ["10 Ton", "20 Ton", "50 Ton", "100 Ton+"]
  },
  { 
    name: "Panel AC", 
    slug: "panel-ac", 
    description: "Industrial cooling for electrical panels",
    longDescription: "Panel AC is specifically designed to cool electrical control panels, server rooms, and industrial enclosures. It prevents overheating of sensitive electronic equipment and maintains optimal operating temperature.",
    features: ["Industrial grade", "Panel/enclosure cooling", "Precise temperature control", "Prevents equipment overheating", "24/7 operation"],
    sizes: ["0.5 Ton", "1 Ton", "1.5 Ton", "2 Ton"]
  },
  { 
    name: "Portable AC", 
    slug: "portable-ac", 
    description: "Mobile AC unit on wheels",
    longDescription: "Portable AC is a mobile air conditioning unit that can be moved from room to room. It doesn't require permanent installation and only needs a window or vent for exhaust. Ideal for temporary cooling needs.",
    features: ["Mobile/portable", "No permanent installation", "Wheels for easy movement", "Temporary cooling", "Easy setup"],
    sizes: ["1 Ton", "1.5 Ton"]
  },
];

export async function generateStaticParams() {
  return acTypes.map((type) => ({
    type: type.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ type: string }> }): Promise<Metadata> {
  const { type } = await params;
  const typeData = acTypes.find((t) => t.slug === type);
  
  if (!typeData) {
    return { title: "AC Type Not Found" };
  }

  return {
    title: `${typeData.name} Repair in Vadodara | ${typeData.name} Service | Atlas Aircon`,
    description: `Professional ${typeData.name} repair & service in Vadodara. Expert ${typeData.name} installation, maintenance, gas refilling. All brands covered. Call +91 97272 57141`,
    keywords: [
      `${typeData.name} repair Vadodara`,
      `${typeData.name} service Vadodara`,
      `${typeData.name} installation Vadodara`,
      `${typeData.name} AMC Vadodara`,
      `${typeData.name} gas refilling`,
      `best ${typeData.name} repair`,
    ],
    alternates: {
      canonical: `https://atlasaircons.com/${type}-repair-vadodara`,
    },
  };
}

export default async function ACTypePage({ params }: { params: Promise<{ type: string }> }) {
  const { type } = await params;
  const typeData = acTypes.find((t) => t.slug === type);

  if (!typeData) {
    notFound();
  }

  const otherTypes = acTypes.filter((t) => t.slug !== type);

  const services = [
    { name: `${typeData.name} Repair`, icon: Wrench },
    { name: `${typeData.name} Service`, icon: Settings },
    { name: `${typeData.name} Installation`, icon: ThermometerSnowflake },
    { name: `${typeData.name} AMC`, icon: Shield },
  ];

  const faqs = [
    {
      question: `What is the ${typeData.name} service cost in Vadodara?`,
      answer: `${typeData.name} service in Vadodara starts from ₹399 for basic cleaning. Deep cleaning costs ₹799-₹1,199. Repair costs depend on the issue. Contact us for exact pricing.`,
    },
    {
      question: `Do you repair all brands of ${typeData.name}?`,
      answer: `Yes, we repair all brands of ${typeData.name} including Daikin, Voltas, Blue Star, Carrier, LG, Samsung, Hitachi, O General, Mitsubishi, and more.`,
    },
    {
      question: `How often should ${typeData.name} be serviced?`,
      answer: `We recommend servicing your ${typeData.name} every 3-4 months for optimal performance, or at least twice a year before and after summer.`,
    },
    {
      question: `Can you install new ${typeData.name} in Vadodara?`,
      answer: `Yes, we provide professional ${typeData.name} installation with proper setup and warranty. We handle all brands and tonnages.`,
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
              <span>Expert {typeData.name} Service</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="text-yellow-400">{typeData.name}</span> Repair & Service in Vadodara
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              {typeData.longDescription}
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
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {typeData.name} Features
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {typeData.features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-gray-50 p-4 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our {typeData.name} Services
          </h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {services.map((service) => (
              <div
                key={service.name}
                className="bg-white p-6 rounded-xl border border-gray-200 text-center"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="font-semibold">{service.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sizes */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {typeData.name} Sizes We Service
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {typeData.sizes.map((size) => (
              <div key={size} className="bg-blue-50 text-blue-700 px-6 py-3 rounded-full font-medium">
                {size}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {typeData.name} Service Price in Vadodara
          </h2>
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
                  <td className="py-4 px-6">{typeData.name} Basic Service</td>
                  <td className="py-4 px-6 text-right font-semibold text-blue-600">₹399 - ₹599</td>
                </tr>
                <tr>
                  <td className="py-4 px-6">{typeData.name} Deep Cleaning</td>
                  <td className="py-4 px-6 text-right font-semibold text-blue-600">₹799 - ₹1,499</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-4 px-6">{typeData.name} Gas Refilling</td>
                  <td className="py-4 px-6 text-right font-semibold text-blue-600">₹1,500 - ₹3,500</td>
                </tr>
                <tr>
                  <td className="py-4 px-6">{typeData.name} Repair</td>
                  <td className="py-4 px-6 text-right font-semibold text-blue-600">₹500 - ₹6,000</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-4 px-6">{typeData.name} Installation</td>
                  <td className="py-4 px-6 text-right font-semibold text-blue-600">₹1,499 - ₹5,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Other AC Types */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Other AC Types We Service
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {otherTypes.map((t) => (
              <Link
                key={t.slug}
                href={`/${t.slug}-repair-vadodara`}
                className="bg-gray-50 hover:bg-blue-50 p-4 rounded-lg text-center border border-gray-200 hover:border-blue-300 transition"
              >
                <span className="text-gray-800 font-medium">{t.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {typeData.name} Service FAQs
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
            Need {typeData.name} Service?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Expert {typeData.name} repair & installation in Vadodara
          </p>
          <a
            href="tel:+919727257141"
            className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg transition"
          >
            <Phone size={22} />
            +91 97272 57141
          </a>
        </div>
      </section>
    </>
  );
}
