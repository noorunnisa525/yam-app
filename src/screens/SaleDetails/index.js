import { useRoute } from '@react-navigation/native';
import React from 'react';
import { Alert, Linking, Platform, ScrollView, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import { useDispatch } from 'react-redux';
import RnButton from '../../components/Button';
import Container from '../../components/Container';
import ResponsiveText from '../../components/RText';
import { useThemeAwareObject } from '../../theme';
import { wp } from '../../utils';
import Header from './Header';
import createStyles from './styles';
import Tiles from './Tiles';
import TopContainer from './TopContainer';

function SaleDetails({props,navigation}) {
  const route = useRoute();
  const sale = route.params.saleDetails;

  const dispatch = useDispatch();

  const styles = useThemeAwareObject(createStyles);

  const callNumber = phone => {
    console.log('callNumber ----> ', phone);
    let phoneNumber = phone;
    if (Platform.OS !== 'android') {
      phoneNumber = `telprompt:${phone}`;
    } else {
      phoneNumber = `tel:${phone}`;
    }
    Linking.canOpenURL(phoneNumber)
      .then(supported => {
        if (!supported) {
          Alert.alert('Phone number is not available');
        } else {
          return Linking.openURL(phoneNumber);
        }
      })
      .catch(err => console.log(err));
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{flexGrow: 1,backgroundColor:'white'}}>
        <Header banner={sale.banner} />
        <TopContainer
          logo={sale.brand?.logo}
          title={sale.brand?.name}
          subTitle={sale.percentage}
          url={sale.saleURL}
        />
        <View style={styles.titleView}>
          <ResponsiveText style={styles.saleName}>{sale.title}</ResponsiveText>
        </View>
        <Tiles sale={sale} />
     
     <View style={styles.bottomButtonContainer}>
      <TouchableOpacity
          style={styles.phoneButton}  onPress={() => {callNumber(sale.brand?.contactNo)}}>
          <Icon
            name="phone"
            type="feather"
            size={styles.iconSize}
            color={styles.iconColor}
            containerStyle={{paddingRight: wp(1)}}
          />
          <ResponsiveText style={styles.buttonText}>
            {sale.brand?.contactNo}
          </ResponsiveText>
        </TouchableOpacity>

        <RnButton
          title={'Shop Now'}
          buttonView={styles.button}
          onPress={async () => {
            try {
              const url = sale.saleURL;
              if (await InAppBrowser.isAvailable()) {
                const result = await InAppBrowser.open(url, {
                  // iOS Properties
                  dismissButtonStyle: 'cancel',
                  preferredBarTintColor: styles.browserColor,
                  preferredControlTintColor: 'white',
                  readerMode: false,
                  animated: true,
                  modalPresentationStyle: 'fullScreen',
                  modalTransitionStyle: 'coverVertical',
                  modalEnabled: true,
                  enableBarCollapsing: false,
                  // Android Properties
                  showTitle: true,
                  toolbarColor: styles.browserColor,
                  secondaryToolbarColor: 'black',
                  enableUrlBarHiding: true,
                  enableDefaultShare: true,
                  forceCloseOnRedirection: false,

                  // Specify full animation resource identifier(package:anim/name)
                  // or only resource name(in case of animation bundled with app).
                  animations: {
                    startEnter: 'slide_in_right',
                    startExit: 'slide_out_left',
                    endEnter: 'slide_in_left',
                    endExit: 'slide_out_right',
                  },
                  headers: {
                    'my-custom-header': 'my custom header value',
                  },
                });
                // Alert.alert(JSON.stringify(result));
              } else Linking.openURL(url);
            } catch (error) {
              Alert.alert(error.message);
            }
          }}
        />
        </View>
    </ScrollView>

  );
}

export default SaleDetails;
