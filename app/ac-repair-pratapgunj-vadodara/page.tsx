import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in Pratapgunj, Vadodara | Same Day Service | Atlas Aircon",
  description: "Best AC repair & service in Pratapgunj, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 97272 57141 for AC repair in Pratapgunj.",
  keywords: [
    "AC repair Pratapgunj",
    "AC service Pratapgunj",
    "AC repair Pratapgunj Vadodara",
    "AC service near Pratapgunj",
    "AC installation Pratapgunj",
    "split AC repair Pratapgunj",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-pratapgunj-vadodara",
  },
};

export default function PratapgunjAreaPage() {
  return (
    <AreaPageTemplate
      area="pratapgunj"
      areaDisplay="Pratapgunj"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
