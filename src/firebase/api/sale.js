import firestore from '@react-native-firebase/firestore';

const saleCollection = firestore().collection('sales');

export const fetchSaleCollection = async callback => {
  return saleCollection.onSnapshot(querySnapshot => {
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
