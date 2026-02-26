import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in Karelibaug, Vadodara | Same Day Service | Atlas Aircon",
  description: "Best AC repair & service in Karelibaug, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 97272 57141 for AC repair in Karelibaug.",
  keywords: [
    "AC repair Karelibaug",
    "AC service Karelibaug",
    "AC repair Karelibaug Vadodara",
    "AC service near Karelibaug",
    "AC installation Karelibaug",
    "split AC repair Karelibaug",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-karelibaug-vadodara",
  },
};

export default function KarelibaugAreaPage() {
  return (
    <AreaPageTemplate
      area="karelibaug"
      areaDisplay="Karelibaug"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
