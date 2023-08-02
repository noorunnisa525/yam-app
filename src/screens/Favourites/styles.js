import {StyleSheet} from 'react-native';
import {hp, wp} from '../../utils';

const createStyles = theme => {
  const styles = StyleSheet.create({
    leftHeaderIconStyle: {
      color: theme.color.icon,
    },

    leftHeaderIconSize: hp(3),


    themeTextColor: theme.color.primary,
    emptyJobsContainer: {
  
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    logoStyle: {
      height: wp(50),
      width: wp(50),
      aspectRatio: 1,
    },
    
    noFavsImg: {
      height: wp(70),
      width: wp(50),
      aspectRatio: 1,
    },
    noLoginText:{ textAlign: 'center',
    marginTop: hp(2),
    marginHorizontal: wp(10),},
    noLoginContainer:{
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      marginLeft: 20,
      marginRight: 20,
    }
  });
  return styles;
};
export default createStyles;
