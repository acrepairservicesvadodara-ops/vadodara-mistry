import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in Halol, Vadodara | Same Day Service | Atlas Aircon",
  description: "Best AC repair & service in Halol, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 97272 57141 for AC repair in Halol.",
  keywords: [
    "AC repair Halol",
    "AC service Halol",
    "AC repair Halol Vadodara",
    "AC service near Halol",
    "AC installation Halol",
    "split AC repair Halol",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-halol-vadodara",
  },
};

export default function HalolAreaPage() {
  return (
    <AreaPageTemplate
      area="halol"
      areaDisplay="Halol"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
