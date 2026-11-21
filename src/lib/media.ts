import fs from 'node:fs';
import path from 'node:path';
import index from '../data/assets.json';

export interface Media {
  type: 'image' | 'video';
  src: string;
  small?: string;
  poster?: string;
  w?: number;
  h?: number;
  series?: string;
}

const PUB = path.resolve('public/work');
const base = (slug: string, f?: string) => (f ? `/work/${slug}/${f}` : undefined);

// Series label = the source folder name, tidied.
const seriesOf = (from?: string) => {
  if (!from) return undefined;
  const dir = path.basename(path.dirname(from.replace(/\\/g, '/')));
  return dir.replace(/-\d{8}T.*$/, '').replace(/_/g, "'").replace(/\(.*?\)/g, '').trim();
};

export function getMedia(slug: string): Media[] {
  const listed = (index as Record<string, any[]>)[slug];
  if (listed?.length) {
    return listed.map((m) => ({
      type: m.type, src: base(slug, m.src)!, small: base(slug, m.small), poster: base(slug, m.poster), w: m.w, h: m.h, series: seriesOf(m.from),
    }));
  }
  // Drop-in fallback: any images/videos placed straight into public/work/<slug>/
  const dir = path.join(PUB, slug);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { numeric: true } as any)
    .filter((f) => /\.(webp|jpe?g|png|avif|mp4)$/i.test(f) && !/-s\.webp$|-poster\.webp$/.test(f))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((f) => (f.endsWith('.mp4') ? { type: 'video' as const, src: base(slug, f)! } : { type: 'image' as const, src: base(slug, f)! }));
}

export function coverOf(slug: string, i = 0): Media | undefined {
  const m = getMedia(slug);
  return m[i] ?? m[0];
}
