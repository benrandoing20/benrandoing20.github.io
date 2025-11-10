import SimpleSubsectionDetail from '@/components/SimpleSubsectionDetail';

const EvaluationAndWalkForward = () => {
  const content = `
## Overview

**In this section:**
- [Overview](#overview)
- [Making Tests Leak-Safe](#making-tests-leak-safe)
- [Purged K-Fold Cross-Validation](#purged-k-fold-cross-validation)
- [Walk-Forward Analysis](#walk-forward-analysis)
- [Detecting Model Decay](#detecting-model-decay)
- [Performance Attribution](#performance-attribution)
- [The Skeptical Framework](#the-skeptical-framework)

## Overview

Once a strategy has been simulated with realistic market and cost assumptions, it still needs to be evaluated properly. This is where most backtests fail, not because the model is bad, but because the testing process leaks information or overfits to the past.

## Making Tests Leak-Safe

The first principle is to make tests **leak-safe**. You must ensure that your model never sees future data during training. That includes subtle forms of leakage, like using overlapping lookback windows or letting target variables influence engineered features.

**Common sources of leakage:**

**Look-ahead bias:**

Using data that wouldn't have been available at the time:

- Adjusted prices (splits, dividends) before adjustment happened
- Restated financial data (use point-in-time values)
- End-of-day data for intraday decisions

**Overlapping samples:**

Training on day 1-60, testing on day 61, but features use 30-day windows.

The test sample overlaps with training because features at day 61 include data from days 32-61, which overlap with training period days 32-60.

**Target leakage:**

Features that are calculated using the target variable:
- Forward-looking returns sneaking into technical indicators
- Volume including the current bar (which you wouldn't know yet)

**Survivorship bias:**

Training only on stocks that exist today, ignoring delisted companies. This creates an unrealistic universe where all companies survived.

**Time zone issues:**

Using US market close prices to predict Asian market opens, but the US close happened after the Asian open (information from the future).

## Purged K-Fold Cross-Validation

Quant researchers use **purged k-fold cross-validation** to solve this. It splits data into folds for training and testing but removes overlapping observations near the test set to avoid contamination.

**Standard k-fold (flawed for time series):**

1. Split data into k folds randomly
2. Train on k-1 folds, test on 1 fold
3. Repeat k times

**Problem**: Random splits break temporal ordering and create leakage through overlapping feature windows.

**Purged k-fold (correct for time series):**

1. Split data sequentially (fold 1 = Jan, fold 2 = Feb, etc.)
2. When testing on fold \\(i\\), **purge** observations near the boundaries
3. Remove training samples that overlap with test samples through feature windows

**Purging process:**

If features use a 30-day lookback:

- Test fold: Days 181-210
- Purge from training: Days 151-180 (before test)
- Purge from training: Days 211-240 (after test, if using them)

This ensures no information leaks through overlapping windows.

**Embargo period:**

After each test fold, add an **embargo** (buffer period) before the next training data starts:

Training: Days 1-150
Purge: Days 151-180
Test: Days 181-210
Embargo: Days 211-220
Next training: Days 221+

The embargo prevents the model from seeing data too close to the test period.

**Combinatorial purged cross-validation:**

Extends this idea, testing all possible combinations of training and test periods to better estimate performance stability.

**Method:**

1. Divide time into N segments
2. For each possible combination of training segments, test on remaining segments
3. Compute average performance across all combinations

This is computationally expensive but gives the most robust performance estimate.

## Walk-Forward Analysis

The second principle is to test strategies out of sample using **walk-forward analysis**. Here, the model is trained on one period, tested on the next, and then rolled forward. This mimics live deployment: you're always predicting the future based only on the past.

**Walk-forward process:**

**Step 1**: Train on months 1-12, test on month 13

**Step 2**: Train on months 2-13, test on month 14

**Step 3**: Train on months 3-14, test on month 15

**Repeat**: Roll forward through entire dataset

**Anchored vs rolling window:**

**Anchored**: Training window grows over time

- Train on months 1-12, test on 13
- Train on months 1-13, test on 14
- Train on months 1-14, test on 15

Advantage: Uses all available data
Disadvantage: Old data may not be relevant anymore

**Rolling**: Training window size is fixed

- Train on months 1-12, test on 13
- Train on months 2-13, test on 14
- Train on months 3-14, test on 15

Advantage: Adapts to recent market conditions
Disadvantage: Throws away old data

**Expanding window**: Hybrid approach
- Start with minimum training period
- Gradually expand window
- Cap at maximum useful history (e.g., 3 years)

**Retraining frequency:**

**Daily**: Adapt quickly, computationally expensive

**Weekly**: Good balance for medium-frequency strategies

**Monthly**: For longer-term models where daily changes don't matter

**Quarterly**: For low-frequency fundamental strategies

Walk-forward tests reveal how quickly models decay as market conditions change.

## Detecting Model Decay

**Distribution drift**, where data patterns evolve over time, often causes models that looked perfect historically to fail in real trading.

**Types of drift:**

**Covariate drift**: Input feature distributions change

- Volatility was 15% during training, now it's 30%
- Stock universe composition changed

**Concept drift**: Relationship between features and target changes

- Momentum worked during training, stopped working now
- Correlations between assets shifted

**Signs of model decay:**

**Performance degradation:**

- Sharpe ratio drops from 2.0 to 0.5
- Win rate decreases
- Maximum drawdown increases

**Feature importance shift:**

- Features that were predictive become irrelevant
- New patterns emerge that the model doesn't capture

**Statistical tests:**

**Kolmogorov-Smirnov test**: Compare feature distributions over time

\\[D = \\max_x |F_1(x) - F_2(x)|\\]

If \\(D\\) exceeds threshold, distribution has shifted significantly.

**Population Stability Index (PSI):**

\\[\\text{PSI} = \\sum_i (p_i^{\\text{current}} - p_i^{\\text{baseline}}) \\ln\\left(\\frac{p_i^{\\text{current}}}{p_i^{\\text{baseline}}}\\right)\\]

PSI > 0.25 indicates significant drift.

Funds monitor model decay using **rolling Sharpe ratios**, **performance attribution**, and **feature importance drift**. When a model's predictive features stop contributing meaningfully, it's a sign that the underlying relationship may have disappeared.

**Monitoring dashboard:**

Track over time:

- Rolling 30-day Sharpe ratio
- Feature importance from recent predictions
- Prediction error (increasing = decay)
- Distribution statistics for key features

**Automated alerts:**

- If Sharpe drops below 1.0 for 30 days → Flag for review
- If feature distribution shifts beyond threshold → Retrain model
- If prediction error doubles → Pause strategy

## Performance Attribution

Evaluation doesn't stop at performance metrics like Sharpe or Sortino ratio. Hedge funds break down returns through **attribution analysis**, understanding whether gains came from genuine alpha, factor exposures, or lucky timing.

**Attribution equation:**

\\[r_p = \\alpha + \\sum_i \\beta_i f_i + \\epsilon\\]

Where:

- \\(r_p\\) = portfolio return
- \\(\\alpha\\) = skill-based return
- \\(\\beta_i f_i\\) = return from exposure to factor \\(i\\)
- \\(\\epsilon\\) = unexplained noise

**Example attribution:**

Monthly return: +5%

Breakdown:

- Market factor (\\(\\beta = 0.8\\), market returned 4%): +3.2%
- Momentum factor (\\(\\beta = 0.5\\), momentum returned 2%): +1.0%
- Alpha: +0.8%
- Noise: 0%

Result: Most return came from factor exposures, not skill.

**Time-based attribution:**

Was performance concentrated in a few lucky days or consistent?

- If entire annual return came from 3 days → Luck, not skill
- If returns spread evenly across 200 days → More reliable

**Drawdown attribution:**

When did losses occur and why?

- During market crash → Expected (systematic risk)
- During calm market → Unexpected (strategy issue)

**Probabilistic performance tests:**

They also run **probabilistic performance tests** using bootstrapping to assess whether observed returns could have arisen by chance.

**Bootstrap procedure:**

1. Take observed returns series (365 days)
2. Resample with replacement 10,000 times
3. Calculate Sharpe ratio for each resample
4. Build distribution of Sharpe ratios under null hypothesis
5. Compare actual Sharpe to distribution

If actual Sharpe is in top 5%, performance is statistically significant (not likely due to chance).

**Monte Carlo simulation:**

Generate random return series with same mean and volatility:

1. Simulate 10,000 random strategies
2. Each has same risk profile as yours
3. Count how many achieve your Sharpe ratio or better by luck
4. If < 5%, your performance is likely skill-based

## The Skeptical Framework

A robust evaluation framework is both skeptical and empirical. It treats every backtest as a hypothesis to be falsified, not proven.

**The skeptic's checklist:**

- **Is the test leak-safe?** (No future data used)
- **Are costs realistic?** (Spread, fees, impact included)
- **Is the sample size sufficient?** (Enough trades to be statistical)
- **Does it work out of sample?** (Walk-forward results positive)
- **Is performance consistent?** (Not driven by a few lucky trades)
- **Do features make economic sense?** (Explainable, not spurious)
- **Does it survive stress tests?** (Works across regimes)
- **Is alpha statistically significant?** (Not just noise)

**Red flags:**

- **Sharpe ratio > 3** (too good to be true)
- **No losing months in 5 years** (overfitted)
- **Performance degrades immediately out of sample** (leakage)
- **Works perfectly in training, fails in validation** (overfitting)
- **Features include future data** (look-ahead bias)
- **Returns concentrated in a few trades** (luck, not skill)

If a strategy survives these filters (leak-safe validation, realistic costs, and walk-forward robustness), it has earned the right to go live.

**The final test:**

Paper trading (simulated live trading with real data) for 3-6 months before deploying capital. If performance matches backtest expectations, proceed. If not, investigate before risking money.

Backtesting and simulation are not about proving you're right. They're about trying as hard as possible to prove yourself wrong and seeing what survives.
`;

  return (
    <SimpleSubsectionDetail
      category="Hedge Fund AI"
      categoryHref="/resources/hedge-fund-ai"
      title="Simulation, Backtesting & Evaluation"
      subtitle="Evaluation & Walk-Forward"
      description="Properly evaluating strategy performance using purged k-fold cross-validation to avoid data leakage, combinatorial purged CV, walk-forward analysis with rolling windows, and detecting model decay from distribution drift."
      lastUpdated="October 2025"
      content={content}
    />
  );
};

export default EvaluationAndWalkForward;

