import { GraphData, nodeColors, getNodeSize } from '@/types/graphData';

export const hedgeFundAIGraphData: GraphData = {
  nodes: [
    // Layer 0 - Root Category
    { 
      id: 'hedge-fund-ai', 
      name: 'Hedge Fund AI', 
      type: 'category', 
      layer: 0,
      description: 'AI-driven quantitative finance and trading',
      color: nodeColors.category,
      size: getNodeSize(0, 'category')
    },

    // ============ Layer 1 - Major Domains (Black) ============
    { 
      id: 'trading-systems', 
      name: 'Trading Systems', 
      type: 'topic', 
      layer: 1,
      description: 'Algorithmic trading and execution',
      color: nodeColors.category,
      size: getNodeSize(1, 'topic')
    },
    { 
      id: 'risk-portfolio', 
      name: 'Risk & Portfolio', 
      type: 'topic', 
      layer: 1,
      description: 'Risk management and portfolio optimization',
      color: nodeColors.category,
      size: getNodeSize(1, 'topic')
    },
    { 
      id: 'prediction-analytics', 
      name: 'Prediction & Analytics', 
      type: 'topic', 
      layer: 1,
      description: 'Market forecasting and analysis',
      color: nodeColors.category,
      size: getNodeSize(1, 'topic')
    },
    { 
      id: 'data-infrastructure', 
      name: 'Data & Infrastructure', 
      type: 'topic', 
      layer: 1,
      description: 'Data sources and ML infrastructure',
      color: nodeColors.category,
      size: getNodeSize(1, 'topic')
    },

    // ============ Layer 2 - Sub-Domains (Black) ============
    
    // Trading Systems Sub-domains
    { 
      id: 'strategy-development', 
      name: 'Strategy Development', 
      type: 'topic', 
      layer: 2,
      description: 'Developing quantitative trading strategies',
      color: nodeColors.category,
      size: getNodeSize(2, 'topic')
    },
    { 
      id: 'trade-execution', 
      name: 'Trade Execution', 
      type: 'topic', 
      layer: 2,
      description: 'Order execution and routing',
      color: nodeColors.category,
      size: getNodeSize(2, 'topic')
    },
    { 
      id: 'market-microstructure', 
      name: 'Market Microstructure', 
      type: 'topic', 
      layer: 2,
      description: 'Understanding market mechanics',
      color: nodeColors.category,
      size: getNodeSize(2, 'topic')
    },

    // Risk & Portfolio Sub-domains
    { 
      id: 'portfolio-construction', 
      name: 'Portfolio Construction', 
      type: 'topic', 
      layer: 2,
      description: 'Asset allocation and optimization',
      color: nodeColors.category,
      size: getNodeSize(2, 'topic')
    },
    { 
      id: 'risk-measurement', 
      name: 'Risk Measurement', 
      type: 'topic', 
      layer: 2,
      description: 'Quantifying and measuring risk',
      color: nodeColors.category,
      size: getNodeSize(2, 'topic')
    },
    { 
      id: 'risk-mitigation', 
      name: 'Risk Mitigation', 
      type: 'topic', 
      layer: 2,
      description: 'Hedging and risk control',
      color: nodeColors.category,
      size: getNodeSize(2, 'topic')
    },

    // Prediction & Analytics Sub-domains
    { 
      id: 'price-prediction', 
      name: 'Price Prediction', 
      type: 'topic', 
      layer: 2,
      description: 'Forecasting asset prices',
      color: nodeColors.category,
      size: getNodeSize(2, 'topic')
    },
    { 
      id: 'volatility-analysis', 
      name: 'Volatility Analysis', 
      type: 'topic', 
      layer: 2,
      description: 'Modeling and forecasting volatility',
      color: nodeColors.category,
      size: getNodeSize(2, 'topic')
    },
    { 
      id: 'market-regimes', 
      name: 'Market Regimes', 
      type: 'topic', 
      layer: 2,
      description: 'Identifying market states',
      color: nodeColors.category,
      size: getNodeSize(2, 'topic')
    },

    // Data & Infrastructure Sub-domains
    { 
      id: 'alternative-data', 
      name: 'Alternative Data', 
      type: 'topic', 
      layer: 2,
      description: 'Non-traditional data sources',
      color: nodeColors.category,
      size: getNodeSize(2, 'topic')
    },
    { 
      id: 'ml-pipeline', 
      name: 'ML Pipeline', 
      type: 'topic', 
      layer: 2,
      description: 'Machine learning infrastructure',
      color: nodeColors.category,
      size: getNodeSize(2, 'topic')
    },
    { 
      id: 'compliance-governance', 
      name: 'Compliance & Governance', 
      type: 'topic', 
      layer: 2,
      description: 'Regulatory compliance and model governance',
      color: nodeColors.category,
      size: getNodeSize(2, 'topic')
    },

    // ============ Layer 3 - Specific Topics (Black) ============
    
    // Strategy Development Topics
    { 
      id: 'statistical-arbitrage', 
      name: 'Statistical Arbitrage', 
      type: 'topic', 
      layer: 3,
      description: 'Mean reversion strategies',
      color: nodeColors.category,
      size: getNodeSize(3, 'topic')
    },
    { 
      id: 'momentum-strategies', 
      name: 'Momentum Strategies', 
      type: 'topic', 
      layer: 3,
      description: 'Trend following approaches',
      color: nodeColors.category,
      size: getNodeSize(3, 'topic')
    },
    { 
      id: 'high-frequency', 
      name: 'High-Frequency Trading', 
      type: 'topic', 
      layer: 3,
      description: 'Ultra-fast trading strategies',
      color: nodeColors.category,
      size: getNodeSize(3, 'topic')
    },

    // Trade Execution Topics
    { 
      id: 'optimal-execution', 
      name: 'Optimal Execution', 
      type: 'topic', 
      layer: 3,
      description: 'Minimizing execution costs',
      color: nodeColors.category,
      size: getNodeSize(3, 'topic')
    },
    { 
      id: 'smart-routing', 
      name: 'Smart Order Routing', 
      type: 'topic', 
      layer: 3,
      description: 'Multi-venue execution',
      color: nodeColors.category,
      size: getNodeSize(3, 'topic')
    },

    // Market Microstructure Topics
    { 
      id: 'market-making', 
      name: 'Market Making', 
      type: 'topic', 
      layer: 3,
      description: 'Liquidity provision',
      color: nodeColors.category,
      size: getNodeSize(3, 'topic')
    },

    // Portfolio Construction Topics
    { 
      id: 'modern-portfolio-theory', 
      name: 'Modern Portfolio Theory', 
      type: 'topic', 
      layer: 3,
      description: 'Mean-variance optimization',
      color: nodeColors.category,
      size: getNodeSize(3, 'topic')
    },
    { 
      id: 'factor-investing', 
      name: 'Factor Investing', 
      type: 'topic', 
      layer: 3,
      description: 'Factor-based allocation',
      color: nodeColors.category,
      size: getNodeSize(3, 'topic')
    },
    { 
      id: 'rl-portfolio', 
      name: 'RL Portfolio Management', 
      type: 'topic', 
      layer: 3,
      description: 'Deep reinforcement learning for portfolios',
      color: nodeColors.category,
      size: getNodeSize(3, 'topic')
    },

    // Risk Measurement Topics
    { 
      id: 'value-at-risk', 
      name: 'Value at Risk', 
      type: 'topic', 
      layer: 3,
      description: 'VaR measurement',
      color: nodeColors.category,
      size: getNodeSize(3, 'topic')
    },
    { 
      id: 'stress-testing', 
      name: 'Stress Testing', 
      type: 'topic', 
      layer: 3,
      description: 'Scenario analysis',
      color: nodeColors.category,
      size: getNodeSize(3, 'topic')
    },

    // Risk Mitigation Topics
    { 
      id: 'hedging-strategies', 
      name: 'Hedging Strategies', 
      type: 'topic', 
      layer: 3,
      description: 'Risk hedging techniques',
      color: nodeColors.category,
      size: getNodeSize(3, 'topic')
    },

    // Price Prediction Topics
    { 
      id: 'time-series-forecasting', 
      name: 'Time Series Forecasting', 
      type: 'topic', 
      layer: 3,
      description: 'Price prediction models',
      color: nodeColors.category,
      size: getNodeSize(3, 'topic')
    },

    // Volatility Analysis Topics
    { 
      id: 'volatility-modeling', 
      name: 'Volatility Modeling', 
      type: 'topic', 
      layer: 3,
      description: 'GARCH and neural models',
      color: nodeColors.category,
      size: getNodeSize(3, 'topic')
    },

    // Market Regimes Topics
    { 
      id: 'regime-detection', 
      name: 'Regime Detection', 
      type: 'topic', 
      layer: 3,
      description: 'Hidden Markov models',
      color: nodeColors.category,
      size: getNodeSize(3, 'topic')
    },

    // Alternative Data Topics
    { 
      id: 'sentiment-data', 
      name: 'Sentiment Data', 
      type: 'topic', 
      layer: 3,
      description: 'News and social media analysis',
      color: nodeColors.category,
      size: getNodeSize(3, 'topic')
    },
    { 
      id: 'geospatial-data', 
      name: 'Geospatial Data', 
      type: 'topic', 
      layer: 3,
      description: 'Satellite and location data',
      color: nodeColors.category,
      size: getNodeSize(3, 'topic')
    },

    // ML Pipeline Topics
    { 
      id: 'feature-engineering', 
      name: 'Feature Engineering', 
      type: 'topic', 
      layer: 3,
      description: 'Creating predictive features',
      color: nodeColors.category,
      size: getNodeSize(3, 'topic')
    },
    { 
      id: 'backtesting', 
      name: 'Backtesting', 
      type: 'topic', 
      layer: 3,
      description: 'Strategy validation',
      color: nodeColors.category,
      size: getNodeSize(3, 'topic')
    },

    // Compliance Topics
    { 
      id: 'model-explainability', 
      name: 'Model Explainability', 
      type: 'topic', 
      layer: 3,
      description: 'Interpretable AI',
      color: nodeColors.category,
      size: getNodeSize(3, 'topic')
    },

    // ============ Layer 4+ - Colored Nodes (Concepts, Companies, Resources) ============
    
    // Concepts for Statistical Arbitrage
    { 
      id: 'pairs-trading', 
      name: 'Pairs Trading', 
      type: 'concept', 
      layer: 4,
      description: 'Co-integration based trading',
      color: nodeColors.concept,
      size: getNodeSize(4, 'concept')
    },
    { 
      id: 'mean-reversion', 
      name: 'Mean Reversion', 
      type: 'concept', 
      layer: 4,
      description: 'Statistical mean reversion',
      color: nodeColors.concept,
      size: getNodeSize(4, 'concept')
    },

    // Concepts for Momentum
    { 
      id: 'cross-sectional-momentum', 
      name: 'Cross-Sectional Momentum', 
      type: 'concept', 
      layer: 4,
      description: 'Relative momentum across assets',
      color: nodeColors.concept,
      size: getNodeSize(4, 'concept')
    },
    { 
      id: 'time-series-momentum', 
      name: 'Time Series Momentum', 
      type: 'concept', 
      layer: 4,
      description: 'Trend following signals',
      color: nodeColors.concept,
      size: getNodeSize(4, 'concept')
    },

    // Concepts for HFT
    { 
      id: 'latency-arbitrage', 
      name: 'Latency Arbitrage', 
      type: 'concept', 
      layer: 4,
      description: 'Speed-based trading',
      color: nodeColors.concept,
      size: getNodeSize(4, 'concept')
    },

    // Concepts for Optimal Execution
    { 
      id: 'twap-vwap', 
      name: 'TWAP/VWAP', 
      type: 'concept', 
      layer: 4,
      description: 'Time and volume weighted execution',
      color: nodeColors.concept,
      size: getNodeSize(4, 'concept')
    },
    { 
      id: 'implementation-shortfall', 
      name: 'Implementation Shortfall', 
      type: 'concept', 
      layer: 4,
      description: 'Minimizing execution costs',
      color: nodeColors.concept,
      size: getNodeSize(4, 'concept')
    },

    // Concepts for Market Making
    { 
      id: 'inventory-management', 
      name: 'Inventory Management', 
      type: 'concept', 
      layer: 4,
      description: 'Position management for market makers',
      color: nodeColors.concept,
      size: getNodeSize(4, 'concept')
    },

    // Concepts for MPT
    { 
      id: 'efficient-frontier', 
      name: 'Efficient Frontier', 
      type: 'concept', 
      layer: 4,
      description: 'Risk-return optimization',
      color: nodeColors.concept,
      size: getNodeSize(4, 'concept')
    },
    { 
      id: 'black-litterman', 
      name: 'Black-Litterman', 
      type: 'concept', 
      layer: 4,
      description: 'Bayesian portfolio allocation',
      color: nodeColors.concept,
      size: getNodeSize(4, 'concept')
    },

    // Concepts for Factor Investing
    { 
      id: 'fama-french', 
      name: 'Fama-French Factors', 
      type: 'concept', 
      layer: 4,
      description: 'Multi-factor model',
      color: nodeColors.concept,
      size: getNodeSize(4, 'concept')
    },

    // Concepts for RL Portfolio
    { 
      id: 'policy-gradients', 
      name: 'Policy Gradients', 
      type: 'concept', 
      layer: 4,
      description: 'PPO and A3C for trading',
      color: nodeColors.concept,
      size: getNodeSize(4, 'concept')
    },

    // Concepts for VaR
    { 
      id: 'parametric-var', 
      name: 'Parametric VaR', 
      type: 'concept', 
      layer: 4,
      description: 'Analytical VaR calculation',
      color: nodeColors.concept,
      size: getNodeSize(4, 'concept')
    },
    { 
      id: 'monte-carlo-var', 
      name: 'Monte Carlo VaR', 
      type: 'concept', 
      layer: 4,
      description: 'Simulation-based VaR',
      color: nodeColors.concept,
      size: getNodeSize(4, 'concept')
    },

    // Concepts for Stress Testing
    { 
      id: 'scenario-analysis', 
      name: 'Scenario Analysis', 
      type: 'concept', 
      layer: 4,
      description: 'Historical scenario testing',
      color: nodeColors.concept,
      size: getNodeSize(4, 'concept')
    },

    // Concepts for Time Series
    { 
      id: 'lstm-forecasting', 
      name: 'LSTM Forecasting', 
      type: 'concept', 
      layer: 4,
      description: 'Recurrent neural networks for prediction',
      color: nodeColors.concept,
      size: getNodeSize(4, 'concept')
    },
    { 
      id: 'transformer-prediction', 
      name: 'Transformer Prediction', 
      type: 'concept', 
      layer: 4,
      description: 'Attention-based forecasting',
      color: nodeColors.concept,
      size: getNodeSize(4, 'concept')
    },

    // Concepts for Volatility
    { 
      id: 'garch-models', 
      name: 'GARCH Models', 
      type: 'concept', 
      layer: 4,
      description: 'Generalized autoregressive conditional heteroskedasticity',
      color: nodeColors.concept,
      size: getNodeSize(4, 'concept')
    },

    // Concepts for Regime Detection
    { 
      id: 'hmm-regimes', 
      name: 'Hidden Markov Models', 
      type: 'concept', 
      layer: 4,
      description: 'State-based regime detection',
      color: nodeColors.concept,
      size: getNodeSize(4, 'concept')
    },

    // Concepts for Sentiment
    { 
      id: 'nlp-sentiment', 
      name: 'NLP Sentiment Analysis', 
      type: 'concept', 
      layer: 4,
      description: 'Text-based sentiment extraction',
      color: nodeColors.concept,
      size: getNodeSize(4, 'concept')
    },

    // Concepts for Geospatial
    { 
      id: 'satellite-imagery', 
      name: 'Satellite Imagery', 
      type: 'concept', 
      layer: 4,
      description: 'Computer vision on satellite data',
      color: nodeColors.concept,
      size: getNodeSize(4, 'concept')
    },

    // Companies
    { 
      id: 'two-sigma', 
      name: 'Two Sigma', 
      type: 'company', 
      layer: 5,
      description: 'Quantitative hedge fund using ML',
      url: 'https://twosigma.com',
      color: nodeColors.company,
      size: getNodeSize(5, 'company')
    },
    { 
      id: 'renaissance', 
      name: 'Renaissance Technologies', 
      type: 'company', 
      layer: 5,
      description: 'Pioneering quant fund',
      url: '#',
      color: nodeColors.company,
      size: getNodeSize(5, 'company')
    },
    { 
      id: 'citadel', 
      name: 'Citadel Securities', 
      type: 'company', 
      layer: 5,
      description: 'Market making and HFT',
      url: 'https://citadelsecurities.com',
      color: nodeColors.company,
      size: getNodeSize(5, 'company')
    },
    { 
      id: 'aqr', 
      name: 'AQR Capital', 
      type: 'company', 
      layer: 5,
      description: 'Systematic investment strategies',
      url: 'https://aqr.com',
      color: nodeColors.company,
      size: getNodeSize(5, 'company')
    },
    { 
      id: 'de-shaw', 
      name: 'D.E. Shaw', 
      type: 'company', 
      layer: 5,
      description: 'Computational finance pioneer',
      url: 'https://deshaw.com',
      color: nodeColors.company,
      size: getNodeSize(5, 'company')
    },
    { 
      id: 'bloomberg', 
      name: 'Bloomberg', 
      type: 'company', 
      layer: 5,
      description: 'Financial data and analytics',
      url: 'https://bloomberg.com',
      color: nodeColors.company,
      size: getNodeSize(5, 'company')
    },
    { 
      id: 'jane-street', 
      name: 'Jane Street', 
      type: 'company', 
      layer: 5,
      description: 'Quantitative trading and market making',
      url: 'https://janestreet.com',
      color: nodeColors.company,
      size: getNodeSize(5, 'company')
    },
  ],

  links: [
    // ============ Layer 0 to Layer 1 ============
    { source: 'hedge-fund-ai', target: 'trading-systems', strength: 1 },
    { source: 'hedge-fund-ai', target: 'risk-portfolio', strength: 1 },
    { source: 'hedge-fund-ai', target: 'prediction-analytics', strength: 1 },
    { source: 'hedge-fund-ai', target: 'data-infrastructure', strength: 1 },

    // ============ Layer 1 to Layer 2 ============
    
    // Trading Systems
    { source: 'trading-systems', target: 'strategy-development', strength: 1 },
    { source: 'trading-systems', target: 'trade-execution', strength: 1 },
    { source: 'trading-systems', target: 'market-microstructure', strength: 1 },

    // Risk & Portfolio
    { source: 'risk-portfolio', target: 'portfolio-construction', strength: 1 },
    { source: 'risk-portfolio', target: 'risk-measurement', strength: 1 },
    { source: 'risk-portfolio', target: 'risk-mitigation', strength: 1 },

    // Prediction & Analytics
    { source: 'prediction-analytics', target: 'price-prediction', strength: 1 },
    { source: 'prediction-analytics', target: 'volatility-analysis', strength: 1 },
    { source: 'prediction-analytics', target: 'market-regimes', strength: 1 },

    // Data & Infrastructure
    { source: 'data-infrastructure', target: 'alternative-data', strength: 1 },
    { source: 'data-infrastructure', target: 'ml-pipeline', strength: 1 },
    { source: 'data-infrastructure', target: 'compliance-governance', strength: 1 },

    // ============ Layer 2 to Layer 3 ============
    
    // Strategy Development
    { source: 'strategy-development', target: 'statistical-arbitrage', strength: 1 },
    { source: 'strategy-development', target: 'momentum-strategies', strength: 1 },
    { source: 'strategy-development', target: 'high-frequency', strength: 1 },

    // Trade Execution
    { source: 'trade-execution', target: 'optimal-execution', strength: 1 },
    { source: 'trade-execution', target: 'smart-routing', strength: 1 },

    // Market Microstructure
    { source: 'market-microstructure', target: 'market-making', strength: 1 },

    // Portfolio Construction
    { source: 'portfolio-construction', target: 'modern-portfolio-theory', strength: 1 },
    { source: 'portfolio-construction', target: 'factor-investing', strength: 1 },
    { source: 'portfolio-construction', target: 'rl-portfolio', strength: 1 },

    // Risk Measurement
    { source: 'risk-measurement', target: 'value-at-risk', strength: 1 },
    { source: 'risk-measurement', target: 'stress-testing', strength: 1 },

    // Risk Mitigation
    { source: 'risk-mitigation', target: 'hedging-strategies', strength: 1 },

    // Price Prediction
    { source: 'price-prediction', target: 'time-series-forecasting', strength: 1 },

    // Volatility Analysis
    { source: 'volatility-analysis', target: 'volatility-modeling', strength: 1 },

    // Market Regimes
    { source: 'market-regimes', target: 'regime-detection', strength: 1 },

    // Alternative Data
    { source: 'alternative-data', target: 'sentiment-data', strength: 1 },
    { source: 'alternative-data', target: 'geospatial-data', strength: 1 },

    // ML Pipeline
    { source: 'ml-pipeline', target: 'feature-engineering', strength: 1 },
    { source: 'ml-pipeline', target: 'backtesting', strength: 1 },

    // Compliance
    { source: 'compliance-governance', target: 'model-explainability', strength: 1 },

    // ============ Layer 3 to Layer 4 (Colored Concepts) ============
    
    // Statistical Arbitrage to Concepts
    { source: 'statistical-arbitrage', target: 'pairs-trading', strength: 0.8 },
    { source: 'statistical-arbitrage', target: 'mean-reversion', strength: 0.8 },

    // Momentum to Concepts
    { source: 'momentum-strategies', target: 'cross-sectional-momentum', strength: 0.8 },
    { source: 'momentum-strategies', target: 'time-series-momentum', strength: 0.8 },

    // HFT to Concepts
    { source: 'high-frequency', target: 'latency-arbitrage', strength: 0.8 },

    // Optimal Execution to Concepts
    { source: 'optimal-execution', target: 'twap-vwap', strength: 0.8 },
    { source: 'optimal-execution', target: 'implementation-shortfall', strength: 0.8 },

    // Market Making to Concepts
    { source: 'market-making', target: 'inventory-management', strength: 0.8 },

    // MPT to Concepts
    { source: 'modern-portfolio-theory', target: 'efficient-frontier', strength: 0.8 },
    { source: 'modern-portfolio-theory', target: 'black-litterman', strength: 0.8 },

    // Factor Investing to Concepts
    { source: 'factor-investing', target: 'fama-french', strength: 0.8 },

    // RL Portfolio to Concepts
    { source: 'rl-portfolio', target: 'policy-gradients', strength: 0.8 },

    // VaR to Concepts
    { source: 'value-at-risk', target: 'parametric-var', strength: 0.8 },
    { source: 'value-at-risk', target: 'monte-carlo-var', strength: 0.8 },

    // Stress Testing to Concepts
    { source: 'stress-testing', target: 'scenario-analysis', strength: 0.8 },

    // Time Series to Concepts
    { source: 'time-series-forecasting', target: 'lstm-forecasting', strength: 0.8 },
    { source: 'time-series-forecasting', target: 'transformer-prediction', strength: 0.8 },

    // Volatility to Concepts
    { source: 'volatility-modeling', target: 'garch-models', strength: 0.8 },

    // Regime Detection to Concepts
    { source: 'regime-detection', target: 'hmm-regimes', strength: 0.8 },

    // Sentiment to Concepts
    { source: 'sentiment-data', target: 'nlp-sentiment', strength: 0.8 },

    // Geospatial to Concepts
    { source: 'geospatial-data', target: 'satellite-imagery', strength: 0.8 },

    // ============ Companies to Layer 3 Topics ============
    { source: 'statistical-arbitrage', target: 'two-sigma', strength: 0.6 },
    { source: 'statistical-arbitrage', target: 'renaissance', strength: 0.6 },
    { source: 'high-frequency', target: 'citadel', strength: 0.6 },
    { source: 'high-frequency', target: 'jane-street', strength: 0.6 },
    { source: 'factor-investing', target: 'aqr', strength: 0.6 },
    { source: 'rl-portfolio', target: 'de-shaw', strength: 0.6 },
    { source: 'alternative-data', target: 'bloomberg', strength: 0.6 },
    { source: 'market-making', target: 'citadel', strength: 0.6 },
    { source: 'market-making', target: 'jane-street', strength: 0.6 },
  ]
};
