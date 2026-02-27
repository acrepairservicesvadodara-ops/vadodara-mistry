import { MetadataRoute } from "next";
import { allKeywords, vadodaraAreas } from "@/lib/data";

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

  // All area pages (40 pages)
  const areaPages = vadodaraAreas.map((area) => ({
    url: `${baseUrl}/services-${area.slug}-vadodara`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    ...staticPages,
    ...keywordPages,
    ...areaPages,
  ];
}
