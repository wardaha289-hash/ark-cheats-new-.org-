import { writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const src = process.argv[2];
if (!src) {
	console.error('Usage: node scripts/update-hero-image.mjs <source-image>');
	process.exit(1);
}

const dir = path.resolve('public/images');
const fullJpg = path.join(dir, 'ark-cheats-hero-full.jpg');
const fullPng = path.join(dir, 'ark-cheats-hero-full.png');

const fullBuffer = await sharp(src).jpeg({ quality: 88, mozjpeg: true }).toBuffer();
await writeFile(fullJpg, fullBuffer);
await writeFile(fullPng, await sharp(src).png().toBuffer());

for (const width of [640, 1024, 1536]) {
	const file = path.join(dir, `ark-cheats-hero-${width}w.webp`);
	const quality = width <= 640 ? 70 : 78;
	const buffer = await sharp(src)
		.resize({ width, withoutEnlargement: true })
		.webp({ quality, effort: 6 })
		.toBuffer();
	await writeFile(file, buffer);
	console.log(`Wrote ${path.basename(file)} (${buffer.length} bytes)`);
}

const meta = await sharp(src).metadata();
console.log(`Hero updated — ${meta.width}x${meta.height}`);
