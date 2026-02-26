import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in Ranoli, Vadodara | Same Day Service | Atlas Aircon",
  description: "Best AC repair & service in Ranoli, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 97272 57141 for AC repair in Ranoli.",
  keywords: [
    "AC repair Ranoli",
    "AC service Ranoli",
    "AC repair Ranoli Vadodara",
    "AC service near Ranoli",
    "AC installation Ranoli",
    "split AC repair Ranoli",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-ranoli-vadodara",
  },
};

export default function RanoliAreaPage() {
  return (
    <AreaPageTemplate
      area="ranoli"
      areaDisplay="Ranoli"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
