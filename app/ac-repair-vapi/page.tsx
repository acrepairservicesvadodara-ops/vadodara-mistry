import { Metadata } from "next";
import CityPageTemplate from "@/components/CityPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair & Service in Vapi | Installation, Service & Repair | Atlas Aircon",
  description: "Professional AC repair, service & installation in Vapi, Gujarat. Industrial & commercial AC service. 20+ years experience, 90-day warranty. Call +91 97272 57141",
  keywords: [
    "AC repair Vapi",
    "AC service Vapi",
    "AC installation Vapi",
    "HVAC service Vapi",
    "chiller repair Vapi",
    "commercial AC Vapi",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-vapi",
  },
};

export default function VapiCityPage() {
  return (
    <CityPageTemplate
      city="vapi"
      cityDisplay="Vapi"
      distance="220 km"
      state="Gujarat"
    />
  );
}
