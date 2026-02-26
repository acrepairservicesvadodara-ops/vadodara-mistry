import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in Subhanpura, Vadodara | Same Day Service | Atlas Aircon",
  description: "Best AC repair & service in Subhanpura, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 97272 57141 for AC repair in Subhanpura.",
  keywords: [
    "AC repair Subhanpura",
    "AC service Subhanpura",
    "AC repair Subhanpura Vadodara",
    "AC service near Subhanpura",
    "AC installation Subhanpura",
    "split AC repair Subhanpura",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-subhanpura-vadodara",
  },
};

export default function SubhanpuraAreaPage() {
  return (
    <AreaPageTemplate
      area="subhanpura"
      areaDisplay="Subhanpura"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
