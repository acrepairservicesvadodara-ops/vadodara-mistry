import { Metadata } from "next";
import CityPageTemplate from "@/components/CityPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair & Service in Bhavnagar | Installation, Service & Repair | Atlas Aircon",
  description: "Professional AC repair, service & installation in Bhavnagar, Gujarat. Industrial & commercial AC service. 20+ years experience, 90-day warranty. Call +91 97272 57141",
  keywords: [
    "AC repair Bhavnagar",
    "AC service Bhavnagar",
    "AC installation Bhavnagar",
    "HVAC service Bhavnagar",
    "chiller repair Bhavnagar",
    "commercial AC Bhavnagar",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-bhavnagar",
  },
};

export default function BhavnagarCityPage() {
  return (
    <CityPageTemplate
      city="bhavnagar"
      cityDisplay="Bhavnagar"
      distance="200 km"
      state="Gujarat"
    />
  );
}
