import {connect, useDispatch} from 'react-redux';
import {setSales} from '../../redux/slices/sale';
import {store} from '../../redux/store';
import {firebaseSale} from '../api';

let salesUnsubscribe;
let currentUserUnsubscribe;

export const fetchSales = () => {
  salesUnsubscribe = firebaseSale.fetchSaleCollection(onSalesCollection);
};

const onSalesCollection = (data, completeData) => {
  store.dispatch(setSales(data));
};

const mapStateToProps = ({}) => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    setSales: data => dispatch(setSales(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(onSalesCollection);
