import {hp, wp} from '../../../utils';

import {StyleSheet} from 'react-native';

const createStyles = theme => {
  const styles = StyleSheet.create({
    root: {
      backgroundColor: theme.color.background,
      borderWidth: 0,
      borderTopLeftRadius: theme.size.radius.radius1,
      borderTopRightRadius: theme.size.radius.radius1,
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },

    imageContainer: {
      width: wp(100),
      height: hp(40),
    },

    logoTitleImageStyle: {
      width: wp(50),
      height: hp(20),
      borderRadius: theme.size.radius.radius1,
      alignSelf: 'center',
      zIndex: 100,
      marginTop: -hp(24),
    },

    mainHeadingText: {
      fontSize: theme.fontSize.large,
      fontFamily: theme.fontWeight.bold,
      marginBottom: hp(1),
    },

    divider: {
      height: hp(1),
    },

    semiHeadingText: {
      fontSize: theme.fontSize.regular,
      fontFamily: theme.fontWeight.light,
      textAlign: 'center',
      width: wp('80%'),
      marginBottom: hp(3),
    },

    textContainer: {
      // width: wp(50),
      // height: hp(20),
      // borderRadius: theme.size.radius.radius1,
      alignSelf: 'center',
      marginTop: -hp(15),
      borderWidth: 1,
      width: 200,
      paddingVertical: 10,
      borderRadius: theme.size.radius.radius3,
    },

    activityStyle: {
      color: theme.color.primary,
    },
  });

  return styles;
};
export default createStyles;
