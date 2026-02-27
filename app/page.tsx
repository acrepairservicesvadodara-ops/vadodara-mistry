import Link from "next/link";
import Image from "next/image";
import { 
  Phone, 
  CheckCircle, 
  Star, 
  Clock, 
  Shield, 
  Award, 
  Users, 
  MapPin,
  ArrowRight,
  Paintbrush,
  Hammer,
  Wrench,
  Sofa,
  Settings,
  Sun,
  Building,
  Home as HomeIcon,
  Factory
} from "lucide-react";
import BookingForm from "@/components/BookingForm";

const services = [
  {
    icon: Paintbrush,
    title: "POP & Painting",
    description: "False ceiling, texture painting, interior & exterior painting services.",
    href: "/pop-false-ceiling-vadodara",
    color: "orange",
  },
  {
    icon: Hammer,
    title: "Civil Work",
    description: "Construction, renovation, masonry, tiles fitting & plastering work.",
    href: "/civil-contractors-vadodara",
    color: "amber",
  },
  {
    icon: Wrench,
    title: "Plumbing",
    description: "24hr plumber, water leakage repair, bathroom fitting & drainage.",
    href: "/plumbers-vadodara",
    color: "blue",
  },
  {
    icon: Sofa,
    title: "Carpenter & Furniture",
    description: "Modular kitchen, wardrobe, sofa, custom furniture & woodwork.",
    href: "/carpenter-vadodara",
    color: "green",
  },
  {
    icon: Settings,
    title: "Fabrication & Welding",
    description: "SS railing, main gate, window grill, industrial shed & welding.",
    href: "/fabrication-vadodara",
    color: "gray",
  },
  {
    icon: Sun,
    title: "Solar Maintenance",
    description: "Solar panel cleaning, inverter repair, AMC & industrial solar.",
    href: "/solar-maintenance-vadodara",
    color: "yellow",
  },
];

const stats = [
  { number: "10+", label: "Years Experience" },
  { number: "5000+", label: "Happy Customers" },
  { number: "100+", label: "Expert Mistries" },
  { number: "4.8", label: "Google Rating" },
];

const paintingServices = [
  { name: "POP False Ceiling Hall", href: "/pop-false-ceiling-hall-vadodara" },
  { name: "Gypsum Ceiling", href: "/gypsum-false-ceiling-vadodara" },
  { name: "PVC Ceiling Panels", href: "/pvc-ceiling-panels-vadodara" },
  { name: "Texture Painting", href: "/texture-wall-painting-vadodara" },
  { name: "Asian Paints Royale", href: "/asian-paints-royale-vadodara" },
  { name: "3D Wall Painting", href: "/3d-wall-painting-vadodara" },
  { name: "Waterproofing", href: "/waterproofing-vadodara" },
  { name: "Exterior Painting", href: "/exterior-painting-vadodara" },
];

const civilServices = [
  { name: "Civil Contractors", href: "/civil-contractors-vadodara" },
  { name: "Home Renovation", href: "/home-renovation-vadodara" },
  { name: "Kitchen Renovation", href: "/kitchen-renovation-vadodara" },
  { name: "Bathroom Renovation", href: "/bathroom-renovation-vadodara" },
  { name: "Tiles Fitting", href: "/tiles-fitting-vadodara" },
  { name: "Kadiya Kam", href: "/kadiya-kam-vadodara" },
  { name: "RCC Slab Casting", href: "/rcc-slab-casting-vadodara" },
  { name: "Compound Wall", href: "/compound-wall-vadodara" },
];

const plumbingServices = [
  { name: "Emergency Plumber 24Hr", href: "/emergency-plumber-vadodara" },
  { name: "Water Leakage Repair", href: "/water-leakage-repair-vadodara" },
  { name: "Bathroom Fitting", href: "/bathroom-fitting-vadodara" },
  { name: "Water Tank Cleaning", href: "/water-tank-cleaning-vadodara" },
  { name: "Geyser Installation", href: "/geyser-installation-vadodara" },
  { name: "RO Service", href: "/ro-service-vadodara" },
  { name: "Drainage Cleaning", href: "/drainage-cleaning-vadodara" },
  { name: "Toilet Repair", href: "/toilet-repair-vadodara" },
];

const carpenterServices = [
  { name: "Modular Kitchen", href: "/modular-kitchen-vadodara" },
  { name: "Wardrobe Design", href: "/wardrobe-design-vadodara" },
  { name: "Sofa Manufacturers", href: "/sofa-manufacturers-vadodara" },
  { name: "TV Unit Design", href: "/tv-unit-vadodara" },
  { name: "Double Bed Design", href: "/double-bed-design-vadodara" },
  { name: "Office Furniture", href: "/office-furniture-vadodara" },
  { name: "Teak Wood Furniture", href: "/teak-wood-furniture-vadodara" },
  { name: "Furniture Repair", href: "/furniture-repair-vadodara" },
];

const fabricationServices = [
  { name: "SS Railing", href: "/ss-railing-vadodara" },
  { name: "Main Gate", href: "/main-gate-vadodara" },
  { name: "Window Grill", href: "/window-grill-vadodara" },
  { name: "Safety Door Grill", href: "/safety-door-grill-vadodara" },
  { name: "Industrial Shed", href: "/industrial-shed-vadodara" },
  { name: "Spiral Staircase", href: "/spiral-staircase-vadodara" },
  { name: "Welding Services", href: "/welding-services-vadodara" },
  { name: "Rolling Shutter", href: "/rolling-shutter-vadodara" },
];

const solarServices = [
  { name: "Solar Panel Cleaning", href: "/solar-panel-cleaning-vadodara" },
  { name: "Solar Inverter Repair", href: "/solar-inverter-repair-vadodara" },
  { name: "Solar AMC", href: "/solar-amc-vadodara" },
  { name: "Industrial Solar", href: "/industrial-solar-vadodara" },
  { name: "Rooftop Solar", href: "/rooftop-solar-vadodara" },
  { name: "Solar Troubleshooting", href: "/solar-troubleshooting-vadodara" },
];

const vadodaraAreas = [
  { name: "Alkapuri", href: "/services-alkapuri-vadodara" },
  { name: "Gotri", href: "/services-gotri-vadodara" },
  { name: "Manjalpur", href: "/services-manjalpur-vadodara" },
  { name: "Akota", href: "/services-akota-vadodara" },
  { name: "Fatehgunj", href: "/services-fatehgunj-vadodara" },
  { name: "Karelibaug", href: "/services-karelibaug-vadodara" },
  { name: "Waghodia Road", href: "/services-waghodia-road-vadodara" },
  { name: "Bhayli", href: "/services-bhayli-vadodara" },
  { name: "Makarpura GIDC", href: "/services-makarpura-gidc-vadodara" },
  { name: "Nandesari GIDC", href: "/services-nandesari-gidc-vadodara" },
  { name: "Harni", href: "/services-harni-vadodara" },
  { name: "Chhani", href: "/services-chhani-vadodara" },
];

const testimonials = [
  {
    name: "Rajesh Patel",
    location: "Alkapuri, Vadodara",
    rating: 5,
    service: "POP Ceiling",
    text: "Excellent POP ceiling work for my hall! The design was exactly what I wanted. Very professional team.",
  },
  {
    name: "Priya Shah",
    location: "Gotri, Vadodara",
    rating: 5,
    service: "Modular Kitchen",
    text: "Best carpenter work in Vadodara. My modular kitchen looks amazing. Great quality and finish.",
  },
  {
    name: "Amit Desai",
    location: "Manjalpur, Vadodara",
    rating: 5,
    service: "Civil Work",
    text: "Completed my bathroom renovation on time and within budget. Very reliable contractor.",
  },
  {
    name: "Suresh Mehta",
    location: "Makarpura GIDC",
    rating: 5,
    service: "Solar AMC",
    text: "Regular solar maintenance keeps our factory panels working efficiently. Highly recommended.",
  },
];

const faqs = [
  {
    question: "What home services do you provide in Vadodara?",
    answer: "We provide comprehensive home services including POP & false ceiling, interior/exterior painting, civil construction & renovation, plumbing, carpentry & furniture making, MS/SS fabrication & welding, and solar panel maintenance services across Vadodara.",
  },
  {
    question: "How can I book a service?",
    answer: "You can book our services by calling +91 97272 57141, sending a WhatsApp message, or filling out our online booking form. We provide free quotations for all services.",
  },
  {
    question: "Do you provide services for commercial and industrial projects?",
    answer: "Yes, we provide services for residential, commercial, and industrial projects. Our team handles factory construction, industrial shed fabrication, commercial painting, office furniture, and solar plant maintenance in GIDC areas.",
  },
  {
    question: "What areas in Vadodara do you cover?",
    answer: "We cover all areas of Vadodara including Alkapuri, Gotri, Manjalpur, Akota, Karelibaug, Waghodia Road, Bhayli, Makarpura GIDC, Nandesari GIDC, and all surrounding areas.",
  },
  {
    question: "Do you provide warranty on your work?",
    answer: "Yes, we provide warranty on all our services. The warranty period varies by service type - typically 1-5 years for major work like civil construction, POP ceiling, and furniture. We use quality materials and skilled mistries.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=1920&q=80"
            alt="Professional home services in Vadodara"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/95 via-orange-600/90 to-orange-500/80" />
        </div>
        <div className="container mx-auto px-4 py-16 md:py-24 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm mb-6">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span>Trusted by 5000+ customers in Vadodara</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Best Home Services in{" "}
                <span className="text-yellow-300">Vadodara</span>
              </h1>
              <p className="text-xl text-orange-100 mb-8 leading-relaxed">
                Expert POP ceiling, painting, civil work, plumbing, carpentry, 
                fabrication & solar services. Your trusted mistry network in Vadodara.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="tel:+917600337866"
                  className="bg-white hover:bg-gray-100 text-orange-600 px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition shadow-lg"
                >
                  <Phone size={22} />
                  Call: +91 97272 57141
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
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Verified Mistries</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Quality Work</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Fair Pricing</span>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <BookingForm title="Get Free Quotation" />
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
                <div className="text-3xl md:text-4xl font-bold text-orange-600">{stat.number}</div>
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
              Our Services in Vadodara
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Complete home services for residential, commercial & industrial needs. 
              Expert mistries, quality materials, and guaranteed satisfaction.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition group border border-gray-100"
              >
                <div className={`w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-500 transition`}>
                  <service.icon className="w-7 h-7 text-orange-600 group-hover:text-white transition" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
                <div className="mt-4 text-orange-600 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                  View Services <ArrowRight size={16} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Painting & POP Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                POP Ceiling & Painting Services
              </h2>
              <p className="text-gray-600">False ceiling, texture painting, waterproofing & more</p>
            </div>
            <Link href="/pop-false-ceiling-vadodara" className="text-orange-600 font-medium flex items-center gap-1 mt-4 md:mt-0">
              View All <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {paintingServices.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="bg-orange-50 hover:bg-orange-100 border border-orange-200 hover:border-orange-300 p-4 rounded-lg text-center transition group"
              >
                <span className="text-gray-800 group-hover:text-orange-600 font-medium text-sm">
                  {service.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Civil Work Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Civil Work & Construction
              </h2>
              <p className="text-gray-600">Kadiya kam, renovation, masonry, tiles fitting & more</p>
            </div>
            <Link href="/civil-contractors-vadodara" className="text-orange-600 font-medium flex items-center gap-1 mt-4 md:mt-0">
              View All <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {civilServices.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="bg-amber-50 hover:bg-amber-100 border border-amber-200 hover:border-amber-300 p-4 rounded-lg text-center transition group"
              >
                <span className="text-gray-800 group-hover:text-amber-700 font-medium text-sm">
                  {service.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Plumbing Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Plumbing Services
              </h2>
              <p className="text-gray-600">24hr emergency plumber, water leakage, bathroom fitting</p>
            </div>
            <Link href="/plumbers-vadodara" className="text-orange-600 font-medium flex items-center gap-1 mt-4 md:mt-0">
              View All <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {plumbingServices.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="bg-blue-50 hover:bg-blue-100 border border-blue-200 hover:border-blue-300 p-4 rounded-lg text-center transition group"
              >
                <span className="text-gray-800 group-hover:text-blue-600 font-medium text-sm">
                  {service.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Carpenter & Furniture Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Carpenter & Furniture
              </h2>
              <p className="text-gray-600">Suthar kam, modular kitchen, wardrobe, sofa & more</p>
            </div>
            <Link href="/carpenter-vadodara" className="text-orange-600 font-medium flex items-center gap-1 mt-4 md:mt-0">
              View All <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {carpenterServices.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="bg-green-50 hover:bg-green-100 border border-green-200 hover:border-green-300 p-4 rounded-lg text-center transition group"
              >
                <span className="text-gray-800 group-hover:text-green-600 font-medium text-sm">
                  {service.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Fabrication & Welding Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Fabrication & Welding
              </h2>
              <p className="text-gray-600">Lohedar kam, SS railing, gates, grills, industrial work</p>
            </div>
            <Link href="/fabrication-vadodara" className="text-orange-600 font-medium flex items-center gap-1 mt-4 md:mt-0">
              View All <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {fabricationServices.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="bg-gray-100 hover:bg-gray-200 border border-gray-300 hover:border-gray-400 p-4 rounded-lg text-center transition group"
              >
                <span className="text-gray-800 group-hover:text-gray-900 font-medium text-sm">
                  {service.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Solar Services Section */}
      <section className="py-16 bg-yellow-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Solar Maintenance Services
              </h2>
              <p className="text-gray-600">Solar panel cleaning, inverter repair, AMC for GIDC</p>
            </div>
            <Link href="/solar-maintenance-vadodara" className="text-orange-600 font-medium flex items-center gap-1 mt-4 md:mt-0">
              View All <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {solarServices.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="bg-white hover:bg-yellow-100 border border-yellow-300 hover:border-yellow-400 p-4 rounded-lg text-center transition group"
              >
                <span className="text-gray-800 group-hover:text-yellow-700 font-medium text-sm">
                  {service.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Vadodara Mistry?
            </h2>
            <p className="text-orange-100 max-w-2xl mx-auto">
              Your trusted partner for all home services in Vadodara
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Verified Mistries</h3>
              <p className="text-orange-100">Background verified, skilled professionals</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">10+ Years Experience</h3>
              <p className="text-orange-100">Trusted by 5000+ customers</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">On-Time Service</h3>
              <p className="text-orange-100">Punctual and reliable work</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Guarantee</h3>
              <p className="text-orange-100">Warranty on all work</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Types - Residential, Commercial, Industrial */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Services for Every Need
            </h2>
            <p className="text-gray-600">Residential, Commercial & Industrial solutions</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-orange-50 p-8 rounded-2xl border border-orange-200 hover:shadow-lg transition">
              <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                <HomeIcon className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Residential</h3>
              <p className="text-gray-600 mb-4">
                Complete home services including painting, renovation, plumbing, furniture, and more for houses and apartments.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-orange-500" /> Home Painting & POP</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-orange-500" /> Kitchen & Bathroom Renovation</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-orange-500" /> Modular Furniture</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-orange-500" /> Plumbing & Electrical</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-200 hover:shadow-lg transition">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Building className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Commercial</h3>
              <p className="text-gray-600 mb-4">
                Office, shop, showroom & restaurant services. Professional interiors, furniture, and maintenance solutions.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-500" /> Office Interiors & POP</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-500" /> Shop Renovation</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-500" /> Office Furniture</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-500" /> Commercial Plumbing</li>
              </ul>
            </div>
            <div className="bg-gray-100 p-8 rounded-2xl border border-gray-300 hover:shadow-lg transition">
              <div className="w-16 h-16 bg-gray-200 rounded-xl flex items-center justify-center mb-4">
                <Factory className="w-8 h-8 text-gray-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Industrial</h3>
              <p className="text-gray-600 mb-4">
                Factory, GIDC, and warehouse services. Industrial construction, fabrication, and solar maintenance.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-gray-600" /> Industrial Shed Fabrication</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-gray-600" /> Factory Construction</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-gray-600" /> Solar Plant Maintenance</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-gray-600" /> Heavy Welding Work</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Service Areas in Vadodara
            </h2>
            <p className="text-gray-600">We provide services across all areas of Vadodara & nearby GIDC</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {vadodaraAreas.map((area) => (
              <Link
                key={area.href}
                href={area.href}
                className="flex items-center gap-2 bg-white hover:bg-orange-50 border border-gray-200 hover:border-orange-300 p-3 rounded-lg transition group"
              >
                <MapPin size={16} className="text-orange-600 flex-shrink-0" />
                <span className="text-gray-800 group-hover:text-orange-600 text-sm font-medium">
                  {area.name}
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/areas"
              className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full font-semibold transition"
            >
              View All Areas
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-gray-600">Trusted by thousands of happy customers in Vadodara</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 text-sm italic">"{testimonial.text}"</p>
                <div className="border-t pt-3">
                  <div className="font-semibold text-gray-900 text-sm">{testimonial.name}</div>
                  <div className="text-xs text-gray-500">{testimonial.location}</div>
                  <div className="text-xs text-orange-600 font-medium mt-1">{testimonial.service}</div>
                </div>
              </div>
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
            <p className="text-gray-600">Common questions about our home services</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
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
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Home Services in Vadodara?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Get professional painting, civil work, plumbing, carpentry, fabrication or solar services. 
            Call now for a free quotation!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+917600337866"
              className="bg-white hover:bg-gray-100 text-orange-600 px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition"
            >
              <Phone size={22} />
              +91 97272 57141
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
