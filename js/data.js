// Todo o conteúdo do site mora aqui. Para atualizar textos, fotos, links e cores,
// edite este arquivo; o layout se ajusta sozinho.

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScWpQD59io9nz6Iq3ggaLd_kVvOYsuEKkGNQfydNB93aHc1zQ/viewform";

// Campo "Quais módulos você pretende fazer?" do Forms. O valor de cada módulo
// precisa ser idêntico ao texto da opção no formulário (inclusive espaços duplos).
const FORM_MODULE_FIELD = "entry.2095860727";

const CONFIG = {
  formUrl: FORM_URL,
  site: "https://guaimbe.org.br/",
  instagram: "https://www.instagram.com/quintaldaldeia/",
  email: "guaimbe@guaimbe.org.br",
  // Número de atendimento no formato 55 + DDD + número, só dígitos (ex.: "5562999999999").
  // Se ficar vazio, o botão flutuante abre o direct do Instagram.
  whatsapp: "556282813313",
  whatsappExibicao: "(62) 8281-3313",
  whatsappMessage: "Olá! Quero saber mais sobre o Tessituras do Brincar.",
  endereco: "Rua Pará, qd. 09, APM 4, Residencial Santa Bárbara, Alto do Bonfim, Pirenópolis/GO",
};

const DOCENTES = {
  daraina: {
    nome: "Daraína Pregnolatto",
    instagram: "darainapregnolatto",
    resumo: "Criadora da Pedagogia do Quintal e fundadora da Guaimbê",
    bio: "Educadora comunitária do movimento, fundadora da Associação Guaimbê e criadora da metodologia Pedagogia do Quintal. Dirige coletivos artísticos e culturais há 30 anos e atua na gestão de projetos de patrimônio imaterial em Pirenópolis.",
    foto: "assets/img/docentes/daraina.webp",
  },
  noel: {
    nome: "Noel Carvalho",
    instagram: "noel.carvalhooo",
    resumo: "Mestre de bateria do Zé Pereira e amo do Boi do Rosário",
    bio: "Músico licenciado pela UFG, arte-educador, multi-instrumentista e pesquisador. Mestre de bateria do Bloco Zé Pereira e coordenador/amo do Boi do Rosário. Especialista em ritmos tradicionais de Goiás e do Maranhão.",
    foto: "assets/img/docentes/noel.webp",
  },
  celso: {
    nome: "Celso Leal",
    instagram: "",
    resumo: "Luthier e mestre na construção de instrumentos musicais populares",
    bio: "Luthier e mestre na construção dos instrumentos musicais de couro e madeira que integram as manifestações populares. Músico e multi-instrumentista.",
    foto: "assets/img/docentes/celso.webp",
  },
  terena: {
    nome: "Terená Bueno Kanouté",
    instagram: "terenakanoute",
    resumo: "Bailarina, pesquisadora e brincante do Boi do Rosário",
    bio: "Artista, bailarina, educadora e pesquisadora. Mestre em Educação pela USP, professora de Dança Afro no Sertão Negro e brincante no Boi do Rosário.",
    foto: "assets/img/docentes/terena.webp",
  },
  manu: {
    nome: "Emanuel Pregnolatto (Manu)",
    instagram: "emanuelpregnolatto",
    resumo: "Multi-instrumentista e contrabaixista",
    bio: "Multi-instrumentista e contrabaixista, bacharel em Música Popular pela UFG e participante da Bituca (Universidade de Música Popular). Atua na assistência dos módulos.",
    foto: "assets/img/docentes/manu.webp",
  },
  lele: {
    nome: "Letícia Caetano, a Lelê",
    instagram: "let_caetano",
    resumo: "Mestra de bateria no carnaval do Rio de Janeiro",
    bio: "Ritmista e regente com mais de 10 anos no Carnaval do Rio de Janeiro. Integra a Ritmada – Bateria Balanço Zona Sul, é mestra de bateria da Marejada e passou por agremiações como Unidos de Vila Isabel e Império da Tijuca.",
    foto: "assets/img/docentes/lele.webp",
  },
  tiao: {
    nome: "Mestre Tião Carvalho",
    instagram: "mestretiaocarvalho",
    resumo: "Mestre da cultura popular maranhense",
    bio: "Músico, compositor e mestre da cultura popular maranhense, fundador do Grupo Cupuaçu. Referência nacional na transmissão oral de saberes e na difusão do bumba-meu-boi e do tambor de crioula.",
    foto: "assets/img/docentes/tiao.webp",
  },
  bine: {
    nome: "Seu Biné",
    instagram: "",
    resumo: "Congada de Nerópolis",
    bio: "Convidado especial, trazendo a vivência direta da tradição oral goiana a partir da Congada de Nerópolis.",
    foto: "assets/img/docentes/bine.webp",
  },
  goyano: {
    nome: "Mestre Goyano",
    instagram: "mestregoyano",
    resumo: "Mestre de Capoeira Angola e Samba de Roda",
    bio: "Graduado em Educação Física, mestre de Capoeira Angola e Samba de Roda, fundador do Instituto Barravento e ativista do movimento negro. Referência na salvaguarda do Samba de Roda da Serrinha.",
    foto: "assets/img/docentes/goyano.webp",
  },
  antonia: {
    nome: "Mestra Antônia",
    instagram: "mestrantoniamary10",
    resumo: "Guardiã do Samba de Roda da Serrinha",
    bio: "Guardiã de saberes, cofundadora do Batucagê na Serrinha e do Grupo de Samba de Roda da Serrinha. Fundou o Clube das Sambadeiras, focado no protagonismo feminino.",
    foto: "assets/img/docentes/antonia.webp",
  },
  karla: {
    nome: "Karla Duarte",
    instagram: "djkarlakarajazz",
    resumo: "Produtora de eventos há 20 anos",
    bio: "Produtora de eventos com 20 anos de experiência na área cultural, atuando no planejamento, na logística e na estruturação de projetos artísticos.",
    foto: "assets/img/docentes/karla.webp",
  },
};

// Cores provisórias, em harmonia com a logo (azul, creme e ocre), até o Morcego
// definir a cor oficial de cada módulo. A primeira foto de cada lista vira a capa.
const MODULOS = [
  {
    numero: 1,
    slug: "coletivos",
    titulo: "Formação e Manutenção de Grupos e Coletivos Culturais e Artísticos",
    tituloCurto: "Formação de Coletivos",
    datas: "06 a 08 de novembro de 2026",
    datasCurtas: "06–08 nov 2026",
    cor: "#9C6415",
    resumo:
      "Um mergulho nas raízes e na cosmovisão que sustentam as práticas artísticas contemporâneas. O objetivo é formar brincantes-multiplicadores, capazes de levar a cultura popular ancestral para suas comunidades e coletivos.",
    turnos: [
      { quando: "Sexta · 19h às 22h30", tema: "Memória, Leitura e Manifestação", texto: "Raízes e tradições transpostas para as manifestações contemporâneas e o diálogo entre as expressões locais e seus territórios de origem." },
      { quando: "Sábado · 8h às 12h", tema: "Identidade Cultural", texto: "Identificação e vivência das diversas heranças culturais praticadas no território." },
      { quando: "Sábado · 14h às 18h", tema: "A Alma dos Instrumentos Musicais", texto: "Artesania e luthieria popular, com prática percussiva em instrumentos musicais de couro e madeira." },
      { quando: "Domingo · 9h às 12h30", tema: "Plasticidade Brincante", texto: "O significado de máscaras e figurinos na construção do brincante popular e da identidade local." },
    ],
    publico: "Artistas, agentes culturais e brincantes populares; membros de grupos de música, dança e comunidades quilombolas, indígenas ou tradicionais; estudantes de música, dança e artes.",
    docentes: ["daraina", "noel", "celso", "terena", "manu"],
    fotos: ["assets/img/modulos/m1-01.jpg"],
    formOption: "Módulo 1: de 06 a 08/11/26 - Formação e Manutenção de grupos e coletivos culturais e artísticos",
    whatsappGrupo: "https://chat.whatsapp.com/CMhF2TySvSIEyA2Bg538ap",
  },
  {
    numero: 2,
    slug: "carnaval-de-rua",
    titulo: "O Carnaval de Rua do Rio de Janeiro",
    subtitulo: "semelhanças e diferenças entre os territórios · Intercâmbio Nacional",
    tituloCurto: "Carnaval de Rua RJ",
    datas: "11 a 13 de dezembro de 2026",
    datasCurtas: "11–13 dez 2026",
    cor: "#B8492C",
    resumo:
      "Um intercâmbio direto com a tradição das escolas de samba e dos blocos do Rio de Janeiro. A turma monta uma bateria de rua, aprende seus arranjos e convenções e coloca o sotaque carioca em diálogo com o sotaque goiano.",
    turnos: [
      { quando: "Sexta · 19h às 22h", tema: "Introdução à Bateria de Rua", texto: "Estrutura e hierarquia da bateria: mestre, chefes de naipe, diálogo entre os naipes e disposição espacial." },
      { quando: "Sábado · 8h às 12h", tema: "Técnicas de Naipes", texto: "Surdos de marcação (1ª, 2ª e 3ª), caixas, repiques, chocalhos e tamborins, em diálogo com o sotaque local." },
      { quando: "Sábado · 14h às 18h", tema: "Orquestração de Rua", texto: "Arranjos e convenções rítmicas do samba carioca em diálogo com o sotaque goiano." },
      { quando: "Domingo · 9h às 13h", tema: "Prática de Rua", texto: "Cortejo de rua e regência de bateria." },
    ],
    publico: "Artistas, agentes culturais, músicos e ritmistas; interessados em percussão, bateria de rua, ritmos afro-brasileiros, arranjos e regência de cortejo.",
    docentes: ["lele", "noel"],
    fotos: ["assets/img/modulos/m2-01.jpg"],
    formOption: "Módulo 2 : de 11 a 13/12/26  - O carnaval de rua do Rio de Janeiro",
    whatsappGrupo: "https://chat.whatsapp.com/InGUiQ4kzySLlS29ipBzve",
  },
  {
    numero: 3,
    slug: "matriz-maranhense",
    titulo: "Matriz Maranhense",
    subtitulo: "os vários sotaques e influências da cultura popular maranhense no território goiano · Intercâmbio Nacional",
    tituloCurto: "Matriz Maranhense",
    datas: "05 a 07 de março de 2027",
    datasCurtas: "05–07 mar 2027",
    cor: "#9E2B25",
    resumo:
      "Ritmos, danças e expressões da cultura maranhense pela experimentação prática: instrumentos musicais tradicionais, movimentação corporal e a polirritmia do bumba-meu-boi, com um dos maiores mestres dessa tradição.",
    turnos: [
      { quando: "Sexta · 19h às 22h", tema: "Introdução à Matriz Maranhense", texto: "Os sotaques do bumba-meu-boi, com foco no sotaque da Baixada: pandeirões, matracas e maracás." },
      { quando: "Sábado · 8h às 12h", tema: "Cacuriá e brincadeiras de caixa", texto: "Os toques de caixa de folia ou do Divino e outras brincadeiras de roda e suas coreografias." },
      { quando: "Sábado · 14h às 18h", tema: "O Corpo que Brinca", texto: "As expressões do São João e do carnaval maranhense: ludicidade, criatividade e o que elas têm em comum com a cultura goiana." },
      { quando: "Domingo · 9h às 13h", tema: "Tambor de Crioula", texto: "Dança, toques e ritmo, encerrando com uma grande roda de tambor de crioula." },
    ],
    publico: "Artistas e agentes culturais; membros de grupos de música, dança e cultura popular; comunidades quilombolas, indígenas ou tradicionais; estudantes e professores de música, dança e artes.",
    docentes: ["tiao"],
    apoio: "Com o apoio dos brincantes do Boi do Rosário.",
    fotos: [
      "assets/img/modulos/m3-01.jpg",
      "assets/img/modulos/m3-02.jpg",
      "assets/img/modulos/m3-03.jpg",
      "assets/img/modulos/m3-04.jpg",
      "assets/img/modulos/m3-05.jpg",
      "assets/img/modulos/m3-06.jpg",
    ],
    formOption: "Módulo 3 : de 05 a 07/03/27  - Matriz maranhense",
    whatsappGrupo: "https://chat.whatsapp.com/IqqZ4kSjgEDG2xDJ4QBzgQ",
  },
  {
    numero: 4,
    slug: "cultura-popular-e-tradicao",
    titulo: "Diálogo entre Cultura Popular e Tradição",
    subtitulo: "enriquecimentos e tensionamentos",
    tituloCurto: "Cultura Popular e Tradição",
    datas: "02 a 04 de abril de 2027",
    datasCurtas: "02–04 abr 2027",
    cor: "#4F6E2E",
    resumo:
      "O encontro entre o que a tradição preserva e o que a cultura popular transforma. Um mergulho nas caixas de folia, nos couros e na transmissão oral dos saberes goianos.",
    turnos: [
      { quando: "Sexta · 19h às 22h", tema: "Manifestações da Tradição Goiana", texto: "As manifestações que usam caixas de folia (ou caixas do Divino) e a riqueza rítmica da tradição." },
      { quando: "Sábado · 8h às 12h", tema: "Prática de Pandeiros e Caixas de Folia", texto: "Os vários tipos de pandeiros e caixas de folia, instrumentos musicais fundamentais da música tradicional local." },
      { quando: "Sábado · 14h às 18h", tema: "Técnica de Couros", texto: "Tensão, timbres e modos de afinação dos instrumentos musicais de couro na tradição." },
      { quando: "Domingo · 9h às 13h", tema: "Pontes Rítmicas", texto: "A tradição oral dos quintais culturais e a transmissão de saberes entre gerações." },
    ],
    publico: "Artistas, agentes culturais e membros de grupos de música, dança e cultura popular; comunidades quilombolas, indígenas ou tradicionais; estudantes e professores de música, dança e artes.",
    docentes: ["noel", "celso", "bine", "manu"],
    apoio: "Com a participação das Caixeiras da Flor de Pequi (@flor.de.pequi.ritos), grupo intergeracional de brincantes de Pirenópolis.",
    fotos: ["assets/img/modulos/m4-01.jpg", "assets/img/modulos/m4-02.jpg", "assets/img/modulos/m4-03.jpg"],
    formOption: "Módulo 4 : 02 a 04/04/27 - Diálogo entre cultura popular e tradição",
    whatsappGrupo: "https://chat.whatsapp.com/DhatdcAkeFb3HvBdHNcTn3",
  },
  {
    numero: 5,
    slug: "samba-de-roda",
    titulo: "O Samba de Roda",
    subtitulo: "raízes e movimentos",
    tituloCurto: "Samba de Roda",
    datas: "30 de abril a 02 de maio de 2027",
    datasCurtas: "30 abr–02 mai 2027",
    cor: "#7A4428",
    resumo:
      "Da história à roda: a origem africana do samba de roda, sua evolução, sua importância social no Brasil e sua chegada a Goiás, vividas na prática com os guardiões da Serrinha.",
    turnos: [
      { quando: "Sexta · 19h às 22h", tema: "Introdução", texto: "Origem e evolução do samba de roda, a influência africana e sua importância como patrimônio cultural imaterial." },
      { quando: "Sábado · 8h às 12h", tema: "Prática I", texto: "Técnicas de percussão em instrumentos musicais típicos: pandeiro, atabaque e ganzá." },
      { quando: "Sábado · 14h às 18h", tema: "Prática II", texto: "Habilidades coreográficas e improvisação, com os movimentos e gestos característicos." },
      { quando: "Domingo · 9h às 13h", tema: "Prática III", texto: "Roda prática integrando percussão, canto, coreografia e improvisação." },
    ],
    publico: "Músicos, dançarinos, capoeiristas, professores e estudantes da área cultural; interessados em cultura afro-brasileira; membros de comunidades quilombolas, indígenas ou tradicionais.",
    docentes: ["goyano", "antonia"],
    fotos: ["assets/img/modulos/m5-01.jpg", "assets/img/modulos/m5-02.jpg"],
    formOption: "Módulo 5 : 30/04 a 02/05/27  - O samba de roda",
    whatsappGrupo: "https://chat.whatsapp.com/G5bi93bJXvrK8vMVYkqdPU",
  },
  {
    numero: 6,
    slug: "gestao-e-cortejo",
    titulo: "Gestão de Coletivos, Acessibilidade e Produção de Eventos",
    tituloCurto: "Gestão, Acessibilidade e Cortejo",
    datas: "04 a 06 de junho de 2027",
    datasCurtas: "04–06 jun 2027",
    cor: "#2B5883",
    resumo:
      "O módulo de encerramento instrumentaliza os participantes para a gestão e a sustentabilidade dos seus coletivos, com estratégias práticas de acessibilidade e inclusão, e termina num cortejo pelas ruas do Alto do Bonfim.",
    turnos: [
      { quando: "Sexta · 19h às 22h", tema: "Metodologias de Transmissão", texto: "A roda como método educativo, a partir dos princípios da Pedagogia do Quintal." },
      { quando: "Sábado · 8h às 12h", tema: "Logística e Fluxos", texto: "Ocupação do espaço público e fluxos de cortejo." },
      { quando: "Sábado · 14h às 16h", tema: "Planejamento Inclusivo", texto: "Acessibilidade, diversidade, inclusão e democratização do acesso na produção de eventos." },
      { quando: "Sábado · 17h às 19h", tema: "Cortejo de Encerramento", texto: "Aula-espetáculo nas ruas do Bairro Alto do Bonfim, aberta à comunidade." },
      { quando: "Domingo · 9h às 13h", tema: "Roda de Encerramento", texto: "Avaliação coletiva do curso e entrega de certificados." },
    ],
    publico: "Artistas, agentes culturais, produtores e gestores de projetos culturais; membros de grupos de música, dança e cultura popular; comunidades quilombolas, indígenas ou tradicionais.",
    docentes: ["daraina", "noel", "karla"],
    fotos: ["assets/img/modulos/m6-01.jpg", "assets/img/modulos/m6-02.jpg", "assets/img/modulos/m6-cadeira-croche.jpg"],
    formOption: "Módulo 6 : 04 a 06/06/27 - Gestão de coletivos, acessibilidade e produção de eventos",
    whatsappGrupo: "https://chat.whatsapp.com/Dnw0dGBcXMY5VbM7oioQcH",
  },
];
