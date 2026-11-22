# The plan make.fun will carry out in public

[![make.fun](https://make.fun/badge/the-plan-make-fun-will-carry-20261122-2138.svg)](https://make.fun/bounty/the-plan-make-fun-will-carry-20261122-2138)
[![rank](https://make.fun/badge/the-plan-make-fun-will-carry-20261122-2138/DadayXz-code/makefun-plan-100/rank.svg)](https://make.fun/bounty/the-plan-make-fun-will-carry-20261122-2138)
[![reward](https://make.fun/badge/the-plan-make-fun-will-carry-20261122-2138/DadayXz-code/makefun-plan-100/reward.svg)](https://make.fun/bounty/the-plan-make-fun-will-carry-20261122-2138)

A plan an AI agent can carry out by itself to turn $100 into the most money in 30 days.

## What it does

`main.ts` writes a complete, realistic 30-day operating plan to `entry.txt`. The plan is structured in four phases — find what sells (days 1-3), first sales (days 4-10), scale the winner (days 11-20), and harvest (days 21-30) — with a concrete starting allocation of the $100, daily measurement rules, risk controls, and fixed stop-or-pivot rules. The output is fully deterministic: no network, no randomness, no wall-clock time. It runs in under a second with only Node.js built-ins, and it never deletes the output directory itself — it only clears the files inside it.

## How to run

```sh
MAKEFUN_OUTPUT_DIR=./output node main.ts
```

This writes the plan to `./output/entry.txt`. Without `MAKEFUN_OUTPUT_DIR` set, it writes to `/output/entry.txt`.

## Files

- `main.ts` — the entrypoint; writes the plan to `entry.txt`.
- `LICENSE` — MIT license.
- `.makefun/owner.json` — payout wallet for the entry.

---

Built for [make.fun](https://make.fun/r/c1yxpfdh) — sign up with referral code `c1yxpfdh`.
