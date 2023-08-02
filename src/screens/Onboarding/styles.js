import {StyleSheet} from 'react-native';
import {hp, wp} from '../../utils';

const createStyles = theme => {
  const styles = StyleSheet.create({
    root: {
      backgroundColor: theme.color.background,
    },

    innerContainer: {
      margin: wp(4),
    },

    iconSize: hp(2.5),

    leftHeaderIconStyle: {
      color: theme.color.icon,
    },

    arrowIconStyle: {
      color: theme.color.icon,
    },

    iconColor: theme.color.icon,

    leftHeaderIconSize: hp(3),
    arrowIconSize: wp(7),

    mainHeadingText: {
      fontSize: theme.fontSize.large,
      fontFamily: theme.fontWeight.bold,
    },

    semiHeadingText: {
      fontSize: theme.fontSize.regular,
      fontFamily: theme.fontWeight.light,
    },

    textStyle: {
      borderWidth: 1,
      borderRadius: theme.size.radius.radius3,
      marginTop: hp(3),
      backgroundColor: 'white',
      paddingLeft: wp(2),
      borderColor: theme.color.textInputBorder,
    },

    inputStyle: {
      color: theme.color.mainText,
      fontFamily: theme.fontWeight.regular,
    },

    logoContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },

    logoStyle: {
      height: wp(40),
      width: wp(40),
      aspectRatio: 1,
    },

    errorText: {
      fontSize: theme.fontSize.small,
      marginHorizontal: wp(3),
      marginVertical: wp(3),
      fontFamily: theme.fontWeight.light,

      color: theme.color.error,
    },

    multiTextContainer: {
      alignSelf: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: hp(2),
    },

    multiTextStyle: {
      fontSize: theme.fontSize.small,
      fontFamily: theme.fontWeight.regular,
    },

    signUpText: {
      color: theme.color.primary,
    },

    forgetPassContainer: {
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      marginRight: wp(2),
      marginBottom: hp(2),
      marginTop: hp(2),
    },

    forgetPassText: {
      color: theme.color.primary,
      fontSize: theme.fontSize.small,
      fontFamily: theme.fontWeight.bold,
    },

    imageView: {
      height: wp(80),
      width: wp(80),
      borderRadius: wp(40),
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      height: wp(70),
      width: wp(70),
    },
    backgroundColor: theme.color.primary,
    nextBtn: {
      flexDirection: 'row',
      backgroundColor: theme.color.background,
      padding: wp(2),
      bottom: hp(0.5),
      right: wp(3),
      width: wp(25),
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: wp(10),
    },
    nextText: {
      color: theme.color.primary,
    },
  });
  return styles;
};
export default createStyles;
