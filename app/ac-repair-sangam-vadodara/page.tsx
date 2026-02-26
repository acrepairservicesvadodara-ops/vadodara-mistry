import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in Sangam, Vadodara | Same Day Service | Atlas Aircon",
  description: "Best AC repair & service in Sangam, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 97272 57141 for AC repair in Sangam.",
  keywords: [
    "AC repair Sangam",
    "AC service Sangam",
    "AC repair Sangam Vadodara",
    "AC service near Sangam",
    "AC installation Sangam",
    "split AC repair Sangam",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-sangam-vadodara",
  },
};

export default function SangamAreaPage() {
  return (
    <AreaPageTemplate
      area="sangam"
      areaDisplay="Sangam"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
