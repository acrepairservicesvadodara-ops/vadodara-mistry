import { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "HVAC Service in Vadodara | Commercial HVAC Maintenance | Atlas Aircon",
  description: "Complete HVAC service in Vadodara. Central AC, AHU, duct cleaning, energy optimization. Commercial & industrial expertise. Call +91 97272 57141 for HVAC maintenance.",
  keywords: [
    "HVAC service Vadodara",
    "HVAC maintenance Vadodara",
    "central AC service Vadodara",
    "AHU service Vadodara",
    "duct cleaning Vadodara",
    "commercial HVAC Vadodara",
    "HVAC repair Vadodara",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/hvac-service-vadodara",
  },
};

export default function HvacServiceVadodara() {
  return (
    <ServicePageTemplate 
      service="hvac-service" 
      location="vadodara" 
      locationDisplay="Vadodara" 
    />
  );
}
