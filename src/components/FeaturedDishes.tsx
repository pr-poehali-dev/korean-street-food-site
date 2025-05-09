
import { useState } from "react";
import FoodCard, { FoodItem } from "./FoodCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const mockFeaturedFoods: FoodItem[] = [
  {
    id: "1",
    name: "Bibiboom-бап",
    description: "Взрывной микс риса, овощей, говядины и яйца с K-POP дерзким соусом",
    price: 599,
    image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "main",
    spicyLevel: 2,
    isPopular: true
  },
  {
    id: "2",
    name: "BTS Ток-покки",
    description: "Рисовые клецки в фирменном остром соусе с фиолетовым оттенком для фанатов BTS",
    price: 499,
    image: "https://images.unsplash.com/photo-1635963989856-b261abfad667?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "appetizer",
    spicyLevel: 3,
    isPopular: true
  },
  {
    id: "3",
    name: "BLACKPINK-паб",
    description: "Стильные корейские роллы с 4 видами начинок в розово-черных цветах",
    price: 450,
    image: "https://images.unsplash.com/photo-1626124967324-274727344dcd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "appetizer",
    isVegetarian: true,
    isPopular: false
  },
  {
    id: "4",
    name: "Idol Пулькоги",
    description: "Сочная маринованная говядина, приготовленная по рецепту любимому айдолами K-pop",
    price: 699,
    image: "https://images.unsplash.com/photo-1684906041778-d99756875134?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    category: "main",
    isPopular: true
  },
  {
    id: "5",
    name: "Neon Кимчи",
    description: "Яркая острая капуста с неоновым свечением и K-POP настроением",
    price: 350,
    image: "https://images.unsplash.com/photo-1583224964978-2e897a1af8ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "side",
    spicyLevel: 3,
    isVegetarian: true,
    isPopular: false
  },
  {
    id: "6",
    name: "Манду-Фандом",
    description: "Разноцветные корейские пельмени в цветах популярных K-POP групп",
    price: 479,
    image: "https://images.unsplash.com/photo-1625778452384-fa89127f6271?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "appetizer",
    isPopular: false
  }
];

const categories = [
  { id: "all", name: "Все блюда", icon: "LayoutGrid" },
  { id: "appetizer", name: "Закуски", icon: "AlignStartHorizontal" },
  { id: "main", name: "Основные", icon: "Utensils" },
  { id: "side", name: "Гарниры", icon: "SidebarClose" }
];

const FeaturedDishes = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [cartItems, setCartItems] = useState<FoodItem[]>([]);

  const handleAddToCart = (food: FoodItem) => {
    setCartItems([...cartItems, food]);
    // Здесь будет логика добавления в корзину
    console.log(`Добавлено в корзину: ${food.name}`);
  };

  const filteredFoods = selectedCategory === "all"
    ? mockFeaturedFoods
    : mockFeaturedFoods.filter(food => food.category === selectedCategory);

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Декоративные элементы стиля K-pop */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-kpop-pink opacity-20 rounded-full filter blur-xl"></div>
      <div className="absolute bottom-40 right-20 w-32 h-32 bg-kpop-purple opacity-20 rounded-full filter blur-xl"></div>
      <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-kpop-cyan opacity-10 rounded-full filter blur-xl transform -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-kpop-pink/10 text-kpop-pink font-semibold text-sm mb-4">
            TOP CHARTS • K-POP FOOD
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 gradient-text inline-block">Хиты нашего меню</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Блюда с максимальным количеством фанатов и восторженных отзывов - настоящие суперзвезды корейской кухни
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-background/50 backdrop-blur-sm border border-kpop-pink/20 p-1 rounded-full">
              {categories.map(category => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className="font-medium py-2 px-4 rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-kpop-pink data-[state=active]:to-kpop-purple data-[state=active]:text-white transition-all duration-300"
                >
                  <span className="flex items-center gap-2">
                    <Icon name={category.icon} className="h-4 w-4" />
                    {category.name}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          <TabsContent value={selectedCategory} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredFoods.map(food => (
                <FoodCard key={food.id} food={food} onAddToCart={handleAddToCart} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        {/* K-pop стиль призыва к действию */}
        <div className="mt-16 text-center">
          <p className="text-kpop-purple font-semibold mb-4">Не нашли свой любимый вкус?</p>
          <button className="inline-flex items-center gap-2 px-6 py-3 border-2 border-kpop-pink rounded-full text-kpop-pink font-bold hover:bg-kpop-pink hover:text-white transition-all duration-300 transform hover:scale-105">
            <span>Полное меню</span>
            <Icon name="ExternalLink" className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;
