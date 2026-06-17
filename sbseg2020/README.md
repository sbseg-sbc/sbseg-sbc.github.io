# SBSeg 2020 — Cópia estática para arquivamento

Cópia estática e navegável offline do site **SBSeg 2020** (XX Simpósio Brasileiro em
Segurança da Informação e de Sistemas Computacionais — nome da época), capturada em
2026-06-16 para fins de arquivamento a partir de https://sbseg.sbc.org.br/2020/. A edição
ocorreu de forma remota (online), em outubro de 2020.

## Como navegar

Abra **`index.html`** (na raiz desta pasta) em qualquer navegador — ele redireciona para a
homepage real. Alternativamente, abra direto `sbseg.sbc.org.br/2020/index.html`.

Não é necessário servidor web; basta abrir os arquivos via `file://`.

## Estrutura

- `index.html` — redirecionamento de conveniência para a homepage.
- `sbseg.sbc.org.br/2020/` — conteúdo do site (HTML, CSS, JS, imagens, PDFs).
  - O site original é servido sob o subcaminho `/2020/` do domínio da SBC; a estrutura de
    pastas reflete isso.

## Características da cópia

- **Estática**: o site original já é estático (HTML com assets em `assets/`).
- **Links internos** foram reescritos para caminhos relativos — navegação 100% local.
- **Links externos** (SBC, edições anteriores como `sbseg2019.ime.usp.br`, fontes do Google,
  jQuery via CDN, Google Analytics) continuam apontando para a web — são recursos/navegação
  de saída e não fazem parte deste arquivo.

## Conteúdo capturado

- 36 páginas HTML
- ~17 MB de conteúdo total
- 23 imagens, 18 PDFs, 1 CSS, 1 JS
