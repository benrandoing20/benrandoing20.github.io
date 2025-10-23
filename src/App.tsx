
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import ProjectDetail from "./components/ProjectDetail";
import ExplorationDetail from "./components/ExplorationDetail";
import ThoughtDetail from "./components/ThoughtDetail";
import BucketList from "./pages/BucketList";
import Consulting from "./pages/Consulting";
import Resources from "./pages/Resources";
import AppliedAI from "./pages/resources/AppliedAI";
import DigitalBiology from "./pages/resources/DigitalBiology";
import DigitalDevices from "./pages/resources/DigitalDevices";
import DigitalHealth from "./pages/resources/DigitalHealth";
import HedgeFundAI from "./pages/resources/HedgeFundAI";
import NextGenerationSequencing from "./pages/resources/digital-biology/NextGenerationSequencing";
import StructurePrediction from "./pages/resources/digital-biology/StructurePrediction";
import HowHedgeFundsMakeMoney from "./pages/resources/hedge-fund-ai/HowHedgeFundsMakeMoney";
import LongShortEquityAndPortfolioConstruction from "./pages/resources/hedge-fund-ai/LongShortEquityAndPortfolioConstruction";
import AIInTheHedgeFundStack from "./pages/resources/hedge-fund-ai/AIInTheHedgeFundStack";
import OptimalExecution from "./pages/resources/hedge-fund-ai/OptimalExecution";
import SmartOrderRouting from "./pages/resources/hedge-fund-ai/SmartOrderRouting";
import MarketMaking from "./pages/resources/hedge-fund-ai/MarketMaking";
import FeatureEngineering from "./pages/resources/hedge-fund-ai/FeatureEngineering";
import BacktestingFrameworks from "./pages/resources/hedge-fund-ai/BacktestingFrameworks";
import ProductionSystems from "./pages/resources/hedge-fund-ai/ProductionSystems";
import PriceForecasting from "./pages/resources/hedge-fund-ai/PriceForecasting";
import VolatilityModeling from "./pages/resources/hedge-fund-ai/VolatilityModeling";
import RegimeDetection from "./pages/resources/hedge-fund-ai/RegimeDetection";
import StatisticalArbitrage from "./pages/resources/hedge-fund-ai/StatisticalArbitrage";
import MomentumAndTrendFollowing from "./pages/resources/hedge-fund-ai/MomentumAndTrendFollowing";
import HighFrequencyTrading from "./pages/resources/hedge-fund-ai/HighFrequencyTrading";
import ModernPortfolioTheory from "./pages/resources/hedge-fund-ai/ModernPortfolioTheory";
import BlackLittermanModel from "./pages/resources/hedge-fund-ai/BlackLittermanModel";
import DeepRLAllocation from "./pages/resources/hedge-fund-ai/DeepRLAllocation";
import ValueAtRisk from "./pages/resources/hedge-fund-ai/ValueAtRisk";
import StressTesting from "./pages/resources/hedge-fund-ai/StressTesting";
import FactorModels from "./pages/resources/hedge-fund-ai/FactorModels";
import LimitOrderBookSimulation from "./pages/resources/hedge-fund-ai/LimitOrderBookSimulation";
import TransactionCostsAndSlippage from "./pages/resources/hedge-fund-ai/TransactionCostsAndSlippage";
import EvaluationAndWalkForward from "./pages/resources/hedge-fund-ai/EvaluationAndWalkForward";
import SentimentAnalysis from "./pages/resources/hedge-fund-ai/SentimentAnalysis";
import SatelliteGeospatialData from "./pages/resources/hedge-fund-ai/SatelliteGeospatialData";
import WebScrapingCrawling from "./pages/resources/hedge-fund-ai/WebScrapingCrawling";
import AlgorithmicTradingRegulations from "./pages/resources/hedge-fund-ai/AlgorithmicTradingRegulations";
import ModelExplainability from "./pages/resources/hedge-fund-ai/ModelExplainability";
import MarketManipulationDetection from "./pages/resources/hedge-fund-ai/MarketManipulationDetection";
import ResearchDataAgents from "./pages/resources/hedge-fund-ai/ResearchDataAgents";
import TradingExecutionAgents from "./pages/resources/hedge-fund-ai/TradingExecutionAgents";
import OperationsComplianceAgents from "./pages/resources/hedge-fund-ai/OperationsComplianceAgents";
import NotFound from "./pages/NotFound";
import ComingSoon from "./pages/ComingSoon";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/exploration/:id" element={<ExplorationDetail />} />
          <Route path="/thought/:id" element={<ThoughtDetail />} />
          <Route path="/bucket-list" element={<BucketList />} />
          <Route path="/consulting" element={<Consulting />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/digital-biology" element={<DigitalBiology />} />
          <Route path="/resources/digital-devices" element={<DigitalDevices />} />
          <Route path="/resources/digital-health" element={<DigitalHealth />} />
          <Route path="/resources/applied-ai" element={<AppliedAI />} />
          <Route path="/resources/hedge-fund-ai" element={<HedgeFundAI />} />
          
          {/* Digital Biology subsections */}
          <Route path="/resources/digital-biology/genomics-and-sequencing/next-generation-sequencing-ngs" element={<NextGenerationSequencing />} />
          <Route path="/resources/digital-biology/protein-structure-and-function/structure-prediction" element={<StructurePrediction />} />
          
          {/* Hedge Fund AI subsections */}
          <Route path="/resources/hedge-fund-ai/hedge-fund-fundamentals/how-hedge-funds-make-money" element={<HowHedgeFundsMakeMoney />} />
          <Route path="/resources/hedge-fund-ai/hedge-fund-fundamentals/long-short-equity-and-portfolio-construction" element={<LongShortEquityAndPortfolioConstruction />} />
          <Route path="/resources/hedge-fund-ai/hedge-fund-fundamentals/ai-in-the-hedge-fund-stack" element={<AIInTheHedgeFundStack />} />
          <Route path="/resources/hedge-fund-ai/execution-and-market-microstructure/optimal-execution" element={<OptimalExecution />} />
          <Route path="/resources/hedge-fund-ai/execution-and-market-microstructure/smart-order-routing" element={<SmartOrderRouting />} />
          <Route path="/resources/hedge-fund-ai/execution-and-market-microstructure/market-making" element={<MarketMaking />} />
          <Route path="/resources/hedge-fund-ai/machine-learning-infrastructure/feature-engineering" element={<FeatureEngineering />} />
          <Route path="/resources/hedge-fund-ai/machine-learning-infrastructure/backtesting-frameworks" element={<BacktestingFrameworks />} />
          <Route path="/resources/hedge-fund-ai/machine-learning-infrastructure/production-systems" element={<ProductionSystems />} />
          <Route path="/resources/hedge-fund-ai/market-prediction-models/price-forecasting" element={<PriceForecasting />} />
          <Route path="/resources/hedge-fund-ai/market-prediction-models/volatility-modeling" element={<VolatilityModeling />} />
          <Route path="/resources/hedge-fund-ai/market-prediction-models/regime-detection" element={<RegimeDetection />} />
          <Route path="/resources/hedge-fund-ai/quantitative-trading-strategies/statistical-arbitrage" element={<StatisticalArbitrage />} />
          <Route path="/resources/hedge-fund-ai/quantitative-trading-strategies/momentum-and-trend-following" element={<MomentumAndTrendFollowing />} />
          <Route path="/resources/hedge-fund-ai/quantitative-trading-strategies/high-frequency-trading" element={<HighFrequencyTrading />} />
          <Route path="/resources/hedge-fund-ai/portfolio-optimization/modern-portfolio-theory" element={<ModernPortfolioTheory />} />
          <Route path="/resources/hedge-fund-ai/portfolio-optimization/black-litterman-model" element={<BlackLittermanModel />} />
          <Route path="/resources/hedge-fund-ai/portfolio-optimization/deep-reinforcement-learning" element={<DeepRLAllocation />} />
          <Route path="/resources/hedge-fund-ai/risk-management/value-at-risk-var" element={<ValueAtRisk />} />
          <Route path="/resources/hedge-fund-ai/risk-management/stress-testing" element={<StressTesting />} />
          <Route path="/resources/hedge-fund-ai/risk-management/factor-models" element={<FactorModels />} />
          <Route path="/resources/hedge-fund-ai/simulation-backtesting-and-evaluation/limit-order-book-simulation" element={<LimitOrderBookSimulation />} />
          <Route path="/resources/hedge-fund-ai/simulation-backtesting-and-evaluation/transaction-costs-and-slippage" element={<TransactionCostsAndSlippage />} />
          <Route path="/resources/hedge-fund-ai/simulation-backtesting-and-evaluation/evaluation-and-walk-forward" element={<EvaluationAndWalkForward />} />
          <Route path="/resources/hedge-fund-ai/alternative-data-and-signals/sentiment-analysis" element={<SentimentAnalysis />} />
          <Route path="/resources/hedge-fund-ai/alternative-data-and-signals/satellite-and-geospatial-data" element={<SatelliteGeospatialData />} />
          <Route path="/resources/hedge-fund-ai/alternative-data-and-signals/web-scraping-and-crawling" element={<WebScrapingCrawling />} />
          <Route path="/resources/hedge-fund-ai/regulatory-and-compliance/algorithmic-trading-regulations" element={<AlgorithmicTradingRegulations />} />
          <Route path="/resources/hedge-fund-ai/regulatory-and-compliance/model-explainability" element={<ModelExplainability />} />
          <Route path="/resources/hedge-fund-ai/regulatory-and-compliance/market-manipulation-detection" element={<MarketManipulationDetection />} />
          <Route path="/resources/hedge-fund-ai/agentic-ai/research-and-data-agents" element={<ResearchDataAgents />} />
          <Route path="/resources/hedge-fund-ai/agentic-ai/trading-and-execution-agents" element={<TradingExecutionAgents />} />
          <Route path="/resources/hedge-fund-ai/agentic-ai/operations-and-compliance-agents" element={<OperationsComplianceAgents />} />
          
          {/* Catch-all for resource subsections - shows Coming Soon */}
          <Route path="/resources/digital-biology/*" element={<ComingSoon />} />
          <Route path="/resources/digital-devices/*" element={<ComingSoon />} />
          <Route path="/resources/digital-health/*" element={<ComingSoon />} />
          <Route path="/resources/applied-ai/*" element={<ComingSoon />} />
          <Route path="/resources/hedge-fund-ai/*" element={<ComingSoon />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
