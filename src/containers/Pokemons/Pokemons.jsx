import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../components/Loading/Loading';
import {
  changeCurrentPageNumber, fetchpokemons, 
} from '../../store/actions';
import PokemonContainer from '../PokemonContainer/PokemonContainer';
import SkeletonList from '../SkeletonList/SkeletonList';

function Pokemons() {
  const [fetching, setFetching] = useState(false);
  const currentPage = useSelector(state => state.currentPage);
  const pokemons = useSelector(state => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetching) {
      dispatch(changeCurrentPageNumber());
      dispatch(fetchpokemons(currentPage + 1));
      setTimeout(() => setFetching(false), 1000)
    } // eslint-disable-next-line
  }, [fetching])

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return () => {
      document.removeEventListener('scroll', scrollHandler);
    }
  }, [])

  function scrollHandler(e) {
    if (e.target.documentElement.scrollHeight - (
      e.target.documentElement.scrollTop + window.innerHeight) < 100) {
      setFetching(true);
    }
  }

  return (
    <>
      <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
      lg:grid-cols-4 xl:grid-cols-5 gap-x-4 p-4 mb-3 pt-24`}>
        {pokemons.length ? (
          pokemons.map((pokemon, index) => (
            <PokemonContainer
              pokemon={pokemon}
              key={index}
            />
          ))
        ) : (
          <SkeletonList />
        )}
      </div>
      {fetching && <Loading />}
    </>
  )
}

export default Pokemons;
