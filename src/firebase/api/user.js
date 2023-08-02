import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const usersRef = firestore().collection('users');

export const getUser = () => auth().currentUser;
const currentUser = auth().currentUser;

export const createUserRecord = async (apiResponse, data) => {
  const body = {
    email: apiResponse.email,
    emailVerified: apiResponse.emailVerified,
    uid: apiResponse.uid,
    creationTime: apiResponse.metadata.creationTime,
    lastSignInTime: apiResponse.metadata.lastSignInTime,
    profileURL: apiResponse.photoURL
      ? apiResponse.photoURL
      : 'https://firebasestorage.googleapis.com/v0/b/service-agent-app.appspot.com/o/chefimg2.png?alt=media&token=b123f8e7-62e9-4ded-a5e2-99508803ce60',
    ...data,
  };

  let response = await usersRef
    .doc(apiResponse.uid)
    .set(body)
    .then(() => body)
    .catch(error => {
      return error;
    });

  return response;
};

export const updateUserData = async (userId, userData) => {
  try {
    const userRef = usersRef.doc(userId);

    await userRef.update({
      ...userData,
    });

    return {success: true};
  } catch (error) {
    return {error, success: false};
  }
};

export const updateUserRecord = async data => {
  try {
    const userRef = usersRef.doc(data.uid);

    await userRef.update({
      ...data,
    });

    let userData = await userRef.get().then(item => item.data());
    return userData;
  } catch (error) {
    return error;
  }
};

// export const fetchUserRecord = callback => {
//   return usersRef.doc(currentUser.uid).onSnapshot(querySnapshot => {
//     console.log(querySnapshot, 'query', querySnapshot.exists);
//     if (querySnapshot.exists) {
//       let userData = querySnapshot.data();

//       return callback(userData);
//     }
//   });
// };

export const fetchUserRecord = (userID, callback) => {
  return usersRef.doc(userID).onSnapshot(querySnapshot => {
    if (querySnapshot.exists) {
      let userData = querySnapshot.data();

      return callback(userData);
    }
  });
};
