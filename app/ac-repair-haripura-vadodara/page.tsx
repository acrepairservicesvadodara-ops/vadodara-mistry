import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in Haripura, Vadodara | Same Day Service | Atlas Aircon",
  description: "Best AC repair & service in Haripura, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 97272 57141 for AC repair in Haripura.",
  keywords: [
    "AC repair Haripura",
    "AC service Haripura",
    "AC repair Haripura Vadodara",
    "AC service near Haripura",
    "AC installation Haripura",
    "split AC repair Haripura",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-haripura-vadodara",
  },
};

export default function HaripuraAreaPage() {
  return (
    <AreaPageTemplate
      area="haripura"
      areaDisplay="Haripura"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
