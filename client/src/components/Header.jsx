import React from 'react';
import { ReactComponent as Logo } from '../assets/crown.svg';
import { connect } from 'react-redux';
import CartIcon from './CartIcon';
import CartDropdown from './CartDropdown';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../redux/CartSelectors';
import { selectCurrentUser } from '../redux/UserSelectors';
import { signOutStart } from '../redux/UserActions';

import {
  HeaderContainer, 
  LogoContainer, 
  OptionsContainer, 
  OptionLink, 
  OptionDiv 
} from './Header.styles.jsx';

const Header = ({ currentUser, hidden, signOutStart }) => {
  const getAuthComponents = () => {
    if (currentUser) {
      return <OptionDiv onClick={signOutStart}>SIGN OUT</OptionDiv>; 
    }
    else {
      return <OptionLink to="/signin">SIGN IN</OptionLink>;
    }
  }

  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/contact">CONTACT</OptionLink>
        {getAuthComponents()}
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

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

