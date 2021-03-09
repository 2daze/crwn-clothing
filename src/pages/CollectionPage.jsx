import React from 'react';
import { connect } from 'react-redux';
import CollectionItem from '../components/CollectionItem';
import { selectCollection } from '../redux/ShopSelectors';

import './CollectionPage.styles.scss';

const CollectionPage = ({ collection }) => {
  const {title, items } = collection;

  const buildCollectionItemsList = () => (
    items.map(item => <CollectionItem key={item.id} item={item} />)
  );

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">{buildCollectionItemsList()}</div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);

