import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CatchedPokemons from '../containers/CatchedPokemons/CatchedPokemons';
import Pokemons from '../containers/Pokemons/Pokemons';
import PokemonDetailsContainer from '../containers/PokemonDetailsContainer/PokemonDetailsContainer/PokemonDetailsContainer';
import NavigationMenuContainer from '../containers/NavigationMenuContainer/NavigationMenuContainer';
import PageNotFound from '../components/PageNotFound/PageNotFound';

export const navigation = (
  <Router>
    <NavigationMenuContainer />
    <Switch>
      <Route exact path="/" component={Pokemons} />
      <Route exact path="/catchedPokemons" component={CatchedPokemons} />
      <Route path="/pokemon/:id" component={PokemonDetailsContainer} />
      <Route path="*" component={PageNotFound} />
    </Switch>
  </Router>
)