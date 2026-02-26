import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in Vadodara-Anklav Road, Vadodara | Same Day Service | Atlas Aircon",
  description: "Best AC repair & service in Vadodara-Anklav Road, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 97272 57141 for AC repair in Vadodara-Anklav Road.",
  keywords: [
    "AC repair Vadodara-Anklav Road",
    "AC service Vadodara-Anklav Road",
    "AC repair Vadodara-Anklav Road Vadodara",
    "AC service near Vadodara-Anklav Road",
    "AC installation Vadodara-Anklav Road",
    "split AC repair Vadodara-Anklav Road",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-vadodara-anklav-road-vadodara",
  },
};

export default function VadodaraAnklavRoadAreaPage() {
  return (
    <AreaPageTemplate
      area="vadodara-anklav-road"
      areaDisplay="Vadodara-Anklav Road"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
