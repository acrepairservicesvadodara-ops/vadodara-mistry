import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in Padra Road, Vadodara | Same Day Service | Atlas Aircon",
  description: "Best AC repair & service in Padra Road, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 97272 57141 for AC repair in Padra Road.",
  keywords: [
    "AC repair Padra Road",
    "AC service Padra Road",
    "AC repair Padra Road Vadodara",
    "AC service near Padra Road",
    "AC installation Padra Road",
    "split AC repair Padra Road",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-padra-road-vadodara",
  },
};

export default function PadraRoadAreaPage() {
  return (
    <AreaPageTemplate
      area="padra-road"
      areaDisplay="Padra Road"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
