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
  title: "Plumbing Services in Gotri | Best Plumbing Services Services - Vadodara Mistry",
  description: "Expert Plumbing Services in Gotri, Vadodara. Professional services, premium materials, 10+ years experience. Free quote: +91 93139 82980. Trusted by 5000+ customers.",
  keywords: "plumber, plumbing, pipe fitting, leak repair, drainage work, Gotri, Vadodara",
  alternates: {
    canonical: "https://vadodaramistry.com/plumbing-gotri-vadodara",
  },
  openGraph: {
    title: "Plumbing Services in Gotri | Best Plumbing Services Services - Vadodara Mistry",
    description: "Expert Plumbing Services in Gotri, Vadodara. Professional services, premium materials, 10+ years experience. Free quote: +91 93139 82980. Trusted by 5000+ customers.",
    url: "https://vadodaramistry.com/plumbing-gotri-vadodara",
    siteName: "Vadodara Mistry",
    locale: "en_IN",
    type: "website",
  },
};

const faqs = [
  {
    "question": "What is the cost of Plumbing Services in Gotri, Vadodara?",
    "answer": "The cost of Plumbing Services in Gotri, Vadodara depends on project size, materials, and complexity. We offer competitive rates starting from affordable packages. Contact us at +91 93139 82980 for a free quote based on your specific requirements."
  },
  {
    "question": "How long does Plumbing Services take in Gotri, Vadodara?",
    "answer": "Plumbing Services project duration in Gotri, Vadodara varies based on scope. Small projects take 1-3 days, medium projects 3-7 days, and larger projects may take 1-2 weeks. We provide accurate timelines during consultation."
  },
  {
    "question": "Do you provide Plumbing Services warranty in Gotri, Vadodara?",
    "answer": "Yes, we provide warranty on all Plumbing Services work in Gotri, Vadodara. Workmanship warranty ranges from 6 months to 2 years depending on the service type. Material warranties are as per manufacturer terms."
  },
  {
    "question": "What materials do you use for Plumbing Services in Gotri, Vadodara?",
    "answer": "We use premium quality materials from trusted brands for Plumbing Services in Gotri, Vadodara. All materials are ISI certified and come with manufacturer warranty. We can also work with client-provided materials."
  },
  {
    "question": "How to book Plumbing Services in Gotri, Vadodara?",
    "answer": "Booking Plumbing Services in Gotri, Vadodara is easy! Call us at +91 93139 82980, WhatsApp us, or fill the booking form on this page. Our team will visit for inspection and provide a detailed quote within 24 hours."
  },
  {
    "question": "Are your Plumbing Services workers trained in Gotri, Vadodara?",
    "answer": "Yes, all our Plumbing Services workers serving Gotri, Vadodara are professionally trained with 5-10+ years of experience. They undergo regular skill upgrades and follow safety protocols for quality work."
  },
  {
    "question": "What areas near Gotri do you cover for Plumbing Services?",
    "answer": "We provide Plumbing Services across all areas of Vadodara including Alkapuri, Gotri, Manjalpur, Akota, Bhayli, Karelibaug, Waghodia Road, Makarpura and more. Our service network covers the entire Vadodara district."
  },
  {
    "question": "Do you offer free estimates for Plumbing Services in Gotri, Vadodara?",
    "answer": "Yes, we offer completely free site visits and estimates for Plumbing Services in Gotri, Vadodara. Our expert will assess your requirements and provide a detailed quotation with no obligation."
  },
  {
    "question": "What makes your Plumbing Services different in Gotri, Vadodara?",
    "answer": "Our Plumbing Services in Gotri, Vadodara stands out due to: 10+ years experience, trained professionals, premium materials, on-time delivery, transparent pricing, and after-service support. We've completed 5000+ projects successfully."
  },
  {
    "question": "Can I see your previous Plumbing Services work in Gotri, Vadodara?",
    "answer": "Absolutely! We maintain a portfolio of completed Plumbing Services projects in Gotri, Vadodara. Request to see photos during consultation, or visit our completed project sites nearby with prior appointment."
  }
];

export default function PlumbingGotriPage() {
  const faqSchema = generateFAQSchema(faqs);
  const localBusinessSchema = generateLocalBusinessSchema();
  const serviceSchema = generateServiceSchema({ title: "Plumbing Services", description: "Expert Plumbing Services in Gotri, Vadodara. Professional services, premium materials, 10+ years experience. Free quote: +91 93139 82980. Trusted by 5000+ customers.", slug: "plumbing-gotri-vadodara" });
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://vadodaramistry.com" },
    { name: "Plumbing Services", url: "https://vadodaramistry.com/plumbing-in-vadodara" },
    { name: "Gotri", url: "https://vadodaramistry.com/plumbing-gotri-vadodara" },
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
        <section className="relative bg-gradient-to-br from-blue-500 to-blue-600 text-white py-16 md:py-24">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <nav className="text-sm mb-4 text-white/80">
                  <Link href="/" className="hover:text-white">Home</Link>
                  <span className="mx-2">/</span>
                  <Link href="/plumbing-in-vadodara" className="hover:text-white">Plumbing Services</Link>
                  <span className="mx-2">/</span>
                  <span>Gotri</span>
                </nav>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Plumbing Services in Gotri, Vadodara
                </h1>
                <p className="text-xl mb-8 text-white/90">
                  Looking for professional Plumbing Services in Gotri, Vadodara? Vadodara Mistry provides expert plumbing services services with over 10 years of experience and 5000+ satisfied customers. Our team of skilled professionals delivers top-quality work at competitive prices, ensuring complete customer satisfaction with every project in Gotri.
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
                  Get Free Quote for Plumbing Services
                </h2>
                <BookingForm service="Plumbing Services" location="Gotri" />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Professional Plumbing Services in Gotri, Vadodara
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">Plumbing Services is one of our core specialties at Vadodara Mistry. In Gotri, Vadodara, we have established ourselves as the most trusted name for plumber, plumbing, pipe fitting and related services. Our expertise covers residential, commercial, and industrial projects of all sizes.</p>
                <p className="mb-4">Our plumbing services services in Gotri include comprehensive solutions tailored to your specific needs. Whether you're building a new home, renovating your existing space, or need repairs and maintenance, our experienced team handles every project with precision and care. We use only premium quality materials from trusted brands to ensure longevity and superior finish.</p>
                <p className="mb-4">What sets us apart in Gotri, Vadodara is our commitment to excellence. From the initial consultation to project completion, we maintain transparent communication, stick to agreed timelines, and deliver results that exceed expectations. Our pricing is competitive and honest - no hidden charges or surprise costs.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Why Choose Vadodara Mistry for Plumbing Services?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "10+ Years Experience", desc: "Decade of expertise in plumbing services services", icon: Award },
                { title: "Trained Professionals", desc: "Skilled workers with proper training", icon: Users },
                { title: "Premium Materials", desc: "Top quality ISI certified materials", icon: Shield },
                { title: "On-Time Delivery", desc: "Projects completed within deadline", icon: Clock },
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                  <item.icon className="w-12 h-12 text-blue-500 mb-4" />
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
              Our Plumbing Services Services in Gotri
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {["plumber","plumbing","pipe fitting","leak repair","drainage work"].map((keyword, i) => (
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
              Our Plumbing Services Process
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                { step: 1, title: "Enquiry", desc: "Contact us via call, WhatsApp or form" },
                { step: 2, title: "Site Visit", desc: "Free inspection and measurement" },
                { step: 3, title: "Quotation", desc: "Detailed quote within 24 hours" },
                { step: 4, title: "Execution", desc: "Quality work with on-time delivery" },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
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
            <Testimonials filterService="plumbing" limit={6} />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              FAQs - Plumbing Services in Gotri
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
                Plumbing Services Services Across Gotri
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">Plumbing Services Services Across Gotri:

We serve all localities in and around Gotri. Our clients in Gotri, Vadodara appreciate our quick response time and local presence. Being a Vadodara-based company, we understand the unique requirements of homes and businesses in this area.

Gotri has witnessed significant real estate growth, and our plumbing services services have contributed to beautifying numerous residential complexes, independent houses, offices, and commercial establishments here. From modern apartments to traditional Gujarati homes, we adapt our work to match every architectural style.

Our service vehicle reaches Gotri within 2-4 hours of booking confirmation. Emergency services are available for urgent requirements. We maintain a team dedicated to Gotri, Vadodara to ensure faster service delivery.</p>
                <p className="mb-4">Ready to transform your space with professional Plumbing Services in Gotri, Vadodara? Contact Vadodara Mistry today! Call us at +91 93139 82980 or WhatsApp for instant response. Our team is ready to serve you with the best plumbing services solutions at competitive prices.

Visit our office at Shop No. 12, Shreeji Complex, Near Sayajigunj Circle, Sayajigunj, Vadodara, Gujarat 390005. Working hours: Monday to Saturday 8AM-8PM, Sunday 9AM-6PM.

Book your free consultation now and join our 5000+ satisfied customers in Gotri who trust Vadodara Mistry for their home service needs!</p>
              </div>
            </div>
          </div>
        </section>

        {/* Business Info */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Contact Us for Plumbing Services</h2>
                <div className="space-y-4">
                  <a href="tel:+919313982980" className="flex items-center gap-3 text-lg hover:text-blue-400">
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
                <BookingForm service="Plumbing Services" location="Gotri" />
              </div>
            </div>
          </div>
        </section>

        {/* Related Areas */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Plumbing Services in Other Areas
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {[{"name":"Alkapuri","slug":"plumbing-alkapuri-vadodara"},{"name":"Manjalpur","slug":"plumbing-manjalpur-vadodara"},{"name":"Akota","slug":"plumbing-akota-vadodara"},{"name":"Bhayli","slug":"plumbing-bhayli-vadodara"},{"name":"Karelibaug","slug":"plumbing-karelibaug-vadodara"},{"name":"Waghodia Road","slug":"plumbing-waghodia-road-vadodara"},{"name":"Makarpura","slug":"plumbing-makarpura-vadodara"},{"name":"Chhani","slug":"plumbing-chhani-vadodara"},{"name":"Harni","slug":"plumbing-harni-vadodara"},{"name":"Fatehgunj","slug":"plumbing-fatehgunj-vadodara"},{"name":"Gorwa","slug":"plumbing-gorwa-vadodara"},{"name":"Sayajigunj","slug":"plumbing-sayajigunj-vadodara"},{"name":"Tarsali","slug":"plumbing-tarsali-vadodara"},{"name":"Ajwa Road","slug":"plumbing-ajwa-road-vadodara"},{"name":"Subhanpura","slug":"plumbing-subhanpura-vadodara"}].map((area) => (
                <Link
                  key={area.slug}
                  href={`/${area.slug}`}
                  className="px-4 py-2 bg-white border rounded-full hover:bg-blue-50 hover:border-blue-500 transition"
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
