import Link from "next/link";
import { 
  Phone, 
  CheckCircle, 
  Star, 
  Clock, 
  Shield, 
  Award, 
  Users, 
  Wrench,
  ThermometerSnowflake,
  Fan,
  Settings,
  Zap,
  MapPin,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "AC Repair",
    description: "Expert repair for all AC brands. Same-day service available.",
    href: "/ac-repair-vadodara",
  },
  {
    icon: Settings,
    title: "AC Service",
    description: "Complete AC servicing with cleaning, gas check & performance tune-up.",
    href: "/ac-service-vadodara",
  },
  {
    icon: ThermometerSnowflake,
    title: "AC Installation",
    description: "Professional installation with warranty. All AC types covered.",
    href: "/ac-installation-vadodara",
  },
  {
    icon: Shield,
    title: "AC AMC",
    description: "Annual maintenance contracts for worry-free AC performance.",
    href: "/ac-amc-vadodara",
  },
  {
    icon: Zap,
    title: "Gas Refilling",
    description: "AC gas top-up and complete refilling with genuine refrigerants.",
    href: "/ac-gas-refilling-vadodara",
  },
  {
    icon: Fan,
    title: "Chiller Repair",
    description: "Industrial chiller repair & maintenance for commercial units.",
    href: "/chiller-repair-vadodara",
  },
];

const stats = [
  { number: "20+", label: "Years Experience" },
  { number: "5000+", label: "Happy Customers" },
  { number: "50+", label: "Expert Technicians" },
  { number: "4.9", label: "Google Rating" },
];

const acTypes = [
  { name: "Split AC", href: "/split-ac-repair-vadodara" },
  { name: "Window AC", href: "/window-ac-repair-vadodara" },
  { name: "Central AC", href: "/central-ac-repair-vadodara" },
  { name: "Cassette AC", href: "/cassette-ac-repair-vadodara" },
  { name: "Ductable AC", href: "/ductable-ac-repair-vadodara" },
  { name: "Tower AC", href: "/tower-ac-repair-vadodara" },
  { name: "Panel AC", href: "/panel-ac-repair-vadodara" },
  { name: "VRF/VRV System", href: "/vrf-vrv-system-vadodara" },
];

const brands = [
  { name: "Daikin", href: "/daikin-ac-service-vadodara" },
  { name: "Voltas", href: "/voltas-ac-service-vadodara" },
  { name: "Blue Star", href: "/blue-star-ac-service-vadodara" },
  { name: "Carrier", href: "/carrier-ac-service-vadodara" },
  { name: "LG", href: "/lg-ac-service-vadodara" },
  { name: "Samsung", href: "/samsung-ac-service-vadodara" },
  { name: "Hitachi", href: "/hitachi-ac-service-vadodara" },
  { name: "O General", href: "/o-general-ac-service-vadodara" },
  { name: "Mitsubishi", href: "/mitsubishi-ac-service-vadodara" },
  { name: "Panasonic", href: "/panasonic-ac-service-vadodara" },
  { name: "Whirlpool", href: "/whirlpool-ac-service-vadodara" },
  { name: "Godrej", href: "/godrej-ac-service-vadodara" },
];

const vadodaraAreas = [
  { name: "Alkapuri", href: "/ac-repair-alkapuri-vadodara" },
  { name: "Gotri", href: "/ac-repair-gotri-vadodara" },
  { name: "Manjalpur", href: "/ac-repair-manjalpur-vadodara" },
  { name: "Akota", href: "/ac-repair-akota-vadodara" },
  { name: "Fatehgunj", href: "/ac-repair-fatehgunj-vadodara" },
  { name: "Karelibaug", href: "/ac-repair-karelibaug-vadodara" },
  { name: "Sayajigunj", href: "/ac-repair-sayajigunj-vadodara" },
  { name: "Waghodia", href: "/ac-repair-waghodia-vadodara" },
  { name: "Harni", href: "/ac-repair-harni-vadodara" },
  { name: "Vasna", href: "/ac-repair-vasna-vadodara" },
  { name: "Sama", href: "/ac-repair-sama-vadodara" },
  { name: "Tandalja", href: "/ac-repair-tandalja-vadodara" },
];

const testimonials = [
  {
    name: "Rajesh Patel",
    location: "Alkapuri, Vadodara",
    rating: 5,
    text: "Excellent service! The technician was very professional and fixed my AC within an hour. Highly recommended!",
  },
  {
    name: "Priya Sharma",
    location: "Gotri, Vadodara",
    rating: 5,
    text: "Best AC service in Vadodara. They installed my new Daikin AC perfectly. Great pricing and quality work.",
  },
  {
    name: "Amit Desai",
    location: "Akota, Vadodara",
    rating: 5,
    text: "Very reliable company. Been using their AMC service for 3 years. Always on time and professional.",
  },
];

const faqs = [
  {
    question: "What is the AC service charge in Vadodara?",
    answer: "Our AC service starts from ₹399 for basic servicing. The exact price depends on the AC type (split/window), tonnage, and service needed. We provide upfront pricing with no hidden charges.",
  },
  {
    question: "How quickly can you repair my AC?",
    answer: "We offer same-day AC repair service in Vadodara. In most areas, our technician can reach within 2-4 hours of booking. For urgent repairs, we also have express service available.",
  },
  {
    question: "Do you provide warranty on repairs?",
    answer: "Yes, we provide 30-90 days warranty on all repairs depending on the type of work. Spare parts come with manufacturer warranty. AMC customers get extended warranty benefits.",
  },
  {
    question: "Which AC brands do you service?",
    answer: "We service all major AC brands including Daikin, Voltas, Blue Star, Carrier, LG, Samsung, Hitachi, O General, Mitsubishi, Panasonic, Whirlpool, Godrej, and more.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 py-16 md:py-24 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm mb-6">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span>Rated 4.9/5 by 500+ customers in Vadodara</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                #1 AC Repair & Service in{" "}
                <span className="text-yellow-400">Vadodara</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Professional AC repair, installation & maintenance by certified technicians. 
                20+ years experience. Same-day service. All brands covered.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="tel:+919727257141"
                  className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition shadow-lg"
                >
                  <Phone size={22} />
                  Call Now: +91 97272 57141
                </a>
                <Link
                  href="/contact"
                  className="bg-white/10 hover:bg-white/20 backdrop-blur text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 transition border border-white/30"
                >
                  Get Free Quote
                  <ArrowRight size={20} />
                </Link>
              </div>
              <div className="flex flex-wrap gap-6 text-sm">
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
                  <span>Genuine Parts</span>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6">Book AC Service Now</h3>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                  <select className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white/80 focus:outline-none focus:ring-2 focus:ring-yellow-400">
                    <option value="" className="text-gray-900">Select Service</option>
                    <option value="repair" className="text-gray-900">AC Repair</option>
                    <option value="service" className="text-gray-900">AC Service</option>
                    <option value="installation" className="text-gray-900">AC Installation</option>
                    <option value="amc" className="text-gray-900">AC AMC</option>
                    <option value="gas" className="text-gray-900">Gas Refilling</option>
                  </select>
                  <textarea
                    placeholder="Describe your issue..."
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full bg-yellow-500 hover:bg-yellow-400 text-gray-900 py-4 rounded-lg font-bold text-lg transition"
                  >
                    Book Free Inspection
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our AC Services in Vadodara
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive AC solutions for residential and commercial spaces. 
              Expert technicians, genuine parts, and guaranteed satisfaction.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition group border border-gray-100"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition">
                  <service.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
                <div className="mt-4 text-blue-600 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn More <ArrowRight size={16} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* AC Types Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              All AC Types Serviced
            </h2>
            <p className="text-gray-600">Expert service for every type of air conditioner</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {acTypes.map((type) => (
              <Link
                key={type.href}
                href={type.href}
                className="bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 p-4 rounded-lg text-center transition group"
              >
                <span className="text-gray-800 group-hover:text-blue-600 font-medium">
                  {type.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AC Brands We Service
            </h2>
            <p className="text-gray-600">Authorized service for all major AC brands</p>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {brands.map((brand) => (
              <Link
                key={brand.href}
                href={brand.href}
                className="bg-white hover:bg-blue-50 border border-gray-200 hover:border-blue-300 p-4 rounded-lg text-center transition group"
              >
                <span className="text-gray-800 group-hover:text-blue-600 font-medium">
                  {brand.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Atlas Aircon?
            </h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Trusted by thousands of customers across Vadodara for reliable AC services
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Same Day Service</h3>
              <p className="text-blue-100">Quick response within 2-4 hours in Vadodara</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">20+ Years Experience</h3>
              <p className="text-blue-100">Serving Vadodara since 2004</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Certified Technicians</h3>
              <p className="text-blue-100">Factory-trained professionals</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">90 Days Warranty</h3>
              <p className="text-blue-100">On all repairs and services</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AC Repair Service Areas in Vadodara
            </h2>
            <p className="text-gray-600">We provide AC services across all areas of Vadodara</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {vadodaraAreas.map((area) => (
              <Link
                key={area.href}
                href={area.href}
                className="flex items-center gap-2 bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 p-3 rounded-lg transition group"
              >
                <MapPin size={16} className="text-blue-600 flex-shrink-0" />
                <span className="text-gray-800 group-hover:text-blue-600 text-sm font-medium">
                  {area.name}
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/areas"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition"
            >
              View All 40+ Areas
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-gray-600">Trusted by 5000+ happy customers in Vadodara</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">Common questions about our AC services</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="bg-gray-50 rounded-lg group">
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
            Need AC Repair or Service?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get professional AC service in Vadodara. Call now for same-day service!
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
