import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import HatsPage from './pages/HatsPage';
import SignInSignUpPage from './pages/SignInSignUpPage';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' component={SignInSignUpPage} />
        <Route exact path='/shop/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
