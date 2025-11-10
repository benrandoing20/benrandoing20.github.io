import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ViewToggle from '@/components/ViewToggle';
import KnowledgeGraph3D from '@/components/KnowledgeGraph3D';
import IndustryTimeline from '@/components/IndustryTimeline';
import AIUsageTypes from '@/components/AIUsageTypes';
import PortfolioExamplePanel from '@/components/PortfolioExamplePanel';
import { hedgeFundAIGraphData } from '@/data/graphs/hedgeFundAIGraph';

const HedgeFundAI = () => {
  const [view, setView] = useState<'list' | 'graph'>('graph');
  
  const sections = [
    {
      title: "Hedge Fund Fundamentals",
      description: "You need a mental model of how funds make money and survive.",
      content: [
        {
          subtitle: "How Hedge Funds Make Money",
          description: "The absolute-return goal—making money in any market by going long what you think will rise and short what you think will fall, using leverage and derivatives to amplify edges while managing risk. Understanding the fund economics: management fees, performance fees (2-and-20), high-water marks, and how P&L flows from trades to investor returns."
        },
        {
          subtitle: "Long/Short Equity & Portfolio Construction",
          description: "The core hedge fund strategy—building portfolios with long positions in undervalued assets and short positions in overvalued ones, creating market-neutral or directional bets while managing gross and net exposure. How position sizing, sector balance, and factor exposures turn stock picks into portfolio-level alpha."
        },
        {
          subtitle: "AI in the Hedge Fund Stack",
          description: "Where machine learning actually adds value—alpha generation (prediction models), portfolio optimization (sizing & risk), execution (minimizing costs), and operations (compliance & monitoring). The full pipeline from data to dollars: signals → strategies → portfolios → execution → risk management → performance attribution."
        }
      ]
    },
    {
      title: "Execution & Market Microstructure",
      description: "Learn how orders fill, where costs come from, and why liquidity rules everything.",
      content: [
        {
          subtitle: "Optimal Execution",
          description: "Minimizing cost when executing large orders—using algorithms like TWAP, VWAP, or Almgren-Chriss optimal execution to split orders over time, balancing market impact against timing risk. TWAP, VWAP, and adaptive algorithms minimizing market impact and transaction costs using reinforcement learning."
        },
        {
          subtitle: "Smart Order Routing",
          description: "Choosing where and how to send orders—routing between lit exchanges, dark pools, and alternative venues based on liquidity, fees, queue position, and adverse selection to minimize costs and information leakage. Multi-venue execution, dark pool access, and intelligent order splitting to achieve best execution."
        },
        {
          subtitle: "Market Making",
          description: "Ultra-fast trading measured in microseconds—providing liquidity by constantly quoting bid-ask spreads, managing inventory risk, competing for queue position, and avoiding being picked off by informed traders. Automated liquidity provision, spread management, and inventory risk control using adaptive algorithms."
        }
      ]
    },
    {
      title: "Machine Learning Infrastructure",
      description: "Make your research believable: clean data, leak-proof testing, and production hygiene.",
      content: [
        {
          subtitle: "Feature Engineering",
          description: "Creating predictive features for trading models—engineering signals from order flow, microstructure, cross-asset relationships, volatility, and ensuring stationarity while preventing look-ahead bias and data leakage. Creating predictive features from raw market data—technical indicators, order flow metrics, and cross-asset signals."
        },
        {
          subtitle: "Backtesting Frameworks",
          description: "Simulating how strategies would have performed historically—building event-driven engines with realistic fill models, transaction costs, borrow fees, latency, and message loss to catch issues before live trading. Event-driven simulators, realistic fill models, and survivorship bias correction for robust strategy validation."
        },
        {
          subtitle: "Production Systems",
          description: "Running models in live trading—real-time data pipelines, model registries for versioning, monitoring for drift and errors, canary deployments, instant rollbacks, and feature stores for low-latency inference. Real-time data pipelines, low-latency inference, model versioning, and continuous learning in live trading environments."
        }
      ]
    },
    {
      title: "Market Prediction Models",
      description: "Build small, honest forecasters for returns, volatility, and regimes.",
      content: [
        {
          subtitle: "Price Forecasting",
          description: "Predicting future returns across different time horizons—using features from order flow, price patterns, and cross-asset relationships to forecast which stocks or assets will outperform. Deep learning architectures for multi-horizon price prediction combining technical indicators, fundamental data, and alternative data sources."
        },
        {
          subtitle: "Volatility Modeling",
          description: "Predicting how volatile markets will be—combining classical GARCH models with neural networks, informed by options prices, to forecast when markets will be calm vs turbulent. GARCH models, neural volatility estimation, and VIX prediction for options pricing and risk management."
        },
        {
          subtitle: "Regime Detection",
          description: "Identifying when market conditions fundamentally change—using hidden Markov models and clustering to detect shifts between risk-on/risk-off, high/low volatility, or liquid/illiquid regimes. Hidden Markov Models and clustering algorithms to identify market regimes—bull markets, bear markets, and high-volatility periods."
        }
      ]
    },
    {
      title: "Quantitative Trading Strategies",
      description: "Turn signals into money with explicit rules, constraints, and execution.",
      content: [
        {
          subtitle: "Statistical Arbitrage",
          description: "Finding pairs or groups of assets that move together and trading when they diverge—using cointegration and mean reversion to capture relative value opportunities that should converge back. Pairs trading, mean reversion, and cointegration strategies using machine learning to identify temporary mispricings in related securities."
        },
        {
          subtitle: "Momentum & Trend Following",
          description: "Riding price trends and momentum—buying assets that have been going up and shorting those going down, either across assets (cross-sectional) or following trends within each asset (time-series). Time-series momentum, cross-sectional momentum, and adaptive trend detection using LSTM networks and transformer models."
        },
        {
          subtitle: "High-Frequency Trading",
          description: "Ultra-fast trading measured in microseconds—providing liquidity by constantly quoting bid-ask spreads, managing inventory risk, competing for queue position, and avoiding being picked off by informed traders. Microsecond-level decision making with order book dynamics, latency optimization, and market microstructure analysis."
        }
      ]
    },
    {
      title: "Portfolio Optimization",
      description: "Decide how big each position should be and which risks you will (and won't) take.",
      content: [
        {
          subtitle: "Modern Portfolio Theory",
          description: "The classic mean-variance optimization framework for building efficient portfolios, enhanced with robust covariance estimation, constraints on concentration, and turnover budgets. Mean-variance optimization, efficient frontier, and Sharpe ratio maximization using quadratic programming."
        },
        {
          subtitle: "Black-Litterman Model",
          description: "A Bayesian framework that blends market equilibrium assumptions with your own views about expected returns, letting you tilt portfolios based on conviction while maintaining diversification. Bayesian approach to portfolio allocation combining equilibrium returns with investor views and confidence levels."
        },
        {
          subtitle: "Deep Reinforcement Learning",
          description: "Using reinforcement learning to learn portfolio allocation policies—training agents with policy gradients to make buy/sell/hold decisions that maximize risk-adjusted returns while respecting constraints. Policy gradient methods for dynamic portfolio allocation, rebalancing strategies, and transaction cost optimization."
        }
      ]
    },
    {
      title: "Risk Management",
      description: "Write the survival manual: limits, stresses, drawdown rules, tail defenses.",
      content: [
        {
          subtitle: "Value at Risk (VaR)",
          description: "Value at Risk and Expected Shortfall—quantifying how much you could lose with a given probability (VaR) and what the average loss would be beyond that threshold (ES), using parametric, historical, or Monte Carlo methods. Parametric, historical, and Monte Carlo VaR methods with neural network-based VaR for complex portfolios."
        },
        {
          subtitle: "Stress Testing",
          description: "Simulating extreme market scenarios—replaying historical crashes or creating hypothetical shocks to see how your portfolio would perform, including liquidity constraints and gap risk. Scenario analysis and adversarial machine learning to identify portfolio vulnerabilities under extreme market conditions."
        },
        {
          subtitle: "Factor Models",
          description: "Understanding portfolio exposures to systematic factors—decomposing risk into market beta, value, momentum, size, and other factors using models like Fama-French to understand where your returns come from. Fama-French, Carhart momentum, and custom factor models for risk decomposition and hedging strategies."
        }
      ]
    },
    {
      title: "Simulation Backtesting & Evaluation",
      description: "Prove it with leak-safe tests, realistic costs, and attribution.",
      content: [
        {
          subtitle: "Limit Order Book Simulation",
          description: "Simulating realistic order book dynamics—replaying historical limit order books, generating synthetic order flow with agent-based models, modeling queue position dynamics, and testing strategies under realistic market microstructure conditions."
        },
        {
          subtitle: "Transaction Costs & Slippage",
          description: "Accurately modeling the true cost of trading—measuring market impact, price slippage, bid-ask spreads, and footprint effects across different liquidity regimes to get realistic estimates of strategy profitability after costs."
        },
        {
          subtitle: "Evaluation & Walk-Forward",
          description: "Properly evaluating strategy performance—using purged k-fold cross-validation to avoid data leakage, combinatorial purged CV, walk-forward analysis with rolling windows, and detecting model decay from distribution drift."
        }
      ]
    },
    {
      title: "Alternative Data & Signals",
      description: "Only add alt-data once you can validate it rigorously.",
      content: [
        {
          subtitle: "Sentiment Analysis",
          description: "Extracting trading signals from text—analyzing news, earnings calls, SEC filings, and social media using NLP and LLMs to measure sentiment, detect events, and gauge market narratives before they're priced in. NLP on news, earnings calls, social media, and SEC filings to measure market sentiment and predict price movements."
        },
        {
          subtitle: "Satellite & Geospatial Data",
          description: "Using satellite imagery for trading signals—counting cars in retail parking lots, measuring oil storage levels, tracking ships and shipping routes, monitoring crop health—turning physical activity into nowcasting indicators. Retail traffic, agricultural yields, oil storage levels from satellite imagery using computer vision for alternative alpha generation."
        },
        {
          subtitle: "Web Scraping & Crawling",
          description: "Mining the web for trading alpha—tracking job postings as a proxy for company growth, analyzing reviews, monitoring supply chain signals, while managing data quality, survivorship bias, and ethical considerations. Job postings, product reviews, supply chain data—extracting leading indicators before they appear in financial statements."
        }
      ]
    },
    {
      title: "Regulatory & Compliance",
      description: "Operate like a real fund: controls, surveillance, structure, reporting.",
      content: [
        {
          subtitle: "Algorithmic Trading Regulations",
          description: "Meeting algorithmic trading regulations—implementing SEC Rule 15c3-5 market access controls, MiFID II requirements, pre-trade risk limits, kill switches, and maintaining audit trails for regulators. SEC Rule 15c3-5, MiFID II, and market access rules with kill switches, risk checks, and audit trail requirements."
        },
        {
          subtitle: "Model Explainability",
          description: "Explaining black-box trading models to regulators—using SHAP, LIME, and attention mechanisms to provide interpretability, documenting model risk tiers, and maintaining governance frameworks. SHAP values, LIME, and attention visualization for transparent AI decision-making and regulatory approval."
        },
        {
          subtitle: "Market Manipulation Detection",
          description: "Detecting market manipulation—identifying spoofing, layering, wash trading, and other abusive patterns using sequence models, graph analytics, and anomaly detection to maintain market integrity. Identifying spoofing, layering, and wash trading using pattern recognition and anomaly detection algorithms."
        }
      ]
    },
    {
      title: "Agentic AI",
      description: "Autonomous systems that reason, plan, and act across the entire investment workflow.",
      content: [
        {
          subtitle: "Research & Data Agents",
          description: "AI agents that autonomously query databases, synthesize information, generate reports, and answer complex questions using text-to-SQL, retrieval-augmented generation, and multi-step reasoning to accelerate research workflows."
        },
        {
          subtitle: "Trading & Execution Agents",
          description: "Autonomous trading systems that make real-time decisions about order placement, routing, and timing using reinforcement learning and planning algorithms to optimize execution and adapt to changing market conditions."
        },
        {
          subtitle: "Operations & Compliance Agents",
          description: "Agents that continuously monitor trading activity, generate regulatory reports, detect anomalies, and ensure compliance with rules through automated surveillance, natural language processing, and intelligent alerting systems."
        }
      ]
    }
  ];

  // Recent Industry Developments - Product Launches & Adoption
  const timelineEvents = [
    {
      date: "January 2025",
      year: 2025,
      title: "Bloomberg GPT Integration",
      description: "Bloomberg announces enterprise integration of their fine-tuned 50B parameter BloombergGPT model into Terminal, enabling natural language queries across decades of financial data and real-time market analytics.",
      category: 'technology' as const,
      url: "https://www.bloomberg.com/company/press/bloomberggpt-50-billion-parameter-llm-tuned-finance/"
    },
    {
      date: "December 2024",
      year: 2024,
      title: "Man Group Deploys AHL Dimension",
      description: "Man Group's AHL launches Dimension, a fully autonomous agent-based trading system using multi-agent reinforcement learning for systematic macro strategies—first institutional deployment at scale.",
      category: 'innovation' as const,
      url: "https://www.man.com/ahl-dimension"
    },
    {
      date: "November 2024",
      year: 2024,
      title: "Two Sigma Code Analysis Tool",
      description: "Two Sigma open-sources their internal LLM-powered code analysis tool that automatically detects backtesting errors, achieving 94% accuracy in identifying look-ahead bias and data leakage.",
      category: 'innovation' as const,
      url: "https://www.twosigma.com"
    }
  ];

  // Companies and Funds Market Map
  const companyMarketMap = [
    {
      name: "Quant Hedge Funds",
      companies: [
        { name: "Renaissance Technologies", url: "https://www.rentec.com" },
        { name: "Two Sigma", url: "https://www.twosigma.com" },
        { name: "Citadel", url: "https://www.citadel.com" },
        { name: "D.E. Shaw", url: "https://www.deshaw.com" },
        { name: "AQR Capital", url: "https://www.aqr.com" },
        { name: "Millennium Management", url: "https://www.mlp.com" },
        { name: "Point72", url: "https://www.point72.com" },
        { name: "Bridgewater Associates", url: "https://www.bridgewater.com" },
        { name: "WorldQuant", url: "https://www.worldquant.com" },
        { name: "PDT Partners", url: "https://www.pdtpartners.com" }
      ]
    },
    {
      name: "Market Data Providers",
      companies: [
        { name: "Bloomberg", url: "https://www.bloomberg.com/professional/solution/bloomberg-terminal/" },
        { name: "Refinitiv (LSEG)", url: "https://www.refinitiv.com" },
        { name: "FactSet", url: "https://www.factset.com" },
        { name: "S&P Global Market Intelligence", url: "https://www.spglobal.com/marketintelligence" },
        { name: "IEX Cloud", url: "https://iexcloud.io" },
        { name: "Polygon.io", url: "https://polygon.io" },
        { name: "Databento", url: "https://databento.com" },
        { name: "Alpaca Markets", url: "https://alpaca.markets" }
      ]
    },
    {
      name: "Alternative Data",
      companies: [
        { name: "Thinknum", url: "https://www.thinknum.com" },
        { name: "Orbital Insight", url: "https://orbitalinsight.com" },
        { name: "Quandl (Nasdaq)", url: "https://data.nasdaq.com" },
        { name: "YipitData", url: "https://www.yipitdata.com" },
        { name: "Earnest Research", url: "https://www.earnestresearch.com" },
        { name: "M Science", url: "https://mscience.com" },
        { name: "RS Metrics", url: "https://www.rsmetrics.com" },
        { name: "SafeGraph", url: "https://www.safegraph.com" },
        { name: "Dataminr", url: "https://www.dataminr.com" }
      ]
    },
    {
      name: "Trading Infrastructure",
      companies: [
        { name: "QuantConnect", url: "https://www.quantconnect.com" },
        { name: "Alpaca", url: "https://alpaca.markets" },
        { name: "TradeStation", url: "https://www.tradestation.com" },
        { name: "Interactive Brokers", url: "https://www.interactivebrokers.com" },
        { name: "FlexTrade", url: "https://flextrade.com" },
        { name: "Trading Technologies", url: "https://www.tradingtechnologies.com" },
        { name: "Lime Brokerage", url: "https://www.lime.co" },
        { name: "Hudson River Trading", url: "https://www.hudsonrivertrading.com" }
      ]
    },
    {
      name: "ML/AI Platforms",
      companies: [
        { name: "Databricks", url: "https://www.databricks.com" },
        { name: "H2O.ai", url: "https://h2o.ai" },
        { name: "DataRobot", url: "https://www.datarobot.com" },
        { name: "Domino Data Lab", url: "https://www.dominodatalab.com" },
        { name: "Tecton", url: "https://www.tecton.ai" },
        { name: "Weights & Biases", url: "https://wandb.ai" },
        { name: "Feast", url: "https://feast.dev" },
        { name: "MLflow", url: "https://mlflow.org" }
      ]
    },
    {
      name: "Risk & Analytics",
      companies: [
        { name: "Axioma (SimCorp)", url: "https://www.simcorp.com/en/solutions/axioma" },
        { name: "MSCI Barra", url: "https://www.msci.com/factor-models" },
        { name: "RiskMetrics", url: "https://www.msci.com/riskmetrics" },
        { name: "Numerix", url: "https://www.numerix.com" },
        { name: "SS&C Algorithmics", url: "https://www.algorithmics.com" },
        { name: "FINCAD", url: "https://fincad.com" },
        { name: "Murex", url: "https://www.murex.com" }
      ]
    },
    {
      name: "Backtesting & Research",
      companies: [
        { name: "QuantConnect", url: "https://www.quantconnect.com" },
        { name: "Quantopian (archived)", url: "https://github.com/quantopian" },
        { name: "Zipline", url: "https://github.com/quantopian/zipline" },
        { name: "Backtrader", url: "https://www.backtrader.com" },
        { name: "QuantLib", url: "https://www.quantlib.org" },
        { name: "Portfolio123", url: "https://www.portfolio123.com" },
        { name: "Quantopian's Alphalens", url: "https://github.com/quantopian/alphalens" }
      ]
    },
    {
      name: "Execution Management",
      companies: [
        { name: "Bloomberg AIM", url: "https://www.bloomberg.com/professional/product/execution-management-system/" },
        { name: "Charles River IMS", url: "https://www.crd.com" },
        { name: "Fidessa", url: "https://iongroup.com/markets/fidessa/" },
        { name: "Eze Software (SS&C)", url: "https://www.ssctech.com/products/eze-software-suite" },
        { name: "FlexTrade", url: "https://flextrade.com" },
        { name: "ITG (Virtu)", url: "https://www.virtu.com" },
        { name: "Clearpool", url: "https://clearpool.com" }
      ]
    },
    {
      name: "Sentiment & NLP",
      companies: [
        { name: "RavenPack", url: "https://www.ravenpack.com" },
        { name: "Accern", url: "https://accern.com" },
        { name: "Amenity Analytics", url: "https://www.amenityanalytics.com" },
        { name: "Sentifi (acquired)", url: "https://www.sentifi.com" },
        { name: "StockTwits", url: "https://stocktwits.com" },
        { name: "Social Market Analytics", url: "https://www.socialmarketanalytics.com" },
        { name: "Prattle Analytics", url: "https://www.prattle.co" }
      ]
    },
    {
      name: "HFT & Low-Latency",
      companies: [
        { name: "Jump Trading", url: "https://www.jumptrading.com" },
        { name: "Virtu Financial", url: "https://www.virtu.com" },
        { name: "Tower Research", url: "https://www.tower-research.com" },
        { name: "IMC Trading", url: "https://www.imc.com" },
        { name: "Jane Street", url: "https://www.janestreet.com" },
        { name: "DRW Trading", url: "https://drw.com" },
        { name: "Flow Traders", url: "https://www.flowtraders.com" },
        { name: "Optiver", url: "https://www.optiver.com" }
      ]
    }
  ];

  // AI Applications Market Map - Tech + Application Combos by Category
  const aiApplications = [
    // Retrieval-Augmented Generation (RAG) - Red shades
    { name: "RAG Historical Context Retrieval", description: "Use retrieval-augmented generation to find similar historical market conditions by embedding and retrieving analogous periods.", color: "#EF4444", category: "Retrieval-Augmented Generation (RAG)" },
    { name: "RAG Fact Verification", description: "Implement RAG to cross-check investment thesis claims against your entire database of filings and research documents.", color: "#DC2626", category: "Retrieval-Augmented Generation (RAG)" },
    { name: "Embedding Semantic Company Search", description: "Use embedding models to search for 'companies disrupting payments' by meaning rather than exact keyword matching.", color: "#B91C1C", category: "Retrieval-Augmented Generation (RAG)" },
    { name: "Embedding Alternative Data Fusion", description: "Use embeddings to combine web scraping, satellite imagery, and social media into unified vector representations for trading signals.", color: "#F87171", category: "Retrieval-Augmented Generation (RAG)" },
    
    // Prompt Engineering - Purple shades
    { name: "LLM Text-to-SQL for Portfolio Screening", description: "Use large language models to convert natural language queries like 'tech stocks with P/E < 15' into SQL that queries your financial database.", color: "#8B5CF6", category: "Prompt Engineering" },
    { name: "LLM Earnings Call Q&A", description: "Ask LLMs questions about earnings calls and get exact quotes with surrounding context from the transcript.", color: "#9333EA", category: "Prompt Engineering" },
    { name: "LLM Multi-Report Synthesis", description: "Use LLMs to read 50+ analyst reports and synthesize consensus views, contrarian positions, and key disagreements.", color: "#A855F7", category: "Prompt Engineering" },
    { name: "Prompt Engineering for Financial Analysis", description: "Use chain-of-thought prompting techniques to make LLMs break down complex investment questions into logical reasoning steps.", color: "#7C3AED", category: "Prompt Engineering" },
    { name: "LLM 10-K Reading Agent", description: "Deploy an LLM agent that reads entire 10-K filings and answers specific questions with exact citations from the document.", color: "#6D28D9", category: "Prompt Engineering" },
    
    // Agentic AI Systems - Orange shades
    { name: "Agent Autonomous Portfolio Rebalancing", description: "Deploy an autonomous agent that monitors your portfolio and decides when to rebalance based on risk targets without human intervention.", color: "#F59E0B", category: "Agentic AI Systems" },
    { name: "Multi-Agent Trading Coordination", description: "Run multiple specialized agents where one researches opportunities, another executes orders, and a third monitors risk—coordinating automatically.", color: "#D97706", category: "Agentic AI Systems" },
    { name: "Agent Web Scraping Automation", description: "Use an autonomous agent to continuously scrape competitor websites, job postings, and pricing data for alternative trading signals.", color: "#B45309", category: "Agentic AI Systems" },
    { name: "Agent SEC Filing Monitor", description: "Deploy an agent that watches all SEC filings in real-time and alerts on material changes or unusual language patterns.", color: "#FBBF24", category: "Agentic AI Systems" },
    
    // Generative AI Models - Blue shades
    { name: "LLM Code Generation for Trading Strategies", description: "Describe a trading strategy in plain English and have an LLM generate complete Python backtesting code with proper risk controls.", color: "#3B82F6", category: "Generative AI Models" },
    { name: "LLM SQL Generation for Data Queries", description: "Use LLMs to automatically generate complex SQL queries from natural language descriptions of what data you need.", color: "#2563EB", category: "Generative AI Models" },
    { name: "LLM Bug Detection in Backtests", description: "Have LLMs review backtesting code to automatically identify look-ahead bias, data leakage, and other common errors.", color: "#1D4ED8", category: "Generative AI Models" },
    { name: "GAN Synthetic Market Scenarios", description: "Use generative adversarial networks to create realistic market scenarios that never historically occurred for stress testing portfolios.", color: "#60A5FA", category: "Generative AI Models" },
    { name: "GAN Rare Event Augmentation", description: "Train GANs to synthesize more examples of rare events like flash crashes to improve model robustness.", color: "#93C5FD", category: "Generative AI Models" },
    
    // Vision Transformers - Green shades
    { name: "Vision Transformer Chart Analysis", description: "Use vision transformers to analyze stock chart images and detect technical patterns like head-and-shoulders or breakouts.", color: "#10B981", category: "Vision Transformers" },
    { name: "Vision Transformer Satellite Imagery", description: "Apply vision transformers to satellite images of parking lots to count cars for retail traffic estimation.", color: "#059669", category: "Vision Transformers" },
    { name: "Vision Transformer PDF Extraction", description: "Use vision transformers to extract tables and charts from complex PDF layouts that traditional parsers miss.", color: "#047857", category: "Vision Transformers" },
    { name: "Multimodal Chart + News Fusion", description: "Combine vision models analyzing chart patterns with NLP models analyzing news sentiment to generate unified trading signals.", color: "#34D399", category: "Vision Transformers" },
    { name: "Multimodal Satellite + Credit Card Data", description: "Fuse computer vision analysis of satellite parking lot images with credit card transaction data for retail sales nowcasting.", color: "#6EE7B7", category: "Vision Transformers" },
    
    // Model Fine-Tuning - Violet shades
    { name: "LoRA Fine-Tuned Financial LLM", description: "Use LoRA (Low-Rank Adaptation) to fine-tune large language models on 20 years of internal research for domain-specific understanding.", color: "#A855F7", category: "Model Fine-Tuning" },
    { name: "Domain-Specific BERT for Finance", description: "Fine-tune BERT models on financial documents to improve named entity recognition of companies, metrics, and events.", color: "#9333EA", category: "Model Fine-Tuning" },
    
    // Audio & Speech Transformers - Teal shades
    { name: "Transformer Live Earnings Call Transcription", description: "Apply transformers for real-time speech-to-text transcription of earnings calls combined with instant sentiment analysis.", color: "#14B8A6", category: "Audio & Speech Transformers" },
    { name: "Audio Transformer Voice Sentiment", description: "Use audio transformers to analyze CEO tone, confidence, and vocal patterns during earnings calls beyond just transcript text.", color: "#0D9488", category: "Audio & Speech Transformers" },
    { name: "Transformer Real-Time News Classification", description: "Use transformer models to classify breaking news (M&A, earnings, regulatory) and assess market impact in real-time.", color: "#0F766E", category: "Audio & Speech Transformers" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-32 pb-32 px-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-24">
            <Link 
              to="/resources" 
              className="inline-flex items-center text-sm font-light text-black/60 hover:text-black mb-12 transition-colors duration-300"
            >
              <span className="mr-2">←</span> Back to Resources
            </Link>
            
            <h1 className="text-5xl md:text-7xl font-extralight mb-8 tracking-tight">
              Hedge Fund AI
            </h1>
            <div className="w-24 h-px bg-black/20 mb-8"></div>
            <p className="text-xl font-light text-black/60 max-w-3xl mb-8">
              Hedge funds are investment firms built to generate absolute returns, making money in both rising and falling markets by combining long and short positions, leverage, derivatives, and disciplined risk control. They sit at the intersection of finance, technology, and strategy, constantly seeking inefficiencies others miss.
            </p>

            <p className="text-xl font-light text-black/60 max-w-3xl mb-8">
              In these resources, I give my take on the inner workings of hedge funds—from quantitative trading and market prediction models to portfolio construction, execution, and compliance. It’s a structured look at how the pieces actually fit together and how modern funds use data and AI to compete at the highest level.
            </p>
            
            <ViewToggle view={view} onViewChange={setView} />
          </div>

          {view === 'graph' ? (
            <div className="w-full" style={{ height: '800px' }}>
              <KnowledgeGraph3D data={hedgeFundAIGraphData} />
            </div>
          ) : (
            <div className="space-y-24">
            {/* High-level overview section */}
            <div className="mb-16">
              <h2 className="text-3xl font-light tracking-tight mb-3">
                Industry Overview
              </h2>
              <p className="text-base font-light text-black/60 leading-relaxed mb-16">
                Before diving into specific topics, explore how generative AI and modern machine learning are transforming hedge funds—from LLMs analyzing documents to agentic systems executing trades autonomously.
              </p>

              {/* Two overview sections with smaller titles */}
              <div className="space-y-16">
                <IndustryTimeline events={timelineEvents} />
                
                <AIUsageTypes 
                  applications={aiApplications}
                  title="AI Applications Market Map"
                  subtitle="How AI is being used across hedge funds"
                />
              </div>
            </div>

            {/* Divider before main content */}
            <div className="w-full h-px bg-black/10 my-16"></div>
            
            {/* Main topic sections */}
            <div className="mb-12">
              <h2 className="text-3xl font-light tracking-tight mb-3">
                Deep Dive Topics
              </h2>
              <p className="text-base font-light text-black/60 leading-relaxed">
                Comprehensive guides covering the technical details, strategies, and implementation approaches across all aspects of hedge fund AI.
              </p>
            </div>
            {sections.map((section, index) => (
              <div key={index}>
                <div className="mb-8">
                  <h3 className="text-xl font-light tracking-tight mb-2">
                    {section.title}
                  </h3>
                  <p className="text-sm font-light text-black/60 leading-relaxed">
                    {section.description}
                  </p>
                </div>
                
                {/* Horizontal Scroll Container */}
                <div className="relative">
                  <div className="overflow-x-auto pb-8 scrollbar-hide -mx-8 px-8">
                    <div className="flex gap-6 min-w-max">
                      {section.content.map((item, itemIndex) => (
                        <Link
                          key={itemIndex}
                          to={`/resources/hedge-fund-ai/${section.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}/${item.subtitle.toLowerCase().replace(/\s+/g, '-').replace(/[(),]/g, '').replace(/&/g, 'and').replace(/\//g, '-')}`}
                          state={{ title: item.subtitle }}
                          className="group w-80 flex-shrink-0 border border-black/10 hover:border-black/30 transition-all duration-300 bg-white cursor-pointer overflow-hidden"
                        >
                          {/* Image with hover overlay for description */}
                          <div className="relative w-full h-48 overflow-hidden border-b border-black/5 bg-black/90 group-hover:bg-black transition-colors duration-300">
                            {/* Sleek title display */}
                            <div className="absolute inset-0 flex items-center justify-center p-8">
                              <h4 className="text-2xl font-extralight text-white/90 text-center leading-tight tracking-tight">
                                {item.subtitle}
                              </h4>
                            </div>
                            
                            {/* Description overlay on hover */}
                            <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 overflow-y-auto">
                              <p className="text-xs font-light text-white/90 leading-relaxed">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                  
                  {/* Scroll Indicator */}
                  <div className="text-center mt-2">
                    <p className="text-xs font-light text-black/40 tracking-wide">
                      ← Scroll to explore →
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Divider */}
            <div className="w-full h-px bg-black/10 my-16"></div>
            
            {/* Portfolio Construction Example - After Deep Dives */}
            <div className="mb-16">
              <h2 className="text-3xl font-light tracking-tight mb-3">
                How It All Connects
              </h2>
              <p className="text-base font-light text-black/60 leading-relaxed mb-8">
                Now that you've seen the individual concepts, here's how they all work together in practice—from investment thesis to final portfolio positions.
              </p>
              
              <PortfolioExamplePanel />
            </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HedgeFundAI;
