import React from 'react';
import moment from 'moment';
import upperCaseFirstChar from '../../utils';
import PropTypes from 'prop-types';

function PokemonDetails({ pokemon }) {
  return (
    <div className={`p-4 shadow-md mx-auto w-72 transition transform 
    scale-105 hover:scale-125 duration-700 ease-in-out mt-24
    hover:border-blue-300 border-transparent border-2 hover:border-current
    bg-gradient-to-t from-white to-blue-50 hover:from-white hover:to-blue-300 
    rounded text-center hover:shadow-xl`}>
      <img src={`/images/${pokemon.id}.png`} alt=""
        className={`w-64 mx-auto transition transform 
        scale-105 hover:scale-110 
        duration-500 ease-in-out mb-5`} />
      <i className="mb-3 text-lg h-8">
        {upperCaseFirstChar(pokemon.name)}
      </i>
      <div className="text-left">
        <p><strong>ID: </strong> {pokemon.id}</p>
        <p><strong>Status: </strong>
          {pokemon.isCatched ? 'Catched' : 'Not catched'}
        </p>
        <p><strong>When catched: </strong>
          <span>
            {pokemon.isCatched ? (
              moment(pokemon.catchedDate).format('YYYY-MM-DD HH:mm:ss')
            ) : (
              '--:--'
            )}
          </span>
        </p>
      </div>
    </div>
  )
}

PokemonDetails.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number.isRequired,
    isCatched: PropTypes.bool,
    name: PropTypes.string.isRequired,
    catchedDate: PropTypes.instanceOf(Date)
  })
}

export default PokemonDetails;
