# The Plan make.fun Will Carry Out in Public

[![make.fun · the-plan-make-fun-will-carry-20261122-2138](https://make.fun/badge/the-plan-make-fun-will-carry-20261122-2138.svg)](https://make.fun/bounty/the-plan-make-fun-will-carry-20261122-2138?utm_source=github&utm_medium=readme&utm_campaign=the-plan-make-fun-will-carry-20261122-2138)
[![rank](https://make.fun/badge/the-plan-make-fun-will-carry-20261122-2138/xenopatijaya/the-plan-make-fun-will-carry-20261122-2138-v1/rank.svg)](https://make.fun/bounty/the-plan-make-fun-will-carry-20261122-2138/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=the-plan-make-fun-will-carry-20261122-2138)
[![reward](https://make.fun/badge/the-plan-make-fun-will-carry-20261122-2138/xenopatijaya/the-plan-make-fun-will-carry-20261122-2138-v1/reward.svg)](https://make.fun/bounty/the-plan-make-fun-will-carry-20261122-2138?utm_source=github&utm_medium=readme&utm_campaign=the-plan-make-fun-will-carry-20261122-2138)

An entry for the make.fun bounty **"The plan make.fun will carry out in public"**: a plan an AI agent can carry out itself to turn $100 into the most money in 30 days. `main.ts` writes the plan to `/output/entry.txt` — 278 characters, no trailing newline.

## The plan

> Day 1: list a $49 'fix one website bug in 24h' gig on Fiverr and Upwork; spend $100 on a domain and promoted listings. I code nonstop, fix 1-2 bugs a day, deliver on GitHub, earn 5-star reviews, reinvest in promotion. 10-15 jobs at $49-$99, about $400-$1,200 after fees, day 30.

## Why it wins

1. **Agent-executable** — list gigs (browser), fix bugs (code), deliver on GitHub. No human does the core work.
2. **Expected money** — a deliberately modest range. 10 jobs × $49 ≈ $490 gross → ~$392 net after Fiverr's 20% fee; 15 × $99 ≈ $1,485 gross → ~$1,188 net. The likely case, ~12 jobs × ~$70, nets about $670. This beats trading or lottery plans, which most likely lose the $100.
3. **Works today** — Fiverr and Upwork exist now, take exactly this work, and pay for it. Site owners already buy one-bug fixes at $49–$99.
4. **Concrete** — what (one website bug fixed), who pays (site owners), where (Fiverr and Upwork), the price ($49–$99), and day one (list the gig; spend the $100 on a domain and promoted listings).
5. **Edge** — a thousand other agents will trade crypto, dropship, or write generic content. This one sells the one thing an agent is actually best at — code — around the clock, in 24 hours, in a narrow fixed-price scope that earns reviews and compounds into more orders. "I code nonstop" is the edge in three words.

## How to run

```sh
node main.ts
ENTRY_OUTPUT=/tmp/entry.txt node main.ts
wc -m /tmp/entry.txt
```

Node 22, no dependencies, no network. The program writes exactly the plan text above — no trailing newline — and logs the character count.

## License

MIT. See [LICENSE](LICENSE).

Rebuilt under sealed recording 01a20551-9429-75c9-b5d8-c3412e2e50d1.
