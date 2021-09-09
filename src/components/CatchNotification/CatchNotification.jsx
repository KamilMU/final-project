import React from 'react';
import PropTypes from 'prop-types';

function CatchNotification({ pokemonName }) {
  return (
    <div
      className={`text-md italic transition 
    duration-700 p-3 shadow-md animate-pulse
    bg-red-400 text-white
    absolute top-1/2 left-1/2 transform 
    -translate-x-1/2 -translate-y-1/2 
    notification rounded-lg`}>
      {pokemonName} is caught!
    </div>
  )
}

CatchNotification.propTypes = {
  pokemonName: PropTypes.string
}

export default CatchNotification;
