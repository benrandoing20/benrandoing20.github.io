import SimpleSubsectionDetail from '@/components/SimpleSubsectionDetail';

const TransactionCostsAndSlippage = () => {
  const content = `
## Overview

**In this section:**
- [Why Transaction Costs Matter](#why-transaction-costs-matter)
- [Types of Trading Costs](#types-of-trading-costs)
- [The Square-Root Law](#the-square-root-law)
- [Market Impact Models](#market-impact-models)
- [Machine Learning for Cost Prediction](#machine-learning-for-cost-prediction)
- [Incorporating Costs into Backtests](#incorporating-costs-into-backtests)

Even the best strategy can fail if it ignores the true cost of trading. Transaction costs, including spreads, fees, and market impact, often turn theoretical alpha into real-world losses.

## Why Transaction Costs Matter

**Example:**

Strategy backtest (no costs): 25% annual return

Add realistic costs:
- Bid-ask spread (5 bps per trade): Return drops to 18%
- Exchange fees (2 bps): Return drops to 16%
- Market impact (3 bps): Return drops to 13%
- Slippage (2 bps): Return drops to 11%

Your 25% strategy is actually an 11% strategy. Still good, but very different from initial expectations.

**Why strategies fail from costs:**

**High turnover**: Trading 10x per day multiplies costs by 10x

**Large positions**: Market impact scales nonlinearly with size

**Illiquid assets**: Small-cap stocks have 50+ bps spreads vs 1 bps for large caps

**Poor timing**: Trading during volatile periods increases all costs

## Types of Trading Costs

The main types of costs are:

**Explicit costs:** Broker commissions, exchange fees, and taxes.

**Implicit costs:** The bid-ask spread and slippage, the difference between your intended price and the actual execution price.

**Market impact:** The price move caused by your own order.

**Explicit costs:**

**Broker commissions**: $0.001 to $0.005 per share (depends on volume tier)

**Exchange fees**: Vary by exchange and order type
- Maker: -$0.0025 per share (rebate for providing liquidity)
- Taker: +$0.0030 per share (pay for taking liquidity)

**SEC fees**: $0.0000278 per dollar of sales (US equities)

**Taxes**: Varies by jurisdiction

**Total explicit**: Typically 1 to 5 basis points per trade

**Implicit costs:**

**Bid-ask spread**: Difference between best bid and best ask

\\[\\text{Spread Cost} = \\frac{\\text{Ask} - \\text{Bid}}{\\text{Mid}} \\times 10000 \\text{ (bps)}\\]

Examples:
- Large-cap stocks: 1-3 bps
- Mid-cap stocks: 5-15 bps
- Small-cap stocks: 20-100 bps
- Illiquid stocks: 100-500 bps

**Slippage**: Price movement between decision and execution

You decide to buy at $100.00. By the time your order arrives, best ask is $100.05. You pay 5 cents more than expected.

**Market impact:**

Your own order moves the price against you:

**Temporary impact**: Price moves while you're trading, then recovers

**Permanent impact**: Lasting price shift after you're done (you revealed information)

## The Square-Root Law

To model these correctly, hedge funds analyze historical trade data to estimate how cost scales with trade size, liquidity, and volatility. The relationship is usually nonlinear: doubling your order size more than doubles the impact.

A common formula is the **square-root law of market impact**, which says that cost increases with the square root of the traded volume relative to daily volume.

**Formula:**

\\[\\text{Impact (bps)} = \\sigma \\sqrt{\\frac{Q}{V}}\\]

Where:
- \\(\\sigma\\) = daily volatility (in percent)
- \\(Q\\) = shares you want to trade
- \\(V\\) = average daily volume

**Example:**

Stock volatility: 2% daily
Daily volume: 1,000,000 shares
You want to trade: 100,000 shares (10% of daily volume)

\\[\\text{Impact} = 2\\% \\times \\sqrt{\\frac{100,000}{1,000,000}} = 2\\% \\times 0.316 = 0.63\\%\\]

Your trade will cost approximately 63 bps (0.63%) in market impact.

**Nonlinear scaling:**

- Trade 10K shares: \\(\\sqrt{0.01} = 0.1\\) → 20 bps
- Trade 40K shares: \\(\\sqrt{0.04} = 0.2\\) → 40 bps (4x shares, 2x cost)
- Trade 160K shares: \\(\\sqrt{0.16} = 0.4\\) → 80 bps (16x shares, 4x cost)

This square-root relationship aligns surprisingly well with empirical data across markets.

## Market Impact Models

Funds build **market impact models** that capture both temporary impact (price moves while your order executes) and permanent impact (lasting price shift after you're done).

**Temporary vs permanent impact:**

**Temporary impact:**
- Price moves as you trade
- Partially recovers after you finish
- Caused by order flow imbalance and liquidity consumption

**Permanent impact:**
- Lasting price change
- Does not recover
- Caused by information revelation (others infer you know something)

**Total cost:**

\\[\\text{Total Cost} = \\text{Temporary Impact} + \\text{Permanent Impact} + \\text{Spread}\\]

**Almgren-Chriss model:**

Sophisticated framework that decomposes impact:

\\[\\text{Cost} = \\frac{1}{2}\\gamma \\sigma X + \\eta \\frac{v}{V}\\]

Where:
- \\(\\gamma\\) = temporary impact coefficient
- \\(\\sigma\\) = volatility
- \\(X\\) = total shares to trade
- \\(\\eta\\) = permanent impact coefficient
- \\(v\\) = trading rate (shares per minute)
- \\(V\\) = average volume per minute

**Footprint effects:**

They also model **footprint effects**, where your trades signal information to others, causing spreads to widen or liquidity to vanish.

**How it happens:**

1. You start buying large size
2. Market makers notice aggressive buying
3. They widen spreads (ask price increases)
4. Other traders infer positive information
5. They start buying too, pushing price higher
6. Your remaining orders execute at worse prices

**Modeling footprint:**

\\[\\text{Spread}_t = \\text{Spread}_{\\text{base}} \\times (1 + \\alpha \\times \\text{CumulativeVolume}_t)\\]

As you trade more, spread widens proportionally.

## Machine Learning for Cost Prediction

Modern approaches use **machine learning regression** to predict execution cost per trade. Features can include volatility, order book depth, participation rate, and recent trade imbalance.

**Features for ML cost model:**

**Market features:**
- Current volatility (realized and implied)
- Bid-ask spread
- Order book depth at multiple levels
- Recent trade volume

**Order features:**
- Order size relative to daily volume
- Urgency (how fast you need to execute)
- Time of day
- Order type (market vs limit)

**Historical features:**
- Recent price momentum
- Trade imbalance (more buys or sells?)
- Number of trades (activity level)

**Target variable:**

Actual execution cost:

\\[\\text{Cost} = \\text{Arrival Price} - \\text{Execution Price}\\]

(For buys; reverse sign for sells)

**Model types:**

**Linear regression**: Simple baseline

**Gradient boosting** (XGBoost, LightGBM): Captures nonlinear relationships

**Neural networks**: Can model complex interactions

**Example workflow:**

1. Collect 1 year of execution data (100,000 trades)
2. Engineer features for each trade
3. Train XGBoost to predict cost (bps)
4. Use model to estimate costs in backtests

**Reinforcement learning:**

Some firms use **reinforcement learning** to train adaptive execution agents that learn how to trade more efficiently depending on market conditions.

**RL setup:**

**State**: Order book, volatility, remaining quantity

**Action**: How aggressive to trade (market order vs passive limit)

**Reward**: Negative cost (minimize cost = maximize reward)

The agent learns:
"When spreads are tight and volatility low, trade aggressively"
"When spreads are wide and volatility high, trade passively and wait"

## Incorporating Costs into Backtests

By incorporating these costs into backtests, funds get a more honest picture of performance. A strategy that looks profitable after realistic slippage and fees is far more likely to hold up live.

**Backtest with costs:**

For each trade in backtest:

1. **Decision**: Model says "buy 10,000 shares"

2. **Look up costs**:
   - Spread: 5 bps
   - Commission: 1 bp
   - Market impact: \\(2\\% \\times \\sqrt{10K/100K} = 0.63\\% = 63 bps\\)
   - Total: 69 bps

3. **Adjust execution price**:
   \\[\\text{Fill Price} = \\text{Mid Price} \\times (1 + 0.0069)\\]

4. **Calculate P&L using adjusted price**

**Portfolio-level costs:**

Aggregate costs across all trades:

\\[\\text{Total Costs} = \\sum_{i=1}^{N} \\text{Cost}_i \\times |\\text{Volume}_i|\\]

Report: "Strategy generated 15% return before costs, 9% after costs. Annual cost burden: 6%."

**Cost-aware strategy optimization:**

Modify strategy to reduce costs:
- Trade less frequently (lower turnover)
- Use larger buffers before rebalancing (avoid small trades)
- Concentrate in liquid names (lower impact)
- Split large orders over time (reduce impact)

Ignoring transaction costs, on the other hand, is like training for a marathon without gravity. You'll fly in simulation and collapse in reality.

**The brutal truth:**

Most academic strategies fail in practice not because the signal is wrong, but because costs eat all the alpha. Professional quant traders spend as much time modeling costs as they do finding signals.

Realistic cost modeling is what separates research from real trading.
`;

  return (
    <SimpleSubsectionDetail
      category="Hedge Fund AI"
      categoryHref="/resources/hedge-fund-ai"
      title="Simulation, Backtesting & Evaluation"
      subtitle="Transaction Costs & Slippage"
      description="Accurately modeling the true cost of trading, measuring market impact, price slippage, bid-ask spreads, and footprint effects across different liquidity regimes to get realistic estimates of strategy profitability after costs."
      lastUpdated="October 2025"
      content={content}
    />
  );
};

export default TransactionCostsAndSlippage;

