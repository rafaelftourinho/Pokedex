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
    id: 4,
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
    id: 6,
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

exports.module = pokemons;
