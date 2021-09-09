import React from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import App from '../../components/App/App';
import { fetchpokemons } from '../../store/actions';

function AppContainer() {
  const currentPage = useSelector(state => state.currentPage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchpokemons(currentPage)); // eslint-disable-next-line
  }, [])

  return <App />
}

export default AppContainer;
