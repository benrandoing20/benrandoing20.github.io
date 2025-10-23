import SimpleSubsectionDetail from '@/components/SimpleSubsectionDetail';

const BlackLittermanModel = () => {
  const content = `
## Overview

**In this section:**
- [The Problem with MPT](#the-problem-with-mpt)
- [Market Equilibrium as a Prior](#market-equilibrium-as-a-prior)
- [Expressing Your Views](#expressing-your-views)
- [Bayesian Blending](#bayesian-blending)
- [The Mathematics](#the-mathematics)
- [Practical Example](#practical-example)

While MPT is elegant, it has one big weakness: it depends heavily on the expected returns you feed it. Even small changes can lead to completely different allocations. The Black-Litterman model was developed by Fischer Black and Robert Litterman at Goldman Sachs to fix that problem.

## The Problem with MPT

Standard mean-variance optimization is extremely sensitive to expected return estimates. Change one stock's expected return by 0.5%, and the optimal portfolio might flip completely.

**Why this happens:**

The optimizer treats all inputs as equally reliable. If you estimate that Stock A will return 12% and Stock B will return 11.5%, the optimizer might put 80% in A and short B, even though those estimates are probably within measurement error.

This creates portfolios that are:
- Concentrated in a few positions
- Unstable (small input changes cause large allocation changes)
- Overconfident (ignoring estimation uncertainty)

Practitioners found that naive MPT often produced portfolios worse than equal weighting or market-cap weighting.

## Market Equilibrium as a Prior

The Black-Litterman model starts from the assumption that markets are roughly in equilibrium. That means each asset already has an **implied expected return** consistent with global market weights.

**Reverse optimization:**

If markets are efficient, then the market portfolio (how capital is actually allocated globally) must be optimal for *some* set of expected returns. We can back those out:

\\[\\mu_{\\text{eq}} = \\lambda \\Sigma w_{\\text{mkt}}\\]

Where:
- \\(\\mu_{\\text{eq}}\\) = equilibrium expected returns
- \\(\\lambda\\) = risk aversion parameter
- \\(\\Sigma\\) = covariance matrix
- \\(w_{\\text{mkt}}\\) = market cap weights

These **equilibrium returns** represent the market consensus. They serve as a neutral starting point before you apply your own views.

**Why this helps:**

Instead of starting from scratch (guessing returns for every asset), you start from market equilibrium and only deviate where you have conviction.

This produces more stable, diversified portfolios that respect market wisdom while incorporating your edge.

## Expressing Your Views

As a portfolio manager, you can express **views** (small adjustments to those equilibrium returns) based on your conviction.

**Types of views:**

**Absolute views:**
"Tech stocks will return 15% over the next year"

**Relative views:**
"Energy will outperform utilities by 3%"
"Apple will outperform Microsoft by 2%"

**Each view has two components:**

1. **The view itself** (what you believe)
2. **Your confidence** (how sure you are)

**Mathematically:**

Views are represented as a system of linear equations:

\\[P \\mu = Q + \\epsilon\\]

Where:
- \\(P\\) = "pick matrix" specifying which assets your view concerns
- \\(\\mu\\) = expected returns
- \\(Q\\) = your view (the expected outcome)
- \\(\\epsilon \\sim N(0, \\Omega)\\) = uncertainty in your view

**Example:**

View: "Apple will outperform Microsoft by 2%"

\\[P = [1, -1, 0, 0, ...]\\] (1 for Apple, -1 for Microsoft, 0 for others)

\\(Q = 0.02\\) (2% outperformance)

\\(\\Omega = 0.0001\\) (high confidence, low variance)

## Bayesian Blending

The model uses **Bayesian statistics** to blend those views with the equilibrium returns. Your level of confidence determines how much the final expected return moves.

**Bayesian update:**

The posterior expected returns are:

\\[\\mu_{\\text{BL}} = [(\\tau \\Sigma)^{-1} + P^T \\Omega^{-1} P]^{-1} [(\\tau \\Sigma)^{-1} \\mu_{\\text{eq}} + P^T \\Omega^{-1} Q]\\]

And the posterior covariance:

\\[\\Sigma_{\\text{BL}} = [(\\tau \\Sigma)^{-1} + P^T \\Omega^{-1} P]^{-1}\\]

Where:
- \\(\\tau\\) = uncertainty scalar (typically 0.025 to 0.05)
- \\(\\Sigma\\) = covariance matrix
- \\(P, Q, \\Omega\\) = view specification

**Interpretation:**

If you're **highly confident** (\\(\\Omega\\) is small), your view dominates. The posterior returns move strongly toward \\(Q\\).

If you're **uncertain** (\\(\\Omega\\) is large), the result stays close to the market equilibrium \\(\\mu_{\\text{eq}}\\).

This Bayesian framework automatically balances conviction against uncertainty.

## The Mathematics

Let me break down the update formula step by step.

**Prior:**
Market equilibrium returns \\(\\mu_{\\text{eq}}\\) with uncertainty \\(\\tau \\Sigma\\)

**Likelihood:**
Your views \\(Q\\) with uncertainty \\(\\Omega\\)

**Posterior:**
Weighted combination of prior and likelihood

The formula is a precision-weighted average:
- Precision of prior: \\((\\tau \\Sigma)^{-1}\\)
- Precision of views: \\(P^T \\Omega^{-1} P\\)

The posterior mean tilts toward whichever has higher precision (lower uncertainty).

**Intuitive weights:**

If your view is very confident (\\(\\Omega \\to 0\\)):
\\[\\mu_{\\text{BL}} \\approx P^T Q\\]
(Your view completely determines returns for those assets)

If your view is very uncertain (\\(\\Omega \\to \\infty\\)):
\\[\\mu_{\\text{BL}} \\approx \\mu_{\\text{eq}}\\]
(Stay with market equilibrium)

## Practical Example

Let's walk through a concrete example.

**Universe**: 3 assets (Stocks A, B, C)

**Market cap weights**: \\(w_{\\text{mkt}} = [0.50, 0.30, 0.20]\\)

**Covariance matrix** (annual):

\\[\\Sigma = \\begin{bmatrix} 0.04 & 0.01 & 0.02 \\\\ 0.01 & 0.09 & 0.03 \\\\ 0.02 & 0.03 & 0.16 \\end{bmatrix}\\]

**Risk aversion**: \\(\\lambda = 2.5\\)

**Step 1: Compute equilibrium returns**

\\[\\mu_{\\text{eq}} = \\lambda \\Sigma w_{\\text{mkt}} = 2.5 \\times \\begin{bmatrix} 0.04 & 0.01 & 0.02 \\\\ 0.01 & 0.09 & 0.03 \\\\ 0.02 & 0.03 & 0.16 \\end{bmatrix} \\begin{bmatrix} 0.50 \\\\ 0.30 \\\\ 0.20 \\end{bmatrix}\\]

\\[\\mu_{\\text{eq}} = [0.065, 0.08, 0.105]\\]

These are the implied returns consistent with market weights.

**Step 2: Express views**

View 1: "Stock A will return 10%" (absolute view, moderate confidence)

\\[P_1 = [1, 0, 0], \\quad Q_1 = 0.10, \\quad \\Omega_1 = 0.001\\]

View 2: "Stock B will outperform Stock C by 2%" (relative view, high confidence)

\\[P_2 = [0, 1, -1], \\quad Q_2 = 0.02, \\quad \\Omega_2 = 0.0005\\]

**Step 3: Compute Black-Litterman returns**

Using \\(\\tau = 0.025\\), apply the Bayesian formula.

Result (approximate):
\\[\\mu_{\\text{BL}} = [0.095, 0.09, 0.08]\\]

Notice:
- Stock A moved from 6.5% to 9.5% (your view pulled it toward 10%)
- Stock B moved from 8% to 9%
- Stock C moved from 10.5% to 8% (to satisfy the relative view)

**Step 4: Optimize portfolio**

Feed \\(\\mu_{\\text{BL}}\\) and \\(\\Sigma_{\\text{BL}}\\) into your mean-variance optimizer.

Result: A diversified portfolio that tilts toward your views but doesn't completely abandon diversification or market weights.

## Why Black-Litterman Works

The output is a **new, balanced set of expected returns** that you can feed back into your portfolio optimizer. This avoids extreme, unstable allocations and produces diversified portfolios that still reflect your insights.

As an example, say your model predicts strong returns for energy stocks. Instead of letting that dominate your entire portfolio, Black-Litterman lets you tilt toward energy while keeping exposure to other sectors for diversification.

**It's a structured way of saying:**

"I think this will do better, but I could be wrong"

And letting math find the right balance.

**Key advantages:**

**Stability**: Small changes in views produce small changes in portfolio

**Diversification**: Prevents over-concentration

**Transparency**: You explicitly state your views and confidence

**Bayesian rigor**: Incorporates uncertainty properly

**Market grounding**: Starts from a sensible baseline (equilibrium)

Black-Litterman turns subjective views into systematic, disciplined allocations. It's why it became the industry standard for institutional portfolio construction.
`;

  return (
    <SimpleSubsectionDetail
      category="Hedge Fund AI"
      categoryHref="/resources/hedge-fund-ai"
      title="Portfolio Optimization"
      subtitle="Black-Litterman Model"
      description="A Bayesian framework that blends market equilibrium assumptions with your own views about expected returns, letting you tilt portfolios based on conviction while maintaining diversification."
      lastUpdated="October 2025"
      content={content}
    />
  );
};

export default BlackLittermanModel;

