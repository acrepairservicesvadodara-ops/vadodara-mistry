import { Metadata } from "next";
import { notFound } from "next/navigation";
import CityPageTemplate from "@/components/CityPageTemplate";

// 40 Cities within 200km of Vadodara
export const nearbyCities = [
  { name: "Ahmedabad", slug: "ahmedabad", distance: "110 km", state: "Gujarat" },
  { name: "Surat", slug: "surat", distance: "160 km", state: "Gujarat" },
  { name: "Bharuch", slug: "bharuch", distance: "72 km", state: "Gujarat" },
  { name: "Anand", slug: "anand", distance: "40 km", state: "Gujarat" },
  { name: "Nadiad", slug: "nadiad", distance: "55 km", state: "Gujarat" },
  { name: "Gandhinagar", slug: "gandhinagar", distance: "130 km", state: "Gujarat" },
  { name: "Rajkot", slug: "rajkot", distance: "220 km", state: "Gujarat" },
  { name: "Godhra", slug: "godhra", distance: "60 km", state: "Gujarat" },
  { name: "Dahod", slug: "dahod", distance: "110 km", state: "Gujarat" },
  { name: "Halol", slug: "halol", distance: "40 km", state: "Gujarat" },
  { name: "Ankleshwar", slug: "ankleshwar", distance: "90 km", state: "Gujarat" },
  { name: "Dahej", slug: "dahej", distance: "95 km", state: "Gujarat" },
  { name: "Navsari", slug: "navsari", distance: "180 km", state: "Gujarat" },
  { name: "Vapi", slug: "vapi", distance: "200 km", state: "Gujarat" },
  { name: "Valsad", slug: "valsad", distance: "195 km", state: "Gujarat" },
  { name: "Kheda", slug: "kheda", distance: "65 km", state: "Gujarat" },
  { name: "Petlad", slug: "petlad", distance: "50 km", state: "Gujarat" },
  { name: "Borsad", slug: "borsad", distance: "45 km", state: "Gujarat" },
  { name: "Mehsana", slug: "mehsana", distance: "175 km", state: "Gujarat" },
  { name: "Palanpur", slug: "palanpur", distance: "200 km", state: "Gujarat" },
  { name: "Himmatnagar", slug: "himmatnagar", distance: "145 km", state: "Gujarat" },
  { name: "Modasa", slug: "modasa", distance: "130 km", state: "Gujarat" },
  { name: "Lunawada", slug: "lunawada", distance: "85 km", state: "Gujarat" },
  { name: "Santrampur", slug: "santrampur", distance: "115 km", state: "Gujarat" },
  { name: "Chhota Udaipur", slug: "chhota-udaipur", distance: "80 km", state: "Gujarat" },
  { name: "Dabhoi", slug: "dabhoi", distance: "30 km", state: "Gujarat" },
  { name: "Sankheda", slug: "sankheda", distance: "45 km", state: "Gujarat" },
  { name: "Bodeli", slug: "bodeli", distance: "50 km", state: "Gujarat" },
  { name: "Jetpur Pavi", slug: "jetpur-pavi", distance: "55 km", state: "Gujarat" },
  { name: "Savli", slug: "savli", distance: "25 km", state: "Gujarat" },
  { name: "Karjan", slug: "karjan", distance: "32 km", state: "Gujarat" },
  { name: "Padra", slug: "padra", distance: "18 km", state: "Gujarat" },
  { name: "Jambusar", slug: "jambusar", distance: "65 km", state: "Gujarat" },
  { name: "Amod", slug: "amod", distance: "55 km", state: "Gujarat" },
  { name: "Umreth", slug: "umreth", distance: "60 km", state: "Gujarat" },
  { name: "Kapadvanj", slug: "kapadvanj", distance: "80 km", state: "Gujarat" },
  { name: "Cambay", slug: "cambay", distance: "85 km", state: "Gujarat" },
  { name: "Tarapur", slug: "tarapur", distance: "90 km", state: "Gujarat" },
  { name: "Billimora", slug: "billimora", distance: "175 km", state: "Gujarat" },
  { name: "Broach", slug: "broach", distance: "72 km", state: "Gujarat" },
];

export async function generateStaticParams() {
  return nearbyCities.map((city) => ({
    city: city.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city } = await params;
  const cityData = nearbyCities.find((c) => c.slug === city);
  
  if (!cityData) {
    return {
      title: "City Not Found",
    };
  }

  return {
    title: `AC Repair in ${cityData.name} | AC Service | Atlas Aircon`,
    description: `Professional AC repair & service in ${cityData.name}, ${cityData.state}. Expert technicians, all brands covered, 90-day warranty. Call +91 97272 57141 for AC service in ${cityData.name}.`,
    keywords: [
      `AC repair ${cityData.name}`,
      `AC service ${cityData.name}`,
      `AC repair in ${cityData.name}`,
      `AC installation ${cityData.name}`,
      `best AC repair ${cityData.name}`,
      `AC technician ${cityData.name}`,
    ],
    alternates: {
      canonical: `https://atlasaircons.com/ac-repair-${city}`,
    },
  };
}

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const cityData = nearbyCities.find((c) => c.slug === city);

  if (!cityData) {
    notFound();
  }

  // Get nearby cities (exclude current)
  const nearby = nearbyCities
    .filter((c) => c.slug !== city)
    .slice(0, 12);

  return (
    <CityPageTemplate
      city={city}
      cityDisplay={cityData.name}
      distance={cityData.distance}
      state={cityData.state}
      nearbyCities={nearby}
    />
  );
}
