(function () {
  "use strict";

  const reduzirMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function escapar(texto) {
    return String(texto)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function linkInscricao(modulo) {
    const params = new URLSearchParams({ usp: "pp_url" });
    params.set(FORM_MODULE_FIELD, modulo.formOption);
    return CONFIG.formUrl + "?" + params.toString();
  }

  function iniciais(nome) {
    const ignorar = ["mestre", "mestra", "seu", "da", "de", "do", "a", "o"];
    const partes = nome
      .replace(/[(),]/g, " ")
      .split(/\s+/)
      .filter((p) => p && !ignorar.includes(p.toLowerCase()));
    return partes
      .slice(0, 2)
      .map((p) => p[0].toUpperCase())
      .join("");
  }

  function avatar(docente, cor, extraClasse) {
    const conteudo = docente.foto
      ? `<img src="${escapar(docente.foto)}" alt="" loading="lazy" />`
      : escapar(iniciais(docente.nome));
    return `<span class="avatar ${extraClasse || ""}" style="--cor:${cor}" aria-hidden="true">${conteudo}</span>`;
  }

  function linkInstagram(docente) {
    if (!docente.instagram) return "";
    return `<a href="https://www.instagram.com/${escapar(docente.instagram)}/" target="_blank" rel="noopener">@${escapar(docente.instagram)}</a>`;
  }

  function renderModulos() {
    const alvo = document.getElementById("lista-modulos");
    alvo.innerHTML = MODULOS.map((m) => {
      const docentes = m.docentes.map((id) => DOCENTES[id]);
      const nomes = docentes.map((d) => d.nome).join(", ");
      const foto = m.fotos[0]
        ? `<img src="${escapar(m.fotos[0])}" alt="Foto do módulo ${m.numero}" loading="lazy" />`
        : `<span>Foto do módulo<br />em breve</span>`;

      const galeria = m.fotos.length
        ? `<div class="galeria">${m.fotos
            .map((f, i) => `<img src="${escapar(f)}" alt="Módulo ${m.numero}, foto ${i + 1}" loading="lazy" />`)
            .join("")}</div>`
        : `<p class="galeria__vazia">As fotos deste módulo aparecem aqui depois do encontro.</p>`;

      const grupo = m.whatsappGrupo
        ? `<a class="botao botao--whatsapp" href="${escapar(m.whatsappGrupo)}" target="_blank" rel="noopener">Entrar no grupo do WhatsApp</a>
           <p class="detalhes__nota">A entrada no grupo é aprovada pela equipe para quem foi selecionado no módulo.</p>`
        : `<p class="detalhes__nota">Quem for selecionado recebe por e-mail o link do grupo de WhatsApp deste módulo.</p>`;

      return `
      <article class="modulo" id="modulo-${m.numero}" style="--cor:${m.cor}" aria-labelledby="titulo-modulo-${m.numero}">
        <img class="modulo__marca-dagua" src="assets/hero/mandala.svg" alt="" aria-hidden="true" />
        <div class="container modulo__grade">
          <div class="revelar">
            <p class="modulo__numero" aria-hidden="true">0${m.numero}</p>
            <span class="modulo__datas">Módulo ${m.numero} · ${escapar(m.datas)}</span>
            <h3 class="modulo__titulo" id="titulo-modulo-${m.numero}">${escapar(m.titulo)}</h3>
            ${m.subtitulo ? `<p class="modulo__subtitulo">${escapar(m.subtitulo)}</p>` : ""}
            <p class="modulo__resumo">${escapar(m.resumo)}</p>
            <div class="modulo__rostos">
              ${docentes.map((d) => avatar(d, m.cor)).join("")}
              <span class="modulo__rostos-texto">${escapar(nomes)}</span>
            </div>
            <div class="modulo__acoes">
              <button class="botao" type="button" aria-expanded="false" aria-controls="detalhes-${m.numero}" data-abrir="${m.numero}">Saber mais</button>
              <a class="botao botao--contorno" href="${linkInscricao(m)}" target="_blank" rel="noopener">Inscrever-se neste módulo</a>
            </div>
          </div>
          <div class="modulo__foto revelar">${foto}</div>

          <div class="modulo__detalhes" id="detalhes-${m.numero}" data-aberto="false">
            <div>
              <div class="detalhes__conteudo">
                <div class="detalhes__bloco">
                  <h3>Programação · 15 horas</h3>
                  <ul class="turnos">
                    ${m.turnos
                      .map(
                        (t) => `<li>
                          <span class="turno__quando">${escapar(t.quando)}</span>
                          <span class="turno__tema">${escapar(t.tema)}</span>
                          <p>${escapar(t.texto)}</p>
                        </li>`
                      )
                      .join("")}
                  </ul>
                </div>

                <div class="detalhes__bloco">
                  <h3>Quem conduz</h3>
                  <ul class="grade-docentes detalhes__docentes">
                    ${docentes
                      .map(
                        (d) => `<li class="docente">
                          ${avatar(d, m.cor)}
                          <p class="docente__nome">${escapar(d.nome)}</p>
                          ${linkInstagram(d)}
                          <p class="docente__bio">${escapar(d.bio)}</p>
                        </li>`
                      )
                      .join("")}
                  </ul>
                  ${m.apoio ? `<p class="detalhes__nota">${escapar(m.apoio)}</p>` : ""}
                </div>

                <div class="detalhes__bloco">
                  <h3>Para quem é</h3>
                  <p>${escapar(m.publico)}</p>
                </div>

                <div class="detalhes__bloco">
                  <h3>Fotos</h3>
                  ${galeria}
                </div>

                <div class="detalhes__bloco detalhes__rodape">
                  <a class="botao" href="${linkInscricao(m)}" target="_blank" rel="noopener">Inscrever-se no Módulo ${m.numero}</a>
                  ${grupo}
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>`;
    }).join("");

    alvo.addEventListener("click", (evento) => {
      const botao = evento.target.closest("[data-abrir]");
      if (!botao) return;
      const painel = document.getElementById("detalhes-" + botao.dataset.abrir);
      const abrir = painel.dataset.aberto !== "true";
      painel.dataset.aberto = String(abrir);
      botao.setAttribute("aria-expanded", String(abrir));
      botao.textContent = abrir ? "Fechar detalhes" : "Saber mais";
    });
  }

  function renderDocentes() {
    const modulosPorDocente = {};
    MODULOS.forEach((m) =>
      m.docentes.forEach((id) => {
        (modulosPorDocente[id] = modulosPorDocente[id] || []).push(m);
      })
    );

    document.getElementById("grade-docentes").innerHTML = Object.keys(modulosPorDocente)
      .map((id) => {
        const d = DOCENTES[id];
        const modulos = modulosPorDocente[id];
        const rotulo = modulos.map((m) => "M" + m.numero).join(" · ");
        return `<li class="docente revelar">
          ${avatar(d, modulos[0].cor)}
          <p class="docente__nome">${escapar(d.nome)}</p>
          <p class="docente__resumo">${escapar(d.resumo)}</p>
          <span class="docente__modulos">${rotulo}</span>
        </li>`;
      })
      .join("");
  }

  function renderInscricoes() {
    document.getElementById("botoes-inscricao").innerHTML = MODULOS.map(
      (m) => `<a class="inscricao-modulo" style="--cor:${m.cor}" href="${linkInscricao(m)}" target="_blank" rel="noopener">
        <span>Módulo ${m.numero} · ${escapar(m.tituloCurto)}<small>${escapar(m.datasCurtas)}</small></span>
        <span aria-hidden="true">→</span>
      </a>`
    ).join("");
    document.getElementById("link-form-geral").href = CONFIG.formUrl;
  }

  function preencherContatos() {
    document.getElementById("endereco").textContent = CONFIG.endereco;
    const email = document.getElementById("link-email");
    email.href = "mailto:" + CONFIG.email;
    email.textContent = CONFIG.email;
    document.getElementById("link-instagram").href = CONFIG.instagram;
    document.getElementById("link-site").href = CONFIG.site;

    const zap = document.getElementById("whatsapp-flutuante");
    zap.href = CONFIG.whatsapp
      ? `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(CONFIG.whatsappMessage)}`
      : "https://ig.me/m/quintaldaldeia";
  }

  // Bonecos de crochê: cada um tem uma sequência de poses (data-quadros) que se
  // alternam como animação quadro a quadro; o grupo é repetido para o cortejo
  // atravessar a tela sem emendas.
  function iniciarCortejo() {
    const hero = document.querySelector(".hero");
    const grupo = hero.querySelector(".cortejo__grupo");
    if (!grupo) return;

    grupo.querySelectorAll(".boneco").forEach((boneco) => {
      boneco.innerHTML = boneco.dataset.quadros
        .split(",")
        .map((q, i) => `<img src="assets/hero/cortejo/${q.trim()}.webp" alt=""${i === 0 ? ' class="ativo"' : ""} />`)
        .join("");
    });
    const faixa = grupo.parentElement;
    faixa.append(grupo.cloneNode(true), grupo.cloneNode(true));

    if (reduzirMovimento) return;

    let visivel = true;
    new IntersectionObserver(([entrada]) => {
      visivel = entrada.isIntersecting;
      hero.classList.toggle("hero--parado", !visivel);
    }).observe(hero);

    faixa.querySelectorAll(".boneco[data-ritmo]").forEach((boneco, n) => {
      const quadros = boneco.querySelectorAll("img");
      let atual = n % quadros.length;
      quadros.forEach((q, i) => q.classList.toggle("ativo", i === atual));
      setInterval(() => {
        if (!visivel) return;
        quadros[atual].classList.remove("ativo");
        atual = (atual + 1) % quadros.length;
        quadros[atual].classList.add("ativo");
      }, parseInt(boneco.dataset.ritmo, 10));
    });
  }

  function iniciarParallax() {
    if (reduzirMovimento) return;
    const hero = document.querySelector(".hero");
    const camadas = hero.querySelectorAll("[data-velocidade]");
    let pendente = false;

    // data-velocidade: 1 acompanha a rolagem normal; valores menores ficam
    // "para trás", como o fundo de uma paisagem.
    function atualizar() {
      const y = window.scrollY;
      if (y <= hero.offsetHeight) {
        camadas.forEach((el) => {
          const atraso = y * (1 - parseFloat(el.dataset.velocidade));
          const x = el.classList.contains("camada") ? "-50%" : "0";
          el.style.transform = `translate3d(${x}, ${atraso}px, 0)`;
          if (el.classList.contains("hero__texto")) {
            el.style.opacity = String(Math.max(0, 1 - y / (hero.offsetHeight * 0.55)));
          }
        });
      }
      pendente = false;
    }

    window.addEventListener(
      "scroll",
      () => {
        if (!pendente) {
          pendente = true;
          requestAnimationFrame(atualizar);
        }
      },
      { passive: true }
    );
  }

  function iniciarTopo() {
    const topo = document.getElementById("topo");
    const hero = document.querySelector(".hero");
    const observador = new IntersectionObserver(
      ([entrada]) => topo.classList.toggle("topo--solido", !entrada.isIntersecting),
      { rootMargin: "-80px 0px 0px 0px" }
    );
    observador.observe(hero);
  }

  function iniciarRevelar() {
    const elementos = document.querySelectorAll(".revelar");
    if (reduzirMovimento || !("IntersectionObserver" in window)) {
      elementos.forEach((el) => el.classList.add("revelar--visivel"));
      return;
    }
    const observador = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("revelar--visivel");
            observador.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    elementos.forEach((el) => observador.observe(el));
  }

  renderModulos();
  renderDocentes();
  renderInscricoes();
  preencherContatos();
  iniciarCortejo();
  iniciarParallax();
  iniciarTopo();
  iniciarRevelar();
})();
