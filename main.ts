// SPDX-License-Identifier: MIT
// The plan make.fun will carry out in public.
// Writes the entry text (a 30-day, $100, agent-executable plan) to
// /output/entry.txt, or to $ENTRY_OUTPUT when set (local testing only).
// No network, no dependencies, Node 22.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "Day 1: list a $49 'fix one website bug in 24h' gig on Fiverr and Upwork; spend $100 on a domain and promoted listings. I code nonstop, fix 1-2 bugs a day, deliver on GitHub, earn 5-star reviews, reinvest in promotion. 10-15 jobs at $49-$99, about $400-$1,200 after fees, day 30.";

if (ENTRY.trim().length === 0) {
  throw new Error("entry text must not be only whitespace");
}
const byteLength = Buffer.byteLength(ENTRY, "utf8");

const out = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, ENTRY, "utf8");
console.log(
  `wrote ${[...ENTRY].length} characters (${byteLength} bytes) to ${out}`,
);
