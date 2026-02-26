import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in Fatehgunj, Vadodara | Same Day Service | Atlas Aircon",
  description: "Best AC repair & service in Fatehgunj, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 97272 57141 for AC repair in Fatehgunj.",
  keywords: [
    "AC repair Fatehgunj",
    "AC service Fatehgunj",
    "AC repair Fatehgunj Vadodara",
    "AC service near Fatehgunj",
    "AC installation Fatehgunj",
    "split AC repair Fatehgunj",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-fatehgunj-vadodara",
  },
};

export default function FatehgunjAreaPage() {
  return (
    <AreaPageTemplate
      area="fatehgunj"
      areaDisplay="Fatehgunj"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
