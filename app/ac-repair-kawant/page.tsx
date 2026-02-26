import { Metadata } from "next";
import CityPageTemplate from "@/components/CityPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair & Service in Kawant | Installation, Service & Repair | Atlas Aircon",
  description: "Professional AC repair, service & installation in Kawant, Gujarat. Industrial & commercial AC service. 20+ years experience, 90-day warranty. Call +91 97272 57141",
  keywords: [
    "AC repair Kawant",
    "AC service Kawant",
    "AC installation Kawant",
    "HVAC service Kawant",
    "chiller repair Kawant",
    "commercial AC Kawant",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-kawant",
  },
};

export default function KawantCityPage() {
  return (
    <CityPageTemplate
      city="kawant"
      cityDisplay="Kawant"
      distance="70 km"
      state="Gujarat"
    />
  );
}
