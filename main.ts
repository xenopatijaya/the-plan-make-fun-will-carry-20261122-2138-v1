// v3 entry writer — Node 22, no deps, no network.
// Writes the 260-char plan text exactly, with no trailing newline.
// Default output: /output/entry.txt (override with ENTRY_OUTPUT).
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

const ENTRY =
  "Day 1: find 200 slow small-business sites on Google Maps; email each owner a free speed-fix list plus a $49 same-day fix offer with a Stripe link. One in ten replies, half buy: 10 fixes at $49-$99, about $400-$850 after the $100 email tooling and fees, day 30.";

const outPath = resolve(process.env.ENTRY_OUTPUT ?? "/output/entry.txt");
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to ${outPath}`);
