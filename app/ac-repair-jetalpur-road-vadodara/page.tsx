import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in Jetalpur Road, Vadodara | Same Day Service | Atlas Aircon",
  description: "Best AC repair & service in Jetalpur Road, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 97272 57141 for AC repair in Jetalpur Road.",
  keywords: [
    "AC repair Jetalpur Road",
    "AC service Jetalpur Road",
    "AC repair Jetalpur Road Vadodara",
    "AC service near Jetalpur Road",
    "AC installation Jetalpur Road",
    "split AC repair Jetalpur Road",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-jetalpur-road-vadodara",
  },
};

export default function JetalpurRoadAreaPage() {
  return (
    <AreaPageTemplate
      area="jetalpur-road"
      areaDisplay="Jetalpur Road"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
