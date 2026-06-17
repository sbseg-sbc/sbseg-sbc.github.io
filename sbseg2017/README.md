# SBSeg 2017 — Cópia estática para arquivamento

Cópia estática e navegável offline do site **SBSeg 2017** (XVII Simpósio Brasileiro em
Segurança da Informação e de Sistemas Computacionais — nome da época), capturada em
2026-06-17 para fins de arquivamento a partir de https://sbseg2017.redes.unb.br.
A edição foi realizada em **Brasília (DF)**, sediada pela Universidade de Brasília (UnB),
e promovida pela Sociedade Brasileira de Computação (SBC).

## Como navegar

Abra **`index.html`** (na raiz desta pasta) em qualquer navegador — ele redireciona para a
homepage real. Alternativamente, abra direto `sbseg2017.redes.unb.br/index.html`.

Não é necessário servidor web; basta abrir os arquivos via `file://`.

## Características da cópia

- **WordPress** espelhado 100% estático com `wget` (páginas salvas como `path/index.html`).
- **Limpeza de segurança**: o site original encontra-se **comprometido**, com um bloco oculto
  de links de spam SEO (`<div style="display:none">…</div>`) injetado pelo servidor **antes**
  do `<!DOCTYPE>` em todas as páginas. Esse bloco foi **removido de todos os 37 arquivos HTML**
  desta cópia (o conteúdo legítimo da página foi preservado integralmente).
- **Links internos** reescritos para caminhos relativos (navegação local).
- **Links externos** (UnB, SBC, fontes, etc.) continuam apontando para a web.

## Conteúdo capturado

- 37 páginas HTML
- 2 PDFs (Anais e Livro de Minicursos)
- Galeria de fotos do evento (`wp-content/uploads/2017/11/`) em alta resolução.

> **Nota sobre as fotos / tamanho:** a galeria de fotos do evento é volumosa
> (várias centenas de imagens em resolução original, ~1 GB+). Conforme a arquitetura de
> galeria do projeto, os **originais em alta resolução devem ser migrados para o Internet
> Archive**, mantendo no repositório apenas miniaturas (thumbnails) para a galeria integrada.
> A cópia local completa serve de insumo para esse upload.

## Estrutura

- `index.html` — redirecionamento de conveniência para a homepage.
- `sbseg2017.redes.unb.br/` — conteúdo do site (HTML, CSS, JS, imagens, PDFs, galeria de fotos).
