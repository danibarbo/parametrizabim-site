/**
 * Home Page - Swiss International Style
 * Design Philosophy: Precisão Técnica Suíça
 * - Grid assimétrico de 12 colunas
 * - Hierarquia tipográfica matemática
 * - Paleta monocromática slate com acento azul estrutural
 * - Cantos retos absolutos (border-radius: 0)
 * - Transições instantâneas e precisas (200ms)
 */

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { useState } from "react";
import { toast } from "sonner";

export default function Home() {
  useSmoothScroll();
  
  const [formData, setFormData] = useState({
    nome: "",
    empresa: "",
    email: "",
    mensagem: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    setFormData({ nome: "", empresa: "", email: "", mensagem: "" });
  };

  const services = [
    {
      title: "BIP – Plano de Implantação BIM",
      description: "Documento estratégico que estrutura a adoção do BIM na organização, definindo diretrizes, metas e etapas de implementação.",
      items: [
        "Diagnóstico de maturidade BIM",
        "Definição de objetivos estratégicos",
        "Identificação de usos BIM",
        "Estruturação de fluxo de processos",
        "Roadmap de implantação"
      ]
    },
    {
      title: "BEP – Plano de Execução BIM",
      description: "Documento técnico-operacional que estabelece como o BIM será aplicado nos projetos e contratos.",
      items: [
        "Definição de usos BIM por disciplina",
        "Níveis de desenvolvimento (LOD)",
        "Entregáveis BIM",
        "Convenções de nomenclatura",
        "Procedimentos de compatibilização"
      ]
    },
    {
      title: "Templates (Revit / Projeto)",
      description: "Ambiente padronizado que organiza representação gráfica, documentação e estrutura de dados.",
      items: [
        "View templates",
        "Filtros e regras gráficas",
        "Line styles / line patterns",
        "Padrões de hachura",
        "Tabelas (schedules)"
      ]
    },
    {
      title: "Biblioteca de Famílias Paramétricas",
      description: "Conjunto de componentes inteligentes e padronizados voltados à modelagem e quantificação.",
      items: [
        "Famílias estruturais",
        "Famílias de detalhamento",
        "Parâmetros compartilhados",
        "Tipos padronizados",
        "Representações em LOD"
      ]
    },
    {
      title: "Ferramentas de Produção Personalizadas",
      description: "Desenvolvimento de automações sob medida para ganho de produtividade e redução de retrabalho.",
      items: [
        "Scripts em Dynamo",
        "Rotinas em Python",
        "Ferramentas via pyRevit",
        "Cotagem automática",
        "Extração de dados"
      ]
    },
    {
      title: "Padronização BIM (Normas & Diretrizes)",
      description: "Definição de regras técnicas e organizacionais para garantir consistência dos projetos.",
      items: [
        "Convenções de nomenclatura",
        "Estrutura de pastas",
        "Padrões gráficos",
        "Regras de modelagem",
        "Checklist de qualidade"
      ]
    },
    {
      title: "Estruturação de Parâmetros",
      description: "Organização dos dados do modelo para quantificação, planejamento e compatibilização.",
      items: [
        "Parâmetros compartilhados",
        "Parâmetros de projeto",
        "Parâmetros globais",
        "Padronização de nomenclatura",
        "Validação de consistência"
      ]
    },
    {
      title: "Tabelas & Quantitativos",
      description: "Configuração de extração inteligente de informações do modelo BIM.",
      items: [
        "Schedules personalizados",
        "Campos calculados",
        "Filtros de quantificação",
        "Agrupamentos e classificações",
        "Exportação de dados"
      ]
    },
    {
      title: "Treinamento de Equipe & Onboarding BIM",
      description: "Capacitação prática voltada à realidade operacional do escritório.",
      items: [
        "Treinamentos técnicos",
        "Workshops práticos",
        "Tutoriais personalizados",
        "Capacitação em Revit",
        "Capacitação em Dynamo"
      ]
    },
    {
      title: "Governança & Gestão do Conhecimento BIM",
      description: "Estruturação de base de conhecimento e processos de melhoria contínua.",
      items: [
        "Wiki BIM",
        "Documentação de processos",
        "Guias e manuais internos",
        "Biblioteca de padrões",
        "Plano de evolução BIM"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section - Grid assimétrico com logo à direita */}
        <section className="relative min-h-[600px] flex items-center overflow-hidden bg-background">
          {/* Background with geometric pattern inspired by logo */}
          <div className="absolute inset-0 opacity-5">
            <svg viewBox="0 0 1200 600" className="w-full h-full" preserveAspectRatio="none">
              {/* Onda inspirada no logo */}
              <path d="M0,400 Q300,350 600,400 T1200,400 L1200,600 L0,600 Z" fill="#0066CC" />
              {/* Linhas geométricas */}
              <line x1="400" y1="0" x2="400" y2="600" stroke="#0066CC" strokeWidth="2" />
              <line x1="800" y1="0" x2="800" y2="600" stroke="#0066CC" strokeWidth="2" />
            </svg>
          </div>

          <div className="container relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-6 py-12">
                {/* Overline */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-px bg-primary"></div>
                  <span className="text-xs font-mono tracking-widest uppercase text-muted-foreground">
                    BIM • AUTOMAÇÃO • PRECISÃO
                  </span>
                </div>

                {/* Headline */}
                <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-none mb-6 text-foreground">
                  BIM estratégico para engenharia estrutural
                </h1>

                {/* Subheadline */}
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
                  Implantação BIM • Automação • Padronização • Revit • IFC
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#servicos"
                    className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-display font-bold text-sm tracking-wide uppercase transition-swiss hover:bg-foreground hover:text-background active:translate-x-[-1px] active:translate-y-[-1px]"
                  >
                    Conheça nossos serviços
                  </a>
                  <a
                    href="#contato"
                    className="inline-flex items-center justify-center px-8 py-4 border border-foreground text-foreground font-display font-bold text-sm tracking-wide uppercase transition-swiss hover:bg-foreground hover:text-background active:translate-x-[-1px] active:translate-y-[-1px]"
                  >
                    Fale conosco
                  </a>
                </div>
              </div>
              
              {/* Logo à direita */}
              <div className="md:col-span-6 flex items-center justify-center">
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663354618757/SGOueHFUaMBIOCeG.png"
                  alt="Parametriza BIM Logo"
                  className="w-full max-w-sm h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Ruler line */}
        <div className="ruler-line"></div>

        {/* Services Section */}
        <section id="servicos" className="py-24 bg-background">
          <div className="container">
            {/* Section Header */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-6xl font-mono text-primary font-bold">01</span>
                <div className="flex-1 h-px bg-border"></div>
              </div>
              <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
                Serviços Especializados
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl">
                Soluções completas para implantação BIM, automação e estruturação de processos em engenharia estrutural e pré-fabricados.
              </p>
            </div>

            {/* Services Grid - All 11 items with uniform height */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <ScrollReveal key={index} delay={(index % 6) * 100}>
                  <Card className="p-8 border-2 border-border hover:border-primary transition-swiss group hover:shadow-md flex flex-col h-full">
                    <h3 className="font-display font-bold text-lg mb-3 group-hover:text-primary transition-swiss">
                      {service.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <div className="h-px bg-border mb-4"></div>
                    <ul className="space-y-1.5 text-xs flex-1">
                      {service.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2">
                          <span className="text-primary mt-0.5 flex-shrink-0">▪</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Ruler line */}
        <div className="ruler-line"></div>

        {/* Benefits Section */}
        <section className="py-24 bg-muted">
          <div className="container">
            {/* Section Header */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-6xl font-mono text-primary font-bold">02</span>
                <div className="flex-1 h-px bg-border"></div>
              </div>
              <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
                Diferenciais e Benefícios
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl">
                Resultados mensuráveis que transformam a operação de escritórios de engenharia.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { number: "01", title: "Maturidade BIM", desc: "Evolução estruturada da capacidade técnica" },
                { number: "02", title: "Redução de Retrabalho", desc: "Processos padronizados eliminam erros recorrentes" },
                { number: "03", title: "Ganho de Produtividade", desc: "Automação de tarefas repetitivas libera tempo técnico" },
                { number: "04", title: "Padronização de Processos", desc: "Fluxos consistentes em todos os projetos" },
                { number: "05", title: "Modelos Consistentes", desc: "Templates garantem qualidade uniforme" },
                { number: "06", title: "Automação Inteligente", desc: "Scripts customizados para necessidades específicas" },
                { number: "07", title: "Previsibilidade de Custos", desc: "Quantitativos precisos desde o início" },
                { number: "08", title: "Suporte Especializado", desc: "Acompanhamento técnico contínuo" },
              ].map((benefit) => (
                <div key={benefit.number} className="bg-background p-6 border-l-4 border-primary">
                  <div className="font-mono text-4xl text-primary font-bold mb-3">
                    {benefit.number}
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {benefit.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ruler line */}
        <div className="ruler-line"></div>

        {/* About Section */}
        <section id="quem-somos" className="py-24 bg-background">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
              {/* Text - 7 colunas */}
              <div className="md:col-span-7">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-6xl font-mono text-primary font-bold">03</span>
                  <div className="flex-1 h-px bg-border"></div>
                </div>
                <h2 className="font-display font-bold text-4xl md:text-5xl mb-8">
                  Quem Somos
                </h2>

                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    A <strong className="text-foreground">Parametriza BIM</strong> é liderada por <strong className="text-foreground">Danilo Barbosa</strong>, Engenheiro Civil com especialização em BIM, atuando na estruturação, padronização e automação de processos para engenharia.
                  </p>

                  <p>
                    Com experiência em implantação BIM, desenvolvimento de templates, bibliotecas paramétricas e automações com Dynamo e Python, a empresa atua apoiando escritórios de engenharia estrutural e pré-fabricados em concreto na evolução de sua maturidade BIM.
                  </p>

                  <div className="h-px bg-border my-8"></div>

                  <h3 className="font-display font-bold text-xl text-foreground mb-4">
                    Áreas de Atuação
                  </h3>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      "Treinamentos & Tutoriais",
                      "Suporte ao time de engenharia",
                      "Implantação BIM",
                      "Desenvolvimento de automações",
                      "Padronização e templates",
                      "Bibliotecas de famílias paramétricas",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="w-1 h-1 bg-primary mt-2.5"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Photo - 5 colunas */}
              <div className="md:col-span-5 flex flex-col items-center justify-center">
                <div className="mb-6">
                  <img
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663354618757/iutmCEgfLdZZmHad.png"
                    alt="Danilo Barbosa - Engenheiro Civil Especialista em BIM"
                    className="w-full max-w-xs h-auto rounded-lg shadow-lg"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-display font-bold text-xl mb-1">
                    Danilo Barbosa
                  </h3>
                  <p className="text-sm text-primary font-display font-bold uppercase tracking-wide">
                    Engenheiro Civil Especialista em BIM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ruler line */}
        <div className="ruler-line"></div>

        {/* Contact Section */}
        <section id="contato" className="py-24 bg-muted">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Form - 7 colunas */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-6xl font-mono text-primary font-bold">04</span>
                  <div className="flex-1 h-px bg-border"></div>
                </div>
                <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
                  Contato
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Vamos conversar sobre como otimizar seus processos BIM.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="nome" className="block text-sm font-display font-bold uppercase tracking-wide mb-2">
                      Nome
                    </label>
                    <Input
                      id="nome"
                      type="text"
                      required
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      className="w-full border-2 border-border focus:border-primary transition-swiss"
                    />
                  </div>

                  <div>
                    <label htmlFor="empresa" className="block text-sm font-display font-bold uppercase tracking-wide mb-2">
                      Empresa
                    </label>
                    <Input
                      id="empresa"
                      type="text"
                      required
                      value={formData.empresa}
                      onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                      className="w-full border-2 border-border focus:border-primary transition-swiss"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-display font-bold uppercase tracking-wide mb-2">
                      E-mail
                    </label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full border-2 border-border focus:border-primary transition-swiss"
                    />
                  </div>

                  <div>
                    <label htmlFor="mensagem" className="block text-sm font-display font-bold uppercase tracking-wide mb-2">
                      Mensagem
                    </label>
                    <Textarea
                      id="mensagem"
                      required
                      rows={5}
                      value={formData.mensagem}
                      onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                      className="w-full border-2 border-border focus:border-primary transition-swiss resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground font-display font-bold text-sm tracking-wide uppercase transition-swiss hover:bg-foreground hover:text-background active:translate-x-[-1px] active:translate-y-[-1px]"
                  >
                    Enviar Mensagem
                  </Button>
                </form>
              </div>

              {/* Contact Info - 5 colunas */}
              <div className="lg:col-span-5 space-y-6">
                <div className="bg-background p-8 border-l-4 border-primary">
                  <h3 className="font-display font-bold text-sm uppercase tracking-wide mb-4">
                    E-mail
                  </h3>
                  <a
                    href="mailto:contato@parametrizabim.com"
                    className="font-mono text-xl text-foreground hover:text-primary transition-swiss break-all"
                  >
                    contato@parametrizabim.com
                  </a>
                </div>

                <div className="bg-background p-8 border-l-4 border-primary">
                  <h3 className="font-display font-bold text-sm uppercase tracking-wide mb-6">
                    Ações Rápidas
                  </h3>
                  <div className="space-y-3">
                    <a
                      href="mailto:contato@parametrizabim.com"
                      className="flex items-center gap-3 px-6 py-3 border-2 border-foreground text-foreground font-display font-bold text-sm tracking-wide uppercase transition-swiss hover:bg-foreground hover:text-background"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="4" width="20" height="16" rx="2"/>
                        <path d="m2 7 10 7 10-7"/>
                      </svg>
                      Enviar E-mail
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
