import { writeFile, unlink } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const source = join(root, 'public', 'akoremd-logo4.png');
const ALPHA_THRESHOLD = 80;
const LOGO_INSET = 0.14;

async function getTightBounds() {
  const { data, info } = await sharp(source).ensureAlpha().raw().toBuffer({ resolveWithObject: true });

  let minY = info.height;
  let maxY = 0;
  let minX = info.width;
  let maxX = 0;

  for (let y = 0; y < info.height; y++) {
    for (let x = 0; x < info.width; x++) {
      if (data[(y * info.width + x) * 4 + 3] > ALPHA_THRESHOLD) {
        minY = Math.min(minY, y);
        maxY = Math.max(maxY, y);
        minX = Math.min(minX, x);
        maxX = Math.max(maxX, x);
      }
    }
  }

  return {
    left: minX,
    top: minY,
    width: maxX - minX + 1,
    height: maxY - minY + 1,
  };
}

/** Prefer the left mark for small favicons; it stays readable in a circle. */
function faviconCrop(bounds) {
  const side = Math.min(bounds.width, bounds.height);
  const markWidth = Math.min(side, Math.round(bounds.width * 0.42));

  return {
    left: bounds.left,
    top: bounds.top + Math.floor((bounds.height - side) / 2),
    width: markWidth,
    height: side,
  };
}

function circleMask(size) {
  const radius = size / 2;
  return Buffer.from(
    `<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
      <circle cx="${radius}" cy="${radius}" r="${radius}" fill="white"/>
    </svg>`,
  );
}

async function circleIcon(size) {
  const bounds = faviconCrop(await getTightBounds());
  const inner = Math.round(size * (1 - LOGO_INSET * 2));
  const offset = Math.round((size - inner) / 2);

  const logo = await sharp(source)
    .extract(bounds)
    .resize(inner, inner, {
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();

  const framed = await sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    },
  })
    .composite([{ input: logo, top: offset, left: offset }])
    .png()
    .toBuffer();

  return sharp(framed)
    .composite([{ input: circleMask(size), blend: 'dest-in' }])
    .png()
    .toBuffer();
}

async function main() {
  const [icon16, icon32, icon48, icon180, icon512] = await Promise.all([
    circleIcon(16),
    circleIcon(32),
    circleIcon(48),
    circleIcon(180),
    circleIcon(512),
  ]);

  const publicDir = join(root, 'public');
  const appDir = join(root, 'app');
  const staleIco = join(publicDir, 'favicon.ico');

  try {
    await unlink(staleIco);
  } catch {
    // ignore if missing
  }

  await Promise.all([
    writeFile(join(publicDir, 'favicon-16x16.png'), icon16),
    writeFile(join(publicDir, 'favicon-32x32.png'), icon32),
    writeFile(join(publicDir, 'apple-touch-icon.png'), icon180),
    writeFile(join(publicDir, 'icon-512.png'), icon512),
    writeFile(join(appDir, 'icon.png'), icon48),
    writeFile(join(appDir, 'apple-icon.png'), icon180),
  ]);

  console.log('Circular favicons generated from akoremd-logo4.png');
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
