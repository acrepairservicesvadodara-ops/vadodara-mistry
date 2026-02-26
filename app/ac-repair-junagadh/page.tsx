import { Metadata } from "next";
import CityPageTemplate from "@/components/CityPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair & Service in Junagadh | Installation, Service & Repair | Atlas Aircon",
  description: "Professional AC repair, service & installation in Junagadh, Gujarat. Industrial & commercial AC service. 20+ years experience, 90-day warranty. Call +91 97272 57141",
  keywords: [
    "AC repair Junagadh",
    "AC service Junagadh",
    "AC installation Junagadh",
    "HVAC service Junagadh",
    "chiller repair Junagadh",
    "commercial AC Junagadh",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-junagadh",
  },
};

export default function JunagadhCityPage() {
  return (
    <CityPageTemplate
      city="junagadh"
      cityDisplay="Junagadh"
      distance="300 km"
      state="Gujarat"
    />
  );
}
