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
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png'
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
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png'
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
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png'
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
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png'
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
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png'
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
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png'
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
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png'
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
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png'
  },

  {
    id: 9,
    nome: 'Blastoise',
    tipo: 'Água',
    hp: 330,
    ataque: 280,
    defesa: 330
    velocidade: 270,
    total: 1210,
    habilidades: [
      {
        habilidade1: 'Dança da Chuva',
        habilidade2: 'Investida de Água',
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png'
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
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png'
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
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png'
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
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png'
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
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/013.png'
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
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/014.png'
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
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/015.png'
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
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png'
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
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/017.png'
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
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/018.png'
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
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/018.png'
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
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/019.png'
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
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/020.png'
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
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/021.png'
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
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/022.png'
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
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/023.png'
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
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/024.png'
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
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png'
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
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png'
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
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/027.png'
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
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/028.png'
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
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/029.png'
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
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/030.png'
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
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/031.png'
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
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/032.png'
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
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/033.png'
  },

  {
    id: 34,
    nome: 'Nidoking',
    tipo: 'Venenoso',
    hp: 300,
    ataque: 340,
    defesa: 300,
    velocidade: 300,
    total: 1240,
    habilidades: [
      {
        habilidade1: 'Arrastar para Fora',
        habilidade2: 'Pancada do Rei',
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/034.png'
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
        habilidade1: `Jato d'água`,
        habilidade2: 'Hidro bomba',
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/130.png'
  },

  {
    id: 94,
    nome: 'Gengar',
    tipo: 'Fantasma',
    hp: 100,
    ataque: 200,
    defesa: 300,
    velocidade: 400,
    total: 1000,
    habilidades: [
      {
        habilidade1: 'Bola sombria',
        habilidade2: 'Lambida',
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png'
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
        habilidade1: 'Dança do dragão',
        habilidade2: 'Velocidade Extrema',
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/149.png'
  },

  
]

module.exports = {
  pokemons,
}
