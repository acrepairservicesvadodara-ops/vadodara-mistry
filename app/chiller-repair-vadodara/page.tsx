import { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Chiller Repair in Vadodara | Industrial Chiller Service | Atlas Aircon",
  description: "Expert chiller repair and maintenance in Vadodara. Water-cooled, air-cooled, screw chillers. 24/7 emergency service. Call +91 97272 57141 for industrial chiller repair.",
  keywords: [
    "chiller repair Vadodara",
    "industrial chiller service Vadodara",
    "chiller maintenance Vadodara",
    "water cooled chiller repair",
    "air cooled chiller repair",
    "screw chiller repair Vadodara",
    "chiller AMC Vadodara",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/chiller-repair-vadodara",
  },
};

export default function ChillerRepairVadodara() {
  return (
    <ServicePageTemplate 
      service="chiller-repair" 
      location="vadodara" 
      locationDisplay="Vadodara" 
    />
  );
}
