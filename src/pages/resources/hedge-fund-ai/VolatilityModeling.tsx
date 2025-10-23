import SimpleSubsectionDetail from '@/components/SimpleSubsectionDetail';

const VolatilityModeling = () => {
  const content = `
## Overview

**In this section:**
- [Why Volatility Matters](#why-volatility-matters)
- [Classical GARCH Models](#classical-garch-models)
- [Implied vs Realized Volatility](#implied-vs-realized-volatility)
- [Machine Learning for Volatility](#machine-learning-for-volatility)
- [Hybrid Approaches](#hybrid-approaches)
- [Applications in Trading](#applications-in-trading)

While predicting prices is notoriously hard, forecasting volatility — how much prices are likely to move — is far more tractable and equally valuable. Hedge funds model volatility to adjust position sizing, set risk limits, and price derivatives.

## Why Volatility Matters

Volatility forecasting is central to risk management and portfolio construction:

**Position Sizing**: Allocate more capital to low-volatility strategies, less to high-volatility ones

**Risk Limits**: Set stop-losses and drawdown thresholds based on expected volatility

**Options Trading**: Price options accurately requires volatility estimates

**Volatility Targeting**: Keep portfolio risk constant by scaling positions inversely with volatility

**Regime Detection**: Sudden volatility spikes often signal regime changes

Unlike price prediction, volatility is **persistent** — high volatility tends to follow high volatility. This makes it more predictable than returns themselves.

## Classical GARCH Models

The classical approach uses **GARCH** (Generalized Autoregressive Conditional Heteroskedasticity) models and their variations.

**Core Idea**: Volatility clusters over time. Periods of high volatility tend to follow high volatility, and calm periods follow calm ones.

**Standard GARCH(1,1) Model:**

\\[\\sigma_t^2 = \\omega + \\alpha r_{t-1}^2 + \\beta \\sigma_{t-1}^2\\]

Where:
- \\(\\sigma_t^2\\) = variance at time \\(t\\)
- \\(r_{t-1}^2\\) = squared return from previous period (recent shock)
- \\(\\sigma_{t-1}^2\\) = previous variance forecast (long-term trend)
- \\(\\omega, \\alpha, \\beta\\) = parameters estimated from data

**Interpretation:**

Tomorrow's volatility depends on:
1. A baseline level (\\(\\omega\\))
2. How much recent market movements matter (\\(\\alpha\\))
3. How much past volatility persists (\\(\\beta\\))

If \\(\\alpha + \\beta\\) is close to 1, volatility is highly persistent — shocks last a long time.

**Variations:**

**EGARCH (Exponential GARCH):**

Allows volatility to respond asymmetrically to positive vs negative returns. **Leverage effect**: Bad news increases volatility more than good news.

\\[\\log(\\sigma_t^2) = \\omega + \\alpha \\frac{r_{t-1}}{\\sigma_{t-1}} + \\gamma \\left|\\frac{r_{t-1}}{\\sigma_{t-1}}\\right| + \\beta \\log(\\sigma_{t-1}^2)\\]

**GJR-GARCH:**

Similar asymmetry but in a different functional form:

\\[\\sigma_t^2 = \\omega + \\alpha r_{t-1}^2 + \\gamma r_{t-1}^2 I_{t-1} + \\beta \\sigma_{t-1}^2\\]

Where \\(I_{t-1} = 1\\) if \\(r_{t-1} < 0\\) (negative return) and 0 otherwise.

**GARCH-M (GARCH in Mean):**

Models the **risk premium** — returns depend on volatility:

\\[r_t = \\mu + \\lambda \\sigma_t^2 + \\epsilon_t\\]

When volatility is high, expected returns increase (compensation for risk).

## Implied vs Realized Volatility

In options and derivatives trading, **implied volatility** from the market's option prices provides another signal.

**Realized Volatility**: Measured from historical price movements

\\[\\text{Realized Vol} = \\sqrt{\\frac{252}{n} \\sum_{i=1}^{n} r_i^2}\\]

Annualized standard deviation of returns.

**Implied Volatility**: Backed out from option prices using the Black-Scholes model or similar

The market's **expectation** of future volatility embedded in option premiums.

**Trading the Spread:**

Comparing implied vs realized helps detect whether the market is over- or underpricing risk:

**Implied > Realized**: Options are expensive → sell volatility (short straddles, covered calls)

**Implied < Realized**: Options are cheap → buy volatility (long straddles, protective puts)

**VIX and Volatility Indices:**

The **VIX** (CBOE Volatility Index) measures 30-day implied volatility on S&P 500 options. It's often called the "fear gauge" because it spikes during market stress.

Hedge funds trade VIX futures, options, and ETPs to:
- Hedge portfolio risk
- Express views on market uncertainty
- Arbitrage volatility mispricings

## Machine Learning for Volatility

Modern approaches combine classical ideas with machine learning to capture nonlinear relationships.

**Neural Networks for Volatility:**

Instead of assuming a fixed GARCH structure, neural networks learn flexible relationships between volatility and market features.

**Input features:**
- Lagged returns and squared returns
- Trading volume and volume imbalance
- Bid-ask spread and liquidity measures
- VIX and cross-asset volatilities
- Macroeconomic indicators (yield curve, credit spreads)

**Architecture:**

A feedforward network or LSTM that outputs volatility forecast:

\\[\\sigma_t = f_{NN}(r_{t-1}, r_{t-2}, ..., \\text{VIX}_{t-1}, \\text{volume}_{t-1}, ...)\\]

**Advantages:**
- Captures complex, nonlinear patterns
- Integrates diverse data sources
- No need to specify functional form

**Recurrent Neural Networks (RNNs) and LSTMs:**

Can capture **long-memory effects** in volatility. Some volatility shocks persist for weeks or months, and LSTMs can learn these dependencies better than fixed-lag models.

**Attention-Based Models:**

Transformers can learn how volatility responds to **structural market changes** or **external shocks**.

Example: After a central bank announcement, the model learns to weigh recent news sentiment more heavily than historical price patterns.

## Hybrid Approaches

Some funds use **neural-GARCH hybrids**, where a neural network replaces part of the GARCH function to allow for more flexible dynamics.

**GARCH-NN Model:**

\\[\\sigma_t^2 = f_{NN}(r_{t-1}, r_{t-2}, ..., \\sigma_{t-1}, \\text{features})\\]

The neural network learns the conditional variance function, but the model retains GARCH-like structure (using past variance and returns as inputs).

**Variational Autoencoders (VAEs):**

VAEs can learn **latent volatility factors** that can't be observed directly.

**How it works:**
1. Encode high-dimensional market data (prices, volumes, spreads) into low-dimensional latent space
2. Latent factors represent hidden drivers of volatility (liquidity stress, sentiment, regime)
3. Decode latent factors to forecast future volatility

This is useful when volatility is driven by unobservable forces like market microstructure or institutional flows.

**Gaussian Processes:**

Model volatility as a smooth function with uncertainty estimates. Useful when you want **confidence intervals** around volatility forecasts, not just point estimates.

## Applications in Trading

Volatility models serve as inputs to broader portfolio and risk systems.

**Position Sizing via Volatility Targeting:**

Keep risk constant by scaling positions inversely with volatility.

\\[\\text{Position Size} = \\frac{\\text{Target Risk}}{\\sigma_t}\\]

When volatility doubles, cut position size in half. This stabilizes portfolio drawdowns across different market conditions.

**Risk Parity:**

Allocate capital across assets based on their volatility, so each contributes equally to portfolio risk.

**Options Pricing:**

Accurate volatility forecasts are essential for:
- Pricing exotic options
- Determining fair value for straddles and strangles
- Calibrating volatility surfaces

**Stress Testing:**

Simulate extreme volatility scenarios to measure portfolio resilience:
- What happens if VIX spikes to 50?
- How does the portfolio perform if bond volatility doubles?
- Can we survive a 2008-style liquidity crisis?

**Tail-Risk Hedging:**

When volatility is forecasted to increase, funds can:
- Buy out-of-the-money puts
- Reduce leverage
- Shift to more liquid, less correlated assets

**Dynamic Hedging:**

For options market makers, volatility forecasts inform **delta and gamma hedging** — how often to rebalance hedges based on expected price movements.

## When to Play Offense and Defense

The key is not to predict exact volatility but to model **how uncertainty itself changes through time**.

Volatility forecasts tell you:
- **When to play offense**: Low volatility → stable markets → increase leverage, take directional bets
- **When to play defense**: High volatility → uncertain markets → reduce leverage, hedge tail risk, focus on liquidity

Understanding volatility is understanding the pace and rhythm of the market. It's knowing when the game has changed, even if you don't know exactly where prices will go.
`;

  return (
    <SimpleSubsectionDetail
      category="Hedge Fund AI"
      categoryHref="/resources/hedge-fund-ai"
      title="Market Prediction Models"
      subtitle="Volatility Modeling"
      description="Predicting how volatile markets will be—combining classical GARCH models with neural networks, informed by options prices, to forecast when markets will be calm vs turbulent."
      lastUpdated="October 2025"
      content={content}
    />
  );
};

export default VolatilityModeling;

