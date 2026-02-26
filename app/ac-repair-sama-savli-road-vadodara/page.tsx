import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in Sama-Savli Road, Vadodara | Same Day Service | Atlas Aircon",
  description: "Best AC repair & service in Sama-Savli Road, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 97272 57141 for AC repair in Sama-Savli Road.",
  keywords: [
    "AC repair Sama-Savli Road",
    "AC service Sama-Savli Road",
    "AC repair Sama-Savli Road Vadodara",
    "AC service near Sama-Savli Road",
    "AC installation Sama-Savli Road",
    "split AC repair Sama-Savli Road",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-sama-savli-road-vadodara",
  },
};

export default function SamaSavliRoadAreaPage() {
  return (
    <AreaPageTemplate
      area="sama-savli-road"
      areaDisplay="Sama-Savli Road"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
