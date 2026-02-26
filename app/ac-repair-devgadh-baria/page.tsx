import { Metadata } from "next";
import CityPageTemplate from "@/components/CityPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair & Service in Devgadh Baria | Installation, Service & Repair | Atlas Aircon",
  description: "Professional AC repair, service & installation in Devgadh Baria, Gujarat. Industrial & commercial AC service. 20+ years experience, 90-day warranty. Call +91 97272 57141",
  keywords: [
    "AC repair Devgadh Baria",
    "AC service Devgadh Baria",
    "AC installation Devgadh Baria",
    "HVAC service Devgadh Baria",
    "chiller repair Devgadh Baria",
    "commercial AC Devgadh Baria",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-devgadh-baria",
  },
};

export default function DevgadhBariaCityPage() {
  return (
    <CityPageTemplate
      city="devgadh-baria"
      cityDisplay="Devgadh Baria"
      distance="100 km"
      state="Gujarat"
    />
  );
}
