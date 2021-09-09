import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ErrorFallback from '../../../components/ErrorFallback/ErrorFallback';
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary';
import Loading from '../../../components/Loading/Loading';
import PokemonDetails from '../../../components/PokemonDetails/PokemonDetails';

function PokemonDetailsContainer() {
  const { id } = useParams();
  const catchedDate = useSelector(state => state.catchedDate);
  const pokemons = useSelector(state => state.pokemons);
  const pokemon = pokemons.find(pokemon => pokemon.id === parseInt(id));

  return (
    <div className={`h-screen flex justify-center 
    items-center w-full text-center`}>
      {pokemon ? (
        <ErrorBoundary
          FallbackComponent={ErrorFallback}>
          <PokemonDetails
            pokemon={pokemon}
            catchedDate={catchedDate}
          />
        </ErrorBoundary>
      ) : (
        <Loading />
      )}
    </div>
  )
}

export default PokemonDetailsContainer;
