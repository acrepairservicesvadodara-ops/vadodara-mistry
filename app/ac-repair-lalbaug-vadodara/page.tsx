import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in Lalbaug, Vadodara | Same Day Service | Atlas Aircon",
  description: "Best AC repair & service in Lalbaug, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 97272 57141 for AC repair in Lalbaug.",
  keywords: [
    "AC repair Lalbaug",
    "AC service Lalbaug",
    "AC repair Lalbaug Vadodara",
    "AC service near Lalbaug",
    "AC installation Lalbaug",
    "split AC repair Lalbaug",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-lalbaug-vadodara",
  },
};

export default function LalbaugAreaPage() {
  return (
    <AreaPageTemplate
      area="lalbaug"
      areaDisplay="Lalbaug"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
