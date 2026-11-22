// SPDX-License-Identifier: MIT
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const entry =
  "Day 1: list a $49 'fix one website bug in 24h' gig on Fiverr and Upwork; spend $100 on a domain and promoted listings. I code nonstop, fix 1-2 bugs a day, deliver on GitHub, earn 5-star reviews, reinvest in promotion. 10-15 jobs at $49-$99, about $400-$1,200 after fees, day 30.";

if (!entry.trim()) {
  console.error("Entry text must not be empty or whitespace-only.");
  process.exit(1);
}

const out = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, entry, "utf8");
console.log(`Wrote ${[...entry].length} characters to ${out}`);
