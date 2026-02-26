import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in Wadi, Vadodara | Same Day Service | Atlas Aircon",
  description: "Best AC repair & service in Wadi, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 97272 57141 for AC repair in Wadi.",
  keywords: [
    "AC repair Wadi",
    "AC service Wadi",
    "AC repair Wadi Vadodara",
    "AC service near Wadi",
    "AC installation Wadi",
    "split AC repair Wadi",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-wadi-vadodara",
  },
};

export default function WadiAreaPage() {
  return (
    <AreaPageTemplate
      area="wadi"
      areaDisplay="Wadi"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
