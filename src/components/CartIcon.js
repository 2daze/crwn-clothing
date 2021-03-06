import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../redux/CartActions';
import { selectCartItemsCount } from '../redux/CartSelectors';

import './CartIcon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../assets/shopping-bag.svg';

const CartIcon = ({ toggleCartHidden, totalItemCount }) => {
  console.log(totalItemCount);
  return (
    <div className='cart-icon' onClick={toggleCartHidden}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{totalItemCount}</span>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = (state) => ({
  totalItemCount: selectCartItemsCount(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

