
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-korean-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">K-Food</h3>
            <p className="mb-4 text-gray-300">
              Аутентичный корейский стрит-фуд с доставкой за 20 минут. Яркие вкусы и незабываемые впечатления!
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-korean-red transition-colors">
                <Icon name="Instagram" className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-korean-red transition-colors">
                <Icon name="Facebook" className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-korean-red transition-colors">
                <Icon name="Twitter" className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Информация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-korean-red transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-gray-300 hover:text-korean-red transition-colors">
                  Меню
                </Link>
              </li>
              <li>
                <Link to="/delivery" className="text-gray-300 hover:text-korean-red transition-colors">
                  Доставка
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-korean-red transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <div className="space-y-2">
              <p className="flex items-center text-gray-300">
                <Icon name="MapPin" className="h-5 w-5 mr-2" />
                ул. Корейская, 123, Москва
              </p>
              <p className="flex items-center text-gray-300">
                <Icon name="Phone" className="h-5 w-5 mr-2" />
                +7 (999) 123-45-67
              </p>
              <p className="flex items-center text-gray-300">
                <Icon name="Mail" className="h-5 w-5 mr-2" />
                info@k-food.ru
              </p>
              <p className="flex items-center text-gray-300">
                <Icon name="Clock" className="h-5 w-5 mr-2" />
                10:00 - 22:00, без выходных
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} K-Food. Все права защищены.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/terms" className="text-gray-400 text-sm hover:text-korean-red transition-colors">
              Условия использования
            </Link>
            <Link to="/privacy" className="text-gray-400 text-sm hover:text-korean-red transition-colors">
              Политика конфиденциальности
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
