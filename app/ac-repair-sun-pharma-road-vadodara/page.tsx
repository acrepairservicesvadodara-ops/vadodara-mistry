import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in Sun Pharma Road, Vadodara | Same Day Service | Atlas Aircon",
  description: "Best AC repair & service in Sun Pharma Road, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 97272 57141 for AC repair in Sun Pharma Road.",
  keywords: [
    "AC repair Sun Pharma Road",
    "AC service Sun Pharma Road",
    "AC repair Sun Pharma Road Vadodara",
    "AC service near Sun Pharma Road",
    "AC installation Sun Pharma Road",
    "split AC repair Sun Pharma Road",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-sun-pharma-road-vadodara",
  },
};

export default function SunPharmaRoadAreaPage() {
  return (
    <AreaPageTemplate
      area="sun-pharma-road"
      areaDisplay="Sun Pharma Road"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
