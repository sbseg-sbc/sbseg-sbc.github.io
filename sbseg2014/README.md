# SBSeg 2014 — Cópia estática para arquivamento

Cópia estática e navegável offline do site **SBSeg 2014** (XIV Simpósio Brasileiro em
Segurança da Informação e de Sistemas Computacionais — nome da época), capturada em
2026-06-17 para fins de arquivamento a partir de https://www.sbseg2014.dcc.ufmg.br.
A edição foi organizada pelo Departamento de Ciência da Computação (DCC) da Universidade
Federal de Minas Gerais (UFMG), em Belo Horizonte.

## Como navegar

Abra **`index.html`** (na raiz desta pasta) em qualquer navegador — ele redireciona para a
homepage real. Alternativamente, abra direto `www.sbseg2014.dcc.ufmg.br/index.html`.

Não é necessário servidor web; basta abrir os arquivos via `file://`.

O site é bilíngue (Português / English); a versão em inglês está em
`www.sbseg2014.dcc.ufmg.br/eng/`.

## Estrutura

- `index.html` — redirecionamento de conveniência para a homepage.
- `www.sbseg2014.dcc.ufmg.br/` — conteúdo do site (HTML, CSS, JS, imagens, PDFs).

## Características da cópia

- **Estática**: o site original é HTML estático servido por Apache.
- **URLs sem extensão convertidas**: o servidor original usava URLs sem extensão (ex.: `/evento`).
  Cada página foi salva como `evento.html` e os links internos reescritos para apontar para os
  arquivos `.html` locais, garantindo navegação 100% offline (`file://`) e no GitHub Pages.
- **Páginas com sub-recursos** (ex.: `onde-ficar/`, `eng/`, `eng/accommodation/`) foram
  preservadas como diretórios com `index.html`, mantendo os PDFs anexos no lugar.
- **Links externos** (Infraero, NIST, TripAdvisor, fontes do Google) continuam apontando para a
  web — não fazem parte deste arquivo.

## Conteúdo capturado

- 30 páginas HTML (PT + EN)
- ~136 MB de conteúdo total
- 164 imagens, 12 PDFs
