import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in Tarsali, Vadodara | Same Day Service | Atlas Aircon",
  description: "Best AC repair & service in Tarsali, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 97272 57141 for AC repair in Tarsali.",
  keywords: [
    "AC repair Tarsali",
    "AC service Tarsali",
    "AC repair Tarsali Vadodara",
    "AC service near Tarsali",
    "AC installation Tarsali",
    "split AC repair Tarsali",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-tarsali-vadodara",
  },
};

export default function TarsaliAreaPage() {
  return (
    <AreaPageTemplate
      area="tarsali"
      areaDisplay="Tarsali"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
