import { Metadata } from "next";
import CityPageTemplate from "@/components/CityPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair & Service in Porbandar | Installation, Service & Repair | Atlas Aircon",
  description: "Professional AC repair, service & installation in Porbandar, Gujarat. Industrial & commercial AC service. 20+ years experience, 90-day warranty. Call +91 97272 57141",
  keywords: [
    "AC repair Porbandar",
    "AC service Porbandar",
    "AC installation Porbandar",
    "HVAC service Porbandar",
    "chiller repair Porbandar",
    "commercial AC Porbandar",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-porbandar",
  },
};

export default function PorbandarCityPage() {
  return (
    <CityPageTemplate
      city="porbandar"
      cityDisplay="Porbandar"
      distance="400 km"
      state="Gujarat"
    />
  );
}
