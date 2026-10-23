# SBSeg 2016 · Cópia estática do site oficial

A **XVI edição do SBSeg** (Simpósio Brasileiro em Segurança da Informação e de Sistemas Computacionais) foi realizada em **Niterói (RJ), de 7 a 10 de novembro de 2016**, organizada pelo Instituto de Computação da Universidade Federal Fluminense (UFF), em parceria com a UFRJ, e promovida pela Sociedade Brasileira de Computação (SBC).

Esta pasta contém a **cópia estática** do site oficial https://sbseg2016.ic.uff.br/ (PHP com páginas estáticas, PT e EN), espelhada em 2026-10-23 com o site original ainda no ar, e uma **página informativa** compilada a partir dos anais oficiais do evento.

## Como navegar

Abra **`index.html`** nesta pasta (redireciona para `sbseg2016.ic.uff.br/pt/index.html`) em qualquer navegador. Não é necessário servidor web. A versão em inglês está em `sbseg2016.ic.uff.br/en/index.html`, e as bandeiras no topo das páginas alternam entre os idiomas.

## Estrutura

- `sbseg2016.ic.uff.br/`: espelho do site (home, chamadas, comitês, programação, palestrantes, trabalhos aceitos por trilha, minicursos, trabalhos premiados, certificados, local, inscrições e contato), 29 páginas PT/EN + assets, incluindo os anais completos e por artigo (`pt/files/anais/`) e os capítulos de minicursos em PDF (`pt/files/`).
- `reconstrucao.html`: página informativa (local, datas, organização, números, palestras e a lista completa dos trabalhos publicados: trilha principal, CTDSeg, WTICG, WGID, WFC e WRAC+).
- `sources/sbseg-2016-anais.pdf`: anais oficiais do SBSeg 2016 (SBC, ISSN 2176-0063, 789 páginas), preservados a partir de https://www.brunoribas.com.br/sc/2017-1/sbseg-2016-anais.pdf (idêntico, byte a byte, a `sbseg2016.ic.uff.br/pt/files/anais.pdf`).

## Notas do espelhamento

- Espelhado com `wget --mirror --convert-links --page-requisites --no-parent`, semeado em `/`, `/pt/index.php` e `/en/index.php`.
- Pós-processamento para o GitHub Pages: as páginas `.php` foram renomeadas para `.html` e os links internos reescritos (os duplicados `index.php` foram descartados em favor de `index.html`).
- Codificação: o servidor original declara ISO-8859-1 apenas no cabeçalho HTTP, e os arquivos misturam cp1252 e UTF-8. Todas as páginas foram convertidas para UTF-8 com `<meta charset="utf-8">` no `<head>`; com isso, `palestrantes` e `inscricoes`, que aparecem com acentos quebrados no site ao vivo, passam a exibir o texto corretamente.
- Imagens do seletor de idioma e a tabela de inscrições em inglês, que o wget não capturou, foram baixadas à parte. `en/images/intel.jpg` não existe no site original (404) e segue ausente.

## Fontes

- Site oficial: https://sbseg2016.ic.uff.br/ (ativo em 2026-10-23).
- Anais do SBSeg 2016, SBC, ISSN 2176-0063 (front matter: comitês, mensagens das coordenações e sumário).
- Página de palestrantes do site original (via Internet Archive, captura de 2017): https://web.archive.org/web/20170101000000/http://sbseg2016.ic.uff.br/pt/palestrantes.php
