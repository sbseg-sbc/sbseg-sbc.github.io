# SBSeg 2021 — Cópia estática para arquivamento

Cópia estática e navegável do site **SBSeg 2021** (XXI Simpósio Brasileiro de Segurança da
Informação e de Sistemas Computacionais — nome da época), capturada em 2026-06-16 para fins
de arquivamento a partir de https://sbseg2021.ufpa.br. A edição foi organizada pela
Universidade Federal do Pará (UFPA), em formato remoto.

## Como navegar

Abra **`index.html`** (na raiz desta pasta) em qualquer navegador — ele redireciona para a
homepage real. Alternativamente, abra direto `sbseg2021.ufpa.br/index.html`.

Não é necessário servidor web; basta abrir os arquivos via `file://`.

## Estrutura

- `index.html` — redirecionamento de conveniência para a homepage.
- `sbseg2021.ufpa.br/` — conteúdo do site (HTML, CSS, JS, imagens, PDFs).
  - Páginas em português e na versão em inglês (`en/`).

## Características da cópia

- **Estática**: apenas o HTML final renderizado pelo PHP; não há PHP executável, banco de
  dados nem formulários funcionais.
- **Páginas convertidas para `.html`**: o site original servia as páginas como `.php`. Para
  navegação offline confiável (sem servidor), todas as 56 páginas `.php` foram renomeadas
  para `.html` e os ~650 links internos foram reescritos de `.php` para `.html` (preservando
  âncoras `#` e links externos que contêm `.php`).
- **Links internos** foram reescritos para caminhos relativos — navegação 100% local.
- **Armadilha de recursão corrigida**: o site original encadeia o seletor de idioma de forma
  relativa (`en/` → `en/en/` → `en/en/en/` …), o que faz um espelhamento ingênuo entrar em
  loop infinito. A captura usou `--reject-regex '/en/en'` para manter apenas o nível real
  `/en/`, evitando a duplicação.
- **Links externos** (UFPA, SBC, redes sociais, fontes/JS via CDN) continuam apontando para a
  web — são recursos/navegação de saída e não fazem parte deste arquivo.

## Conteúdo capturado

- 65 páginas HTML/PHP (português + 31 em inglês)
- ~48 MB de conteúdo total
- 82 imagens, 8 PDFs, 11 CSS, 9 JS
