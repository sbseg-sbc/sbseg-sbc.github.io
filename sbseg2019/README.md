# SBSeg 2019 — Cópia estática para arquivamento

Cópia estática e navegável offline do site **SBSeg 2019** (XIX Simpósio Brasileiro de
Segurança da Informação e de Sistemas Computacionais — nome da época),
capturada em 2026-06-16 para fins de arquivamento a partir de https://sbseg2019.ime.usp.br.
A edição foi organizada pelo Instituto de Matemática e Estatística (IME) da Universidade de
São Paulo (USP).

## Como navegar

Abra **`index.html`** (na raiz desta pasta) em qualquer navegador — ele redireciona para a
homepage real. Alternativamente, abra direto `sbseg2019.ime.usp.br/index.html`.

Não é necessário servidor web; basta abrir os arquivos via `file://`.

## Estrutura

- `index.html` — redirecionamento de conveniência para a homepage.
- `sbseg2019.ime.usp.br/` — conteúdo do site (HTML, CSS, JS, imagens, fontes, PDF).
  - Páginas em português e na versão em inglês (`en/`).
  - Os recursos (CSS/JS/imagens) ficam em `SBSeg2019_files/`.

## Características da cópia

- **Estática**: o site original já é estático.
- **Links internos** foram reescritos para caminhos relativos — navegação 100% local,
  inclusive a versão em inglês (`en/`).
- **Links externos** (USP/IME, SBC, fontes do Google, jQuery via CDN, Google Analytics)
  continuam apontando para a web — são recursos/navegação de saída e não fazem parte deste
  arquivo.

## Conteúdo capturado

- 50 páginas HTML (português + inglês)
- ~53 MB de conteúdo total
- 147 imagens, 1 PDF, 8 CSS, 10 JS, 2 fontes
