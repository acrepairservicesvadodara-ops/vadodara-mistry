import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in Shiyabaug, Vadodara | Same Day Service | Atlas Aircon",
  description: "Best AC repair & service in Shiyabaug, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 97272 57141 for AC repair in Shiyabaug.",
  keywords: [
    "AC repair Shiyabaug",
    "AC service Shiyabaug",
    "AC repair Shiyabaug Vadodara",
    "AC service near Shiyabaug",
    "AC installation Shiyabaug",
    "split AC repair Shiyabaug",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-shiyabaug-vadodara",
  },
};

export default function ShiyabaugAreaPage() {
  return (
    <AreaPageTemplate
      area="shiyabaug"
      areaDisplay="Shiyabaug"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
