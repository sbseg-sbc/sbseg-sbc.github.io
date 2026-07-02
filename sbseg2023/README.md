# SBSeg 2023 · Cópia estática do site oficial

A **XXIII edição do SBSeg** (Simpósio Brasileiro em Segurança da Informação e de Sistemas
Computacionais) foi realizada em **Juiz de Fora (MG), de 18 a 21 de setembro de 2023**, organizada
pela Universidade Federal de Juiz de Fora (UFJF) e promovida pela SBC/CESeg.

Esta pasta contém a **cópia estática** do site oficial https://sbseg2023.ufjf.br/ (WordPress 6.7,
PT e EN), espelhada em 2026-07-02 com o site original ainda no ar.

## Como navegar

Abra **`sbseg2023.ufjf.br/index.html`** em qualquer navegador ou sirva a pasta com um servidor
web simples (`python3 -m http.server`). A versão em inglês está em `sbseg2023.ufjf.br/en/home/`.

## Estrutura

- `sbseg2023.ufjf.br/`: espelho do site (home com comitês, fotos e patrocinadores; chamadas,
  programação por trilha, palestrantes, local, inscrições), 30 páginas PT/EN + assets.

## Notas do espelhamento

- Semeado a partir do `wp-sitemap.xml` (31 URLs), com `wget --mirror --convert-links
  --page-requisites --no-parent`, rejeitando `wp-json`, `xmlrpc`, feeds e comentários.
- Pós-processamento: assets com query string (`style.css?ver=...`) renomeados para o nome limpo
  e duplicatas de shortlink (`index.html?p=NNN`) removidas, para compatibilidade com GitHub Pages.
- A galeria de fotos da home usa um plugin do Google Drive que requer JavaScript online; os
  álbuns originais estão em pastas públicas do Google Drive (links preservados na página
  `fotos/` do arquivo histórico).
