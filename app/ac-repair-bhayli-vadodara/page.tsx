import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in Bhayli, Vadodara | Same Day Service | Atlas Aircon",
  description: "Best AC repair & service in Bhayli, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 97272 57141 for AC repair in Bhayli.",
  keywords: [
    "AC repair Bhayli",
    "AC service Bhayli",
    "AC repair Bhayli Vadodara",
    "AC service near Bhayli",
    "AC installation Bhayli",
    "split AC repair Bhayli",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-bhayli-vadodara",
  },
};

export default function BhayliAreaPage() {
  return (
    <AreaPageTemplate
      area="bhayli"
      areaDisplay="Bhayli"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
