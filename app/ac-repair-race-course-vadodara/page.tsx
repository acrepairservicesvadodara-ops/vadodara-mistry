import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in Race Course, Vadodara | Same Day Service | Atlas Aircon",
  description: "Best AC repair & service in Race Course, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 97272 57141 for AC repair in Race Course.",
  keywords: [
    "AC repair Race Course",
    "AC service Race Course",
    "AC repair Race Course Vadodara",
    "AC service near Race Course",
    "AC installation Race Course",
    "split AC repair Race Course",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-race-course-vadodara",
  },
};

export default function RaceCourseAreaPage() {
  return (
    <AreaPageTemplate
      area="race-course"
      areaDisplay="Race Course"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
