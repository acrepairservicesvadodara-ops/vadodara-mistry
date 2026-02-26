import { Metadata } from "next";
import CityPageTemplate from "@/components/CityPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair & Service in Dahod | Installation, Service & Repair | Atlas Aircon",
  description: "Professional AC repair, service & installation in Dahod, Gujarat. Industrial & commercial AC service. 20+ years experience, 90-day warranty. Call +91 97272 57141",
  keywords: [
    "AC repair Dahod",
    "AC service Dahod",
    "AC installation Dahod",
    "HVAC service Dahod",
    "chiller repair Dahod",
    "commercial AC Dahod",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-dahod",
  },
};

export default function DahodCityPage() {
  return (
    <CityPageTemplate
      city="dahod"
      cityDisplay="Dahod"
      distance="120 km"
      state="Gujarat"
    />
  );
}
