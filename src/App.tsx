import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CookieBanner } from "./components/CookieBanner";
import { ScrollToTop } from "./components/ScrollToTop";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import DeleteAccount from "./pages/DeleteAccount";
import Download from "./pages/Download";
import FAQs from "./pages/FAQs";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import PromoCode from "./pages/PromoCode";
import TermsConditions from "./pages/TermsConditions";

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
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/delete-account" element={<DeleteAccount />} />
          <Route path="/download" element={<Download />} />
          <Route path="/qr-code" element={<Download />} />
          <Route path="/faqs-pointz-plus" element={<FAQs />} />
          <Route path="/announcement" element={<FAQs />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/promo-code" element={<PromoCode />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <CookieBanner />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
