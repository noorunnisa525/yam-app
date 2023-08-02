import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';
import FastImage from 'react-native-fast-image';
import { useThemeAwareObject } from '../theme';
import { hp, wp } from '../utils';
import Text from './CustomText';

function Poster(props) {
  const createStyles = theme => {
    const themeStyles = StyleSheet.create({
      mainContainer: {
        borderRadius: theme.size.radius.radius2,
        backgroundColor: theme.color.lightContainer,
        borderColor: theme.color.borderColor,
        borderWidth: wp(0.4),
        marginHorizontal: wp(1.5),
        marginBottom: hp(1.5),
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 3,
      },
      imageStyle: {
        height: wp(35),
        width: wp(44),
        backgroundColor: theme.color.avatarColor,
        justifyContent: 'space-between',
      },
      saleImg: {
        width: wp(14),
        height: wp(10),
        backgroundColor: 'red',
        // marginLeft:-wp(5),
        // overflow:'hidden',
        borderBottomRightRadius: theme.size.radius.radius2,
      },
      rowContainer: {
        // paddingHorizontal: wp(3),
        // paddingVertical: hp(1),
        justifyContent: 'space-between',
        flexDirection: 'row',
        overflow: 'hidden',
      },
      offerText: {
        // width: wp(29),
        fontSize: theme.size.xSmall,
        fontWeight: theme.fontWeight.light,
        color: theme.color.background,
        padding: wp(1),
        paddingRight: wp(3),
        backgroundColor: theme.color.discountColor,
        borderTopRightRadius: wp(5),
        borderBottomRightRadius: wp(5),
        textAlign: 'left',
        top: hp(3),
        alignSelf: 'flex-start',
      },
      nameText: {
        width: wp(19),
        margin: wp(2),
        marginTop: hp(2),
        fontSize: theme.size.small,
        fontWeight: theme.fontWeight.semiBold,
        color: theme.color.mainText,
        textAlign: 'left',
      },
      uptoText: {
        width: wp(1.3),
        fontSize: hp(1.2),
        textTransform: 'uppercase',
        color: theme.color.secondaryText,
        margin: wp(1),
        fontFamily: 'BebasNeue-Bold',
      },
      percentText: {
        textAlign: 'right',
        fontSize: hp(2),
        textTransform: 'uppercase',
        color: theme.color.secondaryText,
        fontFamily: 'BebasNeue-Bold',
      },
      offText: {
        fontSize: hp(2),
        textTransform: 'uppercase',
        color: theme.color.secondaryText,
        fontFamily: 'BebasNeue-Bold',
      },
      numberText: {
        // width: 10,
        color: theme.color.secondaryText,
        fontSize: hp(5.7),
        fontFamily: 'BebasNeue-Bold',
        // marginTop:hp(0.5),
        textAlign: 'center',
      },
      percentageContainer: {
        flexDirection: 'row',
        backgroundColor: '#F46647',
      },

      promotionContainer: {justifyContent: 'center', alignItems: 'flex-start'},
    });
    return themeStyles;
  };
  const styles = useThemeAwareObject(createStyles);
  const navigation = useNavigation();
  const split = props.offerText.split(' ');
  const result = split[1].match(/.{1,2}/g) || [];

  return (
    <TouchableOpacity
      style={[styles.mainContainer, props.style]}
      onPress={props.onPress}>
      <FastImage
        source={{uri: props.image}}
        style={[styles.imageStyle, props.imageStyle]}
        resizeMode="cover"

      />
      <View style={styles.rowContainer}>
        <Text numberOfLines={1} style={styles.nameText}>
          {props.name}
        </Text>
        <View style={styles.percentageContainer}>
          {split[0] && <Text style={styles.uptoText}>{split[0]}</Text>}
          <Text style={styles.numberText}>{result[0]}</Text>
          <View
            style={{
              flexDirection: 'column',
              margin: wp(1),
              justifyContent: 'center',
            }}>
            <Text style={styles.percentText}>{result[1]}</Text>
            {split[0] && <Text style={styles.offText}>{split[2]}</Text>}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default Poster;
