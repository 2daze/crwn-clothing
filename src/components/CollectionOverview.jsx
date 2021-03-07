import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from './CollectionPreview';
import { selectCollectionsForPreview } from '../redux/ShopSelectors';

import './CollectionOverview.style.scss';

const CollectionOverview = ({ collections}) => {
  const buildCollectionPreview = () => {
    return collections.map(({id, ...otherCollectionProps}) => {
      return <CollectionPreview key={id} {...otherCollectionProps} />;
    });
  }
  return <div className="collection-overview">{buildCollectionPreview()}</div>;
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionOverview);
