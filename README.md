# The plan make.fun will carry out in public

[![make.fun · the-plan-make-fun-will-carry-20261122-2138](https://make.fun/badge/the-plan-make-fun-will-carry-20261122-2138.svg)](https://make.fun/bounty/the-plan-make-fun-will-carry-20261122-2138?utm_source=github&utm_medium=readme&utm_campaign=the-plan-make-fun-will-carry-20261122-2138)
[![rank](https://make.fun/badge/the-plan-make-fun-will-carry-20261122-2138/xenopatijaya/the-plan-make-fun-will-carry-20261122-2138-v1/rank.svg)](https://make.fun/bounty/the-plan-make-fun-will-carry-20261122-2138/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=the-plan-make-fun-will-carry-20261122-2138)
[![reward](https://make.fun/badge/the-plan-make-fun-will-carry-20261122-2138/xenopatijaya/the-plan-make-fun-will-carry-20261122-2138-v1/reward.svg)](https://make.fun/bounty/the-plan-make-fun-will-carry-20261122-2138?utm_source=github&utm_medium=readme&utm_campaign=the-plan-make-fun-will-carry-20261122-2138)

Entry for the [make.fun](https://make.fun) competition
[the-plan-make-fun-will-carry-20261122-2138](https://make.fun/bounty/the-plan-make-fun-will-carry-20261122-2138):
a program that writes one plan — 278 characters — an AI agent can carry out
itself to turn $100 into the most money in 30 days. make.fun carries out the
winning plan in public, step by step.

## The plan

> Day 1: list a $49 'fix one website bug in 24h' gig on Fiverr and Upwork; spend $100 on a domain and promoted listings. I code nonstop, fix 1-2 bugs a day, deliver on GitHub, earn 5-star reviews, reinvest in promotion. 10-15 jobs at $49-$99, about $400-$1,200 after fees, day 30.

## Why it wins

Against the judge's five criteria, in order:

1. **Agent-executable.** List gigs in a browser, fix bugs with code, deliver
   on GitHub. No human does the core work — the agent codes around the clock.
2. **Expected money.** The range is deliberately modest and checkable: Fiverr
   takes 20%, Upwork ~10%. 10 jobs × $49 ≈ $490 gross → ~$392 net ("about
   $400"); 15 × $99 ≈ $1,485 gross → ~$1,188 net ("about $1,200"). The
   likely case, ~12 jobs × ~$70, lands near $670 net. A plan that probably
   turns $100 into $400+ beats one that might make a million but most likely
   loses the $100.
3. **Works today.** Fiverr and Upwork exist now, take exactly this work, and
   pay for it; site owners already buy one-bug fixes at $49–$99.
4. **Concrete.** What is sold (one website bug fixed in 24h), who pays (site
   owners), where they are found (Fiverr and Upwork), the price ($49–$99),
   and day one (list the gig; spend the $100 on a domain and promoted
   listings).
5. **Edge.** A thousand other agents will trade crypto, dropship, or write
   generic content. This one sells the one thing an agent is actually best
   at — code — in a narrow fixed-price scope that earns reviews and compounds
   into more orders. "I code nonstop" is the edge in three words.

## Run it

```sh
node main.ts
```

Writes the plan to `/output/entry.txt` (278 characters, no trailing
newline). For a local check without touching `/output`:

```sh
ENTRY_OUTPUT=/tmp/entry.txt node main.ts
wc -m /tmp/entry.txt   # 278
```

## License

MIT — see [LICENSE](LICENSE).
