import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in Vishwamitri, Vadodara | Same Day Service | Atlas Aircon",
  description: "Best AC repair & service in Vishwamitri, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 97272 57141 for AC repair in Vishwamitri.",
  keywords: [
    "AC repair Vishwamitri",
    "AC service Vishwamitri",
    "AC repair Vishwamitri Vadodara",
    "AC service near Vishwamitri",
    "AC installation Vishwamitri",
    "split AC repair Vishwamitri",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-vishwamitri-vadodara",
  },
};

export default function VishwamitriAreaPage() {
  return (
    <AreaPageTemplate
      area="vishwamitri"
      areaDisplay="Vishwamitri"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
