import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lottie from "lottie-react";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// ✅ Import animasi star lokal
import starAnimation from "./animations/star.json";

const queryClient = new QueryClient();


// 🔥 LOADING SCREEN
const LoadingScreen = ({ isFadeOut }) => {
  return (
    <div 
      className={`fixed inset-0 flex flex-col items-center justify-center bg-black z-[9999] transition-opacity duration-500 ${
        isFadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* ANIMASI */}
      <div className="w-64 h-64">
        <Lottie animationData={starAnimation} loop />
      </div>

      {/* TEXT */}
      <p className="mt-4 text-white font-medium animate-pulse">
    " Bintang tidak peduli gelapnya langit. Begitu juga kamu, jika kamu hebat, kamu akan tetap bersinar di antara gelapnya hati manusia"
      </p>
    </div>
  );
};


// 🔥 MAIN APP
const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFadeOut, setIsFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFadeOut(true);

      setTimeout(() => {
        setIsLoading(false);
      },1500);

    },7000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>

        {/* LOADING */}
        {isLoading && <LoadingScreen isFadeOut={isFadeOut} />}

        {/* APP */}
        <div className={isLoading ? "hidden" : "block"}>
          <Toaster />
          <Sonner />

          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </div>

      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
