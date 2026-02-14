# Brainstorming de Design - Parametriza BIM

## Abordagem 1: Precisão Técnica Suíça

<response>
<text>
**Design Movement**: Swiss International Style (Estilo Tipográfico Internacional) com influências de Brutalismo Digital

**Core Principles**:
- Hierarquia tipográfica rígida e matemática
- Grid modular assimétrico baseado em proporções áureas
- Funcionalidade absoluta: cada elemento tem propósito claro
- Contraste dramático entre espaços vazios e blocos densos de informação

**Color Philosophy**: 
Paleta monocromática de cinzas técnicos (slate 50-900) com um único acento de azul estrutural (blue 600) usado exclusivamente para ações primárias. A intenção emocional é transmitir precisão, confiabilidade e seriedade técnica. Fundos em off-white (slate 50) com textura sutil de papel técnico.

**Layout Paradigm**: 
Grid assimétrico de 12 colunas com quebras intencionais. Seções alternadas entre largura completa e containers estreitos (max-w-4xl). Hero section com texto alinhado à esquerda ocupando 7 colunas, espaço negativo à direita. Cards de serviços em layout de tijolos (masonry) com alturas variadas.

**Signature Elements**:
- Linhas finas horizontais (1px) separando seções como réguas técnicas
- Números grandes em fonte mono (JetBrains Mono) para estatísticas e benefícios
- Cantos retos absolutos (border-radius: 0) em todos os elementos

**Interaction Philosophy**: 
Transições instantâneas e precisas. Hover states com mudança de cor sólida sem gradientes. Scroll reveal com fade-in linear de 200ms. Botões com feedback tátil através de translate(-1px, -1px) no active state.

**Animation**: 
Minimalista e funcional. Elementos entram com fade-in simples (opacity 0 → 1, 300ms ease-out). Sem animações decorativas. Hover em cards: elevação sutil com shadow-md e scale(1.01) em 150ms.

**Typography System**:
- Display: Space Grotesk (700) para headlines - geométrica e técnica
- Body: Inter (400, 500) para textos corridos
- Accent: JetBrains Mono (500) para números e dados técnicos
- Hierarquia: H1 (48px), H2 (32px), H3 (24px), Body (16px), Small (14px)
</text>
<probability>0.08</probability>
</response>

## Abordagem 2: Modernismo Fluido

<response>
<text>
**Design Movement**: Modernismo Orgânico com influências de New Brutalism e Soft UI

**Core Principles**:
- Formas fluidas e orgânicas contrastando com dados técnicos estruturados
- Camadas de profundidade através de glassmorphism e sombras suaves
- Equilíbrio entre suavidade visual e informação densa
- Movimento implícito através de curvas e diagonais

**Color Philosophy**: 
Base em tons terrosos modernos: bege quente (stone 100) como fundo principal, verde-oliva profundo (emerald 800) para textos, e laranja queimado (orange 500) como acento energético. A intenção é humanizar a tecnologia BIM, tornando-a acessível sem perder autoridade. Gradientes sutis de 2-3% entre seções.

**Layout Paradigm**: 
Seções com cortes diagonais usando clip-path (polygon) criando transições fluidas entre blocos. Hero com imagem de fundo em paralaxe sutil. Cards de serviços em grid 3 colunas com bordas arredondadas generosas (rounded-3xl) e espaçamento amplo (gap-8). Containers com max-w-7xl para respiração.

**Signature Elements**:
- Blobs SVG orgânicos como elementos decorativos de fundo
- Glassmorphism em cards (backdrop-blur-md, bg-white/70)
- Ícones com stroke-width de 1.5px em estilo hand-drawn

**Interaction Philosophy**: 
Interações suaves e convidativas. Hover states com lift effect (translateY(-4px) + shadow-xl). Micro-interações em botões: ripple effect sutil. Scroll com parallax em imagens de fundo (0.5x velocidade).

**Animation**: 
Fluida e orgânica. Elementos entram com slide + fade combinados (translateY(20px) opacity 0 → translateY(0) opacity 1, 600ms ease-out). Cards em stagger (delay incremental de 100ms). Hover: scale(1.03) com rotate(1deg) em 400ms cubic-bezier(0.34, 1.56, 0.64, 1).

**Typography System**:
- Display: Outfit (600, 700) - geométrica mas amigável, com curvas suaves
- Body: Manrope (400, 500) - humanista e legível
- Accent: Outfit (800) para CTAs
- Hierarquia: H1 (56px), H2 (40px), H3 (28px), Body (17px), Small (15px)
</text>
<probability>0.07</probability>
</response>

## Abordagem 3: Neomorfismo Técnico

<response>
<text>
**Design Movement**: Neomorphism 2.0 com influências de Skeuomorphism Digital e Material Design 3

**Core Principles**:
- Profundidade através de sombras internas e externas criando elementos "embossed"
- Superfícies táteis que simulam materialidade física
- Contraste sutil mas presente entre foreground e background
- Hierarquia através de elevação em múltiplas camadas (z-index visual)

**Color Philosophy**: 
Paleta de cinzas azulados frios: fundo principal em slate 100, elementos em slate 50 e slate 200 para criar relevo. Acento em cyan 600 para tecnologia e teal 700 para confiabilidade. A intenção é criar uma interface que pareça esculpida digitalmente, transmitindo solidez e engenharia de precisão. Gradientes radiais sutis (2-3%) em cards para simular curvatura.

**Layout Paradigm**: 
Layout em camadas com elevações distintas. Hero section com card central flutuante (shadow-2xl) sobre fundo texturizado. Serviços em grid 2x2 com cards neomórficos (inset shadows + outer shadows). Seções com padding generoso (py-24) para criar "respiro" entre camadas. Containers max-w-6xl centralizados.

**Signature Elements**:
- Cards com sombras duplas: inset (0 2px 4px rgba(0,0,0,0.06)) + outer (0 8px 16px rgba(0,0,0,0.1))
- Botões com efeito pressed: inset shadow no active state
- Ícones com gradientes sutis (linear-gradient 135deg) e stroke-width 2px

**Interaction Philosophy**: 
Interações táteis e responsivas. Hover em cards: transição de flat para elevated (shadow-sm → shadow-xl). Botões com animação de "press" (scale(0.98) + inset shadow). Inputs com focus state que "afunda" visualmente (inset shadow aumenta).

**Animation**: 
Suave e física. Elementos entram com bounce suave (scale(0.95) opacity 0 → scale(1) opacity 1, 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55)). Hover: lift com spring physics (translateY(-2px) + shadow transition 300ms). Loading states com shimmer effect (gradient animation).

**Typography System**:
- Display: Sora (700, 800) - geométrica moderna com terminais arredondados
- Body: DM Sans (400, 500) - clean e técnica
- Accent: Sora (900) para números e stats
- Hierarquia: H1 (52px), H2 (36px), H3 (26px), Body (16px), Small (14px)
</text>
<probability>0.06</probability>
</response>

---

## Decisão Final

Após análise dos requisitos (site institucional para engenharia BIM, público técnico, transmitir autoridade e precisão), **selecionei a Abordagem 1: Precisão Técnica Suíça**.

**Justificativa**: 
Esta abordagem alinha perfeitamente com o perfil do público-alvo (engenheiros, coordenadores BIM, gestores técnicos) que valorizam clareza, funcionalidade e profissionalismo. O estilo suíço transmite exatamente os valores da Parametriza BIM: precisão, eficiência, padronização e autoridade técnica. A tipografia estruturada e o grid assimétrico criam uma identidade visual forte e memorável, diferenciando-se de sites genéricos de engenharia.
