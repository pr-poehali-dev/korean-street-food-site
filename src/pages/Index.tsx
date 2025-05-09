
import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import FeaturedDishes from "@/components/FeaturedDishes";
import Footer from "@/components/Footer";
import { FoodItem } from "@/components/FoodCard";

const Index = () => {
  const [cartItems, setCartItems] = useState<FoodItem[]>([]);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar cartItemsCount={cartItems.length} />
      <main>
        <HeroSection />
        <FeaturedDishes />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
