import {connect, useDispatch} from 'react-redux';
import {setBanks} from '../../redux/slices/bank';
import {store} from '../../redux/store';
import {firebaseBank} from '../api';

let banksUnsubscribe;
let currentUserUnsubscribe;

export const fetchBanks = () => {
  banksUnsubscribe = firebaseBank.fetchBankCollection(onBanksCollection);
};

const unsubscribe = () => {
  if (currentUserUnsubscribe) {
    currentUserUnsubscribe();
  }
  if (banksUnsubscribe) {
    banksUnsubscribe();
  }
};

const onBanksCollection = (data, completeData) => {
  //   dispatch(setBanks(data));
  store.dispatch(setBanks(data));
};

const mapStateToProps = ({chat, auth}) => {
  return {
    channels: chat.channels,
    user: auth.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setBanks: data => dispatch(setBanks(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(onBanksCollection);
