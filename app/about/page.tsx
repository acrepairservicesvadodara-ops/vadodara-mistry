import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, CheckCircle, Award, Users, Star, Shield, Paintbrush, Hammer, Wrench, Sofa, Settings, Sun } from "lucide-react";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "About Vadodara Mistry | Best Home Services Company in Vadodara",
  description: "Vadodara Mistry - Your trusted home services partner in Vadodara. 10+ years experience, 5000+ happy customers. Expert painters, carpenters, plumbers & more.",
  alternates: {
    canonical: "https://vadodaramistry.com/about",
  },
};

export default function AboutPage() {
  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "5000+", label: "Happy Customers" },
    { number: "100+", label: "Expert Mistries" },
    { number: "4.8", label: "Google Rating" },
  ];

  const values = [
    { title: "Quality Work", description: "We never compromise on quality. Every job is completed to the highest standards.", icon: Award },
    { title: "Customer First", description: "Your satisfaction is our priority. We listen, understand, and deliver.", icon: Users },
    { title: "Transparency", description: "No hidden charges. Clear communication and upfront pricing.", icon: CheckCircle },
    { title: "Reliability", description: "We show up on time, every time. Dependable service you can count on.", icon: Shield },
  ];

  const services = [
    { title: "POP & Painting", description: "False ceiling, wall painting, texture work", icon: Paintbrush },
    { title: "Civil Work", description: "Tile fitting, waterproofing, construction", icon: Hammer },
    { title: "Plumbing", description: "Pipe fitting, leak repair, bathroom work", icon: Wrench },
    { title: "Carpentry", description: "Modular kitchen, wardrobes, furniture", icon: Sofa },
    { title: "Fabrication", description: "Gates, grills, railings, welding", icon: Settings },
    { title: "Solar Services", description: "Panel maintenance, cleaning, repair", icon: Sun },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=80"
            alt="About Vadodara Mistry - Professional home services team"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/95 via-orange-600/90 to-orange-500/80" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="text-yellow-300">Vadodara Mistry</span>
              </h1>
              <p className="text-xl text-orange-100 mb-8 leading-relaxed">
                Your trusted home services partner in Vadodara. From painting to plumbing, 
                carpentry to civil work - we bring skilled mistries to your doorstep.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl font-bold">VM</span>
                </div>
                <div>
                  <h2 className="text-xl font-semibold">Vadodara Mistry Team</h2>
                  <p className="text-orange-200">Trusted Since 2014</p>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <BookingForm title="Book Service Now" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-orange-600">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
            <div className="prose prose-lg mx-auto text-gray-700">
              <p>
                <strong>Vadodara Mistry</strong> was founded with a simple mission: to connect homeowners
                with skilled, trusted craftsmen for all their home improvement needs.
              </p>
              <p>
                We noticed a gap in the market - finding reliable painters, plumbers, carpenters, and 
                other skilled workers was difficult and often resulted in poor quality work or inflated prices. 
                We set out to change that.
              </p>
              <p>
                Today, Vadodara Mistry has become the go-to platform for home services in Vadodara. 
                Our network includes 100+ verified mistries across six major categories - POP & Painting, 
                Civil Work, Plumbing, Carpentry, Fabrication, and Solar Services.
              </p>
              <p>
                Every mistry in our network is background-verified, skilled, and committed to quality. 
                We stand behind every job with our satisfaction guarantee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {services.map((service) => (
              <div key={service.title} className="bg-gray-50 p-6 rounded-xl">
                <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Vadodara Mistry?</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Verified & skilled mistries",
              "Transparent pricing - no hidden charges",
              "Quality materials used",
              "On-time project completion",
              "Warranty on workmanship",
              "All Vadodara areas covered",
              "Residential & commercial services",
              "Industrial project capability",
            ].map((point, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Service Areas</h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            We serve all areas of Vadodara including residential and industrial zones
          </p>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              "Alkapuri", "Gotri", "Manjalpur", "Akota", "Bhayli", "Karelibaug", 
              "Waghodia Road", "Makarpura", "Chhani", "Harni", "Fatehgunj", "Gorwa",
              "Sayajigunj", "Tarsali", "Ajwa Road", "Makarpura GIDC", "Nandesari GIDC"
            ].map((area) => (
              <span key={area} className="bg-white border border-gray-200 px-4 py-2 rounded-full text-gray-700">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <Phone className="w-10 h-10 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Call Us</h3>
              <a href="tel:+917600337866" className="text-orange-100 hover:text-white">
                +91 97272 57141
              </a>
            </div>
            <div className="text-center">
              <Mail className="w-10 h-10 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Email Us</h3>
              <a href="mailto:info@vadodaramistry.com" className="text-orange-100 hover:text-white">
                info@vadodaramistry.com
              </a>
            </div>
            <div className="text-center">
              <MapPin className="w-10 h-10 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-orange-100">Vadodara, Gujarat</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-8">
            Book your home service today and experience the Vadodara Mistry difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+917600337866"
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition"
            >
              <Phone size={22} />
              Call Now
            </a>
            <a
              href="https://wa.me/917600337866"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
