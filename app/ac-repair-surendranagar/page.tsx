import { Metadata } from "next";
import CityPageTemplate from "@/components/CityPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair & Service in Surendranagar | Installation, Service & Repair | Atlas Aircon",
  description: "Professional AC repair, service & installation in Surendranagar, Gujarat. Industrial & commercial AC service. 20+ years experience, 90-day warranty. Call +91 97272 57141",
  keywords: [
    "AC repair Surendranagar",
    "AC service Surendranagar",
    "AC installation Surendranagar",
    "HVAC service Surendranagar",
    "chiller repair Surendranagar",
    "commercial AC Surendranagar",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-surendranagar",
  },
};

export default function SurendranagarCityPage() {
  return (
    <CityPageTemplate
      city="surendranagar"
      cityDisplay="Surendranagar"
      distance="180 km"
      state="Gujarat"
    />
  );
}
