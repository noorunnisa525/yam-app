import {createUserRecord, updateUserRecord} from './user';
import {setGuest, setUser} from '../../redux/slices/user';

import auth from '@react-native-firebase/auth';
import {firebaseUser} from '.';
import {store} from '../../redux/store';

export const getUser = () => auth().currentUser;

export const onAuthStateChanged = async args => {
  let response = await auth()
    .onAuthStateChanged(args)
    .then(doc => {
      return doc;
    })
    .catch(error => {
      return error;
    });

  return response;
};

// export const signUp = async (email, password) => {
//   let response = await auth()
//     .createUserWithEmailAndPassword(email, password)
//     .then(doc => {
//       sendVerification();

//       return doc.user;
//     })
//     .catch(error => {
//       return error;
//     });

//   return response;
// };

export const signUp = async (email, password, userType, values) => {
  let response = await auth()
    .createUserWithEmailAndPassword(email, password)
    .then(doc => {
      createUserRecord(doc.user, values, userType)
        .then(resp => {
          store.dispatch(setUser(resp));
          store.dispatch(setGuest(false));
          sendVerification();
        })
        .catch(e => {
          return {errorCode: 'An error occurred. Please try gain'};
        });
      return {user: doc.user};
    })
    .catch(error => {
      switch (error.code) {
        case 'auth/email-already-in-use':
          return {errorCode: 'Email is already in use'};

        case 'auth/invalid-email':
          return {errorCode: 'Invalid Email'};

        default:
          return {errorCode: 'Please try again'};
      }
    });

  return response;
};

export const signIn = async (email, password) => {
  let userResponse = null;
  let response = await auth()
    .signInWithEmailAndPassword(email, password)
    .then(async doc => {
      await updateUserRecord({
        lastSignInTime: doc.user.metadata.lastSignInTime,
        emailVerified: doc.user.emailVerified,
        uid: doc.user.uid,
      })
        .then(resp => (userResponse = {user: resp}))
        .catch(error => (userResponse = {errorCode: error}));

      return userResponse;
    })
    .catch(error => {
      switch (error.code) {
        case 'auth/user-not-found':
          return {errorCode: 'User not found'};

        case 'auth/invalid-email':
          return {errorCode: 'Invalid Email'};

        case 'auth/wrong-password':
          return {errorCode: 'Incorrect Password'};

        default:
          return {errorCode: 'Please try again'};
      }
    });

  return response;
};

export const signInAnonymously = async (email, password) => {
  let response = await auth()
    .signInAnonymously()
    .then(doc => {
      console.log('doc', doc);
      return doc;
    })
    .catch(error => {
      return error;
    });

  return response;
};

export const sendVerification = () => getUser().sendEmailVerification();

export const signOut = async () => {
  let response = await auth()
    .signOut()
    .then(doc => {
      return doc;
    })
    .catch(error => {
      return error;
    });

  return response;
};

export const reload = () => getUser().reload();

export const reauthenticate = async ({email = '', password = ''}) =>
  getUser().reauthenticateWithCredential(
    auth.EmailAuthProvider.credential(email, password),
  );

export const updatePassword = ({password = ''}) =>
  getUser().updatePassword(password);

// export const sendPasswordReset = async email => {
//   let response = await auth()
//     .sendPasswordResetEmail(email)
//     .then(doc => {
//       return doc;
//     })
//     .catch(error => {
//       return error;
//     });

//   return response;
// };

export const sendPasswordReset = async email => {
  let response = await auth()
    .sendPasswordResetEmail(email)
    .then(doc => {
      return {user: doc};
    })
    .catch(error => {
      switch (error.code) {
        case 'auth/user-not-found':
          return {errorCode: 'User not found'};

        case 'auth/invalid-email':
          return {errorCode: 'Invalid Email'};

        case 'auth/wrong-password':
          return {errorCode: 'Incorrect Password'};

        default:
      }
    });

  return response;
};
