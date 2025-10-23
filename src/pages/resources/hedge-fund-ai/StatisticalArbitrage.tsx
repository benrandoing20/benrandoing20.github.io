import SimpleSubsectionDetail from '@/components/SimpleSubsectionDetail';

const StatisticalArbitrage = () => {
  const content = `
## Overview

**In this section:**
- [What is Statistical Arbitrage](#what-is-statistical-arbitrage)
- [Pairs Trading](#pairs-trading)
- [Cointegration and Mean Reversion](#cointegration-and-mean-reversion)
- [Portfolio-Level Stat-Arb](#portfolio-level-stat-arb)
- [Machine Learning Enhancements](#machine-learning-enhancements)
- [Execution and Risk Control](#execution-and-risk-control)

Statistical arbitrage, often shortened to stat-arb, is about finding relationships between assets that usually move together and trading when that relationship temporarily breaks. The bet is that prices will eventually converge again.

## What is Statistical Arbitrage

At its core, stat-arb exploits **temporary deviations from equilibrium**. When assets that normally track each other diverge, the strategy takes positions betting on convergence.

**Key principles:**

**Mean reversion**: Spreads between related assets tend to return to their historical average

**Market neutrality**: Positions are hedged so that overall market direction doesn't matter

**Statistical significance**: Trades are based on measurable deviations, not subjective judgment

**High frequency**: Many small trades, each with modest expected profit, aggregated into consistent returns

Unlike directional strategies that bet on market moves, stat-arb aims to be **market neutral**, profiting from relative value rather than absolute price changes.

## Pairs Trading

The simplest version is **pairs trading**. Suppose two airline stocks historically move almost in lockstep because they share similar business drivers. If one suddenly rallies while the other lags, a stat-arb model might short the outperformer and go long the laggard, betting that the spread between them will revert to its historical mean.

**Classic pairs trading workflow:**

1. **Identify correlated pairs**: Screen universe for stocks with high correlation (e.g., > 0.8)

2. **Test for cointegration**: Verify that the relationship is stable over time

3. **Calculate spread**: \\(S_t = P_1(t) - \\beta P_2(t)\\), where \\(\\beta\\) is the hedge ratio

4. **Model spread dynamics**: Estimate mean and standard deviation of \\(S_t\\)

5. **Define entry rules**: Enter when \\(|S_t - \\mu| > 2\\sigma\\) (spread deviates 2 standard deviations)

6. **Define exit rules**: Exit when spread reverts to mean or hits stop loss

7. **Execute**: Short expensive stock, long cheap stock, in ratio \\(\\beta\\)

**Example:**

Coca-Cola (KO) and PepsiCo (PEP) typically trade with a stable price ratio. Historical spread \\(S_t = \\text{KO} - 0.95 \\times \\text{PEP}\\) has mean $2.00 and standard deviation $0.50.

Today: KO = $55, PEP = $60, so \\(S_t = 55 - 0.95(60) = -2.00\\)

Normal spread is $2.00, but current spread is -$2.00, a **4 standard deviation** move.

**Trade**: Long KO, short 0.95 shares of PEP per share of KO

**Thesis**: Spread will revert toward $2.00, generating profit

## Cointegration and Mean Reversion

For pairs trading to work reliably, the assets must be **cointegrated**, not just correlated.

**Correlation vs Cointegration:**

**Correlation**: Measures how returns move together (can be high even if price levels drift apart)

**Cointegration**: Means price levels maintain a stable long-term relationship

Two stocks can have high correlation but not be cointegrated if their price levels diverge over time. Cointegration is stronger because it implies a stable equilibrium relationship.

**Testing for cointegration:**

The **Engle-Granger test**:

1. Run regression: \\(P_1(t) = \\alpha + \\beta P_2(t) + \\epsilon_t\\)
2. Extract residuals: \\(\\epsilon_t = P_1(t) - (\\alpha + \\beta P_2(t))\\)
3. Test if residuals are stationary using Augmented Dickey-Fuller test
4. If residuals are stationary, the pair is cointegrated

**Mean-reversion models:**

Once cointegration is established, the spread is modeled as a **mean-reverting process**.

**Ornstein-Uhlenbeck process:**

\\[dS_t = \\theta(\\mu - S_t)dt + \\sigma dW_t\\]

Where:
- \\(\\theta\\) = speed of mean reversion (how fast spread returns to mean)
- \\(\\mu\\) = long-term mean of spread
- \\(\\sigma\\) = volatility of spread
- \\(dW_t\\) = random Brownian motion

Higher \\(\\theta\\) means faster reversion (more profitable trades).

**Error-correction model:**

\\[\\Delta S_t = \\alpha + \\beta (S_{t-1} - \\mu) + \\epsilon_t\\]

If \\(\\beta < 0\\), spread reverts to mean. The magnitude of \\(\\beta\\) indicates reversion speed.

## Portfolio-Level Stat-Arb

More sophisticated approaches look at **groups or portfolios** of correlated assets rather than pairs.

**Basket trading:**

Instead of pairing individual stocks, create baskets:
- Long basket: 10 undervalued stocks in a sector
- Short basket: 10 overvalued stocks in the same sector
- Hedge ratio adjusts for sector beta and volatility

**Principal Component Analysis (PCA):**

Decompose a universe of stocks into orthogonal factors (principal components) representing common drivers.

**Process:**

1. Compute returns for N stocks over T periods
2. Run PCA to extract K principal components
3. Identify which stocks load heavily on each component
4. Trade deviations: If a stock's price diverges from what the PCA model predicts, take a position betting on convergence

**Example:**

PCA on tech stocks reveals:
- PC1: Overall tech sector movement (70% of variance)
- PC2: Growth vs value split (15% of variance)
- PC3: Hardware vs software (8% of variance)

If Apple's price deviates from what PC1, PC2, and PC3 predict (based on its loadings), the model flags it as mispriced relative to peers.

**Statistical factors:**

Instead of fundamental factors (value, momentum, quality), stat-arb models learn **data-driven factors** that capture correlations:

- Clustering algorithms group stocks with similar behavior
- Autoencoders learn latent factors that explain co-movement
- Factor models predict each stock's return based on factor exposures

## Machine Learning Enhancements

Modern stat-arb systems integrate machine learning to enhance signal quality beyond linear cointegration.

**Gradient Boosting for Spread Prediction:**

Instead of assuming constant mean reversion speed, train XGBoost or LightGBM to predict:
- How fast will this spread revert?
- What's the probability of hitting the target?
- What features (volatility, volume, regime) affect reversion?

**Features:**
- Current spread level
- Spread volatility (how noisy has it been?)
- Volume imbalance between the two stocks
- Market regime (high vol vs low vol)
- Recent news sentiment

**Target**: Time to reversion or magnitude of reversion

**Neural Networks for Nonlinear Relationships:**

LSTMs or transformers can model **time-varying cointegration**, where the relationship between assets changes slowly over time.

**Architecture:**

Input: 60-day history of prices, volumes, spreads
Hidden layers: LSTM processes sequence
Output: Predicted spread in 1 day, 5 days, 10 days

This captures patterns like: "When volatility spikes, reversion slows down" or "During earnings season, spreads widen temporarily."

**Clustering for Pair Discovery:**

Instead of manually selecting pairs, use clustering:

1. Compute feature vectors for all stocks (returns, volatility, sector, size)
2. Apply k-means or hierarchical clustering
3. Stocks within the same cluster are candidates for pairs trading
4. Test all pairs within each cluster for cointegration

**Reinforcement Learning for Position Sizing:**

Train an RL agent to decide:
- How large should the position be given the current spread?
- When should we exit early (before mean reversion completes)?
- How should we adjust for market regime?

The agent learns optimal policies by maximizing risk-adjusted returns across thousands of historical episodes.

## Execution and Risk Control

Execution speed and risk control matter immensely. Spreads can widen further before converging, and correlated assets can diverge permanently if the economic link breaks.

**Execution considerations:**

**Market impact**: Entering large positions can move prices against you. Use algorithms like VWAP to minimize impact.

**Timing**: Spreads may widen before reverting. Enter gradually rather than all at once.

**Liquidity**: Ensure both legs of the trade have sufficient liquidity to enter and exit cleanly.

**Borrowing costs**: Shorting stocks incurs borrow fees. Some stocks are expensive or impossible to borrow.

**Risk management:**

**Stop losses**: Exit if spread widens beyond a threshold (e.g., 4 standard deviations). Don't wait for convergence if the relationship has broken.

**Position limits**: Cap exposure to any single pair or sector to prevent concentration risk.

**Volatility targeting**: Scale position size inversely with spread volatility. When spreads are noisy, trade smaller.

**Correlation monitoring**: Continuously track correlations. If they drop suddenly, the pair may no longer be cointegrated.

**Regime awareness**: Mean reversion works best in calm markets. During crises, correlations spike and spreads can stay wide for extended periods.

**Cross-factor hedging**: Ensure the portfolio is neutral to:
- Market beta (insulated from broad market moves)
- Sector exposure (no concentration in tech, energy, etc.)
- Style factors (value, momentum, size)

**Example risk controls:**

If spread volatility doubles:
- Cut position size in half
- Widen stop-loss levels
- Reduce leverage

If correlation between pairs drops below 0.6:
- Close the position
- Remove the pair from the trading universe
- Re-test for cointegration after market stabilizes

## Why Stat-Arb Works

At its heart, statistical arbitrage is about exploiting **small inefficiencies** that most of the market overlooks. It works best when trades are numerous, independent, and disciplined: a portfolio of thousands of tiny edges rather than one big bet.

**The edge comes from:**

**Speed**: Detecting and trading mispricings before others

**Data**: Access to high-quality, low-latency market data

**Models**: Better prediction of reversion speed and probability

**Execution**: Minimizing costs and impact

**Discipline**: Sticking to rules even when spreads widen temporarily

Stat-arb doesn't try to predict market direction. It assumes markets are mostly efficient but occasionally deviate in predictable ways. By systematically harvesting these small deviations, funds generate steady, uncorrelated returns.
`;

  return (
    <SimpleSubsectionDetail
      category="Hedge Fund AI"
      categoryHref="/resources/hedge-fund-ai"
      title="Quantitative Trading Strategies"
      subtitle="Statistical Arbitrage"
      description="Finding pairs or groups of assets that move together and trading when they diverge. Using cointegration and mean reversion to capture relative value opportunities that should converge back."
      lastUpdated="October 2025"
      content={content}
    />
  );
};

export default StatisticalArbitrage;

