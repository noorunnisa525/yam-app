import React from 'react';
import {StyleSheet, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import ResponsiveText from '../../../components/RText';
import {useThemeAwareObject} from '../../../theme';
import {hp, wp} from '../../../utils';

const createStyles = theme => {
  const styles = StyleSheet.create({
    image: {
      // flex: 1,
      width: wp(8),
      height: wp(8),
      backgroundColor: theme.color.secondaryText,
    },
    imageView: {
      height: wp(9),
      width: wp(9),
      marginRight: wp(1.5),
    },
    tile: {
      alignSelf: 'center',
      width: wp(95),
      margin: wp(1.2),
      paddingBottom: wp(1.5),
      borderRadius: wp(2),
      marginBottom: wp(3),
      marginHorizontal: wp(3),
      borderWidth: hp(0.01),
      backgroundColor: '#F8F8F8',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
      elevation: 7,
    },
    textView: {
      borderTopLeftRadius: wp(2),
      borderTopRightRadius: wp(2),
      backgroundColor: '#F8F8F8',
      padding: wp(2),
      flexDirection:'row'
    },
    cardView: {
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: wp(2),
      backgroundColor: '#F8F8F8',
    },
    discountText: {
      color: theme.color.icon,
      fontSize: wp(1),
      fontWeight: theme.fontWeight.semiBold,
      marginLeft: 2,
    },
    percentText: {
      color: theme.color.icon,
      fontSize: theme.fontSize.large,
      
    },
    name: {
      fontSize: theme.fontSize.large,
    },
    cardName: {
      fontSize: wp(1),
      fontWeight: theme.fontWeight.semiBold,
    },
  });
  return styles;
};

const DiscountDetailsTile = props => {
  const cardType = (name, image) => {
    return (
      <View style={styles.cardView}>
        <View style={styles.imageView}>
          <FastImage
            resizeMode="cover"
            style={styles.image}
            source={{uri: image}}
          />
        </View>
        <ResponsiveText style={styles.cardName}>{name}</ResponsiveText>
      </View>
    );
  };
  const styles = useThemeAwareObject(createStyles);
  return (
    <View style={styles.tile}>
      <View style={styles.textView}>
        <ResponsiveText style={styles.discountText}>
          {props.value}% off
        </ResponsiveText>
      </View>
      {props.cards.map(card => {
        return cardType(card.name, card.image);
      })}
    </View>
  );
};

export default DiscountDetailsTile;
