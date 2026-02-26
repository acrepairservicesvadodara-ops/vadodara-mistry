import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in Undera, Vadodara | Same Day Service | Atlas Aircon",
  description: "Best AC repair & service in Undera, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 97272 57141 for AC repair in Undera.",
  keywords: [
    "AC repair Undera",
    "AC service Undera",
    "AC repair Undera Vadodara",
    "AC service near Undera",
    "AC installation Undera",
    "split AC repair Undera",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-undera-vadodara",
  },
};

export default function UnderaAreaPage() {
  return (
    <AreaPageTemplate
      area="undera"
      areaDisplay="Undera"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
