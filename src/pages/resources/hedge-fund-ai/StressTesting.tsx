import SimpleSubsectionDetail from '@/components/SimpleSubsectionDetail';

const StressTesting = () => {
  const content = `
## Overview

**In this section:**
- [Beyond Normal Conditions](#beyond-normal-conditions)
- [Historical Scenario Replay](#historical-scenario-replay)
- [Hypothetical Stress Scenarios](#hypothetical-stress-scenarios)
- [Correlation and Liquidity Stress](#correlation-and-liquidity-stress)
- [Adversarial Machine Learning](#adversarial-machine-learning)
- [Practical Stress Testing](#practical-stress-testing)

If VaR asks "how bad could a normal day get?", stress testing asks "what if nothing is normal at all?"

## Beyond Normal Conditions

Stress testing simulates extreme market events to see how a portfolio would behave under crisis conditions. Hedge funds replay historical episodes (like the 2008 financial crisis, the COVID crash, or the 2022 rate shock) to measure potential drawdowns and liquidity strain.

**The key insight:**

Real stress often comes from **correlation breakdown**. Assets that usually offset each other suddenly move together. Funds therefore model correlation stress, where diversification vanishes, and liquidity stress, where positions can't be exited without large price impact.

**Example:**

Normal market:
- Equities and bonds negatively correlated (bonds hedge equity risk)
- Portfolio 60/40 stocks/bonds has moderate volatility

Crisis (2022 rate shock):
- Both equities and bonds fall together
- Correlations spike to +0.8
- Portfolio loses 20% with nowhere to hide

Stress testing reveals these hidden risks before they materialize.

## Historical Scenario Replay

The most direct approach is to replay historical crises and see how the current portfolio would have performed.

**Major scenarios hedge funds test:**

**2008 Financial Crisis:**
- Equities: -50%
- Credit spreads: +600 bps
- VIX: 80+
- Liquidity: Dried up
- Correlations: All risky assets fell together

**COVID Crash (March 2020):**
- Equities: -35% in 3 weeks
- Oil: -70%
- VIX: 85
- Unprecedented volatility and circuit breakers

**2022 Rate Shock:**
- Bonds: -15% (worst year in history)
- Equities: -20%
- Both fell together (correlation breakdown)

**LTCM / Russian Default (1998):**
- Flight to quality
- Liquidity disappeared
- Spreads widened massively

**Flash Crash (2010):**
- Market dropped 9% in minutes
- Liquidity vanished
- Many orders executed at terrible prices

**Method:**

1. Take asset returns from the historical episode (e.g., October 2008)
2. Apply those returns to current portfolio positions
3. Calculate hypothetical P&L and drawdown
4. Identify which positions contributed most to loss

**Example:**

Current portfolio: Long tech stocks, short treasuries

2022 stress test result: -25% (tech fell 30%, treasuries fell 15%, both legs lost money)

Lesson: Need to hedge duration risk or reduce leverage

## Hypothetical Stress Scenarios

They also design **hypothetical scenarios**, such as a sudden 20% drop in equities combined with a bond sell-off, or a spike in oil prices paired with a currency devaluation.

**Common hypothetical scenarios:**

**Equity crash + vol spike:**
- S&P 500: -30%
- VIX: 70
- Credit spreads: +400 bps

**Interest rate shock:**
- 10-year yield: +200 bps in one month
- Bond prices: -15%
- Dollar strengthens

**Commodity shock:**
- Oil: +50%
- Natural gas: +100%
- Inflation expectations spike

**Currency crisis:**
- Emerging market currencies: -30%
- Flight to dollar
- Cross-border flows freeze

**Systematic deleveraging:**
- All hedge funds forced to cut risk simultaneously
- Crowded trades unwind
- Liquidity disappears

**Pandemic 2.0:**
- Global lockdowns return
- Supply chains break
- Credit markets freeze

## Correlation and Liquidity Stress

To build realistic tests, quantitative teams use Monte Carlo simulation, bootstrapped returns, and increasingly **adversarial machine learning** (training models to find scenarios that cause maximum pain to a given portfolio).

**Correlation stress:**

Normal correlations: Asset A and B have correlation 0.3

Stress scenario: Correlation jumps to 0.9 (both fall together)

**Impact:**

Diversification benefit disappears. Portfolio volatility spikes.

**Test methodology:**

1. Identify normal vs stressed correlation matrices
2. Simulate portfolio under both
3. Measure change in VaR and max drawdown

**Liquidity stress:**

Normal market: Can exit $10M position with 5 bps of slippage

Stressed market: Can only exit $2M per day, slippage 50 bps

**Modeling liquidity:**

\\[\\text{Slippage} = \\alpha \\left(\\frac{\\text{Trade Size}}{\\text{Daily Volume}}\\right)^\\beta\\]

In stress, \\(\\beta\\) increases (nonlinear impact gets worse)

**Liquidity cascade:**

Your forced selling pushes prices down, triggering others' stop losses, causing more selling (positive feedback loop).

Stress tests model this cascade effect to see if portfolio can survive.

## Adversarial Machine Learning

This approach, sometimes called **worst-case optimization**, helps uncover vulnerabilities that humans might overlook.

**Adversarial optimization:**

Train a neural network to generate market scenarios that maximize portfolio losses:

\\[\\max_{\\text{scenario}} \\quad \\text{Portfolio Loss}(\\text{scenario})\\]

Subject to: scenario must be "plausible" (not infinitely bad)

**Method:**

1. Define space of plausible scenarios (e.g., returns within 3 standard deviations)
2. Use gradient ascent to find worst-case scenario
3. Evaluate portfolio under that scenario

**What it finds:**

Hidden concentration risks, factor exposures you didn't know you had, correlation patterns that hurt during specific shocks.

**Example:**

Adversarial model discovers: "If tech and healthcare both fall while energy rallies, your long/short portfolio loses 15% even though you thought you were sector neutral."

This reveals hidden cross-sector exposures.

## Practical Stress Testing

Stress testing also accounts for **gap risk** (the risk of prices jumping between one close and the next open, bypassing stop-losses) and **funding risk**, the danger of counterparties tightening margins during market turmoil.

**Gap risk:**

You have a stop-loss at $50. Stock closes at $52. Overnight, bad news hits. Stock opens at $40.

Your stop-loss is bypassed. You lose more than planned.

**Stress test for gaps:**

Model scenarios where markets gap down 10%, 20%, 30% overnight.

**Funding risk:**

Normal: Your prime broker gives you 4x leverage

Stressed: Broker cuts you to 2x leverage (margin call)

You're forced to liquidate 50% of positions at the worst possible time.

**Stress test workflow:**

1. Run 10-20 historical and hypothetical scenarios
2. Calculate P&L, max drawdown, and time to recovery for each
3. Identify which positions contribute most to losses
4. Measure liquidity needs (can you exit fast enough?)
5. Report results to risk committee
6. Set position limits and hedges based on findings

**Example output:**

Worst scenario: 2008 replay

- Portfolio loss: 35%
- Worst position: Financial sector shorts (lost 50% as shorts squeezed)
- Liquidity need: $50M to meet margin calls
- Time to recovery: 18 months

**Action:**

Reduce financial sector exposure, increase cash buffer to $60M.

## Why Stress Testing Matters

The results aren't just academic. They feed directly into position limits, leverage caps, and hedging decisions. A well-designed stress test shows not only how much you can lose, but which positions or factors contribute most to that loss.

Stress testing reminds every fund that markets don't owe you liquidity or predictability. The goal is not to forecast the next crash, but to know exactly what happens if it arrives tomorrow.

**Key principle:**

Hope for the best, prepare for the worst. Stress testing is your preparation.
`;

  return (
    <SimpleSubsectionDetail
      category="Hedge Fund AI"
      categoryHref="/resources/hedge-fund-ai"
      title="Risk Management"
      subtitle="Stress Testing"
      description="Simulating extreme market scenarios, replaying historical crashes or creating hypothetical shocks to see how your portfolio would perform, including liquidity constraints and gap risk."
      lastUpdated="October 2025"
      content={content}
    />
  );
};

export default StressTesting;

