
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-background to-kpop-black text-white overflow-hidden">
      {/* K-pop стиль декоративные элементы */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-10">
        <div className="absolute top-0 left-1/4 w-40 h-40 bg-kpop-pink rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-60 h-60 bg-kpop-purple rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="gradient-text text-2xl font-extrabold mb-6">K-POP FOOD</h3>
            <p className="mb-6 text-gray-300">
              Аутентичный корейский стрит-фуд с K-POP вибрациями! 
              Доставляем вкус и энергию Кореи за 20 минут по всему городу.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-kpop-pink flex items-center justify-center text-white transition-transform hover:scale-110" aria-label="Instagram">
                <Icon name="Instagram" className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-kpop-purple flex items-center justify-center text-white transition-transform hover:scale-110" aria-label="Facebook">
                <Icon name="Facebook" className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-kpop-cyan flex items-center justify-center text-white transition-transform hover:scale-110" aria-label="Twitter">
                <Icon name="Twitter" className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center text-white transition-transform hover:scale-110" aria-label="YouTube">
                <Icon name="Youtube" className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Icon name="FileText" className="h-5 w-5 text-kpop-pink" />
              <span>Информация</span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-kpop-pink transition-colors flex items-center gap-2">
                  <Icon name="ChevronRight" className="h-4 w-4 text-kpop-pink" />
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-gray-300 hover:text-kpop-pink transition-colors flex items-center gap-2">
                  <Icon name="ChevronRight" className="h-4 w-4 text-kpop-pink" />
                  Меню
                </Link>
              </li>
              <li>
                <Link to="/delivery" className="text-gray-300 hover:text-kpop-pink transition-colors flex items-center gap-2">
                  <Icon name="ChevronRight" className="h-4 w-4 text-kpop-pink" />
                  Доставка
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-kpop-pink transition-colors flex items-center gap-2">
                  <Icon name="ChevronRight" className="h-4 w-4 text-kpop-pink" />
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Icon name="Stars" className="h-5 w-5 text-kpop-pink" />
              <span>K-POP Specials</span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/idol-menu" className="text-gray-300 hover:text-kpop-pink transition-colors flex items-center gap-2">
                  <Icon name="ChevronRight" className="h-4 w-4 text-kpop-pink" />
                  Idol Menu
                </Link>
              </li>
              <li>
                <Link to="/kpop-events" className="text-gray-300 hover:text-kpop-pink transition-colors flex items-center gap-2">
                  <Icon name="ChevronRight" className="h-4 w-4 text-kpop-pink" />
                  K-POP События
                </Link>
              </li>
              <li>
                <Link to="/merch" className="text-gray-300 hover:text-kpop-pink transition-colors flex items-center gap-2">
                  <Icon name="ChevronRight" className="h-4 w-4 text-kpop-pink" />
                  Фан-мерч
                </Link>
              </li>
              <li>
                <Link to="/fandom-deals" className="text-gray-300 hover:text-kpop-pink transition-colors flex items-center gap-2">
                  <Icon name="ChevronRight" className="h-4 w-4 text-kpop-pink" />
                  Фандом-скидки
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Icon name="MapPin" className="h-5 w-5 text-kpop-pink" />
              <span>Контакты</span>
            </h3>
            <div className="space-y-4">
              <p className="flex items-center gap-3 text-gray-300">
                <span className="w-8 h-8 rounded-full bg-kpop-purple/20 flex items-center justify-center">
                  <Icon name="MapPin" className="h-4 w-4 text-kpop-pink" />
                </span>
                K-POP Аллея, 123, Москва
              </p>
              <p className="flex items-center gap-3 text-gray-300">
                <span className="w-8 h-8 rounded-full bg-kpop-purple/20 flex items-center justify-center">
                  <Icon name="Phone" className="h-4 w-4 text-kpop-pink" />
                </span>
                +7 (999) 123-45-67
              </p>
              <p className="flex items-center gap-3 text-gray-300">
                <span className="w-8 h-8 rounded-full bg-kpop-purple/20 flex items-center justify-center">
                  <Icon name="Mail" className="h-4 w-4 text-kpop-pink" />
                </span>
                idol@kpop-food.ru
              </p>
              <p className="flex items-center gap-3 text-gray-300">
                <span className="w-8 h-8 rounded-full bg-kpop-purple/20 flex items-center justify-center">
                  <Icon name="Clock" className="h-4 w-4 text-kpop-pink" />
                </span>
                10:00 - 23:00, ежедневно
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-kpop-purple/30 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} K-POP FOOD • Все фанаты в восторге
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/terms" className="text-gray-400 text-sm hover:text-kpop-pink transition-colors">
              Условия
            </Link>
            <Link to="/privacy" className="text-gray-400 text-sm hover:text-kpop-pink transition-colors">
              Приватность
            </Link>
            <Link to="/cookies" className="text-gray-400 text-sm hover:text-kpop-pink transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
      
      {/* K-pop стиль волнистый разделитель */}
      <div className="absolute top-0 left-0 right-0 h-6 bg-wave-pattern opacity-20"></div>
    </footer>
  );
};

export default Footer;
