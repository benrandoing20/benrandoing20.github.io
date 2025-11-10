import SimpleSubsectionDetail from '@/components/SimpleSubsectionDetail';

const ModernPortfolioTheory = () => {
  const content = `
## Overview

**In this section:**
- [Overview](#overview)
- [The Foundation of Portfolio Construction](#the-foundation-of-portfolio-construction)
- [The Efficient Frontier](#the-efficient-frontier)
- [Quadratic Programming](#quadratic-programming)
- [Practical Refinements](#practical-refinements)
- [Robust Covariance Estimation](#robust-covariance-estimation)
- [Constraints and Reality](#constraints-and-reality)

## Overview

Modern Portfolio Theory, often abbreviated as MPT, is the foundation of all portfolio construction. It was developed by Harry Markowitz in the 1950s and remains one of the most practical tools for turning forecasts into portfolios.

## The Foundation of Portfolio Construction

No matter how strong a trading signal is, it only matters if you size it correctly. Portfolio optimization is about deciding how much capital to allocate to each idea while controlling the risks you're exposed to.

The goal isn't to find a perfect mix of assets (there's no such thing) but to build portfolios that balance expected return with volatility, concentration, and liquidity.

**The core idea of MPT:**

Each asset has an expected return, a volatility, and a correlation with every other asset. If you put them together, you can mathematically estimate the total risk and return of the portfolio. MPT then finds the combination of weights that gives you the highest expected return for a given level of risk.

## The Efficient Frontier

The **efficient frontier** is the set of portfolios that offer the maximum expected return for each level of risk.

**Portfolio return:**

\\[E[R_p] = \\sum_{i=1}^{N} w_i E[R_i]\\]

Where:
- \\(w_i\\) = weight of asset \\(i\\)
- \\(E[R_i]\\) = expected return of asset \\(i\\)
- \\(N\\) = number of assets

**Portfolio variance:**

\\[\\sigma_p^2 = \\sum_{i=1}^{N} \\sum_{j=1}^{N} w_i w_j \\sigma_{ij}\\]

Where \\(\\sigma_{ij}\\) is the covariance between assets \\(i\\) and \\(j\\).

The efficient frontier plots all portfolios where you cannot increase return without increasing risk, or reduce risk without reducing return.

**Sharpe Ratio maximization:**

Most funds aim to maximize the **Sharpe ratio** (risk-adjusted return):

\\[\\text{Sharpe} = \\frac{E[R_p] - R_f}{\\sigma_p}\\]

Where \\(R_f\\) is the risk-free rate.

The portfolio with the highest Sharpe ratio lies on the efficient frontier and represents the optimal risk-return tradeoff.

## Quadratic Programming

Mathematically, MPT minimizes portfolio variance subject to achieving a certain expected return. This is solved using **quadratic programming**, an optimization technique where the objective function is quadratic (in this case, portfolio variance depends on the squared weights multiplied by the covariance matrix) while the constraints are linear (target return, weights sum to one, position limits).

**Optimization problem:**
The optimization finds the portfolio weights \\(w\\) that minimize variance (risk) while meeting specific constraints.

**The objective function:**

\\[\\min_{w} \\quad \\frac{1}{2} w^T \\Sigma w\\]

Subject to:

- \\(w^T \\mu = \\mu_p\\) (target return)
- \\(w^T \\mathbf{1} = 1\\) (weights sum to 1)
- \\(w_i \\geq 0\\) (no shorts, if applicable)

Where:

- \\(w\\) = vector of portfolio weights
- \\(\\Sigma\\) = covariance matrix
- \\(\\mu\\) = vector of expected returns
- \\(\\mu_p\\) = target portfolio return

The optimizer will naturally reduce exposure to assets that are highly correlated or excessively volatile.

**What the optimizer does:**

1. Identifies assets with high expected returns
2. Reduces exposure to highly volatile assets
3. Favors assets with low correlation (diversification benefit) — when two assets move independently, losses in one can be offset by gains in another, which is why the covariance matrix \\(\\Sigma\\) penalizes high correlations
4. Balances these factors to minimize risk for a given return target — the optimizer trades off expected return against variance, accepting lower returns if diversification significantly reduces risk, positioning the portfolio on the efficient frontier

## Practical Refinements

In practice, hedge funds apply several refinements to make MPT work in real markets.

**Example workflow:**

Imagine you're trading ten stocks with forecasts from your models. You feed their expected returns and the covariance matrix of their daily returns into your optimizer.

The output might suggest:
- Putting slightly more capital into less correlated names
- Trimming exposure to one highly volatile stock
- Shorting a few positions to balance risk
- Maintaining overall market neutrality

**Why refinements matter:**

Raw MPT can produce unstable allocations. Small changes in expected returns can lead to completely different portfolios. The covariance matrix estimated from historical data is noisy and unreliable.

This is where practical hedge funds improve on the basic theory.

## Robust Covariance Estimation

They use **robust covariance estimation** to stabilize the optimization, because real-world data is noisy and unstable.

**Problems with sample covariance:**

The standard covariance estimator (where \\(r_{it}\\) is the return of asset \\(i\\) at time \\(t\\), \\(\\bar{r}_i\\) is the mean return of asset \\(i\\), and \\(T\\) is the number of time periods):

\\[\\Sigma_{ij} = \\frac{1}{T} \\sum_{t=1}^{T} (r_{it} - \\bar{r}_i)(r_{jt} - \\bar{r}_j)\\]

is noisy, especially when:

- Number of assets is large relative to time periods
- Data includes outliers or structural breaks
- Correlations are time-varying

**Shrinkage methods:**

**Ledoit-Wolf shrinkage** combines the sample covariance with a structured target (like a diagonal matrix or constant correlation model):

\\[\\Sigma_{\\text{shrunk}} = \\delta \\Sigma_{\\text{target}} + (1-\\delta) \\Sigma_{\\text{sample}}\\]

This reduces estimation error by pulling extreme correlations toward more stable values.

**Exponentially weighted moving average (EWMA):**

Give more weight to recent observations:

\\[\\Sigma_t = \\lambda \\Sigma_{t-1} + (1-\\lambda) r_t r_t^T\\]

Where \\(r_t\\) is the vector of asset returns at time \\(t\\), and \\(r_t r_t^T\\) is the outer product that gives the instantaneous covariance estimate.

This makes the covariance matrix more responsive to changing market conditions.

**Factor models:**

Instead of estimating all pairwise correlations directly, decompose returns into common factors:

\\[r_i = \\beta_i^T f_t + \\epsilon_i\\]

Where \\(\\beta_i\\) are the factor loadings for asset \\(i\\), \\(f_t\\) are the factor returns, and \\(\\epsilon_i\\) is the idiosyncratic (asset-specific) return.

Then covariance becomes:

\\[\\Sigma = B F B^T + D\\]

Where:
- \\(B\\) = matrix of factor loadings (how each asset responds to each factor)
- \\(F\\) = covariance matrix of factors
- \\(D\\) = diagonal matrix of idiosyncratic variances

**Why this is more stable:**

For 100 assets, the sample covariance approach requires estimating \\(\\frac{100 \\times 101}{2} = 5,050\\) unique parameters. With 5 factors, you only need:

- \\(100 \\times 5 = 500\\) factor loadings
- \\(\\frac{5 \\times 6}{2} = 15\\) factor covariances
- \\(100\\) idiosyncratic variances
- **Total: 615 parameters** (vs. 5,050)

This dramatic reduction makes the covariance matrix far more stable and less prone to estimation error, especially when you have limited historical data.

## Constraints and Reality

They also add **constraints** such as position limits, turnover budgets (to control trading costs), and factor exposures to prevent unwanted bets.

**Position limits:**

\\[-0.05 \\leq w_i \\leq 0.05\\]

No single position can exceed 5% of the portfolio (long or short).

**Turnover constraints:**

\\[\\sum_{i=1}^{N} |w_i^{\\text{new}} - w_i^{\\text{old}}| \\leq T_{\\text{max}}\\]

Limits how much the portfolio can change, controlling transaction costs.

**Gross exposure limits:**

\\[\\sum_{i=1}^{N} |w_i| \\leq L_{\\text{max}}\\]

Caps total leverage.

**Net exposure:**

\\[\\sum_{i=1}^{N} w_i = \\beta_{\\text{target}}\\]

Controls market beta (often set to 0 for market neutral).

**Market beta** measures how much the portfolio moves with the overall market. A beta of 1 means the portfolio moves in lockstep with the market (e.g., S&P 500). A beta of 0 means the portfolio is uncorrelated with market movements—it makes money (or loses it) independently of whether the market goes up or down.

Setting \\(\\beta_{\\text{target}} = 0\\) creates a **market-neutral** portfolio: you're betting on relative performance (stock A vs. stock B), not on whether the market rises or falls. This isolates alpha (skill) from beta (market exposure).

**Factor neutrality:**

\\[\\sum_{i=1}^{N} w_i \\beta_i^{\\text{factor}} = 0\\]

Ensures the portfolio is neutral to specific factors (e.g., value, momentum, size).

**Sector constraints:**

\\[\\sum_{i \\in S} w_i \\leq 0.20\\]

Limits exposure to any single sector to prevent concentration risk.

**Example with constraints:**

Universe: 50 stocks
Expected returns: From your price forecasting model
Covariance: Robust shrinkage estimator
Constraints:
- Max position: 5%
- Max turnover: 20% (relative to previous day)
- Market neutral: Net exposure = 0
- Sector neutral: No sector exceeds 15%

Output: Portfolio weights that maximize Sharpe ratio while respecting all constraints.

## The Beauty of MPT

The beauty of MPT is that it gives a clear, quantitative framework for sizing. It doesn't tell you what to buy (it tells you how much to buy of what you already believe in).

**Key insights:**

- **Diversification works**: Uncorrelated assets reduce portfolio risk without sacrificing return
- **Risk can be managed mathematically**: You don't need intuition; you can quantify and optimize
- **Returns aren't everything**: A volatile asset with high return may contribute less to the portfolio than a stable asset with moderate return
- **Constraints shape reality**: Real portfolios must respect limits, liquidity, and costs

MPT transforms subjective conviction ("I like this stock") into objective allocation ("I should put \\(w_i\\)% of capital here given my beliefs about all other assets").

It's the foundation that every other optimization method builds upon.
`;

  return (
    <SimpleSubsectionDetail
      category="Hedge Fund AI"
      categoryHref="/resources/hedge-fund-ai"
      title="Portfolio Optimization"
      subtitle="Modern Portfolio Theory"
      description="The classic mean-variance optimization framework for building efficient portfolios, enhanced with robust covariance estimation, constraints on concentration, and turnover budgets."
      lastUpdated="October 2025"
      content={content}
    />
  );
};

export default ModernPortfolioTheory;

