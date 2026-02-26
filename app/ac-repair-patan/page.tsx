import { Metadata } from "next";
import CityPageTemplate from "@/components/CityPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair & Service in Patan | Installation, Service & Repair | Atlas Aircon",
  description: "Professional AC repair, service & installation in Patan, Gujarat. Industrial & commercial AC service. 20+ years experience, 90-day warranty. Call +91 97272 57141",
  keywords: [
    "AC repair Patan",
    "AC service Patan",
    "AC installation Patan",
    "HVAC service Patan",
    "chiller repair Patan",
    "commercial AC Patan",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-patan",
  },
};

export default function PatanCityPage() {
  return (
    <CityPageTemplate
      city="patan"
      cityDisplay="Patan"
      distance="170 km"
      state="Gujarat"
    />
  );
}
