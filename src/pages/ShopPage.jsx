import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { fetchCollectionsStart } from '../redux/ShopActions';
import CollectionOverviewContainer from '../components/CollectionsOverviewContainer';
import CollectionPageContainer from '../components/CollectionPageContainer';

class ShopPage extends React.Component {

  componentDidMount() {
    const { fetchCollectionsStart } = this.props;
    fetchCollectionsStart();
  }

  render () {
    const { match } = this.props;

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
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);

