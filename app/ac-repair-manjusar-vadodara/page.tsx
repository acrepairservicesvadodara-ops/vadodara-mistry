import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in Manjusar, Vadodara | Same Day Service | Atlas Aircon",
  description: "Best AC repair & service in Manjusar, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 97272 57141 for AC repair in Manjusar.",
  keywords: [
    "AC repair Manjusar",
    "AC service Manjusar",
    "AC repair Manjusar Vadodara",
    "AC service near Manjusar",
    "AC installation Manjusar",
    "split AC repair Manjusar",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-manjusar-vadodara",
  },
};

export default function ManjusarAreaPage() {
  return (
    <AreaPageTemplate
      area="manjusar"
      areaDisplay="Manjusar"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
