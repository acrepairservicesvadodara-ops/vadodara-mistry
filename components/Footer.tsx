import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const services = [
  { name: "AC Repair", href: "/ac-repair-vadodara" },
  { name: "AC Service", href: "/ac-service-vadodara" },
  { name: "AC Installation", href: "/ac-installation-vadodara" },
  { name: "AC AMC", href: "/ac-amc-vadodara" },
  { name: "AC Gas Refilling", href: "/ac-gas-refilling-vadodara" },
  { name: "Chiller Repair", href: "/chiller-repair-vadodara" },
  { name: "HVAC Service", href: "/hvac-service-vadodara" },
  { name: "VRF VRV System", href: "/vrf-vrv-system-vadodara" },
];

const areas = [
  { name: "Alkapuri", href: "/ac-repair-alkapuri-vadodara" },
  { name: "Gotri", href: "/ac-repair-gotri-vadodara" },
  { name: "Manjalpur", href: "/ac-repair-manjalpur-vadodara" },
  { name: "Akota", href: "/ac-repair-akota-vadodara" },
  { name: "Fatehgunj", href: "/ac-repair-fatehgunj-vadodara" },
  { name: "Karelibaug", href: "/ac-repair-karelibaug-vadodara" },
  { name: "Sayajigunj", href: "/ac-repair-sayajigunj-vadodara" },
  { name: "Waghodia", href: "/ac-repair-waghodia-vadodara" },
];

const cities = [
  { name: "Ahmedabad", href: "/ac-repair-ahmedabad" },
  { name: "Surat", href: "/ac-repair-surat" },
  { name: "Bharuch", href: "/ac-repair-bharuch" },
  { name: "Anand", href: "/ac-repair-anand" },
  { name: "Rajkot", href: "/ac-repair-rajkot" },
  { name: "Gandhinagar", href: "/ac-repair-gandhinagar" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Atlas Aircon</h3>
                <p className="text-xs text-gray-400">Est. 2017</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Professional AC repair, service & installation in Vadodara. 
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
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.href}>
                  <Link href={service.href} className="text-gray-400 hover:text-blue-400 transition">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Vadodara Areas */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Vadodara Areas</h4>
            <ul className="space-y-2">
              {areas.map((area) => (
                <li key={area.href}>
                  <Link href={area.href} className="text-gray-400 hover:text-blue-400 transition">
                    {area.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/areas" className="text-blue-400 hover:text-blue-300 font-medium">
                  View All Areas →
                </Link>
              </li>
            </ul>
          </div>

          {/* Cities We Serve */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Cities We Serve</h4>
            <ul className="space-y-2">
              {cities.map((city) => (
                <li key={city.href}>
                  <Link href={city.href} className="text-gray-400 hover:text-blue-400 transition">
                    {city.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="mt-6">
              <h5 className="font-medium mb-3">Follow Us</h5>
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
              </div>
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
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-white">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
