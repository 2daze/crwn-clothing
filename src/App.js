import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import HatsPage from './pages/HatsPage';

function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/shop' component={ShopPage} />
      <Route exact path='/shop/hats' component={HatsPage} />
    </div>
  );
}

export default App;
