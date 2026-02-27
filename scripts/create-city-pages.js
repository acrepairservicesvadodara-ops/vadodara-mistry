const fs = require('fs');
const path = require('path');

const cities = [
  { slug: "ankleshwar", name: "Ankleshwar", distance: "70 km", state: "Gujarat" },
  { slug: "bharuch", name: "Bharuch", distance: "75 km", state: "Gujarat" },
  { slug: "ahmedabad", name: "Ahmedabad", distance: "110 km", state: "Gujarat" },
  { slug: "surat", name: "Surat", distance: "150 km", state: "Gujarat" },
  { slug: "anand", name: "Anand", distance: "45 km", state: "Gujarat" },
  { slug: "nadiad", name: "Nadiad", distance: "50 km", state: "Gujarat" },
  { slug: "godhra", name: "Godhra", distance: "60 km", state: "Gujarat" },
  { slug: "dahod", name: "Dahod", distance: "120 km", state: "Gujarat" },
  { slug: "halol", name: "Halol", distance: "40 km", state: "Gujarat" },
  { slug: "kalol", name: "Kalol", distance: "90 km", state: "Gujarat" },
  { slug: "gandhinagar", name: "Gandhinagar", distance: "120 km", state: "Gujarat" },
  { slug: "mehsana", name: "Mehsana", distance: "150 km", state: "Gujarat" },
  { slug: "rajkot", name: "Rajkot", distance: "250 km", state: "Gujarat" },
  { slug: "junagadh", name: "Junagadh", distance: "300 km", state: "Gujarat" },
  { slug: "bhavnagar", name: "Bhavnagar", distance: "200 km", state: "Gujarat" },
  { slug: "jamnagar", name: "Jamnagar", distance: "350 km", state: "Gujarat" },
  { slug: "navsari", name: "Navsari", distance: "180 km", state: "Gujarat" },
  { slug: "vapi", name: "Vapi", distance: "220 km", state: "Gujarat" },
  { slug: "valsad", name: "Valsad", distance: "230 km", state: "Gujarat" },
  { slug: "porbandar", name: "Porbandar", distance: "400 km", state: "Gujarat" },
  { slug: "morbi", name: "Morbi", distance: "280 km", state: "Gujarat" },
  { slug: "palanpur", name: "Palanpur", distance: "200 km", state: "Gujarat" },
  { slug: "patan", name: "Patan", distance: "170 km", state: "Gujarat" },
  { slug: "surendranagar", name: "Surendranagar", distance: "180 km", state: "Gujarat" },
  { slug: "dahej", name: "Dahej", distance: "90 km", state: "Gujarat" },
  { slug: "dabhoi", name: "Dabhoi", distance: "30 km", state: "Gujarat" },
  { slug: "padra", name: "Padra", distance: "15 km", state: "Gujarat" },
  { slug: "karjan", name: "Karjan", distance: "25 km", state: "Gujarat" },
  { slug: "savli", name: "Savli", distance: "20 km", state: "Gujarat" },
  { slug: "sankheda", name: "Sankheda", distance: "35 km", state: "Gujarat" },
  { slug: "chhota-udaipur", name: "Chhota Udaipur", distance: "90 km", state: "Gujarat" },
  { slug: "bodeli", name: "Bodeli", distance: "50 km", state: "Gujarat" },
  { slug: "jetpur-pavi", name: "Jetpur Pavi", distance: "55 km", state: "Gujarat" },
  { slug: "naswadi", name: "Naswadi", distance: "45 km", state: "Gujarat" },
  { slug: "kawant", name: "Kawant", distance: "70 km", state: "Gujarat" },
  { slug: "devgadh-baria", name: "Devgadh Baria", distance: "100 km", state: "Gujarat" },
  { slug: "limkheda", name: "Limkheda", distance: "85 km", state: "Gujarat" },
  { slug: "dhandhuka", name: "Dhandhuka", distance: "130 km", state: "Gujarat" },
  { slug: "khambhat", name: "Khambhat", distance: "65 km", state: "Gujarat" },
  { slug: "borsad", name: "Borsad", distance: "55 km", state: "Gujarat" },
];

const appDir = path.join(__dirname, '..', 'app');

cities.forEach(city => {
  const folderPath = path.join(appDir, `ac-repair-${city.slug}`);
  fs.mkdirSync(folderPath, { recursive: true });
  
  let funcName = city.name.replace(/[^a-zA-Z0-9]/g, '') + 'CityPage';
  
  const content = `import { Metadata } from "next";
import CityPageTemplate from "@/components/CityPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair & Service in ${city.name} | Installation, Service & Repair | Atlas Aircon",
  description: "Professional AC repair, service & installation in ${city.name}, ${city.state}. Industrial & commercial AC service. 20+ years experience, 90-day warranty. Call +91 76003 37866",
  keywords: [
    "AC repair ${city.name}",
    "AC service ${city.name}",
    "AC installation ${city.name}",
    "HVAC service ${city.name}",
    "chiller repair ${city.name}",
    "commercial AC ${city.name}",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-repair-${city.slug}",
  },
};

export default function ${funcName}() {
  return (
    <CityPageTemplate
      city="${city.slug}"
      cityDisplay="${city.name}"
      distance="${city.distance}"
      state="${city.state}"
    />
  );
}
`;
  
  fs.writeFileSync(path.join(folderPath, 'page.tsx'), content);
});

console.log('Created ' + cities.length + ' city page folders');
