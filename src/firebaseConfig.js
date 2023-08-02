import {initializeApp} from 'firebase/app';
import {getDoc, addDoc, collection, getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAHtRr1SSZ9_xs-dhkdtm_36BBAFr4Mb54',
  authDomain: 'sale-app-8505a.firebaseapp.com',
  databaseURL: 'https://sale-app-8505a-default-rtdb.firebaseio.com',
  projectId: 'sale-app-8505a',
  storageBucket: 'sale-app-8505a.appspot.com',
  messagingSenderId: '109193865833',
  appId: '1:109193865833:web:e624a9daaba172ab8050f8',
  measurementId: 'G-07JP78S3SG',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export {getDoc, addDoc, collection};
