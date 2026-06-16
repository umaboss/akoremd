import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import toIco from 'to-ico';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const source = join(root, 'public', 'akoremd-logo3.png');
const background = { r: 5, g: 10, b: 20, alpha: 1 };

async function squarePng(size) {
  return sharp(source)
    .resize(size, size, { fit: 'contain', background })
    .png()
    .toBuffer();
}

async function main() {
  const [icon16, icon32, icon48, icon180, icon512] = await Promise.all([
    squarePng(16),
    squarePng(32),
    squarePng(48),
    squarePng(180),
    squarePng(512),
  ]);

  const ico = await toIco([icon16, icon32, icon48]);

  const publicDir = join(root, 'public');
  const appDir = join(root, 'app');

  await Promise.all([
    writeFile(join(publicDir, 'favicon.ico'), ico),
    writeFile(join(publicDir, 'favicon-16x16.png'), icon16),
    writeFile(join(publicDir, 'favicon-32x32.png'), icon32),
    writeFile(join(publicDir, 'apple-touch-icon.png'), icon180),
    writeFile(join(publicDir, 'icon-512.png'), icon512),
    writeFile(join(appDir, 'icon.png'), icon48),
    writeFile(join(appDir, 'apple-icon.png'), icon180),
    writeFile(join(appDir, 'favicon.ico'), ico),
  ]);

  console.log('Favicons generated from akoremd-logo3.png');
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
