import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in New Sama Road, Vadodara | Same Day Service | Atlas Aircon",
  description: "Best AC repair & service in New Sama Road, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 97272 57141 for AC repair in New Sama Road.",
  keywords: [
    "AC repair New Sama Road",
    "AC service New Sama Road",
    "AC repair New Sama Road Vadodara",
    "AC service near New Sama Road",
    "AC installation New Sama Road",
    "split AC repair New Sama Road",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-new-sama-road-vadodara",
  },
};

export default function NewSamaRoadAreaPage() {
  return (
    <AreaPageTemplate
      area="new-sama-road"
      areaDisplay="New Sama Road"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
