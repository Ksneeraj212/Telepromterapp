"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-primary">
            TelePrompter
          </Link>
          <nav className="hidden md:flex space-x-4 items-center">
            <Link href="/" className="text-foreground hover:text-primary">Home</Link>
            <Link href="#features" className="text-foreground hover:text-primary">Features</Link>
            <Link href="#how-it-works" className="text-foreground hover:text-primary">How It Works</Link>
            <Link href="#newsletter" className="text-foreground hover:text-primary">Newsletter</Link>
            <ThemeToggle />
          </nav>
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <Button className="ml-2" variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu />
            </Button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden py-2">
            <Link href="/" className="block py-2 text-foreground hover:text-primary">Home</Link>
            <Link href="#features" className="block py-2 text-foreground hover:text-primary">Features</Link>
            <Link href="#how-it-works" className="block py-2 text-foreground hover:text-primary">How It Works</Link>
            <Link href="#newsletter" className="block py-2 text-foreground hover:text-primary">Newsletter</Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;