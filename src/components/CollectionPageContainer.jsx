import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import WithSpinner from './WithSpinner';
import { selectIsCollectionsLoaded } from '../redux/ShopSelectors';
import CollectionPage from '../pages/CollectionPage';

const mapStateToProps = createStructuredSelector ({
  isLoading: state => !selectIsCollectionsLoaded(state)
});

const CollectionPageContainer = 
  compose(connect(mapStateToProps), WithSpinner)(CollectionPage);

export default CollectionPageContainer;
