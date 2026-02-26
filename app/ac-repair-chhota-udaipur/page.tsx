import { Metadata } from "next";
import CityPageTemplate from "@/components/CityPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair & Service in Chhota Udaipur | Installation, Service & Repair | Atlas Aircon",
  description: "Professional AC repair, service & installation in Chhota Udaipur, Gujarat. Industrial & commercial AC service. 20+ years experience, 90-day warranty. Call +91 97272 57141",
  keywords: [
    "AC repair Chhota Udaipur",
    "AC service Chhota Udaipur",
    "AC installation Chhota Udaipur",
    "HVAC service Chhota Udaipur",
    "chiller repair Chhota Udaipur",
    "commercial AC Chhota Udaipur",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-chhota-udaipur",
  },
};

export default function ChhotaUdaipurCityPage() {
  return (
    <CityPageTemplate
      city="chhota-udaipur"
      cityDisplay="Chhota Udaipur"
      distance="90 km"
      state="Gujarat"
    />
  );
}
