import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

// Painting & POP Services
const paintingServices = [
  { name: "POP False Ceiling", href: "/pop-false-ceiling-vadodara" },
  { name: "Gypsum Ceiling", href: "/gypsum-false-ceiling-vadodara" },
  { name: "PVC Ceiling Panels", href: "/pvc-ceiling-panels-vadodara" },
  { name: "Texture Painting", href: "/texture-wall-painting-vadodara" },
  { name: "Interior Painting", href: "/interior-painting-vadodara" },
  { name: "Exterior Painting", href: "/exterior-painting-vadodara" },
  { name: "Wall Painting", href: "/wall-painting-vadodara" },
  { name: "Waterproofing", href: "/waterproofing-vadodara" },
  { name: "Asian Paints Royale", href: "/asian-paints-royale-vadodara" },
  { name: "3D Wall Painting", href: "/3d-wall-painting-vadodara" },
];

// Civil & Masonry Services
const civilServices = [
  { name: "Civil Contractors", href: "/civil-contractors-vadodara" },
  { name: "Home Renovation", href: "/home-renovation-vadodara" },
  { name: "Kitchen Renovation", href: "/kitchen-renovation-vadodara" },
  { name: "Bathroom Renovation", href: "/bathroom-renovation-vadodara" },
  { name: "Masonry Contractors", href: "/masonry-contractors-vadodara" },
  { name: "Tiles Fitting", href: "/tiles-fitting-vadodara" },
  { name: "Plastering Work", href: "/plastering-work-vadodara" },
  { name: "Kadiya Kam", href: "/kadiya-kam-vadodara" },
  { name: "RCC Slab Casting", href: "/rcc-slab-casting-vadodara" },
  { name: "Compound Wall", href: "/compound-wall-vadodara" },
];

// Plumbing Services
const plumbingServices = [
  { name: "Plumbers", href: "/plumbers-vadodara" },
  { name: "Emergency Plumber 24Hr", href: "/emergency-plumber-vadodara" },
  { name: "Water Leakage Repair", href: "/water-leakage-repair-vadodara" },
  { name: "Bathroom Fitting", href: "/bathroom-fitting-vadodara" },
  { name: "Water Tank Cleaning", href: "/water-tank-cleaning-vadodara" },
  { name: "Geyser Installation", href: "/geyser-installation-vadodara" },
  { name: "RO Service", href: "/ro-service-vadodara" },
  { name: "Drainage Cleaning", href: "/drainage-cleaning-vadodara" },
  { name: "Blocked Drain Cleaning", href: "/blocked-drain-cleaning-vadodara" },
  { name: "Toilet Repair", href: "/toilet-repair-vadodara" },
];

// Carpenter & Furniture Services
const carpenterServices = [
  { name: "Best Carpenter", href: "/carpenter-vadodara" },
  { name: "Modular Kitchen", href: "/modular-kitchen-vadodara" },
  { name: "Wardrobe Design", href: "/wardrobe-design-vadodara" },
  { name: "Sofa Manufacturers", href: "/sofa-manufacturers-vadodara" },
  { name: "Furniture Repair", href: "/furniture-repair-vadodara" },
  { name: "Office Furniture", href: "/office-furniture-vadodara" },
  { name: "Teak Wood Furniture", href: "/teak-wood-furniture-vadodara" },
  { name: "Suthar Kam", href: "/suthar-kam-vadodara" },
  { name: "TV Unit Design", href: "/tv-unit-vadodara" },
  { name: "Double Bed Design", href: "/double-bed-design-vadodara" },
];

// Fabrication & Welding Services
const fabricationServices = [
  { name: "Fabrication Work", href: "/fabrication-vadodara" },
  { name: "SS Railing", href: "/ss-railing-vadodara" },
  { name: "Main Gate", href: "/main-gate-vadodara" },
  { name: "Window Grill", href: "/window-grill-vadodara" },
  { name: "Safety Door Grill", href: "/safety-door-grill-vadodara" },
  { name: "Industrial Shed", href: "/industrial-shed-vadodara" },
  { name: "Welding Services", href: "/welding-services-vadodara" },
  { name: "Rolling Shutter", href: "/rolling-shutter-vadodara" },
  { name: "Spiral Staircase", href: "/spiral-staircase-vadodara" },
  { name: "PEB Structure", href: "/peb-structure-vadodara" },
];

// Solar Services
const solarServices = [
  { name: "Solar Maintenance", href: "/solar-maintenance-vadodara" },
  { name: "Solar Panel Cleaning", href: "/solar-panel-cleaning-vadodara" },
  { name: "Solar Inverter Repair", href: "/solar-inverter-repair-vadodara" },
  { name: "Solar AMC", href: "/solar-amc-vadodara" },
  { name: "Industrial Solar", href: "/industrial-solar-vadodara" },
  { name: "Rooftop Solar", href: "/rooftop-solar-vadodara" },
  { name: "Solar Plant AMC", href: "/solar-plant-amc-vadodara" },
  { name: "Solar Efficiency Testing", href: "/solar-efficiency-testing-vadodara" },
];

// Vadodara Areas
const vadodaraAreas = [
  { name: "Alkapuri", href: "/services-alkapuri-vadodara" },
  { name: "Gotri", href: "/services-gotri-vadodara" },
  { name: "Manjalpur", href: "/services-manjalpur-vadodara" },
  { name: "Akota", href: "/services-akota-vadodara" },
  { name: "Fatehgunj", href: "/services-fatehgunj-vadodara" },
  { name: "Karelibaug", href: "/services-karelibaug-vadodara" },
  { name: "Waghodia Road", href: "/services-waghodia-road-vadodara" },
  { name: "Makarpura GIDC", href: "/services-makarpura-gidc-vadodara" },
  { name: "Bhayli", href: "/services-bhayli-vadodara" },
  { name: "Chhani", href: "/services-chhani-vadodara" },
  { name: "Nandesari GIDC", href: "/services-nandesari-gidc-vadodara" },
  { name: "Por Ramangamdi", href: "/services-por-ramangamdi-vadodara" },
];

// More Areas
const moreAreas = [
  { name: "Ajwa Road", href: "/services-ajwa-road-vadodara" },
  { name: "Gotri Road", href: "/services-gotri-road-vadodara" },
  { name: "Subhanpura", href: "/services-subhanpura-vadodara" },
  { name: "Nizampura", href: "/services-nizampura-vadodara" },
  { name: "Harni", href: "/services-harni-vadodara" },
  { name: "Tarsali", href: "/services-tarsali-vadodara" },
  { name: "Gorwa", href: "/services-gorwa-vadodara" },
  { name: "Tandalja", href: "/services-tandalja-vadodara" },
  { name: "Vasna", href: "/services-vasna-vadodara" },
  { name: "Sama", href: "/services-sama-vadodara" },
  { name: "Savli Manjusar GIDC", href: "/services-savli-manjusar-vadodara" },
  { name: "Ranoli GIDC", href: "/services-ranoli-gidc-vadodara" },
  { name: "Karjan", href: "/services-karjan-vadodara" },
  { name: "Padra", href: "/services-padra-vadodara" },
  { name: "Jambusar", href: "/services-jambusar-vadodara" },
];

// Quick Links
const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "All Areas", href: "/areas" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12">
                <svg viewBox="0 0 32 32" className="w-full h-full">
                  <defs>
                    <linearGradient id="footerLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{stopColor: "#f97316"}} />
                      <stop offset="100%" style={{stopColor: "#ea580c"}} />
                    </linearGradient>
                  </defs>
                  <circle cx="16" cy="16" r="15" fill="url(#footerLogoGrad)" />
                  <path d="M16 6 L6 14 L8 14 L8 24 L24 24 L24 14 L26 14 Z" fill="#ffffff" />
                  <rect x="14" y="17" width="4" height="7" fill="url(#footerLogoGrad)" rx="0.5" />
                  <rect x="9" y="15" width="3" height="3" fill="url(#footerLogoGrad)" rx="0.5" />
                  <rect x="20" y="15" width="3" height="3" fill="url(#footerLogoGrad)" rx="0.5" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold">Vadodara <span className="text-orange-500">Mistry</span></h3>
                <p className="text-xs text-gray-400">Home Services You Can Trust</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted home services partner in Vadodara. Expert POP ceiling, painting, 
              civil work, plumbing, carpentry, fabrication & solar services. 10+ years experience, 
              5000+ happy customers.
            </p>
            <div className="flex flex-col gap-3">
              <a href="tel:+917600337866" className="flex items-center gap-2 text-gray-300 hover:text-white">
                <Phone size={18} className="text-orange-500" />
                +91 76003 37866
              </a>
              <a href="mailto:info@vadodaramistry.com" className="flex items-center gap-2 text-gray-300 hover:text-white">
                <Mail size={18} className="text-orange-500" />
                info@vadodaramistry.com
              </a>
              <div className="flex items-start gap-2 text-gray-300">
                <MapPin size={18} className="text-orange-500 mt-1 flex-shrink-0" />
                <span>Vadodara, Gujarat 390005</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Clock size={18} className="text-orange-500" />
                Mon-Sat: 8AM-8PM | Sun: 9AM-6PM
              </div>
            </div>

            {/* Quick Links */}
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-3 text-white">Quick Links</h4>
              <ul className="flex flex-wrap gap-x-4 gap-y-2">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-gray-400 hover:text-orange-400 transition">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Painting & POP */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Painting & POP</h4>
            <ul className="space-y-2">
              {paintingServices.map((service) => (
                <li key={service.href}>
                  <Link href={service.href} className="text-gray-400 hover:text-orange-400 transition text-sm">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Civil Work */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Civil Work</h4>
            <ul className="space-y-2">
              {civilServices.map((service) => (
                <li key={service.href}>
                  <Link href={service.href} className="text-gray-400 hover:text-orange-400 transition text-sm">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Plumbing */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Plumbing</h4>
            <ul className="space-y-2">
              {plumbingServices.map((service) => (
                <li key={service.href}>
                  <Link href={service.href} className="text-gray-400 hover:text-orange-400 transition text-sm">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Vadodara Areas */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Service Areas</h4>
            <ul className="space-y-2">
              {vadodaraAreas.slice(0, 10).map((area) => (
                <li key={area.href}>
                  <Link href={area.href} className="text-gray-400 hover:text-orange-400 transition text-sm">
                    {area.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/areas" className="text-orange-400 hover:text-orange-300 font-medium text-sm">
                  View All Areas →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Carpenter & Furniture Row */}
        <div className="mt-10 pt-8 border-t border-gray-800">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Carpenter & Furniture</h4>
              <div className="grid grid-cols-2 gap-2">
                {carpenterServices.map((service) => (
                  <Link 
                    key={service.href} 
                    href={service.href} 
                    className="text-gray-400 hover:text-orange-400 transition text-sm"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Fabrication & Welding</h4>
              <div className="grid grid-cols-2 gap-2">
                {fabricationServices.map((service) => (
                  <Link 
                    key={service.href} 
                    href={service.href} 
                    className="text-gray-400 hover:text-orange-400 transition text-sm"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Solar Services</h4>
              <div className="grid grid-cols-2 gap-2">
                {solarServices.map((service) => (
                  <Link 
                    key={service.href} 
                    href={service.href} 
                    className="text-gray-400 hover:text-orange-400 transition text-sm"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* More Areas Row */}
        <div className="mt-6 pt-6 border-t border-gray-800">
          <h4 className="text-lg font-semibold mb-4 text-white">More Service Areas</h4>
          <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-8 gap-3">
            {moreAreas.map((area) => (
              <Link 
                key={area.href} 
                href={area.href} 
                className="text-gray-400 hover:text-orange-400 transition text-sm"
              >
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Social Links Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <span className="text-gray-400 text-sm">Follow Us:</span>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/vadodaramistry"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/vadodaramistry"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-500 rounded-full flex items-center justify-center hover:opacity-90 transition"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://wa.me/917600337866"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Vadodara Mistry. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/about" className="text-gray-400 hover:text-white">
                About
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-white">
                Contact
              </Link>
              <Link href="/areas" className="text-gray-400 hover:text-white">
                All Areas
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
