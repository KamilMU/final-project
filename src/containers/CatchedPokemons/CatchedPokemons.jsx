import React from 'react';
import { useSelector } from 'react-redux';
import PokemonContainer from '../PokemonContainer/PokemonContainer';

function CatchedPokemons() {
  const catchedPokemons = useSelector(state => state.catchedPokemons);

  return (
    <div className="w-full text-center pt-24">
      {catchedPokemons.length ? (
        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
        lg:grid-cols-4 xl:grid-cols-5 gap-x-4 px-4 mb-3`}>
          {catchedPokemons.map((pokemon, index) => (
            <PokemonContainer
              pokemon={pokemon}
              key={index}
            />
          ))}
        </div>) : (
        <div className="text-xl mt-10 p-4 shadow w-5/6 mx-auto break-words">
          There are no caught pokemons here yet... You should catch one.
        </div>
      )}
    </div>
  )
}

export default CatchedPokemons;
