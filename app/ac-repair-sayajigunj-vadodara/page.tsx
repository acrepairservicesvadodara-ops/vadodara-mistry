import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in Sayajigunj, Vadodara | Same Day Service | Atlas Aircon",
  description: "Best AC repair & service in Sayajigunj, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 97272 57141 for AC repair in Sayajigunj.",
  keywords: [
    "AC repair Sayajigunj",
    "AC service Sayajigunj",
    "AC repair Sayajigunj Vadodara",
    "AC service near Sayajigunj",
    "AC installation Sayajigunj",
    "split AC repair Sayajigunj",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-sayajigunj-vadodara",
  },
};

export default function SayajigunjAreaPage() {
  return (
    <AreaPageTemplate
      area="sayajigunj"
      areaDisplay="Sayajigunj"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
