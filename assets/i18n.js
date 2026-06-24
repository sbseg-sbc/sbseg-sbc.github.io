/* ──────────────────────────────────────────────────────────────────────────
   SBSeg · arquivo histórico — i18n trilíngue (PT / EN / ES)
   ─────────────────────────────────────────────────────────────────────────
   Progressive enhancement: o texto em PT-BR vive no HTML (funciona sem JS e é
   indexável). Elementos com data-i18n="chave" têm seu conteúdo substituído a
   partir de assets/i18n/{lang}.json. Atributos são traduzidos via
   data-i18n-attr="nomeDoAtributo" (ex.: content de uma meta, ou title).

   O idioma é resolvido por: ?lang= na URL  →  localStorage('sbseg-lang')  →
   idioma do navegador  →  'pt'. A escolha do usuário persiste em localStorage.

   Este script descobre sozinho a pasta de assets a partir do próprio src, de
   modo que funciona tanto na raiz (index.html) quanto nas subpáginas
   (organizadores/, palestrantes/, …) sem ajustes de caminho.
   ────────────────────────────────────────────────────────────────────────── */
(function () {
  "use strict";

  var LANGS = ["pt", "en", "es"];
  var STORE_KEY = "sbseg-lang";

  // Base de assets derivada do src deste script (…/assets/i18n.js → …/assets/).
  var thisScript = document.currentScript ||
    (function () { var s = document.getElementsByTagName("script"); return s[s.length - 1]; })();
  var ASSETS_BASE = thisScript.src.replace(/i18n\.js(?:\?.*)?$/, "");

  var DICT = {};

  function pick() {
    var url = new URLSearchParams(location.search).get("lang");
    var stored = (function () { try { return localStorage.getItem(STORE_KEY); } catch (e) { return null; } })();
    var nav = (navigator.language || "pt").slice(0, 2).toLowerCase();
    var c = url || stored || (LANGS.indexOf(nav) >= 0 ? nav : "pt");
    return LANGS.indexOf(c) >= 0 ? c : "pt";
  }

  // Lookup pontilhado: "footer.gen" → DICT.footer.gen
  function t(key) {
    return key.split(".").reduce(function (o, k) {
      return (o && o[k] != null) ? o[k] : null;
    }, DICT);
  }

  function applyI18n(lang) {
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var val = t(el.getAttribute("data-i18n"));
      if (val == null) return; // chave ausente: mantém o texto atual (fallback PT)
      var attr = el.getAttribute("data-i18n-attr");
      if (el.tagName === "TITLE") document.title = val;
      else if (attr) el.setAttribute(attr, val);
      else el.innerHTML = val;
    });
    document.documentElement.lang = (lang === "pt" ? "pt-BR" : lang);
    document.querySelectorAll(".lang-switch button").forEach(function (b) {
      b.classList.toggle("active", b.dataset.lang === lang);
      b.setAttribute("aria-pressed", b.dataset.lang === lang ? "true" : "false");
    });
  }

  function load(lang) {
    return fetch(ASSETS_BASE + "i18n/" + lang + ".json", { cache: "no-cache" })
      .then(function (r) { return r.ok ? r.json() : {}; })
      .then(function (d) { DICT = d || {}; applyI18n(lang); })
      .catch(function () { DICT = {}; applyI18n(lang); });
  }

  function setLang(lang) {
    if (LANGS.indexOf(lang) < 0) return;
    try { localStorage.setItem(STORE_KEY, lang); } catch (e) {}
    load(lang);
  }

  // Estilos do seletor de idioma injetados uma única vez (evita editar 5 <style>).
  function injectStyles() {
    if (document.getElementById("lang-switch-style")) return;
    var css =
      ".lang-switch{display:inline-flex;gap:2px;border:1px solid var(--line,#e6eaec);" +
      "border-radius:999px;padding:2px;background:var(--bg-soft,#f6f8f9)}" +
      ".lang-switch button{font:inherit;cursor:pointer;border:0;background:transparent;" +
      "color:var(--muted,#5d6b72);font-size:.74rem;font-weight:700;letter-spacing:.03em;" +
      "padding:4px 9px;border-radius:999px;line-height:1;transition:background .15s,color .15s}" +
      ".lang-switch button:hover{color:var(--accent,#0e8a78)}" +
      ".lang-switch button.active{background:var(--accent,#0e8a78);color:#fff}" +
      "@media(max-width:680px){.lang-switch button{padding:5px 8px}}" +
      // Faixa "Beta / em construção" — em destaque no topo de todas as páginas.
      "#beta-banner{display:flex;align-items:center;justify-content:center;gap:10px;" +
      "flex-wrap:wrap;background:repeating-linear-gradient(135deg,#f9b418,#f9b418 14px,#f5a800 14px,#f5a800 28px);" +
      "color:#3a2a00;font-weight:600;font-size:.86rem;letter-spacing:.01em;" +
      "padding:9px 16px;text-align:center;border-bottom:2px solid #c98700;" +
      "box-shadow:0 1px 4px rgba(0,0,0,.12);position:relative;z-index:20}" +
      "#beta-banner .bb-pill{background:#3a2a00;color:#ffd980;font-weight:800;" +
      "font-size:.72rem;letter-spacing:.06em;padding:3px 10px;border-radius:999px;" +
      "text-transform:uppercase;white-space:nowrap}" +
      "#beta-banner .bb-icon{font-size:1.05rem;line-height:1}" +
      "@media(max-width:480px){#beta-banner{font-size:.78rem;padding:8px 12px;gap:7px}}";
    var s = document.createElement("style");
    s.id = "lang-switch-style";
    s.textContent = css;
    document.head.appendChild(s);
  }

  // Faixa de aviso "Beta (v0.5) · em construção" inserida no topo do <body>.
  // Texto traduzível via data-i18n="beta.text"; a versão fica fixa no rótulo.
  function buildBetaBanner() {
    if (document.getElementById("beta-banner")) return;
    var bar = document.createElement("div");
    bar.id = "beta-banner";
    bar.setAttribute("role", "status");
    bar.innerHTML =
      '<span class="bb-icon" aria-hidden="true">🚧</span>' +
      '<span class="bb-pill">Beta · v0.5</span>' +
      '<span class="bb-text" data-i18n="beta.text">site em construção — ' +
      'conteúdo provisório e sujeito a alterações</span>';
    document.body.insertBefore(bar, document.body.firstChild);
  }

  // Preenche cada placeholder .lang-switch com os botões PT/EN/ES.
  function buildSwitchers() {
    document.querySelectorAll(".lang-switch").forEach(function (host) {
      if (host.dataset.ready) return;
      host.dataset.ready = "1";
      host.setAttribute("role", "group");
      host.setAttribute("aria-label", "Idioma / Language / Idioma");
      var labels = { pt: "PT", en: "EN", es: "ES" };
      LANGS.forEach(function (l) {
        var b = document.createElement("button");
        b.type = "button";
        b.dataset.lang = l;
        b.textContent = labels[l];
        b.title = { pt: "Português", en: "English", es: "Español" }[l];
        b.addEventListener("click", function () { setLang(l); });
        host.appendChild(b);
      });
    });
  }

  function boot() {
    injectStyles();
    buildBetaBanner();
    buildSwitchers();
    load(pick());
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
