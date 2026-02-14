/**
 * Header Component - Swiss International Style
 * - Hierarquia tipográfica rígida
 * - Grid assimétrico
 * - Linhas técnicas de 1px
 * - Transições instantâneas e precisas
 */

import { Link } from "wouter";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 transition-swiss hover:opacity-70">
            <div className="w-10 h-10 bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-xl">P</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg leading-none tracking-tight">
                Parametriza BIM
              </span>
              <span className="text-xs text-muted-foreground font-mono tracking-wide">
                ENGINEERING PRECISION
              </span>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#servicos"
              className="text-sm font-medium tracking-wide uppercase transition-swiss hover:text-primary"
            >
              Serviços
            </a>
            <a
              href="#quem-somos"
              className="text-sm font-medium tracking-wide uppercase transition-swiss hover:text-primary"
            >
              Quem Somos
            </a>
            <a
              href="#contato"
              className="text-sm font-medium tracking-wide uppercase transition-swiss hover:text-primary"
            >
              Contato
            </a>
          </nav>

          {/* CTA Button */}
          <a
            href="#contato"
            className="hidden md:block px-6 py-3 bg-primary text-primary-foreground font-display font-bold text-sm tracking-wide uppercase transition-swiss hover:bg-foreground hover:text-background active:translate-x-[-1px] active:translate-y-[-1px]"
          >
            Fale Conosco
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden p-2 hover:bg-muted transition-swiss"
            aria-label="Menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="square"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </header>

    <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}
