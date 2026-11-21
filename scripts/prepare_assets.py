"""Copy and optimise portfolio assets into public/work/<slug>/.

Images -> NN.webp (1600px long side) + NN-s.webp (640px). Videos -> NN.mp4 (720p H.264) + NN-poster.webp.
Run: python -I scripts/prepare_assets.py [slug ...]   (no args = all)
"""
import json, os, re, subprocess, sys
from pathlib import Path
from PIL import Image

Image.MAX_IMAGE_PIXELS = None
ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "public" / "work"
PO = Path(r"C:\Users\iamth\Portfolio Organiser 2")
BK = Path(r"C:\Users\iamth\BKClaude")
SM = PO / "Social Media Design"
MM = SM / "MetroMedia"
IMG = (".png", ".jpg", ".jpeg", ".webp")
VID = (".mp4", ".mov")

# slug -> list of (path, max_items). A path may be a folder (natural-sorted contents) or a single file.
M = {
    "steven-bartlett": [(SM / "Steven Bartlett" / "Carousel 1", 7), (SM / "Steven Bartlett" / "2nd Feb Carousel(Vid3)-20260824T191511Z-1-001", 12), (SM / "Steven Bartlett" / "Carousel 2", 8), (SM / "Steven Bartlett" / "Quote Carousel", 2)],
    "daily-mail": [(SM / "Daily Mail" / "Trading Cards Carousel", 13), (SM / "Daily Mail" / "Job that didn_t exist", 10), (SM / "Daily Mail" / "These 5 habits build viral creators", 7), (SM / "Daily Mail" / "why notion is still the GOAT", 9), (SM / "Daily Mail" / "5 Content Formats That Built Our Channels", 4)],
    "metro-media-house": [(MM / "Idea Sex", 9), (MM / "Idea Sex" / "Motion Assets", 6), (MM / "future looked so cool", 9), (MM / "Why physical media is so back now", 10), (MM / "Mathematics of creativity", 10), (MM / "COOLHUNTING", 8), (MM / "A24", 15)],
    "vryks": [(PO / "Deck" / "Passion", 17), (PO / "Branding" / "Passion", 7), (PO / "Logofolio" / "Passion", 4), (PO / "Print Design" / "Passion", 1), (SM / "Passion Carousels" / "Work With Vryks", 7), (SM / "Passion Carousels" / "Start Again", 6)],
    "arthur-brooks": [(SM / "Arthur Brooks" / "Thanksgiving", 10), (SM / "Arthur Brooks" / "why you keep pretending 2", 9)],
    "euvc": [(SM / "EUVC Thumbnails", 6), (SM / "EUVC Posters", 3)],
    "byl-ventures": [(SM / "BYL Ventures", 5)],
    "chris-goode": [(SM / "Chris Goode" / "Chris Goode 2", 8), (SM / "Chris Goode" / "Carousel 1", 5)],
    "kane-kallaway": [(SM / "Kane Kallaway", 8)],
    "nik-stewart": [(SM / "Nik Stewart" / "Niik Stewart" / "E3", 7)],
    "journey-club": [(SM / "Journey Club" / "Carousel 6", 6), (SM / "Journey Club" / "carousel 1", 7), (SM / "Journey Club" / "Story Sequence- Moksh Vasant", 3)],
    "bizzie": [(SM / "Bizzie", 8)],
    "seeit": [(SM / "SeeIT AI Glasses", 7)],
    "mindset-athletes": [(SM / "christian", 6)],
    "metro-more": [(MM / "BTS Case Study", 7), (MM / "Spotify case study", 7), (MM / "McLaren Marketing", 10), (MM / "Taste is moat", 11), (MM / "Hating on Ai", 10), (MM / "Dual Slide", 8)],
    "the-hustle": [(BK / "Atomic Growth/carousels/The Hustle/01_chinese-retailers-luckin/export/final_v7", 13), (BK / "Atomic Growth/carousels/The Hustle/02_nike-too-many-shoes/export/final", 11)],
    "my-first-million": [(BK / "Atomic Growth/carousels/My First Million/Bill Perkins/export/v13", 17)],
    "knowledge-project": [(BK / "Atomic Growth/carousels/The Knowledge Project/Bing Gordon Investor Pitch/export", 12), (BK / "Atomic Growth/carousels/The Knowledge Project/Bing Gordon Amazon/export/v2_send_final", 15)],
    "cps": [(BK / "Clients/CPS/01_cost-of-hiring/export/v5_final", 8), (BK / "Clients/CPS/08_london-housing/export/v3", 8)],
    "berribot": [(SM / "Berribot", 9), (SM / "Berribot" / "Hiring Carousel", 7), (PO / "Print Design" / "Berribot" / "Backdrop", 3), (PO / "Print Design" / "Berribot" / "Trifold Brochure", 2), (PO / "Print Design" / "Berribot" / "Business Card", 2)],
    "terribly-creative": [(PO / "Logofolio" / "Terribly Creative", 6)],
    "packagefolio": [(PO / "Packagefolio", 5)],
    "amata": [(BK / "Clients/Amata Jute Tea/finalised/revised", 4)],
    "gulnar-identity": [(BK / "Clients/Gulnar/01_logo-identity/previews/r2_export/0.5x", 16)],
    "jerseyfolio": [(PO / "JerseyFolio", 5)],
    "firi": [(PO / "AD Creatives" / "Firi", 5)],
    "wild-oak": [(PO / "AD Creatives" / "Wild Oak Jeans", 5)],
    "kelme": [(PO / "AI Gen Photoshoot" / "Kelme India" / "White polo jersey", 11)],
    "film-cps": [(BK / "Clients/CPS/04_intro-video/renders/CPS_Intro_v4_1080p.mp4", 1)],
    "film-gulnar": [(BK / "Clients/Gulnar/02_launch-film/render/Gulnar_Launch_16x9_web.mp4", 1)],
    "film-calcreme": [(BK / "College/CalcCreme_Promo/out/CalCreme_30s_1080x1920_share.mp4", 1)],
    "film-nexus": [(BK / "Clients/Nexus Medicals/_pipeline/renders/NEXUS_SOCIAL_v14_4K.mp4", 1)],
    "film-domjoly": [(BK / "Clients/CPS/05_dom-joly-edit/renders/DomJoly_ImACeleb_v5.mp4", 1)],
    "film-scaramucci": [(BK / "Clients/CPS/06_scaramucci-trump-edit/renders/Scaramucci_WorkingForTrump_v3.mp4", 1)],
    "film-vryks": [(PO / "Branding" / "Passion" / "1.mp4", 1)],
}

nat = lambda s: [int(t) if t.isdigit() else t.lower() for t in re.split(r"(\d+)", s)]


def files_of(p, n):
    if p.is_file():
        return [p]
    fs = [f for f in p.iterdir() if f.is_file() and f.suffix.lower() in IMG + VID]
    return sorted(fs, key=lambda f: nat(f.name))[:n]


def save_img(im, dst, long):
    im = im.copy()
    im.thumbnail((long, long), Image.LANCZOS)
    im.save(dst, "WEBP", quality=80, method=6)
    return im.size


def do_image(src, base):
    im = Image.open(src)
    im = im.convert("RGBA") if im.mode in ("RGBA", "LA", "P") else im.convert("RGB")
    w, h = save_img(im, base.with_suffix(".webp"), 1600)
    save_img(im, base.parent / (base.name + "-s.webp"), 640)
    return {"type": "image", "src": base.name + ".webp", "small": base.name + "-s.webp", "w": w, "h": h, "from": str(src)}


def do_video(src, base):
    mp4, poster = base.with_suffix(".mp4"), base.parent / (base.name + "-poster.webp")
    vf = "scale='if(gt(iw,ih),min(1280,iw),-2)':'if(gt(iw,ih),-2,min(1280,ih))'"
    subprocess.run(["ffmpeg", "-y", "-v", "error", "-i", str(src), "-vf", vf, "-c:v", "libx264", "-preset", "slow", "-crf", "27",
                    "-pix_fmt", "yuv420p", "-movflags", "+faststart", "-c:a", "aac", "-b:a", "96k", str(mp4)], check=True)
    subprocess.run(["ffmpeg", "-y", "-v", "error", "-ss", "1.5", "-i", str(mp4), "-frames:v", "1", "-vf", "scale=960:-2", str(poster)], check=True)
    pw, ph = Image.open(poster).size
    return {"type": "video", "src": mp4.name, "poster": poster.name, "w": pw, "h": ph, "from": str(src)}


def main(only):
    index_path = ROOT / "src" / "data" / "assets.json"
    index = json.loads(index_path.read_text()) if index_path.exists() else {}
    for slug, sources in M.items():
        if only and slug not in only:
            continue
        d = OUT / slug
        d.mkdir(parents=True, exist_ok=True)
        for old in d.iterdir():
            old.unlink()
        items, k = [], 0
        for p, n in sources:
            if not p.exists():
                print("MISSING", slug, p); continue
            for f in files_of(p, n):
                k += 1
                base = d / f"{k:02d}"
                try:
                    items.append(do_video(f, base) if f.suffix.lower() in VID else do_image(f, base))
                except Exception as e:
                    print("ERR", f, e)
        index[slug] = items
        print(f"{slug}: {len(items)}")
    index_path.parent.mkdir(parents=True, exist_ok=True)
    index_path.write_text(json.dumps(index, indent=1))


if __name__ == "__main__":
    main(set(sys.argv[1:]))
