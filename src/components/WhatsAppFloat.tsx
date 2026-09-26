"use client";

export default function WhatsAppFloat() {
  const phoneNumber = "919313982980";
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
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M12.004 2.003c-5.523 0-10 4.477-10 10 0 1.766.462 3.492 1.34 5.008L2 22l5.116-1.342a9.958 9.958 0 0 0 4.888 1.281h.005c5.523 0 10-4.477 10-10s-4.477-9.936-10.005-9.936zm0 18.017h-.004a8.377 8.377 0 0 1-4.269-1.169l-.306-.182-3.037.796.81-2.96-.199-.313a8.336 8.336 0 0 1-1.28-4.457c0-4.607 3.75-8.353 8.36-8.353a8.33 8.33 0 0 1 8.353 8.353c0 4.607-3.75 8.285-8.428 8.285z"/>
      </svg>
      
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
