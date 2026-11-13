import { createRequire } from 'node:module';

// Load Tabler icons from the local @iconify-json/tabler package instead of
// the remote astroicon.dev API (which is no longer available).
const require = createRequire(import.meta.url);
const { icons, aliases = {}, width = 24, height = 24 } = require('@iconify-json/tabler/icons.json');

export default async (name: string) => {
  const icon = icons[name] ?? icons[aliases[name]?.parent];
  if (!icon) throw new Error(`Tabler icon "${name}" not found`);
  const w = icon.width ?? width;
  const h = icon.height ?? height;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">${icon.body}</svg>`;
};
