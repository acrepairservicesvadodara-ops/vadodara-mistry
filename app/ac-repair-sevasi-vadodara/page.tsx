import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in Sevasi, Vadodara | Same Day Service | Atlas Aircon",
  description: "Best AC repair & service in Sevasi, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 97272 57141 for AC repair in Sevasi.",
  keywords: [
    "AC repair Sevasi",
    "AC service Sevasi",
    "AC repair Sevasi Vadodara",
    "AC service near Sevasi",
    "AC installation Sevasi",
    "split AC repair Sevasi",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-sevasi-vadodara",
  },
};

export default function SevasiAreaPage() {
  return (
    <AreaPageTemplate
      area="sevasi"
      areaDisplay="Sevasi"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
