import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in Soma Talav, Vadodara | Same Day Service | Atlas Aircon",
  description: "Best AC repair & service in Soma Talav, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 97272 57141 for AC repair in Soma Talav.",
  keywords: [
    "AC repair Soma Talav",
    "AC service Soma Talav",
    "AC repair Soma Talav Vadodara",
    "AC service near Soma Talav",
    "AC installation Soma Talav",
    "split AC repair Soma Talav",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-soma-talav-vadodara",
  },
};

export default function SomaTalavAreaPage() {
  return (
    <AreaPageTemplate
      area="soma-talav"
      areaDisplay="Soma Talav"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
