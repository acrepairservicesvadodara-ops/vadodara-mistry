import { Metadata } from "next";
import CityPageTemplate from "@/components/CityPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair & Service in Savli | Installation, Service & Repair | Atlas Aircon",
  description: "Professional AC repair, service & installation in Savli, Gujarat. Industrial & commercial AC service. 20+ years experience, 90-day warranty. Call +91 97272 57141",
  keywords: [
    "AC repair Savli",
    "AC service Savli",
    "AC installation Savli",
    "HVAC service Savli",
    "chiller repair Savli",
    "commercial AC Savli",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-savli",
  },
};

export default function SavliCityPage() {
  return (
    <CityPageTemplate
      city="savli"
      cityDisplay="Savli"
      distance="20 km"
      state="Gujarat"
    />
  );
}
