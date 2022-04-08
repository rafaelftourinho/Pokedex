const pokemons = [
  {
    id: 1,
    nome: 'Pikachu',
    tipo: 'Elétrico',
    hp: 300,
    ataque: 600,
    defesa: 300,
    velocidade: 600,
    habilidades: [
      {
        habilidade1: 'Choque do trovão',
        habilidade2: 'Cabeçada',
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png'
  },

  {
    id: 2,
    nome: 'Bulbasaur',
    tipo: 'Grama',
    hp: 320,
    ataque: 510,
    defesa: 400,
    velocidade: 200,
    total: 1430,
    habilidades: [
      {
        habilidade1: 'Folha navalha',
        habilidade2: 'Raio solar',
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png'
  },

  {
    id: 3,
    nome: 'Charmander',
    tipo: 'Fogo',
    hp: 200,
    ataque: 300,
    defesa: 400,
    velocidade: 320,
    total: 1220,
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
    id: 111,
    nome: 'Rhyhorn',
    tipo: 'Terra Pedra',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    total: 2100,
    habilidades: [
      {
        habilidade1: 'Ataque de Chifre',
        habilidade2: 'Ataque de Cauda',
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/111.png'
  },

  {
    id: 112,
    nome: 'Rhydon',
    tipo: 'Terra Pedra',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    total: 2100,
    habilidades: [
      {
        habilidade1: 'Ataque de Chifre',
        habilidade2: 'Pisotear',
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/112.png'
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
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/113.png'
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
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/114.png'
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
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/115.png'
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
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/116.png'
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
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/117.png'
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
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/118.png'
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
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/119.png'
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
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/120.png'
  },

  {
    id: 121,
    nome: 'Starmie',
    tipo: 'Água Psíquico',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    total: 2100,
    habilidades: [
      {
        habilidade1: 'Recuperar',
        habilidade2: 'Hidro bomba',
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/121.png'
  },

  {
    id: 122,
    nome: 'Mr. Mime',
    tipo: 'Psíquico Fada',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    total: 2100,
    habilidades: [
      {
        habilidade1: 'Confusão',
        habilidade2: 'Barreira',
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/122.png'
  },

  {
    id: 123,
    nome: 'Scyther',
    tipo: 'Inseto Voador',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    total: 2100,
    habilidades: [
      {
        habilidade1: 'Talho',
        habilidade2: 'Dança das Espadas',
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/123.png'
  },

  {
    id: 124,
    nome: 'Jinx',
    tipo: 'Gelo Psíquico',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 600,
    total: 2100,
    habilidades: [
      {
        habilidade1: 'Tapa',
        habilidade2: 'Soco de Gelo',
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/124.png'
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
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/125.png'
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
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/126.png'
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
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/127.png'
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
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/128.png'
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
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/129.png'
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
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/130.png'
  },

  {
    id: 131,
    nome: 'Lapras',
    tipo: 'Água Gelo',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 400,
    total: 1900,
    habilidades: [
      {
        habilidade1: 'Arma de Água',
        habilidade2: 'Névoa',
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/131.png'
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
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/132.png'
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
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png'
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
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/134.png'
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
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/135.png'
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
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/136.png'
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
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/137.png'
  },

  {
    id: 138,
    nome: 'Omanyte',
    tipo: 'Pedra Água',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 400,
    total: 1900,
    habilidades: [
      {
        habilidade1: 'Arma de Água',
        habilidade2: 'Retirada',
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/138.png'
  },

  {
    id: 139,
    nome: 'Omastar',
    tipo: 'Pedra Água',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 400,
    total: 1900,
    habilidades: [
      {
        habilidade1: 'Arma de Água',
        habilidade2: 'Ataque de Chifre',
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/139.png'
  },

  {
    id: 140,
    nome: 'Kabuto',
    tipo: 'Pedra Água',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 400,
    total: 1900,
    habilidades: [
      {
        habilidade1: 'Arranhão',
        habilidade2: 'Endurecer',
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/140.png'
  },

  {
    id: 141,
    nome: 'Kabutops',
    tipo: 'Pedra Água',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 400,
    total: 1900,
    habilidades: [
      {
        habilidade1: 'Arranhão',
        habilidade2: 'Talho',
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/141.png'
  },

  {
    id: 142,
    nome: 'Aerodactyl',
    tipo: 'Pedra Voador',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 400,
    total: 1900,
    habilidades: [
      {
        habilidade1: 'Ataque de Asa',
        habilidade2: 'Agilidade',
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/142.png'
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
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png'
  },

  {
    id: 144,
    nome: 'Articuno',
    tipo: 'Gelo Voador',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 400,
    total: 1900,
    habilidades: [
      {
        habilidade1: 'Bicada',
        habilidade2: 'Raio de Gelo',
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/144.png'
  },

  {
    id: 145,
    nome: 'Zapdos',
    tipo: 'Elétrico Voador',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 400,
    total: 1900,
    habilidades: [
      {
        habilidade1: 'Choque do Trovão',
        habilidade2: 'Bicada Broca',
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/145.png'
  },

  {
    id: 146,
    nome: 'Moltres',
    tipo: 'Fogo Voador',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 400,
    total: 1900,
    habilidades: [
      {
        habilidade1: 'Bicada',
        habilidade2: 'Roda de Fogo',
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/146.png'
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
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/147.png'
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
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/148.png'
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

  {
    id: 150,
    nome: 'Mewtwo',
    tipo: 'Psíquico',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 400,
    total: 1900,
    habilidades: [
      {
        habilidade1: 'Confusão',
        habilidade2: 'Disable',
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png'
  },

  {
    id: 151,
    nome: 'Mew',
    tipo: 'Psíquico',
    hp: 500,
    ataque: 600,
    defesa: 400,
    velocidade: 400,
    total: 1900,
    habilidades: [
      {
        habilidade1: 'Pound',
        habilidade2: 'Transform',
      }
    ],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png'
  },

]

exports.module = pokemons;
