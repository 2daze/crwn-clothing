import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/crown.svg';
import { auth } from '../firebase/firebase.utils.js';
import { connect } from 'react-redux';
import CartIcon from './CartIcon';
import CartDropdown from './CartDropdown';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../redux/CartSelectors';
import { selectCurrentUser } from '../redux/UserSelectors';

import './Header.styles.scss';

const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">SHOP</Link>
        <Link className="option" to="/contact">CONTACT</Link>
        {
          currentUser ? 
            <div className='option' onClick={()=>auth.signOut()}>SIGN OUT</div> : 
            <Link className='option' to="/signin">SIGN IN</Link>
        }
        <CartIcon />
      </div>
        {hidden ? null: <CartDropdown />}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
