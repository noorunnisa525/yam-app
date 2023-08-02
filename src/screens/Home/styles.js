import {hp, wp} from '../../utils';

import {StyleSheet} from 'react-native';

const createStyles = theme => {
  const styles = StyleSheet.create({
    activityContainer: {
      width: wp(90),
      height: hp(50),
      justifyContent: 'center',
      alignItems: 'center',
    },
    emptyJobsContainer: {
      width: wp(90),
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
    flatListContainer: {
      flexGrow: 1,
      justifyContent: 'center',
      paddingBottom: hp(2),
      paddingHorizontal: wp(2),
    },

    themeTextColor: theme.color.primary,
    skeletonMainContainer: {
      borderRadius: theme.size.radius.radius2,
      marginHorizontal: wp(2),
      marginVertical: hp(1),
      overflow: 'hidden',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
      elevation: 7,
    },
    noSalesText: {
      textAlign: 'center',
      color: theme.color.primary,
      marginTop: hp(2),
    },
    scrollViewContainer: {flexGrow: 1},
    mainContainer: {alignItems: 'center'},
  });
  return styles;
};
export default createStyles;
