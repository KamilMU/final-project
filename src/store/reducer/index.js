import {
  CATCH_POKEMON, FETCH_POKEMONS, CHECK_IF_CATCHED,
  CHANGE_CURRENT_PAGE_NUMBER, CHANGE_FETCHING_STATUS
} from "../actions";

const initialState = {
  pokemons: [],
  catchedPokemons: [],
  isCatched: false,
  currentPage: 1,
  fetching: true
}

export function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_POKEMONS:
      return {
        ...state,
        pokemons: [...state.pokemons, ...payload]
      }
    case CATCH_POKEMON:
      return {
        ...state,
        catchedPokemons: [
          ...state.catchedPokemons, {...payload, isCatched: true}],
      }
    case CHANGE_FETCHING_STATUS:
      return {
        ...state,
        fetchingStatus: payload
      }
    case CHANGE_CURRENT_PAGE_NUMBER:
      return {
        ...state,
        currentPage: state.currentPage + 1
      }
    case CHECK_IF_CATCHED:
      return {
        ...state,
        pokemons: [...state.pokemons.map(pokemon => {
          if (pokemon.id === payload) {
            return {
              ...pokemon,
              isCatched: true,
              catchedDate: new Date()
            }
          }

          return pokemon;
        })]
      }
    default:
      return state;
  }
}