import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in Airport Harni Main Road, Vadodara | Same Day Service | Atlas Aircon",
  description: "Best AC repair & service in Airport Harni Main Road, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 97272 57141 for AC repair in Airport Harni Main Road.",
  keywords: [
    "AC repair Airport Harni Main Road",
    "AC service Airport Harni Main Road",
    "AC repair Airport Harni Main Road Vadodara",
    "AC service near Airport Harni Main Road",
    "AC installation Airport Harni Main Road",
    "split AC repair Airport Harni Main Road",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-airport-harni-main-road-vadodara",
  },
};

export default function AirportHarniMainRoadAreaPage() {
  return (
    <AreaPageTemplate
      area="airport-harni-main-road"
      areaDisplay="Airport Harni Main Road"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
