import { Metadata } from "next";
import CityPageTemplate from "@/components/CityPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair & Service in Limkheda | Installation, Service & Repair | Atlas Aircon",
  description: "Professional AC repair, service & installation in Limkheda, Gujarat. Industrial & commercial AC service. 20+ years experience, 90-day warranty. Call +91 97272 57141",
  keywords: [
    "AC repair Limkheda",
    "AC service Limkheda",
    "AC installation Limkheda",
    "HVAC service Limkheda",
    "chiller repair Limkheda",
    "commercial AC Limkheda",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-limkheda",
  },
};

export default function LimkhedaCityPage() {
  return (
    <CityPageTemplate
      city="limkheda"
      cityDisplay="Limkheda"
      distance="85 km"
      state="Gujarat"
    />
  );
}
