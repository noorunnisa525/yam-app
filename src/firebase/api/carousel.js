import firestore from '@react-native-firebase/firestore';

const carouselItems = firestore().collection('carousels');

export const fetchCarouselItems = async callback => {
  return carouselItems.onSnapshot(querySnapshot => {
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
