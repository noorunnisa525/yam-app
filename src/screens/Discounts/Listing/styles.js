import {StyleSheet} from 'react-native';
import {hp, wp} from '../../../utils';

const createStyles = theme => {
  const styles = StyleSheet.create({
    leftHeaderIconStyle: {
      color: theme.color.mainText,
    },
    rightHeaderIconStyle: {
      color: theme.color.icon,
    },
    leftHeaderIconSize: hp(3),
    emptyJobsContainer: {
      width: wp(95),
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
    iconContainer: {
      width: wp(8),
      height: wp(8),
      borderRadius: wp(7),
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.color.lightContainer,
    },

    divider: {
      backgroundColor: '#E1E1E1',
      marginVertical: hp(1),
      width: wp(93),
      height: hp(0.1),
      alignSelf: 'center',
    },
    title: {
      paddingHorizontal: wp(3),
      fontSize: hp(0.4),
      color:theme.color.mainText,
      fontWeight:theme.fontWeight.medium
    },
    textStyle:{
      fontSize: hp(0.4),
      color:theme.color.mainText,
      fontWeight:theme.fontWeight.small
    },
    container:{
      paddingBottom:hp(2)
    },
    termsText: {
      paddingHorizontal: wp(3),
      fontSize: hp(0.4),
      textDecorationLine:'underline',
      color:theme.color.icon
    },
    themeTextColor: theme.color.primary,
    headingText:{
      fontSize: hp(0.5),
      color:theme.color.mainText,
      fontWeight:theme.fontWeight.medium
    },
    dropdownContainerStyle:{
      height: hp(6.5),
      zIndex:20,
      backgroundColor: theme.color.secondaryText,
      flexDirection: 'row', alignItems: 'center'
    },
    placeholderColor: {
      color: '#B1C3C9',
    },
    fontSizePlaceholder:{ fontSize:hp(1)},
    dropdownStyle:{
      width:wp(84),
      marginLeft:-wp(0.5),
      borderRadius:0,
      height:hp(5),

    },
    flatListContainer: {marginHorizontal:wp(3)},
    noDiscountsText:{
      textAlign: 'center',
      color: theme.color.primary,
      marginTop: hp(2),
    },
    scrollViewContainer:{flexGrow:1},
    mainContainer: {alignItems: 'flex-start'},
cityContainer:{marginHorizontal: wp(7), marginTop: hp(3)}
  
    });
  return styles;
};
export default createStyles;
