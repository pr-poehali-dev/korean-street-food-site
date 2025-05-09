
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  // K-pop стиль - добавление эффектов мыши
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      
      // Создание элемента свечения
      const glow = document.createElement("div");
      glow.className = "pointer-events-none fixed w-40 h-40 rounded-full bg-kpop-pink opacity-10 z-0";
      glow.style.left = `${mouseX - 80}px`;
      glow.style.top = `${mouseY - 80}px`;
      glow.style.filter = "blur(40px)";
      document.body.appendChild(glow);
      
      // Удаление элемента после анимации
      setTimeout(() => {
        glow.style.transition = "opacity 0.5s ease";
        glow.style.opacity = "0";
        setTimeout(() => {
          document.body.removeChild(glow);
        }, 500);
      }, 300);
    };
    
    // Добавление обработчика событий только на десктопе
    if (window.innerWidth > 768) {
      window.addEventListener("mousemove", handleMouseMove);
    }
    
    return () => {
      if (window.innerWidth > 768) {
        window.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* Будущие маршруты */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
