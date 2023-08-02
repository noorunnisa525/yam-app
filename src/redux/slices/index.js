import AsyncStorage from '@react-native-async-storage/async-storage';
import authReducer from './auth';
import bankReducer from './bank';
import {combineReducers} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';

const rootReducer = combineReducers({
  authReducer,
  bankReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['featured', 'carousel', 'favourites', 'sales'],
  blacklist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const root = (state, action) => {
  if (action.type === 'auth/logoutUser') {
    AsyncStorage.removeItem('persist:root');
    return persistedReducer(undefined, action);
  } else {
    return persistedReducer(state, action);
  }
};

export default root;
