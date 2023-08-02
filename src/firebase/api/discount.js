import firestore from '@react-native-firebase/firestore';

const discountCollection = firestore().collection('discounts');

export const fetchDiscountCollection = async callback => {
  return discountCollection.onSnapshot(querySnapshot => {
    const data = [];
    const completeData = [];
    querySnapshot.forEach(doc => {
      const user = doc.data();
      user.id = doc.id
      data.push({ ...user });
    });

    return callback(data, completeData);
  });
};
