import {hp, wp} from '../../utils';

import {StyleSheet} from 'react-native';

const createStyles = theme => {
  const styles = StyleSheet.create({
    root: {
      flexGrow: 1,
      backgroundColor: theme.color.background,
    },

    innerContainer: {
      flex: 1,
      marginHorizontal: wp(4),
      marginTop: hp(2.5),
    },

    nameContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      width: wp(92),
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
    iconSize: wp(7),
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
      height: hp(6.8),
      paddingTop: hp(0.5),
      width: wp(44),
      backgroundColor: 'white',
      paddingHorizontal: wp(2),
      borderColor: theme.color.textInputBorder,
    },

    textStyle: {
      borderWidth: 1,
      borderRadius: theme.size.radius.radius3,
      marginTop: hp(1.5),
      backgroundColor: 'white',
      width: wp(92),
      height: hp(6.8),
      paddingTop: hp(0.5),
      alignItems: 'center',
      paddingHorizontal: wp(2),
      borderColor: theme.color.boundaryColor,
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
      paddingLeft: wp(2),
      marginVertical: wp(2),
      fontFamily: theme.fontWeight.light,
      textAlign: 'left',
      zIndex: 4,
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
    img: {
      height: wp(4),
      width: wp(4),
      marginRight: wp(1),
    },
    dropdownContainerStyle: {
      height: hp(7),
      paddingHorizontal: wp(2),
      padding: wp(0.5),
      borderWidth: 1,
      zIndex: 20,
      backgroundColor: theme.color.secondaryText,
      borderColor: theme.color.textInputBorder,
      borderRadius: theme.size.radius.radius3,
      flexDirection: 'row',
      alignItems: 'center',
      width: wp(92),
    },
    dropdownStyle: {
      width: wp(84),
      marginLeft: -wp(1.5),
      borderRadius: 0,
      height: hp(2.5),
      zIndex: 5,
    },
    iconContainer: {
      width: wp(8),
      height: wp(8),
      borderRadius: wp(7),
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.color.lightContainer,
    },
  });
  return styles;
};
export default createStyles;
