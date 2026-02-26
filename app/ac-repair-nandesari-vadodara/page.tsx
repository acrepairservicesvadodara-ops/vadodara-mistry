import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in Nandesari, Vadodara | Same Day Service | Atlas Aircon",
  description: "Best AC repair & service in Nandesari, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 97272 57141 for AC repair in Nandesari.",
  keywords: [
    "AC repair Nandesari",
    "AC service Nandesari",
    "AC repair Nandesari Vadodara",
    "AC service near Nandesari",
    "AC installation Nandesari",
    "split AC repair Nandesari",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-nandesari-vadodara",
  },
};

export default function NandesariAreaPage() {
  return (
    <AreaPageTemplate
      area="nandesari"
      areaDisplay="Nandesari"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
