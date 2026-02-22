import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Phone, CheckCircle, Star, Clock, Shield, Award, MapPin, ArrowRight, Wrench, AlertTriangle, Zap, ThermometerSnowflake } from "lucide-react";

// 100 High-Value SEO Keywords
export const seoKeywords = [
  // AC Problems & Solutions (20)
  { slug: "ac-not-cooling", title: "AC Not Cooling", description: "AC not cooling properly? Expert diagnosis and repair", category: "Problems" },
  { slug: "ac-water-leaking", title: "AC Water Leaking", description: "Fix AC water leakage issues", category: "Problems" },
  { slug: "ac-gas-leak-repair", title: "AC Gas Leak Repair", description: "Professional AC gas leak detection and repair", category: "Problems" },
  { slug: "ac-compressor-not-working", title: "AC Compressor Not Working", description: "AC compressor repair and replacement", category: "Problems" },
  { slug: "ac-making-noise", title: "AC Making Noise", description: "Fix noisy AC problems", category: "Problems" },
  { slug: "ac-bad-smell", title: "AC Bad Smell", description: "Remove bad odor from AC", category: "Problems" },
  { slug: "ac-remote-not-working", title: "AC Remote Not Working", description: "AC remote repair and replacement", category: "Problems" },
  { slug: "ac-not-turning-on", title: "AC Not Turning On", description: "AC won't start? Expert troubleshooting", category: "Problems" },
  { slug: "ac-ice-formation", title: "AC Ice Formation", description: "Fix AC freezing and ice buildup", category: "Problems" },
  { slug: "ac-tripping-mcb", title: "AC Tripping MCB", description: "AC causing electrical trips? Expert repair", category: "Problems" },
  { slug: "ac-outdoor-unit-not-working", title: "AC Outdoor Unit Not Working", description: "Outdoor unit repair service", category: "Problems" },
  { slug: "ac-fan-not-working", title: "AC Fan Not Working", description: "AC fan motor repair and replacement", category: "Problems" },
  { slug: "ac-pcb-repair", title: "AC PCB Repair", description: "AC circuit board repair service", category: "Problems" },
  { slug: "ac-capacitor-replacement", title: "AC Capacitor Replacement", description: "AC capacitor repair and replacement", category: "Problems" },
  { slug: "ac-thermostat-not-working", title: "AC Thermostat Not Working", description: "AC thermostat repair service", category: "Problems" },
  { slug: "ac-swing-not-working", title: "AC Swing Not Working", description: "Fix AC louver and swing issues", category: "Problems" },
  { slug: "ac-sensor-problem", title: "AC Sensor Problem", description: "AC sensor repair and calibration", category: "Problems" },
  { slug: "ac-drain-pipe-blockage", title: "AC Drain Pipe Blockage", description: "Clear AC drain pipe blockage", category: "Problems" },
  { slug: "ac-coil-cleaning", title: "AC Coil Cleaning", description: "Professional AC coil cleaning service", category: "Problems" },
  { slug: "ac-filter-cleaning", title: "AC Filter Cleaning", description: "AC filter cleaning and replacement", category: "Problems" },
  
  // Commercial & Industrial (20)
  { slug: "commercial-ac-repair", title: "Commercial AC Repair", description: "AC repair for offices, shops, and businesses", category: "Commercial" },
  { slug: "industrial-ac-repair", title: "Industrial AC Repair", description: "AC repair for factories and industries", category: "Commercial" },
  { slug: "office-ac-service", title: "Office AC Service", description: "AC service for offices and corporate buildings", category: "Commercial" },
  { slug: "shop-ac-repair", title: "Shop AC Repair", description: "AC repair for retail shops and showrooms", category: "Commercial" },
  { slug: "restaurant-ac-service", title: "Restaurant AC Service", description: "AC service for restaurants and cafes", category: "Commercial" },
  { slug: "hotel-ac-service", title: "Hotel AC Service", description: "AC service for hotels and resorts", category: "Commercial" },
  { slug: "hospital-ac-service", title: "Hospital AC Service", description: "AC service for hospitals and clinics", category: "Commercial" },
  { slug: "school-ac-service", title: "School AC Service", description: "AC service for schools and colleges", category: "Commercial" },
  { slug: "mall-ac-service", title: "Mall AC Service", description: "AC service for shopping malls", category: "Commercial" },
  { slug: "warehouse-cooling", title: "Warehouse Cooling", description: "Cooling solutions for warehouses", category: "Commercial" },
  { slug: "server-room-ac", title: "Server Room AC", description: "Precision AC for server rooms", category: "Commercial" },
  { slug: "data-center-cooling", title: "Data Center Cooling", description: "Cooling solutions for data centers", category: "Commercial" },
  { slug: "cold-storage-repair", title: "Cold Storage Repair", description: "Cold storage AC repair service", category: "Commercial" },
  { slug: "factory-ac-service", title: "Factory AC Service", description: "AC service for manufacturing units", category: "Commercial" },
  { slug: "gidc-ac-service", title: "GIDC AC Service", description: "AC service for GIDC industrial areas", category: "Commercial" },
  { slug: "ahu-repair", title: "AHU Repair", description: "Air Handling Unit repair service", category: "Commercial" },
  { slug: "cooling-tower-service", title: "Cooling Tower Service", description: "Cooling tower maintenance and repair", category: "Commercial" },
  { slug: "ducting-service", title: "Ducting Service", description: "AC duct cleaning and repair", category: "Commercial" },
  { slug: "packaged-ac-service", title: "Packaged AC Service", description: "Packaged AC unit service", category: "Commercial" },
  { slug: "precision-ac-service", title: "Precision AC Service", description: "Precision AC for critical applications", category: "Commercial" },
  
  // Emergency & 24x7 (10)
  { slug: "emergency-ac-repair", title: "Emergency AC Repair", description: "24x7 emergency AC repair service", category: "Emergency" },
  { slug: "24-hour-ac-service", title: "24 Hour AC Service", description: "Round the clock AC service", category: "Emergency" },
  { slug: "same-day-ac-repair", title: "Same Day AC Repair", description: "Same day AC repair service", category: "Emergency" },
  { slug: "urgent-ac-repair", title: "Urgent AC Repair", description: "Urgent AC repair for immediate needs", category: "Emergency" },
  { slug: "weekend-ac-service", title: "Weekend AC Service", description: "AC service on weekends", category: "Emergency" },
  { slug: "night-ac-repair", title: "Night AC Repair", description: "Late night AC repair service", category: "Emergency" },
  { slug: "holiday-ac-service", title: "Holiday AC Service", description: "AC service on holidays", category: "Emergency" },
  { slug: "express-ac-service", title: "Express AC Service", description: "Express priority AC service", category: "Emergency" },
  { slug: "ac-repair-near-me", title: "AC Repair Near Me", description: "Find AC repair service near you", category: "Emergency" },
  { slug: "ac-technician-near-me", title: "AC Technician Near Me", description: "Find AC technician near you", category: "Emergency" },
  
  // Seasonal & Specific (15)
  { slug: "summer-ac-service", title: "Summer AC Service", description: "Pre-summer AC checkup and service", category: "Seasonal" },
  { slug: "monsoon-ac-care", title: "Monsoon AC Care", description: "AC maintenance during monsoon", category: "Seasonal" },
  { slug: "winter-ac-storage", title: "Winter AC Storage", description: "AC winterization and storage tips", category: "Seasonal" },
  { slug: "pre-summer-ac-checkup", title: "Pre-Summer AC Checkup", description: "Get AC ready for summer", category: "Seasonal" },
  { slug: "inverter-ac-repair", title: "Inverter AC Repair", description: "Inverter AC repair specialist", category: "Seasonal" },
  { slug: "non-inverter-ac-repair", title: "Non-Inverter AC Repair", description: "Non-inverter AC repair service", category: "Seasonal" },
  { slug: "1-ton-ac-repair", title: "1 Ton AC Repair", description: "1 Ton AC repair service", category: "Seasonal" },
  { slug: "1-5-ton-ac-repair", title: "1.5 Ton AC Repair", description: "1.5 Ton AC repair service", category: "Seasonal" },
  { slug: "2-ton-ac-repair", title: "2 Ton AC Repair", description: "2 Ton AC repair service", category: "Seasonal" },
  { slug: "old-ac-repair", title: "Old AC Repair", description: "Repair for old AC models", category: "Seasonal" },
  { slug: "new-ac-installation", title: "New AC Installation", description: "New AC installation service", category: "Seasonal" },
  { slug: "ac-relocation", title: "AC Relocation", description: "AC shifting and relocation service", category: "Seasonal" },
  { slug: "ac-uninstallation", title: "AC Uninstallation", description: "AC removal and uninstallation", category: "Seasonal" },
  { slug: "ac-demo-installation", title: "AC Demo Installation", description: "Demo AC installation for showrooms", category: "Seasonal" },
  { slug: "ac-rental-service", title: "AC Rental Service", description: "AC on rent in Vadodara", category: "Seasonal" },
  
  // Parts & Accessories (15)
  { slug: "ac-spare-parts", title: "AC Spare Parts", description: "Genuine AC spare parts available", category: "Parts" },
  { slug: "ac-compressor-price", title: "AC Compressor Price", description: "AC compressor replacement cost", category: "Parts" },
  { slug: "ac-pcb-price", title: "AC PCB Price", description: "AC PCB replacement cost", category: "Parts" },
  { slug: "ac-gas-price", title: "AC Gas Price", description: "AC gas refilling cost", category: "Parts" },
  { slug: "ac-capacitor-price", title: "AC Capacitor Price", description: "AC capacitor replacement cost", category: "Parts" },
  { slug: "ac-fan-motor-price", title: "AC Fan Motor Price", description: "AC fan motor replacement cost", category: "Parts" },
  { slug: "ac-remote-price", title: "AC Remote Price", description: "AC remote cost and options", category: "Parts" },
  { slug: "ac-copper-pipe-price", title: "AC Copper Pipe Price", description: "AC copper pipe cost", category: "Parts" },
  { slug: "ac-stabilizer-installation", title: "AC Stabilizer Installation", description: "AC stabilizer fitting service", category: "Parts" },
  { slug: "ac-stand-installation", title: "AC Stand Installation", description: "AC stand fitting service", category: "Parts" },
  { slug: "ac-drain-tray", title: "AC Drain Tray", description: "AC drain tray installation", category: "Parts" },
  { slug: "ac-insulation", title: "AC Insulation", description: "AC pipe insulation service", category: "Parts" },
  { slug: "ac-mounting-bracket", title: "AC Mounting Bracket", description: "AC bracket installation", category: "Parts" },
  { slug: "ac-wiring-service", title: "AC Wiring Service", description: "AC electrical wiring service", category: "Parts" },
  { slug: "ac-mcb-installation", title: "AC MCB Installation", description: "AC MCB fitting service", category: "Parts" },
  
  // Comparison & Buying (10)
  { slug: "best-ac-brands", title: "Best AC Brands", description: "Guide to best AC brands in India", category: "Guide" },
  { slug: "ac-buying-guide", title: "AC Buying Guide", description: "Complete guide to buy AC", category: "Guide" },
  { slug: "inverter-vs-non-inverter-ac", title: "Inverter vs Non-Inverter AC", description: "Compare inverter and non-inverter AC", category: "Guide" },
  { slug: "split-vs-window-ac", title: "Split vs Window AC", description: "Compare split and window AC", category: "Guide" },
  { slug: "ac-star-rating-guide", title: "AC Star Rating Guide", description: "Understanding AC star ratings", category: "Guide" },
  { slug: "ac-tonnage-calculator", title: "AC Tonnage Calculator", description: "Calculate right AC tonnage for your room", category: "Guide" },
  { slug: "ac-power-consumption", title: "AC Power Consumption", description: "AC electricity consumption guide", category: "Guide" },
  { slug: "ac-maintenance-tips", title: "AC Maintenance Tips", description: "DIY AC maintenance tips", category: "Guide" },
  { slug: "ac-warranty-service", title: "AC Warranty Service", description: "AC warranty claim assistance", category: "Guide" },
  { slug: "second-hand-ac-service", title: "Second Hand AC Service", description: "Used AC repair and service", category: "Guide" },
  
  // Appliance Related (10)
  { slug: "refrigerator-repair", title: "Refrigerator Repair", description: "Refrigerator repair service", category: "Appliance" },
  { slug: "washing-machine-repair", title: "Washing Machine Repair", description: "Washing machine repair service", category: "Appliance" },
  { slug: "microwave-repair", title: "Microwave Repair", description: "Microwave oven repair service", category: "Appliance" },
  { slug: "water-cooler-repair", title: "Water Cooler Repair", description: "Water cooler repair service", category: "Appliance" },
  { slug: "deep-freezer-repair", title: "Deep Freezer Repair", description: "Deep freezer repair service", category: "Appliance" },
  { slug: "air-cooler-repair", title: "Air Cooler Repair", description: "Air cooler repair service", category: "Appliance" },
  { slug: "water-heater-repair", title: "Water Heater Repair", description: "Geyser repair service", category: "Appliance" },
  { slug: "ro-repair-service", title: "RO Repair Service", description: "Water purifier repair service", category: "Appliance" },
  { slug: "chimney-repair", title: "Chimney Repair", description: "Kitchen chimney repair service", category: "Appliance" },
  { slug: "dishwasher-repair", title: "Dishwasher Repair", description: "Dishwasher repair service", category: "Appliance" },
];

export async function generateStaticParams() {
  return seoKeywords.map((keyword) => ({
    keyword: keyword.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ keyword: string }> }): Promise<Metadata> {
  const { keyword } = await params;
  const keywordData = seoKeywords.find((k) => k.slug === keyword);
  
  if (!keywordData) {
    return { title: "Page Not Found" };
  }

  return {
    title: `${keywordData.title} in Vadodara | Expert Service | Atlas Aircon`,
    description: `${keywordData.description} in Vadodara. Professional service by Atlas Aircon. 20+ years experience, 90-day warranty. Call +91 97272 57141`,
    keywords: [
      `${keywordData.title} Vadodara`,
      `${keywordData.slug.replace(/-/g, ' ')}`,
      `${keywordData.title} near me`,
      `best ${keywordData.title} service`,
    ],
    alternates: {
      canonical: `https://atlasaircons.com/${keyword}-vadodara`,
    },
  };
}

export default async function KeywordPage({ params }: { params: Promise<{ keyword: string }> }) {
  const { keyword } = await params;
  const keywordData = seoKeywords.find((k) => k.slug === keyword);

  if (!keywordData) {
    notFound();
  }

  const relatedKeywords = seoKeywords
    .filter((k) => k.category === keywordData.category && k.slug !== keyword)
    .slice(0, 8);

  const getCategoryIcon = () => {
    switch (keywordData.category) {
      case "Problems": return AlertTriangle;
      case "Commercial": return Wrench;
      case "Emergency": return Zap;
      default: return ThermometerSnowflake;
    }
  };

  const CategoryIcon = getCategoryIcon();

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm mb-6">
              <CategoryIcon className="w-4 h-4" />
              <span>{keywordData.category}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="text-yellow-400">{keywordData.title}</span> in Vadodara
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              {keywordData.description} in Vadodara. Professional service by certified technicians. 
              Same-day service, genuine parts, 90-day warranty.
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
            <div className="flex flex-wrap gap-4 text-sm">
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
                <span>Expert Technicians</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2>Professional {keywordData.title} Service in Vadodara</h2>
            <p>
              Are you facing {keywordData.title.toLowerCase()} issues? Atlas Aircon provides expert 
              {keywordData.title.toLowerCase()} service in Vadodara with 20+ years of experience. 
              Our certified technicians can diagnose and fix your problem quickly and efficiently.
            </p>
            
            <h3>Why Choose Atlas Aircon for {keywordData.title}?</h3>
            <ul>
              <li><strong>Expert Technicians:</strong> Our team is trained and certified for all AC issues</li>
              <li><strong>Same Day Service:</strong> Quick response within 2-4 hours in Vadodara</li>
              <li><strong>Genuine Parts:</strong> We use only original spare parts</li>
              <li><strong>90-Day Warranty:</strong> All our services come with warranty</li>
              <li><strong>Transparent Pricing:</strong> No hidden charges, upfront quotes</li>
              <li><strong>All Brands Covered:</strong> Service for Daikin, Voltas, LG, Samsung, and more</li>
            </ul>

            <h3>Our {keywordData.title} Process</h3>
            <ol>
              <li><strong>Book Service:</strong> Call us or fill the online form</li>
              <li><strong>Technician Visit:</strong> Our expert visits your location</li>
              <li><strong>Diagnosis:</strong> Complete inspection and problem identification</li>
              <li><strong>Quote:</strong> Transparent pricing before starting work</li>
              <li><strong>Service:</strong> Professional repair with warranty</li>
            </ol>

            <h3>Service Areas in Vadodara</h3>
            <p>
              We provide {keywordData.title.toLowerCase()} service across Vadodara including 
              Alkapuri, Gotri, Manjalpur, Akota, Fatehgunj, Karelibaug, Sayajigunj, and all major areas.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Atlas Aircon?
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Same Day Service</h3>
              <p className="text-blue-100">Quick response in Vadodara</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">20+ Years</h3>
              <p className="text-blue-100">Trusted experience</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">4.9 Rating</h3>
              <p className="text-blue-100">500+ happy customers</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">90-Day Warranty</h3>
              <p className="text-blue-100">On all services</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedKeywords.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Related Services
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {relatedKeywords.map((k) => (
                <Link
                  key={k.slug}
                  href={`/${k.slug}-vadodara`}
                  className="bg-white hover:bg-blue-50 p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition text-center"
                >
                  <span className="text-gray-800 font-medium text-sm">{k.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need {keywordData.title} Service?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Call now for professional service in Vadodara
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
