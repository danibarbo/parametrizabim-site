/**
 * Footer Component - Swiss International Style
 * - Layout em grid assimétrico
 * - Tipografia técnica com fonte mono para dados
 * - Linhas horizontais como réguas
 */

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Logo e Descrição - 5 colunas */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-background flex items-center justify-center">
                <span className="text-foreground font-display font-bold text-2xl">P</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl leading-none tracking-tight">
                  Parametriza BIM
                </span>
                <span className="text-xs text-background/70 font-mono tracking-wide mt-1">
                  ENGINEERING PRECISION
                </span>
              </div>
            </div>
            <p className="text-sm text-background/80 leading-relaxed max-w-md">
              Estruturação, padronização e automação de processos para engenharia. 
              Transformando a maturidade BIM de escritórios de engenharia estrutural e pré-fabricados.
            </p>
          </div>

          {/* Navegação - 3 colunas */}
          <div className="md:col-span-3">
            <h3 className="font-display font-bold text-sm uppercase tracking-wide mb-4">
              Navegação
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#servicos" className="text-sm text-background/80 hover:text-background transition-swiss">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#quem-somos" className="text-sm text-background/80 hover:text-background transition-swiss">
                  Quem Somos
                </a>
              </li>
              <li>
                <a href="#contato" className="text-sm text-background/80 hover:text-background transition-swiss">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contato - 4 colunas */}
          <div className="md:col-span-4">
            <h3 className="font-display font-bold text-sm uppercase tracking-wide mb-4">
              Contato
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-background/60 text-xs font-mono mt-0.5">EMAIL</span>
                <a
                  href="mailto:contato@parametrizabim.com"
                  className="text-sm font-mono text-background/80 hover:text-background transition-swiss break-all"
                >
                  contato@parametrizabim.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Ruler line */}
        <div className="h-px bg-background/20 my-8"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-background/60 font-mono">
            © {new Date().getFullYear()} PARAMETRIZA BIM. TODOS OS DIREITOS RESERVADOS.
          </p>
          <p className="text-xs text-background/60 font-mono">
            DESENVOLVIDO COM PRECISÃO TÉCNICA
          </p>
        </div>
      </div>
    </footer>
  );
}
