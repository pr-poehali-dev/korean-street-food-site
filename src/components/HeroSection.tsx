
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative h-[80vh] min-h-[600px] bg-korean-black overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1580651214613-f4692d6d138f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Корейская еда" 
          className="w-full h-full object-cover opacity-50"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-korean-black to-transparent z-10" />
      
      <div className="container relative z-20 mx-auto h-full px-4 flex flex-col justify-center items-start max-w-5xl">
        <div className="max-w-xl animate-slideUp">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
            Аутентичный корейский стрит-фуд
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8">
            Настоящие вкусы Кореи с доставкой за 20 минут. Откройте для себя яркие вкусы Азии!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-korean-red hover:bg-korean-red/90 text-white font-semibold py-6 px-8 text-lg">
              Заказать сейчас
              <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/20 py-6 px-8 text-lg">
              Меню
              <Icon name="Utensils" className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <div className="flex items-center gap-4 mt-8">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <img 
                  key={i}
                  src={`https://randomuser.me/api/portraits/men/${i + 20}.jpg`} 
                  alt="Клиент"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
              ))}
            </div>
            <div className="text-white">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Icon key={i} name="Star" className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-sm">500+ довольных клиентов в этом месяце</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
