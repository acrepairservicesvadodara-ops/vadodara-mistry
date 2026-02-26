import { Metadata } from "next";
import CityPageTemplate from "@/components/CityPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair & Service in Rajkot | Installation, Service & Repair | Atlas Aircon",
  description: "Professional AC repair, service & installation in Rajkot, Gujarat. Industrial & commercial AC service. 20+ years experience, 90-day warranty. Call +91 97272 57141",
  keywords: [
    "AC repair Rajkot",
    "AC service Rajkot",
    "AC installation Rajkot",
    "HVAC service Rajkot",
    "chiller repair Rajkot",
    "commercial AC Rajkot",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-rajkot",
  },
};

export default function RajkotCityPage() {
  return (
    <CityPageTemplate
      city="rajkot"
      cityDisplay="Rajkot"
      distance="250 km"
      state="Gujarat"
    />
  );
}
