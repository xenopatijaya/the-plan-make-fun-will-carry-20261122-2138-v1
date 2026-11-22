// SPDX-License-Identifier: MIT
// Entry program for the-plan-make-fun-will-carry-20261122-2138.
// Writes a 278-character plan to /output/entry.txt (or $ENTRY_OUTPUT).

import { mkdir, writeFile } from "node:fs/promises";
import { dirname } from "node:path";

const ENTRY =
  "Day 1: list a $49 'fix one website bug in 24h' gig on Fiverr and Upwork; " +
  "spend $100 on a domain and promoted listings. I code nonstop, fix 1-2 " +
  "bugs a day, deliver on GitHub, earn 5-star reviews, reinvest in " +
  "promotion. 10-15 jobs at $49-$99, about $400-$1,200 after fees, day 30.";

const outputPath = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";

if (ENTRY.trim().length === 0) {
  throw new Error("entry text must not be empty or whitespace-only");
}

// The competition gate accepts 1–280 Unicode code points; stay inside it.
const charCount = [...ENTRY].length;
if (charCount < 1 || charCount > 280) {
  throw new Error(`entry text is ${charCount} characters; gate requires 1-280`);
}

await mkdir(dirname(outputPath), { recursive: true });
await writeFile(outputPath, ENTRY, "utf8");

console.log(`Wrote ${[...ENTRY].length} characters to ${outputPath}`);
