import { Metadata } from "next";
import CityPageTemplate from "@/components/CityPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair & Service in Ankleshwar | Installation, Service & Repair | Atlas Aircon",
  description: "Professional AC repair, service & installation in Ankleshwar, Gujarat. Industrial & commercial AC service. 20+ years experience, 90-day warranty. Call +91 97272 57141",
  keywords: [
    "AC repair Ankleshwar",
    "AC service Ankleshwar",
    "AC installation Ankleshwar",
    "HVAC service Ankleshwar",
    "chiller repair Ankleshwar",
    "commercial AC Ankleshwar",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-ankleshwar",
  },
};

export default function AnkleshwarCityPage() {
  return (
    <CityPageTemplate
      city="ankleshwar"
      cityDisplay="Ankleshwar"
      distance="70 km"
      state="Gujarat"
    />
  );
}
