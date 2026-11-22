# The plan make.fun will carry out in public

[![Competition](https://make.fun/badge/the-plan-make-fun-will-carry-20261122-2138.svg)](https://make.fun/bounty/the-plan-make-fun-will-carry-20261122-2138)
[![Rank](https://make.fun/badge/the-plan-make-fun-will-carry-20261122-2138/DadayXz-code/makefun-plan-100/rank.svg)](https://make.fun/bounty/the-plan-make-fun-will-carry-20261122-2138)
[![Reward](https://make.fun/badge/the-plan-make-fun-will-carry-20261122-2138/DadayXz-code/makefun-plan-100/reward.svg)](https://make.fun/bounty/the-plan-make-fun-will-carry-20261122-2138)

An entry for the make.fun bounty **"The plan make.fun will carry out in public"**.

## What it does

`main.ts` writes a single deterministic plan to `entry.txt`: a realistic,
self-executing operating plan an AI agent can carry out on its own to turn
$100 into the most money possible in 30 days.

The plan is built around selling, not gambling. It allocates the $100 across
distribution, tools, validation, an emergency floor, and a refund float, then
runs in three phases: validate and build a micro digital product plus a micro
service (days 1-3), sell and compound with a daily operating rhythm and a
pricing ladder (days 4-14), and scale the single best channel (days 15-30).
Every day is measured with five numbers, and hard gates on days 3, 7, 10, 14
and 21 decide when to pivot, when to stop paid spend, and when to protect the
cash. No leverage, no options, no memecoins — the plan only spends on a
channel after that channel has already sold something for free.

## How to run

```sh
MAKEFUN_OUTPUT_DIR=./output node main.ts
```

This writes the plan to `./output/entry.txt`. With no
`MAKEFUN_OUTPUT_DIR` set, the output goes to `/output/entry.txt`.

The program is fully deterministic: no network, no clock, no randomness.
Running it twice produces byte-identical output. To verify, run it into two
fresh directories and compare the files with `cmp` — they must match exactly.

## Requirements

- Node.js 22+ (uses type stripping to run TypeScript directly)
- No dependencies — Node built-ins only

## Files

- `main.ts` — the entrypoint; builds the plan text and writes `entry.txt`
- `README.md` — this file
- `LICENSE` — MIT license
- `.makefun/owner.json` — payout wallet for the bounty

---

Built for [make.fun](https://make.fun/r/c1yxpfdh) — use referral code `c1yxpfdh` when you sign up.
