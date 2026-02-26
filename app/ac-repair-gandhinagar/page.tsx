import { Metadata } from "next";
import CityPageTemplate from "@/components/CityPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair & Service in Gandhinagar | Installation, Service & Repair | Atlas Aircon",
  description: "Professional AC repair, service & installation in Gandhinagar, Gujarat. Industrial & commercial AC service. 20+ years experience, 90-day warranty. Call +91 97272 57141",
  keywords: [
    "AC repair Gandhinagar",
    "AC service Gandhinagar",
    "AC installation Gandhinagar",
    "HVAC service Gandhinagar",
    "chiller repair Gandhinagar",
    "commercial AC Gandhinagar",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-gandhinagar",
  },
};

export default function GandhinagarCityPage() {
  return (
    <CityPageTemplate
      city="gandhinagar"
      cityDisplay="Gandhinagar"
      distance="120 km"
      state="Gujarat"
    />
  );
}
