import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in Kapurai Village, Vadodara | Same Day Service | Atlas Aircon",
  description: "Best AC repair & service in Kapurai Village, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 97272 57141 for AC repair in Kapurai Village.",
  keywords: [
    "AC repair Kapurai Village",
    "AC service Kapurai Village",
    "AC repair Kapurai Village Vadodara",
    "AC service near Kapurai Village",
    "AC installation Kapurai Village",
    "split AC repair Kapurai Village",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-kapurai-village-vadodara",
  },
};

export default function KapuraiVillageAreaPage() {
  return (
    <AreaPageTemplate
      area="kapurai-village"
      areaDisplay="Kapurai Village"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
