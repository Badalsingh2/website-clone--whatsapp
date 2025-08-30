"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Our Work', href: '#our-work' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background-dark shadow-md py-4' : 'bg-transparent py-6'
        }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="#home" className="flex items-center space-x-4">
          <Image
            src="https://customer-assets.emergentagent.com/job_site-in-72hrs/artifacts/5hf9iowu_Screenshot%202025-08-30%20224123.png"
            alt="BuildSumo Logo"
            width={48}
            height={48}
            className="rounded-full object-cover"
          />
          <h1 className="text-2xl font-bold tracking-wide text-primary">
            BUILDSUMO
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative text-[16px] font-medium text-text-primary hover:text-primary transition-colors duration-300 group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
         <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-primary" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background-dark border-border p-0">
               <div className="flex flex-col items-center justify-center h-full">
                <nav className="flex flex-col items-center space-y-8">
                  {navItems.map((item) => (
                      <SheetClose asChild key={item.name}>
                        <Link
                            href={item.href}
                            className="text-2xl font-medium text-text-primary hover:text-primary transition-colors duration-300"
                        >
                            {item.name}
                        </Link>
                      </SheetClose>
                  ))}
                </nav>
               </div>
               <SheetClose asChild>
                    <Button variant="ghost" size="icon" className="absolute top-4 right-4 text-primary">
                        <X className="h-6 w-6" />
                        <span className="sr-only">Close menu</span>
                    </Button>
                </SheetClose>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navigation;