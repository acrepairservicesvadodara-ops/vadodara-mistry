import { Metadata } from "next";
import CityPageTemplate from "@/components/CityPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair & Service in Anand | Installation, Service & Repair | Atlas Aircon",
  description: "Professional AC repair, service & installation in Anand, Gujarat. Industrial & commercial AC service. 20+ years experience, 90-day warranty. Call +91 97272 57141",
  keywords: [
    "AC repair Anand",
    "AC service Anand",
    "AC installation Anand",
    "HVAC service Anand",
    "chiller repair Anand",
    "commercial AC Anand",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-anand",
  },
};

export default function AnandCityPage() {
  return (
    <CityPageTemplate
      city="anand"
      cityDisplay="Anand"
      distance="45 km"
      state="Gujarat"
    />
  );
}
