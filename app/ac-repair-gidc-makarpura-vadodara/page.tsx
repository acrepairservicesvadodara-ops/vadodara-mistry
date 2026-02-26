import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in GIDC Makarpura, Vadodara | Same Day Service | Atlas Aircon",
  description: "Best AC repair & service in GIDC Makarpura, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 97272 57141 for AC repair in GIDC Makarpura.",
  keywords: [
    "AC repair GIDC Makarpura",
    "AC service GIDC Makarpura",
    "AC repair GIDC Makarpura Vadodara",
    "AC service near GIDC Makarpura",
    "AC installation GIDC Makarpura",
    "split AC repair GIDC Makarpura",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-gidc-makarpura-vadodara",
  },
};

export default function GIDCMakarpuraAreaPage() {
  return (
    <AreaPageTemplate
      area="gidc-makarpura"
      areaDisplay="GIDC Makarpura"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
