import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in Siddharth Nagar, Vadodara | Same Day Service | Atlas Aircon",
  description: "Best AC repair & service in Siddharth Nagar, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 97272 57141 for AC repair in Siddharth Nagar.",
  keywords: [
    "AC repair Siddharth Nagar",
    "AC service Siddharth Nagar",
    "AC repair Siddharth Nagar Vadodara",
    "AC service near Siddharth Nagar",
    "AC installation Siddharth Nagar",
    "split AC repair Siddharth Nagar",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-siddharth-nagar-vadodara",
  },
};

export default function SiddharthNagarAreaPage() {
  return (
    <AreaPageTemplate
      area="siddharth-nagar"
      areaDisplay="Siddharth Nagar"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
