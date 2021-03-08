import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import CustomButton from './CustomButton';
import CartItem from './CartItem';
import { selectCartItems } from '../redux/CartSelectors';
import { toggleCartHidden } from '../redux/CartActions';
import { CustomButtonContainer } from './CustomButton.styles';

import './CartDropdown.styles.scss';

const CartDropdown = ({cartItems, history, dispatch}) => {
  const mapCartItems = () => {
    if (cartItems.length){
      return cartItems.map(cartItem => {
        return <CartItem key={cartItem.id} item={cartItem} />;
      })
    }
    else {
      return <span className="empty-message">Your cart is empty</span>
    }
  };

  const handleButtonClick = () => {
    history.push('/checkout');
    dispatch(toggleCartHidden());
  }

  return (
    <div className="cart-dropdown scroll-hide">
      <div className="cart-items">{mapCartItems()}</div>
    <CustomButtonContainer onClick={handleButtonClick}>
      GO TO CHECKOUT
    </CustomButtonContainer>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps, null)(CartDropdown));

