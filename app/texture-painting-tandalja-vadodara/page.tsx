import { Metadata } from "next";
import Link from "next/link";
import BookingForm from "@/components/BookingForm";
import CallButton from "@/components/CallButton";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Testimonials from "@/components/Testimonials";
import BusinessInfo from "@/components/BusinessInfo";
import { businessConfig, generateFAQSchema, generateLocalBusinessSchema, generateServiceSchema, generateBreadcrumbSchema } from "@/lib/business-config";
import { Phone, MapPin, Clock, CheckCircle, Star, ArrowRight, Shield, Award, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Texture Painting in Tandalja | Best Texture Painting Services - Vadodara Mistry",
  description: "Expert Texture Painting in Tandalja, Vadodara. Professional services, premium materials, 10+ years experience. Free quote: +91 93139 82980. Trusted by 5000+ customers.",
  keywords: "texture paint, designer painting, wall texture, 3D painting, metallic paint, Tandalja, Vadodara",
  alternates: {
    canonical: "https://vadodaramistry.com/texture-painting-tandalja-vadodara",
  },
  openGraph: {
    title: "Texture Painting in Tandalja | Best Texture Painting Services - Vadodara Mistry",
    description: "Expert Texture Painting in Tandalja, Vadodara. Professional services, premium materials, 10+ years experience. Free quote: +91 93139 82980. Trusted by 5000+ customers.",
    url: "https://vadodaramistry.com/texture-painting-tandalja-vadodara",
    siteName: "Vadodara Mistry",
    locale: "en_IN",
    type: "website",
  },
};

const faqs = [
  {
    "question": "What is the cost of Texture Painting in Tandalja, Vadodara?",
    "answer": "The cost of Texture Painting in Tandalja, Vadodara depends on project size, materials, and complexity. We offer competitive rates starting from affordable packages. Contact us at +91 93139 82980 for a free quote based on your specific requirements."
  },
  {
    "question": "How long does Texture Painting take in Tandalja, Vadodara?",
    "answer": "Texture Painting project duration in Tandalja, Vadodara varies based on scope. Small projects take 1-3 days, medium projects 3-7 days, and larger projects may take 1-2 weeks. We provide accurate timelines during consultation."
  },
  {
    "question": "Do you provide Texture Painting warranty in Tandalja, Vadodara?",
    "answer": "Yes, we provide warranty on all Texture Painting work in Tandalja, Vadodara. Workmanship warranty ranges from 6 months to 2 years depending on the service type. Material warranties are as per manufacturer terms."
  },
  {
    "question": "What materials do you use for Texture Painting in Tandalja, Vadodara?",
    "answer": "We use premium quality materials from trusted brands for Texture Painting in Tandalja, Vadodara. All materials are ISI certified and come with manufacturer warranty. We can also work with client-provided materials."
  },
  {
    "question": "How to book Texture Painting in Tandalja, Vadodara?",
    "answer": "Booking Texture Painting in Tandalja, Vadodara is easy! Call us at +91 93139 82980, WhatsApp us, or fill the booking form on this page. Our team will visit for inspection and provide a detailed quote within 24 hours."
  },
  {
    "question": "Are your Texture Painting workers trained in Tandalja, Vadodara?",
    "answer": "Yes, all our Texture Painting workers serving Tandalja, Vadodara are professionally trained with 5-10+ years of experience. They undergo regular skill upgrades and follow safety protocols for quality work."
  },
  {
    "question": "What areas near Tandalja do you cover for Texture Painting?",
    "answer": "We provide Texture Painting across all areas of Vadodara including Alkapuri, Gotri, Manjalpur, Akota, Bhayli, Karelibaug, Waghodia Road, Makarpura and more. Our service network covers the entire Vadodara district."
  },
  {
    "question": "Do you offer free estimates for Texture Painting in Tandalja, Vadodara?",
    "answer": "Yes, we offer completely free site visits and estimates for Texture Painting in Tandalja, Vadodara. Our expert will assess your requirements and provide a detailed quotation with no obligation."
  },
  {
    "question": "What makes your Texture Painting different in Tandalja, Vadodara?",
    "answer": "Our Texture Painting in Tandalja, Vadodara stands out due to: 10+ years experience, trained professionals, premium materials, on-time delivery, transparent pricing, and after-service support. We've completed 5000+ projects successfully."
  },
  {
    "question": "Can I see your previous Texture Painting work in Tandalja, Vadodara?",
    "answer": "Absolutely! We maintain a portfolio of completed Texture Painting projects in Tandalja, Vadodara. Request to see photos during consultation, or visit our completed project sites nearby with prior appointment."
  }
];

export default function TexturePaintingTandaljaPage() {
  const faqSchema = generateFAQSchema(faqs);
  const localBusinessSchema = generateLocalBusinessSchema();
  const serviceSchema = generateServiceSchema({ title: "Texture Painting", description: "Expert Texture Painting in Tandalja, Vadodara. Professional services, premium materials, 10+ years experience. Free quote: +91 93139 82980. Trusted by 5000+ customers.", slug: "texture-painting-tandalja-vadodara" });
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://vadodaramistry.com" },
    { name: "Texture Painting", url: "https://vadodaramistry.com/texture-painting-in-vadodara" },
    { name: "Tandalja", url: "https://vadodaramistry.com/texture-painting-tandalja-vadodara" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className="min-h-screen">
        {/* Hero Section with Booking Form */}
        <section className="relative bg-gradient-to-br from-orange-500 to-orange-600 text-white py-16 md:py-24">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <nav className="text-sm mb-4 text-white/80">
                  <Link href="/" className="hover:text-white">Home</Link>
                  <span className="mx-2">/</span>
                  <Link href="/texture-painting-in-vadodara" className="hover:text-white">Texture Painting</Link>
                  <span className="mx-2">/</span>
                  <span>Tandalja</span>
                </nav>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Texture Painting in Tandalja, Vadodara
                </h1>
                <p className="text-xl mb-8 text-white/90">
                  Looking for professional Texture Painting in Tandalja, Vadodara? Vadodara Mistry provides expert texture painting services with over 10 years of experience and 5000+ satisfied customers. Our team of skilled professionals delivers top-quality work at competitive prices, ensuring complete customer satisfaction with every project in Tandalja.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                    <Shield className="w-5 h-5" />
                    <span>10+ Years Experience</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                    <Award className="w-5 h-5" />
                    <span>5000+ Projects</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                    <Users className="w-5 h-5" />
                    <span>Trusted Experts</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="tel:+919313982980"
                    className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
                  >
                    <Phone className="w-5 h-5" />
                    Call: +91 93139 82980
                  </a>
                  <a
                    href="https://wa.me/919313982980"
                    className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
                  >
                    WhatsApp Now
                  </a>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-2xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Get Free Quote for Texture Painting
                </h2>
                <BookingForm service="Texture Painting" location="Tandalja" />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Professional Texture Painting in Tandalja, Vadodara
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">Texture Painting is one of our core specialties at Vadodara Mistry. In Tandalja, Vadodara, we have established ourselves as the most trusted name for texture paint, designer painting, wall texture and related services. Our expertise covers residential, commercial, and industrial projects of all sizes.</p>
                <p className="mb-4">Our texture painting services in Tandalja include comprehensive solutions tailored to your specific needs. Whether you're building a new home, renovating your existing space, or need repairs and maintenance, our experienced team handles every project with precision and care. We use only premium quality materials from trusted brands to ensure longevity and superior finish.</p>
                <p className="mb-4">What sets us apart in Tandalja, Vadodara is our commitment to excellence. From the initial consultation to project completion, we maintain transparent communication, stick to agreed timelines, and deliver results that exceed expectations. Our pricing is competitive and honest - no hidden charges or surprise costs.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Why Choose Vadodara Mistry for Texture Painting?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "10+ Years Experience", desc: "Decade of expertise in texture painting services", icon: Award },
                { title: "Trained Professionals", desc: "Skilled workers with proper training", icon: Users },
                { title: "Premium Materials", desc: "Top quality ISI certified materials", icon: Shield },
                { title: "On-Time Delivery", desc: "Projects completed within deadline", icon: Clock },
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                  <item.icon className="w-12 h-12 text-orange-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Our Texture Painting Services in Tandalja
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {["texture paint","designer painting","wall texture","3D painting","metallic paint"].map((keyword, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 capitalize">{keyword}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Our Texture Painting Process
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                { step: 1, title: "Enquiry", desc: "Contact us via call, WhatsApp or form" },
                { step: 2, title: "Site Visit", desc: "Free inspection and measurement" },
                { step: 3, title: "Quotation", desc: "Detailed quote within 24 hours" },
                { step: 4, title: "Execution", desc: "Quality work with on-time delivery" },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              What Our Customers Say
            </h2>
            <Testimonials filterService="painting" limit={6} />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              FAQs - Texture Painting in Tandalja
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, i) => (
                <details key={i} className="bg-white rounded-xl shadow-sm group">
                  <summary className="p-6 cursor-pointer font-semibold text-gray-900 flex justify-between items-center">
                    {faq.question}
                    <ArrowRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform" />
                  </summary>
                  <div className="px-6 pb-6 text-gray-600">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Local Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Texture Painting Services Across Tandalja
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">Texture Painting Services Across Tandalja:

We serve all localities in and around Tandalja. Our clients in Tandalja, Vadodara appreciate our quick response time and local presence. Being a Vadodara-based company, we understand the unique requirements of homes and businesses in this area.

Tandalja has witnessed significant real estate growth, and our texture painting services have contributed to beautifying numerous residential complexes, independent houses, offices, and commercial establishments here. From modern apartments to traditional Gujarati homes, we adapt our work to match every architectural style.

Our service vehicle reaches Tandalja within 2-4 hours of booking confirmation. Emergency services are available for urgent requirements. We maintain a team dedicated to Tandalja, Vadodara to ensure faster service delivery.</p>
                <p className="mb-4">Ready to transform your space with professional Texture Painting in Tandalja, Vadodara? Contact Vadodara Mistry today! Call us at +91 93139 82980 or WhatsApp for instant response. Our team is ready to serve you with the best texture painting solutions at competitive prices.

Visit our office at Shop No. 12, Shreeji Complex, Near Sayajigunj Circle, Sayajigunj, Vadodara, Gujarat 390005. Working hours: Monday to Saturday 8AM-8PM, Sunday 9AM-6PM.

Book your free consultation now and join our 5000+ satisfied customers in Tandalja who trust Vadodara Mistry for their home service needs!</p>
              </div>
            </div>
          </div>
        </section>

        {/* Business Info */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Contact Us for Texture Painting</h2>
                <div className="space-y-4">
                  <a href="tel:+919313982980" className="flex items-center gap-3 text-lg hover:text-orange-400">
                    <Phone className="w-6 h-6" />
                    +91 93139 82980
                  </a>
                  <div className="flex items-start gap-3 text-lg">
                    <MapPin className="w-6 h-6 flex-shrink-0 mt-1" />
                    <span>Shop No. 12, Shreeji Complex, Near Sayajigunj Circle, Sayajigunj, Vadodara, Gujarat 390005</span>
                  </div>
                  <div className="flex items-center gap-3 text-lg">
                    <Clock className="w-6 h-6" />
                    Mon-Sat: 8AM-8PM | Sun: 9AM-6PM
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Enquiry</h3>
                <BookingForm service="Texture Painting" location="Tandalja" />
              </div>
            </div>
          </div>
        </section>

        {/* Related Areas */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Texture Painting in Other Areas
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {[{"name":"Alkapuri","slug":"texture-painting-alkapuri-vadodara"},{"name":"Gotri","slug":"texture-painting-gotri-vadodara"},{"name":"Manjalpur","slug":"texture-painting-manjalpur-vadodara"},{"name":"Akota","slug":"texture-painting-akota-vadodara"},{"name":"Bhayli","slug":"texture-painting-bhayli-vadodara"},{"name":"Karelibaug","slug":"texture-painting-karelibaug-vadodara"},{"name":"Waghodia Road","slug":"texture-painting-waghodia-road-vadodara"},{"name":"Makarpura","slug":"texture-painting-makarpura-vadodara"},{"name":"Chhani","slug":"texture-painting-chhani-vadodara"},{"name":"Harni","slug":"texture-painting-harni-vadodara"},{"name":"Fatehgunj","slug":"texture-painting-fatehgunj-vadodara"},{"name":"Gorwa","slug":"texture-painting-gorwa-vadodara"},{"name":"Sayajigunj","slug":"texture-painting-sayajigunj-vadodara"},{"name":"Tarsali","slug":"texture-painting-tarsali-vadodara"},{"name":"Ajwa Road","slug":"texture-painting-ajwa-road-vadodara"}].map((area) => (
                <Link
                  key={area.slug}
                  href={`/${area.slug}`}
                  className="px-4 py-2 bg-white border rounded-full hover:bg-orange-50 hover:border-orange-500 transition"
                >
                  {area.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <WhatsAppFloat />
        <CallButton />
      </main>
    </>
  );
}
