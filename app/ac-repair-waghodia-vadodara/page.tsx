import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in Waghodia, Vadodara | Same Day Service | Atlas Aircon",
  description: "Best AC repair & service in Waghodia, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 97272 57141 for AC repair in Waghodia.",
  keywords: [
    "AC repair Waghodia",
    "AC service Waghodia",
    "AC repair Waghodia Vadodara",
    "AC service near Waghodia",
    "AC installation Waghodia",
    "split AC repair Waghodia",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-waghodia-vadodara",
  },
};

export default function WaghodiaAreaPage() {
  return (
    <AreaPageTemplate
      area="waghodia"
      areaDisplay="Waghodia"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
