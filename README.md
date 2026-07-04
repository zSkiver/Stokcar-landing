# Stok Car Landing Page

Landing page institucional da **Stok Car Centro Automotivo**, em Rio Verde - GO.

O projeto foi criado para apresentar serviços automotivos, reforçar confiança visual da marca e direcionar visitantes para orçamento pelo WhatsApp, Instagram e localização no Google Maps.

## Visão Geral

- Página estática em HTML, CSS e JavaScript puro
- Layout responsivo para desktop e mobile
- Seções de hero, serviços, sobre, processo, Instagram e contato
- Integração com WhatsApp para orçamento
- Feed do Instagram via Elfsight
- SEO básico com meta tags, Open Graph e JSON-LD
- Favicons e ícones para navegador/mobile
- Pronto para deploy na Cloudflare Pages

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
- Estilos visuais: `style.css`
- Interações e formulário: `script.js`
- Imagens e ícones: `assets/`

Após alterar:

```bash
git add .
git commit -m "Atualiza landing page"
git push
```

## Observações

O feed do Instagram depende do widget externo da Elfsight. Caso ele não carregue, confira se o app está ativo no painel da Elfsight e se o domínio publicado está autorizado.
