import React from 'react';
import { Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectCollections } from '../redux/ShopSelectors'; 
import CollectionOverview from '../components/CollectionOverview';
import CollectionPage from '../pages/CollectionPage';

const ShopPage = ({ match }) => {
  console.log(match);
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverview}/>
      <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
    </div>
  );
}

export default ShopPage;
