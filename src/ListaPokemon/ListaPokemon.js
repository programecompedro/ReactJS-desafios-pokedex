import React, { useEffect, useState } from 'react';
import PokemonThumbnail from '../PokemonThumbnail/PokemonThumbnail';

const ListaPokemon = () => {

    const [allPokemons, setAllPokemons] = useState([])
    const [loadMore, setLoadMore] = useState("https://pokeapi.co/api/v2/pokemon?limit=20");

    const getAllPokemons = async () => {
        const res = await fetch(loadMore)
        const data = await res.json();

        setLoadMore(data.next)

        function createPokemonObject (result) {
            result.forEach( async (pokemon) => {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
                const data = await res.json();
                
                setAllPokemons(currentList => [...currentList, data]);
                
            });
        }
        
        createPokemonObject(data.results);
        await console.log(allPokemons)
    }

    useEffect(() => {
        getAllPokemons()
    }, [])
    return (
        <div className="app-container">
            <h1>Lista de pokemons</h1>

            <div className="pokemon-container">
                <div className="all-containers">
                    { allPokemons.map((pokemon, index) =>
                        <PokemonThumbnail 
                        id={pokemon.id}
                        name={pokemon.name}
                        image={pokemon.sprites.other.dream_world.front_default}
                        type={pokemon.types[0].type.name}
                        key={index}
                        />
                    ) }
                </div>
                <button className="load-more" onClick={() => getAllPokemons()}>Carregar mais</button>
            </div>
        </div>
    )
}

export default ListaPokemon