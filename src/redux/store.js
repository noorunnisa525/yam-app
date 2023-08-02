import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
} from 'redux-persist';
import {combineReducers, configureStore} from '@reduxjs/toolkit';

import AsyncStorage from '@react-native-async-storage/async-storage';
import bankReducer from './slices/bank';
import carouselReducer from './slices/carousel';
import discountReducer from './slices/discount';
import featuredReducer from './slices/featured';
import {reducer as network} from 'react-native-offline';
import saleReducer from './slices/sale';
import userReducer from './slices/user';

let enhancers = [];
let initialState = {};

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const reducers = combineReducers({
  userReducer: userReducer,
  bankReducer: bankReducer,
  discountReducer: discountReducer,
  carouselReducer: carouselReducer,
  featuredReducer: featuredReducer,
  saleReducer: saleReducer,
  network,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // blacklist: ['discount', 'user', 'carousel', 'featured', 'bank', 'sale'],
  // whitelist: [''],
};

//const composedEnhancers = compose(...enhancers);

const persistedReducer = persistReducer(persistConfig, reducers);

const root = (state, action) => {
  if (action.type === 'user/clearUser') {
    AsyncStorage.removeItem('persist:root');
    return persistedReducer(undefined, action);
  } else {
    return persistedReducer(state, action);
  }
};

export const store = configureStore({
  reducer: root,
  devTools: true,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

//export const persistor = persistStore(store);

// import {compose, createStore} from 'redux';
// import {applyMiddleware, configureStore, createStore} from '@reduxjs/toolkit';

// import rootReducer from './slices/index';

// let enhancers = [];
// let initialState = {};

// if (process.env.NODE_ENV === 'development') {
//   const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

//   if (typeof devToolsExtension === 'function') {
//     enhancers.push(devToolsExtension());
//   }
// }

// const composedEnhancers = compose(...enhancers);

// const store = createStore(rootReducer, initialState, composedEnhancers);

// export default store;
