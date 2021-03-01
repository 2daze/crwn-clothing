import React from 'react';
import SHOP_DATA from '../data/ShopData';
import CollectionPreview from '../components/CollectionPreview';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA
    }
  }
  
  renderCollectionPreview = () => {
    const {collections} = this.state;
    return collections.map(({id, ...otherCollectionProps}) => {
      return <CollectionPreview key={id} {...otherCollectionProps} />;
    });
  }

  render() {
    return (
      <div className="shop-page">{this.renderCollectionPreview()}</div>
    );
  }
}

export default ShopPage;
