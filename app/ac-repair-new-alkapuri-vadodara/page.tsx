import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in New Alkapuri, Vadodara | Same Day Service | Atlas Aircon",
  description: "Best AC repair & service in New Alkapuri, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 97272 57141 for AC repair in New Alkapuri.",
  keywords: [
    "AC repair New Alkapuri",
    "AC service New Alkapuri",
    "AC repair New Alkapuri Vadodara",
    "AC service near New Alkapuri",
    "AC installation New Alkapuri",
    "split AC repair New Alkapuri",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-new-alkapuri-vadodara",
  },
};

export default function NewAlkapuriAreaPage() {
  return (
    <AreaPageTemplate
      area="new-alkapuri"
      areaDisplay="New Alkapuri"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
