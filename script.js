import pokemons from './database/api.js';

console.log(pokemons);

const changeTxt = (local, txt) => {
  document.querySelector(`${local}`).innerText = txt;
};

const addAnimation = (local, animation, duration) => {
  const element = local;

  element.style.animation = `${animation} ${duration}s`;

  setTimeout(() => { element.style.animation = ''; }, duration * 1000);
};

const selectPokemon = (id) => {
  document.querySelectorAll('.poke-list li').forEach((poke) => {
    const li = poke;
    li.classList = '';
  });
  document.getElementById(`${id}`).classList.add('selected');
};

const generateID = (id) => {
  if (id.toString().length === 1) return `00${id}`;
  if (id.toString().length === 2) return `0${id}`;

  return id;
};

const cleanString = (string) => string.normalize('NFD').replace(/\p{Diacritic}/gu, '');

const upateCard = (typeString) => {
  const cardHTML = document.querySelector('.card-top');
  const typesHTMl = document.querySelector('#poke-types');
  const types = typeString.split('/');

  cardHTML.classList = `card-top ${cleanString(types[0])}`;
  
  typesHTMl.innerHTML = '';
  types.forEach((tp) => {
    typesHTMl.innerHTML += `<p class="poke-type ${cleanString(tp)}">${tp}</p>`;
  });
};

const updateStatus = (pokemon) => {
  const status = ['hp', 'ataque', 'defesa', 'velocidade']; let total = 0;

  status.forEach((stt) => {
  const sttHTML = document.querySelector(`#${stt}`); 
  const barHTML = sttHTML.querySelector('.percent-progress');

  barHTML.style.width = `${(pokemon[sttHTML.id] * 100) / 1000}%`;
  barHTML.innerText = pokemon[sttHTML.id];
  total += pokemon[sttHTML.id];
  });

  document.querySelector('#total span').innerText = total;
};

const changePokemon = (pokemon) => {
  const pokeImage = document.querySelector('#poke-image');
  const actionLed = document.querySelector('#action-led');

  pokeImage.innerHTML = `<img src="${pokemon.img}" alt="${pokemon.nome}">`;

  addAnimation(pokeImage, 'fade', 0.4);
  addAnimation(actionLed, 'action-alert', 0.2);
  changeTxt('#poke-id span', generateID(pokemon.id));
  changeTxt('#poke-name span', pokemon.nome);
  selectPokemon(pokemon.id);
  upateCard(pokemon.tipo);
  updateStatus(pokemon);
};

const createList = () => {
  const listHtml = document.querySelector('.poke-list ul');

  pokemons.forEach((pokemon) => {
    const li = document.createElement('li');
    li.id = (pokemon.id);
    li.innerHTML += `<img src="${pokemon.img}">`;
    li.innerHTML += `<p>${pokemon.nome}</p>`;
    listHtml.appendChild(li);

    listHtml.lastChild.addEventListener('click', () => changePokemon(pokemon));
  });
};

const changeWtKeyboard = (move) => {
  const id = (document.querySelector('#poke-id').innerText.replace('#', ''));
  const actPokemon = pokemons.findIndex((poke) => poke.id === Number(id)) + move;

  return pokemons[actPokemon] && changePokemon(pokemons[actPokemon]);
};

window.onload = () => {
  createList();
  changePokemon(pokemons[0]);

  document.addEventListener('keydown', (e) => {
    const key = e.code;

    if (key === 'ArrowUp') changeWtKeyboard(-1);
    if (key === 'ArrowDown') changeWtKeyboard(1);
  }); 
};
