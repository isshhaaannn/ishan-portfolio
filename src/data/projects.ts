// Every card in the set. To add work: run the asset script (or drop files into public/work/<slug>/),
// then add one entry here. Order = order in the binder.

export type SetKey = 'carousels' | 'brand' | 'motion' | 'ads';

export interface Stat { value: number; suffix: string; label: string }

export interface Project {
  slug: string;
  name: string;          // nameplate on the card
  team: string;          // client / brand line
  set: SetKey;
  position: string;      // what I played, sports-card style
  flagship?: boolean;
  stats?: Stat[];        // only real, confirmed numbers
  blurb: string;         // one or two warm first-person sentences
  story?: { title: string; body: string }[];
  cover?: number;        // index into media to use as card front (default 0)
}

export const SETS: Record<SetKey, string> = {
  carousels: 'Carousels & Social',
  brand: 'Brand & Print',
  motion: 'Motion & Film',
  ads: 'Ads & AI Shoots',
};

export const CAREER = [
  { value: 40, suffix: 'M+', label: 'views from Instagram carousels alone' },
  { value: 5, suffix: 'M+', label: 'views on Steven Bartlett carousels' },
  { value: 2, suffix: 'M+', label: 'views for Metro Media House' },
];

export const PROJECTS: Project[] = [
  {
    slug: 'steven-bartlett', name: 'Steven Bartlett', team: 'The Diary of a CEO', set: 'carousels', position: 'Carousels · Founder brand',
    flagship: true, stats: [{ value: 5, suffix: 'M+', label: 'views' }],
    blurb: 'I turn Steven’s long-form moments into carousels people save: cinematic stills, note-style overlays and quote layouts that read in one swipe.',
    story: [
      { title: 'The brief', body: 'Take hours of conversation and stage moments, and make them work as a swipe on Instagram without losing the weight of the original.' },
      { title: 'What I built', body: 'A visual hierarchy system for his carousels: one idea per slide, a consistent type scale, and a set of layouts (photo-led, note-led, quote-led) the team can rotate without the feed going stale.' },
      { title: 'The result', body: 'More than 5 million views across the carousels I designed.' },
    ],
  },
  {
    slug: 'metro-media-house', name: 'Metro Media House', team: 'Content studio for founders', set: 'carousels', position: 'Carousels · Editorial series',
    flagship: true, stats: [{ value: 2, suffix: 'M+', label: 'views' }, { value: 1, suffix: 'M+', label: 'engagements' }],
    blurb: 'Thirty-plus editorial series on taste, creativity and culture, each with its own look, all recognisably Metro.',
    story: [
      { title: 'The brief', body: 'A studio that sells taste needs a feed that proves it, week after week, across very different topics.' },
      { title: 'What I built', body: 'Series-level art direction: each idea (Idea Sex, the future that looked cool, physical media, the mathematics of creativity) gets its own world, while a shared grid, logo lock-up and type rules keep the account coherent.' },
      { title: 'The result', body: 'Over 2 million views and between 1 and 2 million engagements.' },
    ],
  },
  {
    slug: 'vryks', name: 'Vryks Media', team: 'My own studio', set: 'brand', position: 'Identity · Deck · Campaign',
    flagship: true,
    blurb: 'The identity, pitch deck and launch campaign for my studio: a V that splits in two directions, and a red-to-blue system that carries it everywhere.',
    story: [
      { title: 'The brief', body: 'A studio that does strategy, creative, content and tech needs a mark that feels like one decision, not four departments.' },
      { title: 'What I built', body: 'Logomark, wordmark, type system (Helvetica Neue with Scholar and Apple Garamond accents), tone of voice, a full pitch deck, print collateral and two carousel campaigns.' },
      { title: 'Why it matters to you', body: 'It is the same process I run for founders: positioning first, then a visual system, then content that uses it.' },
    ],
  },
  { slug: 'daily-mail', name: 'Daily Mail', team: 'dmg newmedia', set: 'carousels', position: 'Carousels · Media brand', blurb: 'Creator-economy carousels for dmg newmedia, including a trading-card series that turned their team into collectibles.' },
  { slug: 'the-hustle', name: 'The Hustle', team: 'HubSpot Media', set: 'carousels', cover: 2, position: 'Carousels · Business stories', blurb: 'Business deep-dives (Luckin Coffee, Nike’s shoe problem) told as swipeable stories.' },
  { slug: 'my-first-million', name: 'My First Million', team: 'HubSpot Media', set: 'carousels', position: 'Carousels · Podcast', blurb: 'Episode carousels that make a two-hour conversation worth stopping for.' },
  { slug: 'knowledge-project', name: 'The Knowledge Project', team: 'Shane Parrish', set: 'carousels', cover: 20, position: 'Carousels · Podcast', blurb: 'Bing Gordon’s Amazon rules and investor-pitch lessons, laid out like a magazine feature.' },
  { slug: 'arthur-brooks', name: 'Arthur Brooks', team: 'Author · Harvard', set: 'carousels', position: 'Carousels · Thought leader', blurb: 'Research-backed ideas set against Renaissance painting, so the science feels timeless.' },
  { slug: 'euvc', name: 'EUVC', team: 'European VC podcast', set: 'carousels', position: 'Thumbnails · Event posters', blurb: 'YouTube thumbnails and summit posters for Europe’s venture-capital community.' },
  { slug: 'byl-ventures', name: 'BYL Ventures', team: 'Giannis Antetokounmpo', set: 'carousels', position: 'Launch carousel', blurb: 'Launch content for Giannis’s venture fund.' },
  { slug: 'cps', name: 'Centre for Policy Studies', team: 'UK think tank', set: 'carousels', position: 'Carousels · Policy', blurb: 'Data-heavy policy stories made readable in a feed.' },
  { slug: 'kane-kallaway', name: 'Kane Kallaway', team: 'Creator educator', set: 'carousels', position: 'Carousels · Education', blurb: 'Framework carousels with a bold red system.' },
  { slug: 'chris-goode', name: 'Chris Goode', team: 'Creator', set: 'carousels', position: 'Carousels · Storytelling', blurb: 'Film-still storytelling and poetic poster sets.' },
  { slug: 'nik-stewart', name: 'Nik Stewart', team: 'Sales coach', set: 'carousels', position: 'Carousels · Coaching', blurb: 'The E3 framework, one bold letterform per slide.' },
  { slug: 'journey-club', name: 'Journey Club', team: 'Founder community', set: 'carousels', position: 'Carousels · Community', blurb: 'Community carousels and story sequences, including magazine-spread layouts.' },
  { slug: 'seeit', name: 'SeeIT', team: 'AI smart glasses', set: 'carousels', position: 'Carousels · Hardware launch', blurb: 'A clean product story for India-built smart glasses.' },
  { slug: 'bizzie', name: 'Bizzie', team: 'Parenting & psychology', set: 'carousels', position: 'Carousels · Education', blurb: 'Sensitive research topics with calm, cinematic imagery.' },
  { slug: 'metro-more', name: 'Metro Media House', team: 'More series', set: 'carousels', position: 'Carousels · Case studies', blurb: 'BTS, Spotify and McLaren case studies, plus the Taste is a Moat series.' },
  { slug: 'mindset-athletes', name: 'Mindset Series', team: 'Athlete quotes', set: 'carousels', position: 'Typography · Posters', blurb: 'Editorial type over iconic sports moments.' },
  { slug: 'berribot', name: 'Berribot', team: 'AI hiring platform', set: 'brand', position: 'Social · Print · Events', blurb: 'Event backdrops, brochures, business cards and social for an AI recruiting startup.' },
  { slug: 'gulnar-identity', name: 'Gulnar', team: 'by Vriksh Valley', set: 'brand', cover: 9, position: 'Logo identity', blurb: 'Wordmark and monogram explorations for a heritage brand.' },
  { slug: 'terribly-creative', name: 'Terribly Creative', team: 'Creative agency', set: 'brand', position: 'Logo identity', blurb: 'A modular mark that works as a pattern.' },
  { slug: 'packagefolio', name: 'Packaging', team: 'Selected work', set: 'brand', position: 'Packaging', blurb: 'Boxes, bags and gift packs for food and lifestyle brands.' },
  { slug: 'amata', name: 'Amata', team: 'Jute tea', set: 'brand', position: 'Packaging', blurb: 'Packaging for a cardamom and ginger jute tea, in English and Japanese.' },
  { slug: 'jerseyfolio', name: 'JerseyFolio', team: 'Esports teams', set: 'brand', position: 'Kit design', blurb: 'Jerseys for four esports teams.' },
  { slug: 'film-vryks', name: 'Vryks', team: 'Brand film', set: 'motion', position: 'Motion · Identity', blurb: 'The motion version of my studio’s identity.' },
  { slug: 'film-cps', name: 'CPS', team: 'Organisation intro', set: 'motion', position: 'Motion · Explainer', blurb: 'A 32-second intro to the Centre for Policy Studies.' },
  { slug: 'film-gulnar', name: 'Gulnar', team: 'Launch film', set: 'motion', position: 'Film · Launch', blurb: 'A fast-cut 30-second launch film.' },
  { slug: 'film-nexus', name: 'Nexus', team: 'Durga Puja film', set: 'motion', position: 'Film · Festive', blurb: 'A festive 30-second film for a pharmacy brand.' },
  { slug: 'film-calcreme', name: 'CalCreme', team: 'Promo', set: 'motion', position: 'Film · Product', blurb: 'A vertical cheesecake promo.' },
  { slug: 'film-domjoly', name: 'Dom Joly', team: 'I’m a Celeb edit', set: 'motion', position: 'Edit · Vertical', blurb: 'A vertical edit built from real clips.' },
  { slug: 'film-scaramucci', name: 'Scaramucci', team: 'Commentary edit', set: 'motion', position: 'Edit · Vertical', blurb: 'A punchy vertical edit for a political commentary clip.' },
  { slug: 'firi', name: 'Firi', team: 'Skincare commerce', set: 'ads', position: 'Ad creatives', blurb: 'Static ads that sell with a single line.' },
  { slug: 'wild-oak', name: 'Wild Oak', team: 'Denim', set: 'ads', position: 'Ad creatives', blurb: 'Lifestyle ads with product callouts.' },
  { slug: 'kelme', name: 'Kelme India', team: 'Sportswear', set: 'ads', position: 'AI photoshoot', blurb: 'An AI-generated product shoot for a polo jersey, no studio needed.' },
];

export const getProject = (slug: string) => PROJECTS.find((p) => p.slug === slug);
