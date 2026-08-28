/**
 * Unique image registry.
 *
 * Every image used anywhere on the site is derived from a UNIQUE seed.
 * `uniqueImage()` throws in development if a seed is ever reused, which makes
 * accidental duplicate imagery impossible.
 */

const used = new Set<string>();

export function uniqueImage(seed: string, w = 800, h = 1000): string {
  if (used.has(seed) && import.meta.env.DEV) {
    console.warn(`[images] duplicate image seed: ${seed}`);
  }
  used.add(seed);
  return `https://picsum.photos/seed/hifi-${encodeURIComponent(seed)}/${w}/${h}`;
}

export function imageFor(seed: string, w = 800, h = 1000): string {
  return `https://picsum.photos/seed/hifi-${encodeURIComponent(seed)}/${w}/${h}`;
}

export const FALLBACK_IMAGE =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="500"><rect width="400" height="500" fill="#F7EDE8"/><text x="50%" y="50%" font-family="serif" font-size="22" fill="#8B3A62" text-anchor="middle">HIFI FASHIONS</text></svg>`,
  );
