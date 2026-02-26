import { Metadata } from "next";
import CityPageTemplate from "@/components/CityPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair & Service in Nadiad | Installation, Service & Repair | Atlas Aircon",
  description: "Professional AC repair, service & installation in Nadiad, Gujarat. Industrial & commercial AC service. 20+ years experience, 90-day warranty. Call +91 97272 57141",
  keywords: [
    "AC repair Nadiad",
    "AC service Nadiad",
    "AC installation Nadiad",
    "HVAC service Nadiad",
    "chiller repair Nadiad",
    "commercial AC Nadiad",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-nadiad",
  },
};

export default function NadiadCityPage() {
  return (
    <CityPageTemplate
      city="nadiad"
      cityDisplay="Nadiad"
      distance="50 km"
      state="Gujarat"
    />
  );
}
