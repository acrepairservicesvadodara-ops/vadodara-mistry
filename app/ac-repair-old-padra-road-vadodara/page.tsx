import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in Old Padra Road, Vadodara | Same Day Service | Atlas Aircon",
  description: "Best AC repair & service in Old Padra Road, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 97272 57141 for AC repair in Old Padra Road.",
  keywords: [
    "AC repair Old Padra Road",
    "AC service Old Padra Road",
    "AC repair Old Padra Road Vadodara",
    "AC service near Old Padra Road",
    "AC installation Old Padra Road",
    "split AC repair Old Padra Road",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-old-padra-road-vadodara",
  },
};

export default function OldPadraRoadAreaPage() {
  return (
    <AreaPageTemplate
      area="old-padra-road"
      areaDisplay="Old Padra Road"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
