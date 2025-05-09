
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-gradient-to-br from-kpop-black via-kpop-purple/20 to-kpop-black">
      {/* Background design elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-kpop-pink opacity-20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-kpop-purple opacity-20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-2/3 left-1/2 w-72 h-72 bg-kpop-cyan opacity-20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1532147217744-fde32cd26106?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="K-pop и корейская еда" 
          className="w-full h-full object-cover mix-blend-luminosity opacity-30"
        />
      </div>
      
      {/* Content */}
      <div className="container relative z-20 mx-auto h-full px-4 flex flex-col justify-center items-start max-w-5xl py-20">
        <div className="max-w-xl animate-slideUp">
          <span className="inline-block px-4 py-1 rounded-full bg-kpop-pink/20 text-kpop-pink font-semibold text-sm mb-4 backdrop-blur-sm">
            K-POP VIBE • KOREAN TASTE
          </span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-white">
            <span className="block">Дерзкий</span>
            <span className="gradient-text block">корейский</span>
            <span className="block">стрит-фуд</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-8">
            Приготовлено с K-POP энергией и доставлено за 20 минут! Стань частью яркой K-POP культуры с нашей аутентичной корейской кухней.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-kpop-pink hover:bg-kpop-pink/90 text-white font-semibold py-6 px-8 text-lg group relative overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Заказать сейчас
                <Icon name="ArrowRight" className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-kpop-pink to-kpop-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Button>
            
            <Button variant="outline" className="border-kpop-purple text-white hover:bg-kpop-purple/20 py-6 px-8 text-lg group">
              <span className="flex items-center gap-2">
                Меню
                <Icon name="Utensils" className="h-5 w-5 transition-transform group-hover:rotate-12" />
              </span>
            </Button>
          </div>
          
          <div className="flex items-center gap-4 mt-8">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div 
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-kpop-pink overflow-hidden"
                >
                  <img 
                    src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'women' : 'men'}/${i + 20}.jpg`} 
                    alt="Клиент"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="text-white">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Icon key={i} name="Star" className="w-4 h-4 text-kpop-yellow fill-kpop-yellow" />
                ))}
              </div>
              <p className="text-sm">500+ K-POP фанатов уже с нами!</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating music icons */}
      <div className="absolute bottom-10 right-10 hidden md:block animate-bounce">
        <div className="relative w-16 h-16 bg-kpop-pink rounded-full flex items-center justify-center text-white">
          <Icon name="Music" className="h-8 w-8" />
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-kpop-purple rounded-full flex items-center justify-center text-xs">
            <Icon name="Heart" className="h-3 w-3" />
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
