import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import website from './src/lib/config/website.js';

const __dirname = path.resolve();
const iconsDirectory = path.join(__dirname, 'static/icons');
const manifestFile = path.join(__dirname, 'static/manifest.json');

const { backgroundColor, icon, siteShortTitle, siteTitle, themeColor } = website;
const DEFAULT_SIZES = [128, 144, 152, 192, 256, 512];

const iconImage = sharp(icon);

const resizeIcon = async ({ size, path }) => {
  await iconImage.resize(size).toFile(path, (err) => {
    if (err) {
      console.error(err);
    }
  });
};

const main = async () => {
  try {
    const { height, width } = await iconImage.metadata();
    const maxSize = Math.min(width, height);
    const sizes = DEFAULT_SIZES.filter((element) => element <= maxSize);

    const manifest = {
      name: siteTitle,
      short_name: siteShortTitle,
      start_url: '/index.html',
      background_color: backgroundColor,
      theme_color: themeColor,
      display: 'standalone',
      icons: sizes.map((size) => {
        const path = `icons/icon-${size}x${size}.png`;
        resizeIcon({ size, path: `static/${path}` });

        return {
          src: path,
          sizes: `${size}x${size}`,
          type: 'image/png',
          purpose: 'any maskable',
        };
      }),
    };

    fs.writeFileSync(manifestFile, JSON.stringify(manifest, null, 2));
  } catch (error) {
    console.error(error);
  }
};

console.log('Generating manifest.json');
fs.mkdir(iconsDirectory, { recursive: true }, (err) => {
  if (err) {
    return console.error(err);
  }
});

main();
