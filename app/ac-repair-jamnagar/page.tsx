import { Metadata } from "next";
import CityPageTemplate from "@/components/CityPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair & Service in Jamnagar | Installation, Service & Repair | Atlas Aircon",
  description: "Professional AC repair, service & installation in Jamnagar, Gujarat. Industrial & commercial AC service. 20+ years experience, 90-day warranty. Call +91 97272 57141",
  keywords: [
    "AC repair Jamnagar",
    "AC service Jamnagar",
    "AC installation Jamnagar",
    "HVAC service Jamnagar",
    "chiller repair Jamnagar",
    "commercial AC Jamnagar",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-jamnagar",
  },
};

export default function JamnagarCityPage() {
  return (
    <CityPageTemplate
      city="jamnagar"
      cityDisplay="Jamnagar"
      distance="350 km"
      state="Gujarat"
    />
  );
}
