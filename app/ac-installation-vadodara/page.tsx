import { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "AC Installation in Vadodara | Split AC Installation | Atlas Aircon",
  description: "Professional AC installation service in Vadodara. Expert installation for split, window, cassette AC. Proper copper piping, warranty included. Call +91 97272 57141",
  keywords: [
    "AC installation Vadodara",
    "split AC installation Vadodara",
    "AC installation service Vadodara",
    "AC fitting Vadodara",
    "AC installation cost Vadodara",
    "window AC installation Vadodara",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-installation-vadodara",
  },
};

export default function ACInstallationVadodara() {
  return (
    <ServicePageTemplate 
      service="ac-installation" 
      location="vadodara" 
      locationDisplay="Vadodara" 
    />
  );
}
