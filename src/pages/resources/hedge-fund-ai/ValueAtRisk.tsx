import SimpleSubsectionDetail from '@/components/SimpleSubsectionDetail';

const ValueAtRisk = () => {
  const content = `
## Overview

**In this section:**
- [Overview](#overview)
- [What is Value at Risk](#what-is-value-at-risk)
- [Expected Shortfall](#expected-shortfall)
- [Parametric VaR](#parametric-var)
- [Historical VaR](#historical-var)
- [Monte Carlo VaR](#monte-carlo-var)
- [Machine Learning Extensions](#machine-learning-extensions)

## Overview

Value at Risk, or VaR, is one of the most widely used risk measures in finance. It answers a simple question: what is the most I could lose over a given period, with a given level of confidence?

## What is Value at Risk

For example, a daily 95% VaR of one million dollars means that on 95 out of 100 trading days, losses should not exceed that amount. But there's still a 5% chance you lose more, and that tail risk is critical to understand.

**Formal definition:**

VaR at confidence level \\(\\alpha\\) is the loss threshold such that:

\\[P(\\text{Loss} > \\text{VaR}_\\alpha) = 1 - \\alpha\\]

Common confidence levels:

- 95% VaR: Expect to exceed this loss 1 day out of 20
- 99% VaR: Expect to exceed this loss 1 day out of 100
- 99.9% VaR: Expect to exceed this loss 1 day out of 1000

**Example:**

Portfolio value: $100 million
Daily 99% VaR: $2 million

This means: On 99% of days, losses will be less than $2 million (2% of portfolio value).

**Why VaR matters:**

- **Risk limits**: Set position sizes and leverage based on VaR budgets
- **Regulatory capital**: Banks must hold capital against VaR
- **Performance measurement**: Compare returns to VaR to assess risk-adjusted skill
- **Investor reporting**: Communicate risk in understandable terms

## Expected Shortfall

VaR has a major limitation: it doesn't tell you how bad things get when you exceed the threshold. A 99% VaR of $2 million means nothing if the other 1% of days average $50 million losses.

**Expected Shortfall (ES)**, also known as Conditional VaR or CVaR, measures the average of those worst-case losses:

\\[\\text{ES}_\\alpha = \\mathbb{E}[\\text{Loss} | \\text{Loss} > \\text{VaR}_\\alpha]\\]

It's the expected loss given that you've exceeded VaR.

**Example:**

99% VaR = $2 million
99% ES = $4 million

This means: When losses exceed the $2 million threshold (1% of days), they average $4 million.

ES is **more informative** than VaR because it captures tail risk. Regulators increasingly prefer ES over VaR for capital requirements.

## Parametric VaR

**Parametric VaR** assumes returns follow a known distribution, usually normal. It uses portfolio mean and standard deviation, combined with correlations between assets, to estimate loss probabilities. It's fast and simple but can underestimate risk when markets behave non-normally.

**Formula:**

\\[\\text{VaR}_\\alpha = \\mu - z_\\alpha \\sigma\\]

Where:

- \\(\\mu\\) = expected portfolio return
- \\(\\sigma\\) = portfolio standard deviation
- \\(z_\\alpha\\) = z-score for confidence level \\(\\alpha\\)

For 95% confidence: \\(z_{0.95} = 1.65\\)

For 99% confidence: \\(z_{0.99} = 2.33\\)

**Example:**

Daily return: \\(\\mu = 0.05\\%\\)
Daily volatility: \\(\\sigma = 1.5\\%\\)
99% VaR = \\(0.05\\% - 2.33 \\times 1.5\\% = -3.44\\%\\)

For a $100M portfolio: 99% VaR = $3.44M

**Advantages:**

- **Fast**: Just need mean and covariance
- **Analytical**: No simulation required
- **Intuitive**: Based on familiar statistics

**Limitations:**

- **Assumes normality**: Real returns have fat tails (more extreme moves than normal distribution predicts)
- **Linear**: Doesn't handle options or other nonlinear instruments well
- **Constant volatility**: Misses volatility clustering

## Historical VaR

**Historical VaR** uses actual past returns to simulate what losses would have been. It's intuitive and non-parametric, meaning it doesn't assume a distribution. But it relies heavily on the chosen look-back window and can miss unprecedented events.

**Method:**

1. Collect historical returns for all assets (e.g., last 500 days)
2. Revalue portfolio using each historical return scenario
3. Sort outcomes from worst to best
4. VaR is the loss at the \\((1-\\alpha)\\) percentile

**Example:**

500 days of history, 99% confidence

After sorting portfolio returns:
- Worst day: -8%
- 5th worst day (1% of 500): -3.5%
- 25th worst day (5% of 500): -2.1%

99% VaR = 3.5% (the 5th worst day)

**Advantages:**

- **No distributional assumptions**: Captures actual market behavior
- **Handles fat tails**: If history had crashes, they're in the data
- **Nonlinear instruments**: Works for options, futures, any asset

**Limitations:**

- **Past may not repeat**: History might not include the next crisis
- **Look-back sensitivity**: Different windows give different VaR
- **Static**: Doesn't adapt to changing volatility regimes

## Monte Carlo VaR

**Monte Carlo VaR** generates thousands of random market scenarios using simulated paths for returns and correlations. It's computationally intensive but flexible, allowing nonlinear instruments like options to be modeled accurately.

**Method:**

1. Estimate return distribution and correlations for each asset
2. Generate N random scenarios (e.g., 10,000 paths)
3. Simulate correlated returns using Cholesky decomposition
4. Revalue portfolio under each scenario
5. Sort outcomes and extract VaR at desired confidence level

**Simulation process:**

\\[r_i = \\mu_i + L z_i\\]

Where:

- \\(r_i\\) = simulated returns
- \\(\\mu_i\\) = expected returns
- \\(L\\) = Cholesky factor of covariance matrix (\\(LL^T = \\Sigma\\)). This lower-triangular matrix decomposes the covariance structure, allowing us to transform independent random draws into correlated returns. By multiplying \\(L\\) with uncorrelated standard normal variables \\(z_i\\), we generate returns that exhibit the same correlation patterns observed in the actual portfolio—ensuring that when one asset moves, related assets move together in a realistic way
- \\(z_i \\sim N(0,1)\\) = random normal draws

**Example:**

Simulate 10,000 days of portfolio returns

After sorting:
- 100th worst outcome (1%): Portfolio loses 4.2%

99% VaR = 4.2%

**Advantages:**

- **Realistic correlations**: Captures how assets move together
- **Flexible**: Can model any distribution (Student-t, skewed, etc.)
- **Nonlinear**: Handles options and complex derivatives
- **Scenario control**: Can inject specific shocks or stress scenarios

**Limitations:**

- **Computationally expensive**: Requires thousands of simulations
- **Model dependent**: Quality depends on assumptions about distributions
- **Calibration**: Needs accurate covariance estimates
- **Sample size sensitivity**: Smaller samples may underestimate risk

## Machine Learning Extensions

Modern hedge funds extend these methods with machine learning. Neural-network-based VaR models can learn complex relationships between assets and tail events. Others use variational inference or Gaussian process models to better estimate extreme outcomes in high-dimensional portfolios.

**Neural Network VaR:**

Train a neural network to predict portfolio losses given market conditions:

**Inputs**: Asset returns, volatility, correlations, regime indicators

**Output**: Predicted loss distribution (or quantiles)

The network learns nonlinear patterns like: "When VIX spikes and credit spreads widen, losses are larger than linear models predict."

**Variational Autoencoders (VAEs):**

Learn a latent representation of market states, then sample from the latent space to generate tail scenarios.

**Gaussian Processes:**

Model VaR as a function of market features with uncertainty estimates. Useful for portfolios with limited historical data.

**Conditional VaR models:**

Predict VaR dynamically based on current market state:

\\[\\text{VaR}_t = f(\\text{volatility}_t, \\text{correlations}_t, \\text{regime}_t)\\]

Machine learning captures how VaR changes across regimes better than static historical estimates.

## Using VaR in Practice

VaR and ES aren't perfect (they don't predict crashes) but they give a consistent framework for daily and intraday risk control. They feed into trading limits, margin requirements, and capital allocation decisions. When used alongside scenario analysis, they keep the portfolio within survivable bounds.

**Daily workflow:**

1. Calculate VaR for each portfolio and strategy
2. Check if VaR exceeds limits
3. If over limit, reduce positions or hedge
4. Monitor intraday VaR as markets move
5. Report VaR to risk committee and investors

**Position sizing:**

Allocate capital based on VaR contribution:

\\[\\text{Position Size}_i = \\frac{\\text{VaR Budget}}{\\text{Marginal VaR}_i}\\]

Assets with high marginal VaR get smaller allocations.

VaR is not a crystal ball. It's a tool for discipline, helping funds stay within their risk tolerance and survive long enough for alpha to compound.
`;

  return (
    <SimpleSubsectionDetail
      category="Hedge Fund AI"
      categoryHref="/resources/hedge-fund-ai"
      title="Risk Management"
      subtitle="Value at Risk (VaR)"
      description="Quantifying how much you could lose with a given probability (VaR) and what the average loss would be beyond that threshold (ES), using parametric, historical, or Monte Carlo methods."
      lastUpdated="October 2025"
      content={content}
    />
  );
};

export default ValueAtRisk;

