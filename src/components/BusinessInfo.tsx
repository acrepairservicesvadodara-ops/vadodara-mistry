import { businessConfig } from "@/lib/business-config";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

interface BusinessInfoProps {
  variant?: "compact" | "full";
  className?: string;
}

export default function BusinessInfo({ variant = "full", className = "" }: BusinessInfoProps) {
  if (variant === "compact") {
    return (
      <div className={`bg-orange-50 border border-orange-100 rounded-xl p-4 ${className}`}>
        <div className="flex flex-wrap gap-4 text-sm">
          <a href={`tel:${businessConfig.phone}`} className="flex items-center gap-2 text-gray-700 hover:text-orange-600">
            <Phone size={16} className="text-orange-500" />
            {businessConfig.phoneDisplay}
          </a>
          <div className="flex items-center gap-2 text-gray-700">
            <MapPin size={16} className="text-orange-500" />
            {businessConfig.address.locality}, {businessConfig.address.city}
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <Clock size={16} className="text-orange-500" />
            Open {businessConfig.hours.weekdays}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-2xl shadow-lg p-6 md:p-8 ${className}`}>
      <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Us</h3>
      
      <div className="space-y-4">
        {/* Phone */}
        <a 
          href={`tel:${businessConfig.phone}`}
          className="flex items-start gap-4 p-3 rounded-lg hover:bg-orange-50 transition group"
        >
          <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
            <Phone size={20} className="text-orange-600" />
          </div>
          <div>
            <p className="font-semibold text-gray-900 group-hover:text-orange-600">Call Us</p>
            <p className="text-gray-600">{businessConfig.phoneDisplay}</p>
            <p className="text-xs text-gray-500">{businessConfig.hours.emergency}</p>
          </div>
        </a>

        {/* WhatsApp */}
        <a 
          href={`https://wa.me/${businessConfig.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start gap-4 p-3 rounded-lg hover:bg-green-50 transition group"
        >
          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            </svg>
          </div>
          <div>
            <p className="font-semibold text-gray-900 group-hover:text-green-600">WhatsApp</p>
            <p className="text-gray-600">Chat with us instantly</p>
          </div>
        </a>

        {/* Email */}
        <a 
          href={`mailto:${businessConfig.email}`}
          className="flex items-start gap-4 p-3 rounded-lg hover:bg-blue-50 transition group"
        >
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
            <Mail size={20} className="text-blue-600" />
          </div>
          <div>
            <p className="font-semibold text-gray-900 group-hover:text-blue-600">Email</p>
            <p className="text-gray-600">{businessConfig.email}</p>
          </div>
        </a>

        {/* Address */}
        <a 
          href={businessConfig.address.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition group"
        >
          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
            <MapPin size={20} className="text-gray-600" />
          </div>
          <div>
            <p className="font-semibold text-gray-900 group-hover:text-orange-600">Visit Us</p>
            <p className="text-gray-600 text-sm">{businessConfig.address.full}</p>
          </div>
        </a>

        {/* Hours */}
        <div className="flex items-start gap-4 p-3">
          <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
            <Clock size={20} className="text-purple-600" />
          </div>
          <div>
            <p className="font-semibold text-gray-900">Business Hours</p>
            <div className="text-gray-600 text-sm space-y-1">
              <p>Mon - Sat: {businessConfig.hours.weekdays}</p>
              <p>Sunday: {businessConfig.hours.sunday}</p>
              <p className="text-orange-600 font-medium">{businessConfig.hours.emergency}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-6 pt-6 border-t border-gray-100">
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-orange-600">{businessConfig.stats.yearsExperience}+</p>
            <p className="text-xs text-gray-500">Years Experience</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-orange-600">{businessConfig.stats.happyCustomers}</p>
            <p className="text-xs text-gray-500">Happy Customers</p>
          </div>
        </div>
      </div>
    </div>
  );
}
