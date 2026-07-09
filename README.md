# Stok Car Landing Page

Landing page institucional da **Stok Car Centro Automotivo**, em Rio Verde - GO.

O projeto foi criado para apresentar serviços automotivos, reforçar confiança visual da marca e converter visitantes em orçamento pelo WhatsApp, formulário, Instagram e localização no Google Maps.

## Visão Geral

- Página estática em HTML, CSS e JavaScript puro, montada a partir de partials (ver [Estrutura do HTML](#estrutura-do-html))
- Layout responsivo para desktop e mobile
- Seções: Hero, Serviços (com ofertas), Sobre, Atendimento, Frotas, Instagram, Dúvidas Frequentes (FAQ) e Contato
- Sistema de cores com significado (ver [Sistema de Cores](#sistema-de-cores))
- Ícones em sprite SVG único (`assets/icons.svg`), sem duplicação de markup
- Fotos reais da loja e dos serviços, não apenas imagens de banco de imagens
- Credenciais reais: garantia de 90 dias e +8.000 carros atendidos
- Ofertas: montagem grátis na compra de pneus e combo alinhamento + balanceamento
- Formas de pagamento (Pix, débito, dinheiro, crédito em até 10x) e atendimento a frotas/empresas
- Formulário de orçamento exige placa e modelo do veículo, com redirecionamento para o WhatsApp
- FAQ com dados estruturados (schema.org `FAQPage`) para aparecer no Google
- Integração com WhatsApp para orçamento (botão flutuante, ações rápidas no mobile e múltiplos CTAs)
- Feed do Instagram via Elfsight
- SEO com meta tags, Open Graph, JSON-LD (`AutoRepair` + `FAQPage`)
- Cabeçalhos de segurança básicos via `_headers` (ver [Segurança](#segurança))
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

## Estrutura do HTML

O `index.html` final **é gerado**, não é editado diretamente. O código fonte fica dividido em:

```txt
index.template.html      # esqueleto da página com marcadores {{include:nome.html}}
partials/
├── head-meta.html        # meta tags, Open Graph, JSON-LD, favicons
├── navbar.html
├── hero.html
├── workshop-strip.html    # faixa animada com a lista de serviços
├── services.html          # grid de serviços + ofertas + banda de conversão
├── why-us.html             # seção "Sobre"
├── process.html            # seção "Atendimento" (01-04)
├── fleet-banner.html
├── instagram.html
├── faq.html
├── contact.html
├── footer.html
└── floating-cta.html       # botão flutuante do WhatsApp + ações rápidas mobile
build.py                  # monta index.html a partir do template + partials
```

Cada arquivo em `partials/` corresponde a uma seção real da página, na mesma ordem em que aparecem no site e nos comentários de seção do `style.css`.

**Fluxo de edição:**

1. Edite o conteúdo dentro de `partials/*.html` (ou o esqueleto em `index.template.html`)
2. Rode `python build.py` para regerar o `index.html`
3. Teste localmente (veja [Rodando Localmente](#rodando-localmente))
4. Commite **tudo**: os partials alterados **e** o `index.html` regerado

O `index.html` continua sendo um arquivo estático comum — o Cloudflare Pages não precisa rodar nenhum build (`Build command: exit 0` continua correto). O `build.py` é só uma conveniência local para não editar um HTML gigante em um único arquivo.

> Nunca edite `index.html` diretamente — a próxima vez que alguém rodar `python build.py`, sua alteração seria perdida.

## Rodando Localmente

Na pasta do projeto, rode um servidor local simples:

```bash
python -m http.server 8000
```

Depois acesse:

```txt
http://127.0.0.1:8000/
```

O sprite de ícones (`assets/icons.svg`) é carregado via `<use href="assets/icons.svg#nome">`, o que exige servidor local (`http://`) — não funciona abrindo o `index.html` direto via `file://`.

## Deploy na Cloudflare Pages

Configuração recomendada:

```txt
Framework preset: None
Build command: exit 0
Build output directory: /
Production branch: main
```

Depois de conectar o repositório na Cloudflare Pages, cada push na branch `main` publica uma nova versão automaticamente.

## Segurança

O arquivo `_headers` na raiz do projeto é lido automaticamente pelo Cloudflare Pages e aplica cabeçalhos básicos de segurança em todas as respostas:

- `X-Content-Type-Options: nosniff` — evita que o navegador tente "adivinhar" tipos de arquivo
- `X-Frame-Options: SAMEORIGIN` — impede que o site seja carregado dentro de um `<iframe>` em outro domínio (clickjacking)
- `Referrer-Policy: strict-origin-when-cross-origin` — limita quanta informação de navegação vaza para outros sites
- `Permissions-Policy` — desativa câmera, microfone, geolocalização e outras APIs que o site não usa

Não há Content-Security-Policy configurada: o site depende de scripts de terceiros (Google Fonts, Elfsight) cujos domínios internos podem mudar sem aviso, e uma CSP mal configurada quebraria o feed do Instagram silenciosamente. Se for adicionar uma CSP no futuro, teste bem o widget da Elfsight antes de publicar.

Todo link externo (`target="_blank"`) já usa `rel="noopener"` para evitar que a página aberta tenha acesso à aba original.

## Links Principais

- WhatsApp: `https://wa.me/5564996429684`
- Instagram: `https://www.instagram.com/stokcarrv/`
- Maps: `https://maps.app.goo.gl/Ynz9KPYM1hNTFhJD9`

## Manutenção

Para atualizar textos, serviços ou links:

- Conteúdo principal: `partials/*.html` (edite e rode `python build.py` — ver [Estrutura do HTML](#estrutura-do-html))
- Ícones: `assets/icons.svg` (sprite com `<symbol>` reutilizável via `<use>`)
- Estilos visuais: `style.css` (organizado por seção, com comentários `/* ==== NOME ==== */` seguindo a mesma ordem do HTML)
- Interações e formulário: `script.js`
- Imagens: `assets/`

Ao adicionar um novo serviço, atualize também: `partials/workshop-strip.html` (faixa animada), `partials/contact.html` (dropdown do formulário), `partials/footer.html` (lista "Serviços") e o JSON-LD (`hasOfferCatalog`) em `partials/head-meta.html`. Depois rode `python build.py`.

Após alterar:

```bash
python build.py
git add .
git commit -m "Atualiza landing page"
git push
```

## Observações

O feed do Instagram depende do widget externo da Elfsight. Caso ele não carregue, confira se o app está ativo no painel da Elfsight e se o domínio publicado está autorizado.
