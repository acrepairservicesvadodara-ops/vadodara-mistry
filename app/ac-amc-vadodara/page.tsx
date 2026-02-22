import { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "AC AMC in Vadodara | Annual Maintenance Contract | Atlas Aircon",
  description: "Best AC AMC plans in Vadodara starting ₹999/year. Multiple services, priority support, discounted repairs. Call +91 97272 57141 for AC annual maintenance contract.",
  keywords: [
    "AC AMC Vadodara",
    "AC annual maintenance contract Vadodara",
    "AC AMC plans Vadodara",
    "AC maintenance contract Vadodara",
    "commercial AC AMC Vadodara",
    "AC AMC price Vadodara",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-amc-vadodara",
  },
};

export default function ACAmcVadodara() {
  return (
    <ServicePageTemplate 
      service="ac-amc" 
      location="vadodara" 
      locationDisplay="Vadodara" 
    />
  );
}
