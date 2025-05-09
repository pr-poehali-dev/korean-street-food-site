
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export interface FoodItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  spicyLevel?: number;
  isVegetarian?: boolean;
  isPopular?: boolean;
}

interface FoodCardProps {
  food: FoodItem;
  onAddToCart: (food: FoodItem) => void;
}

const FoodCard = ({ food, onAddToCart }: FoodCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Card 
      className="kpop-card group overflow-hidden transition-all duration-500 animate-fadeIn relative border-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-kpop-gradient opacity-0 transition-opacity duration-500 -z-10 group-hover:opacity-10"></div>
      
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={food.image}
          alt={food.name}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />
        {food.isPopular && (
          <div className="absolute top-2 right-2 bg-kpop-pink text-white text-xs font-bold py-1 px-2 rounded-full animate-pulse">
            <span className="flex items-center gap-1">
              <Icon name="Star" className="h-3 w-3" />
              Хит
            </span>
          </div>
        )}
        {food.spicyLevel && food.spicyLevel > 0 && (
          <div className="absolute bottom-2 left-2 flex items-center bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full">
            {[...Array(food.spicyLevel)].map((_, i) => (
              <Icon key={i} name="Flame" className="h-3 w-3 text-kpop-pink" />
            ))}
          </div>
        )}
      </div>
      
      <CardContent className="pt-4 relative z-10">
        <div className="flex justify-between items-start">
          <h3 className="font-bold text-lg">{food.name}</h3>
          <p className="font-bold text-kpop-pink">{food.price} ₽</p>
        </div>
        <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{food.description}</p>
        <div className="flex gap-2 mt-3">
          {food.isVegetarian && (
            <div className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 text-xs px-2 py-1 rounded-full flex items-center">
              <Icon name="Leaf" className="h-3 w-3 mr-1" />
              <span>Вегетарианское</span>
            </div>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="pt-0">
        <Button 
          onClick={() => onAddToCart(food)} 
          className="w-full bg-gradient-to-r from-kpop-pink to-kpop-purple hover:opacity-90 text-white group"
        >
          <span className="relative inline-block transition-transform group-hover:translate-x-[-4px]">
            В корзину
          </span>
          <Icon name="ShoppingBag" className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-[4px]" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default FoodCard;
