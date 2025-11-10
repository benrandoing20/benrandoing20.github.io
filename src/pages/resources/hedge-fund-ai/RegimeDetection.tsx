import SimpleSubsectionDetail from '@/components/SimpleSubsectionDetail';

const RegimeDetection = () => {
  const content = `
## Overview

**In this section:**
- [Overview](#overview)
- [What Are Market Regimes](#what-are-market-regimes)
- [Hidden Markov Models](#hidden-markov-models)
- [Unsupervised Clustering](#unsupervised-clustering)
- [Bayesian Change-Point Detection](#bayesian-change-point-detection)
- [Modern Dimensionality Reduction](#modern-dimensionality-reduction)
- [Using Regimes in Practice](#using-regimes-in-practice)

## Overview

Markets do not move in a single, continuous state, they shift between distinct regimes. Sometimes markets are calm and trending; other times, they are volatile, illiquid, or risk-averse. Recognizing which regime you are in can completely change how strategies behave.

## What Are Market Regimes

A **market regime** is a distinct state of market behavior characterized by specific statistical properties.

**Common regimes:**

In **bull markets** or **risk-on** environments, markets exhibit steady upward trends with low volatility. Risky assets move together with high correlations, credit spreads narrow as investors embrace risk, and momentum and growth strategies tend to work well. These are the periods when optimism dominates and capital flows freely into equities and other risk assets.

**Bear markets** or **risk-off** regimes are characterized by sharp declines or choppy sideways action. Volatility spikes as uncertainty rises, and investors flee to safety—bonds and gold rally while equities sell off. Credit spreads widen as default risk increases, and defensive and value strategies typically outperform as investors prioritize capital preservation over growth.

**High volatility** or **crisis** regimes represent the most extreme market conditions. Price swings become violent and unpredictable, liquidity evaporates as market participants pull back, and correlations spike toward 1 as everything moves together in panic. Market makers widen their spreads dramatically, and strategies that rely on mean-reversion or arbitrage often struggle as normal relationships break down.

In **low volatility** or **quiet market** regimes, daily price movements are small and predictable. Liquidity is abundant, patterns are stable, and technical strategies tend to work well. Options become cheap as implied volatility compresses, creating opportunities for volatility buyers but challenging environments for sellers.

Markets also alternate between **trending** and **mean-reverting** regimes. Some periods strongly favor momentum strategies that ride trends, while others favor contrarian approaches that bet on reversals. Regime detection helps identify which dynamic is currently dominant, allowing traders to adapt their strategies accordingly rather than fighting the prevailing market character.

## Hidden Markov Models

One common approach is the **Hidden Markov Model (HMM)**. In an HMM, the market is assumed to transition between hidden states according to certain probabilities, while the observed data provides clues about which state we're currently in.

**Model Structure:**

**States**: \\(S_1, S_2, ..., S_k\\) (e.g., "low vol", "high vol", "crisis")

**Observations**: \\(O_t\\) (returns, volatility, spreads)

**Transition probabilities**: \\(P(S_t = j | S_{t-1} = i)\\)

How likely is it to move from state \\(i\\) to state \\(j\\)?

**Emission probabilities**: \\(P(O_t | S_t = i)\\)

Given we're in state \\(i\\), what distribution of observations do we expect?

**Training:**

The model learns:
1. How many states exist
2. How often we transition between states
3. What observations look like in each state

**Inference:**

Given today's returns and volatility, the model estimates: "We are 80% likely in the high-volatility state."

**Example:**

A two-state HMM for volatility regimes:
- **State 1 (Low Vol)**: Average daily return = 0.05%, volatility = 0.8%
- **State 2 (High Vol)**: Average daily return = -0.1%, volatility = 2.5%
- Transition probability: 5% chance of switching states each day

When the market suddenly drops 3% in a day, the model infers: "We likely transitioned to State 2 (High Vol)."

**Applications:**

- Adjust leverage based on detected state
- Switch between trend-following and mean-reversion strategies
- Increase hedging when transitioning to crisis state

## Unsupervised Clustering

Another powerful technique is **unsupervised clustering**. Algorithms group historical data into clusters based on features, with each cluster representing a potential market regime.

**Common algorithms:**

**k-Means Clustering:**

Partitions data into \\(k\\) clusters by minimizing within-cluster variance.

**Process:**
1. Define features: volatility, return, correlation, VIX, credit spreads
2. Normalize features (z-score)
3. Run k-means with \\(k\\) = 3 or 4 states
4. Each day gets assigned to the nearest cluster centroid
5. Label clusters as "calm", "volatile", "trending", etc.

**Gaussian Mixture Models (GMM):**

Like k-means but assumes each cluster is a Gaussian distribution. Provides **probabilities** of belonging to each cluster rather than hard assignments.

Useful when regimes overlap or when you want to model uncertainty about the current state.

**Hierarchical Clustering:**

Builds a tree (dendrogram) of nested clusters. Helps identify sub-regimes within broader regimes.

Example:
- Top level: "Calm" vs "Stressed"
- Within "Calm": "Trending" vs "Mean-reverting"
- Within "Stressed": "Moderate volatility" vs "Crisis"

**Features for clustering:**

The choice of features determines what regimes you detect:

**Return-based:**

- Average daily return
- Return skewness (are big moves up or down?)
- Kurtosis (fat tails?)

**Volatility-based:**

- Realized volatility (standard deviation of returns)
- Volatility of volatility (how unstable is volatility itself?)

**Correlation-based:**

- Average cross-asset correlation
- Dispersion (how much individual stocks differ from index)

**Liquidity/Microstructure:**

- Bid-ask spreads
- Volume and turnover
- Order book depth

**Macro:**

- VIX level
- Credit spreads (high yield vs investment grade)
- Yield curve slope

## Bayesian Change-Point Detection

Rather than classifying fixed states, **change-point detection** focuses on identifying **when transitions occur**.

**Bayesian Online Change-Point Detection:**

Monitors incoming data and estimates the probability that a regime change just happened.

**How it works:**

At each time step, the algorithm computes:
\\[P(\\text{regime change at time } t | \\text{data up to } t)\\]

If this probability exceeds a threshold, a regime change is flagged.

**Example:**

You're monitoring daily returns. The model expects returns from \\(N(0.05\\%, 0.8\\%)\\) (normal regime).

Suddenly, returns shift to \\(N(-0.2\\%, 2.5\\%)\\) (stressed regime).

Change-point detection identifies: "A regime shift likely occurred 3 days ago with 85% confidence."

**Advantages:**

- Detects shifts quickly
- Doesn't require pre-defined states
- Provides confidence estimates

**Applications:**

- Alert traders when market character changes
- Trigger automatic portfolio rebalancing
- Pause strategies that are regime-dependent

## Modern Dimensionality Reduction

High-dimensional market data (prices, volumes, spreads across hundreds of assets) can be reduced to low-dimensional representations that reveal regimes.

**t-SNE (t-Distributed Stochastic Neighbor Embedding):**

Maps high-dimensional data to 2D or 3D space, preserving local structure. Useful for **visualizing** clusters.

**Process:**

1. Compute features for each day: returns, volatility, correlations
2. Apply t-SNE to reduce to 2 dimensions
3. Plot each day as a point
4. Clusters naturally emerge (calm days group together, crisis days group together)
5. Manually or automatically label clusters as regimes

**UMAP (Uniform Manifold Approximation and Projection):**

Similar to t-SNE but faster and better at preserving global structure. Gaining popularity for regime visualization.

**Autoencoders:**

Neural networks that compress data into a low-dimensional latent space and then reconstruct it.

**Regime detection workflow:**

1. Train autoencoder on historical market data
2. Extract latent representations (e.g., 3 latent factors)
3. Cluster the latent space using k-means or GMM
4. Each cluster represents a regime

**Advantage:** The latent factors might capture interpretable concepts like "risk appetite", "liquidity stress", or "momentum strength".

**Self-Organizing Maps (SOM):**

Neural networks that learn a 2D grid representation of high-dimensional data. Each grid cell represents a prototype market state.

Useful for:

- Visualizing regime structure
- Identifying rare or extreme regimes
- Tracking regime transitions over time

## Using Regimes in Practice

Regime detection doesn't just describe the past — it **shapes how models and portfolios behave in real time**.

**Strategy Selection:**

Different strategies work in different regimes:

**Trend-following**: Works in trending regimes, fails in choppy ones

**Mean-reversion**: Works in range-bound regimes, fails in strong trends

**Volatility arbitrage**: Works in calm regimes with predictable vol, fails in crisis

By detecting regimes, funds can:

- Activate or deactivate specific strategies
- Blend strategies dynamically based on current regime
- Weight strategies by recent regime-specific performance

**Dynamic Leverage:**

Adjust portfolio leverage based on regime:

- **Calm regime**: Increase leverage (low risk, stable returns)
- **Volatile regime**: Reduce leverage (high risk, protect capital)
- **Crisis regime**: Cut leverage dramatically or go to cash

**Risk Management:**

Set position limits and stop-losses based on regime:

- In calm markets: Tolerate 2% daily loss
- In volatile markets: Cut positions at 1% daily loss
- In crisis: Implement strict risk limits and increase liquidity

**Portfolio Rotation:**

Rotate exposures based on regime:

- **Risk-on**: Overweight equities, emerging markets, high yield
- **Risk-off**: Overweight bonds, gold, defensive sectors
- **High vol**: Shift to cash, short vol products, tail hedges

**Example Workflow:**

1. Every day, compute current regime probability using HMM
2. If P(high vol regime) > 70%:
   - Reduce leverage from 2x to 1x
   - Pause momentum strategy
   - Activate mean-reversion strategy
   - Buy VIX calls as hedge
3. If P(calm regime) > 80%:
   - Increase leverage back to 2x
   - Reactivate momentum strategy
   - Reduce hedges

## The Most Important Forecast

The power of regime modeling lies in its ability to **contextualize every other prediction**.

Price forecasts make sense only within a regime. A signal that says "buy momentum stocks" is valuable in a trending regime but dangerous in a mean-reverting one.

Volatility expectations depend on regime. A GARCH model trained on calm periods will badly underestimate risk in a crisis.

Knowing when the world around you has shifted is often the most important forecast of all. It's the difference between staying in the game and being forced out at the worst possible time.

Regimes are not just states of the market — they are states of opportunity and risk. Detecting them early gives you the awareness to adapt before everyone else does.
`;

  return (
    <SimpleSubsectionDetail
      category="Hedge Fund AI"
      categoryHref="/resources/hedge-fund-ai"
      title="Market Prediction Models"
      subtitle="Regime Detection"
      description="Identifying when market conditions fundamentally change—using hidden Markov models and clustering to detect shifts between risk-on/risk-off, high/low volatility, or liquid/illiquid regimes."
      lastUpdated="October 2025"
      content={content}
    />
  );
};

export default RegimeDetection;

