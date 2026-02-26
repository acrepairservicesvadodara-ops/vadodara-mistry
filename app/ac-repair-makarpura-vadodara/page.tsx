import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in Makarpura, Vadodara | Same Day Service | Atlas Aircon",
  description: "Best AC repair & service in Makarpura, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 97272 57141 for AC repair in Makarpura.",
  keywords: [
    "AC repair Makarpura",
    "AC service Makarpura",
    "AC repair Makarpura Vadodara",
    "AC service near Makarpura",
    "AC installation Makarpura",
    "split AC repair Makarpura",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-makarpura-vadodara",
  },
};

export default function MakarpuraAreaPage() {
  return (
    <AreaPageTemplate
      area="makarpura"
      areaDisplay="Makarpura"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
