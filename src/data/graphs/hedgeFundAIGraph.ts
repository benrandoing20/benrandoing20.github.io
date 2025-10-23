import { GraphData, nodeColors, getNodeSize } from '@/types/graphData';

export const hedgeFundAIGraphData: GraphData = {
  nodes: [
    // ===================== L0 — ROOT =====================
    {
      id: 'hedge-fund-ai',
      name: 'Hedge Fund AI',
      type: 'category',
      layer: 0,
      description:
        "The intersection of AI and quantitative finance—using machine learning to predict markets, optimize portfolios, execute trades, and manage risk in the competitive world of systematic trading.",
      color: nodeColors.category,
      size: getNodeSize(0, 'category'),
    },

    // ===================== L1 — CORE CATEGORIES (10) =====================
    {
      id: 'hedge-fund-fundamentals',
      name: 'Hedge Fund Fundamentals',
      type: 'category',
      layer: 1,
      description:
        "Understanding how hedge funds actually make money—the absolute return goal, long/short mechanics, leverage, risk discipline, and where AI fits in the full stack from data to dollars.",
      color: nodeColors.category,
      size: getNodeSize(1, 'category'),
    },
    {
      id: 'quant-trading-strategies',
      name: 'Quantitative Trading Strategies',
      type: 'category',
      layer: 1,
      description:
        "Systematic trading approaches driven by data and algorithms—from statistical arbitrage finding mispricings to high-frequency trading capturing microsecond opportunities across stocks, futures, options, and crypto.",
      color: nodeColors.category,
      size: getNodeSize(1, 'category'),
    },
    {
      id: 'market-prediction-models',
      name: 'Market Prediction Models',
      type: 'category',
      layer: 1,
      description:
        "Using AI to forecast where markets are heading—predicting price movements, volatility spikes, and regime changes by learning patterns from historical data, news, and market microstructure.",
      color: nodeColors.category,
      size: getNodeSize(1, 'category'),
    },
    {
      id: 'portfolio-optimization',
      name: 'Portfolio Optimization',
      type: 'category',
      layer: 1,
      description:
        "Building portfolios that maximize returns while controlling risk—using mathematical optimization, factor models, and reinforcement learning to decide how much of each asset to hold and when to rebalance.",
      color: nodeColors.category,
      size: getNodeSize(1, 'category'),
    },
    {
      id: 'risk-management',
      name: 'Risk Management',
      type: 'category',
      layer: 1,
      description:
        "Measuring and controlling portfolio risk—calculating how much you could lose in different scenarios, monitoring factor exposures, stress testing against market crashes, and ensuring you have enough liquidity.",
      color: nodeColors.category,
      size: getNodeSize(1, 'category'),
    },
    {
      id: 'alternative-data-signals',
      name: 'Alternative Data & Signals',
      type: 'category',
      layer: 1,
      description:
        "Finding trading edges in unconventional data sources—analyzing news sentiment, satellite images of parking lots, web scraping, credit card transactions, and other alternative data to predict company performance before it shows up in prices.",
      color: nodeColors.category,
      size: getNodeSize(1, 'category'),
    },
    {
      id: 'execution-microstructure',
      name: 'Execution & Market Microstructure',
      type: 'category',
      layer: 1,
      description:
        "Getting the best price when trading—smart order routing across venues, minimizing market impact, understanding order book dynamics, and using AI to optimize execution timing and size.",
      color: nodeColors.category,
      size: getNodeSize(1, 'category'),
    },
    {
      id: 'ml-infrastructure',
      name: 'Data / ML Infrastructure',
      type: 'category',
      layer: 1,
      description:
        "The engineering systems that power quant trading—data pipelines processing terabytes, backtesting engines simulating strategies, model registries tracking experiments, and production systems executing live trades.",
      color: nodeColors.category,
      size: getNodeSize(1, 'category'),
    },
    {
      id: 'regulatory-compliance',
      name: 'Regulatory & Compliance',
      type: 'category',
      layer: 1,
      description:
        "Staying legal and compliant in algorithmic trading—meeting SEC and MiFID II requirements, implementing kill switches and risk controls, explaining model decisions to regulators, and detecting market manipulation.",
      color: nodeColors.category,
      size: getNodeSize(1, 'category'),
    },
    {
      id: 'simulation-backtesting',
      name: 'Simulation, Backtesting & Evaluation',
      type: 'category',
      layer: 1,
      description:
        "Testing strategies before risking real money—simulating order book dynamics, modeling transaction costs and slippage, running walk-forward tests, and catching data leakage and overfitting.",
      color: nodeColors.category,
      size: getNodeSize(1, 'category'),
    },
    {
      id: 'agentic-ai',
      name: 'Agentic AI',
      type: 'category',
      layer: 1,
      description:
        "Autonomous systems that reason, plan, and act across the entire investment workflow—from research agents synthesizing information to trading agents making execution decisions to compliance agents monitoring activity.",
      color: nodeColors.category,
      size: getNodeSize(1, 'category'),
    },

    // ===================== L2 — SUBCATEGORIES (aligned to your list) =====================

    // Hedge Fund Fundamentals
    {
      id: 'how-hf-make-money',
      name: 'How Hedge Funds Make Money',
      type: 'category',
      layer: 2,
      description: "The absolute-return goal—making money in any market by going long what you think will rise and short what you think will fall, using leverage and derivatives to amplify edges while managing risk.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'long-short-equity',
      name: 'Long/Short Equity & Portfolio Construction',
      type: 'category',
      layer: 2,
      description: "The core hedge fund strategy—building portfolios with long positions in undervalued assets and short positions in overvalued ones, creating market-neutral or directional bets while managing gross and net exposure.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'ai-in-hf-stack',
      name: 'AI in the Hedge Fund Stack',
      type: 'category',
      layer: 2,
      description: "Where machine learning actually adds value—alpha generation (prediction models), portfolio optimization (sizing & risk), execution (minimizing costs), and operations (compliance & monitoring).",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },

    // Quant Strategies
    {
      id: 'stat-arb',
      name: 'Statistical Arbitrage',
      type: 'category',
      layer: 2,
      description: "Finding pairs or groups of assets that move together and trading when they diverge—using cointegration and mean reversion to capture relative value opportunities that should converge back.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'momentum-trend',
      name: 'Momentum & Trend Following',
      type: 'category',
      layer: 2,
      description: "Riding price trends and momentum—buying assets that have been going up and shorting those going down, either across assets (cross-sectional) or following trends within each asset (time-series).",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'hft-market-making',
      name: 'High-Frequency & Market Making',
      type: 'category',
      layer: 2,
      description: "Ultra-fast trading measured in microseconds—providing liquidity by constantly quoting bid-ask spreads, managing inventory risk, competing for queue position, and avoiding being picked off by informed traders.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },

    // Market Prediction Models
    {
      id: 'price-forecasting',
      name: 'Price Forecasting',
      type: 'category',
      layer: 2,
      description: "Predicting future returns across different time horizons—using features from order flow, price patterns, and cross-asset relationships to forecast which stocks or assets will outperform.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'vol-forecasting',
      name: 'Volatility Modeling',
      type: 'category',
      layer: 2,
      description: "Predicting how volatile markets will be—combining classical GARCH models with neural networks, informed by options prices, to forecast when markets will be calm vs turbulent.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'regime-detection',
      name: 'Regime Detection',
      type: 'category',
      layer: 2,
      description: "Identifying when market conditions fundamentally change—using hidden Markov models and clustering to detect shifts between risk-on/risk-off, high/low volatility, or liquid/illiquid regimes.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },

    // Portfolio Optimization
    {
      id: 'mpt',
      name: 'Modern Portfolio Theory',
      type: 'category',
      layer: 2,
      description: "Modern Portfolio Theory—the classic mean-variance optimization framework for building efficient portfolios, enhanced with robust covariance estimation, constraints on concentration, and turnover budgets.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'bl',
      name: 'Black–Litterman',
      type: 'category',
      layer: 2,
      description: "Black-Litterman—a Bayesian framework that blends market equilibrium assumptions with your own views about expected returns, letting you tilt portfolios based on conviction while maintaining diversification.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'rl-allocation',
      name: 'Deep RL Allocation',
      type: 'category',
      layer: 2,
      description: "Using reinforcement learning to learn portfolio allocation policies—training agents with policy gradients to make buy/sell/hold decisions that maximize risk-adjusted returns while respecting constraints.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },

    // Risk Management
    {
      id: 'var-es',
      name: 'VaR & Expected Shortfall',
      type: 'category',
      layer: 2,
      description: "Value at Risk and Expected Shortfall—quantifying how much you could lose with a given probability (VaR) and what the average loss would be beyond that threshold (ES), using parametric, historical, or Monte Carlo methods.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'stress-tests',
      name: 'Stress Testing',
      type: 'category',
      layer: 2,
      description: "Simulating extreme market scenarios—replaying historical crashes or creating hypothetical shocks to see how your portfolio would perform, including liquidity constraints and gap risk.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'factor-risk',
      name: 'Factor Models & Risk Decomp',
      type: 'category',
      layer: 2,
      description: "Understanding portfolio exposures to systematic factors—decomposing risk into market beta, value, momentum, size, and other factors using models like Fama-French to understand where your returns come from.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },

    // Alternative Data & Signals
    {
      id: 'sentiment-nlp',
      name: 'Sentiment & NLP',
      type: 'category',
      layer: 2,
      description: "Extracting trading signals from text—analyzing news, earnings calls, SEC filings, and social media using NLP and LLMs to measure sentiment, detect events, and gauge market narratives before they're priced in.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'geospatial-altdata',
      name: 'Satellite & Geospatial',
      type: 'category',
      layer: 2,
      description: "Using satellite imagery for trading signals—counting cars in retail parking lots, measuring oil storage levels, tracking ships and shipping routes, monitoring crop health—turning physical activity into nowcasting indicators.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'web-scrape-signals',
      name: 'Web Scraping & Web Signals',
      type: 'category',
      layer: 2,
      description: "Mining the web for trading alpha—tracking job postings as a proxy for company growth, analyzing reviews, monitoring supply chain signals, while managing data quality, survivorship bias, and ethical considerations.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },

    // Execution & Microstructure
    {
      id: 'optimal-exec',
      name: 'Optimal Execution',
      type: 'category',
      layer: 2,
      description: "Minimizing cost when executing large orders—using algorithms like TWAP, VWAP, or Almgren-Chriss optimal execution to split orders over time, balancing market impact against timing risk.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'smart-routing',
      name: 'Smart Order Routing',
      type: 'category',
      layer: 2,
      description: "Choosing where and how to send orders—routing between lit exchanges, dark pools, and alternative venues based on liquidity, fees, queue position, and adverse selection to minimize costs and information leakage.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'orderbook-ml',
      name: 'Order Book ML',
      type: 'category',
      layer: 2,
      description: "Using machine learning to understand order book dynamics—predicting short-term price moves, fill probabilities, and market impact from the state of bids and asks at microsecond timescales.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },

    // Data / ML Infrastructure
    {
      id: 'feature-eng',
      name: 'Feature Engineering',
      type: 'category',
      layer: 2,
      description: "Creating predictive features for trading models—engineering signals from order flow, microstructure, cross-asset relationships, volatility, and ensuring stationarity while preventing look-ahead bias and data leakage.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'backtesting',
      name: 'Backtesting Frameworks',
      type: 'category',
      layer: 2,
      description: "Simulating how strategies would have performed historically—building event-driven engines with realistic fill models, transaction costs, borrow fees, latency, and message loss to catch issues before live trading.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'production-systems',
      name: 'Production Trading Systems',
      type: 'category',
      layer: 2,
      description: "Running models in live trading—real-time data pipelines, model registries for versioning, monitoring for drift and errors, canary deployments, instant rollbacks, and feature stores for low-latency inference.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },

    // Regulatory & Compliance
    {
      id: 'algo-regs',
      name: 'Algorithmic Trading Regulations',
      type: 'category',
      layer: 2,
      description: "Meeting algorithmic trading regulations—implementing SEC Rule 15c3-5 market access controls, MiFID II requirements, pre-trade risk limits, kill switches, and maintaining audit trails for regulators.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'model-explain',
      name: 'Model Explainability',
      type: 'category',
      layer: 2,
      description: "Explaining black-box trading models to regulators—using SHAP, LIME, and attention mechanisms to provide interpretability, documenting model risk tiers, and maintaining governance frameworks.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'market-abuse-detect',
      name: 'Market Manipulation Detection',
      type: 'category',
      layer: 2,
      description: "Detecting market manipulation—identifying spoofing, layering, wash trading, and other abusive patterns using sequence models, graph analytics, and anomaly detection to maintain market integrity.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },

    // Simulation & Evaluation
    {
      id: 'lob-simulation',
      name: 'Limit Order Book Simulation',
      type: 'category',
      layer: 2,
      description: "Simulating limit order books for testing strategies—replaying historical books, generating synthetic order flow with agent-based models, modeling queue dynamics and realistic latency effects.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'transaction-costs',
      name: 'Transaction Costs & Slippage',
      type: 'category',
      layer: 2,
      description: "Modeling the true cost of trading—measuring market impact, price slippage, spreads, and footprint effects across different liquidity regimes to accurately estimate strategy profitability.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'evaluation-methods',
      name: 'Evaluation & Walk-Forward',
      type: 'category',
      layer: 2,
      description: "Properly evaluating strategy performance—using purged k-fold cross-validation, combinatorial CV, and walk-forward analysis to avoid overfitting and detect model decay from distribution drift.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },

    // Agentic AI
    {
      id: 'research-data-agents',
      name: 'Research & Data Agents',
      type: 'category',
      layer: 2,
      description: "AI agents that autonomously query databases, synthesize information, generate reports, and answer complex questions using text-to-SQL, retrieval-augmented generation, and multi-step reasoning to accelerate research workflows.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'trading-execution-agents',
      name: 'Trading & Execution Agents',
      type: 'category',
      layer: 2,
      description: "Autonomous trading systems that make real-time decisions about order placement, routing, and timing using reinforcement learning and planning algorithms to optimize execution and adapt to changing market conditions.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'operations-compliance-agents',
      name: 'Operations & Compliance Agents',
      type: 'category',
      layer: 2,
      description: "Agents that continuously monitor trading activity, generate regulatory reports, detect anomalies, and ensure compliance with rules through automated surveillance, natural language processing, and intelligent alerting systems.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },

    // Industry & Ecosystem (subcats not necessary; we anchor with companies)

    // ===================== L3 — CONCEPTS / MODELS =====================

    // Stat Arb
    { id: 'pairs-trading', name: 'Pairs Trading', type: 'concept', layer: 3, description: 'Cointegration-based spreads.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'mean-reversion', name: 'Mean Reversion', type: 'concept', layer: 3, description: 'Residual MR with controls.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },

    // Momentum
    { id: 'xsec-mom', name: 'Cross-Sectional Momentum', type: 'concept', layer: 3, description: 'Rank/long-short tilts.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'ts-mom', name: 'Time-Series Momentum', type: 'concept', layer: 3, description: 'Trend-following per asset.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },

    // HFT/MM
    { id: 'latency-arb', name: 'Latency Arbitrage', type: 'concept', layer: 3, description: 'Feed/route micro-latency edges.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'inventory-mm', name: 'Inventory Management', type: 'concept', layer: 3, description: 'Inventory and skew control.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },

    // Prediction
    { id: 'lstm-forecast', name: 'LSTM Forecasting', type: 'concept', layer: 3, description: 'Sequence DL on returns.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'xformer-forecast', name: 'Transformer Prediction', type: 'concept', layer: 3, description: 'Attention for long memory.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },

    // Vol
    { id: 'garch', name: 'GARCH Models', type: 'concept', layer: 3, description: 'ARCH/GARCH/EGARCH variants.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },

    // Regimes
    { id: 'hmm', name: 'Hidden Markov Models', type: 'concept', layer: 3, description: 'Latent state regimes.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },

    // Portfolio
    { id: 'efficient-frontier', name: 'Efficient Frontier', type: 'concept', layer: 3, description: 'Risk–return efficient set.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'black-litterman-concept', name: 'Black–Litterman Prior/Views', type: 'concept', layer: 3, description: 'Bayesian blending.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'policy-grad', name: 'Policy Gradients', type: 'concept', layer: 3, description: 'PPO/A3C for allocators.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },

    // Risk
    { id: 'parametric-var', name: 'Parametric VaR', type: 'concept', layer: 3, description: 'Delta–normal VaR.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'mc-var', name: 'Monte Carlo VaR', type: 'concept', layer: 3, description: 'Path-simulated VaR/ES.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'scenario-analytics', name: 'Scenario Analysis', type: 'concept', layer: 3, description: 'Historical/hypothetical shocks.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'factors-ff', name: 'Fama–French Factors', type: 'concept', layer: 3, description: 'Multi-factor risk lenses.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },

    // Alt Data
    { id: 'nlp-sentiment-concept', name: 'NLP Sentiment', type: 'concept', layer: 3, description: 'Embeddings, stance, events.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'sat-cv', name: 'Satellite CV', type: 'concept', layer: 3, description: 'Imagery → activity proxies.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },

    // Execution/Microstructure
    { id: 'twap-vwap', name: 'TWAP/VWAP', type: 'concept', layer: 3, description: 'Benchmark execution algos.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'implementation-shortfall', name: 'Implementation Shortfall', type: 'concept', layer: 3, description: 'Cost-minimization objective.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },

    // Simulation & Eval
    { id: 'purged-kfold', name: 'Purged K-Fold CV', type: 'concept', layer: 3, description: 'Leakage-safe CV.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'walk-forward', name: 'Walk-Forward Analysis', type: 'concept', layer: 3, description: 'Rolling train/validate.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },

    // ===================== L4 — RESOURCES (RED nodes linking to resource pages) =====================
    // Hedge Fund Fundamentals
    { id: 'resource-how-hf-make-money', name: 'How Hedge Funds Make Money', type: 'resource', layer: 4, description: 'Understanding fund economics and P&L flow', url: '/resources/hedge-fund-ai/hedge-fund-fundamentals/how-hedge-funds-make-money', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-long-short-equity', name: 'Long/Short Equity & Portfolio Construction', type: 'resource', layer: 4, description: 'Building long/short portfolios', url: '/resources/hedge-fund-ai/hedge-fund-fundamentals/long-short-equity-and-portfolio-construction', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-ai-in-hf-stack', name: 'AI in the Hedge Fund Stack', type: 'resource', layer: 4, description: 'Where ML adds value in trading', url: '/resources/hedge-fund-ai/hedge-fund-fundamentals/ai-in-the-hedge-fund-stack', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    
    // Quant Trading Strategies
    { id: 'resource-stat-arb', name: 'Statistical Arbitrage', type: 'resource', layer: 4, description: 'Mean reversion trading', url: '/resources/hedge-fund-ai/quant-trading-strategies/statistical-arbitrage', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-momentum', name: 'Momentum & Trend Following', type: 'resource', layer: 4, description: 'Riding price trends', url: '/resources/hedge-fund-ai/quant-trading-strategies/momentum-and-trend-following', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-hft', name: 'High-Frequency Trading', type: 'resource', layer: 4, description: 'Ultra-fast trading', url: '/resources/hedge-fund-ai/quant-trading-strategies/high-frequency-trading', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    
    // Market Prediction Models
    { id: 'resource-price-forecast', name: 'Price Forecasting', type: 'resource', layer: 4, description: 'Predicting future returns', url: '/resources/hedge-fund-ai/market-prediction-models/price-forecasting', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-vol-forecast', name: 'Volatility Modeling', type: 'resource', layer: 4, description: 'Predicting market volatility', url: '/resources/hedge-fund-ai/market-prediction-models/volatility-modeling', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-regime', name: 'Regime Detection', type: 'resource', layer: 4, description: 'Identifying market state changes', url: '/resources/hedge-fund-ai/market-prediction-models/regime-detection', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    
    // Portfolio Optimization
    { id: 'resource-mpt', name: 'Modern Portfolio Theory', type: 'resource', layer: 4, description: 'Mean-variance optimization', url: '/resources/hedge-fund-ai/portfolio-optimization/modern-portfolio-theory', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-black-litterman', name: 'Black-Litterman Model', type: 'resource', layer: 4, description: 'Bayesian portfolio allocation', url: '/resources/hedge-fund-ai/portfolio-optimization/black-litterman-model', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-deep-rl-portfolio', name: 'Deep Reinforcement Learning', type: 'resource', layer: 4, description: 'RL for portfolio allocation', url: '/resources/hedge-fund-ai/portfolio-optimization/deep-reinforcement-learning', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    
    // Risk Management
    { id: 'resource-var', name: 'Value at Risk (VaR)', type: 'resource', layer: 4, description: 'Quantifying potential losses', url: '/resources/hedge-fund-ai/risk-management/value-at-risk-var', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-stress-test', name: 'Stress Testing', type: 'resource', layer: 4, description: 'Simulating extreme scenarios', url: '/resources/hedge-fund-ai/risk-management/stress-testing', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-factor-models', name: 'Factor Models', type: 'resource', layer: 4, description: 'Understanding portfolio exposures', url: '/resources/hedge-fund-ai/risk-management/factor-models', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    
    // Alternative Data & Signals
    { id: 'resource-sentiment', name: 'Sentiment Analysis', type: 'resource', layer: 4, description: 'Extracting trading signals from text', url: '/resources/hedge-fund-ai/alternative-data-and-signals/sentiment-analysis', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-satellite-geo', name: 'Satellite & Geospatial Data', type: 'resource', layer: 4, description: 'Satellite imagery for trading', url: '/resources/hedge-fund-ai/alternative-data-and-signals/satellite-and-geospatial-data', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-web-scraping', name: 'Web Scraping & Crawling', type: 'resource', layer: 4, description: 'Mining the web for alpha', url: '/resources/hedge-fund-ai/alternative-data-and-signals/web-scraping-and-crawling', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    
    // Execution & Market Microstructure
    { id: 'resource-optimal-exec', name: 'Optimal Execution', type: 'resource', layer: 4, description: 'Minimizing execution costs', url: '/resources/hedge-fund-ai/execution-and-market-microstructure/optimal-execution', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-smart-routing', name: 'Smart Order Routing', type: 'resource', layer: 4, description: 'Choosing where to send orders', url: '/resources/hedge-fund-ai/execution-and-market-microstructure/smart-order-routing', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-market-making', name: 'Market Making', type: 'resource', layer: 4, description: 'Providing liquidity and managing spreads', url: '/resources/hedge-fund-ai/execution-and-market-microstructure/market-making', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    
    // Data / ML Infrastructure
    { id: 'resource-feature-eng', name: 'Feature Engineering', type: 'resource', layer: 4, description: 'Creating predictive features', url: '/resources/hedge-fund-ai/data-ml-infrastructure/feature-engineering', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-backtesting', name: 'Backtesting Frameworks', type: 'resource', layer: 4, description: 'Simulating historical performance', url: '/resources/hedge-fund-ai/data-ml-infrastructure/backtesting-frameworks', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-production-trading', name: 'Production Systems', type: 'resource', layer: 4, description: 'Running models in live trading', url: '/resources/hedge-fund-ai/data-ml-infrastructure/production-systems', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    
    // Regulatory & Compliance
    { id: 'resource-algo-regs', name: 'Algorithmic Trading Regulations', type: 'resource', layer: 4, description: 'Meeting trading regulations', url: '/resources/hedge-fund-ai/regulatory-and-compliance/algorithmic-trading-regulations', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-model-explain', name: 'Model Explainability', type: 'resource', layer: 4, description: 'Explaining black-box models', url: '/resources/hedge-fund-ai/regulatory-and-compliance/model-explainability', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-market-abuse', name: 'Market Manipulation Detection', type: 'resource', layer: 4, description: 'Detecting market manipulation', url: '/resources/hedge-fund-ai/regulatory-and-compliance/market-manipulation-detection', color: nodeColors.resource, size: getNodeSize(4, 'resource') },

    // Agentic AI
    { id: 'resource-research-data-agents', name: 'Research & Data Agents', type: 'resource', layer: 4, description: 'Autonomous research and data synthesis', url: '/resources/hedge-fund-ai/agentic-ai/research-and-data-agents', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-trading-execution-agents', name: 'Trading & Execution Agents', type: 'resource', layer: 4, description: 'Autonomous trading systems', url: '/resources/hedge-fund-ai/agentic-ai/trading-and-execution-agents', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-operations-compliance-agents', name: 'Operations & Compliance Agents', type: 'resource', layer: 4, description: 'Automated monitoring and compliance', url: '/resources/hedge-fund-ai/agentic-ai/operations-and-compliance-agents', color: nodeColors.resource, size: getNodeSize(4, 'resource') },

    // ===================== L4 — COMPANIES / TOOLS / VENDORS =====================
    // Quant firms
    // { id: 'two-sigma', name: 'Two Sigma', type: 'company', layer: 4, description: 'ML-driven quant fund.', url: 'https://twosigma.com', color: nodeColors.company, size: getNodeSize(4, 'company') },
    // { id: 'renaissance', name: 'Renaissance Technologies', type: 'company', layer: 4, description: 'Stat arb pioneer.', url: '#', color: nodeColors.company, size: getNodeSize(4, 'company') },
    // { id: 'citadel', name: 'Citadel Securities', type: 'company', layer: 4, description: 'Market making & HFT.', url: 'https://citadelsecurities.com', color: nodeColors.company, size: getNodeSize(4, 'company') },
    // { id: 'jane-street', name: 'Jane Street', type: 'company', layer: 4, description: 'Global market maker.', url: 'https://janestreet.com', color: nodeColors.company, size: getNodeSize(4, 'company') },
    // { id: 'de-shaw', name: 'D.E. Shaw', type: 'company', layer: 4, description: 'Computational finance.', url: 'https://deshaw.com', color: nodeColors.company, size: getNodeSize(4, 'company') },
    // { id: 'aqr', name: 'AQR Capital', type: 'company', layer: 4, description: 'Factor investing.', url: 'https://aqr.com', color: nodeColors.company, size: getNodeSize(4, 'company') },
    // { id: 'point72', name: 'Point72', type: 'company', layer: 4, description: 'Multi-strat with quant.', url: 'https://point72.com', color: nodeColors.company, size: getNodeSize(4, 'company') },
    // { id: 'bridgewater', name: 'Bridgewater', type: 'company', layer: 4, description: 'Macro & systematic.', url: 'https://www.bridgewater.com', color: nodeColors.company, size: getNodeSize(4, 'company') },
    // { id: 'hrt', name: 'Hudson River Trading', type: 'company', layer: 4, description: 'HFT/market making.', url: 'https://www.hudsontrading.com', color: nodeColors.company, size: getNodeSize(4, 'company') },
    // { id: 'jump', name: 'Jump Trading', type: 'company', layer: 4, description: 'HFT & crypto market making.', url: 'https://jumptrading.com', color: nodeColors.company, size: getNodeSize(4, 'company') },

    // Vendors / data / infra
    // { id: 'bloomberg', name: 'Bloomberg', type: 'company', layer: 4, description: 'Market data & analytics.', url: 'https://bloomberg.com', color: nodeColors.company, size: getNodeSize(4, 'company') },
    // { id: 'refinitiv', name: 'Refinitiv', type: 'company', layer: 4, description: 'Data (LSEG).', url: 'https://www.lseg.com', color: nodeColors.company, size: getNodeSize(4, 'company') },
    // { id: 'kensho', name: 'S&P Kensho', type: 'company', layer: 4, description: 'AI for finance.', url: 'https://www.spglobal.com/marketintelligence/en/solutions/kensho', color: nodeColors.company, size: getNodeSize(4, 'company') },
    // { id: 'nasdaq-datalink', name: 'Nasdaq Data Link', type: 'company', layer: 4, description: 'Formerly Quandl.', url: 'https://data.nasdaq.com', color: nodeColors.company, size: getNodeSize(4, 'company') },
    // { id: 'kx', name: 'KX (kdb+)', type: 'company', layer: 4, description: 'Tick/time-series DB.', url: 'https://kx.com', color: nodeColors.company, size: getNodeSize(4, 'company') },
    // { id: 'onetick', name: 'OneTick', type: 'company', layer: 4, description: 'Tick DB & analytics.', url: 'https://www.onetick.com', color: nodeColors.company, size: getNodeSize(4, 'company') },
    // { id: 'ticksmith', name: 'Ticksmith', type: 'company', layer: 4, description: 'Data lake for fintech.', url: 'https://www.ticksmith.com', color: nodeColors.company, size: getNodeSize(4, 'company') },
    // { id: 'databricks', name: 'Databricks', type: 'company', layer: 4, description: 'Lakehouse & ML.', url: 'https://databricks.com', color: nodeColors.company, size: getNodeSize(4, 'company') },
    // { id: 'snowflake', name: 'Snowflake', type: 'company', layer: 4, description: 'Data cloud.', url: 'https://www.snowflake.com', color: nodeColors.company, size: getNodeSize(4, 'company') },
    // { id: 'ibkr', name: 'Interactive Brokers', type: 'company', layer: 4, description: 'Execution & APIs.', url: 'https://www.interactivebrokers.com', color: nodeColors.company, size: getNodeSize(4, 'company') },
    // { id: 'alpaca', name: 'Alpaca', type: 'company', layer: 4, description: 'Broker API for trading.', url: 'https://alpaca.markets', color: nodeColors.company, size: getNodeSize(4, 'company') },

    // AI Tooling (treat as "company" nodes to anchor)
    // { id: 'pytorch', name: 'PyTorch', type: 'company', layer: 4, description: 'DL framework.', url: 'https://pytorch.org', color: nodeColors.company, size: getNodeSize(4, 'company') },
    // { id: 'jax', name: 'JAX', type: 'company', layer: 4, description: 'XLA/Autodiff for quant.', url: 'https://github.com/google/jax', color: nodeColors.company, size: getNodeSize(4, 'company') },
    // { id: 'rapids', name: 'RAPIDS/cuDF', type: 'company', layer: 4, description: 'GPU dataframe & ML.', url: 'https://rapids.ai', color: nodeColors.company, size: getNodeSize(4, 'company') },
    // { id: 'xgboost', name: 'XGBoost', type: 'company', layer: 4, description: 'Gradient boosting.', url: 'https://xgboost.ai', color: nodeColors.company, size: getNodeSize(4, 'company') },
    // { id: 'lightgbm', name: 'LightGBM', type: 'company', layer: 4, description: 'GBDT library.', url: 'https://lightgbm.readthedocs.io', color: nodeColors.company, size: getNodeSize(4, 'company') },
    // { id: 'vectorbt', name: 'vectorbt', type: 'company', layer: 4, description: 'Vectorized backtesting.', url: 'https://vectorbt.dev', color: nodeColors.company, size: getNodeSize(4, 'company') },
    // { id: 'backtrader', name: 'Backtrader', type: 'company', layer: 4, description: 'Backtesting framework.', url: 'https://www.backtrader.com', color: nodeColors.company, size: getNodeSize(4, 'company') },
    // { id: 'jax-lob', name: 'JAX-LOB', type: 'company', layer: 4, description: 'Differentiable LOB sim.', url: 'https://github.com/google-deepmind/jax', color: nodeColors.company, size: getNodeSize(4, 'company') },
  ],

  links: [
    // ===================== L0 → L1 =====================
    { source: 'hedge-fund-ai', target: 'hedge-fund-fundamentals', strength: 1 },
    { source: 'hedge-fund-ai', target: 'quant-trading-strategies', strength: 1 },
    { source: 'hedge-fund-ai', target: 'market-prediction-models', strength: 1 },
    { source: 'hedge-fund-ai', target: 'portfolio-optimization', strength: 1 },
    { source: 'hedge-fund-ai', target: 'risk-management', strength: 1 },
    { source: 'hedge-fund-ai', target: 'alternative-data-signals', strength: 1 },
    { source: 'hedge-fund-ai', target: 'execution-microstructure', strength: 1 },
    { source: 'hedge-fund-ai', target: 'ml-infrastructure', strength: 1 },
    { source: 'hedge-fund-ai', target: 'regulatory-compliance', strength: 1 },
    { source: 'hedge-fund-ai', target: 'simulation-backtesting', strength: 1 },
    { source: 'hedge-fund-ai', target: 'agentic-ai', strength: 1 },

    // ===================== L1 → L2 =====================
    // Hedge Fund Fundamentals
    { source: 'hedge-fund-fundamentals', target: 'how-hf-make-money', strength: 1 },
    { source: 'hedge-fund-fundamentals', target: 'long-short-equity', strength: 1 },
    { source: 'hedge-fund-fundamentals', target: 'ai-in-hf-stack', strength: 1 },

    // Strategies
    { source: 'quant-trading-strategies', target: 'stat-arb', strength: 1 },
    { source: 'quant-trading-strategies', target: 'momentum-trend', strength: 1 },
    { source: 'quant-trading-strategies', target: 'hft-market-making', strength: 1 },

    // Prediction
    { source: 'market-prediction-models', target: 'price-forecasting', strength: 1 },
    { source: 'market-prediction-models', target: 'vol-forecasting', strength: 1 },
    { source: 'market-prediction-models', target: 'regime-detection', strength: 1 },

    // Portfolio
    { source: 'portfolio-optimization', target: 'mpt', strength: 1 },
    { source: 'portfolio-optimization', target: 'bl', strength: 1 },
    { source: 'portfolio-optimization', target: 'rl-allocation', strength: 1 },

    // Risk
    { source: 'risk-management', target: 'var-es', strength: 1 },
    { source: 'risk-management', target: 'stress-tests', strength: 1 },
    { source: 'risk-management', target: 'factor-risk', strength: 1 },

    // Alt data
    { source: 'alternative-data-signals', target: 'sentiment-nlp', strength: 1 },
    { source: 'alternative-data-signals', target: 'geospatial-altdata', strength: 1 },
    { source: 'alternative-data-signals', target: 'web-scrape-signals', strength: 1 },

    // Execution
    { source: 'execution-microstructure', target: 'optimal-exec', strength: 1 },
    { source: 'execution-microstructure', target: 'smart-routing', strength: 1 },
    { source: 'execution-microstructure', target: 'orderbook-ml', strength: 1 },

    // ML Infra
    { source: 'ml-infrastructure', target: 'feature-eng', strength: 1 },
    { source: 'ml-infrastructure', target: 'backtesting', strength: 1 },
    { source: 'ml-infrastructure', target: 'production-systems', strength: 1 },

    // Regulatory
    { source: 'regulatory-compliance', target: 'algo-regs', strength: 1 },
    { source: 'regulatory-compliance', target: 'model-explain', strength: 1 },
    { source: 'regulatory-compliance', target: 'market-abuse-detect', strength: 1 },

    // Simulation
    { source: 'simulation-backtesting', target: 'lob-simulation', strength: 1 },
    { source: 'simulation-backtesting', target: 'transaction-costs', strength: 1 },
    { source: 'simulation-backtesting', target: 'evaluation-methods', strength: 1 },

    // Agentic AI
    { source: 'agentic-ai', target: 'research-data-agents', strength: 1 },
    { source: 'agentic-ai', target: 'trading-execution-agents', strength: 1 },
    { source: 'agentic-ai', target: 'operations-compliance-agents', strength: 1 },

    // ===================== L2 → L3 (Concepts) =====================
    // Stat Arb
    { source: 'stat-arb', target: 'pairs-trading', strength: 0.8 },
    { source: 'stat-arb', target: 'mean-reversion', strength: 0.8 },

    // Momentum
    { source: 'momentum-trend', target: 'xsec-mom', strength: 0.8 },
    { source: 'momentum-trend', target: 'ts-mom', strength: 0.8 },

    // HFT/MM
    { source: 'hft-market-making', target: 'latency-arb', strength: 0.8 },
    { source: 'hft-market-making', target: 'inventory-mm', strength: 0.8 },

    // Prediction
    { source: 'price-forecasting', target: 'lstm-forecast', strength: 0.8 },
    { source: 'price-forecasting', target: 'xformer-forecast', strength: 0.8 },

    // Vol
    { source: 'vol-forecasting', target: 'garch', strength: 0.8 },

    // Regimes
    { source: 'regime-detection', target: 'hmm', strength: 0.8 },

    // Portfolio
    { source: 'mpt', target: 'efficient-frontier', strength: 0.8 },
    { source: 'bl', target: 'black-litterman-concept', strength: 0.8 },
    { source: 'rl-allocation', target: 'policy-grad', strength: 0.8 },

    // Risk
    { source: 'var-es', target: 'parametric-var', strength: 0.8 },
    { source: 'var-es', target: 'mc-var', strength: 0.8 },
    { source: 'stress-tests', target: 'scenario-analytics', strength: 0.8 },
    { source: 'factor-risk', target: 'factors-ff', strength: 0.8 },

    // Alt data
    { source: 'sentiment-nlp', target: 'nlp-sentiment-concept', strength: 0.8 },
    { source: 'geospatial-altdata', target: 'sat-cv', strength: 0.8 },

    // Execution
    { source: 'optimal-exec', target: 'twap-vwap', strength: 0.8 },
    { source: 'optimal-exec', target: 'implementation-shortfall', strength: 0.8 },

    // Simulation/Eval
    { source: 'evaluation-methods', target: 'purged-kfold', strength: 0.8 },
    { source: 'evaluation-methods', target: 'walk-forward', strength: 0.8 },

    // ============= L2 → L4 (RED Resource Nodes) =============
    // Hedge Fund Fundamentals
    { source: 'how-hf-make-money', target: 'resource-how-hf-make-money', strength: 0.8 },
    { source: 'long-short-equity', target: 'resource-long-short-equity', strength: 0.8 },
    { source: 'ai-in-hf-stack', target: 'resource-ai-in-hf-stack', strength: 0.8 },
    
    // Quant Trading Strategies
    { source: 'stat-arb', target: 'resource-stat-arb', strength: 0.8 },
    { source: 'momentum-trend', target: 'resource-momentum', strength: 0.8 },
    { source: 'hft-market-making', target: 'resource-hft', strength: 0.8 },
    
    // Market Prediction Models
    { source: 'price-forecasting', target: 'resource-price-forecast', strength: 0.8 },
    { source: 'vol-forecasting', target: 'resource-vol-forecast', strength: 0.8 },
    { source: 'regime-detection', target: 'resource-regime', strength: 0.8 },
    
    // Portfolio Optimization
    { source: 'mpt', target: 'resource-mpt', strength: 0.8 },
    { source: 'bl', target: 'resource-black-litterman', strength: 0.8 },
    { source: 'rl-allocation', target: 'resource-deep-rl-portfolio', strength: 0.8 },
    
    // Risk Management
    { source: 'var-es', target: 'resource-var', strength: 0.8 },
    { source: 'stress-tests', target: 'resource-stress-test', strength: 0.8 },
    { source: 'factor-risk', target: 'resource-factor-models', strength: 0.8 },
    
    // Alternative Data & Signals
    { source: 'sentiment-nlp', target: 'resource-sentiment', strength: 0.8 },
    { source: 'geospatial-altdata', target: 'resource-satellite-geo', strength: 0.8 },
    { source: 'web-scrape-signals', target: 'resource-web-scraping', strength: 0.8 },
    
    // Execution & Order Routing
    { source: 'optimal-exec', target: 'resource-optimal-exec', strength: 0.8 },
    { source: 'smart-routing', target: 'resource-smart-routing', strength: 0.8 },
    { source: 'orderbook-ml', target: 'resource-market-making', strength: 0.8 },
    
    // Data / ML Infrastructure
    { source: 'feature-eng', target: 'resource-feature-eng', strength: 0.8 },
    { source: 'backtesting', target: 'resource-backtesting', strength: 0.8 },
    { source: 'production-systems', target: 'resource-production-trading', strength: 0.8 },
    
    // Regulatory & Compliance
    { source: 'algo-regs', target: 'resource-algo-regs', strength: 0.8 },
    { source: 'model-explain', target: 'resource-model-explain', strength: 0.8 },
    { source: 'market-abuse-detect', target: 'resource-market-abuse', strength: 0.8 },

    // Agentic AI
    { source: 'research-data-agents', target: 'resource-research-data-agents', strength: 0.8 },
    { source: 'trading-execution-agents', target: 'resource-trading-execution-agents', strength: 0.8 },
    { source: 'operations-compliance-agents', target: 'resource-operations-compliance-agents', strength: 0.8 },

    // ===================== L3/Category → L4 Companies/Tools =====================
    // Firms ↔ strategy areas
    // { source: 'stat-arb', target: 'two-sigma', strength: 0.6 },
    // { source: 'stat-arb', target: 'renaissance', strength: 0.6 },

    // { source: 'hft-market-making', target: 'citadel', strength: 0.6 },
    // { source: 'hft-market-making', target: 'jane-street', strength: 0.6 },
    // { source: 'hft-market-making', target: 'hrt', strength: 0.6 },
    // { source: 'hft-market-making', target: 'jump', strength: 0.6 },

    // { source: 'factor-risk', target: 'aqr', strength: 0.6 },
    // { source: 'portfolio-optimization', target: 'de-shaw', strength: 0.5 },
    // { source: 'portfolio-optimization', target: 'bridgewater', strength: 0.5 },
    // { source: 'quant-trading-strategies', target: 'point72', strength: 0.4 },

    // Vendors ↔ data/infrastructure areas
    // { source: 'alternative-data-signals', target: 'bloomberg', strength: 0.6 },
    // { source: 'alternative-data-signals', target: 'refinitiv', strength: 0.6 },
    // { source: 'alternative-data-signals', target: 'kensho', strength: 0.6 },
    // { source: 'alternative-data-signals', target: 'nasdaq-datalink', strength: 0.6 },

    // { source: 'ml-infrastructure', target: 'databricks', strength: 0.6 },
    // { source: 'ml-infrastructure', target: 'snowflake', strength: 0.6 },
    // { source: 'ml-infrastructure', target: 'kx', strength: 0.6 },
    // { source: 'ml-infrastructure', target: 'onetick', strength: 0.6 },
    // { source: 'ml-infrastructure', target: 'ticksmith', strength: 0.5 },

    // Execution providers
    // { source: 'execution-microstructure', target: 'ibkr', strength: 0.5 },
    // { source: 'execution-microstructure', target: 'alpaca', strength: 0.4 },

    // Tooling ↔ infra/simulation
    // { source: 'ml-infrastructure', target: 'pytorch', strength: 0.5 },
    // { source: 'ml-infrastructure', target: 'jax', strength: 0.5 },
    // { source: 'ml-infrastructure', target: 'rapids', strength: 0.5 },
    // { source: 'feature-eng', target: 'xgboost', strength: 0.5 },
    // { source: 'feature-eng', target: 'lightgbm', strength: 0.5 },
    // { source: 'backtesting', target: 'vectorbt', strength: 0.5 },
    // { source: 'backtesting', target: 'backtrader', strength: 0.5 },
    // { source: 'lob-simulation', target: 'jax-lob', strength: 0.5 },
  ],
};
