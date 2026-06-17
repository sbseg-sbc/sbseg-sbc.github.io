# SBSeg 2012 — Cópia estática para arquivamento

Cópia estática e navegável offline do site **SBSeg 2012** (XII Simpósio Brasileiro em
Segurança da Informação e de Sistemas Computacionais — nome da época), capturada em
2026-06-17 para fins de arquivamento a partir de https://sbseg2012.ppgia.pucpr.br.
A edição foi organizada pelo Programa de Pós-Graduação em Informática (PPGIa) da Pontifícia
Universidade Católica do Paraná (PUCPR), em Curitiba.

## Como navegar

Abra **`index.html`** (na raiz desta pasta) em qualquer navegador — ele redireciona para a
homepage real. Alternativamente, abra direto `sbseg2012.ppgia.pucpr.br/index.html`.

Não é necessário servidor web; basta abrir os arquivos via `file://`.

## Estrutura

- `index.html` — redirecionamento de conveniência para a homepage.
- `sbseg2012.ppgia.pucpr.br/` — conteúdo do site (HTML, CSS, imagens, PDFs e documentos).

## Características da cópia

- **Roteamento por query-string convertido**: o site original era um front-controller PHP que
  servia cada seção via `?pg=NOME` (ex.: `?pg=programacao`). Como servidores web ignoram a
  query string ao servir arquivos estáticos, cada seção foi capturada e salva como um arquivo
  próprio (`programacao.html`, `evento.html`, etc.) e os links internos reescritos de
  `?pg=NOME` para `NOME.html` (`?pg=inicio` → `index.html`). Navegação 100% offline.
- **Documentos** (anais, minicursos, chamadas, cartazes) preservados em `@docs/`.
- **Links externos** (SBC, PUCPR, UFPR, UTFPR, Google Analytics, banner de cookies via CDN)
  continuam apontando para a web — não fazem parte deste arquivo.

## Páginas capturadas

inicio, evento, comites, chamadas, inscricoes, programacao, premiacao, viagemeturismo,
contato, ctdseg (CTDSeg), wfc (WFC), wgid (WGID), wticg (WTICG).

## Conteúdo capturado

- 14 páginas HTML
- ~67 MB de conteúdo total
- 40 imagens, 21 PDFs e documentos anexos
