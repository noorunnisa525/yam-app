import {connect, useDispatch} from 'react-redux';
import {setDiscounts} from '../../redux/slices/discount';
import {store} from '../../redux/store';
import {firebaseDiscount} from '../api';

let discountsUnsubscribe;
let currentUserUnsubscribe;

export const fetchDiscounts = () => {
  discountsUnsubscribe = firebaseDiscount.fetchDiscountCollection(
    onDiscountsCollection,
  );
};

const onDiscountsCollection = (data, completeData) => {
  store.dispatch(setDiscounts(data));
};

const mapStateToProps = ({}) => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    setDiscounts: data => dispatch(setDiscounts(data)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(onDiscountsCollection);
