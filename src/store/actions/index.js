import axios from 'axios';

export const FETCH_POKEMONS = 'FETCH_POKEMONS';
export const CATCH_POKEMON = 'CATCH_POKEMON';
export const CHECK_IF_CATCHED = 'CHECK_IF_CATCHED';
export const CHANGE_FETCHING_STATUS = 'CHANGE_FETCHING_STATUS';
export const CHANGE_CURRENT_PAGE_NUMBER = 'CHANGE_CURRENT_PAGE_NUMBER';

export const fetchpokemons = (currentPage) => async dispatch => {
  const response = await axios.get(`http://localhost:5000/pokemons?_page=${currentPage}`);
  dispatch({ type: FETCH_POKEMONS, payload: response.data })
}

export const catchPokemon = (pokemon) => {
  return {
    type: CATCH_POKEMON,
    payload: pokemon
  }
}

export const checkIfCatched = (pokemonId) => {
  return {
    type: CHECK_IF_CATCHED,
    payload: pokemonId
  }
}

export const changeFetchingStatus = (fetchingStatus) => {
  return {
    type: CHANGE_FETCHING_STATUS,
    payload: fetchingStatus
  }
}

export const changeCurrentPageNumber = () => {
  return {
    type: CHANGE_CURRENT_PAGE_NUMBER
  }
}