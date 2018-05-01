import React, { Component } from 'react';
import PizzaCreatorBase from './components/PizzaCreatorBase';
import PizzaCreatorSauce from './components/PizzaCreatorSauce';
import PizzaCreatorTopping from './components/PizzaCreatorTopping';
import TotalPrice from './components/TotalPrice';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <PizzaCreatorBase />
      <PizzaCreatorTopping />
      <PizzaCreatorSauce />
      <TotalPrice />
      </div>
    );
  }
}

export default App;
