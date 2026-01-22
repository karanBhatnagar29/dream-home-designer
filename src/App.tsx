import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AfricanDesertTentGallery from "./pages/AfricanDesertTentGallery";
import ModifiedSafariTentGallery from "./pages/ModifiedSafariTentGallery";
import SwissLuxuryTentGallery from "./pages/SwissLuxuryTentGallery";
import ThreeConicalTentGallery from "./pages/ThreeConicalTentGallery";
import MaharajaTentGallery from "./pages/MaharajaTentGallery";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route
            path="/products/african-desert-tent"
            element={<AfricanDesertTentGallery />}
          />
          <Route
            path="/products/modified-safari-tent"
            element={<ModifiedSafariTentGallery />}
          />
          <Route
            path="/products/swiss-luxury-tent"
            element={<SwissLuxuryTentGallery />}
          />
          <Route
            path="/products/three-conical-tent"
            element={<ThreeConicalTentGallery />}
          />
          <Route
            path="/products/maharaja-tent"
            element={<MaharajaTentGallery />}
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
