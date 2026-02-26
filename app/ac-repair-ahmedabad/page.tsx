import { Metadata } from "next";
import CityPageTemplate from "@/components/CityPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair & Service in Ahmedabad | Installation, Service & Repair | Atlas Aircon",
  description: "Professional AC repair, service & installation in Ahmedabad, Gujarat. Industrial & commercial AC service. 20+ years experience, 90-day warranty. Call +91 97272 57141",
  keywords: [
    "AC repair Ahmedabad",
    "AC service Ahmedabad",
    "AC installation Ahmedabad",
    "HVAC service Ahmedabad",
    "chiller repair Ahmedabad",
    "commercial AC Ahmedabad",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-ahmedabad",
  },
};

export default function AhmedabadCityPage() {
  return (
    <CityPageTemplate
      city="ahmedabad"
      cityDisplay="Ahmedabad"
      distance="110 km"
      state="Gujarat"
    />
  );
}
