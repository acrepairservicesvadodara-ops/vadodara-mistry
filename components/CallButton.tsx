"use client";

import { Phone } from "lucide-react";

export default function CallButton() {
  return (
    <a
      href="tel:+919727257141"
      className="fixed bottom-6 right-6 z-50 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all hover:scale-110 group"
      aria-label="Call us"
    >
      <Phone size={28} />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
        Call Now
      </span>

      {/* Ripple effect */}
      <span className="absolute inset-0 rounded-full animate-ping bg-blue-600 opacity-25"></span>
    </a>
  );
}
