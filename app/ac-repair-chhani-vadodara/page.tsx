import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in Chhani, Vadodara | Same Day Service | Atlas Aircon",
  description: "Best AC repair & service in Chhani, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 97272 57141 for AC repair in Chhani.",
  keywords: [
    "AC repair Chhani",
    "AC service Chhani",
    "AC repair Chhani Vadodara",
    "AC service near Chhani",
    "AC installation Chhani",
    "split AC repair Chhani",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-chhani-vadodara",
  },
};

export default function ChhaniAreaPage() {
  return (
    <AreaPageTemplate
      area="chhani"
      areaDisplay="Chhani"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
