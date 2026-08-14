/* ──────────────────────────────────────────────────────────────────────────
   SBSeg · arquivo histórico — lista canônica das edições
   ─────────────────────────────────────────────────────────────────────────
   Fonte única de verdade sobre as edições do simpósio. É consumida pela home
   (grade de cartões, mapa das sedes e JSON-LD da coleção) e pela página de
   histórico (linha do tempo, números do acervo e geografia). Ao acrescentar
   uma edição aqui, as duas páginas se atualizam sozinhas.

   Campos:
     y       ano da edição
     lat/lng coordenadas da cidade-sede (mesma projeção de assets/brazil-map.js)
     n       nome da edição
     loc     "Cidade · UF · Instituição · datas", com as partes finais opcionais
     logo    caminho em assets/logos ou null (a home cai no fallback tipográfico)
     archive pasta da cópia estática local ou null
     site    site original, quando ainda no ar, ou null
     brand   página de logomarca da edição ou null
   ────────────────────────────────────────────────────────────────────────── */
window.EDITIONS = [
  {y:2026, lat:-22.7469, lng:-41.8817, n:"SBSeg 2026", loc:"Armação dos Búzios · RJ · UFF · 1–4 set", logo:"assets/logos/sbseg2026.png", archive:"sbseg2026/", site:"https://www.sbseg2026.uff.br/", brand:null},
  {y:2025, lat:-25.5163, lng:-54.5854, n:"SBSeg 2025", loc:"Foz do Iguaçu · PR · PUCPR · 1–4 set", logo:"assets/logos/sbseg2025.png", archive:"sbseg2025/", site:"https://sbseg2025.ppgia.pucpr.br/", brand:"sbseg2025/sbseg2025.ppgia.pucpr.br/informacoes/logomarca/index.html"},
  {y:2024, lat:-23.2237, lng:-45.9009, n:"SBSeg 2024", loc:"São José dos Campos · SP · ITA · 16–19 set", logo:"assets/logos/sbseg2024-cor.png", archive:"sbseg2024/", site:"https://sbseg2024.ita.br/", brand:"sbseg2024/sbseg2024.ita.br/informacoes/logomarca/index.html"},
  {y:2023, lat:-21.7642, lng:-43.3503, n:"SBSeg 2023", loc:"Juiz de Fora · MG · UFJF · 18–21 set", logo:null, archive:"sbseg2023/", site:"https://sbseg2023.ufjf.br/", brand:null},
  {y:2022, lat:-29.6868, lng:-53.8149, n:"SBSeg 2022", loc:"Santa Maria · RS · UFSM", logo:"assets/logos/sbseg2022.png", archive:"sbseg2022/", site:"https://sbseg2022.inf.ufsm.br/", brand:null},
  {y:2021, lat:-1.4558, lng:-48.5039, n:"SBSeg 2021", loc:"Belém · PA · UFPA", logo:null, archive:"sbseg2021/", site:"https://sbseg2021.ufpa.br/", brand:null},
  {y:2020, lat:-22.505, lng:-43.1786, n:"SBSeg 2020", loc:"Petrópolis · RJ", logo:null, archive:"sbseg2020/", site:"http://sbseg.sbc.org.br/2020/", brand:null},
  {y:2019, lat:-23.5558, lng:-46.6396, n:"SBSeg 2019", loc:"São Paulo · SP · IME/USP", logo:null, archive:"sbseg2019/", site:"https://sbseg2019.ime.usp.br/", brand:null},
  {y:2018, lat:-5.7945, lng:-35.211, n:"SBSeg 2018", loc:"Natal · RN · IMD/UFRN", logo:"assets/logos/sbseg2018.png", archive:"sbseg2018/", site:"https://sbseg2018.imd.ufrn.br/", brand:null},
  {y:2017, lat:-15.7939, lng:-47.8828, n:"SBSeg 2017", loc:"Brasília · DF · UnB", logo:"assets/logos/sbseg2017.png", archive:"sbseg2017/", site:"https://sbseg2017.redes.unb.br/", brand:null},
  {y:2016, lat:-22.8833, lng:-43.1036, n:"SBSeg 2016", loc:"Niterói · RJ · IC/UFF", logo:null, archive:"sbseg2016/", site:"http://sbseg2016.ic.uff.br/", brand:null},
  {y:2015, lat:-27.5949, lng:-48.5482, n:"SBSeg 2015", loc:"Florianópolis · SC · UFSC/UNIVALI", logo:null, archive:"sbseg2015/", site:null, brand:null},
  {y:2014, lat:-19.9167, lng:-43.9345, n:"SBSeg 2014", loc:"Belo Horizonte · MG · DCC/UFMG", logo:"assets/logos/sbseg2014.png", archive:"sbseg2014/", site:"http://www.sbseg2014.dcc.ufmg.br/", brand:null},
  {y:2013, lat:-3.119, lng:-60.0217, n:"SBSeg 2013", loc:"Manaus · AM · IComp/UFAM", logo:"assets/logos/sbseg2013.png", archive:"sbseg2013/", site:null, brand:null},
  {y:2012, lat:-25.4284, lng:-49.2733, n:"SBSeg 2012", loc:"Curitiba · PR · PUCPR", logo:"assets/logos/sbseg2012.jpg", archive:"sbseg2012/", site:"http://sbseg2012.ppgia.pucpr.br/", brand:null},
  {y:2011, lat:-15.7939, lng:-47.8828, n:"SBSeg 2011", loc:"Brasília · DF · UnB", logo:null, archive:"sbseg2011/", site:null, brand:null},
  {y:2008, lat:-29.3747, lng:-50.8764, n:"SBSeg 2008", loc:"Gramado · RS · Inf/UFRGS", logo:null, archive:"sbseg2008/", site:"http://sbseg2008.inf.ufrgs.br/", brand:null}
];
