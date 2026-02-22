import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://atlasaircons.com";
  const lastModified = new Date();

  // Static pages
  const staticPages = [
    { url: baseUrl, lastModified, changeFrequency: "daily" as const, priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${baseUrl}/areas`, lastModified, changeFrequency: "weekly" as const, priority: 0.8 },
  ];

  // Main service pages
  const services = [
    "ac-repair-vadodara",
    "ac-service-vadodara",
    "ac-installation-vadodara",
    "ac-amc-vadodara",
    "ac-gas-refilling-vadodara",
    "chiller-repair-vadodara",
    "hvac-service-vadodara",
    "vrf-vrv-system-vadodara",
  ];

  const servicePages = services.map((service) => ({
    url: `${baseUrl}/${service}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // Vadodara area pages
  const vadodaraAreas = [
    "alkapuri", "gotri", "manjalpur", "akota", "fatehgunj", "karelibaug",
    "sayajigunj", "waghodia", "harni", "vasna", "sama", "tandalja",
    "subhanpura", "gorwa", "nizampura", "atladara", "chhani", "tarsali",
    "makarpura", "ajwa-road", "vadsar", "sevasi", "sama-savli-road",
    "new-vip-road", "old-padra-road", "new-sama-road", "tp-road",
    "race-course", "ellora-park", "pratap-nagar", "vasundhara",
    "gidc-makarpura", "nandesari", "savli", "halol-road", "dabhoi-road",
    "karjan", "padra", "shinor", "panchmahal-road",
  ];

  const areaPages = vadodaraAreas.map((area) => ({
    url: `${baseUrl}/ac-repair-${area}-vadodara`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // Nearby city pages
  const nearbyCities = [
    "ahmedabad", "surat", "bharuch", "anand", "nadiad", "gandhinagar",
    "rajkot", "godhra", "halol", "ankleshwar", "dahej", "junagadh",
    "bhavnagar", "jamnagar", "mehsana", "patan", "surendranagar",
    "porbandar", "veraval", "navsari", "vapi", "valsad", "silvassa",
    "daman", "kheda", "petlad", "borsad", "umreth", "dahod", "chhota-udepur",
    "pavagadh", "champaner", "lunawada", "santrampur", "devgadh-bariya",
    "zalod", "jhalod", "kadana", "mahisagar", "panchmahals",
  ];

  const cityPages = nearbyCities.map((city) => ({
    url: `${baseUrl}/ac-repair-${city}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // Brand pages
  const brands = [
    "daikin", "voltas", "blue-star", "carrier", "lg", "samsung",
    "hitachi", "o-general", "mitsubishi", "panasonic", "whirlpool",
    "godrej", "haier", "lloyd", "ifb", "toshiba", "midea", "tcl", "onida", "blueair",
  ];

  const brandPages = brands.map((brand) => ({
    url: `${baseUrl}/${brand}-ac-service-vadodara`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // AC type pages
  const acTypes = [
    "split-ac", "window-ac", "cassette-ac", "ductable-ac",
    "tower-ac", "central-ac", "panel-ac", "portable-ac",
  ];

  const typePages = acTypes.map((type) => ({
    url: `${baseUrl}/${type}-repair-vadodara`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // SEO keyword pages (100)
  const seoKeywords = [
    // AC Problems & Solutions (20)
    "ac-not-cooling", "ac-water-leaking", "ac-gas-leak-repair", "ac-compressor-repair",
    "ac-noise-problem", "ac-smell-problem", "ac-ice-formation", "ac-remote-not-working",
    "ac-fan-not-working", "ac-pcb-repair", "ac-capacitor-replacement", "ac-thermostat-repair",
    "ac-sensor-problem", "ac-drain-pipe-cleaning", "ac-outdoor-unit-repair", "ac-indoor-unit-repair",
    "ac-coil-cleaning", "ac-blower-repair", "ac-motor-repair", "ac-circuit-board-repair",
    // Commercial & Industrial (20)
    "commercial-ac-repair", "office-ac-service", "shop-ac-repair", "showroom-ac-service",
    "restaurant-ac-repair", "hospital-ac-service", "hotel-ac-repair", "mall-ac-service",
    "warehouse-ac-cooling", "factory-ac-repair", "industrial-chiller-repair", "process-chiller-service",
    "server-room-ac", "data-center-cooling", "clean-room-ac", "laboratory-ac-service",
    "bakery-ac-repair", "cold-storage-service", "pharmacy-ac-repair", "gym-ac-service",
    // Emergency & 24x7 (10)
    "emergency-ac-repair", "same-day-ac-repair", "urgent-ac-service", "24-hour-ac-repair",
    "sunday-ac-service", "night-ac-repair", "holiday-ac-service", "express-ac-repair",
    "immediate-ac-service", "instant-ac-repair",
    // Seasonal & Specific (15)
    "summer-ac-service", "monsoon-ac-maintenance", "pre-summer-ac-checkup", "annual-ac-service",
    "inverter-ac-repair", "non-inverter-ac-service", "old-ac-repair", "new-ac-installation",
    "ac-shifting", "ac-relocation", "ac-uninstallation", "ac-dismantling",
    "ac-deep-cleaning", "ac-jet-cleaning", "ac-foam-cleaning",
    // Parts & Accessories (15)
    "ac-spare-parts", "ac-compressor-price", "ac-gas-price", "ac-remote-price",
    "ac-capacitor-price", "ac-pcb-price", "ac-blower-price", "ac-fan-motor-price",
    "ac-thermostat-price", "ac-filter-replacement", "ac-copper-pipe", "ac-drain-pipe",
    "ac-stabilizer", "ac-stand", "ac-cover",
    // Comparison & Buying Guide (10)
    "best-ac-brands", "ac-buying-guide", "ac-price-comparison", "best-inverter-ac",
    "best-split-ac", "ac-ton-calculator", "ac-star-rating-guide", "energy-efficient-ac",
    "budget-ac-options", "premium-ac-brands",
    // Appliance Repair Expansion (10)
    "refrigerator-repair", "washing-machine-repair", "microwave-repair", "water-cooler-repair",
    "deep-freezer-repair", "display-cooler-repair", "air-cooler-repair", "geyser-repair",
    "ro-water-purifier-repair", "dishwasher-repair",
  ];

  const keywordPages = seoKeywords.map((keyword) => ({
    url: `${baseUrl}/${keyword}-vadodara`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...areaPages,
    ...cityPages,
    ...brandPages,
    ...typePages,
    ...keywordPages,
  ];
}
