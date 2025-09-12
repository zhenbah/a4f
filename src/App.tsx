import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ModelsPage from "./pages/ModelsPage";
import PricingPage from "./pages/PricingPage";
import ChatPage from "./pages/ChatPage";
import DocsPage from "./pages/DocsPage";
import RankingsPage from "./pages/RankingsPage";
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
          <Route path="/models" element={<ModelsPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/rankings" element={<RankingsPage />} />
          <Route path="/docs" element={<DocsPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
