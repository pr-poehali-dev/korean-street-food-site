
import { useState } from "react";
import FoodCard, { FoodItem } from "./FoodCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const mockFeaturedFoods: FoodItem[] = [
  {
    id: "1",
    name: "Бибимбап",
    description: "Традиционное блюдо из риса, овощей, говядины и яйца с острым соусом",
    price: 550,
    image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "main",
    spicyLevel: 2,
    isPopular: true
  },
  {
    id: "2",
    name: "Токпокки",
    description: "Рисовые клецки в остром соусе с добавлением овощей и рыбных пирожков",
    price: 420,
    image: "https://images.unsplash.com/photo-1635963989856-b261abfad667?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "appetizer",
    spicyLevel: 3,
    isPopular: true
  },
  {
    id: "3",
    name: "Кимпаб",
    description: "Корейские роллы с рисом, овощами и мясом, завернутые в водоросли",
    price: 380,
    image: "https://images.unsplash.com/photo-1626124967324-274727344dcd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "appetizer",
    isVegetarian: true,
    isPopular: false
  },
  {
    id: "4",
    name: "Пулькоги",
    description: "Маринованная говядина, обжаренная с овощами и сладким соусом",
    price: 650,
    image: "https://images.unsplash.com/photo-1684906041778-d99756875134?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    category: "main",
    isPopular: true
  },
  {
    id: "5",
    name: "Кимчи",
    description: "Традиционное острое блюдо из квашеной капусты с приправами",
    price: 280,
    image: "https://images.unsplash.com/photo-1583224964978-2e897a1af8ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "side",
    spicyLevel: 3,
    isVegetarian: true,
    isPopular: false
  },
  {
    id: "6",
    name: "Манду",
    description: "Корейские пельмени с начинкой из мяса и овощей",
    price: 350,
    image: "https://images.unsplash.com/photo-1625778452384-fa89127f6271?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "appetizer",
    isPopular: false
  }
];

const categories = [
  { id: "all", name: "Все" },
  { id: "appetizer", name: "Закуски" },
  { id: "main", name: "Основные" },
  { id: "side", name: "Гарниры" }
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
    <section className="py-16 bg-korean-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши популярные блюда</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Попробуйте настоящие шедевры корейской кухни, приготовленные по аутентичным рецептам
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-korean-light border">
              {categories.map(category => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className="font-medium py-2 px-4 data-[state=active]:bg-korean-red data-[state=active]:text-white"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          <TabsContent value={selectedCategory} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredFoods.map(food => (
                <FoodCard key={food.id} food={food} onAddToCart={handleAddToCart} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default FeaturedDishes;
