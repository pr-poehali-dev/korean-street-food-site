
import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import FeaturedDishes from "@/components/FeaturedDishes";
import Footer from "@/components/Footer";
import { FoodItem } from "@/components/FoodCard";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [cartItems, setCartItems] = useState<FoodItem[]>([]);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar cartItemsCount={cartItems.length} />
      <main>
        <HeroSection />
        <FeaturedDishes />
        
        {/* K-pop стиль промо-секция */}
        <section className="py-16 px-4 bg-gradient-to-r from-kpop-pink/5 to-kpop-purple/5 relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-30">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1669875905952-458e5f829cf4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80')] bg-cover bg-center opacity-10"></div>
          </div>
          
          <div className="container mx-auto relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-1 rounded-full bg-kpop-pink/10 text-kpop-pink font-semibold text-sm mb-4">
                FAN SERVICE • SPECIAL
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Заказ и доставка за <span className="gradient-text">3 клика</span></h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Мы сделали процесс заказа таким же быстрым, как смена образов в K-pop клипе. Всего 3 простых шага и ваш заказ уже в пути!
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="bg-background/60 backdrop-blur-md p-6 rounded-2xl border border-kpop-pink/20 hover:border-kpop-pink/50 transition-all duration-300 group hover:transform hover:scale-105">
                  <div className="w-12 h-12 rounded-full bg-kpop-pink/20 flex items-center justify-center text-kpop-pink mb-4 mx-auto group-hover:bg-kpop-pink group-hover:text-white transition-colors duration-300">
                    <span className="font-bold text-lg">1</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Выберите блюда</h3>
                  <p className="text-muted-foreground">Добавьте любимые корейские блюда в корзину прямо с нашего меню</p>
                </div>
                
                <div className="bg-background/60 backdrop-blur-md p-6 rounded-2xl border border-kpop-purple/20 hover:border-kpop-purple/50 transition-all duration-300 group hover:transform hover:scale-105">
                  <div className="w-12 h-12 rounded-full bg-kpop-purple/20 flex items-center justify-center text-kpop-purple mb-4 mx-auto group-hover:bg-kpop-purple group-hover:text-white transition-colors duration-300">
                    <span className="font-bold text-lg">2</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Укажите адрес</h3>
                  <p className="text-muted-foreground">Введите адрес доставки и выберите удобное время</p>
                </div>
                
                <div className="bg-background/60 backdrop-blur-md p-6 rounded-2xl border border-kpop-cyan/20 hover:border-kpop-cyan/50 transition-all duration-300 group hover:transform hover:scale-105">
                  <div className="w-12 h-12 rounded-full bg-kpop-cyan/20 flex items-center justify-center text-kpop-cyan mb-4 mx-auto group-hover:bg-kpop-cyan group-hover:text-white transition-colors duration-300">
                    <span className="font-bold text-lg">3</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Наслаждайтесь</h3>
                  <p className="text-muted-foreground">Получите заказ за 20 минут и погрузитесь в K-pop атмосферу</p>
                </div>
              </div>
              
              <Button className="bg-gradient-to-r from-kpop-pink via-kpop-purple to-kpop-cyan bg-size-200 hover:bg-right-bottom transition-all duration-500 text-white font-semibold py-6 px-8 text-lg rounded-full group">
                <span className="flex items-center gap-2">
                  Заказать сейчас
                  <Icon name="Rocket" className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      
      {/* K-pop плавающая музыкальная кнопка */}
      <div className="fixed bottom-6 right-6 z-40">
        <button className="w-12 h-12 rounded-full bg-kpop-purple flex items-center justify-center text-white shadow-lg hover:bg-kpop-pink transition-colors group">
          <Icon name="Music2" className="h-6 w-6 transition-transform group-hover:rotate-12" />
        </button>
      </div>
    </div>
  );
};

export default Index;
