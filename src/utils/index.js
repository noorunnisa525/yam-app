import {Dimensions} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

export const width = Dimensions.get('window').width;

export const height = Dimensions.get('window').height;

export const wp = p => widthPercentageToDP(p);
export const hp = p => heightPercentageToDP(p);
