const popUp = document.getElementById("popup_container");

function hideDetailPage() {
    popUp.style.display="none"; 
}

async function openDetailPage(number) {
const pokemonDetail = await pokeApi.getPokemon(number);
const pokemon = converPokeApiDetailToPokemon(pokemonDetail);

popUp.style.display="block";
popUp.innerHTML = (
   `<div id="popup" style="background-color:green; border-radius: 10px;">
       <header id="back-like">
           <i class="gg-arrow-left" onclick="hideDetailPage()"></i>
           <i class="gg-heart"></i> 
       </header>

       <section class="pokemon" id="pokemonChange">
           <div class="detail" id="detailChange">
               <span class="name">${pokemon.name}</span> 
                   <ul class="types" id="typesChange">
                   ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                   </ul>
           </div>
           <span class="number" style="color:#fff">${pokemon.number}</span>      
       </section>

       <section class="stats">
           <img id="detailImage" alt="${pokemon.name}" src="${pokemon.photo}">
           <section id="details-stats">
               <div id="pokeDetails">
                   <ol>
                       <li>${pokemon.move}</li>
                       <li>${pokemon.height}</li>
                       <li>${pokemon.weight}</li>
                       <li>${pokemon.abilities.map((ability) => ability)}</li>
                   </ol>
               </div>

               <div id="pokeStats">
                   <ol>
                       <li>${pokemon.HP}</li>
                       <li>${pokemon.attack}</li>
                       <li>${pokemon.defense}</li>    
                   </ol>
               </div>
           </section>
       </section>
   </div>  `
     )
}