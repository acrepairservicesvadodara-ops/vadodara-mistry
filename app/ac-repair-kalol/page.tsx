import { Metadata } from "next";
import CityPageTemplate from "@/components/CityPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair & Service in Kalol | Installation, Service & Repair | Atlas Aircon",
  description: "Professional AC repair, service & installation in Kalol, Gujarat. Industrial & commercial AC service. 20+ years experience, 90-day warranty. Call +91 97272 57141",
  keywords: [
    "AC repair Kalol",
    "AC service Kalol",
    "AC installation Kalol",
    "HVAC service Kalol",
    "chiller repair Kalol",
    "commercial AC Kalol",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-kalol",
  },
};

export default function KalolCityPage() {
  return (
    <CityPageTemplate
      city="kalol"
      cityDisplay="Kalol"
      distance="90 km"
      state="Gujarat"
    />
  );
}
