import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Route } from 'react-router-dom';
import CollectionOverview from '../components/CollectionOverview';
import CollectionPage from '../pages/CollectionPage';
import { fetchCollectionsStartAsync } from '../redux/ShopActions';
import WithSpinner from '../components/WithSpinner';
import { 
  selectIsCollectionsLoaded, 
  selectIsCollectionFetching 
} from '../redux/ShopSelectors';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {

  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render () {
    const { match } = this.props;
    const { isCollectionsLoaded } = this.props;

    return (
      <div className="shop-page">
        <Route 
          exact path={`${match.path}`} 
          render={(props) => 
            <CollectionOverviewWithSpinner isloading={!isCollectionsLoaded} { ...props } /> }
        />
        <Route 
          path={`${match.path}/:collectionId`} 
          render={(props) => 
            <CollectionPageWithSpinner isloading={!isCollectionsLoaded} { ...props } />} 
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching, 
  isCollectionsLoaded: selectIsCollectionsLoaded 
});

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);

