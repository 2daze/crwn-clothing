import React from 'react';
import { connect } from 'react-redux';
import CustomButton from './CustomButton';
import CartItem from './CartItem';
import { selectCartItemsCount } from '../redux/CartSelectors';

import './CartDropdown.styles.scss';

const CartDropdown = ({cartItems}) => {
  const mapCartItems = () => {
    return cartItems.map(cartItem => {
      return <CartItem key={cartItem.id} item={cartItem} />;
    })
  };

  return (
    <div className="cart-dropdown">
      <div className="cart-items">{mapCartItems()}</div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cartItems: selectCartItemsCount(state)
});

export default connect(mapStateToProps, null)(CartDropdown);

