import {connect, useDispatch} from 'react-redux';
import {setCarouselItems} from '../../redux/slices/carousel';
import {store} from '../../redux/store';
import {firebaseCarousel} from '../api';

let carouselUnsubscribe;

export const fetchCarouselItems = () => {
  carouselUnsubscribe = firebaseCarousel.fetchCarouselItems(onCarouselItems);
};

const onCarouselItems = (data, completeData) => {
  store.dispatch(setCarouselItems(data));
};

const mapStateToProps = ({}) => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    setCarouselItems: data => dispatch(setCarouselItems(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(onCarouselItems);
