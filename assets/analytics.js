/*
 * analytics.js: medição de acesso das páginas curadas do arquivo histórico do SBSeg.
 *
 * Duas ferramentas, ambas sem cookies e sem identificação pessoal do visitante:
 *   1. GoatCounter, painel em https://sbseg.goatcounter.com
 *   2. Cloudflare Web Analytics, painel no dashboard da Cloudflare
 *
 * Privacidade (LGPD): este loader respeita o sinal Do Not Track do navegador e
 * não mede acessos locais (localhost / 127.0.0.1). Como nenhuma das duas
 * ferramentas grava cookies nem identifica a pessoa, não é preciso banner de
 * consentimento.
 *
 * Configuração: para trocar de conta, edite apenas as duas constantes abaixo.
 * Deixar o valor com o texto "GOATCOUNTER" ou "CLOUDFLARE_TOKEN" desliga a
 * respectiva ferramenta, útil enquanto uma das contas ainda não existe.
 */
(function () {
  'use strict';

  var GC_ENDPOINT = 'https://sbseg.goatcounter.com/count';
  var CF_TOKEN    = 'ea63774d907345ecab54d72ddeddddd6';

  // Respeita Do Not Track em qualquer variante conhecida do sinal.
  var dnt = navigator.doNotTrack || window.doNotTrack || navigator.msDoNotTrack;
  if (dnt === '1' || dnt === 'yes') return;

  // Não mede desenvolvimento local nem previews servidos sem host.
  var host = location.hostname;
  if (host === 'localhost' || host === '127.0.0.1' || host === '::1' || host === '') return;

  // GoatCounter: o count.js oficial lê o endpoint do atributo data-goatcounter.
  if (GC_ENDPOINT.indexOf('GOATCOUNTER') === -1) {
    var gc = document.createElement('script');
    gc.async = true;
    gc.src = '//gc.zgo.at/count.js';
    gc.setAttribute('data-goatcounter', GC_ENDPOINT);
    document.head.appendChild(gc);
  }

  // Cloudflare Web Analytics: só dispara quando o token real está preenchido.
  if (CF_TOKEN.indexOf('CLOUDFLARE_TOKEN') === -1) {
    var cf = document.createElement('script');
    cf.defer = true;
    cf.src = 'https://static.cloudflareinsights.com/beacon.min.js';
    cf.setAttribute('data-cf-beacon', JSON.stringify({ token: CF_TOKEN }));
    document.head.appendChild(cf);
  }
})();
