import fs from 'fs';
import path from 'path';

const dir = 'src/assets/insurance-banners';

// Minimal valid 1x1 transparent PNG (68 bytes)
const minimalPNG = Buffer.from([
  0x89,0x50,0x4E,0x47,0x0D,0x0A,0x1A,0x0A,0x00,0x00,0x00,0x0D,0x49,0x48,0x44,0x52,
  0x00,0x00,0x00,0x01,0x00,0x00,0x00,0x01,0x08,0x06,0x00,0x00,0x00,0x1F,0x15,0xC4,
  0x89,0x00,0x00,0x00,0x0A,0x49,0x44,0x41,0x54,0x78,0x9C,0x63,0x00,0x01,0x00,0x00,
  0x05,0x00,0x01,0x0D,0x0A,0x2D,0xB4,0x00,0x00,0x00,0x00,0x49,0x45,0x4E,0x44,0xAE,
  0x42,0x60,0x82
]);

const files = [
  'car-insurance',
  'comprehensive-car-insurance',
  'third-party-car-insurance',
  'zero-depreciation-insurance',
  'own-damage-insurance',
  'bike-insurance',
  'comprehensive-bike-insurance',
  'third-party-bike-insurance',
  'electric-bike-insurance',
  'individual-health-insurance',
  'family-floater-insurance',
  'senior-citizen-health-insurance',
  'critical-illness-insurance',
  'term-life-insurance',
  'whole-life-insurance',
  'child-plans',
  'retirement-plans',
  'domestic-travel-insurance',
  'international-travel-insurance',
  'student-travel-insurance',
  'commercial-vehicle-insurance',
  'shop-insurance',
  'property-insurance',
  'employee-health-insurance'
];

for (const name of files) {
  const outPath = path.join(dir, `${name}.webp`);
  fs.writeFileSync(outPath, minimalPNG);
  console.log('Wrote', outPath);
}