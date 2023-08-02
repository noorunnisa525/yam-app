import {connect, useDispatch} from 'react-redux';
import {setFeaturedItems} from '../../redux/slices/featured';
import {store} from '../../redux/store';
import {firebaseFeatured} from '../api';

let featuredUnsubscribe;

export const fetchFeaturedItems = () => {
  featuredUnsubscribe = firebaseFeatured.fetchFeaturedItems(onFeaturedItems);
};

const onFeaturedItems = (data, completeData) => {
  store.dispatch(setFeaturedItems(data));
};

const mapStateToProps = ({}) => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    setFeaturedItems: data => dispatch(setFeaturedItems(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(onFeaturedItems);
