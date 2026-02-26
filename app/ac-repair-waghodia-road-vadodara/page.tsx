import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in Waghodia Road, Vadodara | Same Day Service | Atlas Aircon",
  description: "Best AC repair & service in Waghodia Road, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 97272 57141 for AC repair in Waghodia Road.",
  keywords: [
    "AC repair Waghodia Road",
    "AC service Waghodia Road",
    "AC repair Waghodia Road Vadodara",
    "AC service near Waghodia Road",
    "AC installation Waghodia Road",
    "split AC repair Waghodia Road",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-waghodia-road-vadodara",
  },
};

export default function WaghodiaRoadAreaPage() {
  return (
    <AreaPageTemplate
      area="waghodia-road"
      areaDisplay="Waghodia Road"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
