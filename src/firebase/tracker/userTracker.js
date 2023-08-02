import {firebaseUser} from '../api';
import {setUser} from '../../redux/slices/user';
import {store} from '../../redux/store';

let usersUnsubscribe;
let currentUserUnsubscribe;

export const fetchUserData = userID => {
  usersUnsubscribe = firebaseUser.fetchUserRecord(userID, onUsersCollection);
};

export const updateUserData = userData => {
  usersUnsubscribe = firebaseUser.updateUserRecord(userData, onUsersCollection);
};

export const unsubscribe = () => {
  if (currentUserUnsubscribe) {
    currentUserUnsubscribe();
  }
  if (usersUnsubscribe) {
    usersUnsubscribe();
  }
};

const onUsersCollection = data => {
  store.dispatch(setUser(data));
};
