"use client";

import { Phone } from "lucide-react";

interface CallButtonProps {
  className?: string;
  showText?: boolean;
}

export default function CallButton({ className, showText = false }: CallButtonProps) {
  // If custom className provided, render a simple text button
  if (className) {
    return (
      <a
        href="tel:+917600337866"
        className={className}
        aria-label="Call us"
      >
        <Phone className="w-5 h-5 inline mr-2" />
        Call +91 76003 37866
      </a>
    );
  }

  // Default floating button
  return (
    <a
      href="tel:+917600337866"
      className="fixed bottom-6 right-6 z-50 bg-orange-600 text-white p-4 rounded-full shadow-lg hover:bg-orange-700 transition-all hover:scale-110 group"
      aria-label="Call us"
    >
      <Phone size={28} />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
        Call Now
      </span>

      {/* Ripple effect */}
      <span className="absolute inset-0 rounded-full animate-ping bg-orange-600 opacity-25"></span>
    </a>
  );
}
