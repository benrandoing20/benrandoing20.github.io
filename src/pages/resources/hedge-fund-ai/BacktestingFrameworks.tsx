import SimpleSubsectionDetail from '@/components/SimpleSubsectionDetail';

const BacktestingFrameworks = () => {
  const content = `
## Overview

**In this section:**
- [Overview](#overview)
- [Why Backtesting Matters](#why-backtesting-matters)
- [Event-Driven Simulation](#event-driven-simulation)
- [Modeling Realistic Trading Conditions](#modeling-realistic-trading-conditions)
- [Avoiding Data Leakage](#avoiding-data-leakage)
- [Evaluation and Walk-Forward Testing](#evaluation-and-walk-forward-testing)

## Overview

Once features are built, you have to test what they actually do. Backtesting is how hedge funds simulate their ideas across historical data — not just to measure performance, but to understand behavior under realistic trading conditions.

## Why Backtesting Matters

A backtesting framework does more than replay historical prices. It simulates realistic trading conditions that can dramatically alter each trade.

Without this realism, a strategy that looks profitable in theory can lose money in practice. The tiny details — a few basis points of slippage, a delayed fill, a hidden cost — compound over thousands of trades and can turn a winner into a loser.

The goal is not to produce the highest performance numbers but to measure **reliability**. The best strategies don't necessarily look flashy in simulation. They look steady, believable, and repeatable. Those are the ones that survive contact with live markets.

## Event-Driven Simulation

A robust backtesting engine models every event that happens in real trading:

**Events include:**
- Tick updates (new prices and quotes arriving)
- Order placements (your algorithm submitting a trade)
- Order fills (matching with counterparties)
- Order cancellations (timeouts or manual cancels)
- Market data gaps or delays

**Event-driven frameworks** process these in sequence, just as they would occur in reality. This ensures that the simulation respects causality — you can't trade on information you don't have yet.

**Popular frameworks:**

**Open-Source:**
- **Zipline**: Originally built by Quantopian, widely used for equity strategies
- **Backtrader**: Flexible Python framework with strong community support
- **VectorBT**: Vectorized backtesting for speed, good for high-frequency research
- **bt**: Clean API for portfolio backtesting
- **QuantConnect LEAN**: Open-source algorithmic trading engine

**Custom Internal Engines:**
Larger funds build proprietary engines in **C++** or **Rust** for speed and deterministic precision. These systems can replay millions of events per second and integrate directly with production execution systems.

## Modeling Realistic Trading Conditions

Beyond just simulating events in the right order, you need to model the **costs and constraints** that make real trading expensive and difficult. These are the frictions that separate theory from practice:

**Transaction Costs:**
- Exchange fees (e.g., 0.3 bps on equities)
- Broker commissions
- SEC fees and regulatory charges
- Different fee tiers based on volume

**Bid-Ask Spread:**
The difference between where you can buy (ask) and sell (bid). Crossing this spread costs money on every trade. For liquid stocks it might be 1-2 bps; for illiquid ones, 10-50 bps or more.

**Slippage:**
When you submit a market order, the price might move before you get filled. This is **market impact** — your order moves the market against you. Larger orders have bigger impact.

**Fill Models:**
Not every order gets filled immediately. Limit orders sit in the queue and might never execute. Models must simulate fill probability based on order book depth, volatility, and order size.

**Latency:**
There's a delay between when your algorithm decides to trade and when the order reaches the exchange. Realistic backtests add 1-10 milliseconds of latency (or more for slower systems).

**Borrow Costs (for shorts):**
Shorting a stock requires borrowing shares. Some stocks are expensive or impossible to borrow. Backtests must include borrow fees and availability constraints.

**Example:**

Let's say you're backtesting a momentum strategy that trades small-cap stocks:

- **Without realism**: Strategy returns 25% annually
- **Add bid-ask spread** (10 bps average): Returns drop to 18%
- **Add transaction costs** (5 bps per trade): Returns drop to 14%
- **Add slippage** (5 bps for market orders): Returns drop to 11%
- **Add latency** (orders delayed 5ms): Returns drop to 9%
- **Add borrow costs** (shorts cost 3% annually): Returns drop to 7%

Suddenly, your 25% strategy is a 7% strategy. But now it's **real**.

## Avoiding Data Leakage

One of the biggest pitfalls in research is **data leakage** — when information from the future sneaks into the model.

**Common sources of leakage:**

**Look-ahead bias:**
Using data that wouldn't have been available at the time. For example:
- Using adjusted prices before the adjustment happens
- Training on forward-filled data (filling gaps with future values)
- Using end-of-day data to make intraday decisions

**Survivorship bias:**
Backtests must include companies or instruments that **disappeared**, merged, or went bankrupt, because real traders would have encountered those too. If you only test on stocks that exist today, you're ignoring the failures — creating a fantasy world where only winners survive.

**Point-in-time data:**
Financial data gets revised. An earnings report from 2015 might have been restated in 2017. If you use the 2017 version in your 2015 backtest, that's leakage. You need **point-in-time snapshots** — what the data actually looked like when you would have seen it.

**Prevention techniques:**

**Walk-Forward Analysis:**
Train on period A, validate on period B, test on period C. Never let information from B or C leak into A. Then roll forward: train on B, test on C, and so on.

**Purged K-Fold Cross-Validation:**
A technique from Marcos López de Prado's book *Advances in Financial Machine Learning*. It splits data into folds but "purges" nearby samples to prevent information leakage across time-dependent data.

**Embargo Periods:**
After each training set, skip a buffer period (e.g., 1 week) before the test set begins. This prevents the model from seeing data too close to the training boundary.

## Evaluation and Walk-Forward Testing

Results are evaluated not just on returns but on **stability**:

**Metrics that matter:**
- **Sharpe Ratio**: Risk-adjusted returns (return / volatility)
- **Maximum Drawdown**: Worst peak-to-trough loss
- **Win Rate**: Percentage of profitable trades
- **Profit Factor**: Total profit / total loss
- **Turnover**: How much you trade (higher turnover = higher costs)
- **Consistency**: Does the strategy work across different time periods and market regimes?

Hedge funds look for consistent signal strength, Sharpe ratios that hold across time, and degradation under stress scenarios. The point is to test **how strategies fail**, not just how they succeed.

**Walk-forward testing workflow:**

1. Train model on 2020 data
2. Validate hyperparameters on early 2021
3. Test on late 2021
4. Roll forward: train on 2021, test on 2022
5. Continue rolling forward through present

This mimics how the model would have been used in reality — always training on the past and testing on the future.

A realistic backtesting system transforms research from guesswork into science. It lets you experiment freely while maintaining the rigor of the real world.
`;

  return (
    <SimpleSubsectionDetail
      category="Hedge Fund AI"
      categoryHref="/resources/hedge-fund-ai"
      title="Machine Learning Infrastructure"
      subtitle="Backtesting Frameworks"
      description="Simulating how strategies would have performed historically—building event-driven engines with realistic fill models, transaction costs, borrow fees, latency, and message loss to catch issues before live trading."
      lastUpdated="October 2025"
      content={content}
    />
  );
};

export default BacktestingFrameworks;

