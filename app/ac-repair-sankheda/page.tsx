import { Metadata } from "next";
import CityPageTemplate from "@/components/CityPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair & Service in Sankheda | Installation, Service & Repair | Atlas Aircon",
  description: "Professional AC repair, service & installation in Sankheda, Gujarat. Industrial & commercial AC service. 20+ years experience, 90-day warranty. Call +91 97272 57141",
  keywords: [
    "AC repair Sankheda",
    "AC service Sankheda",
    "AC installation Sankheda",
    "HVAC service Sankheda",
    "chiller repair Sankheda",
    "commercial AC Sankheda",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-sankheda",
  },
};

export default function SankhedaCityPage() {
  return (
    <CityPageTemplate
      city="sankheda"
      cityDisplay="Sankheda"
      distance="35 km"
      state="Gujarat"
    />
  );
}
