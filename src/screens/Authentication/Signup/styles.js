import {StyleSheet} from 'react-native';
import {hp, wp} from '../../../utils';

const createStyles = theme => {
  const styles = StyleSheet.create({
    root: {
      backgroundColor: theme.color.background,
    },

    innerContainer: {
      margin: wp(4),
    },

    nameContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },

    nameErrorContainer: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      // justifyContent: 'space-',
    },

    iconSize: hp(2.5),

    iconStyle: {
      padding: wp(3),
    },

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

    textStyleName: {
      borderWidth: 1,
      borderRadius: theme.size.radius.radius3,
      marginTop: hp(0.5),

      width: wp('45'),
      backgroundColor: 'white',
      paddingHorizontal: wp(2),
      borderColor: theme.color.textInputBorder,
    },

    textStyle: {
      borderWidth: 1,
      borderRadius: theme.size.radius.radius3,
      marginTop: hp(1),

      backgroundColor: 'white',
      paddingHorizontal: wp(2),
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
      fontFamily: theme.fontWeight.light,
      textAlign: 'left',
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
      textDecorationLine: 'underline',
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
    headerText: {
      fontSize: theme.fontSize.xlarge,
      fontWeight: theme.fontWeight.bold,
      marginTop: hp(5),
      marginBottom: hp(2),
    },
    subheaderText: {
      marginBottom: hp(5),
      color: theme.color.divider,
    },
    img:{
      height:wp(4),
      width:wp(4),
      marginRight:wp(1)
    }
  });
  return styles;
};
export default createStyles;
