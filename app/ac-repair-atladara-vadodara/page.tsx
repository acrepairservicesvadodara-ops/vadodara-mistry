import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in Atladara, Vadodara | Same Day Service | Atlas Aircon",
  description: "Best AC repair & service in Atladara, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 97272 57141 for AC repair in Atladara.",
  keywords: [
    "AC repair Atladara",
    "AC service Atladara",
    "AC repair Atladara Vadodara",
    "AC service near Atladara",
    "AC installation Atladara",
    "split AC repair Atladara",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-atladara-vadodara",
  },
};

export default function AtladaraAreaPage() {
  return (
    <AreaPageTemplate
      area="atladara"
      areaDisplay="Atladara"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
