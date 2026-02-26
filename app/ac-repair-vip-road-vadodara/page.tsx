import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in VIP Road, Vadodara | Same Day Service | Atlas Aircon",
  description: "Best AC repair & service in VIP Road, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 97272 57141 for AC repair in VIP Road.",
  keywords: [
    "AC repair VIP Road",
    "AC service VIP Road",
    "AC repair VIP Road Vadodara",
    "AC service near VIP Road",
    "AC installation VIP Road",
    "split AC repair VIP Road",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-vip-road-vadodara",
  },
};

export default function VIPRoadAreaPage() {
  return (
    <AreaPageTemplate
      area="vip-road"
      areaDisplay="VIP Road"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
