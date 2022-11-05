
const pokeApi = {};

function converPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon();
    //Personal details
    pokemon.number = pokeDetail.order;
    pokemon.name = pokeDetail.name;
    pokemon.height = pokeDetail.height;
    pokemon.weight = pokeDetail.weight;
    pokemon.move = pokeDetail.moves[0].move.name;

    //abilities and fight stats
    const abilities = pokeDetail.abilities.map((abilitySlot) => abilitySlot.ability.name);
    pokemon.abilities = abilities;
    
    pokemon.HP = pokeDetail.stats[0].base_stat;
    pokemon.attack = pokeDetail.stats[1].base_stat;
    pokemon.defense = pokeDetail.stats[2].base_stat;
    
    //types and photo
    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types;
    pokemon.types = types;
    pokemon.type = type;
    
    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default;

    return pokemon
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
            .then((response) => response.json())
            .then(converPokeApiDetailToPokemon)
}

pokeApi.getPokemons = (offset, limit) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

    //fetch para obter os pokemons
return fetch(url)
    .then(response => response.json())
    .then(jsonBody => jsonBody.results)
    .then(pokemons => pokemons.map(pokeApi.getPokemonDetail))
    .then(detailRequests => Promise.all(detailRequests))
    .then(pokemonDetails => {
        return pokemonDetails;
    })
}

pokeApi.getPokemon = (pokeNumber) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeNumber}/`

    return fetch(url)
        .then(response => response.json())
}



