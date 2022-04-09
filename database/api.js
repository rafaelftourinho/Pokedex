// eslint-disable-next-line max-lines
const pokemons = [
  {
    id: 1,
    nome: 'Bulbasaur',
    tipo: 'Grama / Veneno',
    hp: 220,
    ataque: 240,
    defesa: 260,
    velocidade: 200,
    total: 920,
    habilidades: [
      {
        habilidade1: 'Folha navalha',
        habilidade2: 'Absorver',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
  },

  {
    id: 2,
    nome: 'Ivysauro',
    tipo: 'Grama / Veneno',
    hp: 280,
    ataque: 280,
    defesa: 300,
    velocidade: 240,
    total: 1100,
    habilidades: [
      {
        habilidade1: 'Leech Seed',
        habilidade2: 'Stunspore',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png',
  },

  {
    id: 3,
    nome: 'Venossauro',
    tipo: 'Grama / Veneno',
    hp: 320,
    ataque: 320,
    defesa: 350,
    velocidade: 260,
    total: 1250,
    habilidades: [
      {
        habilidade1: 'Raio de Sol',
        habilidade2: 'SleepPowder',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png',
  },

  {
    id: 4,
    nome: 'Charmander',
    tipo: 'Fogo',
    hp: 240,
    ataque: 260,
    defesa: 240,
    velocidade: 260,
    total: 1000,
    habilidades: [
      {
        habilidade1: 'Lança-chamas',
        habilidade2: 'Cabeçada',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
  },

  {
    id: 5,
    nome: 'Charmeleon',
    tipo: 'Fogo',
    hp: 270,
    ataque: 300,
    defesa: 250,
    velocidade: 300,
    total: 1120,
    habilidades: [
      {
        habilidade1: 'Golpe de Chamas',
        habilidade2: 'Chamas Furiosas',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png',
  },

  {
    id: 6,
    nome: 'Charizard',
    tipo: 'Fogo',
    hp: 310,
    ataque: 350,
    defesa: 290,
    velocidade: 370,
    total: 1320,
    habilidades: [
      {
        habilidade1: 'Incinerar',
        habilidade2: 'Raio de Calor',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png',
  },

  {
    id: 7,
    nome: 'Squirtle',
    tipo: 'Água',
    hp: 220,
    ataque: 200,
    defesa: 240,
    velocidade: 210,
    total: 870,
    habilidades: [
      {
        habilidade1: 'Bolha',
        habilidade2: 'Revolver de Água',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
  },

  {
    id: 8,
    nome: 'Wartotle',
    tipo: 'Água',
    hp: 250,
    ataque: 250,
    defesa: 300,
    velocidade: 240,
    total: 1040,
    habilidades: [
      {
        habilidade1: 'Carapaça Forte',
        habilidade2: 'Aqua Corte',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png',
  },

  {
    id: 9,
    nome: 'Blastoise',
    tipo: 'Água',
    hp: 330,
    ataque: 280,
    defesa: 330,
    velocidade: 270,
    total: 1210,
    habilidades: [
      {
        habilidade1: 'Dança da Chuva',
        habilidade2: 'Investida de Água',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png',
  },

  {
    id: 10,
    nome: 'Caterpie',
    tipo: 'Inseto',
    hp: 200,
    ataque: 200,
    defesa: 230,
    velocidade: 200,
    total: 830,
    habilidades: [
      {
        habilidade1: 'Bando',
        habilidade2: 'Picada',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png',
  },

  {
    id: 11,
    nome: 'Metapod',
    tipo: 'Inseto',
    hp: 240,
    ataque: 220,
    defesa: 240,
    velocidade: 210,
    total: 910,
    habilidades: [
      {
        habilidade1: 'Exoesqueleto',
        habilidade2: 'Aríate',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png',
  },

  {
    id: 12,
    nome: 'Butterfree',
    tipo: 'Inseto / Voador',
    hp: 280,
    ataque: 320,
    defesa: 270,
    velocidade: 290,
    total: 1160,
    habilidades: [
      {
        habilidade1: 'Escamas Tricolores',
        habilidade2: 'Lufada de Vento',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png',
  },

  {
    id: 13,
    nome: 'Weedle',
    tipo: 'Inseto / Venenoso',
    hp: 220,
    ataque: 250,
    defesa: 200,
    velocidade: 200,
    total: 870,
    habilidades: [
      {
        habilidade1: 'Perfurar',
        habilidade2: 'Presentimento de Inseto',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/013.png',
  },

  {
    id: 14,
    nome: 'Kakuna',
    tipo: 'Inseto / Venenoso',
    hp: 250,
    ataque: 220,
    defesa: 280,
    velocidade: 230,
    total: 980,
    habilidades: [
      {
        habilidade1: 'Fortificar',
        habilidade2: 'Picada',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/014.png',
  },

  {
    id: 15,
    nome: 'Beedril',
    tipo: 'Inseto / Venenoso',
    hp: 290,
    ataque: 420,
    defesa: 310,
    velocidade: 270,
    total: 1290,
    habilidades: [
      {
        habilidade1: 'Ferroada Persistente',
        habilidade2: 'Lança a jato',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/015.png',
  },

  {
    id: 16,
    nome: 'Pidgey',
    tipo: 'Normal / Voador',
    hp: 210,
    ataque: 220,
    defesa: 210,
    velocidade: 240,
    total: 880,
    habilidades: [
      {
        habilidade1: 'Coleta',
        habilidade2: 'Lufada de Vento',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png',
  },

  {
    id: 17,
    nome: 'Pidgeotto',
    tipo: 'Normal / Voador',
    hp: 240,
    ataque: 260,
    defesa: 240,
    velocidade: 290,
    total: 1030,
    habilidades: [
      {
        habilidade1: 'Correio Aério',
        habilidade2: 'Lufada de Vento',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/017.png',
  },

  {
    id: 18,
    nome: 'Pidgeot',
    tipo: 'Normal / Voador',
    hp: 280,
    ataque: 300,
    defesa: 280,
    velocidade: 330,
    total: 1190,
    habilidades: [
      {
        habilidade1: 'Ataque de Vento',
        habilidade2: 'Tempestade Giratória',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/018.png',
  },
  {
    id: 19,
    nome: 'Ratatta',
    tipo: 'Normal',
    hp: 200,
    ataque: 240,
    defesa: 210,
    velocidade: 230,
    total: 880,
    habilidades: [
      {
        habilidade1: 'Focalizar Energia',
        habilidade2: 'Mordida',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/019.png',
  },

  {
    id: 20,
    nome: 'Raticate',
    tipo: 'Normal',
    hp: 280,
    ataque: 310,
    defesa: 250,
    velocidade: 290,
    total: 1130,
    habilidades: [
      {
        habilidade1: 'Presa Acentuada',
        habilidade2: 'Hiperpresa',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/020.png',
  },

  {
    id: 21,
    nome: 'Spearow',
    tipo: 'Normal / Voador',
    hp: 220,
    ataque: 230,
    defesa: 210,
    velocidade: 240,
    total: 900,
    habilidades: [
      {
        habilidade1: 'Bicada',
        habilidade2: 'Mergulo Veloz',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/021.png',
  },

  {
    id: 22,
    nome: 'Fearow',
    tipo: 'Normal / Voador',
    hp: 270,
    ataque: 300,
    defesa: 240,
    velocidade: 310,
    total: 1120,
    habilidades: [
      {
        habilidade1: 'Bico Broca',
        habilidade2: 'Ataque Cortante',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/022.png',
  },

  {
    id: 23,
    nome: 'Ekans',
    tipo: 'Venenoso',
    hp: 210,
    ataque: 230,
    defesa: 210,
    velocidade: 230,
    total: 880,
    habilidades: [
      {
        habilidade1: 'Aríate',
        habilidade2: 'Surpresa de Cauda',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/023.png',
  },

  {
    id: 24,
    nome: 'Arbok',
    tipo: 'Venenoso',
    hp: 270,
    ataque: 300,
    defesa: 250,
    velocidade: 280,
    total: 1100,
    habilidades: [
      {
        habilidade1: 'Asfixia Pesada',
        habilidade2: 'Dente Venenoso',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/024.png',
  },

  {
    id: 25,
    nome: 'Pikachu',
    tipo: 'Elétrico',
    hp: 220,
    ataque: 280,
    defesa: 240,
    velocidade: 280,
    total: 1020,
    habilidades: [
      {
        habilidade1: 'Choque do trovão',
        habilidade2: 'Cabeçada',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png',
  },

  {
    id: 26,
    nome: 'Raichu',
    tipo: 'Elétrico',
    hp: 280,
    ataque: 300,
    defesa: 260,
    velocidade: 330,
    total: 1170,
    habilidades: [
      {
        habilidade1: 'Carga Veloz',
        habilidade2: 'Trovão',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png',
  },

  {
    id: 27,
    nome: 'Sandshrew',
    tipo: 'Terrestre',
    hp: 220,
    ataque: 240,
    defesa: 240,
    velocidade: 220,
    total: 920,
    habilidades: [
      {
        habilidade1: 'Desaterrar',
        habilidade2: 'Vamos Botar pra Rolar',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/027.png',
  },

  {
    id: 28,
    nome: 'Sandslash',
    tipo: 'Terrestre',
    hp: 280,
    ataque: 290,
    defesa: 330,
    velocidade: 240,
    total: 1140,
    habilidades: [
      {
        habilidade1: 'Cavar pra Cima',
        habilidade2: 'Fosso de Areia',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/028.png',
  },

  {
    id: 29,
    nome: 'Nidoran',
    tipo: 'Venenoso',
    hp: 240,
    ataque: 220,
    defesa: 240,
    velocidade: 210,
    total: 910,
    habilidades: [
      {
        habilidade1: 'Chamar a Família',
        habilidade2: 'Arranhão',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/029.png',
  },

  {
    id: 30,
    nome: 'Nidorina',
    tipo: 'Venenoso',
    hp: 280,
    ataque: 250,
    defesa: 250,
    velocidade: 240,
    total: 1020,
    habilidades: [
      {
        habilidade1: 'Resgatar a Família',
        habilidade2: 'Mordida',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/030.png',
  },

  {
    id: 31,
    nome: 'Nidoqueen',
    tipo: 'Venenoso / Terrestre',
    hp: 300,
    ataque: 300,
    defesa: 300,
    velocidade: 260,
    total: 1160,
    habilidades: [
      {
        habilidade1: 'Chamado da Rainha',
        habilidade2: 'Lariat Poderoso',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/031.png',
  },

  {
    id: 32,
    nome: 'Nidoran ♂',
    tipo: 'Venenoso',
    hp: 220,
    ataque: 240,
    defesa: 220,
    velocidade: 220,
    total: 900,
    habilidades: [
      {
        habilidade1: 'Bicada',
        habilidade2: 'Ataque de Chifre',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/032.png',
  },

  {
    id: 33,
    nome: 'Nidorino',
    tipo: 'Venenoso',
    hp: 250,
    ataque: 290,
    defesa: 250,
    velocidade: 250,
    total: 1040,
    habilidades: [
      {
        habilidade1: 'Bicada',
        habilidade2: 'Chifre Broca',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/033.png',
  },

  {
    id: 34,
    nome: 'Nidoking',
    tipo: 'Venenoso / Terrestre',
    hp: 300,
    ataque: 340,
    defesa: 300,
    velocidade: 300,
    total: 1240,
    habilidades: [
      {
        habilidade1: 'Arrastar para Fora',
        habilidade2: 'Pancada do Rei',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/034.png',
  },

  {
    id: 35,
    nome: 'Clefairy',
    tipo: 'Fada',
    hp: 280,
    ataque: 220,
    defesa: 200,
    velocidade: 200,
    total: 900,
    habilidades: [
      {
        habilidade1: 'Pancada',
        habilidade2: 'Tiro Mágico',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png',
  },

  {
    id: 36,
    nome: 'Clefable',
    tipo: 'Fada',
    hp: 320,
    ataque: 260,
    defesa: 230,
    velocidade: 220,
    total: 1030,
    habilidades: [
      {
        habilidade1: 'Milagre Enluarado',
        habilidade2: 'Tiro Mágico',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/036.png',
  },

  {
    id: 37,
    nome: 'Vulpix',
    tipo: 'Fogo',
    hp: 220,
    ataque: 230,
    defesa: 210,
    velocidade: 240,
    total: 900,
    habilidades: [
      {
        habilidade1: 'Carvão Vivo',
        habilidade2: 'Chute Poderoso',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/037.png',
  },

  {
    id: 38,
    nome: 'Ninetales',
    tipo: 'Fogo',
    hp: 290,
    ataque: 310,
    defesa: 250,
    velocidade: 320,
    total: 1170,
    habilidades: [
      {
        habilidade1: 'Chamas Sobrenaturais',
        habilidade2: 'Calda de Chamas',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png',
  },

  {
    id: 39,
    nome: 'Jigglypuff',
    tipo: 'Normal / Fada',
    hp: 290,
    ataque: 210,
    defesa: 220,
    velocidade: 220,
    total: 940,
    habilidades: [
      {
        habilidade1: 'Pancada',
        habilidade2: 'Vamos Botar pra Rolar',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png',
  },

  {
    id: 40,
    nome: 'Wigglytuff',
    tipo: 'Normal / Fada',
    hp: 420,
    ataque: 250,
    defesa: 250,
    velocidade: 250,
    total: 1170,
    habilidades: [
      {
        habilidade1: 'Encontrar Tesouro',
        habilidade2: 'Hiperpancada',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/040.png',
  },

  {
    id: 41,
    nome: 'Zubat',
    tipo: 'Venenoso / Voador',
    hp: 220,
    ataque: 220,
    defesa: 210,
    velocidade: 250,
    total: 900,
    habilidades: [
      {
        habilidade1: 'Esconde nas Sombras',
        habilidade2: 'Mergulho Veloz',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/041.png',
  },

  {
    id: 42,
    nome: 'Golbat',
    tipo: 'Venenoso / Voador',
    hp: 280,
    ataque: 290,
    defesa: 250,
    velocidade: 330,
    total: 1150,
    habilidades: [
      {
        habilidade1: 'Compra Discreta',
        habilidade2: 'Golpe de Ar',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/042.png',
  },

  {
    id: 43,
    nome: 'Oddish',
    tipo: 'Grama / Venenoso',
    hp: 230,
    ataque: 240,
    defesa: 250,
    velocidade: 210,
    total: 930,
    habilidades: [
      {
        habilidade1: 'Aroma Doce',
        habilidade2: 'Pó Venenoso',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/043.png',
  },

  {
    id: 44,
    nome: 'Gloom',
    tipo: 'Grama / Venenoso',
    hp: 250,
    ataque: 270,
    defesa: 270,
    velocidade: 220,
    total: 1010,
    habilidades: [
      {
        habilidade1: 'Pó de Sono',
        habilidade2: 'Aroma Fétido',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/044.png',
  },

  {
    id: 45,
    nome: 'Vileplume',
    tipo: 'Grama / Venenoso',
    hp: 270,
    ataque: 290,
    defesa: 290,
    velocidade: 240,
    total: 1090,
    habilidades: [
      {
        habilidade1: 'Jardim de Flores Perfumadas',
        habilidade2: 'Florescer Intenso',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/045.png',
  },

  {
    id: 46,
    nome: 'Paras',
    tipo: 'Inseto / Grama',
    hp: 230,
    ataque: 240,
    defesa: 240,
    velocidade: 200,
    total: 910,
    habilidades: [
      {
        habilidade1: 'Talho',
        habilidade2: 'Arranhão',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/046.png',
  },

  {
    id: 47,
    nome: 'Parasect',
    tipo: 'Inseto / Grama',
    hp: 250,
    ataque: 340,
    defesa: 260,
    velocidade: 220,
    total: 1070,
    habilidades: [
      {
        habilidade1: 'Colisão de Cogumelo',
        habilidade2: 'Raio Solar',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/047.png',
  },

  {
    id: 48,
    nome: 'Venonat',
    tipo: 'Inseto / Venenoso',
    hp: 220,
    ataque: 240,
    defesa: 230,
    velocidade: 220,
    total: 910,
    habilidades: [
      {
        habilidade1: 'Baque',
        habilidade2: 'Feixe Psíquico',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/048.png',
  },

  {
    id: 49,
    nome: 'Venomoth',
    tipo: 'Inseto / Venenoso',
    hp: 280,
    ataque: 290,
    defesa: 250,
    velocidade: 290,
    total: 1110,
    habilidades: [
      {
        habilidade1: 'Voo Agressivo',
        habilidade2: 'Pó Venenoso',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/049.png',
  },

  {
    id: 50,
    nome: 'Digglet',
    tipo: 'Terrestre',
    hp: 180,
    ataque: 230,
    defesa: 200,
    velocidade: 260,
    total: 870,
    habilidades: [
      {
        habilidade1: 'Cavar',
        habilidade2: 'Arranhão',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/050.png',
  },

  {
    id: 51,
    nome: 'Dugtrio',
    tipo: 'Terrestre',
    hp: 240,
    ataque: 260,
    defesa: 230,
    velocidade: 380,
    total: 1110,
    habilidades: [
      {
        habilidade1: 'Trio de Caras',
        habilidade2: 'Bomba de Lamas',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/051.png',
  },

  {
    id: 52,
    nome: 'Meowth',
    tipo: 'Normal',
    hp: 240,
    ataque: 240,
    defesa: 240,
    velocidade: 280,
    total: 1000,
    habilidades: [
      {
        habilidade1: 'Dia do Pagamento',
        habilidade2: 'Fingimento',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/052.png',
  },

  {
    id: 53,
    nome: 'Persian',
    tipo: 'Normal',
    hp: 270,
    ataque: 290,
    defesa: 260,
    velocidade: 320,
    total: 1140,
    habilidades: [
      {
        habilidade1: 'Dia do Pagamento',
        habilidade2: 'Mordida',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/053.png',
  },

  {
    id: 54,
    nome: 'Psyduck',
    tipo: 'Água',
    hp: 220,
    ataque: 240,
    defesa: 210,
    velocidade: 240,
    total: 910,
    habilidades: [
      {
        habilidade1: 'Chuva Borrifante',
        habilidade2: 'Arranhão',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/054.png',
  },

  {
    id: 55,
    nome: 'Golduck',
    tipo: 'Água',
    hp: 270,
    ataque: 310,
    defesa: 270,
    velocidade: 270,
    total: 1120,
    habilidades: [
      {
        habilidade1: 'Feixe Psíquico',
        habilidade2: 'Surfar',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/055.png',
  },

  {
    id: 56,
    nome: 'Mankey',
    tipo: 'Lutador',
    hp: 220,
    ataque: 250,
    defesa: 230,
    velocidade: 250,
    total: 950,
    habilidades: [
      {
        habilidade1: 'Arranhão',
        habilidade2: 'Punho Focalizado',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/056.png',
  },

  {
    id: 57,
    nome: 'Primeape',
    tipo: 'Lutador',
    hp: 250,
    ataque: 310,
    defesa: 260,
    velocidade: 300,
    total: 1120,
    habilidades: [
      {
        habilidade1: 'Soco Tenaz',
        habilidade2: 'Destruir',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/057.png',
  },

  {
    id: 58,
    nome: 'Growlithe',
    tipo: 'Fogo',
    hp: 230,
    ataque: 260,
    defesa: 220,
    velocidade: 230,
    total: 940,
    habilidades: [
      {
        habilidade1: 'Aquecer',
        habilidade2: 'Combustão',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/058.png',
  },

  {
    id: 59,
    nome: 'Arcanine',
    tipo: 'Fogo',
    hp: 280,
    ataque: 320,
    defesa: 250,
    velocidade: 280,
    total: 1130,
    habilidades: [
      {
        habilidade1: 'Garras de Fogo',
        habilidade2: 'Golpe de Colisão de Fogo',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/059.png',
  },

  {
    id: 60,
    nome: 'Poliwag',
    tipo: 'Água',
    hp: 220,
    ataque: 220,
    defesa: 220,
    velocidade: 260,
    total: 920,
    habilidades: [
      {
        habilidade1: "Revolver d'água",
        habilidade2: "Jato D'água",
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/060.png',
  },

  {
    id: 61,
    nome: 'Poliwhirl',
    tipo: 'Água',
    hp: 240,
    ataque: 240,
    defesa: 240,
    velocidade: 290,
    total: 1010,
    habilidades: [
      {
        habilidade1: "Tapa Duplo",
        habilidade2: "Onda Borrifante",
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/061.png',
  },

  {
    id: 62,
    nome: 'Poliwrath',
    tipo: 'Água / Lutador',
    hp: 290,
    ataque: 300,
    defesa: 280,
    velocidade: 270,
    total: 1140,
    habilidades: [
      {
        habilidade1: "Soco Espiral Dividido",
        habilidade2: "Tapa do Despertar",
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/062.png',
  },

  {
    id: 63,
    nome: 'Abra',
    tipo: 'Psíquico',
    hp: 200,
    ataque: 250,
    defesa: 180,
    velocidade: 250,
    total: 880,
    habilidades: [
      {
        habilidade1: "Teleporte",
        habilidade2: "Rugir",
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/063.png',
  },

  {
    id: 64,
    nome: 'Kadabra',
    tipo: 'Psíquico',
    hp: 220,
    ataque: 290,
    defesa: 200,
    velocidade: 290,
    total: 1000,
    habilidades: [
      {
        habilidade1: 'Psíquico',
        habilidade2: 'Raio Psíquico',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/064.png',
  },

  {
    id: 65,
    nome: 'Alakazam',
    tipo: 'Psíquico',
    hp: 240,
    ataque: 350,
    defesa: 220,
    velocidade: 350,
    total: 1160,
    habilidades: [
      {
        habilidade1: 'Colher Zen',
        habilidade2: 'Comando Mental',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/065.png',
  },

  {
    id: 66,
    nome: 'Machop',
    tipo: 'Lutador',
    hp: 240,
    ataque: 250,
    defesa: 220,
    velocidade: 210,
    total: 920,
    habilidades: [
      {
        habilidade1: 'Rasteira',
        habilidade2: 'Soco Firme',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/066.png',
  },

  {
    id: 67,
    nome: 'Machoke',
    tipo: 'Lutador',
    hp: 260,
    ataque: 270,
    defesa: 240,
    velocidade: 220,
    total: 990,
    habilidades: [
      {
        habilidade1: 'Rasteira',
        habilidade2: 'Esmurrar',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/067.png',
  },

  {
    id: 68,
    nome: 'Machamp',
    tipo: 'Lutador',
    hp: 290,
    ataque: 320,
    defesa: 260,
    velocidade: 230,
    total: 1100,
    habilidades: [
      {
        habilidade1: 'Machocante',
        habilidade2: 'Soco Dinamite',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/068.png',
  },

  {
    id: 69,
    nome: 'Bellsprout',
    tipo: 'Grama / Venenoso',
    hp: 230,
    ataque: 240,
    defesa: 220,
    velocidade: 230,
    total: 920,
    habilidades: [
      {
        habilidade1: 'Venochoque',
        habilidade2: 'Chicote de Vinha',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/069.png',
  },

  {
    id: 70,
    nome: 'Weepinbell',
    tipo: 'Grama / Venenoso',
    hp: 250,
    ataque: 270,
    defesa: 240,
    velocidade: 250,
    total: 1010,
    habilidades: [
      {
        habilidade1: 'Mucosa Perigosa',
        habilidade2: 'Chicote de Vinha',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/070.png',
  },

  {
    id: 71,
    nome: 'Victreebel',
    tipo: 'Grama / Venenoso',
    hp: 270,
    ataque: 310,
    defesa: 250,
    velocidade: 250,
    total: 1080,
    habilidades: [
      {
        habilidade1: 'Vinha de Pânico',
        habilidade2: 'Raio Solar',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/071.png',
  },
    
  {
    id: 72,
    nome: 'Tentacool',
    tipo: 'Água / Venenoso',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    total: 2100,
    habilidades: [
      {
        habilidade1: 'Ácido',
        habilidade2: 'Arma de Água',
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/072.png'
  },

  {
    id: 73,
    nome: 'Tentacruel',
    tipo: 'Água / Venenoso',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    total: 2100,
    habilidades: [
      {
        habilidade1: 'Picada Venenosa',
        habilidade2: 'Hidrobomba',
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/073.png'
  },

  {
    id: 74,
    nome: 'Geodude',
    tipo: 'Pedra / Terrestre',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    total: 2100,
    habilidades: [
      {
        habilidade1: 'Investida',
        habilidade2: 'Espiral de Defesa',
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/074.png'
  },

  {
    id: 75,
    nome: 'Graveler',
    tipo: 'Pedra / Terrestre',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    total: 2100,
    habilidades: [
      {
        habilidade1: 'Atira Pedras',
        habilidade2: 'Autodestruição',
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/075.png'
  },

  {
    id: 76,
    nome: 'Golem',
    tipo: 'Pedra / Terrestre',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    total: 2100,
    habilidades: [
      {
        habilidade1: 'Terremoto',
        habilidade2: 'Explosão',
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/076.png'
  },

  {
    id: 77,
    nome: 'Ponyta',
    tipo: 'Fogo',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    total: 2100,
    habilidades: [
      {
        habilidade1: 'Brasa',
        habilidade2: 'Ataque de Cauda',
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/077.png'
  },

  {
    id: 78,
    nome: 'Rapidash',
    tipo: 'Fogo',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    total: 2100,
    habilidades: [
      {
        habilidade1: 'Roda de Fogo',
        habilidade2: 'Desmantelar',
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/078.png'
  },

  {
    id: 79,
    nome: 'Slowpoke',
    tipo: 'Água / Psíquico',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    total: 2100,
    habilidades: [
      {
        habilidade1: 'Confusão',
        habilidade2: 'Inabilitar',
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/079.png'
  },

  {
    id: 80,
    nome: 'Slowbro',
    tipo: 'Água / Psíquico',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    total: 2100,
    habilidades: [
      {
        habilidade1: 'Ataque Psíquico',
        habilidade2: 'Arma de Água',
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/080.png'
  },

  {
    id: 81,
    nome: 'Magnemite',
    tipo: 'Elétrico / Metálico',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    total: 2100,
    habilidades: [
      {
        habilidade1: 'Explosão Sônica',
        habilidade2: 'Onda Trovão',
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/081.png'
  },

  {
    id: 82,
    nome: 'Magneton',
    tipo: 'Elétrico / Metálico',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    total: 2100,
    habilidades: [
      {
        habilidade1: 'Investida',
        habilidade2: 'Choque do Trovão',
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/082.png'
  },

  {
    id: 83,
    nome: "Farfetch'd",
    tipo: 'Normal / Voador',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    total: 2100,
    habilidades: [
      {
        habilidade1: 'Bicada',
        habilidade2: 'Talho',
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/083.png'
  },

  {
    id: 84,
    nome: 'Doduo',
    tipo: 'Normal / Voador',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    total: 2100,
    habilidades: [
      {
        habilidade1: 'Bicada',
        habilidade2: 'Ataque de Fúria',
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/084.png'
  },

  {
    id: 85,
    nome: 'Dodrio',
    tipo: 'Normal / Voador',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    total: 2100,
    habilidades: [
      {
        habilidade1: 'Bicada Broca',
        habilidade2: 'Tri Ataque',
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/085.png'
  },

  {
    id: 86,
    nome: 'Seel',
    tipo: 'Água',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    total: 2100,
    habilidades: [
      {
        habilidade1: 'Cabeçada',
        habilidade2: 'Descansar',
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/086.png'
  },

  {
    id: 87,
    nome: 'Dewgong',
    tipo: 'Água / Gelo',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    total: 2100,
    habilidades: [
      {
        habilidade1: 'Raio Aurora',
        habilidade2: 'Desmantelar',
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/087.png'
  },

  {
    id: 88,
    nome: 'Grimer',
    tipo: 'Venenoso',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    total: 2100,
    habilidades: [
      {
        habilidade1: 'Pancada',
        habilidade2: 'Gás Venenoso',
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/088.png'
  },

  {
    id: 89,
    nome: 'Muk',
    tipo: 'Venenoso',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    total: 2100,
    habilidades: [
      {
        habilidade1: 'Lodo',
        habilidade2: 'Armadura de Ácido',
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/089.png'
  },

  {
    id: 90,
    nome: 'Shellder',
    tipo: 'Água',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    total: 2100,
    habilidades: [
      {
        habilidade1: 'Investida',
        habilidade2: 'Retirada',
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/090.png'
  },

  {
    id: 91,
    nome: 'Cloyster',
    tipo: 'Água / Gelo',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    total: 2100,
    habilidades: [
      {
        habilidade1: 'Raio Aurora',
        habilidade2: 'Canhão de Espinhos',
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/091.png'
  },

  {
    id: 92,
    nome: 'Gastly',
    tipo: 'Fantasma',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    total: 2100,
    habilidades: [
      {
        habilidade1: 'Lambida',
        habilidade2: 'Raio de Confusão',
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/092.png'
  },

  {
    id: 93,
    nome: 'Haunter',
    tipo: 'Fantasma',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    total: 2100,
    habilidades: [
      {
        habilidade1: 'Hipnose',
        habilidade2: 'Comedor de Sonhos',
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/093.png'
  },

  {
    id: 94,
    nome: 'Gengar',
    tipo: 'Fantasma',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    total: 2100,
    habilidades: [
      {
        habilidade1: 'Esfera de Escuridão',
        habilidade2: 'Sombra da Noite',
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png'
  },

  {
    id: 95,
    nome: 'Onix',
    tipo: 'Pedra',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    total: 2100,
    habilidades: [
      {
        habilidade1: 'Investida',
        habilidade2: 'Prender',
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/095.png'
  },

  {
    id: 96,
    nome: 'Drowzee',
    tipo: 'Psíquico',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    total: 2100,
    habilidades: [
      {
        habilidade1: 'Hipnose',
        habilidade2: 'Confusão',
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/096.png'
  },

  {
    id: 97,
    nome: 'Hypno',
    tipo: 'Psíquico',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    total: 2100,
    habilidades: [
      {
        habilidade1: 'Hipnose',
        habilidade2: 'Comedor de Sonhos',
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/097.png'

  },

  {
    id: 98,
    nome: 'Krabby',
    tipo: 'Água',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    total: 2100,
    habilidades: [
      {
        habilidade1: 'Bolha',
        habilidade2: 'Encarar',
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/098.png'
  },

  {
    id: 99,
    nome: 'Kingler',
    tipo: 'Água',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    total: 2100,
    habilidades: [
      {
        habilidade1: 'Agarramento Compressor',
        habilidade2: 'Guilhotina',
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/099.png'
  },

  {
    id: 100,
    nome: 'Voltorb',
    tipo: 'Elétrico',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    total: 2100,
    habilidades: [
      {
        habilidade1: 'Investida',
        habilidade2: 'Autodestruição',
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/100.png'
  },

  {
    id: 101,
    nome: 'Electrode',
    tipo: 'Elétrico',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    total: 2100,
    habilidades: [
      {
        habilidade1: 'Explosão Sônica',
        habilidade2: 'Explosão',
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/101.png'
  },

  {
    id: 102,
    nome: 'Exeggcute',
    tipo: 'Grama / Psíquico',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    total: 2100,
    habilidades: [
      {
        habilidade1: 'Barricada',
        habilidade2: 'Hipnose',
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/102.png'
  },

  {
    id: 103,
    nome: 'Exeggutor',
    tipo: 'Grama / Psíquico',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    total: 2100,
    habilidades: [
      {
        habilidade1: 'Hipnose',
        habilidade2: 'Raio Solar',
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/103.png'
  },

  {
    id: 104,
    nome: 'Cubone',
    tipo: 'Terrestre',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    total: 2100,
    habilidades: [
      {
        habilidade1: 'Bastão de Osso',
        habilidade2: 'Raiva',
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/104.png'
  },

  {
    id: 105,
    nome: 'Marowak',
    tipo: 'Terrestre',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    total: 2100,
    habilidades: [
      {
        habilidade1: 'Bastão de Osso',
        habilidade2: 'Ossomerangue',
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/105.png'
  },

  {
    id: 106,
    nome: 'Hitmonlee',
    tipo: 'Lutador',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    total: 2100,
    habilidades: [
      {
        habilidade1: 'Chute Duplo',
        habilidade2: 'Mega Chute',
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/106.png'
  },

  {
    id: 107,
    nome: 'Hitmonchan',
    tipo: 'Lutador',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    total: 2100,
    habilidades: [
      {
        habilidade1: 'Soco de Cometa',
        habilidade2: 'Mega Soco',
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/107.png'
  },

  {
    id: 108,
    nome: 'Lickitung',
    tipo: 'Normal',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    total: 2100,
    habilidades: [
      {
        habilidade1: 'Enrolar',
        habilidade2: 'Pisotear',
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/108.png'
  },

  {
    id: 109,
    nome: 'Koofing',
    tipo: 'Venenoso',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    total: 2100,
    habilidades: [
      {
        habilidade1: 'Investida',
        habilidade2: 'Cortina de Fumaça',
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/109.png'
  },

  {
    id: 110,
    nome: 'Weezing',
    tipo: 'Venenoso',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    total: 2100,
    habilidades: [
      {
        habilidade1: 'Investida',
        habilidade2: 'Lodo',
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/110.png'
  },

  {
    id: 111,
    nome: 'Rhyhorn',
    tipo: 'Terrestre / Pedra',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    total: 2100,
    habilidades: [
      {
        habilidade1: 'Ataque de Chifre',
        habilidade2: 'Ataque de Cauda',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/111.png',
  },

  {
    id: 112,
    nome: 'Rhydon',
    tipo: 'Terrestre / Pedra',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    total: 2100,
    habilidades: [
      {
        habilidade1: 'Ataque de Chifre',
        habilidade2: 'Pisotear',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/112.png',
  },

  {
    id: 113,
    nome: 'Chansey',
    tipo: 'Normal',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    total: 2100,
    habilidades: [
      {
        habilidade1: 'Pancada',
        habilidade2: 'Tapa duplo',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/113.png',
  },

  {
    id: 114,
    nome: 'Tangela',
    tipo: 'Grama',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    total: 2100,
    habilidades: [
      {
        habilidade1: 'Contrair',
        habilidade2: 'Absorver',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/114.png',
  },

  {
    id: 115,
    nome: 'Kangaskhan',
    tipo: 'Normal',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    total: 2100,
    habilidades: [
      {
        habilidade1: 'Soco Cometa',
        habilidade2: 'Raiva',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/115.png',
  },

  {
    id: 116,
    nome: 'Horsea',
    tipo: 'Água',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    total: 2100,
    habilidades: [
      {
        habilidade1: 'Bolha',
        habilidade2: 'Cortina de Fumaça',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/116.png',
  },

  {
    id: 117,
    nome: 'Seadra',
    tipo: 'Água',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    total: 2100,
    habilidades: [
      {
        habilidade1: 'Encarar',
        habilidade2: 'Hidro bomba',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/117.png',
  },

  {
    id: 118,
    nome: 'Goldeen',
    tipo: 'Água',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    total: 2100,
    habilidades: [
      {
        habilidade1: 'Bicada',
        habilidade2: 'Ataque de Cauda',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/118.png',
  },

  {
    id: 119,
    nome: 'Seaking',
    tipo: 'Água',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    total: 2100,
    habilidades: [
      {
        habilidade1: 'Ataque de Chifre',
        habilidade2: 'Cachoeira',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/119.png',
  },

  {
    id: 120,
    nome: 'Staryu',
    tipo: 'Água',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    total: 2100,
    habilidades: [
      {
        habilidade1: 'Investida',
        habilidade2: 'Arma de Água',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/120.png',
  },

  {
    id: 121,
    nome: 'Starmie',
    tipo: 'Água / Psíquico',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    total: 2100,
    habilidades: [
      {
        habilidade1: 'Recuperar',
        habilidade2: 'Hidro bomba',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/121.png',
  },

  {
    id: 122,
    nome: 'Mr. Mime',
    tipo: 'Psíquico / Fada',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    total: 2100,
    habilidades: [
      {
        habilidade1: 'Confusão',
        habilidade2: 'Barreira',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/122.png',
  },

  {
    id: 123,
    nome: 'Scyther',
    tipo: 'Inseto / Voador',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    total: 2100,
    habilidades: [
      {
        habilidade1: 'Talho',
        habilidade2: 'Dança das Espadas',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/123.png',
  },

  {
    id: 124,
    nome: 'Jinx',
    tipo: 'Gelo / Psíquico',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    total: 2100,
    habilidades: [
      {
        habilidade1: 'Tapa',
        habilidade2: 'Soco de Gelo',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/124.png',
  },

  {
    id: 125,
    nome: 'Electabuzz',
    tipo: 'Elétrico',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    total: 2100,
    habilidades: [
      {
        habilidade1: 'Soco Trovoada',
        habilidade2: 'Ataque Rápido',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/125.png',
  },

  {
    id: 126,
    nome: 'Magmar',
    tipo: 'Fogo',
    hp: 400,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    total: 2100,
    habilidades: [
      {
        habilidade1: 'Soco de Fogo',
        habilidade2: 'Lança Chamas',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/126.png',
  },

  {
    id: 127,
    nome: 'Pinsir',
    tipo: 'Inseto',
    hp: 400,
    ataque: 800,
    defesa: 600,
    velocidade: 500,
    total: 2300,
    habilidades: [
      {
        habilidade1: 'Agarramento Compressor',
        habilidade2: 'Arremesso Sísmico',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/127.png',
  },

  {
    id: 128,
    nome: 'Tauros',
    tipo: 'Normal',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 400,
    total: 1900,
    habilidades: [
      {
        habilidade1: 'Investida',
        habilidade2: 'Pisotear',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/128.png',
  },

  {
    id: 129,
    nome: 'Magikarp',
    tipo: 'Água',
    hp: 200,
    ataque: 100,
    defesa: 400,
    velocidade: 500,
    total: 1200,
    habilidades: [
      {
        habilidade1: 'Borrifada',
        habilidade2: 'Investida',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/129.png',
  },

  {
    id: 130,
    nome: 'Gyarados',
    tipo: 'Água',
    hp: 300,
    ataque: 600,
    defesa: 500,
    velocidade: 300,
    total: 1700,
    habilidades: [
      {
        habilidade1: 'Fúria do Dragão',
        habilidade2: 'Hidro bomba',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/130.png',
  },

  {
    id: 131,
    nome: 'Lapras',
    tipo: 'Água / Gelo',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 400,
    total: 1900,
    habilidades: [
      {
        habilidade1: 'Arma de Água',
        habilidade2: 'Névoa',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/131.png',
  },

  {
    id: 132,
    nome: 'Ditto',
    tipo: 'Normal',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 400,
    total: 1900,
    habilidades: [
      {
        habilidade1: 'Transformar',
        habilidade2: 'Transformar',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/132.png',
  },

  {
    id: 133,
    nome: 'Eevee',
    tipo: 'Normal',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 400,
    total: 1900,
    habilidades: [
      {
        habilidade1: 'Investida',
        habilidade2: 'Ataque Rápido',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png',
  },

  {
    id: 134,
    nome: 'Vaporeon',
    tipo: 'Água',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 400,
    total: 1900,
    habilidades: [
      {
        habilidade1: 'Ataque Rápido',
        habilidade2: 'Hidro bomba',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/134.png',
  },

  {
    id: 135,
    nome: 'Jolteon',
    tipo: 'Elétrico',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 400,
    total: 1900,
    habilidades: [
      {
        habilidade1: 'Ataque Rápido',
        habilidade2: 'Trovão',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/135.png',
  },

  {
    id: 136,
    nome: 'Flareon',
    tipo: 'Fogo',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 400,
    total: 1900,
    habilidades: [
      {
        habilidade1: 'Ataque Rápido',
        habilidade2: 'Lança Chamas',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/136.png',
  },

  {
    id: 137,
    nome: 'Porygon',
    tipo: 'Normal',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 400,
    total: 1900,
    habilidades: [
      {
        habilidade1: 'Investida',
        habilidade2: 'Conversão',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/137.png',
  },

  {
    id: 138,
    nome: 'Omanyte',
    tipo: 'Pedra / Água',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 400,
    total: 1900,
    habilidades: [
      {
        habilidade1: 'Arma de Água',
        habilidade2: 'Retirada',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/138.png',
  },

  {
    id: 139,
    nome: 'Omastar',
    tipo: 'Pedra / Água',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 400,
    total: 1900,
    habilidades: [
      {
        habilidade1: 'Arma de Água',
        habilidade2: 'Ataque de Chifre',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/139.png',
  },

  {
    id: 140,
    nome: 'Kabuto',
    tipo: 'Pedra / Água',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 400,
    total: 1900,
    habilidades: [
      {
        habilidade1: 'Arranhão',
        habilidade2: 'Endurecer',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/140.png',
  },

  {
    id: 141,
    nome: 'Kabutops',
    tipo: 'Pedra / Água',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 400,
    total: 1900,
    habilidades: [
      {
        habilidade1: 'Arranhão',
        habilidade2: 'Talho',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/141.png',
  },

  {
    id: 142,
    nome: 'Aerodactyl',
    tipo: 'Pedra / Voador',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 400,
    total: 1900,
    habilidades: [
      {
        habilidade1: 'Ataque de Asa',
        habilidade2: 'Agilidade',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/142.png',
  },

  {
    id: 143,
    nome: 'Snorlax',
    tipo: 'Normal',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 400,
    total: 1900,
    habilidades: [
      {
        habilidade1: 'Cabeçada',
        habilidade2: 'Descansar',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png',
  },

  {
    id: 144,
    nome: 'Articuno',
    tipo: 'Gelo / Voador',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 400,
    total: 1900,
    habilidades: [
      {
        habilidade1: 'Bicada',
        habilidade2: 'Raio de Gelo',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/144.png',
  },

  {
    id: 145,
    nome: 'Zapdos',
    tipo: 'Elétrico / Voador',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 400,
    total: 1900,
    habilidades: [
      {
        habilidade1: 'Choque do Trovão',
        habilidade2: 'Bicada Broca',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/145.png',
  },

  {
    id: 146,
    nome: 'Moltres',
    tipo: 'Fogo / Voador',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 400,
    total: 1900,
    habilidades: [
      {
        habilidade1: 'Bicada',
        habilidade2: 'Roda de Fogo',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/146.png',
  },

  {
    id: 147,
    nome: 'Dratini',
    tipo: 'Dragão',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 400,
    total: 1900,
    habilidades: [
      {
        habilidade1: 'Enrolar',
        habilidade2: 'Onda Trovão',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/147.png',
  },

  {
    id: 148,
    nome: 'Dragonair',
    tipo: 'Dragão',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 400,
    total: 1900,
    habilidades: [
      {
        habilidade1: 'Enrolar',
        habilidade2: 'Encarar',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/148.png',
  },

  {
    id: 149,
    nome: 'Dragonite',
    tipo: 'Dragão',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 400,
    total: 1900,
    habilidades: [
      {
        habilidade1: 'Dança do Dragão',
        habilidade2: 'Velocidade Extrema',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/149.png',
  },
  {
    id: 150,
    nome: 'Mewtwo',
    tipo: 'Psíquico',
    hp: 700,
    ataque: 700,
    defesa: 600,
    velocidade: 800,
    total: 2800,
    habilidades: [
      {
        habilidade1: 'Confusão',
        habilidade2: 'Inabilitar',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png',
  },

  {
    id: 151,
    nome: 'Mew',
    tipo: 'Psíquico',
    hp: 600,
    ataque: 600,
    defesa: 600,
    velocidade: 600,
    total: 2400,
    habilidades: [
      {
        habilidade1: 'Pancada',
        habilidade2: 'Transformação',
      },
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png',
  },
];

export default pokemons;
