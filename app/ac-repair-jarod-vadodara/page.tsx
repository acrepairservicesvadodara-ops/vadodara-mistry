import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in Jarod, Vadodara | Same Day Service | Atlas Aircon",
  description: "Best AC repair & service in Jarod, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 97272 57141 for AC repair in Jarod.",
  keywords: [
    "AC repair Jarod",
    "AC service Jarod",
    "AC repair Jarod Vadodara",
    "AC service near Jarod",
    "AC installation Jarod",
    "split AC repair Jarod",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-jarod-vadodara",
  },
};

export default function JarodAreaPage() {
  return (
    <AreaPageTemplate
      area="jarod"
      areaDisplay="Jarod"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
