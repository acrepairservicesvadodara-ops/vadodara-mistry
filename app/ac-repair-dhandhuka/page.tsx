import { Metadata } from "next";
import CityPageTemplate from "@/components/CityPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair & Service in Dhandhuka | Installation, Service & Repair | Atlas Aircon",
  description: "Professional AC repair, service & installation in Dhandhuka, Gujarat. Industrial & commercial AC service. 20+ years experience, 90-day warranty. Call +91 97272 57141",
  keywords: [
    "AC repair Dhandhuka",
    "AC service Dhandhuka",
    "AC installation Dhandhuka",
    "HVAC service Dhandhuka",
    "chiller repair Dhandhuka",
    "commercial AC Dhandhuka",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-dhandhuka",
  },
};

export default function DhandhukaCityPage() {
  return (
    <CityPageTemplate
      city="dhandhuka"
      cityDisplay="Dhandhuka"
      distance="130 km"
      state="Gujarat"
    />
  );
}
