import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in Gorwa, Vadodara | Same Day Service | Atlas Aircon",
  description: "Best AC repair & service in Gorwa, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 97272 57141 for AC repair in Gorwa.",
  keywords: [
    "AC repair Gorwa",
    "AC service Gorwa",
    "AC repair Gorwa Vadodara",
    "AC service near Gorwa",
    "AC installation Gorwa",
    "split AC repair Gorwa",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-gorwa-vadodara",
  },
};

export default function GorwaAreaPage() {
  return (
    <AreaPageTemplate
      area="gorwa"
      areaDisplay="Gorwa"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
