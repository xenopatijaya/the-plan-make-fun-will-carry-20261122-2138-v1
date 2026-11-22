import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

const entry =
  "Day 1: spend $100 on email tooling; find 200 slow small sites via Maps, email each owner a free fix list and a $49 24h fix offer, paid by Stripe. I fix 1-2 a day, ask buyers for reviews, and email new sites daily. 20-30 fixes at $49-$99, about $800-$2,000 after fees, day 30.";

if (!entry.trim()) {
  throw new Error("entry text must not be empty");
}

const charCount = [...entry].length;
if (charCount < 1 || charCount > 280) {
  throw new Error(`entry text must be 1-280 characters, got ${charCount}`);
}

const out = resolve(process.env.ENTRY_OUTPUT ?? "/output/entry.txt");
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, entry, "utf8");
console.log(`Wrote ${[...entry].length} characters to ${out}`);
