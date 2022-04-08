console.log(pokemons)
const createList = () => {
   const listHtml = document.querySelector('.poke-list ul');
   pokemons.forEach(pokemon => {
      const div = document.createElement('li');
      div.innerHTML += `<img src="${pokemon.img}">`;
      div.innerHTML += `<p>${pokemon.nome}</p>`;
      listHtml.appendChild(div);
      listHtml.lastChild.addEventListener("click",()=>{
          changePokemon(pokemon);
      })
   });
}
const changePokemon = (pokemon) => {
    let total = 0;
    const cardHtml = document.querySelector('.poke-card'), status = ['hp','ataque', 'defesa','velocidade'];
    cardHtml.querySelector('#poke-id span').innerText = generateID(pokemon.id);
    cardHtml.querySelector('#poke-name span').innerText = pokemon.nome;
    cardHtml.querySelector('#poke-type').innerText = pokemon.tipo;
    const pokeImage = cardHtml.querySelector('#poke-image');
    pokeImage.innerHTML = `<img src="${pokemon.img}" alt="${pokemon.nome}">`;
    addAnimation(pokeImage, 'fade', 0.4);
    status.forEach(stt => {
       const sttHTML = cardHtml.querySelector(`#${stt}`), barHTML = sttHTML.querySelector('.percent-progress');
       barHTML.style.width = (''+pokemon[sttHTML.id] * 100) / 1000 +'%';
       addAnimation(barHTML,'charge', 0.4);
       sttHTML.querySelector('.percent-progress').innerText = pokemon[sttHTML.id];
       total += pokemon[sttHTML.id];
    });
    cardHtml.querySelector('#total span').innerText = total;
}
const addAnimation = (local, animation, duration) => {
    local.style.animation = `${animation} ${duration}s`;
    setTimeout(()=> local.style.animation = '', duration * 1000);
}
const generateID = (id) => {
    if (id.toString().length === 1) return `00${id}`;
    if (id.toString().length === 2) return `0${id}`;
    return id;
  }
window.addEventListener('load',()=>{
    createList();
    changePokemon(pokemons[0])
})