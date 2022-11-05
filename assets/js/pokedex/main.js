function convertPokemonToLi(pokemon) {
   return (
    //List items for pokemons
  `<li class="pokemon ${pokemon.type}" onclick="openDetailPage(${pokemon.number})">
                    <span class="number">${pokemon.number}</span>
                    <span class="name">${pokemon.name}</span> 
                    
                    <div class="detail">
                        <ol class="types">
                           ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                        </ol>

                        <img id="pokeImage" src="${pokemon.photo}"
                         alt="${pokemon.name}">
                    </div>
    </li>`
    )
}

const loadMoreButton = document.getElementById('loadMoreButton')
const list = document.getElementById('pokemonList'); 
let offset = 0;
let limit = 10;

function loadPokemons(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemonList = []) => {
        //Making a list of pokemons converted to HMTL List items.
        //Adding items inside the HTML document
        list.innerHTML += pokemonList.map(convertPokemonToLi).join('')     
        }) 
        .catch(err => console.log(err));
    
}

loadPokemons(offset,limit)

loadMoreButton.addEventListener('click',() => {
    offset += limit;
    loadPokemons(limit, offset);
})
