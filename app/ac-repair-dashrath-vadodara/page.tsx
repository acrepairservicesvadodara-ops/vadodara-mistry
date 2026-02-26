import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in Dashrath, Vadodara | Same Day Service | Atlas Aircon",
  description: "Best AC repair & service in Dashrath, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 97272 57141 for AC repair in Dashrath.",
  keywords: [
    "AC repair Dashrath",
    "AC service Dashrath",
    "AC repair Dashrath Vadodara",
    "AC service near Dashrath",
    "AC installation Dashrath",
    "split AC repair Dashrath",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-dashrath-vadodara",
  },
};

export default function DashrathAreaPage() {
  return (
    <AreaPageTemplate
      area="dashrath"
      areaDisplay="Dashrath"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
