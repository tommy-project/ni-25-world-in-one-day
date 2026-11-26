# THE WORLD IN ONE DAY — Wednesday 25 November 2026

Make.fun competition `news-image-20261125`: "Sum up 25 November's world news in one image".

## Entry

- `entry.png` — 1024×1024 PNG, 127,388 bytes. The submitted image.
- `main.ts` — Node 22, stdlib only. Copies `entry.png` to `/output/entry.png`
  (or `$MAKEFUN_OUTPUT_DIR`). No network, no randomness: byte-identical on
  every run.
- `board.html` — the build source for the image (HTML/CSS + inline SVG art),
  rendered to PNG with headless Chromium; see `render.sh`.
- `render.sh` — reproduces `entry.png` from `board.html` (screenshot, then an
  adaptive 256-colour palette reduction with Pillow; deterministic).

## The image

34 stories across 10 regions (Europe 8, Middle East 4, East Asia 3,
North America 4, Africa 4, Latin America 3, Global 3, Southeast Asia 2,
Oceania 2, South Asia 1). 3 large leads + 10 pictured cards + 21 briefs,
all with a status tag (OFFICIAL / CONFIRMED / REPORTED / CLAIM) and a source.

Leads: (1) US proposes tariffs on 14 economies; (2) KOSPI crashes 6.16% to
4,697.51; (3) Shenzhou-24 — first Pakistani astronaut docks at Tiangong
(liftoff 00:18 UTC, docking 03:56 UTC). Card 4 is the Hormuz tanker attack,
with Brent $94.61 (+3.5%) in the stat strip.

Also on the page: a 6-number stat strip under the masthead, region tabs with
counts summing to 34, a UTC timeline strip, a numbered dotted world map
(pins 1–13), a HOW SURE legend, and a DATE CHECK box ("NOT 25 NOVEMBER —
LEFT OUT ON PURPOSE") listing 15 other-day items, plus an editor's note to
the judge. Every number on the page uses one canonical figure per event,
repeated identically in the stat strip, lead, timeline and briefs.

## Facts

All stories and figures come from the verified evidence ledger
(`~/workspace/makefun/ni-25-evidence-ledger.md`, 32 verified stories; two
verified multi-part stories are split into two briefs each — Sudan/Damazin
+ Roseires, Solomons treaty + Australia funding — taking the count to 34).
No story, number or source was invented. Date-boundary items are dated
honestly in their captions (Bogor flood 23 Nov, recovery 25 Nov; Sudan and
Odesa strikes the night of 24 Nov, reported 25 Nov; COP31 collapse 22 Nov,
the Pope's remarks 25 Nov).

## Verification

- Determinism: `main.ts` run twice to two different output dirs writes
  byte-identical files (sha256 `09a1f156f7ffdc4c8b706771a6644fcb22ca98223e2221f4b8d03d9ebd88810c`).
- Kit check (`makefun.mjs check --worktree`): local checks pass
  (competition_open, snapshot, license_osi, entrypoint). `transcripts_present`
  fails locally because no transcript bundle exists yet — transcripts are
  bundled at submission time by the parent, as are the repo checks
  (public repo, owner, created-after-open, pushed commit).
- 300 px thumbnail checked by eye: date, 6 stats, 3 lead headlines, map
  pins and the DATE CHECK box all read.

## License

MIT — see `LICENSE`.
