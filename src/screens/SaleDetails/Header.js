import React, {useState} from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import {BackgroundImage} from 'react-native-elements/dist/config';
import {Icon} from 'react-native-elements';
import {useThemeAwareObject} from '../../theme';
import Share from 'react-native-share';
import {hp, wp} from '../../utils';
import {useNavigation} from '@react-navigation/native';

const createStyles = theme => {
  const styles = StyleSheet.create({
 
    backgroundImageWithMargin: {
      height: hp(30),
      backgroundColor: 'white',
      top: hp(3),
    },
    topIconsRow: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: wp(1),
      position: 'absolute',
      top: hp(2),
      left: wp(2),
      borderRadius: wp(20),
      backgroundColor: 'white',
      margin: wp(1.5),
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
      elevation: 7,
    },
    iconLeft: {
      borderRadius: wp(20),
      margin: wp(1.5),
      backgroundColor: 'white',
    },
    iconRight: {
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
      right: wp(2),
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
      <StatusBar barStyle="dark-content" backgroundColor="white" />

      <BackgroundImage
        resizeMode="cover"
        source={{uri: props.banner}}
        style={[
            styles.backgroundImageWithMargin
            
        ]}>
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

      {/* <Dialog
                    visible={false}
                //  onTouchOutside={() => this.setState({ loginAlert: false })} 
                >
                    <View>

                        <ResponsiveText style={{ color: 'red', fontSize: 16 }}>Hey! You have to login first to start adding brands to you favourites list, to get sale notifications on time.</ResponsiveText>

                        <TouchableOpacity
                            style={{ width: 90, height: 30, backgroundColor: '#fb826f', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', borderRadius: 5, marginTop: 15 }}
                        //   onPress={() => { this.setState({ loginAlert: false }) }}
                        >
                            <ResponsiveText style={{ color: 'white', fontSize: 14 }}>Okay</ResponsiveText>
                        </TouchableOpacity>
                    </View>
                </Dialog> */}
      <View style={styles.iconRightContainer}>
        <Icon
          onPress={() => {
            let message = 'Yam has a lot of sales!';
            // if (sale.flat !== '') {
            //     message = 'Flat ' + sale.flat + '% '
            // }
            // if (sale.flat !== '' && sale.saleUpto !== '') {
            //     message = message + '& '
            // }
            // if (sale.saleUpto !== '') {
            //     message = message + 'Upto ' + sale.saleUpto + '% '
            // }
            // message = (sale.saleTitle).toUpperCase() + ' - ' + message + `off on ${sale.name}. Tap to downlaod app and explore loads of sales.`
            // console.log('sale.saleTitle', sale.saleTitle)
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
        <Icon
          //   onPress={() =>
          //     this.props.auth.guest
          //       ? this.setState({ loginAlert: true })
          //       : this.addBrandToFavourites(brand.id)
          //   }
          name="heart-outline"
          type="material-community"
          size={styles.iconSize}
          color={styles.iconColor}
          containerStyle={styles.iconRight}
        />
      </View>
    </>
  );
};

export default Header;
