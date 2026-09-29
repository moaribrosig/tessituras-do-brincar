# Tessituras do Brincar · site

Site da formação **Tessituras do brincar: dos quintais às ruas**, realizada pela Guaimbê no Ponto de Cultura Quintal da Aldeia (Pirenópolis/GO), com recursos da PNAB via Secult Goiás.

Site estático (HTML, CSS e JavaScript puro), publicado pelo GitHub Pages em **https://tessituras.guaimbe.org.br** (subdomínio da Guaimbê: registro CNAME `tessituras` → `moaribrosig.github.io` no DNS da HostGator). Não precisa de instalação nem de build.

## Onde mexer

| Quero mudar... | Arquivo |
|---|---|
| Textos, datas, turnos, docentes, links de inscrição, grupos de WhatsApp | `js/data.js` |
| Número do WhatsApp de atendimento (botão flutuante) | `js/data.js` → `CONFIG.whatsapp` |
| Cores de cada módulo | `js/data.js` → campo `cor` de cada módulo |
| Cores gerais e fontes | `css/style.css` → bloco `:root` no topo |
| Camadas da abertura | `assets/hero/` (ver abaixo) |
| Fotos dos docentes | `assets/img/docentes/` + campo `foto` do docente em `js/data.js` |
| Fotos dos módulos | `assets/img/modulos/` + lista `fotos` do módulo em `js/data.js` |
| Régua de logos (assinatura) | `assets/logos/regua.webp` (versão colorida sobre creme #FDECE1, do designer) e `regua-celular.webp` (mesmas peças empilhadas, usada abaixo de 700px) |

## Abertura (cortejo de crochê)

A arte vem do designer (pasta "Moari"): fundo vinho, chão de linho com cordão verde e bonecos de crochê.

| Arquivo | O que é |
|---|---|
| `assets/img/textura/vinho.webp`, `linho.webp` | Texturas do fundo e do chão (também usadas nas faixas entre seções) |
| `assets/img/textura/flores.png`, `flor.png`, `ondas.png` | Flores bordadas e ondas verdes recortadas do fundo |
| `assets/hero/chao-mascara.svg` | Formato ondulado do chão (o mesmo desenho está no cordão verde do `index.html`) |
| `assets/hero/mandala.svg` | Mandala humana, girando bem clarinha atrás do título |
| `assets/hero/cortejo/*.webp` | Poses de cada boneco, já alinhadas entre si |

Cada boneco é um `<span class="boneco">` no `index.html`:

- `data-quadros`: lista das poses (nomes dos arquivos em `assets/hero/cortejo/`, sem `.webp`), trocadas como animação quadro a quadro;
- `data-ritmo`: tempo de cada pose em milissegundos (sem ele, o boneco fica numa pose só e só balança);
- `--altura`: tamanho relativo do boneco no cortejo.

Para incluir um boneco novo, gere as poses com o mesmo alinhamento (mesmo tamanho de imagem, pés na base) e acrescente um `<span>`. O atributo `data-velocidade` das camadas controla o quanto cada uma se move na rolagem: perto de 0 fica parada ao fundo, 1 acompanha a página.

## Inscrição por módulo

Cada botão abre o mesmo Google Forms já com o módulo marcado. O campo `formOption` de cada módulo precisa ser **idêntico** ao texto da opção no formulário. Se a coordenação editar o texto da opção no Forms, atualize aqui também.

## Grupos de WhatsApp

O campo `whatsappGrupo` de cada módulo está vazio de propósito: pelo Forms, só quem for selecionado entra no grupo. Enquanto estiver vazio, o site avisa que o link chega por e-mail. Preencha só se a coordenação decidir divulgar o link publicamente.

## Depois de editar CSS ou JS

No `index.html`, aumente o número de versão (`?v=9` → `?v=10`) nas linhas do `style.css`, do `data.js` e do `main.js`. Sem isso, quem já visitou o site pode continuar vendo a versão antiga guardada no navegador.

## Ver localmente

```bash
python -m http.server 5510
```

Depois abra `http://localhost:5510`.
