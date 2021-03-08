import React from 'react';
import { ReactComponent as Logo } from '../assets/crown.svg';
import { auth } from '../firebase/firebase.utils.js';
import { connect } from 'react-redux';
import CartIcon from './CartIcon';
import CartDropdown from './CartDropdown';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../redux/CartSelectors';
import { selectCurrentUser } from '../redux/UserSelectors';

import {
  HeaderContainer, 
  LogoContainer, 
  OptionsContainer, 
  OptionLink, 
  OptionDiv 
} from './Header.styles.jsx';

const Header = ({ currentUser, hidden }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/contact">CONTACT</OptionLink>
        {
          currentUser ? 
            <OptionDiv onClick={()=>auth.signOut()}>SIGN OUT</OptionDiv> : 
            <OptionLink to="/signin">SIGN IN</OptionLink>
        }
        <CartIcon />
      </OptionsContainer>
        {hidden ? null: <CartDropdown />}
    </HeaderContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);

