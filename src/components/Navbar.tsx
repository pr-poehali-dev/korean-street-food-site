
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface NavbarProps {
  cartItemsCount: number;
}

const Navbar = ({ cartItemsCount = 0 }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-korean-light dark:bg-korean-black border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Меню"
              >
                <Icon name="Menu" className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px]">
              <nav className="flex flex-col gap-6 mt-10">
                <Link 
                  to="/" 
                  className="text-lg font-semibold hover:text-korean-red transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Главная
                </Link>
                <Link 
                  to="/menu" 
                  className="text-lg font-semibold hover:text-korean-red transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Меню
                </Link>
                <Link 
                  to="/about" 
                  className="text-lg font-semibold hover:text-korean-red transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  О нас
                </Link>
                <Link 
                  to="/delivery" 
                  className="text-lg font-semibold hover:text-korean-red transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Доставка
                </Link>
                <Link 
                  to="/contact" 
                  className="text-lg font-semibold hover:text-korean-red transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Контакты
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <Link 
            to="/" 
            className="flex items-center gap-2"
          >
            <span className="text-2xl font-bold tracking-tighter text-korean-red">K-Food</span>
          </Link>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link to="/" className="font-medium hover:text-korean-red transition-colors">
            Главная
          </Link>
          <Link to="/menu" className="font-medium hover:text-korean-red transition-colors">
            Меню
          </Link>
          <Link to="/about" className="font-medium hover:text-korean-red transition-colors">
            О нас
          </Link>
          <Link to="/delivery" className="font-medium hover:text-korean-red transition-colors">
            Доставка
          </Link>
          <Link to="/contact" className="font-medium hover:text-korean-red transition-colors">
            Контакты
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="relative">
            <Icon name="ShoppingCart" className="h-6 w-6" />
            {cartItemsCount > 0 && (
              <Badge 
                className="absolute -top-1 -right-1 bg-korean-red text-white" 
                variant="destructive"
              >
                {cartItemsCount}
              </Badge>
            )}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
