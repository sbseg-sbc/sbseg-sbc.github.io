# SBSeg 2024 — Cópia estática para arquivamento

Cópia estática e navegável offline do site **Simpósio Brasileiro de Cibersegurança 2024**
(https://sbseg2024.ita.br), capturada em 2026-06-15 para fins de arquivamento. O evento foi
realizado no Instituto Tecnológico de Aeronáutica (ITA), em São José dos Campos, de 16 a 19
de setembro de 2024.

## Como navegar

Abra **`index.html`** (na raiz desta pasta) em qualquer navegador — ele redireciona para a
homepage real. Alternativamente, abra direto
`sbseg2024.ita.br/index.html`.

Não é necessário servidor web; basta abrir os arquivos via `file://`.

## Estrutura

- `index.html` — redirecionamento de conveniência para a homepage.
- `sbseg2024.ita.br/` — conteúdo do site (HTML, CSS, JS, imagens, fontes, PDFs).
  - Páginas em português e na versão em inglês (`en/`).

## Características da cópia

- **Estática e sem gerenciamento**: o site original é WordPress (com Polylang para os idiomas
  e Quform para formulários), mas aqui há apenas o HTML final renderizado. Não há PHP, banco
  de dados, painel administrativo nem formulários funcionais.
- **Links internos** foram reescritos para caminhos relativos — navegação 100% local,
  inclusive o alternador de idioma (PT ⇆ EN).
- **Sem rastreamento**: o site original não usa Google Analytics, banners de consentimento
  (OneTrust/cookielaw) nem outros scripts de rastreamento.
- **E-mails** aparecem em texto simples, como no site original (sem ofuscação).
- **Metadados do WordPress** que apontam para a API REST (`/wp-json/`, links de descoberta
  oEmbed/RSD no `<head>`) permanecem como URLs absolutas. São apenas dicas de descoberta, não
  são carregadas durante a navegação normal e não afetam a cópia offline.
- **Links externos** (hotéis, ITA, SBC, edições anteriores do evento, redes sociais, anais)
  continuam apontando para a web — são navegação de saída e não fazem parte deste arquivo.
- Um link interno com erro de digitação no site original
  (`/autores/suggestoes-para-artefatos/`, com "g" duplicado) foi preservado como está, pois
  também aponta para uma página inexistente no site original.

## Conteúdo capturado

- 112 páginas HTML (português + inglês)
- ~91 MB de conteúdo total
- 408 imagens, 38 arquivos de fonte, 21 CSS, 26 JS, 3 PDFs
