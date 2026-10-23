# SBSeg 2016 · Cópia estática do site oficial

A **XVI edição do SBSeg** (Simpósio Brasileiro em Segurança da Informação e de Sistemas Computacionais) foi realizada em **Niterói (RJ), de 7 a 10 de novembro de 2016**, organizada pelo Instituto de Computação da Universidade Federal Fluminense (UFF), em parceria com a UFRJ, e promovida pela Sociedade Brasileira de Computação (SBC).

Esta pasta contém a **cópia estática** do site oficial https://sbseg2016.ic.uff.br/ (PHP com páginas estáticas, PT e EN), espelhada em 2026-10-23 com o site original ainda no ar, e uma **página informativa** compilada a partir dos anais oficiais do evento.

## Como navegar

Abra **`index.html`** nesta pasta (redireciona para `sbseg2016.ic.uff.br/pt/index.html`) em qualquer navegador. Não é necessário servidor web. A versão em inglês está em `sbseg2016.ic.uff.br/en/index.html`, e as bandeiras no topo das páginas alternam entre os idiomas.

## Estrutura

- `sbseg2016.ic.uff.br/`: espelho do site (home, chamadas, comitês, programação, palestrantes, trabalhos aceitos por trilha, minicursos, trabalhos premiados, certificados, local, inscrições e contato), 29 páginas PT/EN + assets, incluindo os anais por artigo (`pt/files/anais/`) e os capítulos de minicursos em PDF (`pt/files/`).
- `reconstrucao.html`: página informativa (local, datas, organização, números, palestras e a lista completa dos trabalhos publicados: trilha principal, CTDSeg, WTICG, WGID, WFC e WRAC+).
- `sources/sbseg-2016-anais.zip`, `.z01` e `.z02`: anais completos do SBSeg 2016 (SBC, ISSN 2176-0063, 789 páginas, PDF de 56 MB) em zip dividido em três partes, cada uma abaixo de 50 MB (limite de aviso do GitHub). É o mesmo arquivo servido pelo site em `pt/files/anais.pdf` e preservado também em https://www.brunoribas.com.br/sc/2017-1/sbseg-2016-anais.pdf (MD5 `3dc0301b35ebdb5c7411a989c9d9cf02`). Os links "anais" das páginas da cópia apontam para o `.zip`.

## Como extrair os anais completos

Baixe as três partes para a mesma pasta e abra o `.zip` com o 7-Zip (`7zz x sbseg-2016-anais.zip`) ou com o The Unarchiver. Sem 7-Zip, concatene as partes na ordem e descompacte: `cat sbseg-2016-anais.z01 sbseg-2016-anais.z02 sbseg-2016-anais.zip > anais.zip && unzip anais.zip` (o `unzip` avisa sobre o offset e se corrige sozinho). Não use `zip -s 0` do macOS para juntar as partes: o zip 3.0 da Apple gera um arquivo truncado.

## Notas do espelhamento

- Espelhado com `wget --mirror --convert-links --page-requisites --no-parent`, semeado em `/`, `/pt/index.php` e `/en/index.php`.
- Pós-processamento para o GitHub Pages: as páginas `.php` foram renomeadas para `.html` e os links internos reescritos (os duplicados `index.php` foram descartados em favor de `index.html`).
- Codificação: o servidor original declara ISO-8859-1 apenas no cabeçalho HTTP, e os arquivos misturam cp1252 e UTF-8. Todas as páginas foram convertidas para UTF-8 com `<meta charset="utf-8">` no `<head>`; com isso, `palestrantes` e `inscricoes`, que aparecem com acentos quebrados no site ao vivo, passam a exibir o texto corretamente.
- Imagens do seletor de idioma e a tabela de inscrições em inglês, que o wget não capturou, foram baixadas à parte. `en/images/intel.jpg` não existe no site original (404) e segue ausente.
- As páginas em inglês apontavam para `en/files/anais.pdf` e `en/files/minicursos.pdf`, que dão 404 no site original; os links agora levam ao zip dos anais e a `pt/files/minicursos.pdf`.

## Fontes

- Site oficial: https://sbseg2016.ic.uff.br/ (ativo em 2026-10-23).
- Anais do SBSeg 2016, SBC, ISSN 2176-0063 (front matter: comitês, mensagens das coordenações e sumário).
- Página de palestrantes do site original (via Internet Archive, captura de 2017): https://web.archive.org/web/20170101000000/http://sbseg2016.ic.uff.br/pt/palestrantes.php
