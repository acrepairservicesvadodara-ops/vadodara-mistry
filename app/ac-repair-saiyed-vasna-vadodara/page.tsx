import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in Saiyed Vasna, Vadodara | Same Day Service | Atlas Aircon",
  description: "Best AC repair & service in Saiyed Vasna, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 97272 57141 for AC repair in Saiyed Vasna.",
  keywords: [
    "AC repair Saiyed Vasna",
    "AC service Saiyed Vasna",
    "AC repair Saiyed Vasna Vadodara",
    "AC service near Saiyed Vasna",
    "AC installation Saiyed Vasna",
    "split AC repair Saiyed Vasna",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-saiyed-vasna-vadodara",
  },
};

export default function SaiyedVasnaAreaPage() {
  return (
    <AreaPageTemplate
      area="saiyed-vasna"
      areaDisplay="Saiyed Vasna"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
