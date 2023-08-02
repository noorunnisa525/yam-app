import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import ResponsiveText from '../../components/RText';
import {useThemeAwareObject} from '../../theme';
import {hp, wp} from '../../utils';
import {useNavigation} from '@react-navigation/native';
import {Icon} from 'react-native-elements';
import {setSales} from '../../redux/slices/sale';

const createStyles = theme => {
  const styles = StyleSheet.create({
    image: {
      width: wp(30),
      margin: wp(1.5),
      borderRadius: 4,
    },
    tile: {
      flexDirection: 'row',
      alignSelf: 'center',
      height: wp(23),
      width: wp(90),
      margin: wp(1.2),
      borderRadius: 10,
      marginBottom: wp(3),
      backgroundColor: theme.color.lightContainer,
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
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: wp(53),
      margin: wp(2),
    },
    name: {
      fontSize: theme.fontSize.large,
    },
    iconSize: hp(2.5),

    leftHeaderIconStyle: {
      color: theme.color.icon,
    },

    iconColor: theme.color.icon,
    unMarkedIconColor: theme.color.background,
    unMarkedIcon: {
      color: theme.color.background,
    },
  });
  return styles;
};

const FavouritesTile = props => {
  const data = props.data;
  const navigation = useNavigation();
  const styles = useThemeAwareObject(createStyles);
  const [marked, setMarked] = useState(true);
  return (
    <View
      style={styles.tile}
      // onPress={() => {
      // navigation.navigate('DiscountDetails', {discounts: data});
      // }}
      >
      <FastImage
        source={{uri: data.image}}
        style={styles.image}
        resizeMode={'contain'}
      />
      <View style={styles.container}>
        <ResponsiveText style={styles.name}>{data.name}</ResponsiveText>
        <TouchableOpacity onPress={() => setMarked(!marked)}>
          <Icon
            name={'heart'}
            type="material-community"
            color={marked ? styles.iconColor : styles.unMarkedIconColor}
            size={styles.leftHeaderIconSize}
            iconStyle={{
              backgroundColor: marked ? null : styles.iconColor,
              borderRadius: hp(5.5 / 2),
              padding: hp(0.6),
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FavouritesTile;
