import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Pokemon from '../../components/Pokemon/Pokemon';
import { catchPokemon, checkIfCatched } from '../../store/actions';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import ErrorFallback from '../../components/ErrorFallback/ErrorFallback';
import upperCaseFirstChar from '../../utils';

function PokemonContainer({ pokemon }) {
  const [loaded, setLoaded] = useState(false);
  const [isCatched, setIsCatched] = useState(false);
  const dispatch = useDispatch();

  function handleImageLoad() {
    setLoaded(true)
  }

  function handleCatchBtnOnClick(e) {
    e.preventDefault();
    dispatch(checkIfCatched(pokemon.id));
    dispatch(catchPokemon(pokemon));
    setIsCatched(true);
    setTimeout(() => setIsCatched(false), 1500);
  }

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}>
      <Pokemon
        loaded={loaded}
        handleImageLoad={handleImageLoad}
        handleCatchBtnOnClick={handleCatchBtnOnClick}
        pokemon={pokemon}
        pokemonName={upperCaseFirstChar(pokemon.name)}
        isCatched={isCatched}
      />
    </ErrorBoundary>
  )
}

PokemonContainer.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number.isRequired,
    isCatched: PropTypes.bool,
    name: PropTypes.string.isRequired,
    catchedDate: PropTypes.instanceOf(Date)
  })
}

export default PokemonContainer;
