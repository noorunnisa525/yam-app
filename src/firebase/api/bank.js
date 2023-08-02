import firestore from '@react-native-firebase/firestore';

const bankCollection = firestore().collection('banks');

export const fetchBankCollection = async callback => {
  return bankCollection.onSnapshot(querySnapshot => {
    const data = [];
    const completeData = [];
    querySnapshot.forEach(doc => {
      const user = doc.data();
      user.id = doc.id
      data.push({...user});
    });
    return callback(data, completeData);
  });
};
