import {StyleSheet} from 'react-native';
import {hp, wp} from '../../../utils';

const createStyles = theme => {
  const styles = StyleSheet.create({
    mainContainer: {alignItems: 'flex-start'},
    leftHeaderIconStyle: {
      color: theme.color.mainText,
    },
    iconContainer: {
      width: wp(8),
      height: wp(8),
      borderRadius: wp(7),
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.color.lightContainer,
    },
    themeTextColor: theme.color.primary,

    leftHeaderIconSize: hp(3),

    emptyJobsContainer: {
      width: wp(100),
      height: hp(50),
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    logoStyle: {
      height: wp(50),
      width: wp(50),
      aspectRatio: 1,
    },
    emptyMessage: {
      color: theme.color.primary,
      textAlign: 'center',
      alignSelf: 'center',
    },
    flatListContainer: {paddingBottom: hp(5)},
    noBanksText:{
      textAlign: 'center',
      color: theme.color.primary,
      marginTop: hp(2),
    },
    scrollViewContainer:{flexGrow:1}
  });
  return styles;
};
export default createStyles;
