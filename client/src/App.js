import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import SignInSignUpPage from './pages/SignInSignUpPage';
import CheckoutPage from './pages/CheckoutPage';
import Header from './components/Header';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { checkUserSession } from './redux/UserActions';
import { selectCurrentUser } from './redux/UserSelectors';
import './App.css';

const App = ({ checkUserSession, currentUser}) => {
  useEffect(() => {
    checkUserSession(); 
  },[checkUserSession])

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route 
          exact path='/signin' 
            render={() => currentUser ? 
              (<Redirect to="/" />) : (<SignInSignUpPage />)} />
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession()) 
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

