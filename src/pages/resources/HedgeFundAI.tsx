import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ViewToggle from '@/components/ViewToggle';
import KnowledgeGraph3D from '@/components/KnowledgeGraph3D';
import { hedgeFundAIGraphData } from '@/data/graphs/hedgeFundAIGraph';

const HedgeFundAI = () => {
  const [view, setView] = useState<'list' | 'graph'>('graph');
  const sections = [
    {
      title: "Quantitative Trading Strategies",
      content: [
        {
          subtitle: "Statistical Arbitrage",
          description: "Pairs trading, mean reversion, and cointegration strategies. Using machine learning to identify temporary mispricings in related securities."
        },
        {
          subtitle: "Momentum & Trend Following",
          description: "Time-series momentum, cross-sectional momentum, and adaptive trend detection using LSTM networks and transformer models."
        },
        {
          subtitle: "High-Frequency Trading",
          description: "Microsecond-level decision making with order book dynamics, latency optimization, and market microstructure analysis."
        }
      ]
    },
    {
      title: "Market Prediction Models",
      content: [
        {
          subtitle: "Price Forecasting",
          description: "Deep learning architectures for multi-horizon price prediction. Combining technical indicators, fundamental data, and alternative data sources."
        },
        {
          subtitle: "Volatility Modeling",
          description: "GARCH models, neural volatility estimation, and VIX prediction for options pricing and risk management."
        },
        {
          subtitle: "Regime Detection",
          description: "Hidden Markov Models and clustering algorithms to identify market regimes—bull markets, bear markets, and high-volatility periods."
        }
      ]
    },
    {
      title: "Portfolio Optimization",
      content: [
        {
          subtitle: "Modern Portfolio Theory",
          description: "Mean-variance optimization, efficient frontier, and Sharpe ratio maximization using quadratic programming."
        },
        {
          subtitle: "Black-Litterman Model",
          description: "Bayesian approach to portfolio allocation combining equilibrium returns with investor views and confidence levels."
        },
        {
          subtitle: "Deep Reinforcement Learning",
          description: "Policy gradient methods for dynamic portfolio allocation, rebalancing strategies, and transaction cost optimization."
        }
      ]
    },
    {
      title: "Risk Management",
      content: [
        {
          subtitle: "Value at Risk (VaR)",
          description: "Parametric, historical, and Monte Carlo VaR methods. Neural network-based VaR for complex portfolios."
        },
        {
          subtitle: "Stress Testing",
          description: "Scenario analysis and adversarial machine learning to identify portfolio vulnerabilities under extreme market conditions."
        },
        {
          subtitle: "Factor Models",
          description: "Fama-French, Carhart momentum, and custom factor models for risk decomposition and hedging strategies."
        }
      ]
    },
    {
      title: "Alternative Data & Signals",
      content: [
        {
          subtitle: "Sentiment Analysis",
          description: "NLP on news, earnings calls, social media, and SEC filings. Measuring market sentiment and predicting price movements."
        },
        {
          subtitle: "Satellite & Geospatial Data",
          description: "Retail traffic, agricultural yields, oil storage levels from satellite imagery. Computer vision for alternative alpha generation."
        },
        {
          subtitle: "Web Scraping & Crawling",
          description: "Job postings, product reviews, supply chain data. Extracting leading indicators before they appear in financial statements."
        }
      ]
    },
    {
      title: "Execution & Order Routing",
      content: [
        {
          subtitle: "Optimal Execution",
          description: "TWAP, VWAP, and adaptive algorithms minimizing market impact and transaction costs using reinforcement learning."
        },
        {
          subtitle: "Smart Order Routing",
          description: "Multi-venue execution, dark pool access, and intelligent order splitting to achieve best execution."
        },
        {
          subtitle: "Market Making",
          description: "Automated liquidity provision, spread management, and inventory risk control using adaptive algorithms."
        }
      ]
    },
    {
      title: "Machine Learning Infrastructure",
      content: [
        {
          subtitle: "Feature Engineering",
          description: "Creating predictive features from raw market data—technical indicators, order flow metrics, and cross-asset signals."
        },
        {
          subtitle: "Backtesting Frameworks",
          description: "Event-driven simulators, realistic fill models, and survivorship bias correction for robust strategy validation."
        },
        {
          subtitle: "Production Systems",
          description: "Real-time data pipelines, low-latency inference, model versioning, and continuous learning in live trading environments."
        }
      ]
    },
    {
      title: "Regulatory & Compliance",
      content: [
        {
          subtitle: "Algorithmic Trading Regulations",
          description: "SEC Rule 15c3-5, MiFID II, and market access rules. Kill switches, risk checks, and audit trail requirements."
        },
        {
          subtitle: "Model Explainability",
          description: "SHAP values, LIME, and attention visualization for transparent AI decision-making and regulatory approval."
        },
        {
          subtitle: "Market Manipulation Detection",
          description: "Identifying spoofing, layering, and wash trading using pattern recognition and anomaly detection algorithms."
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
              Artificial intelligence revolutionizing quantitative finance—from algorithmic trading to portfolio management and risk optimization.
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
                <h2 className="text-3xl font-light mb-12 tracking-tight">
                  {section.title}
                </h2>
                <div className="space-y-10">
                  {section.content.map((item, itemIndex) => (
                    <Link 
                      key={itemIndex} 
                      to={`/resources/hedge-fund-ai/${section.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}/${item.subtitle.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '').replace(/&/g, 'and').replace(/\//g, '-')}`}
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
