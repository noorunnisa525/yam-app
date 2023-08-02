import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import ResponsiveText from '../../../components/RText';
import { useThemeAwareObject } from '../../../theme';
import { hp, wp } from '../../../utils';

const createStyles = theme => {
  const styles = StyleSheet.create({
    image: {
      height: wp(40),
      width: wp(40),
    },
    tile: {
      flexDirection: 'row',
      alignSelf: 'center',
      width: wp(92),
      margin: wp(1.2),
      borderRadius: hp(1),
      overflow: 'hidden',
      marginBottom: wp(3),
      backgroundColor: theme.color.background,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
      elevation: 7,
    },
    container: {
      // flexDirection: 'row',
      // justifyContent: 'space-between',
      // alignItems: 'center',
      margin: wp(2),
    },
    discount: {
      marginTop: hp(3),
      width: wp(30),
      padding: wp(1.5),
      borderRadius: wp(2),
      overflow: 'hidden',
      backgroundColor: theme.color.primary,
    },
    discountPercentage: {
      color: theme.color.background,
      textAlign: 'center',
    },
    name: {
      fontSize: theme.fontSize.large,
      fontWeight: theme.fontWeight.bold,
      marginBottom: hp(1),
    },
    addressImg: {
      width: wp(8),
      height: wp(7),
      borderRadius: wp(1.5),
      borderWidth: wp(0.5),
      borderColor: theme.color.lightContainer,

      // backgroundColor:'red'
    },
    headingText: {
      fontWeight: theme.fontWeight.semiBold,
    },
  });
  return styles;
};

const DiscountInfoTile = props => {
  const data = props.data;
  const navigation = useNavigation();
  const styles = useThemeAwareObject(createStyles);
  const maxdiscount = Math.max.apply(
    Math,
    data.discounts?.map(function (o) {
      return o.percentage;
    }),
  );

  return (
    <TouchableOpacity
      style={styles.tile}
      onPress={() => {
        navigation.navigate('DiscountDetails', {discounts: data});
      }}>
      <FastImage source={{uri: data.brand.logo}} style={styles.image} />
      <View style={styles.container}>
        <ResponsiveText style={styles.name}>{data.brand.name}</ResponsiveText>

        <ResponsiveText>
          <ResponsiveText style={styles.headingText}>Start: </ResponsiveText>
          {data.startDate}
        </ResponsiveText>
        <ResponsiveText>
          <ResponsiveText style={styles.headingText}>End: </ResponsiveText>
          {data.endDate}
        </ResponsiveText>
        <View style={styles.discount}>
          <ResponsiveText style={styles.discountPercentage}>
            Upto {maxdiscount}%
          </ResponsiveText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DiscountInfoTile;
