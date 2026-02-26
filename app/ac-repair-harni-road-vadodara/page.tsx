import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in Harni Road, Vadodara | Same Day Service | Atlas Aircon",
  description: "Best AC repair & service in Harni Road, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 97272 57141 for AC repair in Harni Road.",
  keywords: [
    "AC repair Harni Road",
    "AC service Harni Road",
    "AC repair Harni Road Vadodara",
    "AC service near Harni Road",
    "AC installation Harni Road",
    "split AC repair Harni Road",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-harni-road-vadodara",
  },
};

export default function HarniRoadAreaPage() {
  return (
    <AreaPageTemplate
      area="harni-road"
      areaDisplay="Harni Road"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
