import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in Mahapura, Vadodara | Same Day Service | Atlas Aircon",
  description: "Best AC repair & service in Mahapura, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 97272 57141 for AC repair in Mahapura.",
  keywords: [
    "AC repair Mahapura",
    "AC service Mahapura",
    "AC repair Mahapura Vadodara",
    "AC service near Mahapura",
    "AC installation Mahapura",
    "split AC repair Mahapura",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-mahapura-vadodara",
  },
};

export default function MahapuraAreaPage() {
  return (
    <AreaPageTemplate
      area="mahapura"
      areaDisplay="Mahapura"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
