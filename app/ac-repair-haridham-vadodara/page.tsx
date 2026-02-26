import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in Haridham, Vadodara | Same Day Service | Atlas Aircon",
  description: "Best AC repair & service in Haridham, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 97272 57141 for AC repair in Haridham.",
  keywords: [
    "AC repair Haridham",
    "AC service Haridham",
    "AC repair Haridham Vadodara",
    "AC service near Haridham",
    "AC installation Haridham",
    "split AC repair Haridham",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-haridham-vadodara",
  },
};

export default function HaridhamAreaPage() {
  return (
    <AreaPageTemplate
      area="haridham"
      areaDisplay="Haridham"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
