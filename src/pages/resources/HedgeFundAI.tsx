import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ViewToggle from '@/components/ViewToggle';
import KnowledgeGraph3D from '@/components/KnowledgeGraph3D';
import { hedgeFundAIGraphData } from '@/data/graphs/hedgeFundAIGraph';

const HedgeFundAI = () => {
  const [view, setView] = useState<'list' | 'graph'>('graph');
  const [expandedSections, setExpandedSections] = useState<Set<number>>(new Set());
  
  const toggleSection = (index: number) => {
    setExpandedSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };
  
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
            <div className="space-y-20">
            {sections.map((section, index) => (
              <div key={index} className="border-l-2 border-black/5 pl-8">
                <button 
                  onClick={() => toggleSection(index)}
                  className="w-full flex items-center justify-between text-left mb-4 group hover:opacity-70 transition-opacity duration-300"
                >
                  <h2 className="text-3xl font-light tracking-tight">
                    {section.title}
                  </h2>
                  <span className="text-2xl font-light text-black/40 transition-transform duration-300" style={{ transform: expandedSections.has(index) ? 'rotate(90deg)' : 'rotate(0deg)' }}>
                    →
                  </span>
                </button>
                <p className="text-base font-light text-black/60 mb-12 leading-relaxed">
                  {section.description}
                </p>
                {expandedSections.has(index) && (
                  <div className="space-y-10">
                    {section.content.map((item, itemIndex) => (
                    <Link 
                      key={itemIndex} 
                      to={`/resources/hedge-fund-ai/${section.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}/${item.subtitle.toLowerCase().replace(/\s+/g, '-').replace(/[(),]/g, '').replace(/&/g, 'and').replace(/\//g, '-')}`}
                      state={{ title: item.subtitle }}
                      className="group block hover:bg-black/2 p-4 -m-4 rounded-lg transition-all duration-300"
                    >
                      <h3 className="text-xl font-light mb-3 group-hover:text-black transition-colors duration-300 flex items-center">
                        {item.subtitle}
                        <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                      </h3>
                      <p className="text-base font-light text-black/60 leading-relaxed">
                        {item.description}
                      </p>
                    </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HedgeFundAI;
