import firestore from '@react-native-firebase/firestore';

const featuredItems = firestore().collection('carousels');

export const fetchFeaturedItems = async callback => {
  return featuredItems.onSnapshot(querySnapshot => {
    let data = [];
    const completeData = [];
    querySnapshot.forEach(doc => {
      const user = doc.data();
      user.id = doc.id
      data = {...user};
    });
    
    return callback(data, completeData);
  });
};
