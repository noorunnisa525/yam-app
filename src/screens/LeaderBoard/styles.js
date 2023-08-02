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

    iconColor: theme.color.icon,

    leftHeaderIconSize: hp(3),

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
  });
  return styles;
};
export default createStyles;
