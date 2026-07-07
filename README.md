# Stok Car Landing Page

Landing page institucional da **Stok Car Centro Automotivo**, em Rio Verde - GO.

O projeto foi criado para apresentar serviços automotivos, reforçar confiança visual da marca e converter visitantes em orçamento pelo WhatsApp, formulário, Instagram e localização no Google Maps.

## Visão Geral

- Página estática em HTML, CSS e JavaScript puro
- Layout responsivo para desktop e mobile
- Seções: Hero, Serviços (com ofertas), Sobre, Atendimento, Frotas, Instagram, Dúvidas Frequentes (FAQ) e Contato
- Sistema de cores com significado (ver [Sistema de Cores](#sistema-de-cores))
- Fotos reais da loja e dos serviços, não apenas imagens de banco de imagens
- Credenciais reais: garantia de 90 dias e +8.000 carros atendidos
- Ofertas: montagem grátis na compra de pneus e combo alinhamento + balanceamento
- Formas de pagamento (Pix, débito, dinheiro, crédito em até 10x) e atendimento a frotas/empresas
- Formulário de orçamento exige placa e modelo do veículo, com redirecionamento para o WhatsApp
- FAQ com dados estruturados (schema.org `FAQPage`) para aparecer no Google
- Integração com WhatsApp para orçamento (botão flutuante, ações rápidas no mobile e múltiplos CTAs)
- Feed do Instagram via Elfsight
- SEO com meta tags, Open Graph, JSON-LD (`AutoRepair` + `FAQPage`)
- Favicons e ícones para navegador/mobile
- Pronto para deploy na Cloudflare Pages

## Sistema de Cores

As cores da marca (azul, branco, laranja) seguem uma regra fixa — evite usá-las de forma decorativa:

| Cor | Papel | Onde usar |
|---|---|---|
| **Azul marinho** | Fundação da marca | Hero, rodapé, cards de destaque intencional (ex: diferenciais em `.feature-card`) |
| **Branco / claro** | Corpo da página | Fundo das seções de conteúdo (Serviços, Sobre, Atendimento, FAQ, Contato) |
| **Laranja** | Ação e destaque | Kickers, números, bordas de destaque, botões de ação secundária (formulário, Instagram) |
| **Verde** | Conversão via WhatsApp | Todo botão que leva para o WhatsApp — nunca usar para outra coisa |

## Tecnologias

- HTML5
- CSS3
- JavaScript
- Cloudflare Pages
- Elfsight Instagram Feed

## Estrutura

```txt
.
├── assets/
│   ├── fachada 1.png
│   ├── fachada 2.png
│   ├── fachada 3.png
│   ├── patio 1.png
│   ├── patio 2.png
│   ├── pneus.png
│   ├── alinhamento.png
│   ├── balanceamento.jpg
│   ├── freios.jpg
│   ├── suspens.jpg
│   ├── troca de óleo.jpg
│   ├── diagnostico.jpg
│   ├── logo FND INVI.png
│   ├── logo stok.png
│   └── favicon...
├── index.html
├── style.css
├── script.js
├── robots.txt
└── README.md
```

## Rodando Localmente

Na pasta do projeto, rode um servidor local simples:

```bash
python -m http.server 8000
```

Depois acesse:

```txt
http://127.0.0.1:8000/
```

Também é possível abrir o `index.html` direto no navegador, mas o servidor local evita problemas com carregamento de assets e scripts externos.

## Deploy na Cloudflare Pages

Configuração recomendada:

```txt
Framework preset: None
Build command: exit 0
Build output directory: /
Production branch: main
```

Depois de conectar o repositório na Cloudflare Pages, cada push na branch `main` publica uma nova versão automaticamente.

## Links Principais

- WhatsApp: `https://wa.me/5564996429684`
- Instagram: `https://www.instagram.com/stokcarrv/`
- Maps: `https://maps.app.goo.gl/Ynz9KPYM1hNTFhJD9`

## Manutenção

Para atualizar textos, serviços ou links:

- Conteúdo principal: `index.html`
- Estilos visuais: `style.css` (organizado por seção, com comentários `/* ==== NOME ==== */` seguindo a mesma ordem do HTML)
- Interações e formulário: `script.js`
- Imagens e ícones: `assets/`

Ao adicionar um novo serviço, atualize também: a faixa animada no topo, o dropdown do formulário de orçamento, a lista "Serviços" do rodapé e o `hasOfferCatalog` no JSON-LD do `<head>`.

Após alterar:

```bash
git add .
git commit -m "Atualiza landing page"
git push
```

## Observações

O feed do Instagram depende do widget externo da Elfsight. Caso ele não carregue, confira se o app está ativo no painel da Elfsight e se o domínio publicado está autorizado.
