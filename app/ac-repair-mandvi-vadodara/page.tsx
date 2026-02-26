import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in Mandvi, Vadodara | Same Day Service | Atlas Aircon",
  description: "Best AC repair & service in Mandvi, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 97272 57141 for AC repair in Mandvi.",
  keywords: [
    "AC repair Mandvi",
    "AC service Mandvi",
    "AC repair Mandvi Vadodara",
    "AC service near Mandvi",
    "AC installation Mandvi",
    "split AC repair Mandvi",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-mandvi-vadodara",
  },
};

export default function MandviAreaPage() {
  return (
    <AreaPageTemplate
      area="mandvi"
      areaDisplay="Mandvi"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
