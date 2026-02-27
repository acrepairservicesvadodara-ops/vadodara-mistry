"use client";

import Link from "next/link";
import { useState } from "react";
import { Phone, Menu, X, ChevronDown, Paintbrush, Hammer, Wrench, Sofa, Sun, Settings } from "lucide-react";

const paintingServices = [
  { name: "POP False Ceiling", href: "/pop-false-ceiling-vadodara" },
  { name: "Gypsum Ceiling", href: "/gypsum-false-ceiling-vadodara" },
  { name: "PVC Ceiling Panels", href: "/pvc-ceiling-panels-vadodara" },
  { name: "Texture Painting", href: "/texture-wall-painting-vadodara" },
  { name: "Interior Painting", href: "/interior-painting-vadodara" },
  { name: "Exterior Painting", href: "/exterior-painting-vadodara" },
  { name: "Waterproofing", href: "/waterproofing-vadodara" },
  { name: "Wall Painting", href: "/wall-painting-vadodara" },
];

const civilServices = [
  { name: "Civil Contractors", href: "/civil-contractors-vadodara" },
  { name: "Home Renovation", href: "/home-renovation-vadodara" },
  { name: "Kitchen Renovation", href: "/kitchen-renovation-vadodara" },
  { name: "Bathroom Renovation", href: "/bathroom-renovation-vadodara" },
  { name: "Masonry Work", href: "/masonry-contractors-vadodara" },
  { name: "Tiles Fitting", href: "/tiles-fitting-vadodara" },
  { name: "Plastering Work", href: "/plastering-work-vadodara" },
  { name: "Kadiya Kam", href: "/kadiya-kam-vadodara" },
];

const plumbingServices = [
  { name: "Plumbers", href: "/plumbers-vadodara" },
  { name: "Emergency Plumber", href: "/emergency-plumber-vadodara" },
  { name: "Water Leakage Repair", href: "/water-leakage-repair-vadodara" },
  { name: "Bathroom Fitting", href: "/bathroom-fitting-vadodara" },
  { name: "Water Tank Cleaning", href: "/water-tank-cleaning-vadodara" },
  { name: "Geyser Installation", href: "/geyser-installation-vadodara" },
  { name: "RO Service", href: "/ro-service-vadodara" },
  { name: "Drainage Cleaning", href: "/drainage-cleaning-vadodara" },
];

const carpenterServices = [
  { name: "Carpenters", href: "/carpenter-vadodara" },
  { name: "Modular Kitchen", href: "/modular-kitchen-vadodara" },
  { name: "Wardrobe Design", href: "/wardrobe-design-vadodara" },
  { name: "Sofa Manufacturers", href: "/sofa-manufacturers-vadodara" },
  { name: "Furniture Repair", href: "/furniture-repair-vadodara" },
  { name: "Office Furniture", href: "/office-furniture-vadodara" },
  { name: "Teak Wood Furniture", href: "/teak-wood-furniture-vadodara" },
  { name: "Suthar Kam", href: "/suthar-kam-vadodara" },
];

const fabricationServices = [
  { name: "Fabrication Work", href: "/fabrication-vadodara" },
  { name: "SS Railing", href: "/ss-railing-vadodara" },
  { name: "Main Gate", href: "/main-gate-vadodara" },
  { name: "Window Grill", href: "/window-grill-vadodara" },
  { name: "Safety Door Grill", href: "/safety-door-grill-vadodara" },
  { name: "Industrial Shed", href: "/industrial-shed-vadodara" },
  { name: "Welding Services", href: "/welding-services-vadodara" },
  { name: "Rolling Shutter", href: "/rolling-shutter-vadodara" },
];

const solarServices = [
  { name: "Solar Maintenance", href: "/solar-maintenance-vadodara" },
  { name: "Solar Panel Cleaning", href: "/solar-panel-cleaning-vadodara" },
  { name: "Solar Inverter Repair", href: "/solar-inverter-repair-vadodara" },
  { name: "Solar AMC", href: "/solar-amc-vadodara" },
  { name: "Industrial Solar", href: "/industrial-solar-vadodara" },
  { name: "Rooftop Solar", href: "/rooftop-solar-vadodara" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <span>📍 Vadodara, Gujarat</span>
            <span className="hidden md:inline">✉️ info@vadodaramistry.com</span>
          </div>
          <a
            href="tel:+917600337866"
            className="flex items-center gap-2 font-semibold hover:text-orange-200 transition"
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
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 relative">
              <svg viewBox="0 0 32 32" className="w-full h-full">
                <defs>
                  <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: "#f97316"}} />
                    <stop offset="100%" style={{stopColor: "#ea580c"}} />
                  </linearGradient>
                </defs>
                <circle cx="16" cy="16" r="15" fill="url(#logoGrad)" />
                <path d="M16 6 L6 14 L8 14 L8 24 L24 24 L24 14 L26 14 Z" fill="#ffffff" />
                <rect x="14" y="17" width="4" height="7" fill="url(#logoGrad)" rx="0.5" />
                <rect x="9" y="15" width="3" height="3" fill="url(#logoGrad)" rx="0.5" />
                <rect x="20" y="15" width="3" height="3" fill="url(#logoGrad)" rx="0.5" />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Vadodara <span className="text-orange-600">Mistry</span></h1>
              <p className="text-xs text-gray-500">Home Services You Can Trust</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center gap-5">
            <Link href="/" className="text-gray-700 hover:text-orange-600 font-medium">
              Home
            </Link>

            {/* Painting & POP Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("painting")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-gray-700 hover:text-orange-600 font-medium">
                <Paintbrush size={16} />
                Painting & POP <ChevronDown size={14} />
              </button>
              {activeDropdown === "painting" && (
                <div className="absolute top-full left-0 bg-white shadow-xl rounded-lg py-2 min-w-[220px] border">
                  {paintingServices.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Civil Work Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("civil")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-gray-700 hover:text-orange-600 font-medium">
                <Hammer size={16} />
                Civil Work <ChevronDown size={14} />
              </button>
              {activeDropdown === "civil" && (
                <div className="absolute top-full left-0 bg-white shadow-xl rounded-lg py-2 min-w-[220px] border">
                  {civilServices.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Plumbing Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("plumbing")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-gray-700 hover:text-orange-600 font-medium">
                <Wrench size={16} />
                Plumbing <ChevronDown size={14} />
              </button>
              {activeDropdown === "plumbing" && (
                <div className="absolute top-full left-0 bg-white shadow-xl rounded-lg py-2 min-w-[220px] border">
                  {plumbingServices.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Carpenter Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("carpenter")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-gray-700 hover:text-orange-600 font-medium">
                <Sofa size={16} />
                Carpenter <ChevronDown size={14} />
              </button>
              {activeDropdown === "carpenter" && (
                <div className="absolute top-full left-0 bg-white shadow-xl rounded-lg py-2 min-w-[220px] border">
                  {carpenterServices.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Fabrication Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("fabrication")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-gray-700 hover:text-orange-600 font-medium">
                <Settings size={16} />
                Fabrication <ChevronDown size={14} />
              </button>
              {activeDropdown === "fabrication" && (
                <div className="absolute top-full left-0 bg-white shadow-xl rounded-lg py-2 min-w-[220px] border">
                  {fabricationServices.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Solar Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("solar")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-gray-700 hover:text-orange-600 font-medium">
                <Sun size={16} />
                Solar <ChevronDown size={14} />
              </button>
              {activeDropdown === "solar" && (
                <div className="absolute top-full left-0 bg-white shadow-xl rounded-lg py-2 min-w-[220px] border">
                  {solarServices.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/about" className="text-gray-700 hover:text-orange-600 font-medium">
              About
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden xl:block">
            <a
              href="tel:+917600337866"
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg flex items-center gap-2"
            >
              <Phone size={18} />
              Get Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="xl:hidden py-4 border-t max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col gap-4">
              <Link href="/" className="text-gray-700 font-medium" onClick={() => setIsOpen(false)}>
                Home
              </Link>
              
              {/* Painting & POP */}
              <div>
                <p className="text-orange-600 font-semibold mb-2 flex items-center gap-2">
                  <Paintbrush size={16} /> Painting & POP
                </p>
                <div className="pl-4 flex flex-col gap-2">
                  {paintingServices.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="text-gray-600 hover:text-orange-600"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Civil Work */}
              <div>
                <p className="text-orange-600 font-semibold mb-2 flex items-center gap-2">
                  <Hammer size={16} /> Civil Work
                </p>
                <div className="pl-4 flex flex-col gap-2">
                  {civilServices.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="text-gray-600 hover:text-orange-600"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Plumbing */}
              <div>
                <p className="text-orange-600 font-semibold mb-2 flex items-center gap-2">
                  <Wrench size={16} /> Plumbing
                </p>
                <div className="pl-4 flex flex-col gap-2">
                  {plumbingServices.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="text-gray-600 hover:text-orange-600"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Carpenter */}
              <div>
                <p className="text-orange-600 font-semibold mb-2 flex items-center gap-2">
                  <Sofa size={16} /> Carpenter & Furniture
                </p>
                <div className="pl-4 flex flex-col gap-2">
                  {carpenterServices.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="text-gray-600 hover:text-orange-600"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Fabrication */}
              <div>
                <p className="text-orange-600 font-semibold mb-2 flex items-center gap-2">
                  <Settings size={16} /> Fabrication & Welding
                </p>
                <div className="pl-4 flex flex-col gap-2">
                  {fabricationServices.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="text-gray-600 hover:text-orange-600"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Solar */}
              <div>
                <p className="text-orange-600 font-semibold mb-2 flex items-center gap-2">
                  <Sun size={16} /> Solar Services
                </p>
                <div className="pl-4 flex flex-col gap-2">
                  {solarServices.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="text-gray-600 hover:text-orange-600"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link href="/about" className="text-gray-700 font-medium" onClick={() => setIsOpen(false)}>
                About Us
              </Link>
              
              <a
                href="tel:+917600337866"
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-full font-semibold text-center"
              >
                📞 Call Now: +91 97272 57141
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
