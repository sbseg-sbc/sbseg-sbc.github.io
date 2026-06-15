# SBSeg 2025 — Cópia estática para arquivamento

Cópia estática e navegável offline do site **Simpósio Brasileiro de Cibersegurança 2025**
(https://sbseg2025.ppgia.pucpr.br), capturada em 2026-06-15 para fins de arquivamento.

## Como navegar

Abra **`index.html`** (na raiz desta pasta) em qualquer navegador — ele redireciona para a
homepage real. Alternativamente, abra direto
`sbseg2025.ppgia.pucpr.br/index.html`.

Não é necessário servidor web; basta abrir os arquivos via `file://`.

## Estrutura

- `index.html` — redirecionamento de conveniência para a homepage.
- `sbseg2025.ppgia.pucpr.br/` — conteúdo do site (HTML, CSS, JS, imagens, fontes, PDFs).
  - Páginas em português e na versão em inglês (`en/`).
- `use.fontawesome.com/` — biblioteca de ícones FontAwesome (CSS + webfonts), hospedada
  localmente para que os ícones funcionem offline.

## Características da cópia

- **Estática e sem gerenciamento**: o site original é WordPress, mas aqui há apenas o HTML
  final renderizado. Não há PHP, banco de dados, painel administrativo nem formulários
  funcionais.
- **Links internos** foram reescritos para caminhos relativos — navegação 100% local.
- **Banner de cookies / consentimento (OneTrust/cookielaw)** e scripts de rastreamento
  foram removidos de todas as páginas.
- **E-mails** continuam protegidos pelo mecanismo de ofuscação do Cloudflare; o script de
  decodificação foi salvo localmente, então os endereços aparecem corretamente no navegador.
- **Links externos** (hotéis, agências de viagem, redes sociais, edições anteriores do
  evento, Google Drive/Docs, anais no ceseg.org) continuam apontando para a web — são
  navegação de saída e não fazem parte deste arquivo.

## Conteúdo capturado

- 67 páginas HTML (português + inglês)
- ~67 MB de conteúdo total (imagens, fontes, CSS, JS, 2 PDFs)
