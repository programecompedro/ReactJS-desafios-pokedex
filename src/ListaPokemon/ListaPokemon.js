import React, { useEffect, useState } from 'react';
import PokemonThumbnail from '../PokemonThumbnail/PokemonThumbnail';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';

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
        <div className="">
           <Typography variant="h4" m="2" component="h1" align="center">Lista de pokemons</Typography>

            <div className="">
                <div className="">
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
                <Button variant="contained"onClick={() => getAllPokemons()}>Carregar mais</Button>

            </div>
        </div>
    )
}

export default ListaPokemon