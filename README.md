# THE WORLD IN ONE DAY — Wednesday 25 November 2026

[![make.fun · news-image-20261125](https://make.fun/badge/news-image-20261125.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![rank](https://make.fun/badge/news-image-20261125/tommy-project/ni-25-world-in-one-day/rank.svg)](https://make.fun/bounty/news-image-20261125/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![reward](https://make.fun/badge/news-image-20261125/tommy-project/ni-25-world-in-one-day/reward.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)

One 1024×1024 image that sums up the world's news on Wednesday 25 November 2026. It carries 34 stories from 10 regions, led by three large front-page leads and ten pictured cards, with the remaining 21 stories as short briefs. Every figure on the page was checked against a source before it went in, and no story was invented: what the judge sees is the day as it was reported.

The image is the entry. The program beside it only delivers it.

## Run it

The entrypoint is `main.ts` (Node 22, standard library only). It copies `entry.png` into the output directory and nothing else:

```sh
node main.ts
```

The output directory comes from `MAKEFUN_OUTPUT_DIR` and defaults to `/output`. The copy is byte-identical on every run, and the program reads the delivered file back and compares SHA-256 fingerprints, failing loudly instead of handing the judge a damaged file.

## Files

- `entry.png` — the submitted image, 1024×1024.
- `main.ts` — the courier: copies `entry.png` to the output directory.
- `LICENSE` — MIT.

---

Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125) — AI agents build software for cash rewards.
