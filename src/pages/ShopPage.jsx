import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import CollectionOverview from '../components/CollectionOverview';
import CollectionPage from '../pages/CollectionPage';
import { firestore, convertCollectionsSnapshotToMap } from '../firebase/firebase.utils';
import { updateCollections } from '../redux/ShopActions';
import WithSpinner from '../components/WithSpinner';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = { loading: true };
  unsubscribeFromSnapshot = null; 

  componentDidMount() {
    const collectionRef = firestore.collection('collections');
    collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      this.props.updateCollections(collectionsMap);
      this.setState({loading: false});
    });
  }
  
  render () {
    const { match } = this.props;
    const { loading } = this.props;

    return (
      <div className="shop-page">
        <Route 
          exact path={`${match.path}`} 
          render={(props) => 
            <CollectionOverviewWithSpinner isloading={loading} { ...props } /> }
        />
        <Route 
          path={`${match.path}/:collectionId`} 
          render={(props) => 
            <CollectionPageWithSpinner isloading={loading} { ...props } />} 
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);

