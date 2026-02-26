import { Metadata } from "next";
import CityPageTemplate from "@/components/CityPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair & Service in Padra | Installation, Service & Repair | Atlas Aircon",
  description: "Professional AC repair, service & installation in Padra, Gujarat. Industrial & commercial AC service. 20+ years experience, 90-day warranty. Call +91 97272 57141",
  keywords: [
    "AC repair Padra",
    "AC service Padra",
    "AC installation Padra",
    "HVAC service Padra",
    "chiller repair Padra",
    "commercial AC Padra",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-padra",
  },
};

export default function PadraCityPage() {
  return (
    <CityPageTemplate
      city="padra"
      cityDisplay="Padra"
      distance="15 km"
      state="Gujarat"
    />
  );
}
