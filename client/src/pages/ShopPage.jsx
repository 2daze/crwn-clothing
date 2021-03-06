import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { fetchCollectionsStart } from '../redux/ShopActions';
import CollectionOverviewContainer from '../components/CollectionsOverviewContainer';
import CollectionPageContainer from '../components/CollectionPageContainer';

const ShopPage = ({ match, fetchCollectionsStart}) =>{

  useEffect(() => {
    fetchCollectionsStart();

  }, [fetchCollectionsStart]);

  return (
    <div className="shop-page">
      <Route 
        exact path={`${match.path}`} 
        component={CollectionOverviewContainer}
      />
      <Route 
        path={`${match.path}/:collectionId`} 
        component={CollectionPageContainer}
      />
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);

