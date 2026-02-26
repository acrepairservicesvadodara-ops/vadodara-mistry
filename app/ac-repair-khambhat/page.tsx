import { Metadata } from "next";
import CityPageTemplate from "@/components/CityPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair & Service in Khambhat | Installation, Service & Repair | Atlas Aircon",
  description: "Professional AC repair, service & installation in Khambhat, Gujarat. Industrial & commercial AC service. 20+ years experience, 90-day warranty. Call +91 97272 57141",
  keywords: [
    "AC repair Khambhat",
    "AC service Khambhat",
    "AC installation Khambhat",
    "HVAC service Khambhat",
    "chiller repair Khambhat",
    "commercial AC Khambhat",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-khambhat",
  },
};

export default function KhambhatCityPage() {
  return (
    <CityPageTemplate
      city="khambhat"
      cityDisplay="Khambhat"
      distance="65 km"
      state="Gujarat"
    />
  );
}
