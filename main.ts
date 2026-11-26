// NI-25 entrypoint: "THE WORLD IN ONE DAY — WEDNESDAY, NOVEMBER 25, 2026"
//
// This program has exactly one job: place the finished news image
// (entry.png, rendered and checked beforehand) into the directory the
// competition harness reads from. It does no drawing, no fetching and
// no editing — the image is a fixed artifact, and this script is only
// the courier that delivers it.
//
// Determinism note: the bytes written are the bytes read, nothing is
// generated or transformed, so every run produces the identical file.
// No network calls, no random numbers, no timestamps anywhere in
// this script: the output depends only on the entry.png beside it.

import { mkdir, readFile, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Where this script lives on disk; entry.png sits right next to it.
const scriptFolder = dirname(fileURLToPath(import.meta.url));
const imageName = "entry.png";
const sourcePath = join(scriptFolder, imageName);

// The harness tells us where to put the output. Fall back to /output
// when the variable is unset, which is the layout the kit expects.
const outputFolder = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const destinationPath = join(outputFolder, imageName);

// Short helper: the SHA-256 fingerprint of a buffer, used below to
// prove the delivered file is an exact copy of the source.
function fingerprint(bytes: Buffer): string {
  return createHash("sha256").update(bytes).digest("hex");
}

async function deliverImage(): Promise<void> {
  const imageBytes = await readFile(sourcePath);

  await mkdir(outputFolder, { recursive: true });
  await writeFile(destinationPath, imageBytes);

  // Read the copy back and compare fingerprints. If the two hashes
  // ever differ, something went wrong with the write and we fail
  // loudly instead of handing the judge a damaged file.
  const deliveredBytes = await readFile(destinationPath);
  const sourceHash = fingerprint(imageBytes);
  const deliveredHash = fingerprint(deliveredBytes);
  if (sourceHash !== deliveredHash) {
    throw new Error(
      `entry.png copy failed verification: source ${sourceHash} != delivered ${deliveredHash}`,
    );
  }

  console.log(`entry.png delivered to ${destinationPath} (sha256 ${deliveredHash})`);
}

// The script's single action: deliver the image, then exit.
await deliverImage();
