const offset = 10;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

function setTypesLi(pokemonTypes) {
    return pokemonTypes.map( typeSlot => `<li class="type">${typeSlot.type.name}</li>` )
}



function convertPokemonToLi(pokemon) {
   return (
    //List items for pokemons
  `<li class="pokemon">
                    <span class="number">${pokemon.order}</span>
                    <span class="name">${pokemon.name}</span> 
                    
                    <div class="detail">
                        <ol class="types">
                            ${setTypesLi(pokemon.types).join('')}
                        </ol>

                        <img id="pokeImage" src="${pokemon.sprites.other.dream_world.front_default}"
                         alt="${pokemon.name}">
                    </div>
    </li>`
    )
}

const list = document.getElementById('pokemonList'); 

pokeApi.getPokemons().then((pokemonList = []) => {
    //Making a list of pokemons converted to HMTL List items.
    //Adding items inside the HTML document
    list.innerHTML += pokemonList.map(convertPokemonToLi).join('')     
    }) 
    .catch(err => console.log(err));
