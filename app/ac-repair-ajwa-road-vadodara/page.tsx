import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in Ajwa Road, Vadodara | Same Day Service | Atlas Aircon",
  description: "Best AC repair & service in Ajwa Road, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 97272 57141 for AC repair in Ajwa Road.",
  keywords: [
    "AC repair Ajwa Road",
    "AC service Ajwa Road",
    "AC repair Ajwa Road Vadodara",
    "AC service near Ajwa Road",
    "AC installation Ajwa Road",
    "split AC repair Ajwa Road",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-ajwa-road-vadodara",
  },
};

export default function AjwaRoadAreaPage() {
  return (
    <AreaPageTemplate
      area="ajwa-road"
      areaDisplay="Ajwa Road"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
