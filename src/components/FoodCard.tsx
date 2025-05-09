
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
      className="group overflow-hidden transition-all duration-300 hover:shadow-lg animate-fadeIn"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={food.image}
          alt={food.name}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />
        {food.isPopular && (
          <div className="absolute top-2 right-2 bg-korean-red text-white text-xs font-bold py-1 px-2 rounded-full">
            Популярное
          </div>
        )}
        {food.spicyLevel && food.spicyLevel > 0 && (
          <div className="absolute bottom-2 left-2 flex">
            {[...Array(food.spicyLevel)].map((_, i) => (
              <Icon key={i} name="Flame" className="h-4 w-4 text-korean-red" />
            ))}
          </div>
        )}
      </div>
      <CardContent className="pt-4">
        <div className="flex justify-between items-start">
          <h3 className="font-bold text-lg text-korean-black dark:text-white">{food.name}</h3>
          <p className="font-bold text-korean-red">{food.price} ₽</p>
        </div>
        <p className="text-sm text-muted-foreground mt-2">{food.description}</p>
        <div className="flex gap-2 mt-3">
          {food.isVegetarian && (
            <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full flex items-center">
              <Icon name="Leaf" className="h-3 w-3 mr-1" />
              <span>Вегетарианское</span>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <Button 
          onClick={() => onAddToCart(food)} 
          className="w-full bg-korean-red hover:bg-korean-red/90 text-white"
        >
          В корзину
          <Icon name="ShoppingBag" className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default FoodCard;
