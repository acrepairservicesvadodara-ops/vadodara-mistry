import { MetadataRoute } from "next";
import { allKeywords, vadodaraAreas } from "@/lib/data";

// 15 Main Services for service×area combination
const mainServices = [
  "pop-false-ceiling",
  "wall-painting",
  "texture-painting",
  "tile-fitting",
  "waterproofing",
  "bathroom-renovation",
  "plumbing",
  "geyser-repair",
  "modular-kitchen",
  "wardrobe",
  "carpenter",
  "gate-fabrication",
  "ss-railing",
  "window-grill",
  "solar-installation"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://vadodaramistry.com";
  const lastModified = new Date();

  // Static pages
  const staticPages = [
    { url: baseUrl, lastModified, changeFrequency: "daily" as const, priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/areas`, lastModified, changeFrequency: "monthly" as const, priority: 0.7 },
    // Main category pages
    { url: `${baseUrl}/pop-painting-vadodara`, lastModified, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/civil-contractors-vadodara`, lastModified, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/plumbing-vadodara`, lastModified, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/carpenter-vadodara`, lastModified, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/fabrication-vadodara`, lastModified, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/solar-vadodara`, lastModified, changeFrequency: "weekly" as const, priority: 0.9 },
  ];

  // All keyword pages (370+ pages)
  const keywordPages = allKeywords.map((keyword) => ({
    url: `${baseUrl}/${keyword.slug}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // All area pages (40 pages) - without "services-" prefix
  const areaPages = vadodaraAreas.map((area) => ({
    url: `${baseUrl}/${area.slug}-vadodara`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Service × City pages (15 service-in-vadodara pages)
  const serviceCityPages = mainServices.map((service) => ({
    url: `${baseUrl}/${service}-in-vadodara`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // Service × Area combination pages (15 services × 40 areas = 600 pages)
  const serviceAreaPages: MetadataRoute.Sitemap = [];
  mainServices.forEach((service) => {
    vadodaraAreas.forEach((area) => {
      serviceAreaPages.push({
        url: `${baseUrl}/${service}-${area.slug}-vadodara`,
        lastModified,
        changeFrequency: "weekly" as const,
        priority: 0.85,
      });
    });
  });

  return [
    ...staticPages,
    ...keywordPages,
    ...areaPages,
    ...serviceCityPages,
    ...serviceAreaPages,
  ];
}
