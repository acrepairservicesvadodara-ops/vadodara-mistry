import { Metadata } from "next";
import CityPageTemplate from "@/components/CityPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair & Service in Surat | Installation, Service & Repair | Atlas Aircon",
  description: "Professional AC repair, service & installation in Surat, Gujarat. Industrial & commercial AC service. 20+ years experience, 90-day warranty. Call +91 97272 57141",
  keywords: [
    "AC repair Surat",
    "AC service Surat",
    "AC installation Surat",
    "HVAC service Surat",
    "chiller repair Surat",
    "commercial AC Surat",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-surat",
  },
};

export default function SuratCityPage() {
  return (
    <CityPageTemplate
      city="surat"
      cityDisplay="Surat"
      distance="150 km"
      state="Gujarat"
    />
  );
}
