import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in New Sama, Vadodara | Same Day Service | Atlas Aircon",
  description: "Best AC repair & service in New Sama, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 97272 57141 for AC repair in New Sama.",
  keywords: [
    "AC repair New Sama",
    "AC service New Sama",
    "AC repair New Sama Vadodara",
    "AC service near New Sama",
    "AC installation New Sama",
    "split AC repair New Sama",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-new-sama-vadodara",
  },
};

export default function NewSamaAreaPage() {
  return (
    <AreaPageTemplate
      area="new-sama"
      areaDisplay="New Sama"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
