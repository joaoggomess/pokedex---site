const offset = 10;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;


function convertPokemonToLi(pokemon) {
   return (
    //List items for pokemons
  `<li class="pokemon ${pokemon.type}">
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

const list = document.getElementById('pokemonList'); 

pokeApi.getPokemons().then((pokemonList = []) => {
    //Making a list of pokemons converted to HMTL List items.
    //Adding items inside the HTML document
    list.innerHTML += pokemonList.map(convertPokemonToLi).join('')     
    }) 
    .catch(err => console.log(err));
