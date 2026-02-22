import { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "AC Service in Vadodara | AC Cleaning & Maintenance | Atlas Aircon",
  description: "Professional AC service in Vadodara. Deep cleaning, gas check, filter cleaning starting ₹399. All brands covered. Call +91 97272 57141 for same-day AC service.",
  keywords: [
    "AC service Vadodara",
    "AC servicing Vadodara",
    "AC cleaning service Vadodara",
    "AC maintenance Vadodara",
    "split AC service Vadodara",
    "AC deep cleaning Vadodara",
    "AC jet cleaning Vadodara",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-service-vadodara",
  },
};

export default function ACServiceVadodara() {
  return (
    <ServicePageTemplate 
      service="ac-service" 
      location="vadodara" 
      locationDisplay="Vadodara" 
    />
  );
}
