import SimpleSubsectionDetail from '@/components/SimpleSubsectionDetail';

const LimitOrderBookSimulation = () => {
  const content = `
## Overview

**In this section:**
- [Why Order Book Simulation Matters](#why-order-book-simulation-matters)
- [Historical Replay](#historical-replay)
- [Synthetic Simulation](#synthetic-simulation)
- [Queue Position Modeling](#queue-position-modeling)
- [Latency and Priority Rules](#latency-and-priority-rules)
- [Applications and Use Cases](#applications-and-use-cases)

Every trade you place interacts with the limit order book (LOB), the constantly updating list of buy and sell orders at different price levels. Understanding how your orders would have been filled in the past is essential for realistic backtesting.

## Why Order Book Simulation Matters

In basic backtests, trades are often assumed to happen instantly at historical prices. In reality, liquidity is limited, queue positions matter, and other traders are competing for the same fills.

**What gets missed in simple backtests:**

**Queue dynamics**: Your order sits behind others at the same price level

**Partial fills**: Only part of your order executes before the level moves

**Order cancellations**: Liquidity disappears before you get filled

**Adverse selection**: You get filled precisely when the market is about to move against you

**Latency**: Delays between decision and execution

These details can make the difference between a strategy that looks profitable (20% returns) and one that actually is (5% returns after realistic execution).

## Historical Replay

This method uses recorded order book data, often millisecond by millisecond, to replay the market as it actually happened. The simulator processes your hypothetical trades against that stream, updating queue positions, partial fills, and cancellations as they would have occurred.

**Data requirements:**

**Full order book snapshots**: Best bid/ask and multiple levels of depth

**All order events**: New orders, cancellations, modifications, executions

**Timestamps**: Microsecond precision

**Trade tape**: Actual executions with prices and sizes

**Simulation process:**

1. **Initialize**: Start with order book state at time \\(t_0\\)

2. **Stream events**: Process each order book update sequentially

3. **Track queue position**: When you place an order, record your position in the queue

4. **Simulate fills**: When trades occur at your price level, estimate fill probability based on queue position

5. **Update P&L**: Record execution prices and calculate realized returns

**Queue position mechanics:**

If there are 10,000 shares bid at $100 and you add 1,000 shares, you're at the back of the queue.

When trades happen at $100, shares are filled in order:
- First 5,000 shares → earlier orders get filled
- Next 1,000 shares → you get filled
- Market moves before more fills → you're partially filled (only got 500 shares)

**Fill probability model:**

\\[P(\\text{fill}) = \\min\\left(1, \\frac{V_{\\text{traded}}}{Q_{\\text{ahead}} + \\frac{Q_{\\text{yours}}}{2}}\\right)\\]

Where:
- \\(V_{\\text{traded}}\\) = volume executed at your price level
- \\(Q_{\\text{ahead}}\\) = shares ahead of you in queue
- \\(Q_{\\text{yours}}\\) = your order size

**Advantages:**

**Highly accurate**: Uses actual market data

**Realistic**: Captures true liquidity constraints

**Detailed**: Models exact execution dynamics

**Challenges:**

**Data intensive**: Terabytes of order book data

**Computationally expensive**: Processing millions of events

**Storage**: Requires specialized time-series databases

**Cost**: Order book data is expensive to acquire

This produces highly accurate execution results, though it requires massive data and compute resources.

## Synthetic Simulation

When full LOB data isn't available, funds build **agent-based models** to generate realistic synthetic order flow. Each "agent" represents a trader type (market makers, momentum traders, or liquidity takers) interacting through rules that mimic real-world behavior.

**Agent types:**

**Market makers:**
- Post quotes on both sides
- Adjust spreads based on volatility and inventory
- Cancel when adverse information arrives
- Repost after price moves

**Momentum traders:**
- Buy when price rises
- Sell when price falls
- Use market orders (take liquidity)
- Create short-term trends

**Mean reversion traders:**
- Buy when price drops below moving average
- Sell when price rises above
- Use limit orders
- Provide counter-trend liquidity

**Noise traders:**
- Trade randomly
- Create baseline liquidity
- Represent uninformed flow

**Informed traders:**
- Have advance information about fundamentals
- Trade aggressively
- Cause price discovery
- Create adverse selection for market makers

**Simulation algorithm:**

1. **Initialize order book**: Set initial bid/ask and depth

2. **Agent decision loop**:
   - Each agent observes current state (price, spread, volume)
   - Decides whether to place, cancel, or modify orders
   - Executes action

3. **Matching engine**: Process orders using price-time priority

4. **Update state**: Recalculate bid/ask, spread, depth

5. **Repeat**: Continue for desired simulation period

**Calibration:**

Tune agent parameters so that simulated market statistics match real data:
- Bid-ask spread distribution
- Order arrival rates
- Trade size distribution
- Price volatility
- Autocorrelation of returns

**Machine learning calibration:**

Train a generative model (GAN or VAE) on real order book data, then use it to generate synthetic order flow that's statistically indistinguishable from reality.

This creates plausible microstructure dynamics, letting you test how strategies behave under various conditions.

## Queue Position Modeling

More advanced systems include **queue position modeling**, where your order's probability of execution depends on where it sits in the book, and **order priority rules**, which differ between exchanges.

**Priority rules vary by exchange:**

**Price-time priority** (most common):
Orders matched first by price, then by arrival time

**Pro-rata matching**:
Volume distributed proportionally among orders at same price level

\\[\\text{Fill}_i = V_{\\text{traded}} \\times \\frac{Q_i}{\\sum_j Q_j}\\]

**Size priority**:
Larger orders get filled first (rare)

**Queue position dynamics:**

Your position changes when:
- New orders arrive ahead of you (push you back)
- Orders ahead cancel (move you forward)
- Price level is partially filled (you move up if ahead orders get filled)

**Modeling queue uncertainty:**

Since you can't observe exact queue position in real markets, simulate a distribution:

\\[P(\\text{position} = k) = \\text{Beta}(\\alpha, \\beta)\\]

Sample from this distribution to model uncertainty about where you actually are in the queue.

## Latency and Priority Rules

Some funds even simulate **latency effects**, how delays in receiving or sending orders change performance.

**Types of latency:**

**Market data latency**: Time between exchange event and you seeing it

**Processing latency**: Time to make trading decision

**Order submission latency**: Time between decision and order arriving at exchange

**Total latency**: Sum of all delays (typically 1-50 milliseconds)

**Impact on strategy:**

**High-frequency strategies**: 1ms latency can be fatal

**Medium-frequency**: 10-50ms matters for execution quality

**Low-frequency**: Latency less important but still affects fills

**Modeling latency:**

Add random delay between decision and execution:

\\[t_{\\text{execution}} = t_{\\text{decision}} + \\text{Latency}\\]

Where Latency can be:
- Constant (deterministic)
- Random (Gaussian or exponential distribution)
- Time-varying (worse during market stress)

**Example:**

Your model says "buy at $100.00" at time \\(t\\).

With 10ms latency:
- Order arrives at \\(t + 10\\)ms
- Best ask is now $100.02 (market moved)
- You get filled at worse price or not at all

This 2 cent difference, repeated across thousands of trades, can destroy strategy profitability.

## Applications and Use Cases

These simulations can test everything from execution algorithms (like VWAP or adaptive participation strategies) to market-making policies, arbitrage timing, and liquidity shocks.

**Execution algorithm testing:**

Test TWAP, VWAP, or custom algorithms under realistic conditions:
- How much slippage occurs?
- What's the fill rate?
- How often do orders sit unfilled?

**Market-making strategy:**

Test different quoting strategies:
- Tight spreads vs wide spreads
- Aggressive posting vs passive
- Inventory skewing effectiveness

**Arbitrage strategies:**

Model race conditions:
- Can you capture the arbitrage before others?
- How often do you get picked off by faster traders?

**Liquidity stress scenarios:**

Simulate flash crashes or liquidity evaporation:
- Can you exit positions?
- How much slippage during panic selling?

**Strategic order placement:**

Test different order types:
- Limit orders vs market orders
- Immediate-or-cancel vs good-till-cancel
- Hidden orders vs displayed

By replaying history or generating lifelike markets, LOB simulations bridge the gap between theoretical strategy returns and what would actually have been achieved under real microstructure conditions.

**Key insight:**

A strategy that ignores microstructure is a strategy that hasn't been properly tested. Order book simulation is where theory meets the friction of real markets.
`;

  return (
    <SimpleSubsectionDetail
      category="Hedge Fund AI"
      categoryHref="/resources/hedge-fund-ai"
      title="Simulation, Backtesting & Evaluation"
      subtitle="Limit Order Book Simulation"
      description="Simulating realistic order book dynamics, replaying historical limit order books, generating synthetic order flow with agent-based models, modeling queue position dynamics, and testing strategies under realistic market microstructure conditions."
      lastUpdated="October 2025"
      content={content}
    />
  );
};

export default LimitOrderBookSimulation;

