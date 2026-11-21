"""Palettes per project (card-back swatches), the free wallpaper pack, and the OG share image."""
import json, zipfile, colorsys
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
WORK = ROOT / "public" / "work"
idx = json.loads((ROOT / "src/data/assets.json").read_text())

def palette(slug, n=5):
    imgs = [m for m in idx.get(slug, []) if m["type"] == "image"][:8]
    if not imgs:
        imgs = [{"src": m["poster"]} for m in idx.get(slug, []) if m.get("poster")]
    if not imgs:
        return []
    tiles = [Image.open(WORK / slug / m["src"]).convert("RGB").resize((96, 120)) for m in imgs]
    sheet = Image.new("RGB", (96 * len(tiles), 120))
    for i, t in enumerate(tiles):
        sheet.paste(t, (96 * i, 0))
    q = sheet.quantize(colors=12, method=Image.Quantize.MEDIANCUT)
    pal, counts = q.getpalette(), sorted(q.getcolors(), reverse=True)
    picked = []
    for _, i in counts:
        rgb = tuple(pal[i * 3:i * 3 + 3])
        if all(sum((a - b) ** 2 for a, b in zip(rgb, p)) > 2400 for p in picked):
            picked.append(rgb)
        if len(picked) == n:
            break
    picked.sort(key=lambda c: colorsys.rgb_to_hls(*[v / 255 for v in c])[1])
    return ["#%02x%02x%02x" % c for c in picked]

(ROOT / "src/data/palettes.json").write_text(json.dumps({s: palette(s) for s in idx}, indent=1))

# Free wallpaper pack: originals zipped, small previews for the page.
src = Path(r"C:\Users\iamth\Portfolio Organiser 2\Wallpaper Packs")
free = ROOT / "public" / "free"
free.mkdir(parents=True, exist_ok=True)
with zipfile.ZipFile(free / "think-design-win-wallpapers.zip", "w", zipfile.ZIP_STORED) as z:
    for f in sorted(src.rglob("*")):
        if f.suffix.lower() in (".png", ".jpg", ".jpeg"):
            z.write(f, f"Think Design Win/{f.parent.name}/{f.name}")
for i, f in enumerate(sorted((src / "iPhone").iterdir())):
    im = Image.open(f).convert("RGB"); im.thumbnail((420, 420 * 3)); im.save(free / f"phone-{i + 1}.webp", "WEBP", quality=80)

# OG image 1200x630: three flagship covers on the grading-case ground.
og = Image.new("RGB", (1200, 630), (12, 13, 18))
for k, slug in enumerate(["steven-bartlett", "metro-media-house", "vryks"]):
    first = next(m for m in idx[slug] if m["type"] == "image")
    im = Image.open(WORK / slug / first["src"]).convert("RGB")
    w, h = 300, 420
    im = im.resize((w, int(im.height * w / im.width)))
    card = Image.new("RGB", (w + 24, h + 24), (232, 228, 218))
    card.paste(im.crop((0, 0, w, h)), (12, 12))
    card = card.rotate((-8, 0, 8)[k], expand=True, resample=Image.BICUBIC, fillcolor=(12, 13, 18))
    og.paste(card, (560 + k * 190 - card.width // 2 + 100, 315 - card.height // 2))
og.save(ROOT / "public" / "og-cards.png")
print("ok", len(idx))
