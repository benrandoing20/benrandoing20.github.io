import SimpleSubsectionDetail from '@/components/SimpleSubsectionDetail';

const FeatureEngineering = () => {
  const content = `
## Overview

**In this section:**
- [Overview](#overview)
- [What Are Features in Trading](#what-are-features-in-trading)
- [Types of Features](#types-of-features)
- [Stationarity and Data Hygiene](#stationarity-and-data-hygiene)
- [The Modern Feature Engineering Stack](#the-modern-feature-engineering-stack)
- [Feature Stores and Versioning](#feature-stores-and-versioning)

## Overview

Now that you understand how orders execute and markets work at the microstructure level, you're ready to build intelligence for making smart trades. But machine learning models can't learn directly from raw price ticks and order book snapshots—they need **structured, meaningful features** that capture patterns, relationships, and market dynamics. That's where feature engineering comes in: transforming raw market data into predictive signals that models can actually learn from.

Feature engineering is where machine learning meets market intuition. It's the process of transforming raw data into structured, meaningful inputs that models can learn from. In trading, this is where raw market data becomes usable intelligence.

## What Are Features in Trading

At a hedge fund, feature engineering often starts with **time series data**: prices, volumes, volatility, and order-book events. From these, researchers build features that describe market behavior in richer ways.

For example, instead of just using raw price, you might create:
- **Rolling momentum**: How much has the stock moved over the last 20 days?
- **Volatility clustering**: Is volatility higher or lower than its recent average?
- **Volume imbalance**: Are there more buy orders than sell orders in the order book?

These derived features help machine learning models detect patterns that aren't obvious from raw data alone.

## Types of Features

But it doesn't stop at price data. Quant teams pull in **alternative and cross-sectional data**:

**Technical Features:**

These are patterns derived from price and volume data:

- **Returns at different horizons**: How much the price changed over 1 day, 5 days, or 20 days. If a stock was $100 yesterday and $105 today, the 1-day return is 5%.
- **Moving averages**: The average price over a window (like the last 50 days). When a short-term average crosses above a long-term average, it might signal upward momentum.
- **RSI (Relative Strength Index)**: Measures if a stock is "overbought" (too high, might fall) or "oversold" (too low, might rise). Ranges from 0-100.
- **MACD (Moving Average Convergence Divergence)**: Compares two moving averages to spot trend changes.
- **Bollinger Bands**: Shows a price range based on volatility. Prices outside the bands might signal unusual moves.
- **High-low spread**: The difference between the day's highest and lowest price, indicating volatility.

**Microstructure Features:**

These capture what's happening inside the order book and trading flow:

- **Order book depth**: How many shares are waiting to be bought or sold at different price levels. Deep books mean more liquidity.
- **Bid-ask spread**: The gap between the highest buy price (bid) and lowest sell price (ask). Tight spreads mean liquid markets.
- **Trade flow toxicity**: Whether trades come from informed traders (who know something) vs uninformed traders (just rebalancing). Informed flow predicts future moves.
- **Quote velocity**: How fast new orders are being placed and canceled. High velocity can signal algorithmic activity or uncertainty.
- **Cancellation rates**: What percentage of orders get canceled before filling. High cancellation might indicate spoofing or changing conditions.

**Cross-Asset Features:**

These compare one asset to others to find relative value:

- **Sector momentum relative to market**: Is the tech sector outperforming the overall market? If yes, tech stocks might continue rising.
- **Correlation with related stocks or ETFs**: Does this stock move with its peers? If it usually does but suddenly diverges, that's a signal.
- **Beta to factors**: How sensitive is this stock to value (cheap stocks), momentum (trending stocks), or quality (profitable companies)? A high momentum beta means it rides trends strongly.
- **Commodity or FX exposure**: Does this company's profit depend on oil prices or currency exchange rates? Airlines are sensitive to oil; exporters to the dollar.

**Fundamental Features:**

These come from company financials and business performance:

- **Earnings surprises**: Did the company beat or miss analyst expectations? Surprises often move prices.
- **Earnings revisions**: Are analysts raising or lowering their forecasts? Upward revisions signal improving business.
- **Valuation ratios**: P/E (price-to-earnings), P/B (price-to-book), EV/EBITDA (enterprise value to earnings before interest, taxes, depreciation, and amortization). These measure if a stock is cheap or expensive relative to its fundamentals.
- **Growth metrics**: Is revenue growing? Are profit margins expanding? Fast growth often justifies higher valuations.
- **Balance sheet health**: Does the company have too much debt? Strong cash reserves? Healthy balance sheets reduce bankruptcy risk.

**Alternative Data Features:**

These use non-traditional data sources for unique insights:

- **Sentiment scores from news and social media**: Natural language processing (NLP) analyzes articles and tweets to gauge if sentiment is positive or negative. Negative sentiment might predict selling pressure.
- **Web traffic and app usage**: If a retailer's website traffic is surging, sales might be strong. App download trends can predict user growth.
- **Satellite imagery signals**: Counting cars in parking lots (retail foot traffic) or ships at ports (commodity demand). More cars = more customers = higher sales.
- **Credit card transaction data**: Aggregated, anonymized spending data shows consumer behavior in real time, before official earnings reports.

Machine learning thrives when these features **capture different perspectives** on the same event — one temporal, one cross-sectional, one behavioral.

## Stationarity and Data Hygiene

The key principle is **stationarity** — ensuring the statistical properties of features stay stable through time so the model learns enduring relationships rather than one-off noise.

**Non-stationary example**: Raw stock prices drift upward over time with inflation and growth. A model trained on prices from 2010 will fail in 2024 because the scale has completely changed.

**Stationary version**: Returns (percent changes) are stationary. Whether in 2010 or 2024, a 2% daily return means roughly the same thing.

Other techniques for stationarity:
- **Differencing**: Use price changes instead of levels
- **Normalization**: Z-score features relative to their rolling mean and standard deviation
- **Detrending**: Remove long-term trends before modeling
- **Fractional differentiation**: A technique that makes data stationary (stable statistical properties) while keeping some memory of past values. Regular differencing (today's price minus yesterday's) removes all memory; fractional differentiation finds a middle ground, removing just enough trend to achieve stationarity while preserving predictive information. Developed by Marcos López de Prado.

Researchers also guard against **look-ahead bias** — accidentally using information from the future. Every feature must be constructed using only data that would have been available at that point in time.

Researchers spend more time transforming, normalizing, and validating features than training models themselves. A single clean, persistent signal beats a hundred overfitted ones every time.

## The Modern Feature Engineering Stack
Modern pipelines rely on Python data stacks and distributed computing:

**Data Processing:**
- **pandas** and **NumPy**: For single-machine feature computation
- **Apache Spark** (via **PySpark**): Industry-standard distributed processing framework for large-scale data. Handles petabyte-scale datasets across clusters, with built-in SQL, streaming, and ML libraries. Most hedge funds use Spark for batch feature computation.
- **Dask**: Python-native distributed computing, easier to adopt than Spark for pandas users
- **Polars**: Fast DataFrame library gaining traction for speed

**Pipeline Orchestration:**
- **Apache Airflow**: DAG-based workflow orchestration (most common)
- **Prefect**: Modern alternative with better observability
- **Dagster**: Asset-oriented pipeline framework
- **Temporal**: For complex, long-running workflows

**Data Storage:**
- **BigQuery** (Google): Cloud data warehouse for analytics
- **Snowflake**: Cloud data platform with strong performance
- **AWS Redshift**: Amazon's data warehouse
- **Databricks Delta Lake**: Lakehouse architecture on top of S3, tightly integrated with Spark
- **ClickHouse** or **TimescaleDB**: Time-series optimized databases

**Example workflow:**

1. Raw market data arrives from vendors (Bloomberg, Refinitiv) and lands in a data lake (S3, GCS)
2. An **Airflow DAG** triggers every morning at 6 AM
3. An **Apache Spark job** reads yesterday's trades and quotes
4. Features are computed: rolling volatilities, momentum signals, order flow imbalances
5. Results are written to **BigQuery** tables, partitioned by date
6. Researchers query these tables with SQL for model training
7. Production systems read from the same tables for live inference

## Feature Stores and Versioning

**Feature stores** centralize feature definitions so research and production use the same logic.

**What they provide:**
- Define features once, use everywhere
- Consistent computation across backtests (historical simulations) and live trading (real-time production)
- Historical point-in-time queries for training
- Dependency tracking between features and raw data

**Common platforms:**
- **Tecton**: Enterprise solution with real-time support
- **Feast**: Open-source from Google
- **Hopsworks**: Full ML platform with feature store
- **Custom systems**: Many funds build their own

With proper infrastructure, feature engineering becomes **automated and versioned**. Every feature has a definition, a history, and a quality check. Changes are tracked, and experiments are reproducible.

This work may sound mundane, but it's the heart of machine learning for finance. Great models come from great features not from model complexity.
`;

  return (
    <SimpleSubsectionDetail
      category="Hedge Fund AI"
      categoryHref="/resources/hedge-fund-ai"
      title="Machine Learning Infrastructure"
      subtitle="Feature Engineering"
      description="Creating predictive features for trading models—engineering signals from order flow, microstructure, cross-asset relationships, volatility, and ensuring stationarity while preventing look-ahead bias and data leakage."
      lastUpdated="October 2025"
      content={content}
    />
  );
};

export default FeatureEngineering;

