import {StyleSheet} from 'react-native';
import {hp, wp} from '../../../utils';

const createStyles = theme => {
  const styles = StyleSheet.create({
    root: {
      backgroundColor: theme.color.background,

      borderWidth: 0,
      borderTopLeftRadius: theme.size.radius.radius1,
      borderTopRightRadius: theme.size.radius.radius1,
      borderColor: theme.color.background,
      paddingHorizontal:wp(2)
    },

    innerContainer: {
      marginHorizontal: wp(4),
      marginBottom:hp(2)
    },

    iconColor: theme.color.icon,

    leftHeaderIconStyle: {
      color: theme.color.icon,
    },


    divider: {height: hp(2)},

    mainHeadingText: {
      fontSize: theme.fontSize.xlarge,
      fontWeight: theme.fontWeight.bold,
      marginTop: hp(5),
      marginBottom: hp(2),
    },

    semiHeadingText: {
      marginBottom: hp(5),
      color: theme.color.divider,
    },

    inputStyle: {
      color: theme.color.mainText,
      fontFamily: theme.fontWeight.regular,
      fontSize: wp(theme.fontSize.small),
    },
    iconContainer: {
      width: wp(8),
      height: wp(8),
      borderRadius: wp(7),
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.color.lightContainer,
    },
    leftHeaderIconSize: hp(3),

    textStyle: {
      borderWidth: 1,
      borderRadius: theme.size.radius.radius3,
      marginTop: hp(1.5),
      backgroundColor: 'white',
      paddingHorizontal: wp(2),
      borderColor: theme.color.boundaryColor,
    },


    errorText: {
      fontSize: theme.fontSize.small,
      marginHorizontal: wp(1),
      marginVertical: hp(0.2),
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
    },

    forgetPassContainer: {
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      marginRight: wp(5),
      marginBottom: wp(5),
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
