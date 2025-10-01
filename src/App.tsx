
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
import HealthAI from "./pages/resources/HealthAI";
import HedgeFundAI from "./pages/resources/HedgeFundAI";
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
          <Route path="/resources/applied-ai" element={<AppliedAI />} />
          <Route path="/resources/health-ai" element={<HealthAI />} />
          <Route path="/resources/hedge-fund-ai" element={<HedgeFundAI />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
