import { Metadata } from "next";
import CityPageTemplate from "@/components/CityPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair & Service in Valsad | Installation, Service & Repair | Atlas Aircon",
  description: "Professional AC repair, service & installation in Valsad, Gujarat. Industrial & commercial AC service. 20+ years experience, 90-day warranty. Call +91 97272 57141",
  keywords: [
    "AC repair Valsad",
    "AC service Valsad",
    "AC installation Valsad",
    "HVAC service Valsad",
    "chiller repair Valsad",
    "commercial AC Valsad",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-valsad",
  },
};

export default function ValsadCityPage() {
  return (
    <CityPageTemplate
      city="valsad"
      cityDisplay="Valsad"
      distance="230 km"
      state="Gujarat"
    />
  );
}
