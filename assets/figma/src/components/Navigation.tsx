import { Button } from "./ui/button";
import { Dumbbell, Menu, X } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-purple-600 flex items-center justify-center">
              <Dumbbell className="w-6 h-6 text-white" />
            </div>
            <span className="text-white text-xl">DickFit</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-gray-300 hover:text-white transition-colors">
              Start
            </a>
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">
              O Nas
            </a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">
              Cennik
            </a>
            <a href="#gallery" className="text-gray-300 hover:text-white transition-colors">
              Galeria
            </a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
              Kontakt
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">
              Dołącz Teraz
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-6 space-y-4">
            <a
              href="#home"
              className="block text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Start
            </a>
            <a
              href="#features"
              className="block text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              O Nas
            </a>
            <a
              href="#pricing"
              className="block text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Cennik
            </a>
            <a
              href="#gallery"
              className="block text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Galeria
            </a>
            <a
              href="#contact"
              className="block text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Kontakt
            </a>
            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
              Dołącz Teraz
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
