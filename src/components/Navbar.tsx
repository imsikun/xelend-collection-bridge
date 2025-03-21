
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300",
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold font-display bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500">
            Xelend
          </span>
        </a>

        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#features"
            className="text-sm font-medium text-slate-700 hover:text-primary transition-colors link-underline"
          >
            Features
          </a>
          <a
            href="#solutions"
            className="text-sm font-medium text-slate-700 hover:text-primary transition-colors link-underline"
          >
            Solutions
          </a>
          <a
            href="#about"
            className="text-sm font-medium text-slate-700 hover:text-primary transition-colors link-underline"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-slate-700 hover:text-primary transition-colors link-underline"
          >
            Contact
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <a
            href="#demo"
            className="px-4 py-2 text-sm font-medium rounded-md border border-blue-200 text-primary hover:bg-blue-50 transition-colors"
          >
            Request Demo
          </a>
          <a
            href="#contact"
            className="px-4 py-2 text-sm font-medium rounded-md bg-primary text-white hover:bg-blue-600 transition-colors shadow-sm"
          >
            Get Started
          </a>
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-slate-700" />
          ) : (
            <Menu className="h-6 w-6 text-slate-700" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-x-0 top-16 p-6 bg-white/90 backdrop-blur-md border-t border-slate-100 shadow-sm md:hidden transition-all duration-300 ease-in-out",
          isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        )}
      >
        <div className="space-y-6 flex flex-col">
          <a
            href="#features"
            className="text-base font-medium text-slate-700 hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Features
          </a>
          <a
            href="#solutions"
            className="text-base font-medium text-slate-700 hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Solutions
          </a>
          <a
            href="#about"
            className="text-base font-medium text-slate-700 hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#contact"
            className="text-base font-medium text-slate-700 hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </a>
          <div className="pt-4 space-y-3">
            <a
              href="#demo"
              className="block w-full px-4 py-2 text-center text-sm font-medium rounded-md border border-blue-200 text-primary hover:bg-blue-50 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Request Demo
            </a>
            <a
              href="#contact"
              className="block w-full px-4 py-2 text-center text-sm font-medium rounded-md bg-primary text-white hover:bg-blue-600 transition-colors shadow-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
