import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in Nizampura, Vadodara | Same Day Service | Atlas Aircon",
  description: "Best AC repair & service in Nizampura, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 97272 57141 for AC repair in Nizampura.",
  keywords: [
    "AC repair Nizampura",
    "AC service Nizampura",
    "AC repair Nizampura Vadodara",
    "AC service near Nizampura",
    "AC installation Nizampura",
    "split AC repair Nizampura",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-nizampura-vadodara",
  },
};

export default function NizampuraAreaPage() {
  return (
    <AreaPageTemplate
      area="nizampura"
      areaDisplay="Nizampura"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
