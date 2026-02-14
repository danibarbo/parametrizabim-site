/**
 * Mobile Menu Component - Swiss International Style
 * - Slide-in menu com overlay
 * - Transições precisas de 200ms
 * - Tipografia consistente
 */

import { useEffect } from "react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-foreground/80 z-40 md:hidden transition-swiss"
          onClick={onClose}
        />
      )}

      {/* Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-background z-50 md:hidden transition-all duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <span className="font-display font-bold text-lg">Menu</span>
            <button
              onClick={onClose}
              className="p-2 hover:bg-muted transition-swiss"
              aria-label="Fechar menu"
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
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-6">
            <ul className="space-y-4">
              <li>
                <a
                  href="#servicos"
                  onClick={onClose}
                  className="block py-3 text-sm font-medium tracking-wide uppercase transition-swiss hover:text-primary hover:translate-x-1"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#quem-somos"
                  onClick={onClose}
                  className="block py-3 text-sm font-medium tracking-wide uppercase transition-swiss hover:text-primary hover:translate-x-1"
                >
                  Quem Somos
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  onClick={onClose}
                  className="block py-3 text-sm font-medium tracking-wide uppercase transition-swiss hover:text-primary hover:translate-x-1"
                >
                  Contato
                </a>
              </li>
            </ul>

            <div className="h-px bg-border my-6"></div>

            {/* CTA */}
            <a
              href="#contato"
              onClick={onClose}
              className="block w-full px-6 py-4 bg-primary text-primary-foreground text-center font-display font-bold text-sm tracking-wide uppercase transition-swiss hover:bg-foreground hover:text-background"
            >
              Fale Conosco
            </a>
          </nav>

          {/* Footer */}
          <div className="p-6 border-t border-border">
            <p className="text-xs text-muted-foreground font-mono">
              PARAMETRIZA BIM
            </p>
            <p className="text-xs text-muted-foreground font-mono mt-1">
              ENGINEERING PRECISION
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
