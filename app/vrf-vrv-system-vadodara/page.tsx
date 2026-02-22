import { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "VRF VRV System Service in Vadodara | VRF Installation | Atlas Aircon",
  description: "Expert VRF/VRV system service in Vadodara. Daikin, Mitsubishi, LG authorized service. Installation, repair, maintenance. Call +91 97272 57141 for VRF system service.",
  keywords: [
    "VRF system Vadodara",
    "VRV system Vadodara",
    "VRF installation Vadodara",
    "VRF service Vadodara",
    "VRF repair Vadodara",
    "Daikin VRV service Vadodara",
    "VRF AMC Vadodara",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/vrf-vrv-system-vadodara",
  },
};

export default function VrfVrvSystemVadodara() {
  return (
    <ServicePageTemplate 
      service="vrf-vrv-system" 
      location="vadodara" 
      locationDisplay="Vadodara" 
    />
  );
}
