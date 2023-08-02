import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import { useThemeAwareObject } from '../../../theme';
import { hp, wp } from '../../../utils';

const createStyles = theme => {
  const styles = StyleSheet.create({
    image: {
      width: wp(42),
      height: wp(41),
      backgroundColor: theme.color.background,
    },
    tile: {
      marginHorizontal: wp(3.5),
      marginVertical: hp(1),
      borderRadius: 12,
      overflow: 'hidden',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
      elevation: 7,
    },
  });
  return styles;
};

const BankTile = props => {
  const bank = props.data;
  const navigation = useNavigation();
  const styles = useThemeAwareObject(createStyles);
  return (
    <TouchableOpacity
      style={styles.tile}
      onPress={() => {
        navigation.navigate('Listing', {id: bank.id});
      }}>
      <FastImage
        resizeMode={FastImage.resizeMode.contain}
        source={{uri: bank.image}}
        style={styles.image}
      />
    </TouchableOpacity>
  );
};

export default BankTile;
