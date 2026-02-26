import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in Chhani Jakat Naka, Vadodara | Same Day Service | Atlas Aircon",
  description: "Best AC repair & service in Chhani Jakat Naka, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 97272 57141 for AC repair in Chhani Jakat Naka.",
  keywords: [
    "AC repair Chhani Jakat Naka",
    "AC service Chhani Jakat Naka",
    "AC repair Chhani Jakat Naka Vadodara",
    "AC service near Chhani Jakat Naka",
    "AC installation Chhani Jakat Naka",
    "split AC repair Chhani Jakat Naka",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-chhani-jakat-naka-vadodara",
  },
};

export default function ChhaniJakatNakaAreaPage() {
  return (
    <AreaPageTemplate
      area="chhani-jakat-naka"
      areaDisplay="Chhani Jakat Naka"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
