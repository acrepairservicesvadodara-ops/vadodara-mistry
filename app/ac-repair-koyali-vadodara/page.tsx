import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in Koyali, Vadodara | Same Day Service | Atlas Aircon",
  description: "Best AC repair & service in Koyali, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 97272 57141 for AC repair in Koyali.",
  keywords: [
    "AC repair Koyali",
    "AC service Koyali",
    "AC repair Koyali Vadodara",
    "AC service near Koyali",
    "AC installation Koyali",
    "split AC repair Koyali",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-koyali-vadodara",
  },
};

export default function KoyaliAreaPage() {
  return (
    <AreaPageTemplate
      area="koyali"
      areaDisplay="Koyali"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
