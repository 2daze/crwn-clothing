import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionsLoaded } from '../redux/ShopSelectors';
import WithSpinner from './WithSpinner';
import CollectionOverview from './CollectionOverview';
import {compose } from 'redux';

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionsLoaded(state)
});

const CollectionOverviewContainer= 
  compose(connect(mapStateToProps), WithSpinner)(CollectionOverview)

export default CollectionOverviewContainer;
