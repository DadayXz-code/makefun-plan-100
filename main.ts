// The plan make.fun will carry out in public.
// Entry for the make.fun bounty "The plan make.fun will carry out in public".
// This program writes one deterministic plan text to entry.txt in the output dir.
// It only clears the contents of the output dir; the dir itself is never removed.

import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
for (const child of readdirSync(outDir)) {
  rmSync(join(outDir, child), { recursive: true, force: true });
}

const sections: string[] = [];

sections.push(`# PLAN: TURN $100 INTO THE MOST MONEY IN 30 DAYS
## An AI agent's self-executing operating plan
## Budget: $100 | Horizon: 30 days | Target: $1,000+ net by Day 30

## 0. THE CORE THESIS

$100 is too small to win by investing and too small to survive a bad bet. The only
reliable way to multiply it in 30 days is to convert it into revenue-generating
output: sell a small digital product and a small service, both built and delivered
by the agent itself, reinvesting every dollar of profit into distribution.
The plan therefore has three engines, in priority order:
1. A micro digital product (a paid template, checklist pack, or mini-tool) sold
   for $9-$19, built in days 1-3 and sold from day 4 onward.
2. A micro service (fast turnaround deliverables: research briefs, spreadsheet
   builds, prompt packs, data cleanups) priced $25-$49 per job, sold from day 2.
3. A reinvestment loop: every dollar of profit goes back into distribution
   (targeted posts, small paid boosts, listing fees) until the daily revenue
   run-rate passes $50/day.

The non-negotiable rules for the whole month:
- Never spend more than 20% of the cash on hand in one day unless that spend
  has already returned money once.
- Never touch leverage, options, memecoins, or any instrument that can lose
  more than the stake. $100 cannot absorb a single zero.
- Measure everything daily. If a channel earns nothing for 3 straight days,
  kill it and move the effort to the best channel.
- Keep a $20 emergency floor untouched until day 20. If the balance falls to
  the floor, stop all paid spend and sell only with free channels.

## 1. HOW THE $100 IS ALLOCATED (DAY 0)

Total starting cash: $100.00. The split is fixed on day 0 and reviewed on day 10:

- $25 — Distribution. Small paid boosts on the two best-performing free posts,
  plus listing upgrades on marketplaces that charge to feature a listing.
  Never spent before day 5; only spent after a free post has already sold once.
- $20 — Tools and infrastructure. Domain name ($10-12/year), one month of a
  cheap landing-page or form tool if free tiers run out, and payment fees
  buffer. Free tiers are used first (GitHub Pages, Google Forms, Gumroad,
  Stripe payment links).
- $15 — Product validation. Small paid tests only: e.g. $5 to promote a poll
  or a waitlist post to the exact buyer audience, so the product is built for
  proven demand, not guessed demand.
- $20 — Emergency floor. Untouched until day 20. This is the "still alive"
  money that guarantees the agent can keep operating if the first product flops.
- $20 — Working float for refunds and fees. Refunds are paid instantly and
  without argument in the first 30 days; one angry buyer costs more than $19.

Accounting rule: every dollar in and out is logged in a single ledger file with
date, channel, amount, and running balance. The ledger is the source of truth;
if the ledger and the wallet disagree, the wallet is wrong and the ledger is
rebuilt from receipts the same day.
`);

sections.push(`## 2. PHASE 1 — VALIDATE AND BUILD (DAYS 1-3)

Goal by end of day 3: one product ready to sell, one service offer live, zero
dollars spent on ads.

Day 1 — Pick the product (morning) and the service (afternoon).
- List 10 product ideas the agent can build in under 6 hours each. Score each
  1-5 on: (a) buyer urgency, (b) agent can build it without new skills,
  (c) buyers already pay for similar things. Pick the top scorer; keep the
  runner-up as the day-10 backup product.
- Good product archetypes: a niche spreadsheet system (e.g. a freelancer
  invoice + tax tracker), a pack of 50 ready-to-use prompts for a specific job
  (real-estate listings, Etsy sellers, small restaurants), a Notion/Sheets
  template for a painful workflow. Price $12.
- Service offer: "48-hour research brief" or "spreadsheet built from your
  messy data in 24 hours", $29 flat, 3 slots per week. Write the offer in one
  page: what the buyer gets, what they send, delivery time, refund promise.
- Publish both offers the same day: product on Gumroad (or equivalent) and
  the service on one freelance marketplace plus one public post.

Day 2 — Build the product, and pre-sell the service.
- Build the full product. It must be genuinely usable, not a teaser: every
  promised sheet, prompt, or page present and tested end to end.
- Write the sales page: one clear headline stating the outcome, 5 bullets of
  what is inside, one screenshot or sample page, price, and a 7-day refund line.
- Send 10 direct outreach messages to people who publicly complained about the
  exact problem the product solves (comments, forum posts, reviews). No spam:
  one helpful reply plus one link, tailored to each person's words.

Day 3 — Launch and measure.
- Launch post on the two channels where the buyers already gather (for most
  niches: X and one niche community). Post the product, the service, and one
  free sample that proves quality.
- End-of-day checkpoint: at least 1 sale or 3 qualified conversations, or the
  offer is wrong. If zero interest, change the headline and the price ($12 ->
  $7) on day 4, not the product itself.

## 3. PHASE 2 — SELL AND COMPOUND (DAYS 4-14)

Goal by end of day 14: $250-$400 cumulative revenue, at least one channel
producing $20+/day, product reviews collected.

Daily operating rhythm (about 6 focused hours per day):
- Hour 1: fulfil overnight orders and answer every buyer message within 2
  hours. A fast reply is the cheapest marketing there is.
- Hours 2-4: distribution. Two new posts or outreach batches per day, always
  in the channel that sold yesterday. Repurpose the best-performing post into
  a second format (a post becomes a short thread; a thread becomes a sample
  download).
- Hour 5: build the next asset: a second product variant, a bundle, or an
  upsell (e.g. product + 30-minute setup help for $29).
- Hour 6: ledger, metrics, and one small experiment (new headline, new price,
  new channel).

Pricing ladder:
- Days 4-7: product $12, service $29. Collect the first 5 reviews by asking
  every buyer one question: "what almost stopped you buying?" Fix the top
  objection on the sales page the same day.
- Days 8-14: if 10+ sales, raise the product to $15 and add a $29 bundle
  (product + service-lite). If fewer than 10 sales, cut to $9 and add a
  "pay what you want" floor of $5 — volume first, margin later.

Paid distribution (only from day 5, only from the $25 bucket):
- Rule: spend $5 only on a post that already earned at least $12 organically.
  Boost winners, never rescue losers.
- Cap: $5/day. Stop any boost after $5 if it produced zero sales; double the
  next boost only if the previous one returned at least 2x.

Service pipeline:
- Keep 3 service slots open per week and raise the price $10 after every 3
  completed jobs with a 5-star outcome. By day 14 the service should be
  $39-$49 and booked 3-5 days ahead. If it is not booked, the offer page is
  the problem: rewrite the first two lines, not the price.

Day 10 checkpoint (hard gate):
- If cumulative revenue is under $100: kill the runner-up idea, pivot the
  product to the niche that produced the most conversations, and move the
  $20 emergency floor into distribution ($5/day for 4 days).
- If revenue is $100-$250: stay the course, launch the second product variant.
- If revenue is over $250: release the emergency floor early and put $20 into
  the best channel.

## 4. PHASE 3 — SCALE WHAT WORKS (DAYS 15-30)

Goal by day 30: $1,000+ cumulative net revenue, daily run-rate $50+/day,
and an asset (product + reviews + audience) that keeps earning after day 30.

Days 15-21 — Double down.
- 80% of effort goes to the single best channel and the single best product.
  Everything else is maintenance only.
- Launch the bundle as the flagship: product + second variant + service-lite
  for $39. Bundles lift average order value without new buyers.
- Start a tiny affiliate offer: 30% commission to anyone who sells the
  product. Even 3-5 affiliates posting once each beats another $5 boost.
- Add one new distribution format per week that costs nothing: a free sample
  pack, a public teardown, or a "how I built this" post that links the product.

Days 22-30 — Harvest and protect.
- Raise prices once more if demand is steady: product $19, bundle $49.
  Never raise price and change the offer in the same day; change one variable
  at a time so the cause of any sales drop is known.
- Every buyer gets one follow-up message on day 3 after purchase asking for a
  review and offering the bundle at a $10 discount. Reviews compound; a product
  with 20+ reviews sells itself.
- Days 28-30: stop all new experiments. Fulfil, collect, and bank. Write the
  30-day report: revenue by channel, cost per sale, best post, and the exact
  next 30-day plan. The report itself becomes a free lead magnet for month two.

Expected math (conservative case):
- Product: 60 sales x $12 avg = $720 gross.
- Service: 8 jobs x $35 avg = $280 gross.
- Gross revenue ~$1,000; costs ~$60-70 (tools, boosts, fees); net ~$930.
- Stretch case (one post goes modestly viral or one affiliate performs):
  120 product sales + 12 jobs = ~$1,800 gross, ~$1,700 net.
- Failure case (product never finds buyers): service-only revenue ~$150-250
  gross. The $20 floor keeps the agent alive to try the runner-up product.

## 5. DAILY MEASUREMENT (EVERY DAY, 15 MINUTES, NO EXCEPTIONS)

Track these five numbers in the ledger, same time each day:
1. Cash on hand (wallet balance, exact).
2. Revenue today and cumulative, split by product / service / other.
3. Visitors and conversion rate per channel (visitors, sales, revenue).
4. Cost per sale per channel (spend divided by sales from that channel).
5. Pipeline: open conversations, booked service slots, pending refunds.

Daily decisions driven by the numbers:
- A channel with 3 straight zero-revenue days is paused; its time moves to
  the best channel.
- A price that converts under 1% after 200 visitors is cut 25%.
- A product with a refund rate over 10% is fixed or pulled the same day.
- If cash on hand falls below $40 before day 20, all paid spend stops until
  revenue rebuilds it above $60.

## 6. RISK CONTROLS AND WHEN TO STOP OR PIVOT

Hard stops (stop the activity immediately, no debate):
- Any spend that would take cash below the $20 floor before day 20.
- Any "opportunity" requiring an upfront payment over $25, a subscription, or
  a crypto deposit. The plan never needs one.
- Any buyer asking for work outside the published offer, or any platform
  asking for credentials, wallet keys, or account access.
- A refund rate above 15% or a public complaint left unanswered for 24 hours:
  pause sales, fix the product, then relaunch.

Pivot triggers (change direction, keep the cash):
- Day 3: zero sales AND zero qualified conversations -> change headline and
  price, not the product.
- Day 7: under $30 revenue -> swap to the runner-up product; keep the service.
- Day 10: under $100 revenue -> move the emergency floor into distribution
  and cut the product price to $7.
- Day 14: no channel above $20/day -> drop the product, sell only the service
  at $49, and use outreach (free) as the only channel.
- Day 21: cumulative revenue under $300 -> stop scaling, protect the cash,
  finish the month on service-only revenue and write the post-mortem.

What this plan deliberately does NOT do:
- No day trading, no leverage, no options, no memecoins, no "10x in a week"
  schemes. A $100 account cannot survive one bad trade, and trading is not
  something the agent can execute better than the market.
- No paid ads before a free post has sold once. Unproven offers do not get
  money.
- No building for more than 3 days before selling. A product nobody buys is
  a hobby, not a business.

## 7. THE 30-DAY CALENDAR AT A GLANCE

- Days 1-3: validate, build, launch. Spend $0 on ads.
- Days 4-7: sell, collect first reviews, first $5 boosts on proven posts.
- Days 8-10: price ladder, second variant, day-10 hard gate.
- Days 11-14: bundle launch, service price rise, affiliate offer.
- Days 15-21: scale the winner, 80% effort on the best channel.
- Days 22-27: final price rise, review collection, bundle push.
- Days 28-30: no new experiments; fulfil, bank, report.

End state on day 30: a product with reviews, a service with a waitlist, a
ledger proving which channel earns, and $1,000+ net from a $100 start — plus
an asset that keeps earning in month two without another $100.
`);

const plan: string = sections.join("\n");
writeFileSync(join(outDir, "entry.txt"), plan, "utf8");


