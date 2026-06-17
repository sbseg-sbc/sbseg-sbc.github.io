# SBSeg: Arquivo histórico

**Arquivo histórico das edições do SBSeg**, o *Simpósio Brasileiro de Cibersegurança*
(antigo Simpósio Brasileiro em Segurança da Informação e de Sistemas Computacionais),
promovido pela **Comissão Especial de Cibersegurança (CESeg)** da
**Sociedade Brasileira de Computação (SBC)**.

Este repositório funciona como um arquivo no espírito do *Internet Archive*: um
**índice cronológico** das edições do evento com **cópias estáticas preservadas** dos
sites de cada edição, navegáveis offline caso o site original saia do ar.

🔗 **Site:** https://sbseg-sbc.github.io/

## O que está aqui

- **Índice de edições** (2011–2025) na página inicial, cada uma com:
  - **Arquivo offline**: cópia estática preservada do site da edição (quando disponível);
  - **Site original**: link para o site ao vivo (quando ainda no ar);
  - **Logomarca**: página de identidade visual da edição (quando disponível).
- **Recursos transversais** consolidados entre edições:
  - `organizadores/`: Coordenação Geral e do Comitê de Programa por edição;
  - `palestrantes/`: palestrantes convidados (keynotes);
  - `premiacoes/`: trabalhos premiados, por edição e categoria;
  - `patrocinadores/`: patrocinadores e apoiadores, por cota.

## Estrutura

```
index.html              Índice cronológico das edições (fonte única: array EDITIONS)
sbsegYYYY/              Cópia estática preservada da edição de cada ano
organizadores/ ...      Páginas transversais (palestrantes, premiações, etc.)
assets/                 Logomarcas e recursos compartilhados
```

A página inicial expõe **metadados estruturados** (`schema.org` JSON-LD) que
classificam o site como uma **coleção arquivística** (`CollectionPage` /
`ArchiveComponent`), com cada edição registrada como parte preservada, para que
buscadores e crawlers reconheçam a natureza de arquivo do projeto.

## Mudança de nome (2025)

Em **2025**, tanto o evento quanto a comissão adotaram nomes mais enxutos. Até a
edição de **2024** vigoravam os nomes longos; a partir de **2025** passaram a valer os
nomes atuais e oficiais. As siglas **SBSeg** e **CESeg** permaneceram.

| | Até 2024 (antigo) | A partir de 2025 (atual) |
|---|---|---|
| **Evento (SBSeg)** | Simpósio Brasileiro em Segurança da Informação e de Sistemas Computacionais | Simpósio Brasileiro de Cibersegurança |
| **Comissão (CESeg)** | Comissão Especial em Segurança da Informação e de Sistemas Computacionais | Comissão Especial de Cibersegurança |

## Cópias preservadas

As cópias offline são espelhos estáticos dos sites originais, capturados para
preservação histórica. Conteúdo dinâmico (formulários, submissões, áreas restritas)
não é funcional nas cópias. Os **anais** completos permanecem na SOL/SBC:
https://sol.sbc.org.br/index.php/sbseg

## Créditos

Mantido pela **Comissão Especial de Cibersegurança (CESeg)**
(https://ceseg-sbc.github.io), da **Sociedade Brasileira de Computação (SBC)**
(https://www.sbc.org.br).
