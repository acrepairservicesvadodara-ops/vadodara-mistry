import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in Kendranagar, Vadodara | Same Day Service | Atlas Aircon",
  description: "Best AC repair & service in Kendranagar, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 97272 57141 for AC repair in Kendranagar.",
  keywords: [
    "AC repair Kendranagar",
    "AC service Kendranagar",
    "AC repair Kendranagar Vadodara",
    "AC service near Kendranagar",
    "AC installation Kendranagar",
    "split AC repair Kendranagar",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-kendranagar-vadodara",
  },
};

export default function KendranagarAreaPage() {
  return (
    <AreaPageTemplate
      area="kendranagar"
      areaDisplay="Kendranagar"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
