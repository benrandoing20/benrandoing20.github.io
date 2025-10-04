
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ProjectDetail from "./components/ProjectDetail";
import BucketList from "./pages/BucketList";
import Resources from "./pages/Resources";
import AppliedAI from "./pages/resources/AppliedAI";
import DigitalBiology from "./pages/resources/DigitalBiology";
import DigitalDevices from "./pages/resources/DigitalDevices";
import DigitalHealth from "./pages/resources/DigitalHealth";
import HedgeFundAI from "./pages/resources/HedgeFundAI";
import NextGenerationSequencing from "./pages/resources/digital-biology/NextGenerationSequencing";
import StructurePrediction from "./pages/resources/digital-biology/StructurePrediction";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/bucket-list" element={<BucketList />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/digital-biology" element={<DigitalBiology />} />
          <Route path="/resources/digital-devices" element={<DigitalDevices />} />
          <Route path="/resources/digital-health" element={<DigitalHealth />} />
          <Route path="/resources/applied-ai" element={<AppliedAI />} />
          <Route path="/resources/hedge-fund-ai" element={<HedgeFundAI />} />
          
          {/* Digital Biology subsections */}
          <Route path="/resources/digital-biology/genomics-and-sequencing/next-generation-sequencing-ngs" element={<NextGenerationSequencing />} />
          <Route path="/resources/digital-biology/protein-structure-and-function/structure-prediction" element={<StructurePrediction />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
