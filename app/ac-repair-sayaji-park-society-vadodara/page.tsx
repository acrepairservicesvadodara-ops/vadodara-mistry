import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in Sayaji Park Society, Vadodara | Same Day Service | Atlas Aircon",
  description: "Best AC repair & service in Sayaji Park Society, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 97272 57141 for AC repair in Sayaji Park Society.",
  keywords: [
    "AC repair Sayaji Park Society",
    "AC service Sayaji Park Society",
    "AC repair Sayaji Park Society Vadodara",
    "AC service near Sayaji Park Society",
    "AC installation Sayaji Park Society",
    "split AC repair Sayaji Park Society",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-sayaji-park-society-vadodara",
  },
};

export default function SayajiParkSocietyAreaPage() {
  return (
    <AreaPageTemplate
      area="sayaji-park-society"
      areaDisplay="Sayaji Park Society"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
