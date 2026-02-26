import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in Desar, Vadodara | Same Day Service | Atlas Aircon",
  description: "Best AC repair & service in Desar, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 97272 57141 for AC repair in Desar.",
  keywords: [
    "AC repair Desar",
    "AC service Desar",
    "AC repair Desar Vadodara",
    "AC service near Desar",
    "AC installation Desar",
    "split AC repair Desar",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-desar-vadodara",
  },
};

export default function DesarAreaPage() {
  return (
    <AreaPageTemplate
      area="desar"
      areaDisplay="Desar"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
