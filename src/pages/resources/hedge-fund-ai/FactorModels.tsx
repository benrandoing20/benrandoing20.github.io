import SimpleSubsectionDetail from '@/components/SimpleSubsectionDetail';

const FactorModels = () => {
  const content = `
## Overview

**In this section:**
- [Overview](#overview)
- [Understanding What Drives Returns](#understanding-what-drives-returns)
- [The Market Model](#the-market-model)
- [Fama-French Three-Factor Model](#fama-french-three-factor-model)
- [Extended Factor Models](#extended-factor-models)
- [Custom Factors for Hedge Funds](#custom-factors-for-hedge-funds)
- [Using Factors for Risk Management](#using-factors-for-risk-management)

## Overview

The final layer of risk management is understanding what actually drives your returns. Hedge funds use factor models to decompose portfolio risk into systematic components (the broad themes that explain most market movements).

## Understanding What Drives Returns

When your portfolio makes or loses money, is it because of:
- Overall market direction?
- Exposure to small-cap vs large-cap stocks?
- Value vs growth tilt?
- Momentum or mean reversion?
- Sector concentration?

Factor models answer these questions by breaking down returns into components.

**Why this matters:**

- **Identify unintended bets**: You might think you're market neutral but actually have hidden growth exposure
- **Better attribution**: Understand which parts of performance came from skill vs factor exposure
- **Improve hedging**: Neutralize unwanted factor risks
- **Explain volatility**: Know which factors drive your portfolio's ups and downs

## The Market Model

The simplest factor model is the **market model**, which splits total return into two parts: beta, the part explained by overall market moves, and alpha, the part that comes from true skill.

**CAPM (Capital Asset Pricing Model):**

\\[r_i = \\alpha_i + \\beta_i r_m + \\epsilon_i\\]

Where:

- \\(r_i\\) = return of asset (or portfolio) \\(i\\)
- \\(r_m\\) = market return (e.g., S&P 500)
- \\(\\beta_i\\) = sensitivity to market moves
- \\(\\alpha_i\\) = return not explained by market (skill)
- \\(\\epsilon_i\\) = idiosyncratic noise

**Interpretation:**

- **Beta**: If \\(\\beta = 1.2\\), when market goes up 10%, this asset goes up 12%
- **Alpha**: If \\(\\alpha = 5\\%\\) annually, the asset beats the market by 5% after adjusting for beta

**Example:**

Hedge fund returns: 15%

- Market returns: 10%
- Estimated beta: 0.8

Expected return based on beta: \\(0.8 \\times 10\\% = 8\\%\\)

- Alpha: \\(15\\% - 8\\% = 7\\%\\)

- The fund generated 7% of true outperformance beyond market exposure.

## Fama-French Three-Factor Model

In reality, there are many sources of systematic risk beyond the market itself. The most famous example is the **Fama-French three-factor model**, which adds exposure to size (small versus large companies) and value (cheap versus expensive stocks) alongside market beta.

**The model:**

\\[r_i = \\alpha_i + \\beta_i^{\\text{MKT}} r_{\\text{MKT}} + \\beta_i^{\\text{SMB}} r_{\\text{SMB}} + \\beta_i^{\\text{HML}} r_{\\text{HML}} + \\epsilon_i\\]

**Three factors:**

- **MKT (Market)**: Excess return of the market over risk-free rate
- **SMB (Small Minus Big)**: Return of small-cap stocks minus large-cap stocks
- **HML (High Minus Low)**: Return of value stocks (high book-to-market) minus growth stocks

**Interpretation:**

- \\(\\beta^{\\text{SMB}} = 0.5\\): Portfolio is tilted toward small caps
- \\(\\beta^{\\text{HML}} = -0.3\\): Portfolio is tilted toward growth (negative value exposure)

**Example:**

Fund returns: 18%

Regression results:

- \\(\\beta^{\\text{MKT}} = 0.9\\)
- \\(\\beta^{\\text{SMB}} = 0.4\\)
- \\(\\beta^{\\text{HML}} = -0.2\\)
- \\(\\alpha = 6\\%\\)

Factor returns over the period:

- MKT: 10%
- SMB: 5%
- HML: 3%

Expected return from factors:

\\[0.9(10\\%) + 0.4(5\\%) - 0.2(3\\%) = 9\\% + 2\\% - 0.6\\% = 10.4\\%\\]

Alpha: \\(18\\% - 10.4\\% = 7.6\\%\\)

The fund generated 7.6% of skill-based returns beyond systematic factor exposures.

## Extended Factor Models

Later models add momentum, profitability, investment intensity, and even liquidity as additional factors.

**Carhart Four-Factor Model:**

Adds momentum (UMD: Up Minus Down):

\\[r_i = \\alpha + \\beta^{\\text{MKT}} r_{\\text{MKT}} + \\beta^{\\text{SMB}} r_{\\text{SMB}} + \\beta^{\\text{HML}} r_{\\text{HML}} + \\beta^{\\text{UMD}} r_{\\text{UMD}} + \\epsilon\\]

**UMD**: Return of past winners minus past losers

**Fama-French Five-Factor Model:**

Adds profitability (RMW: Robust Minus Weak) and investment (CMA: Conservative Minus Aggressive):

- **RMW**: High profitability minus low profitability
- **CMA**: Low investment (conservative) minus high investment (aggressive)

**Other common factors:**

- **Quality**: High quality (stable earnings, low debt) minus low quality
- **Low volatility**: Low vol stocks minus high vol stocks
- **Liquidity**: Liquid stocks minus illiquid stocks
- **Carry**: Assets with high carry (interest, dividends) minus low carry

## Custom Factors for Hedge Funds

Hedge funds often build **custom factor models** tailored to their universe. A global macro fund might include factors for interest rate spreads, credit risk, and commodities. A quant equity fund might model exposure to quality, volatility, or sentiment.

**Example custom factors:**

- **Credit spread factor**: Investment-grade spreads vs high-yield spreads
- **Curve factor**: Slope of yield curve (long rates minus short rates)
- **Commodity factor**: Energy vs metals
- **FX factor**: Dollar strength vs emerging market currencies
- **Volatility factor**: VIX level

**Estimating exposures:**

Run regression:

\\[r_p = \\alpha + \\beta_1 F_1 + \\beta_2 F_2 + ... + \\beta_k F_k + \\epsilon\\]

Where \\(F_i\\) are factor returns.

The \\(\\beta_i\\) coefficients reveal portfolio loadings on each factor.

**Principal Component Analysis (PCA):**

Instead of using pre-defined factors, extract factors directly from data:

1. Compute covariance matrix of asset returns
2. Extract eigenvectors (principal components)
3. First few PCs explain most variance
4. Interpret PCs as hidden factors

**Example:**

PC1 explains 60% of variance → "overall market factor"

PC2 explains 15% of variance → "growth vs value"

PC3 explains 10% of variance → "sector rotation"

## Using Factors for Risk Management

Once factors are defined, portfolio exposures are estimated using regression analysis or principal component analysis (PCA). The output shows how much of the portfolio's risk comes from each factor, and whether the fund is unintentionally leaning toward one theme.

**Risk decomposition:**

Total portfolio variance can be decomposed:

\\[\\sigma_p^2 = \\sum_i \\beta_i^2 \\sigma_{F_i}^2 + \\sigma_{\\epsilon}^2\\]

Where:
- \\(\\beta_i^2 \\sigma_{F_i}^2\\) = risk from factor \\(i\\)
- \\(\\sigma_{\\epsilon}^2\\) = idiosyncratic risk

This shows which factors contribute most to volatility.

**Example:**

Portfolio volatility: 12% annually

Factor risk breakdown:
- Market factor: 6% (50% of variance)
- Momentum factor: 3% (25% of variance)
- Size factor: 2% (15% of variance)
- Idiosyncratic: 1% (10% of variance)

Insight: Most risk comes from market and momentum. If you want to be market neutral, hedge the market factor.

**Detecting unintended bets:**

Suppose a "market-neutral" fund has \\(\\beta^{\\text{MKT}} = 0.05\\) (near zero, good) but \\(\\beta^{\\text{UMD}} = 0.6\\) (high momentum exposure).

The fund isn't truly neutral. It's making a big bet on momentum. During momentum crashes, it will lose money.

**Hedging with factors:**

If your portfolio is highly exposed to the market factor (\\(\\beta = 1.2\\)), you might short index futures to neutralize it:

\\[\\text{Hedge ratio} = -\\beta \\times \\text{Portfolio Value}\\]

If portfolio is $100M and \\(\\beta = 1.2\\), short $120M of index futures.

Similarly, if exposed to value factor but don't want that risk, short a value ETF.

**Factor timing:**

Some funds actively rotate factor exposures based on regime:

- In risk-on markets: Increase momentum and growth exposure
- In risk-off markets: Increase quality and low-vol exposure
- During transitions: Reduce all factor exposures (go neutral)

**Attribution analysis:**

Break down monthly returns:

\\[r_p = \\sum_i \\beta_i r_{F_i} + \\alpha\\]

Report: "This month, we made 3% from momentum factor, -1% from value factor, and 2% from alpha."

This tells investors where returns came from.

## Why Factor Models Matter

Ultimately, factor models turn risk into something measurable and manageable. They answer not just how much risk you have, but where it comes from, allowing you to shape your exposures deliberately rather than accidentally.

**Key insights:**

- **Returns have structure**: Most assets move together along common factors
- **Alpha is rare**: After adjusting for factor exposures, true skill is hard to find
- **Risk is decomposable**: You can measure and control each source of risk independently
- **Hedging is precise**: Neutralize specific risks without disturbing others

A hedge fund that understands its factor exposures can:

- Take intentional risks and hedge unintended ones
- Communicate sources of return clearly
- Survive regime changes by adjusting factor tilts
- Deliver true alpha, not just disguised beta

Factor models are the X-ray vision of portfolio management. They reveal the hidden structure beneath surface-level returns.
`;

  return (
    <SimpleSubsectionDetail
      category="Hedge Fund AI"
      categoryHref="/resources/hedge-fund-ai"
      title="Risk Management"
      subtitle="Factor Models"
      description="Understanding portfolio exposures to systematic factors, decomposing risk into market beta, value, momentum, size, and other factors using models like Fama-French to understand where your returns come from."
      lastUpdated="October 2025"
      content={content}
    />
  );
};

export default FactorModels;

