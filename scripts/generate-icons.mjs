import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import pngToIco from 'png-to-ico';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');
const appDir = path.join(__dirname, '..', 'app');

const faviconSvg = fs.readFileSync(path.join(publicDir, 'favicon.svg'));

async function generateIcons() {
  // Generate icon-192.png
  await sharp(faviconSvg)
    .resize(192, 192)
    .png()
    .toFile(path.join(publicDir, 'icon-192.png'));
  console.log('✓ Generated icon-192.png');

  // Generate icon-512.png
  await sharp(faviconSvg)
    .resize(512, 512)
    .png()
    .toFile(path.join(publicDir, 'icon-512.png'));
  console.log('✓ Generated icon-512.png');

  // Generate apple-touch-icon.png (180x180)
  await sharp(faviconSvg)
    .resize(180, 180)
    .png()
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));
  console.log('✓ Generated apple-touch-icon.png');

  // Generate favicon PNGs for ICO creation
  const favicon16Path = path.join(appDir, 'favicon-16.png');
  const favicon32Path = path.join(appDir, 'favicon-32.png');
  const favicon48Path = path.join(appDir, 'favicon-48.png');
  
  await sharp(faviconSvg).resize(16, 16).png().toFile(favicon16Path);
  await sharp(faviconSvg).resize(32, 32).png().toFile(favicon32Path);
  await sharp(faviconSvg).resize(48, 48).png().toFile(favicon48Path);

  // Generate favicon.ico from multiple sizes
  const icoBuffer = await pngToIco([favicon16Path, favicon32Path, favicon48Path]);
  fs.writeFileSync(path.join(appDir, 'favicon.ico'), icoBuffer);
  console.log('✓ Generated favicon.ico');

  // Clean up temporary PNGs
  fs.unlinkSync(favicon16Path);
  fs.unlinkSync(favicon32Path);
  fs.unlinkSync(favicon48Path);

  console.log('\n✅ All icons generated successfully!');
}

generateIcons().catch(console.error);
