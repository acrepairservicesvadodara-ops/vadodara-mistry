"use client";

import { useState } from "react";
import { Phone, Send, CheckCircle } from "lucide-react";

interface BookingFormProps {
  title?: string;
  compact?: boolean;
}

export default function BookingForm({ title = "Book Home Service", compact = false }: BookingFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    area: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    "POP False Ceiling",
    "Wall Painting",
    "Texture Painting",
    "Tile Fitting",
    "Waterproofing",
    "Bathroom Renovation",
    "Plumbing Work",
    "Modular Kitchen",
    "Wardrobe/Furniture",
    "Gate Fabrication",
    "Welding Work",
    "Solar Maintenance",
    "Other",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create WhatsApp message
    const message = `New Service Booking - Vadodara Mistry:\n\nName: ${formData.name}\nPhone: ${formData.phone}\nService: ${formData.service}\nArea: ${formData.area}\nDetails: ${formData.message || "N/A"}`;
    
    // Open WhatsApp with pre-filled message
    const whatsappUrl = `https://wa.me/917600337866?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", phone: "", service: "", area: "", message: "" });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className={`bg-white rounded-2xl shadow-xl p-6 ${compact ? "" : "p-8"}`}>
        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Booking Sent!</h3>
          <p className="text-gray-600">We&apos;ll contact you within 30 minutes.</p>
          <a 
            href="tel:+917600337866" 
            className="inline-flex items-center gap-2 mt-4 text-orange-600 hover:text-orange-700 font-medium"
          >
            <Phone className="w-4 h-4" />
            Call Now: +91 97272 57141
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-2xl shadow-xl ${compact ? "p-4" : "p-6 md:p-8"}`}>
      <h3 className={`font-bold text-gray-900 mb-4 ${compact ? "text-lg" : "text-xl md:text-2xl"}`}>
        {title}
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className={compact ? "" : "grid grid-cols-1 md:grid-cols-2 gap-4"}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your Name *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-gray-900"
              placeholder="Enter your name"
            />
          </div>
          
          <div className={compact ? "mt-4" : ""}>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number *
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-gray-900"
              placeholder="Enter 10 digit number"
              pattern="[0-9]{10}"
            />
          </div>
        </div>

        <div className={compact ? "" : "grid grid-cols-1 md:grid-cols-2 gap-4"}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Service Required *
            </label>
            <select
              required
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-gray-900"
            >
              <option value="">Select Service</option>
              {services.map((service) => (
                <option key={service} value={service}>{service}</option>
              ))}
            </select>
          </div>
          
          <div className={compact ? "mt-4" : ""}>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Area/Locality *
            </label>
            <input
              type="text"
              required
              value={formData.area}
              onChange={(e) => setFormData({ ...formData, area: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-gray-900"
              placeholder="e.g., Alkapuri, Vadodara"
            />
          </div>
        </div>

        {!compact && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Problem Description (Optional)
            </label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-gray-900"
              placeholder="Describe your requirements..."
            />
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition flex items-center justify-center gap-2 disabled:opacity-50"
        >
          {isSubmitting ? (
            <>Processing...</>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Book Service Now
            </>
          )}
        </button>
      </form>

      <div className="mt-4 pt-4 border-t border-gray-200 text-center">
        <p className="text-sm text-gray-600 mb-2">Or call us directly:</p>
        <a 
          href="tel:+917600337866"
          className="inline-flex items-center gap-2 text-lg font-bold text-orange-600 hover:text-orange-700"
        >
          <Phone className="w-5 h-5" />
          +91 97272 57141
        </a>
      </div>
    </div>
  );
}
