import { Metadata } from "next";
import CityPageTemplate from "@/components/CityPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair & Service in Halol | Installation, Service & Repair | Atlas Aircon",
  description: "Professional AC repair, service & installation in Halol, Gujarat. Industrial & commercial AC service. 20+ years experience, 90-day warranty. Call +91 97272 57141",
  keywords: [
    "AC repair Halol",
    "AC service Halol",
    "AC installation Halol",
    "HVAC service Halol",
    "chiller repair Halol",
    "commercial AC Halol",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-halol",
  },
};

export default function HalolCityPage() {
  return (
    <CityPageTemplate
      city="halol"
      cityDisplay="Halol"
      distance="40 km"
      state="Gujarat"
    />
  );
}
