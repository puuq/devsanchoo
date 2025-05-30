"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-7 left-14 right-14 z-50 bg-background/80 backdrop-blur-lg border border-border rounded-xl shadow-md">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="pixel-text text-2xl font-bold tracking-wider">
            SANTOSH RAI
          </span>
        </Link>

        {/* Mobile menu button */}
        <button 
          className="md:hidden flex items-center justify-center p-2 text-primary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "transition-colors pixel-text text-base font-medium hover:text-primary/80",
                pathname === item.href ? "text-primary" : "text-muted-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="px-6 md:px-12 border-t border-border md:hidden">
          <nav className="flex flex-col py-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "py-3 transition-colors pixel-text text-base font-medium hover:text-primary/80",
                  pathname === item.href ? "text-primary" : "text-muted-foreground"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
