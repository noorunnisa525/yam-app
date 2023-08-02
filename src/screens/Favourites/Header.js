import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {BackgroundImage} from 'react-native-elements/dist/config';
import {Icon} from 'react-native-elements';
import {useThemeAwareObject} from '../../../theme';
import Share from 'react-native-share';
import {hp, wp} from '../../../utils';
import {useNavigation} from '@react-navigation/native';

const createStyles = theme => {
  const styles = StyleSheet.create({
    backgroudImage: {
      height: hp(30),
      justifyContent: 'space-between',
    },
    topIconsRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: wp(1),
      marginTop: hp(0.5),
    },
    iconLeft: {
      margin: wp(1.5),

      backgroundColor: theme.color.background,
      borderRadius: wp(20),
      padding: wp(1),
      elevation: 5,
      position: 'absolute',
      top: hp(2),
      left: wp(2),
    },
    iconRight: {
      margin: wp(1.5),
      backgroundColor: theme.color.background,
      borderRadius: wp(20),
      padding: wp(1),
      elevation: 5,
      position: 'absolute',
      top: hp(2),
      right: wp(2),
    },
    iconRightContainer: {alignSelf: 'flex-end'},
    iconColor: theme.color.primary,
    iconSize: wp(7),
  });
  return styles;
};

const Header = props => {
  const navigation = useNavigation();
  const [saleExpired, setSaleExpired] = useState(true);
  const styles = useThemeAwareObject(createStyles);

  return (
    <BackgroundImage source={{uri: props.banner}} style={styles.backgroudImage}>
      <View style={styles.topIconsRow}>
        <Icon
          onPress={() => navigation.goBack()}
          name="keyboard-backspace"
          size={styles.iconSize}
          color={styles.iconColor}
          containerStyle={styles.iconLeft}
        />

        <View style={styles.iconRightContainer}>
          <Icon
            onPress={() => {
              let message = 'Yam has a lot of sales!';

              const options = {
                title: 'Yam'.toUpperCase(),
                message: message,
                url: 'https://www.google.com',
              };
              Share.open(options)
                .then(res => {
                  console.log(res);
                })
                .catch(err => {
                  err && console.log(err);
                });
            }}
            name="share-variant"
            type="material-community"
            size={styles.iconSize}
            color={styles.iconColor}
            containerStyle={styles.iconRight}
          />
        </View>
      </View>
    </BackgroundImage>
  );
};

export default Header;
