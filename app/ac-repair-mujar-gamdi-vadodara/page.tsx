import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in Mujar Gamdi, Vadodara | Same Day Service | Atlas Aircon",
  description: "Best AC repair & service in Mujar Gamdi, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 97272 57141 for AC repair in Mujar Gamdi.",
  keywords: [
    "AC repair Mujar Gamdi",
    "AC service Mujar Gamdi",
    "AC repair Mujar Gamdi Vadodara",
    "AC service near Mujar Gamdi",
    "AC installation Mujar Gamdi",
    "split AC repair Mujar Gamdi",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-mujar-gamdi-vadodara",
  },
};

export default function MujarGamdiAreaPage() {
  return (
    <AreaPageTemplate
      area="mujar-gamdi"
      areaDisplay="Mujar Gamdi"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
