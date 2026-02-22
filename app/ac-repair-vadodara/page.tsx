import { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "AC Repair Service in Vadodara | Same Day AC Repair | Atlas Aircon",
  description: "Best AC repair service in Vadodara. Expert technicians for all brands - Daikin, Voltas, LG, Samsung, Blue Star. Same-day service, 90-day warranty. Call +91 97272 57141",
  keywords: [
    "AC repair Vadodara",
    "AC repair service Vadodara",
    "AC repair near me",
    "split AC repair Vadodara",
    "window AC repair Vadodara",
    "AC not cooling repair",
    "AC gas leak repair",
    "AC compressor repair Vadodara",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-vadodara",
  },
};

export default function ACRepairVadodara() {
  return (
    <ServicePageTemplate 
      service="ac-repair" 
      location="vadodara" 
      locationDisplay="Vadodara" 
    />
  );
}
