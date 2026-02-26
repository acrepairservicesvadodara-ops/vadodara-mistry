import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in Jambuva, Vadodara | Same Day Service | Atlas Aircon",
  description: "Best AC repair & service in Jambuva, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 97272 57141 for AC repair in Jambuva.",
  keywords: [
    "AC repair Jambuva",
    "AC service Jambuva",
    "AC repair Jambuva Vadodara",
    "AC service near Jambuva",
    "AC installation Jambuva",
    "split AC repair Jambuva",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-jambuva-vadodara",
  },
};

export default function JambuvaAreaPage() {
  return (
    <AreaPageTemplate
      area="jambuva"
      areaDisplay="Jambuva"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
