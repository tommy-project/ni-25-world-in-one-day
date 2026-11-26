#!/bin/sh
# NI-25 render: board.html -> entry.png (+ 300px thumbnail for the legibility check).
# Headless Chromium shell screenshot of the local file; no network, no randomness.
# The screenshot PNG is then reduced to an adaptive 256-colour palette with
# Pillow (deterministic for a fixed input; text stays crisp, file drops to ~130 KB).
set -e
DIR="$(cd "$(dirname "$0")" && pwd)"
CHROME="$HOME/.cache/ms-playwright/chromium_headless_shell-1255/chrome-headless-shell-linux64/chrome-headless-shell"
"$CHROME" --no-sandbox --disable-gpu --hide-scrollbars \
  --window-size=1024,1024 \
  --screenshot="$DIR/.entry-rgb.png" \
  "file://$DIR/board.html" 2>/dev/null
python3 -c "
from PIL import Image
im = Image.open('$DIR/.entry-rgb.png')
print('screenshot:', im.size, im.format)
q = im.convert('P', palette=Image.ADAPTIVE, colors=256)
q.save('$DIR/entry.png', optimize=True)
im2 = Image.open('$DIR/entry.png').convert('RGB')
im2.resize((300, 300), Image.LANCZOS).save('$DIR/thumb-300.png')
im2.resize((256, 256), Image.LANCZOS).save('$DIR/thumb-256.png')
"
ls -la "$DIR/entry.png"
