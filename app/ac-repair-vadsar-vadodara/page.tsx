import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in Vadsar, Vadodara | Same Day Service | Atlas Aircon",
  description: "Best AC repair & service in Vadsar, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 97272 57141 for AC repair in Vadsar.",
  keywords: [
    "AC repair Vadsar",
    "AC service Vadsar",
    "AC repair Vadsar Vadodara",
    "AC service near Vadsar",
    "AC installation Vadsar",
    "split AC repair Vadsar",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-vadsar-vadodara",
  },
};

export default function VadsarAreaPage() {
  return (
    <AreaPageTemplate
      area="vadsar"
      areaDisplay="Vadsar"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
