"use client";

import Link from "next/link";
import { useState } from "react";
import { Phone, Menu, X, ChevronDown } from "lucide-react";

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

const acTypes = [
  { name: "Split AC", href: "/split-ac-repair-vadodara" },
  { name: "Window AC", href: "/window-ac-repair-vadodara" },
  { name: "Central AC", href: "/central-ac-repair-vadodara" },
  { name: "Cassette AC", href: "/cassette-ac-repair-vadodara" },
  { name: "Ductable AC", href: "/ductable-ac-repair-vadodara" },
  { name: "Tower AC", href: "/tower-ac-repair-vadodara" },
  { name: "Panel AC", href: "/panel-ac-repair-vadodara" },
];

const brands = [
  { name: "Daikin AC", href: "/daikin-ac-service-vadodara" },
  { name: "Voltas AC", href: "/voltas-ac-service-vadodara" },
  { name: "Blue Star AC", href: "/blue-star-ac-service-vadodara" },
  { name: "Carrier AC", href: "/carrier-ac-service-vadodara" },
  { name: "LG AC", href: "/lg-ac-service-vadodara" },
  { name: "Samsung AC", href: "/samsung-ac-service-vadodara" },
  { name: "Hitachi AC", href: "/hitachi-ac-service-vadodara" },
  { name: "O General AC", href: "/o-general-ac-service-vadodara" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-blue-600 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <span>📍 Sayajigunj, Vadodara</span>
            <span className="hidden md:inline">✉️ atlasaircon1@gmail.com</span>
          </div>
          <a
            href="tel:+919727257141"
            className="flex items-center gap-2 font-semibold hover:text-blue-200 transition"
          >
            <Phone size={16} />
            +91 97272 57141
          </a>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Atlas Aircon</h1>
              <p className="text-xs text-gray-500">AC Repair & Service Expert</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("services")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-gray-700 hover:text-blue-600 font-medium">
                Services <ChevronDown size={16} />
              </button>
              {activeDropdown === "services" && (
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 min-w-[200px] border">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* AC Types Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("types")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-gray-700 hover:text-blue-600 font-medium">
                AC Types <ChevronDown size={16} />
              </button>
              {activeDropdown === "types" && (
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 min-w-[200px] border">
                  {acTypes.map((type) => (
                    <Link
                      key={type.href}
                      href={type.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      {type.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Brands Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("brands")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-gray-700 hover:text-blue-600 font-medium">
                Brands <ChevronDown size={16} />
              </button>
              {activeDropdown === "brands" && (
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 min-w-[200px] border">
                  {brands.map((brand) => (
                    <Link
                      key={brand.href}
                      href={brand.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      {brand.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/areas" className="text-gray-700 hover:text-blue-600 font-medium">
              Service Areas
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium">
              About Us
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href="tel:+919727257141"
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition flex items-center gap-2"
            >
              <Phone size={18} />
              Book Service
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <Link href="/" className="text-gray-700 font-medium" onClick={() => setIsOpen(false)}>
                Home
              </Link>
              <div>
                <p className="text-gray-900 font-semibold mb-2">Services</p>
                <div className="pl-4 flex flex-col gap-2">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="text-gray-600 hover:text-blue-600"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-gray-900 font-semibold mb-2">AC Types</p>
                <div className="pl-4 flex flex-col gap-2">
                  {acTypes.map((type) => (
                    <Link
                      key={type.href}
                      href={type.href}
                      className="text-gray-600 hover:text-blue-600"
                      onClick={() => setIsOpen(false)}
                    >
                      {type.name}
                    </Link>
                  ))}
                </div>
              </div>
              <Link href="/areas" className="text-gray-700 font-medium" onClick={() => setIsOpen(false)}>
                Service Areas
              </Link>
              <Link href="/about" className="text-gray-700 font-medium" onClick={() => setIsOpen(false)}>
                About Us
              </Link>
              <Link href="/contact" className="text-gray-700 font-medium" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
              <a
                href="tel:+919727257141"
                className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold text-center"
              >
                📞 +91 97272 57141
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
