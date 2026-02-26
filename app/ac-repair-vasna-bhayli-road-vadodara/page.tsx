import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in Vasna-Bhayli Road, Vadodara | Same Day Service | Atlas Aircon",
  description: "Best AC repair & service in Vasna-Bhayli Road, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 97272 57141 for AC repair in Vasna-Bhayli Road.",
  keywords: [
    "AC repair Vasna-Bhayli Road",
    "AC service Vasna-Bhayli Road",
    "AC repair Vasna-Bhayli Road Vadodara",
    "AC service near Vasna-Bhayli Road",
    "AC installation Vasna-Bhayli Road",
    "split AC repair Vasna-Bhayli Road",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-vasna-bhayli-road-vadodara",
  },
};

export default function VasnaBhayliRoadAreaPage() {
  return (
    <AreaPageTemplate
      area="vasna-bhayli-road"
      areaDisplay="Vasna-Bhayli Road"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
