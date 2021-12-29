import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import PokemonList from './components/PokemonList';
import AddNewPokemon from './components/AddNewPokemon';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
      
   <Router>
      <div className="App">
        <Navbar/>
        <Route path ="/list" component={PokemonList}/>
        <Route path ="/add" component={AddNewPokemon}/>
      </div>
    </Router>
  );
}

export default App;
