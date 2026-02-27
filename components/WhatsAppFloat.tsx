"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  const phoneNumber = "917600337866";
  const message = encodeURIComponent(
    "Hello Vadodara Mistry! I need home service. Please contact me."
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} fill="white" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
        Chat with us
      </span>

      {/* Ping animation */}
      <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
      </span>
    </a>
  );
}
