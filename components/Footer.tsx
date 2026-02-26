import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

// Core Services
const services = [
  { name: "AC Repair", href: "/ac-repair-vadodara" },
  { name: "AC Service", href: "/ac-service-vadodara" },
  { name: "AC Installation", href: "/ac-installation-vadodara" },
  { name: "AC AMC", href: "/ac-amc-vadodara" },
  { name: "AC Gas Refilling", href: "/ac-gas-refilling-vadodara" },
  { name: "Chiller Repair", href: "/chiller-repair-vadodara" },
  { name: "HVAC Service", href: "/hvac-service-vadodara" },
  { name: "VRF VRV System", href: "/vrf-vrv-system-vadodara" },
  { name: "Refrigerator Repair", href: "/refrigerator-repair-vadodara" },
  { name: "Fridge Repair", href: "/fridge-repair-vadodara" },
];

// AC Types
const acTypes = [
  { name: "Split AC Repair", href: "/split-ac-repair-vadodara" },
  { name: "Window AC Repair", href: "/window-ac-repair-vadodara" },
  { name: "Cassette AC Repair", href: "/cassette-ac-repair-vadodara" },
  { name: "Ductable AC", href: "/ductable-ac-vadodara" },
  { name: "Tower AC", href: "/tower-ac-vadodara" },
  { name: "Central AC Repair", href: "/central-ac-repair-vadodara" },
  { name: "Panel AC Repair", href: "/panel-ac-repair-vadodara" },
  { name: "Portable AC Repair", href: "/portable-ac-repair-vadodara" },
  { name: "Package AC", href: "/package-ac-vadodara" },
  { name: "Inverter AC Repair", href: "/inverter-ac-repair-vadodara" },
];

// AC Brands
const acBrands = [
  { name: "Daikin AC", href: "/daikin-service-vadodara" },
  { name: "Voltas AC", href: "/voltas-ac-service-vadodara" },
  { name: "Blue Star AC", href: "/bluestar-ac-service-vadodara" },
  { name: "Carrier AC", href: "/carrier-ac-repair-vadodara" },
  { name: "LG AC", href: "/lg-ac-service-vadodara" },
  { name: "Samsung AC", href: "/samsung-ac-service-vadodara" },
  { name: "Hitachi AC", href: "/hitachi-ac-repair-vadodara" },
  { name: "O General AC", href: "/ogeneral-ac-service-vadodara" },
  { name: "Panasonic AC", href: "/panasonic-ac-installation-vadodara" },
  { name: "Godrej AC", href: "/godrej-ac-vadodara" },
];

// Vadodara Areas
const vadodaraAreas = [
  { name: "Alkapuri", href: "/ac-repair-alkapuri-vadodara" },
  { name: "Gotri", href: "/ac-repair-gotri-vadodara" },
  { name: "Manjalpur", href: "/ac-repair-manjalpur-vadodara" },
  { name: "Akota", href: "/ac-repair-akota-vadodara" },
  { name: "Fatehgunj", href: "/ac-repair-fatehgunj-vadodara" },
  { name: "Karelibaug", href: "/ac-repair-karelibaug-vadodara" },
  { name: "Sayajigunj", href: "/ac-repair-sayajigunj-vadodara" },
  { name: "Waghodia Road", href: "/ac-repair-waghodia-road-vadodara" },
  { name: "Subhanpura", href: "/ac-repair-subhanpura-vadodara" },
  { name: "Nizampura", href: "/ac-repair-nizampura-vadodara" },
  { name: "Harni", href: "/ac-repair-harni-vadodara" },
  { name: "Tarsali", href: "/ac-repair-tarsali-vadodara" },
  { name: "Makarpura", href: "/ac-repair-makarpura-vadodara" },
  { name: "Gorwa", href: "/ac-repair-gorwa-vadodara" },
  { name: "Nandesari", href: "/ac-repair-nandesari-vadodara" },
  { name: "Tandalja", href: "/ac-repair-tandalja-vadodara" },
  { name: "Vasna", href: "/ac-repair-vasna-vadodara" },
  { name: "Sama", href: "/ac-repair-sama-vadodara" },
  { name: "Bhayli", href: "/ac-repair-bhayli-vadodara" },
  { name: "Chhani", href: "/ac-repair-chhani-vadodara" },
];

// More Vadodara Areas
const moreAreas = [
  { name: "Ajwa Road", href: "/ac-repair-ajwa-road-vadodara" },
  { name: "Gotri Road", href: "/ac-repair-gotri-road-vadodara" },
  { name: "VIP Road", href: "/ac-repair-vip-road-vadodara" },
  { name: "Diwalipura", href: "/ac-repair-diwalipura-vadodara" },
  { name: "Ellora Park", href: "/ac-repair-ellora-park-vadodara" },
  { name: "Race Course", href: "/ac-repair-race-course-vadodara" },
  { name: "Pratapgunj", href: "/ac-repair-pratapgunj-vadodara" },
  { name: "Lalbaug", href: "/ac-repair-lalbaug-vadodara" },
  { name: "Raopura", href: "/ac-repair-raopura-vadodara" },
  { name: "Dabhoi Road", href: "/ac-repair-dabhoi-road-vadodara" },
  { name: "Padra Road", href: "/ac-repair-padra-road-vadodara" },
  { name: "Sevasi", href: "/ac-repair-sevasi-vadodara" },
  { name: "Atladara", href: "/ac-repair-atladara-vadodara" },
  { name: "Manjusar", href: "/ac-repair-manjusar-vadodara" },
  { name: "Haridham", href: "/ac-repair-haridham-vadodara" },
  { name: "Soma Talav", href: "/ac-repair-soma-talav-vadodara" },
  { name: "New Sama", href: "/ac-repair-new-sama-vadodara" },
  { name: "Jetalpur Road", href: "/ac-repair-jetalpur-road-vadodara" },
  { name: "Sun Pharma Road", href: "/ac-repair-sun-pharma-road-vadodara" },
  { name: "GIDC Makarpura", href: "/ac-repair-gidc-makarpura-vadodara" },
];

// Gujarat Cities
const cities = [
  { name: "Ahmedabad", href: "/ac-repair-ahmedabad" },
  { name: "Surat", href: "/ac-repair-surat" },
  { name: "Bharuch", href: "/ac-repair-bharuch" },
  { name: "Anand", href: "/ac-repair-anand" },
  { name: "Ankleshwar", href: "/ac-repair-ankleshwar" },
  { name: "Nadiad", href: "/ac-repair-nadiad" },
  { name: "Gandhinagar", href: "/ac-repair-gandhinagar" },
  { name: "Rajkot", href: "/ac-repair-rajkot" },
  { name: "Halol", href: "/ac-repair-halol" },
  { name: "Godhra", href: "/ac-repair-godhra" },
  { name: "Dahej", href: "/ac-repair-dahej" },
  { name: "Padra", href: "/ac-repair-padra" },
  { name: "Karjan", href: "/ac-repair-karjan" },
  { name: "Savli", href: "/ac-repair-savli" },
  { name: "Dabhoi", href: "/ac-repair-dabhoi" },
  { name: "Mehsana", href: "/ac-repair-mehsana" },
  { name: "Bhavnagar", href: "/ac-repair-bhavnagar" },
  { name: "Junagadh", href: "/ac-repair-junagadh" },
  { name: "Navsari", href: "/ac-repair-navsari" },
  { name: "Vapi", href: "/ac-repair-vapi" },
];

// Popular Problems & Services
const popularServices = [
  { name: "AC Not Cooling", href: "/ac-not-cooling-vadodara" },
  { name: "AC Gas Leak Repair", href: "/ac-gas-leak-repair-vadodara" },
  { name: "AC Water Leakage", href: "/ac-water-leakage-repair-vadodara" },
  { name: "AC PCB Repair", href: "/ac-pcb-repair-vadodara" },
  { name: "AC Compressor Repair", href: "/ac-compressor-vadodara" },
  { name: "Emergency AC Repair", href: "/emergency-ac-repair-vadodara" },
  { name: "24x7 AC Service", href: "/24x7-ac-service-vadodara" },
  { name: "Commercial AC", href: "/commercial-ac-repair-vadodara" },
  { name: "Industrial AC", href: "/industrial-ac-service-vadodara" },
  { name: "Cold Room Service", href: "/cold-room-service-vadodara" },
  { name: "Deep Freezer Repair", href: "/deep-freezer-repair-vadodara" },
  { name: "Water Cooler Repair", href: "/water-cooler-repair-vadodara" },
];

// AC Tonnage
const tonnageServices = [
  { name: "1 Ton AC Repair", href: "/1-ton-ac-repair-vadodara" },
  { name: "1.5 Ton AC Service", href: "/1-5-ton-ac-service-vadodara" },
  { name: "2 Ton AC Repair", href: "/2-ton-ac-repair-vadodara" },
  { name: "3 Ton AC Service", href: "/3-ton-ac-service-vadodara" },
  { name: "5 Ton AC Service", href: "/5-ton-ac-service-vadodara" },
];

// HVAC & Commercial
const hvacServices = [
  { name: "VRF Installation", href: "/vrf-installation-vadodara" },
  { name: "Duct Cleaning", href: "/ac-duct-cleaning-vadodara" },
  { name: "Chiller Plant Service", href: "/chiller-plant-service-vadodara" },
  { name: "AHU Repair", href: "/ahu-repair-vadodara" },
  { name: "Cooling Tower Service", href: "/cooling-tower-service-vadodara" },
  { name: "HVAC Maintenance", href: "/hvac-maintenance-vadodara" },
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
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Atlas Aircon</h3>
                <p className="text-xs text-gray-400">Est. 2004</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Professional AC installation, service & repair in Vadodara. 
              Trusted by 5000+ customers with 20+ years of experience.
            </p>
            <div className="flex flex-col gap-3">
              <a href="tel:+919727257141" className="flex items-center gap-2 text-gray-300 hover:text-white">
                <Phone size={18} className="text-blue-500" />
                +91 97272 57141
              </a>
              <a href="mailto:atlasaircon1@gmail.com" className="flex items-center gap-2 text-gray-300 hover:text-white">
                <Mail size={18} className="text-blue-500" />
                atlasaircon1@gmail.com
              </a>
              <div className="flex items-start gap-2 text-gray-300">
                <MapPin size={18} className="text-blue-500 mt-1 flex-shrink-0" />
                <span>Sayajigunj, Vadodara, Gujarat 390005</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Clock size={18} className="text-blue-500" />
                Mon-Sat: 9AM-8PM | Sun: 10AM-6PM
              </div>
            </div>

            {/* Quick Links */}
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-3 text-white">Quick Links</h4>
              <ul className="flex flex-wrap gap-x-4 gap-y-2">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-gray-400 hover:text-blue-400 transition">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.href}>
                  <Link href={service.href} className="text-gray-400 hover:text-blue-400 transition text-sm">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* AC Types */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">AC Types</h4>
            <ul className="space-y-2">
              {acTypes.map((type) => (
                <li key={type.href}>
                  <Link href={type.href} className="text-gray-400 hover:text-blue-400 transition text-sm">
                    {type.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* AC Brands */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">AC Brands</h4>
            <ul className="space-y-2">
              {acBrands.map((brand) => (
                <li key={brand.href}>
                  <Link href={brand.href} className="text-gray-400 hover:text-blue-400 transition text-sm">
                    {brand.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Vadodara Areas */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Vadodara Areas</h4>
            <ul className="space-y-2">
              {vadodaraAreas.slice(0, 12).map((area) => (
                <li key={area.href}>
                  <Link href={area.href} className="text-gray-400 hover:text-blue-400 transition text-sm">
                    {area.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/areas" className="text-blue-400 hover:text-blue-300 font-medium text-sm">
                  View All 90+ Areas →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* More Areas Row */}
        <div className="mt-10 pt-8 border-t border-gray-800">
          <h4 className="text-lg font-semibold mb-4 text-white">More Vadodara Areas</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-10 gap-3">
            {moreAreas.map((area) => (
              <Link 
                key={area.href} 
                href={area.href} 
                className="text-gray-400 hover:text-blue-400 transition text-sm"
              >
                {area.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Popular Services Row */}
        <div className="mt-6 pt-6 border-t border-gray-800">
          <h4 className="text-lg font-semibold mb-4 text-white">Popular Services</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {popularServices.map((service) => (
              <Link 
                key={service.href} 
                href={service.href} 
                className="text-gray-400 hover:text-blue-400 transition text-sm"
              >
                {service.name}
              </Link>
            ))}
          </div>
        </div>

        {/* AC Tonnage & HVAC Row */}
        <div className="mt-6 pt-6 border-t border-gray-800">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">AC By Tonnage</h4>
              <div className="flex flex-wrap gap-3">
                {tonnageServices.map((service) => (
                  <Link 
                    key={service.href} 
                    href={service.href} 
                    className="text-gray-400 hover:text-blue-400 transition text-sm"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">HVAC & Commercial</h4>
              <div className="flex flex-wrap gap-3">
                {hvacServices.map((service) => (
                  <Link 
                    key={service.href} 
                    href={service.href} 
                    className="text-gray-400 hover:text-blue-400 transition text-sm"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Cities Row */}
        <div className="mt-6 pt-6 border-t border-gray-800">
          <h4 className="text-lg font-semibold mb-4 text-white">Cities We Serve (Industrial & Commercial AC)</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-10 gap-3">
            {cities.map((city) => (
              <Link 
                key={city.href} 
                href={city.href} 
                className="text-gray-400 hover:text-blue-400 transition text-sm"
              >
                {city.name}
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
                href="https://www.facebook.com/atlasaircon"
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
                href="https://www.instagram.com/atlasaircon"
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
                href="https://www.youtube.com/@atlasaircon"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href="https://wa.me/919727257141"
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
              © {new Date().getFullYear()} Atlas Aircon. All rights reserved.
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
