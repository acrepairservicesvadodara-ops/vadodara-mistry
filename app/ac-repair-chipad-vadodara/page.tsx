import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in Chipad, Vadodara | Same Day Service | Atlas Aircon",
  description: "Best AC repair & service in Chipad, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 97272 57141 for AC repair in Chipad.",
  keywords: [
    "AC repair Chipad",
    "AC service Chipad",
    "AC repair Chipad Vadodara",
    "AC service near Chipad",
    "AC installation Chipad",
    "split AC repair Chipad",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-chipad-vadodara",
  },
};

export default function ChipadAreaPage() {
  return (
    <AreaPageTemplate
      area="chipad"
      areaDisplay="Chipad"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
