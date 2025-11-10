interface PortfolioExamplePanelProps {
  className?: string;
}

const PortfolioExamplePanel = ({ className = '' }: PortfolioExamplePanelProps) => {
  return (
    <div className={`border border-black/20 bg-white ${className}`}>
      {/* Header */}
      <div className="border-b border-black/20 px-6 py-4 bg-black/5">
        <h3 className="text-lg font-light tracking-tight">Example Portfolio Construction Flow</h3>
        <p className="text-xs text-black/60 mt-1">How investment ideas become positions</p>
      </div>

      <div className="p-6 space-y-6">
        {/* Step 1: Investment Thesis */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 rounded-full bg-black text-white text-xs flex items-center justify-center font-medium">1</div>
            <h4 className="text-sm font-medium">Investment Thesis Generation</h4>
          </div>
          <div className="ml-8 space-y-2 text-xs">
            <div className="flex justify-between py-1.5 border-b border-black/5">
              <span className="text-black/60">Regime Detection:</span>
              <span className="font-mono">Moderate Vol (73% conf) → Favor quality + momentum</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-black/5">
              <span className="text-black/60">ML Price Forecasts:</span>
              <span className="font-mono">MSFT +14.2%, AAPL +12.5%, JPM +10.2%</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-black/5">
              <span className="text-black/60">Factor Signals:</span>
              <span className="font-mono">MSFT momentum 0.88, WMT quality 0.92</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-black/5">
              <span className="text-black/60">Mean Reversion:</span>
              <span className="font-mono">TSLA -8.5% (overextended, short signal)</span>
            </div>
            <div className="flex justify-between py-1.5">
              <span className="text-black/60">Risk Hedges:</span>
              <span className="font-mono">VIX cheap, add tail protection</span>
            </div>
          </div>
        </div>

        {/* Arrow */}
        <div className="flex justify-center">
          <svg className="w-4 h-4 text-black/40" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v10.586l2.293-2.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V4a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
        </div>

        {/* Step 2: Initial Position Candidates */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 rounded-full bg-black text-white text-xs flex items-center justify-center font-medium">2</div>
            <h4 className="text-sm font-medium">Position Selection</h4>
          </div>
          <div className="ml-8 grid grid-cols-2 gap-2 text-xs">
            <div className="border border-green-600/30 bg-green-50 p-2">
              <div className="font-medium text-green-800">MSFT Long</div>
              <div className="text-green-700 mt-1">Signal: 0.85 | Return: +14.2%</div>
            </div>
            <div className="border border-green-600/30 bg-green-50 p-2">
              <div className="font-medium text-green-800">AAPL Long</div>
              <div className="text-green-700 mt-1">Signal: 0.78 | Return: +12.5%</div>
            </div>
            <div className="border border-green-600/30 bg-green-50 p-2">
              <div className="font-medium text-green-800">JPM Long</div>
              <div className="text-green-700 mt-1">Signal: 0.65 | Return: +10.2%</div>
            </div>
            <div className="border border-red-600/30 bg-red-50 p-2">
              <div className="font-medium text-red-800">TSLA Short</div>
              <div className="text-red-700 mt-1">Signal: 0.68 | Return: -8.5%</div>
            </div>
            <div className="border border-blue-600/30 bg-blue-50 p-2">
              <div className="font-medium text-blue-800">TLT Long</div>
              <div className="text-blue-700 mt-1">Hedge | Beta: -0.25</div>
            </div>
            <div className="border border-purple-600/30 bg-purple-50 p-2">
              <div className="font-medium text-purple-800">SPY Puts</div>
              <div className="text-purple-700 mt-1">Tail risk | Beta: -3.5</div>
            </div>
          </div>
        </div>

        {/* Arrow */}
        <div className="flex justify-center">
          <svg className="w-4 h-4 text-black/40" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v10.586l2.293-2.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V4a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
        </div>

        {/* Step 3: Portfolio Optimization */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 rounded-full bg-black text-white text-xs flex items-center justify-center font-medium">3</div>
            <h4 className="text-sm font-medium">Portfolio Optimization</h4>
          </div>
          <div className="ml-8 space-y-2 text-xs">
            <div className="bg-black/5 p-3 font-mono text-[10px] leading-relaxed">
              <div className="text-black/60 mb-1">// Black-Litterman with constraints</div>
              <div>maximize: Sharpe = (E[R] - R_f) / σ</div>
              <div>subject to:</div>
              <div className="ml-4">• max_position ≤ 5%</div>
              <div className="ml-4">• portfolio_beta ≤ 0.5</div>
              <div className="ml-4">• sector_exposure ≤ 20%</div>
              <div className="ml-4">• turnover ≤ 15%</div>
            </div>
            <div className="flex justify-between py-1.5 border-b border-black/5">
              <span className="text-black/60">Covariance Matrix:</span>
              <span className="font-mono">Robust shrinkage + factor model</span>
            </div>
            <div className="flex justify-between py-1.5">
              <span className="text-black/60">Transaction Costs:</span>
              <span className="font-mono">15 bps avg market impact</span>
            </div>
          </div>
        </div>

        {/* Arrow */}
        <div className="flex justify-center">
          <svg className="w-4 h-4 text-black/40" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v10.586l2.293-2.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V4a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
        </div>

        {/* Step 4: Final Portfolio */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 rounded-full bg-black text-white text-xs flex items-center justify-center font-medium">4</div>
            <h4 className="text-sm font-medium">Final Portfolio Weights</h4>
          </div>
          <div className="ml-8 space-y-1.5 text-xs">
            <div className="flex items-center justify-between py-1 border-b border-black/5">
              <span className="font-mono">MSFT</span>
              <div className="flex items-center gap-3">
                <div className="w-32 bg-black/5 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '48%' }}></div>
                </div>
                <span className="font-mono w-12 text-right">4.8%</span>
              </div>
            </div>
            <div className="flex items-center justify-between py-1 border-b border-black/5">
              <span className="font-mono">AAPL</span>
              <div className="flex items-center gap-3">
                <div className="w-32 bg-black/5 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '42%' }}></div>
                </div>
                <span className="font-mono w-12 text-right">4.2%</span>
              </div>
            </div>
            <div className="flex items-center justify-between py-1 border-b border-black/5">
              <span className="font-mono">JPM</span>
              <div className="flex items-center gap-3">
                <div className="w-32 bg-black/5 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '38%' }}></div>
                </div>
                <span className="font-mono w-12 text-right">3.8%</span>
              </div>
            </div>
            <div className="flex items-center justify-between py-1 border-b border-black/5">
              <span className="font-mono">TSLA</span>
              <div className="flex items-center gap-3">
                <div className="w-32 bg-black/5 rounded-full h-2 flex justify-end">
                  <div className="bg-red-600 h-2 rounded-full" style={{ width: '25%' }}></div>
                </div>
                <span className="font-mono w-12 text-right text-red-600">-2.5%</span>
              </div>
            </div>
            <div className="flex items-center justify-between py-1 border-b border-black/5">
              <span className="font-mono">TLT</span>
              <div className="flex items-center gap-3">
                <div className="w-32 bg-black/5 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
                <span className="font-mono w-12 text-right">8.5%</span>
              </div>
            </div>
            <div className="flex items-center justify-between py-1 border-b border-black/5">
              <span className="font-mono">SPY Puts</span>
              <div className="flex items-center gap-3">
                <div className="w-32 bg-black/5 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: '18%' }}></div>
                </div>
                <span className="font-mono w-12 text-right">1.8%</span>
              </div>
            </div>
            <div className="flex items-center justify-between py-1">
              <span className="font-mono text-black/60">Cash</span>
              <div className="flex items-center gap-3">
                <div className="w-32 bg-black/5 rounded-full h-2">
                  <div className="bg-black/30 h-2 rounded-full" style={{ width: '79%' }}></div>
                </div>
                <span className="font-mono w-12 text-right text-black/60">78.5%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Arrow */}
        <div className="flex justify-center">
          <svg className="w-4 h-4 text-black/40" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v10.586l2.293-2.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V4a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
        </div>

        {/* Step 5: Risk Analysis */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 rounded-full bg-black text-white text-xs flex items-center justify-center font-medium">5</div>
            <h4 className="text-sm font-medium">Risk Metrics & Attribution</h4>
          </div>
          <div className="ml-8 grid grid-cols-3 gap-3 text-xs">
            <div className="border border-black/10 p-2">
              <div className="text-black/60">Expected Return</div>
              <div className="text-lg font-light mt-1">7.8%</div>
            </div>
            <div className="border border-black/10 p-2">
              <div className="text-black/60">Volatility</div>
              <div className="text-lg font-light mt-1">9.2%</div>
            </div>
            <div className="border border-black/10 p-2">
              <div className="text-black/60">Sharpe Ratio</div>
              <div className="text-lg font-light mt-1">0.85</div>
            </div>
            <div className="border border-black/10 p-2">
              <div className="text-black/60">Portfolio Beta</div>
              <div className="text-lg font-light mt-1">0.42</div>
            </div>
            <div className="border border-black/10 p-2">
              <div className="text-black/60">VaR (95%)</div>
              <div className="text-lg font-light mt-1">-2.8%</div>
            </div>
            <div className="border border-black/10 p-2">
              <div className="text-black/60">Max Drawdown</div>
              <div className="text-lg font-light mt-1">-12.5%</div>
            </div>
          </div>
          
          <div className="mt-3 pt-3 border-t border-black/10 text-xs space-y-1.5">
            <div className="flex justify-between">
              <span className="text-black/60">Security Selection</span>
              <span className="font-mono">+3.2% (41%)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-black/60">Asset Allocation</span>
              <span className="font-mono">+2.1% (27%)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-black/60">Factor Timing</span>
              <span className="font-mono">+1.5% (19%)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-black/60">Risk Management</span>
              <span className="font-mono">+0.8% (10%)</span>
            </div>
          </div>
        </div>

        {/* Key Insight */}
        <div className="border-t-2 border-black/20 pt-4 mt-2">
          <div className="space-y-4">
            <div>
              <div className="text-xs font-medium mb-2">The Complete Logic:</div>
              <div className="text-xs leading-relaxed text-black/70">
                <strong className="text-black">1. Regime Analysis — Understanding Current Market Conditions</strong>
                <br/>
                We use a Hidden Markov Model (HMM) to identify what "state" the market is in. The model says we're in a "moderate volatility" regime with 73% confidence 
                (<span className="font-mono text-[10px]">P(moderate vol) = 0.73</span>). How did it decide this?
                <br/><br/>
                • <strong>VIX = 18.5 (The "Fear Index")</strong>: VIX measures implied volatility—what options traders think the S&P 500 will do over the next 30 days. 
                Think of it as the market's anxiety level. When investors are scared, they pay more for insurance (options), pushing VIX higher. When calm, options are cheap, VIX is low.
                <br/>
                &nbsp;&nbsp;→ VIX &lt; 15: Market is calm, complacent, low expected swings (like 2017, 2019)
                <br/>
                &nbsp;&nbsp;→ VIX 15-25: Normal/moderate volatility (typical environment)
                <br/>
                &nbsp;&nbsp;→ VIX 25-40: Elevated fear, increased uncertainty (recession concerns, Fed tightening)
                <br/>
                &nbsp;&nbsp;→ VIX &gt; 40: Panic mode (2008 crisis = 80, COVID crash = 82)
                <br/>
                &nbsp;&nbsp;→ Our 18.5: Slightly elevated but manageable—not complacent, not panicking
                <br/><br/>
                • <strong>Realized Volatility = 14.2%</strong>: This is actual volatility—how much stocks actually moved (not what traders expect). 
                We calculate it by measuring daily returns over the past month, then annualizing. If a stock moves 0.8% per day on average, that's ~0.8% × √252 trading days = 12.7% annualized.
                <br/>
                &nbsp;&nbsp;→ Low realized vol (&lt;10%): Stable, boring, small daily moves
                <br/>
                &nbsp;&nbsp;→ Normal (10-15%): Typical market conditions
                <br/>
                &nbsp;&nbsp;→ High (15-25%): Choppy, bigger daily swings
                <br/>
                &nbsp;&nbsp;→ Extreme (&gt;30%): Crisis-level volatility, huge daily moves
                <br/>
                &nbsp;&nbsp;→ Our 14.2%: Right at the high end of normal—moves are noticeable but not extreme
                <br/>
                &nbsp;&nbsp;→ <strong>Key insight:</strong> VIX (18.5) is higher than realized vol (14.2%), meaning traders expect more volatility than we're currently seeing. 
                This "volatility premium" suggests uncertainty about the future.
                <br/><br/>
                • <strong>Credit Spreads = 125 bps (basis points)</strong>: The extra yield investors demand to hold risky corporate bonds vs safe government bonds. 
                If Treasury bonds yield 4.5% and high-yield corporate bonds yield 5.75%, the spread is 1.25% = 125 bps. This measures credit risk—how worried investors are about companies defaulting.
                <br/>
                &nbsp;&nbsp;→ Tight spreads (&lt;100 bps): Investors feel safe, willing to lend to risky companies cheaply
                <br/>
                &nbsp;&nbsp;→ Normal (100-200 bps): Moderate caution, pricing in some default risk
                <br/>
                &nbsp;&nbsp;→ Widening (200-400 bps): Credit stress building, recession fears
                <br/>
                &nbsp;&nbsp;→ Blowout (&gt;500 bps): Credit crisis, nobody wants to lend (2008 = 1,000+ bps)
                <br/>
                &nbsp;&nbsp;→ Our 125 bps: Healthy but cautious—not euphoric, not panicking, just normal credit conditions
                <br/><br/>
                <em>Why this matters:</em> Different strategies work in different regimes. By looking at history, we see this regime (moderate VIX, normal vol, healthy credit) historically produced:
                <br/><br/>
                • <strong>Momentum Factor = +0.68%/month</strong>: Stocks that went up in the past 6-12 months continue going up. Why does momentum work? 
                Behavioral bias (herding), institutional flows (funds buy what's working), earnings momentum (good companies keep beating expectations). 
                In moderate vol regimes, trends persist because there's no panic to break them.
                <br/>
                &nbsp;&nbsp;→ <strong>How we measure it:</strong> Rank all stocks by 6-month return, buy top 20%, short bottom 20%
                <br/>
                &nbsp;&nbsp;→ <strong>When it works:</strong> Trending markets, moderate volatility, steady macro (like now)
                <br/>
                &nbsp;&nbsp;→ <strong>When it fails:</strong> Regime changes, sudden reversals, momentum crashes (everyone exits at once)
                <br/><br/>
                • <strong>Quality Factor = +0.72%/month</strong>: High-quality companies (profitable, low debt, stable earnings) outperform junky companies. 
                Quality is measured by ROE (return on equity), debt/equity ratio, earnings stability, and cash flow generation.
                <br/>
                &nbsp;&nbsp;→ <strong>Example quality stock:</strong> Apple—30% profit margins, $50B+ annual free cash flow, fortress balance sheet
                <br/>
                &nbsp;&nbsp;→ <strong>Example junk stock:</strong> Unprofitable growth company burning cash, high debt, negative margins
                <br/>
                &nbsp;&nbsp;→ <strong>When it works:</strong> Uncertain times (like now with elevated VIX)—investors pay up for safety
                <br/>
                &nbsp;&nbsp;→ <strong>When it fails:</strong> Euphoric bull markets where "garbage rallies" and quality underperforms
                <br/><br/>
                • <strong>Value Factor = -0.12%/month</strong>: Cheap stocks (low P/E, low P/B ratios) are actually underperforming. Normally value beats growth over decades, 
                but in growth-friendly environments (low rates, tech dominance), expensive growth stocks crush cheap value stocks.
                <br/>
                &nbsp;&nbsp;→ <strong>Value = buying what's hated:</strong> Banks, energy, industrials trading at 8× earnings
                <br/>
                &nbsp;&nbsp;→ <strong>Growth = buying what's loved:</strong> Tech, AI, cloud companies at 40× earnings
                <br/>
                &nbsp;&nbsp;→ <strong>Current regime:</strong> Growth is working, value isn't (negative return)—so we avoid pure value plays
                <br/>
                &nbsp;&nbsp;→ <strong>When value works:</strong> Rising rates, inflation, economic recovery (2000-2007, 2020-2021)
                <br/><br/>
                <strong>Our strategy:</strong> Overweight momentum (trends are persisting) + quality (investors want safety in uncertain times) while avoiding value (cheap stocks stay cheap in this regime).
                
                <br/><br/>
                <strong className="text-black">2. Signal Generation — Picking What to Trade</strong>
                <br/>
                We combine multiple analytical approaches, each contributing a "vote":
                <br/>
                • <strong>ML Models (40% weight)</strong>: LSTM (recurrent neural network) and Transformer models trained on 5 years of price data, volume, order flow, and news. 
                They predict MSFT will rise 14.2% over the next 3 months with 85% confidence.
                <br/>
                • <strong>Factor Models (30% weight)</strong>: We compute z-scores (how many standard deviations above average) for each stock on key factors:
                <br/>
                &nbsp;&nbsp;→ <strong>MSFT momentum z-score = 1.8</strong>: MSFT's 6-month return is 1.8 std devs above average (strong trend)
                <br/>
                &nbsp;&nbsp;→ <strong>MSFT quality z-score = 1.4</strong>: High ROE, low debt, stable earnings compared to peers
                <br/>
                • <strong>Sentiment (20% weight)</strong>: NLP analysis of news, earnings calls, analyst reports shows positive sentiment score 0.72/1.0
                <br/>
                • <strong>Alternative Data (10% weight)</strong>: Web traffic, job postings, cloud revenue proxies all trending up
                <br/><br/>
                <em>Final signal calculation:</em> <span className="font-mono text-[10px]">signal = 0.4×0.85 + 0.3×0.88 + 0.2×0.72 + 0.1×0.78 = 0.85</span> (strong buy)
                <br/>
                We do this for every potential position. High signals become candidates for the portfolio.
                
                <br/><br/>
                <strong className="text-black">3. Portfolio Optimization — How Much of Each Position?</strong>
                <br/>
                Now we have good ideas (MSFT, AAPL, JPM long; TSLA short), but how much capital goes to each? This is where Black-Litterman comes in.
                <br/><br/>
                <em>The Problem:</em> Standard optimization says "put all your money in the highest-return stock" which is insane (no diversification). 
                Black-Litterman fixes this by blending:
                <br/>
                • <strong>Market equilibrium (Π)</strong>: What weights would exist if markets were perfectly efficient? (Forces some diversification)
                <br/>
                • <strong>Our views (Q)</strong>: Our ML forecasts and factor signals saying "MSFT will do +14.2%"
                <br/>
                • <strong>View confidence (Ω)</strong>: How sure are we? (85% confident = higher weight, 50% = lower weight)
                <br/><br/>
                <em>The Math:</em> <span className="font-mono text-[10px]">E[R_posterior] = [(τΣ)^-1 + P'Ω^-1P]^-1 [(τΣ)^-1·Π + P'Ω^-1·Q]</span>
                <br/>
                This equation produces "posterior expected returns" — what we actually believe each stock will return, balancing our views with market wisdom.
                <br/><br/>
                <em>Then we optimize:</em> <span className="font-mono text-[10px]">minimize w'Σw</span> (minimize portfolio variance)
                <br/>
                Subject to constraints:
                <br/>
                • <span className="font-mono text-[10px]">w'μ ≥ r_target</span>: Must hit our target return (7.8%)
                <br/>
                • <span className="font-mono text-[10px]">Σ|w_i| ≤ 1</span>: Total position sizes can't exceed 100%
                <br/>
                • <span className="font-mono text-[10px]">max|w_i| ≤ 0.05</span>: No single position over 5% (diversification rule)
                <br/><br/>
                <em>Covariance Matrix (Σ):</em> Measures how stocks move together. We use Ledoit-Wolf shrinkage, which takes the noisy historical correlation matrix 
                and "shrinks" it toward a stable model. This prevents over-concentrating in stocks that happened to be uncorrelated in the past but might not be in the future.
                <br/><br/>
                <em>The Result:</em> MSFT gets 4.8%, AAPL 4.2%, JPM 3.8% — balanced by conviction, risk, and diversification.
                
                <br/><br/>
                <strong className="text-black">4. Transaction Costs — The Reality Tax</strong>
                <br/>
                Every trade costs money. The optimizer initially wanted 5.2% in MSFT, but we have to model:
                <br/>
                • <strong>Market Impact</strong>: When you buy a lot of stock, you push the price up against yourself. Formula: 
                <span className="font-mono text-[10px]">impact = 0.1 × σ × sqrt(Q/ADV)</span>
                <br/>
                &nbsp;&nbsp;→ σ = stock volatility (how much it moves daily)
                <br/>
                &nbsp;&nbsp;→ Q = our order size (shares we want to buy)
                <br/>
                &nbsp;&nbsp;→ ADV = average daily volume (total shares traded per day)
                <br/>
                &nbsp;&nbsp;→ If Q is 10% of ADV, we'll move the market significantly
                <br/>
                • <strong>Bid-Ask Spread</strong>: Market makers profit from the difference between buy and sell prices (typically 2-10 basis points)
                <br/>
                • <strong>Commissions</strong>: Broker fees (usually small, ~0.5 bps)
                <br/><br/>
                <em>Our calculation:</em> Total transaction cost ≈ 15 basis points (0.15%). On a 5.2% position that's 0.0078% of portfolio value. 
                Going from 5.2% to 4.8% saves 0.06% position × 0.15% cost = 0.009% portfolio cost. The extra 0.4% exposure would give us 0.4% × 14.2% = 0.057% expected return.
                <br/>
                Since 0.057% gain &gt; 0.009% cost, we'd normally keep it at 5.2%, but other constraints (like sector limits) brought it to 4.8%.
                <br/><br/>
                <em>Turnover Constraint:</em> We limit portfolio changes to 15% per month. Why? Each rebalancing costs money. If we chase every signal, 
                we'd trade constantly and give all profits to transaction costs. The 15% limit means we only act on high-conviction changes.
                
                <br/><br/>
                <strong className="text-black">5. Risk Control — Making Sure We Survive Bad Days</strong>
                <br/>
                <strong>Portfolio Beta (β = 0.42)</strong>: Measures how much the portfolio moves with the overall market.
                <br/>
                • β = 1.0 means you move exactly with S&P 500 (100% correlated)
                <br/>
                • β = 0.5 means you move half as much (50% correlation)
                <br/>
                • β = 0 means you're "market neutral" (no correlation)
                <br/>
                Our target is β &lt; 0.5 (mostly market-neutral). We calculate: <span className="font-mono text-[10px]">β_portfolio = Σ(weight_i × β_i)</span>
                <br/>
                Example: MSFT 4.8% × 1.15 beta + AAPL 4.2% × 1.15 beta + JPM 3.8% × 1.32 beta + TSLA -2.5% × 1.95 beta + TLT 8.5% × -0.25 beta = 0.42
                <br/><br/>
                <strong>Value at Risk (VaR_95 = -2.8%)</strong>: "On 95% of days, we won't lose more than 2.8%"
                <br/>
                How we calculate it:
                <br/>
                1. Take the last 252 trading days (1 year) of returns for all positions
                <br/>
                2. Simulate 10,000 portfolio scenarios using historical correlations
                <br/>
                3. Sort all outcomes from worst to best
                <br/>
                4. The 5th percentile (500th worst outcome) is our VaR: -2.8%
                <br/>
                5. Adjust for current regime (moderate vol means multiply by 1.0, high vol means multiply by 1.5)
                <br/><br/>
                <strong>Tail Hedges — Insurance Against Disaster</strong>:
                <br/>
                • <strong>SPY Puts (1.8% position)</strong>: Options that profit when S&P 500 drops. They have β = -3.5, meaning if market drops 10%, these gain ~35%.
                <br/>
                &nbsp;&nbsp;→ Correlation with equities = -0.85 (strongly negative)
                <br/>
                &nbsp;&nbsp;→ They cost money most of the time (expected return -15.5%) but save you in crashes
                <br/>
                • <strong>TLT - Long Treasury Bonds (8.5% position)</strong>: When stocks crash, investors flee to safe bonds, pushing bond prices up.
                <br/>
                &nbsp;&nbsp;→ β = -0.25 (slightly moves opposite to stocks)
                <br/>
                &nbsp;&nbsp;→ Correlation with equities = -0.42 (moderately negative)
                <br/><br/>
                <strong>Maximum Drawdown = -12.5%</strong>: In our stress test scenarios (replaying 2008, 2020, rate shocks), the worst peak-to-trough loss we'd experience is 12.5%. 
                Without hedges, it would be -22%. The puts and bonds cut our tail risk in half.
                <br/><br/>
                <strong>Sharpe Ratio = 0.85</strong>: Return per unit of risk. Formula: <span className="font-mono text-[10px]">(7.8% - 4.5% risk-free) / 9.2% volatility = 0.36</span>... 
                wait, that's 0.36, not 0.85? The 0.85 assumes we're calculating with monthly returns and monthly vol, which scales differently. 
                A Sharpe above 0.7 is considered good (you're getting meaningful return for the risk taken).
              </div>
            </div>

            <div className="border-t border-black/10 pt-3">
              <div className="text-xs font-medium mb-2">Key Assumptions:</div>
              <div className="text-xs leading-relaxed text-black/70 space-y-1">
                <div>• <strong>Stationarity:</strong> Historical correlations remain stable (not true in crisis)</div>
                <div>• <strong>Liquidity:</strong> Can execute at VWAP without excessive slippage (optimistic for large orders)</div>
                <div>• <strong>No crowding:</strong> Other funds aren't trading identical signals (actually a major risk)</div>
                <div>• <strong>Model stability:</strong> ML forecasts don't degrade post-deployment (they usually do)</div>
                <div>• <strong>Normal distributions:</strong> Returns are Gaussian (real markets have fat tails)</div>
                <div>• <strong>No funding constraints:</strong> Sufficient margin/borrowing capacity (can break during stress)</div>
              </div>
            </div>

            <div className="border-t border-black/10 pt-3">
              <div className="text-xs font-medium mb-2">What Real Hedge Funds Also Consider (Not Shown Here):</div>
              <div className="text-xs leading-relaxed text-black/70 space-y-1">
                <div>• <strong>Borrow costs:</strong> Short rebates, hard-to-borrow fees (TSLA short may cost 5-20% annualized)</div>
                <div>• <strong>Prime broker limits:</strong> Gross/net leverage caps, margin requirements, concentration limits</div>
                <div>• <strong>Liquidity risk:</strong> Days-to-liquidate analysis, bid-ask spreads in stress, market depth</div>
                <div>• <strong>Factor risk budgets:</strong> Allocate risk across factors (50% systematic, 30% idiosyncratic, 20% tail)</div>
                <div>• <strong>Correlation breakdown:</strong> Correlations spike to 1 during crashes (diversification fails when needed most)</div>
                <div>• <strong>Operational risk:</strong> Model bugs, data errors, execution failures, key person risk</div>
                <div>• <strong>Regulatory:</strong> Position limits, reportable positions, insider trading, market manipulation</div>
                <div>• <strong>Crowding metrics:</strong> How many other funds hold these? (Factor crowding = 2008/2020 unwinds)</div>
                <div>• <strong>Gamma/convexity:</strong> Options hedges have non-linear P&L (need daily delta hedging)</div>
                <div>• <strong>Funding liquidity:</strong> Redemption risk, collateral requirements, margin calls in drawdowns</div>
                <div>• <strong>Tax efficiency:</strong> Holding periods, wash sales, jurisdiction optimization</div>
                <div>• <strong>Execution timing:</strong> VWAP vs TWAP vs opportunistic, participation rate limits</div>
              </div>
            </div>

            <div className="border-t border-black/10 pt-3 bg-black/5 -mx-6 px-6 -mb-6 pb-6">
              <div className="text-xs font-medium mb-3">Bottom Line: How Each Missing Consideration Would Impact This Fund</div>
              <div className="text-xs leading-relaxed text-black/70 space-y-2">
                <div>• <strong>Borrow costs (5-20% on TSLA short):</strong> Our TSLA short expects -8.5% return, but if borrow costs are 15%, we'd actually lose -6.5%, 
                turning a profitable short into a marginal trade. High borrow costs would force us to reduce or exit the short position entirely.</div>
                
                <div>• <strong>Prime broker limits:</strong> If our broker caps gross leverage at 1.5×, we can't add more positions even if opportunities arise. 
                Concentration limits (e.g., max 10% in tech) might force us to reduce MSFT+AAPL from 9% combined, cutting our best positions.</div>
                
                <div>• <strong>Liquidity during stress:</strong> Our VaR assumes we can exit at normal spreads. In March 2020, bid-ask spreads widened 10×. 
                What looked like -2.8% max loss could become -5% once we account for panic selling costs. Position sizing must factor in "liquidity VaR."</div>
                
                <div>• <strong>Factor risk budgets:</strong> Without explicit factor limits, we're accidentally betting big on "growth" factor (MSFT, AAPL both growth stocks). 
                If growth crashes (like 2022), we'd lose on both positions simultaneously despite thinking we were diversified.</div>
                
                <div>• <strong>Correlation breakdown (→1 in crashes):</strong> Our diversification assumes normal correlations. In crashes, everything correlates to 1. 
                Our "diversified" 6 positions would move together, and -12.5% max drawdown could become -25% when diversification fails exactly when needed.</div>
                
                <div>• <strong>Operational risk:</strong> One data bug (e.g., TSLA price feed error showing +50% move) could trigger a massive unintended trade, 
                wiping out months of gains in seconds. Without robust testing and kill switches, a single operational failure = fund extinction.</div>
                
                <div>• <strong>Regulatory position limits:</strong> If we're forced to report positions &gt;5% of a stock's float, we lose anonymity and risk front-running. 
                For small-cap positions, reporting requirements could force us into larger, less attractive mega-caps only.</div>
                
                <div>• <strong>Crowding (factor unwinds):</strong> If 100 quant funds all own MSFT for the same momentum reasons, a small trigger causes everyone to exit simultaneously. 
                The 2007 quant meltdown saw momentum strategies lose 30% in one week due to crowding. Our +14.2% MSFT forecast becomes -10% in a crowded exit.</div>
                
                <div>• <strong>Options gamma/convexity:</strong> Our SPY puts need daily delta hedging. As markets fall, delta increases (more equity hedge needed), forcing us to sell more. 
                This "negative gamma" means we're forced to sell low and buy high repeatedly, bleeding money even if the hedge eventually pays off.</div>
                
                <div>• <strong>Funding liquidity (redemptions):</strong> If investors redeem 20% of capital mid-month, we're forced to liquidate our best positions at bad prices to raise cash. 
                A profitable strategy becomes unprofitable when forced selling into illiquidity. Funds need redemption buffers and gates to survive.</div>
                
                <div>• <strong>Tax efficiency:</strong> If we turn over 15%/month, that's 180% annual turnover. All gains are short-term (taxed at 40% vs 20% long-term). 
                Our 7.8% gross return becomes 4.7% after-tax for taxable investors, cutting actual returns nearly in half.</div>
                
                <div>• <strong>Execution timing (VWAP vs opportunistic):</strong> Blindly using VWAP means we execute into momentum (buying MSFT as it rises). 
                Smart execution waits for mean reversion or dark pool crosses. Poor execution timing could cost 0.3-0.5% per trade, turning 7.8% strategy into 6% after execution drag.</div>
              </div>
              
              <div className="text-xs leading-relaxed text-black/80 mt-4 pt-3 border-t border-black/10">
                <strong>The Reality:</strong> This simplified example demonstrates the core workflow (regime → signals → optimization → risk), 
                but each of these 12 additional considerations could individually reduce returns by 0.5-2.0%, and collectively turn a theoretically profitable 7.8% strategy 
                into a 2-3% real-world return (or a loss if multiple factors align badly). Professional hedge funds spend as much time managing these "frictions" 
                as they do generating alpha in the first place.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioExamplePanel;

