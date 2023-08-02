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
      marginTop: hp(3),
    },
    topIconsRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: wp(1),
      marginTop: hp(0.5),
    },
    iconLeft: {
      margin: wp(1.5),

      backgroundColor: 'white',
      borderRadius: wp(20),
      padding: wp(1),
      position: 'absolute',
      top: hp(2),
      left: wp(2),
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
      elevation: 7,
    },
    iconRight: {
      // margin: wp(1.5),

      backgroundColor: 'white',
      borderRadius: wp(20),
      padding: wp(1),
      right: wp(10),
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
      elevation: 7,
    },
    iconShare: {
      backgroundColor: 'white',
      borderRadius: wp(20),
      padding: wp(1),

      right: wp(15),
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
      elevation: 7,
    },
    iconRightContainer: {
      width: wp(10),
      height: hp(5),
      flexDirection: 'row',
      alignItems: 'center',
      position: 'absolute',
      top: hp(31),
      right: -wp(10),
      zIndex: 10,
    },
    iconColor: theme.color.mainText,
    iconSize: wp(7),
  });
  return styles;
};

const Header = props => {
  const navigation = useNavigation();
  const [saleExpired, setSaleExpired] = useState(true);
  const styles = useThemeAwareObject(createStyles);

  return (
    <>
      <BackgroundImage
        source={{uri: props.banner}}
        style={styles.backgroudImage}>
        <View style={styles.topIconsRow}>
          <Icon
            onPress={() => navigation.goBack()}
            name="chevron-left"
            type="feather"
            size={styles.iconSize}
            color={styles.iconColor}
            containerStyle={styles.iconLeft}
          />
        </View>
      </BackgroundImage>
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
          containerStyle={styles.iconShare}
        />
      </View>
    </>
  );
};

export default Header;
