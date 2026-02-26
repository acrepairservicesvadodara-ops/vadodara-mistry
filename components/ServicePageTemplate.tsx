import { Metadata } from "next";
import Link from "next/link";
import { Phone, CheckCircle, Star, Clock, Shield, Award, MapPin, ArrowRight } from "lucide-react";
import BookingForm from "@/components/BookingForm";

// Service page configuration
const serviceConfig = {
  "ac-repair": {
    title: "AC Repair",
    description: "Professional AC repair services",
    heroTitle: "Professional AC Repair Service in Vadodara",
    heroDescription: "Expert AC repair for all brands and types. Same-day service, 90-day warranty, genuine parts.",
    features: [
      "Same-day repair service",
      "All brands covered",
      "90-day warranty on repairs",
      "Genuine spare parts",
      "Transparent pricing",
      "Expert technicians",
    ],
    pricing: [
      { service: "AC Inspection & Diagnosis", price: "₹199" },
      { service: "AC Gas Charging (per kg)", price: "₹1,500" },
      { service: "PCB Repair", price: "₹1,500 - ₹3,500" },
      { service: "Compressor Repair", price: "₹2,500 - ₹8,000" },
      { service: "Fan Motor Replacement", price: "₹1,200 - ₹2,500" },
      { service: "AC General Repair", price: "₹500 - ₹2,000" },
    ],
    process: [
      { step: 1, title: "Book Service", description: "Call us or fill the online form to book your AC repair" },
      { step: 2, title: "Technician Visit", description: "Our expert visits your location within 2-4 hours" },
      { step: 3, title: "Diagnosis", description: "Complete AC inspection and problem identification" },
      { step: 4, title: "Repair & Testing", description: "Fix the issue and test AC performance thoroughly" },
    ],
    faqs: [
      {
        question: "How much does AC repair cost in Vadodara?",
        answer: "AC repair costs start from ₹199 for inspection. Actual repair charges depend on the problem - minor repairs cost ₹500-₹2,000, while major repairs like compressor issues may cost ₹2,500-₹8,000. We provide upfront pricing before starting any work.",
      },
      {
        question: "Do you provide same-day AC repair?",
        answer: "Yes! We offer same-day AC repair service in Vadodara. Our technician can reach your location within 2-4 hours of booking. For emergency repairs, we also have express service available.",
      },
      {
        question: "What AC brands do you repair?",
        answer: "We repair all major AC brands including Daikin, Voltas, Blue Star, Carrier, LG, Samsung, Hitachi, O General, Mitsubishi, Panasonic, Whirlpool, Godrej, and more.",
      },
      {
        question: "Is there warranty on AC repairs?",
        answer: "Yes, we provide 30-90 days warranty on all repairs depending on the type of work. Spare parts come with manufacturer warranty.",
      },
    ],
  },
  "ac-service": {
    title: "AC Service",
    description: "Complete AC servicing and maintenance",
    heroTitle: "AC Service & Maintenance in Vadodara",
    heroDescription: "Complete AC servicing including deep cleaning, gas check, filter cleaning, and performance optimization.",
    features: [
      "Deep cleaning service",
      "Gas leak check",
      "Filter cleaning/replacement",
      "Coil cleaning",
      "Performance tuning",
      "Preventive maintenance",
    ],
    pricing: [
      { service: "Basic AC Service (Split)", price: "₹399" },
      { service: "Basic AC Service (Window)", price: "₹349" },
      { service: "Deep Cleaning Service", price: "₹799 - ₹1,199" },
      { service: "Jet/Foam Cleaning", price: "₹999 - ₹1,499" },
      { service: "AC Filter Cleaning", price: "₹199" },
      { service: "Complete AC Checkup", price: "₹499" },
    ],
    process: [
      { step: 1, title: "Schedule Service", description: "Book your AC service at a convenient time" },
      { step: 2, title: "Deep Cleaning", description: "Thorough cleaning of filters, coils, and drainage" },
      { step: 3, title: "System Check", description: "Gas pressure, electrical, and performance testing" },
      { step: 4, title: "Optimization", description: "Fine-tune settings for best cooling efficiency" },
    ],
    faqs: [
      {
        question: "How often should I service my AC?",
        answer: "We recommend servicing your AC every 3-4 months for optimal performance, or at least twice a year - before and after summer season.",
      },
      {
        question: "What is included in AC servicing?",
        answer: "Our AC service includes filter cleaning, coil cleaning, drain pipe cleaning, gas pressure check, electrical connection check, and overall performance testing.",
      },
      {
        question: "How long does AC servicing take?",
        answer: "Basic AC servicing takes 45-60 minutes. Deep cleaning or jet washing may take 60-90 minutes depending on the AC condition.",
      },
      {
        question: "Can you service all AC types?",
        answer: "Yes, we service all AC types including split AC, window AC, cassette AC, ductable AC, tower AC, and central AC systems.",
      },
    ],
  },
  "ac-installation": {
    title: "AC Installation",
    description: "Professional AC installation services",
    heroTitle: "AC Installation Service in Vadodara",
    heroDescription: "Expert AC installation for homes and offices. All brands, proper copper piping, and installation warranty.",
    features: [
      "Professional installation",
      "Proper copper piping",
      "Electrical setup",
      "Installation warranty",
      "All AC types covered",
      "Same-day installation",
    ],
    pricing: [
      { service: "Split AC Installation (1-1.5 Ton)", price: "₹1,499 - ₹2,499" },
      { service: "Split AC Installation (2 Ton)", price: "₹2,499 - ₹3,499" },
      { service: "Window AC Installation", price: "₹999 - ₹1,499" },
      { service: "Cassette AC Installation", price: "₹3,500 - ₹5,000" },
      { service: "AC Uninstallation", price: "₹699 - ₹999" },
      { service: "AC Shifting/Relocation", price: "₹1,999 - ₹2,999" },
    ],
    process: [
      { step: 1, title: "Site Survey", description: "Assess installation location and requirements" },
      { step: 2, title: "Preparation", description: "Wall mounting, piping route planning" },
      { step: 3, title: "Installation", description: "Professional indoor/outdoor unit installation" },
      { step: 4, title: "Testing", description: "Complete testing and customer handover" },
    ],
    faqs: [
      {
        question: "How much does AC installation cost?",
        answer: "AC installation costs ₹1,499-₹3,499 for split AC depending on tonnage and piping length. Window AC installation costs ₹999-₹1,499.",
      },
      {
        question: "Do you provide copper piping?",
        answer: "Yes, we use high-quality copper piping with proper insulation. Standard installation includes up to 3 meters piping; additional length is charged separately.",
      },
      {
        question: "Can you install AC on the same day?",
        answer: "Yes, we offer same-day AC installation in Vadodara. Book before 12 PM for same-day installation (subject to availability).",
      },
      {
        question: "Is there warranty on installation?",
        answer: "Yes, we provide 30-day installation warranty covering any installation-related issues.",
      },
    ],
  },
  "ac-amc": {
    title: "AC AMC",
    description: "Annual maintenance contracts for AC",
    heroTitle: "AC Annual Maintenance Contract (AMC) in Vadodara",
    heroDescription: "Comprehensive AC AMC plans for worry-free cooling. Multiple services, priority support, and cost savings.",
    features: [
      "Multiple service visits",
      "Priority support",
      "Discounted repairs",
      "No inspection charges",
      "Preventive maintenance",
      "Extended AC life",
    ],
    pricing: [
      { service: "Basic AMC (2 services)", price: "₹999/year" },
      { service: "Standard AMC (3 services)", price: "₹1,499/year" },
      { service: "Premium AMC (4 services + parts)", price: "₹2,499/year" },
      { service: "Comprehensive AMC (Unlimited)", price: "₹3,999/year" },
      { service: "Commercial AC AMC", price: "Custom Quote" },
      { service: "Multi-AC Package", price: "Special Discount" },
    ],
    process: [
      { step: 1, title: "Choose Plan", description: "Select AMC plan based on your needs" },
      { step: 2, title: "Site Visit", description: "Initial AC inspection and service" },
      { step: 3, title: "Regular Maintenance", description: "Scheduled visits as per plan" },
      { step: 4, title: "Priority Support", description: "Quick response for any issues" },
    ],
    faqs: [
      {
        question: "What is included in AC AMC?",
        answer: "AC AMC includes scheduled service visits (2-4 per year), filter cleaning, gas check, coil cleaning, priority support, and discounted repair charges.",
      },
      {
        question: "Is AMC beneficial for home AC?",
        answer: "Yes! AMC ensures regular maintenance, prevents breakdowns, extends AC life, and saves money on repairs. It's especially useful for regular AC users.",
      },
      {
        question: "Do you provide AMC for commercial AC?",
        answer: "Yes, we offer customized AMC plans for commercial AC systems, central AC, VRF/VRV systems, and industrial chillers.",
      },
      {
        question: "Can I cancel AMC midway?",
        answer: "Yes, you can cancel with pro-rata refund based on services used. Terms apply.",
      },
    ],
  },
  "ac-gas-refilling": {
    title: "AC Gas Refilling",
    description: "AC gas charging and refilling services",
    heroTitle: "AC Gas Refilling Service in Vadodara",
    heroDescription: "Professional AC gas charging with genuine refrigerants. R22, R32, R410A available. Leak detection included.",
    features: [
      "Genuine refrigerants",
      "R22, R32, R410A available",
      "Leak detection",
      "Pressure testing",
      "All AC brands",
      "Warranty on refilling",
    ],
    pricing: [
      { service: "AC Gas Top-up", price: "₹800 - ₹1,200" },
      { service: "Complete Gas Refilling (R22)", price: "₹2,000 - ₹2,500" },
      { service: "Complete Gas Refilling (R32)", price: "₹2,500 - ₹3,000" },
      { service: "Complete Gas Refilling (R410A)", price: "₹3,000 - ₹3,500" },
      { service: "Gas Leak Detection", price: "₹299" },
      { service: "Leak Repair + Refilling", price: "₹1,500 - ₹3,000" },
    ],
    process: [
      { step: 1, title: "Inspection", description: "Check current gas level and pressure" },
      { step: 2, title: "Leak Test", description: "Detect any gas leaks in the system" },
      { step: 3, title: "Repair Leaks", description: "Fix any identified leak points" },
      { step: 4, title: "Gas Charging", description: "Refill with correct refrigerant type" },
    ],
    faqs: [
      {
        question: "How do I know if my AC needs gas refilling?",
        answer: "Signs include: AC not cooling properly, ice formation on pipes, unusual hissing sounds, or higher electricity bills. We can diagnose with a pressure check.",
      },
      {
        question: "How often does AC gas need refilling?",
        answer: "A well-maintained AC shouldn't need gas refilling frequently. If you need frequent refills, there's likely a leak that needs repair.",
      },
      {
        question: "Which gas is used in my AC?",
        answer: "Older ACs use R22, while newer ones use R32 or R410A. We check your AC model and use the correct refrigerant type.",
      },
      {
        question: "Is gas refilling covered under warranty?",
        answer: "We provide 30-day warranty on gas refilling. If there's a leak causing gas loss, we recommend leak repair for lasting results.",
      },
    ],
  },
  "chiller-repair": {
    title: "Chiller Repair",
    description: "Industrial chiller repair and maintenance",
    heroTitle: "Chiller Repair & Maintenance in Vadodara",
    heroDescription: "Expert repair and maintenance for industrial chillers. All types covered - water-cooled, air-cooled, screw chillers.",
    features: [
      "Water-cooled chillers",
      "Air-cooled chillers",
      "Screw chillers",
      "Centrifugal chillers",
      "24/7 emergency service",
      "Industrial expertise",
    ],
    pricing: [
      { service: "Chiller Inspection", price: "₹999 - ₹2,999" },
      { service: "Chiller Servicing", price: "₹3,000 - ₹8,000" },
      { service: "Minor Repairs", price: "₹2,000 - ₹5,000" },
      { service: "Major Repairs", price: "₹10,000 - ₹50,000" },
      { service: "Chiller AMC", price: "Custom Quote" },
      { service: "Emergency Service", price: "₹2,000 + Repairs" },
    ],
    process: [
      { step: 1, title: "Site Assessment", description: "Evaluate chiller system and requirements" },
      { step: 2, title: "Diagnosis", description: "Comprehensive fault detection" },
      { step: 3, title: "Repair/Service", description: "Expert repair with genuine parts" },
      { step: 4, title: "Testing", description: "Performance testing and handover" },
    ],
    faqs: [
      {
        question: "What types of chillers do you repair?",
        answer: "We repair all chiller types including water-cooled, air-cooled, screw chillers, centrifugal chillers, and scroll chillers from all major brands.",
      },
      {
        question: "Do you provide 24/7 chiller repair?",
        answer: "Yes, we offer 24/7 emergency chiller repair service for industrial clients. Call our emergency line for immediate support.",
      },
      {
        question: "Can you handle large industrial chillers?",
        answer: "Yes, our team is experienced in repairing and maintaining industrial chillers of all capacities used in factories, hotels, hospitals, and commercial buildings.",
      },
      {
        question: "Do you provide chiller AMC?",
        answer: "Yes, we offer customized AMC plans for chillers with scheduled maintenance, priority support, and discounted repair rates.",
      },
    ],
  },
  "hvac-service": {
    title: "HVAC Service",
    description: "Complete HVAC system services",
    heroTitle: "HVAC Service & Maintenance in Vadodara",
    heroDescription: "Complete HVAC solutions for commercial and industrial facilities. Design, installation, repair, and maintenance.",
    features: [
      "Central AC systems",
      "AHU maintenance",
      "Duct cleaning",
      "BMS integration",
      "Energy optimization",
      "Commercial expertise",
    ],
    pricing: [
      { service: "HVAC System Inspection", price: "₹2,999 - ₹5,999" },
      { service: "AHU Servicing", price: "₹3,000 - ₹8,000" },
      { service: "Duct Cleaning", price: "₹50 - ₹100/sqft" },
      { service: "HVAC System Repair", price: "Custom Quote" },
      { service: "HVAC AMC", price: "Custom Quote" },
      { service: "Energy Audit", price: "₹5,000 - ₹15,000" },
    ],
    process: [
      { step: 1, title: "System Audit", description: "Complete HVAC system evaluation" },
      { step: 2, title: "Planning", description: "Maintenance/repair plan development" },
      { step: 3, title: "Execution", description: "Professional service delivery" },
      { step: 4, title: "Optimization", description: "Performance tuning and efficiency improvement" },
    ],
    faqs: [
      {
        question: "What HVAC services do you provide?",
        answer: "We provide complete HVAC services including central AC, AHU, FCU, chiller, cooling tower maintenance, duct cleaning, and system optimization.",
      },
      {
        question: "Do you handle commercial HVAC projects?",
        answer: "Yes, we specialize in commercial HVAC for offices, hotels, hospitals, malls, factories, and industrial facilities across Gujarat.",
      },
      {
        question: "Can you help reduce HVAC energy costs?",
        answer: "Yes, our energy audit service identifies inefficiencies and we provide solutions to reduce HVAC energy consumption by 15-30%.",
      },
      {
        question: "Do you provide HVAC installation?",
        answer: "Yes, we handle complete HVAC projects from design to installation, commissioning, and ongoing maintenance.",
      },
    ],
  },
  "vrf-vrv-system": {
    title: "VRF VRV System",
    description: "VRF/VRV system installation and service",
    heroTitle: "VRF/VRV System Service in Vadodara",
    heroDescription: "Expert VRF/VRV system installation, repair, and maintenance. Daikin, Mitsubishi, LG, Samsung authorized service.",
    features: [
      "VRF/VRV installation",
      "System repair",
      "Refrigerant recovery",
      "Control system service",
      "All major brands",
      "Energy optimization",
    ],
    pricing: [
      { service: "VRF System Inspection", price: "₹2,999 - ₹5,999" },
      { service: "VRF Indoor Unit Service", price: "₹999 - ₹1,999" },
      { service: "VRF Outdoor Unit Service", price: "₹2,999 - ₹4,999" },
      { service: "VRF System Repair", price: "Custom Quote" },
      { service: "VRF Gas Charging", price: "₹5,000 - ₹15,000" },
      { service: "VRF System AMC", price: "Custom Quote" },
    ],
    process: [
      { step: 1, title: "System Analysis", description: "Complete VRF system assessment" },
      { step: 2, title: "Diagnosis", description: "Error code analysis and fault detection" },
      { step: 3, title: "Service/Repair", description: "Expert repair with OEM parts" },
      { step: 4, title: "Commissioning", description: "System testing and optimization" },
    ],
    faqs: [
      {
        question: "What is VRF/VRV system?",
        answer: "VRF (Variable Refrigerant Flow) or VRV (Variable Refrigerant Volume) is an advanced AC system with one outdoor unit serving multiple indoor units, ideal for commercial buildings.",
      },
      {
        question: "Which VRF brands do you service?",
        answer: "We service all major VRF brands including Daikin, Mitsubishi, LG, Samsung, Hitachi, Panasonic, and Carrier.",
      },
      {
        question: "Can you install new VRF systems?",
        answer: "Yes, we handle complete VRF system projects from design and installation to commissioning and maintenance.",
      },
      {
        question: "How often should VRF system be serviced?",
        answer: "We recommend quarterly maintenance for VRF systems to ensure optimal performance and prevent breakdowns.",
      },
    ],
  },
};

export type ServiceType = keyof typeof serviceConfig;

interface ServicePageProps {
  service: ServiceType;
  location: string;
  locationDisplay: string;
}

export default function ServicePageTemplate({ service, location, locationDisplay }: ServicePageProps) {
  const config = serviceConfig[service];
  
  if (!config) {
    return <div>Service not found</div>;
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm mb-6">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span>Rated 4.9/5 by customers in {locationDisplay}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {config.heroTitle.replace("Vadodara", locationDisplay)}
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                {config.heroDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="tel:+919727257141"
                  className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition shadow-lg"
                >
                  <Phone size={22} />
                  +91 97272 57141
                </a>
                <Link
                  href="/contact"
                  className="bg-white/10 hover:bg-white/20 backdrop-blur text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 transition border border-white/30"
                >
                  Get Free Quote
                  <ArrowRight size={20} />
                </Link>
              </div>
              <div className="flex flex-wrap gap-4 text-sm">
                {config.features.slice(0, 3).map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden md:block">
              <BookingForm title={`Book ${config.title} Now`} />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Our {config.title} Service?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {config.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <span className="text-gray-800">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            {config.title} Price in {locationDisplay}
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Transparent pricing with no hidden charges. Get the best {config.title.toLowerCase()} rates in {locationDisplay}.
          </p>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <table className="w-full">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="text-left py-4 px-6">Service</th>
                    <th className="text-right py-4 px-6">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {config.pricing.map((item, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="py-4 px-6 text-gray-800">{item.service}</td>
                      <td className="py-4 px-6 text-right font-semibold text-blue-600">{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 text-center mt-4">
              * Prices may vary based on AC type, brand, and specific requirements. Contact us for exact quote.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our {config.title} Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {config.process.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-blue-600">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Atlas Aircon */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Atlas Aircon in {locationDisplay}?
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Same Day Service</h3>
              <p className="text-blue-100">Quick response in {locationDisplay}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">20+ Years Experience</h3>
              <p className="text-blue-100">Trusted expertise</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">90 Days Warranty</h3>
              <p className="text-blue-100">On all services</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Local Presence</h3>
              <p className="text-blue-100">Serving {locationDisplay}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {config.title} FAQs - {locationDisplay}
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {config.faqs.map((faq, idx) => (
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
            Need {config.title} in {locationDisplay}?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Call now for professional {config.title.toLowerCase()} service. Same-day response!
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

export { serviceConfig };
