import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in Savli, Vadodara | Same Day Service | Atlas Aircon",
  description: "Best AC repair & service in Savli, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 97272 57141 for AC repair in Savli.",
  keywords: [
    "AC repair Savli",
    "AC service Savli",
    "AC repair Savli Vadodara",
    "AC service near Savli",
    "AC installation Savli",
    "split AC repair Savli",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-savli-vadodara",
  },
};

export default function SavliAreaPage() {
  return (
    <AreaPageTemplate
      area="savli"
      areaDisplay="Savli"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
