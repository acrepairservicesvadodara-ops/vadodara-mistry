import { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "AC Gas Refilling in Vadodara | AC Gas Charging | Atlas Aircon",
  description: "Professional AC gas refilling in Vadodara. R22, R32, R410A refrigerants. Leak detection included. Starting ₹800. Call +91 97272 57141 for AC gas charging service.",
  keywords: [
    "AC gas refilling Vadodara",
    "AC gas charging Vadodara",
    "AC gas top up Vadodara",
    "AC refrigerant Vadodara",
    "R22 gas refilling Vadodara",
    "R32 gas refilling Vadodara",
    "AC gas leak repair Vadodara",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-gas-refilling-vadodara",
  },
};

export default function ACGasRefillingVadodara() {
  return (
    <ServicePageTemplate 
      service="ac-gas-refilling" 
      location="vadodara" 
      locationDisplay="Vadodara" 
    />
  );
}
