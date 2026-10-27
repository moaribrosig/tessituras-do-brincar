// Rastreamento do Meta (Pixel). Só liga quando CONFIG.metaPixel estiver preenchido em js/data.js.
// Para conferir os eventos sem o Pixel, abra o site com ?debug_pixel=1 e veja o console do navegador.
//
// Eventos enviados:
//   PageView            ao abrir a página
//   ViewContent         quando um módulo fica pelo menos metade na tela por 1,5 s (um por módulo)
//   Lead                clique em qualquer botão que abre o formulário de inscrição
//   Contact             clique no WhatsApp de atendimento (botão flutuante, rodapé, dúvidas)
//   CliqueInscrevaSe    clique nos botões que levam à seção de inscrições (topo e abertura)
//   SaberMais           abriu o "Saber mais" de um módulo
//   GrupoWhatsApp       clique no link do grupo de WhatsApp de um módulo
//   CliqueInstagram     clique em um link do Instagram
//   Rolagem             25, 50, 75 e 90% da página (parâmetro "porcentagem")
//   TempoNaPagina30s    30 segundos com a página aberta e visível
(function () {
  "use strict";

  const PIXEL = (typeof CONFIG !== "undefined" && CONFIG.metaPixel) || "";
  const DEBUG = /[?&]debug_pixel=1/.test(location.search);
  if (!PIXEL && !DEBUG) return;

  if (PIXEL) {
    /* eslint-disable */
    !function (f, b, e, v, n, t, s) {
      if (f.fbq) return; n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments); };
      if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = "2.0"; n.queue = [];
      t = b.createElement(e); t.async = !0; t.src = v; s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s);
    }(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
    /* eslint-enable */
    window.fbq("init", PIXEL);
  }

  // eventID fica pronto para deduplicar com a API de Conversões no futuro.
  function enviar(tipo, nome, params) {
    const eventID = nome + "-" + Date.now() + "-" + Math.random().toString(36).slice(2, 8);
    if (DEBUG) console.log("[pixel]", tipo === "track" ? "padrão" : "personalizado", nome, params || {});
    if (window.fbq) window.fbq(tipo, nome, params || {}, { eventID });
  }
  const padrao = (nome, params) => enviar("track", nome, params);
  const personalizado = (nome, params) => enviar("trackCustom", nome, params);

  function nomeModulo(numero) {
    const m = typeof MODULOS !== "undefined" && MODULOS.find((x) => String(x.numero) === String(numero));
    return m ? `Módulo ${m.numero} · ${m.tituloCurto}` : `Módulo ${numero}`;
  }

  function moduloDoElemento(el) {
    const artigo = el.closest(".modulo");
    if (artigo) return artigo.id.replace("modulo-", "");
    const texto = el.textContent || "";
    const achado = texto.match(/Módulo\s+(\d)/);
    return achado ? achado[1] : "";
  }

  function localDoElemento(el) {
    if (el.closest("#whatsapp-flutuante")) return "botão flutuante";
    if (el.closest(".topo")) return "topo";
    if (el.closest(".hero")) return "abertura";
    if (el.closest(".modulo__detalhes")) return "detalhes do módulo";
    if (el.closest(".modulo")) return "card do módulo";
    if (el.closest("#inscricoes")) return "seção inscrições";
    if (el.closest("#duvidas")) return "dúvidas";
    if (el.closest(".rodape")) return "rodapé";
    return "outro";
  }

  padrao("PageView");

  // Cliques (fase de captura, para pegar também os links que abrem em nova aba)
  document.addEventListener(
    "click",
    (evento) => {
      const alvo = evento.target.closest("a, button");
      if (!alvo) return;
      const href = alvo.getAttribute("href") || "";
      const local = localDoElemento(alvo);
      const modulo = moduloDoElemento(alvo);

      if (href.includes("docs.google.com/forms")) {
        padrao("Lead", {
          content_name: modulo ? nomeModulo(modulo) : "Formulário geral",
          content_category: "Inscrição",
          local,
        });
      } else if (href === "#inscricoes") {
        personalizado("CliqueInscrevaSe", { local });
      } else if (alvo.matches("[data-abrir]") && alvo.getAttribute("aria-expanded") !== "true") {
        personalizado("SaberMais", { modulo: nomeModulo(alvo.dataset.abrir) });
      } else if (href.includes("wa.me/")) {
        padrao("Contact", { content_name: "WhatsApp de atendimento", local });
      } else if (href.includes("chat.whatsapp.com")) {
        personalizado("GrupoWhatsApp", { modulo: modulo ? nomeModulo(modulo) : "" });
      } else if (href.includes("instagram.com") || href.includes("ig.me")) {
        personalizado("CliqueInstagram", { local });
      }
    },
    true
  );

  // ViewContent: módulo realmente visto (metade na tela por 1,5 s), uma vez por módulo
  if ("IntersectionObserver" in window) {
    const timers = new Map();
    const observador = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((e) => {
          const numero = e.target.id.replace("modulo-", "");
          if (e.isIntersecting) {
            timers.set(numero, setTimeout(() => {
              padrao("ViewContent", {
                content_name: nomeModulo(numero),
                content_category: "Módulo",
                content_ids: ["modulo-" + numero],
                content_type: "product",
              });
              observador.unobserve(e.target);
            }, 1500));
          } else {
            clearTimeout(timers.get(numero));
          }
        });
      },
      { threshold: 0.5 }
    );
    document.querySelectorAll(".modulo").forEach((m) => observador.observe(m));
  }

  // Rolagem: 25, 50, 75 e 90%
  const marcos = [25, 50, 75, 90];
  const enviados = new Set();
  let pendente = false;
  function medirRolagem() {
    pendente = false;
    const total = document.documentElement.scrollHeight - window.innerHeight;
    if (total <= 0) return;
    const pct = (window.scrollY / total) * 100;
    marcos.forEach((m) => {
      if (pct >= m && !enviados.has(m)) {
        enviados.add(m);
        personalizado("Rolagem", { porcentagem: m });
      }
    });
  }
  window.addEventListener("scroll", () => {
    if (!pendente) {
      pendente = true;
      setTimeout(medirRolagem, 150);
    }
  }, { passive: true });

  // Tempo: 30 s com a aba visível
  let segundos = 0;
  const relogio = setInterval(() => {
    if (document.visibilityState === "visible") segundos += 1;
    if (segundos >= 30) {
      personalizado("TempoNaPagina30s");
      clearInterval(relogio);
    }
  }, 1000);
})();
