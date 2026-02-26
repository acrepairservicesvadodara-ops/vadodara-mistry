import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in New Karelibaug, Vadodara | Same Day Service | Atlas Aircon",
  description: "Best AC repair & service in New Karelibaug, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 97272 57141 for AC repair in New Karelibaug.",
  keywords: [
    "AC repair New Karelibaug",
    "AC service New Karelibaug",
    "AC repair New Karelibaug Vadodara",
    "AC service near New Karelibaug",
    "AC installation New Karelibaug",
    "split AC repair New Karelibaug",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-new-karelibaug-vadodara",
  },
};

export default function NewKarelibaugAreaPage() {
  return (
    <AreaPageTemplate
      area="new-karelibaug"
      areaDisplay="New Karelibaug"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
