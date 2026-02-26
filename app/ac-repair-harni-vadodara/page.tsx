import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in Harni, Vadodara | Same Day Service | Atlas Aircon",
  description: "Best AC repair & service in Harni, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 97272 57141 for AC repair in Harni.",
  keywords: [
    "AC repair Harni",
    "AC service Harni",
    "AC repair Harni Vadodara",
    "AC service near Harni",
    "AC installation Harni",
    "split AC repair Harni",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-harni-vadodara",
  },
};

export default function HarniAreaPage() {
  return (
    <AreaPageTemplate
      area="harni"
      areaDisplay="Harni"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
