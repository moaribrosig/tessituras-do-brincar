# Tessituras do Brincar · site

Site da formação **Tessituras do brincar: dos quintais às ruas**, realizada pela Guaimbê no Ponto de Cultura Quintal da Aldeia (Pirenópolis/GO), com recursos da PNAB via Secult Goiás.

Site estático (HTML, CSS e JavaScript puro), publicado pelo GitHub Pages. Não precisa de instalação nem de build.

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
| Régua de logos | `assets/logos/` + trocar o bloco `regua-provisoria` no `index.html` |

## Camadas da abertura

As imagens em `assets/hero/` são provisórias. Para trocar pela arte final, salve com o **mesmo nome de arquivo** (pode ser `.svg`, ou `.png` com fundo transparente, ajustando a extensão no `index.html`):

| Arquivo | O que é | Posição |
|---|---|---|
| `mandala.svg` | Mandala humana (sol da paisagem e favicon) | fundo, gira devagar |
| `serra-fundo.svg` | Serra mais distante | fundo |
| `serra-frente.svg` | Serra mais próxima | meio |
| `casario.svg` | Casario e Igreja Matriz | frente |
| `quintal.svg` | Plantas do quintal, primeiro plano | mais à frente |

O atributo `data-velocidade` no `index.html` controla o quanto cada camada se move na rolagem: perto de 0 fica parada ao fundo, 1 acompanha a página.

## Inscrição por módulo

Cada botão abre o mesmo Google Forms já com o módulo marcado. O campo `formOption` de cada módulo precisa ser **idêntico** ao texto da opção no formulário. Se a coordenação editar o texto da opção no Forms, atualize aqui também.

## Grupos de WhatsApp

O campo `whatsappGrupo` de cada módulo está vazio de propósito: pelo Forms, só quem for selecionado entra no grupo. Enquanto estiver vazio, o site avisa que o link chega por e-mail. Preencha só se a coordenação decidir divulgar o link publicamente.

## Ver localmente

```bash
python -m http.server 5510
```

Depois abra `http://localhost:5510`.
