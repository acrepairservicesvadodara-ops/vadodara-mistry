import { Metadata } from "next";
import CityPageTemplate from "@/components/CityPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair & Service in Morbi | Installation, Service & Repair | Atlas Aircon",
  description: "Professional AC repair, service & installation in Morbi, Gujarat. Industrial & commercial AC service. 20+ years experience, 90-day warranty. Call +91 97272 57141",
  keywords: [
    "AC repair Morbi",
    "AC service Morbi",
    "AC installation Morbi",
    "HVAC service Morbi",
    "chiller repair Morbi",
    "commercial AC Morbi",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-morbi",
  },
};

export default function MorbiCityPage() {
  return (
    <CityPageTemplate
      city="morbi"
      cityDisplay="Morbi"
      distance="280 km"
      state="Gujarat"
    />
  );
}
