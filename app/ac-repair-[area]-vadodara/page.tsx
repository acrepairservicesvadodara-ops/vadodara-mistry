import { Metadata } from "next";
import { notFound } from "next/navigation";
import AreaPageTemplate from "@/components/AreaPageTemplate";

// 40 Vadodara Areas
export const vadodaraAreas = [
  { name: "Alkapuri", slug: "alkapuri" },
  { name: "Gotri", slug: "gotri" },
  { name: "Manjalpur", slug: "manjalpur" },
  { name: "Akota", slug: "akota" },
  { name: "Fatehgunj", slug: "fatehgunj" },
  { name: "Karelibaug", slug: "karelibaug" },
  { name: "Sayajigunj", slug: "sayajigunj" },
  { name: "Waghodia", slug: "waghodia" },
  { name: "Harni", slug: "harni" },
  { name: "Vasna", slug: "vasna" },
  { name: "Sama", slug: "sama" },
  { name: "Tandalja", slug: "tandalja" },
  { name: "Subhanpura", slug: "subhanpura" },
  { name: "Gorwa", slug: "gorwa" },
  { name: "Nizampura", slug: "nizampura" },
  { name: "Atladara", slug: "atladara" },
  { name: "Chhani", slug: "chhani" },
  { name: "Tarsali", slug: "tarsali" },
  { name: "Makarpura", slug: "makarpura" },
  { name: "Ajwa Road", slug: "ajwa-road" },
  { name: "Vadsar", slug: "vadsar" },
  { name: "Sevasi", slug: "sevasi" },
  { name: "Sama Savli Road", slug: "sama-savli-road" },
  { name: "New VIP Road", slug: "new-vip-road" },
  { name: "Old Padra Road", slug: "old-padra-road" },
  { name: "New Sama Road", slug: "new-sama-road" },
  { name: "TP Road", slug: "tp-road" },
  { name: "Race Course", slug: "race-course" },
  { name: "Ellora Park", slug: "ellora-park" },
  { name: "Pratap Nagar", slug: "pratap-nagar" },
  { name: "Vasundhara", slug: "vasundhara" },
  { name: "GIDC Makarpura", slug: "gidc-makarpura" },
  { name: "Nandesari", slug: "nandesari" },
  { name: "Savli", slug: "savli" },
  { name: "Halol Road", slug: "halol-road" },
  { name: "Dabhoi Road", slug: "dabhoi-road" },
  { name: "Karjan", slug: "karjan" },
  { name: "Padra", slug: "padra" },
  { name: "Shinor", slug: "shinor" },
  { name: "Panchmahal Road", slug: "panchmahal-road" },
];

export async function generateStaticParams() {
  return vadodaraAreas.map((area) => ({
    area: area.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ area: string }> }): Promise<Metadata> {
  const { area } = await params;
  const areaData = vadodaraAreas.find((a) => a.slug === area);
  
  if (!areaData) {
    return {
      title: "Area Not Found",
    };
  }

  return {
    title: `AC Repair in ${areaData.name}, Vadodara | Same Day Service | Atlas Aircon`,
    description: `Best AC repair & service in ${areaData.name}, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 97272 57141 for AC repair in ${areaData.name}.`,
    keywords: [
      `AC repair ${areaData.name}`,
      `AC service ${areaData.name}`,
      `AC repair ${areaData.name} Vadodara`,
      `AC service near ${areaData.name}`,
      `AC installation ${areaData.name}`,
      `split AC repair ${areaData.name}`,
    ],
    alternates: {
      canonical: `https://atlasaircons.com/ac-repair-${area}-vadodara`,
    },
  };
}

export default async function AreaPage({ params }: { params: Promise<{ area: string }> }) {
  const { area } = await params;
  const areaData = vadodaraAreas.find((a) => a.slug === area);

  if (!areaData) {
    notFound();
  }

  // Get nearby areas (exclude current area)
  const nearbyAreas = vadodaraAreas
    .filter((a) => a.slug !== area)
    .slice(0, 12);

  return (
    <AreaPageTemplate
      area={area}
      areaDisplay={areaData.name}
      city="vadodara"
      cityDisplay="Vadodara"
      nearbyAreas={nearbyAreas}
    />
  );
}
