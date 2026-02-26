import { Metadata } from "next";
import CityPageTemplate from "@/components/CityPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair & Service in Jetpur Pavi | Installation, Service & Repair | Atlas Aircon",
  description: "Professional AC repair, service & installation in Jetpur Pavi, Gujarat. Industrial & commercial AC service. 20+ years experience, 90-day warranty. Call +91 97272 57141",
  keywords: [
    "AC repair Jetpur Pavi",
    "AC service Jetpur Pavi",
    "AC installation Jetpur Pavi",
    "HVAC service Jetpur Pavi",
    "chiller repair Jetpur Pavi",
    "commercial AC Jetpur Pavi",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-jetpur-pavi",
  },
};

export default function JetpurPaviCityPage() {
  return (
    <CityPageTemplate
      city="jetpur-pavi"
      cityDisplay="Jetpur Pavi"
      distance="55 km"
      state="Gujarat"
    />
  );
}
