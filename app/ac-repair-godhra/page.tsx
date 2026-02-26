import { Metadata } from "next";
import CityPageTemplate from "@/components/CityPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair & Service in Godhra | Installation, Service & Repair | Atlas Aircon",
  description: "Professional AC repair, service & installation in Godhra, Gujarat. Industrial & commercial AC service. 20+ years experience, 90-day warranty. Call +91 97272 57141",
  keywords: [
    "AC repair Godhra",
    "AC service Godhra",
    "AC installation Godhra",
    "HVAC service Godhra",
    "chiller repair Godhra",
    "commercial AC Godhra",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-godhra",
  },
};

export default function GodhraCityPage() {
  return (
    <CityPageTemplate
      city="godhra"
      cityDisplay="Godhra"
      distance="60 km"
      state="Gujarat"
    />
  );
}
