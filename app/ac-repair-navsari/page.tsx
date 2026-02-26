import { Metadata } from "next";
import CityPageTemplate from "@/components/CityPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair & Service in Navsari | Installation, Service & Repair | Atlas Aircon",
  description: "Professional AC repair, service & installation in Navsari, Gujarat. Industrial & commercial AC service. 20+ years experience, 90-day warranty. Call +91 97272 57141",
  keywords: [
    "AC repair Navsari",
    "AC service Navsari",
    "AC installation Navsari",
    "HVAC service Navsari",
    "chiller repair Navsari",
    "commercial AC Navsari",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-navsari",
  },
};

export default function NavsariCityPage() {
  return (
    <CityPageTemplate
      city="navsari"
      cityDisplay="Navsari"
      distance="180 km"
      state="Gujarat"
    />
  );
}
