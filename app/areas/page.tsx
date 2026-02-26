import { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, ArrowRight } from "lucide-react";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "AC Repair Service Areas in Vadodara | All Localities Covered",
  description: "Atlas Aircon serves all areas of Vadodara for AC repair & service. Alkapuri, Gotri, Manjalpur, Akota, Fatehgunj, Karelibaug, and 40+ more areas. Same-day service available.",
  alternates: {
    canonical: "https://atlasaircons.com/areas",
  },
};

const vadodaraAreas = [
  { name: "Alkapuri", slug: "alkapuri", popular: true },
  { name: "Gotri", slug: "gotri", popular: true },
  { name: "Manjalpur", slug: "manjalpur", popular: true },
  { name: "Akota", slug: "akota", popular: true },
  { name: "Fatehgunj", slug: "fatehgunj", popular: true },
  { name: "Karelibaug", slug: "karelibaug", popular: true },
  { name: "Sayajigunj", slug: "sayajigunj", popular: true },
  { name: "Waghodia", slug: "waghodia", popular: true },
  { name: "Harni", slug: "harni" },
  { name: "Vasna", slug: "vasna" },
  { name: "Sama", slug: "sama" },
  { name: "Tandalja", slug: "tandalja" },
  { name: "Subhanpura", slug: "subhanpura" },
  { name: "Gorwa", slug: "gorwa" },
  { name: "Nizampura", slug: "nizampura" },
  { name: "Atladara", slug: "atladara" },
  { name: "Chhani", slug: "chhani" },
  { name: "Tarsali", slug: "tarsali" },
  { name: "Makarpura", slug: "makarpura" },
  { name: "Ajwa Road", slug: "ajwa-road" },
  { name: "Vadsar", slug: "vadsar" },
  { name: "Sevasi", slug: "sevasi" },
  { name: "Sama Savli Road", slug: "sama-savli-road" },
  { name: "New VIP Road", slug: "new-vip-road" },
  { name: "Old Padra Road", slug: "old-padra-road" },
  { name: "New Sama Road", slug: "new-sama-road" },
  { name: "TP Road", slug: "tp-road" },
  { name: "Race Course", slug: "race-course" },
  { name: "Ellora Park", slug: "ellora-park" },
  { name: "Pratap Nagar", slug: "pratap-nagar" },
  { name: "Vasundhara", slug: "vasundhara" },
  { name: "GIDC Makarpura", slug: "gidc-makarpura" },
  { name: "Nandesari", slug: "nandesari" },
  { name: "Savli", slug: "savli" },
  { name: "Halol Road", slug: "halol-road" },
  { name: "Dabhoi Road", slug: "dabhoi-road" },
  { name: "Karjan", slug: "karjan" },
  { name: "Padra", slug: "padra" },
  { name: "Shinor", slug: "shinor" },
  { name: "Panchmahal Road", slug: "panchmahal-road" },
];

const nearbyCities = [
  { name: "Ahmedabad", slug: "ahmedabad", distance: "110 km" },
  { name: "Surat", slug: "surat", distance: "160 km" },
  { name: "Bharuch", slug: "bharuch", distance: "72 km" },
  { name: "Anand", slug: "anand", distance: "40 km" },
  { name: "Gandhinagar", slug: "gandhinagar", distance: "130 km" },
  { name: "Godhra", slug: "godhra", distance: "60 km" },
  { name: "Halol", slug: "halol", distance: "40 km" },
  { name: "Ankleshwar", slug: "ankleshwar", distance: "90 km" },
  { name: "Nadiad", slug: "nadiad", distance: "55 km" },
  { name: "Dahod", slug: "dahod", distance: "110 km" },
  { name: "Rajkot", slug: "rajkot", distance: "220 km" },
  { name: "Dahej", slug: "dahej", distance: "95 km" },
];

export default function AreasPage() {
  const popularAreas = vadodaraAreas.filter((a) => a.popular);
  const otherAreas = vadodaraAreas.filter((a) => !a.popular);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                AC Service Areas in <span className="text-yellow-400">Vadodara</span>
              </h1>
              <p className="text-xl text-blue-100">
                We provide AC repair & service across all areas of Vadodara and nearby cities. 
                Same-day service available in most locations.
              </p>
            </div>
            <div className="hidden md:block">
              <BookingForm title="Book AC Service Now" />
            </div>
          </div>
        </div>
      </section>

      {/* Popular Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Popular Service Areas</h2>
          <p className="text-gray-600 text-center mb-12">Most requested locations in Vadodara</p>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {popularAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/ac-repair-${area.slug}-vadodara`}
                className="bg-blue-50 hover:bg-blue-100 p-6 rounded-xl border-2 border-blue-200 hover:border-blue-400 transition group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">
                    {area.name}
                  </h3>
                </div>
                <p className="text-sm text-gray-600">AC Repair & Service</p>
                <div className="mt-3 text-blue-600 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                  View Details <ArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">All Vadodara Areas</h2>
          <p className="text-gray-600 text-center mb-12">Complete coverage across Vadodara</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 max-w-5xl mx-auto">
            {vadodaraAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/ac-repair-${area.slug}-vadodara`}
                className="flex items-center gap-2 bg-white hover:bg-blue-50 border border-gray-200 hover:border-blue-300 p-3 rounded-lg transition"
              >
                <MapPin size={14} className="text-blue-600 flex-shrink-0" />
                <span className="text-sm font-medium text-gray-800">{area.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Cities We Serve */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Cities We Serve</h2>
          <p className="text-gray-600 text-center mb-12">
            AC service available in major Gujarat cities
          </p>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {nearbyCities.map((city) => (
              <Link
                key={city.slug}
                href={`/ac-repair-${city.slug}`}
                className="bg-gray-50 hover:bg-blue-50 p-6 rounded-xl border border-gray-200 hover:border-blue-300 transition group"
              >
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 mb-1">
                  {city.name}
                </h3>
                <p className="text-sm text-gray-500">{city.distance} from Vadodara</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industrial Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Industrial Areas</h2>
          <p className="text-gray-600 text-center mb-12">
            Commercial & Industrial AC service for GIDC and factory hubs
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">GIDC Makarpura</h3>
              <p className="text-gray-600 text-sm">Industrial chiller, HVAC, panel AC service</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">Nandesari GIDC</h3>
              <p className="text-gray-600 text-sm">Factory AC, chiller repair, maintenance</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">Savli Industrial</h3>
              <p className="text-gray-600 text-sm">VRF, central AC, industrial cooling</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">Halol Industrial</h3>
              <p className="text-gray-600 text-sm">Commercial AC, chiller service</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">Dahej SEZ</h3>
              <p className="text-gray-600 text-sm">Industrial HVAC, precision AC</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">Ankleshwar GIDC</h3>
              <p className="text-gray-600 text-sm">Chemical plant cooling, chillers</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Can't Find Your Area?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            We serve all areas in and around Vadodara. Call us to check service availability 
            in your location. Same-day service in most areas.
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
