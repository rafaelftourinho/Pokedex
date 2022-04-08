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
    const cardHtml = document.querySelector('.poke-card');
    
}
window.addEventListener('load',()=>{
   createList();
})
















// const hp = document.querySelector('#hp');
// const ATACK = document.querySelector('#ATACK');
// const DEFENCE = document.querySelector('#DEFENCE');
// const VELOCITY = document.querySelector('#VELOCITY');
// const TOTAL = document.querySelector('#TOTAL');
// const nome = document.querySelector('#nome');
// const imagem = document.querySelector('#imagem')


//         nome.innerHTML=      pokemons[i]["nome"];
//         imagem.src=          pokemons[i]["img"];
//         //parte de baixo
//         hp.innerHTML =       pokemons[i]["hp"];
//         ATACK.innerHTML =    pokemons[i]["ataque"];
//         DEFENCE.innerHTML =  pokemons[i]["defesa"];
//         VELOCITY.innerHTML = pokemons[i]["velocidade"];
//         TOTAL.innerHTML =    pokemons[i]["hp"]+
//         pokemons[i]["ataque"]+
//         pokemons[i]["defesa"]+
//         pokemons[i]["velocidade"];
  
