import { Metadata } from "next";
import CityPageTemplate from "@/components/CityPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair & Service in Palanpur | Installation, Service & Repair | Atlas Aircon",
  description: "Professional AC repair, service & installation in Palanpur, Gujarat. Industrial & commercial AC service. 20+ years experience, 90-day warranty. Call +91 97272 57141",
  keywords: [
    "AC repair Palanpur",
    "AC service Palanpur",
    "AC installation Palanpur",
    "HVAC service Palanpur",
    "chiller repair Palanpur",
    "commercial AC Palanpur",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-palanpur",
  },
};

export default function PalanpurCityPage() {
  return (
    <CityPageTemplate
      city="palanpur"
      cityDisplay="Palanpur"
      distance="200 km"
      state="Gujarat"
    />
  );
}
