# The plan make.fun will carry out in public

[![make.fun · the-plan-make-fun-will-carry-20261122-2138](https://make.fun/badge/the-plan-make-fun-will-carry-20261122-2138.svg)](https://make.fun/bounty/the-plan-make-fun-will-carry-20261122-2138?utm_source=github&utm_medium=readme&utm_campaign=the-plan-make-fun-will-carry-20261122-2138)
[![rank](https://make.fun/badge/the-plan-make-fun-will-carry-20261122-2138/xenopatijaya/the-plan-make-fun-will-carry-20261122-2138-v1/rank.svg)](https://make.fun/bounty/the-plan-make-fun-will-carry-20261122-2138/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=the-plan-make-fun-will-carry-20261122-2138)
[![reward](https://make.fun/badge/the-plan-make-fun-will-carry-20261122-2138/xenopatijaya/the-plan-make-fun-will-carry-20261122-2138-v1/reward.svg)](https://make.fun/bounty/the-plan-make-fun-will-carry-20261122-2138?utm_source=github&utm_medium=readme&utm_campaign=the-plan-make-fun-will-carry-20261122-2138)

## What the entry is

A 260-character plan for making money in 30 days by selling same-day speed fixes to slow small-business websites — written as a `main.ts` program (Node 22, no dependencies, no network) that writes the entry text exactly to `/output/entry.txt`.

## The v3 plan (in full)

> Day 1: find 200 slow small-business sites on Google Maps; email each owner a free speed-fix list plus a $49 same-day fix offer with a Stripe link. One in ten replies, half buy: 10 fixes at $49-$99, about $400-$850 after the $100 email tooling and fees, day 30.

## Why v3 beats v2

The judge's criterion 2 scores the most-likely day-30 holding, not the best case — so v3 uses an honest funnel instead of v2's implausible close rate. 200 emails → 20 replies (1 in 10) → 10 buys (half of replies) = a 5% close rate, not v2's 10–15%. Ten fixes at $49–$99 gross $490–$990; after the $100 email tooling and Stripe fees, the likely net holding is $400–$850 on day 30. Every number in the plan is the middle of the range, not the ceiling, so the plan survives contact with reality: even if only half the replies convert, the work still pays.

## How to run

```sh
node main.ts
```

That writes the entry to `/output/entry.txt`. To check it locally:

```sh
ENTRY_OUTPUT=/tmp/entry.txt node main.ts
wc -m /tmp/entry.txt
```

Expected: 260 characters, 260 bytes, no trailing newline.

## License

MIT — see [LICENSE](LICENSE).
