import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../redux/CartActions';
import { 
  AddToCartButton, 
  BackgroundImage, 
  CollectionItemContainer, 
  CollectionFooterContainer,
  NameContainer,
  PriceContainer
} from './CollectionItem.style';


const CollectionItem = ({ item, addItem }) => {
  const {name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <BackgroundImage className="image" imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
        <AddToCartButton onClick={() => addItem(item)} inverted>
          ADD TO CART
        </AddToCartButton>
    </CollectionItemContainer>
  );
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);

