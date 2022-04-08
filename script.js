console.log(pokemons)

const createList = () => {
   const listHtml = document.querySelector('.poke-list ul');
   pokemons.forEach(pokemon => {
      const div = document.createElement('li');
      div.innerHTML += `<img src="${pokemon.img}">`;
      div.innerHTML += `<p>${pokemon.nome}</p>`;
      listHtml.appendChild(div);
      listHtml.lastChild.addEventListener("click",()=> changePokemon(pokemon));
   });
}
const changePokemon = pokemon => {
    const pokeImage = document.querySelector('#poke-image');
    pokeImage.innerHTML = `<img src="${pokemon.img}" alt="${pokemon.nome}">`;
    addAnimation(pokeImage, 'fade', 0.4);
    changeTxt('#poke-id span', generateID(pokemon.id));
    changeTxt('#poke-name span', pokemon.nome);
    changeTxt('#poke-type', pokemon.tipo);
    updateStatus(pokemon);
}
const updateStatus = pokemon => {
    const status = ['hp','ataque', 'defesa','velocidade']; let total = 0;
    status.forEach(stt => {
        const sttHTML = document.querySelector(`#${stt}`), barHTML = sttHTML.querySelector('.percent-progress');
        barHTML.style.width = (pokemon[sttHTML.id] * 100) / 1000 +'%';
        barHTML.innerText = pokemon[sttHTML.id];
        total += pokemon[sttHTML.id];
     });
     document.querySelector('#total span').innerText = total;
}
const changeTxt = (local, txt) => {
    document.querySelector(`${local}`).innerText = txt;
}
const addAnimation = (local, animation, duration) => {
    local.style.animation = `${animation} ${duration}s`;
    setTimeout(()=> local.style.animation = '', duration * 1000);
}
const generateID = (id) => {
    if(id.toString().length == 3) return id;
    return id.toString().length == 2 ? `0${id}` : `00${id}`;
}
window.addEventListener('load',()=>{
    createList();
    changePokemon(pokemons[0]);
})