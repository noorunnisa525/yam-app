import {StyleSheet} from 'react-native';
import {hp, wp} from '../../utils';

const createStyles = theme => {
  const styles = StyleSheet.create({
    root: {
      backgroundColor: theme.color.background,
    },

    innerContainer: {
      margin: wp(4),
      // borderRadius:15,
      // backgroundColor:'red'
    },

    nameContainer: {
      flexDirection: 'row',
      justifyContent:'space-between'
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

    textStyleName: {
      borderWidth: 1,
      borderRadius: theme.size.radius.radius3,
      marginTop: hp(0.5),
      marginBottom: hp(1),
      width: wp('45'),
      backgroundColor: 'white',
      paddingLeft: wp(2),
      borderColor: theme.color.textInputBorder,
    },

    textStyle: {
      borderWidth: 1,
      borderRadius: theme.size.radius.radius3,
      marginTop: hp(0.5),
      marginBottom: hp(1),
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
      height: wp(70),
      width: wp(50),
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
    img:{
      width:wp(5),
      height:wp(5),
      marginRight:wp(2)
    },
    noLoginText:{
      textAlign: 'center',
      marginTop: hp(2),
    },
    logOutButtonContainer:{position: 'absolute', bottom: 5, alignSelf: 'center'},
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
