import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in Laxmipura, Vadodara | Same Day Service | Atlas Aircon",
  description: "Best AC repair & service in Laxmipura, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 97272 57141 for AC repair in Laxmipura.",
  keywords: [
    "AC repair Laxmipura",
    "AC service Laxmipura",
    "AC repair Laxmipura Vadodara",
    "AC service near Laxmipura",
    "AC installation Laxmipura",
    "split AC repair Laxmipura",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-laxmipura-vadodara",
  },
};

export default function LaxmipuraAreaPage() {
  return (
    <AreaPageTemplate
      area="laxmipura"
      areaDisplay="Laxmipura"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
