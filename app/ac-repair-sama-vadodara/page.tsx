import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in Sama, Vadodara | Same Day Service | Atlas Aircon",
  description: "Best AC repair & service in Sama, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 97272 57141 for AC repair in Sama.",
  keywords: [
    "AC repair Sama",
    "AC service Sama",
    "AC repair Sama Vadodara",
    "AC service near Sama",
    "AC installation Sama",
    "split AC repair Sama",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-sama-vadodara",
  },
};

export default function SamaAreaPage() {
  return (
    <AreaPageTemplate
      area="sama"
      areaDisplay="Sama"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
