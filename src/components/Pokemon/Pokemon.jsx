import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';
import CatchNotification from '../CatchNotification/CatchNotification';

function Pokemon({
  loaded, pokemon,
  handleCatchBtnOnClick,
  handleImageLoad, pokemonName, isCatched }) {
  return (
    <Link
      to={`/pokemon/${pokemon.id}`}
      className={`p-4 sm:p-2 md:p-6 lg:p-10 shadow-md mb-3 rounded 
        w-35 text-center bg-gradient-to-t from-white to-blue-50 
        hover:from-white hover:to-blue-300 
        hover:border-blue-300 border-transparent 
        border-2 hover:border-current
        transition transform hover:scale-105 duration-700 
        z-10 hover:z-20 relative`}>
      <div className={`h-64 sm:h-64 md:h-48 lg:h-44 xl:h-44 w-full 
      mb-1 flex justify-center items-center`}>
        {!loaded && <div className="w-20"><Loading /></div>}
        <img
          src={`/images/${pokemon.id}.png`}
          onLoad={handleImageLoad}
          alt=""
          className={loaded ? `w-64 md:w-52 lg:w-44 xl:w-86 mx-auto transition transform 
              scale-105 hover:scale-110 duration-500 ease-in-out` : `hidden`}
        />
      </div>
      <p className="mb-2 text-lg h-10 italic">{pokemonName}</p>
      <button
        className={pokemon.isCatched ? (
          `bg-gray-300 text-white pointer-events-none px-6 
        py-3 text-sm rounded shadow-md  
        transition cursor-pointer`) : (
          `px-6 py-3 bg-blue-400 text-white font-bold
          text-sm focus:outline-none cursor-pointer rounded 
          hover:opacity-75 shadow-md transition`
        )}
        onClick={handleCatchBtnOnClick}>
        {pokemon.isCatched ? 'Caught' : (
          <p className="flex items-center">
            <img src={'/icons/pokeball.png'}
              alt="pokeball"
              className={`mr-3 w-6 animate-bounce 
              transition duration-500 ease-in-out`} />
            Catch
          </p>
        )}
      </button>
      {isCatched && (
        <CatchNotification
          pokemonName={pokemonName}
        />
      )}
    </Link>
  )
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number.isRequired,
    isCatched: PropTypes.bool,
    name: PropTypes.string,
    catchedDate: PropTypes.instanceOf(Date)
  }),
  pokemonName: PropTypes.string,
  handleCatchPokemon: PropTypes.func,
  handleImageLoad: PropTypes.func.isRequired,
  loaded: PropTypes.bool.isRequired,
}

export default Pokemon;
