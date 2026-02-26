import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in Kalali, Vadodara | Same Day Service | Atlas Aircon",
  description: "Best AC repair & service in Kalali, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 97272 57141 for AC repair in Kalali.",
  keywords: [
    "AC repair Kalali",
    "AC service Kalali",
    "AC repair Kalali Vadodara",
    "AC service near Kalali",
    "AC installation Kalali",
    "split AC repair Kalali",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-kalali-vadodara",
  },
};

export default function KalaliAreaPage() {
  return (
    <AreaPageTemplate
      area="kalali"
      areaDisplay="Kalali"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
