import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import React, {useRef} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import {useDispatch} from 'react-redux';
import Header from '../../components/Header';
import ResponsiveText from '../../components/RText';
import {useThemeAwareObject} from '../../theme';
import createStyles from './styles';

function OnboardingScreen(props) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const styles = useThemeAwareObject(createStyles);
  const onboardingRef = useRef();

  const ImageView = imageName => {
    return (
      <View style={styles.imageView}>
        {imageName == 1 && (
          <Image
            style={styles.image}
            resizeMode="contain"
            source={require('../../assets/onboarding1.png')}
          />
        )}
        {imageName == 2 && (
          <Image
            style={styles.image}
            resizeMode="contain"
            source={require('../../assets/onboarding2.png')}
          />
        )}
        {imageName == 3 && (
          <Image
            style={styles.image}
            resizeMode="contain"
            source={require('../../assets/onboarding3.png')}
          />
        )}
      </View>
    );
  };
  const setIsOnboard = async () => {
    await AsyncStorage.setItem('Onboarding', 'false');
  };

  return (
    <>
      <Header
        containerStyle={{height: 0}}
        statusBarProps={{
          barStyle: 'dark-content',
          translucent: true,
          backgroundColor: styles.backgroundColor,
        }}
      />
      <Onboarding
        pages={[
          {
            backgroundColor: styles.backgroundColor,
            image: ImageView(1),
            title: '',
            subtitle:
              'Be the first one to get the news about latest sales and grab your favorite items before they run out of stock.',
          },
          {
            backgroundColor: styles.backgroundColor,
            image: ImageView(2),
            title: '',
            subtitle:
              'Mark brands as favorite and get a notification about latest sales & never miss a sale on your favorite brand again.',
          },
          {
            backgroundColor: styles.backgroundColor,
            image: ImageView(3),
            title: '',
            subtitle:
              'Find loads of exciting offers and discounts you can avail on your credit or debit card.',
          },
        ]}
        ref={onboardingRef}
        onSkip={() => {
          setIsOnboard();
          navigation.replace('Login');
        }}
        bottomBarColor={styles.backgroundColor}
        allowFontScaling={false}
        bottomBarHeight={70}
        DoneButtonComponent={() => {
          return (
            <TouchableOpacity
              style={styles.nextBtn}
              onPress={() => {
                setIsOnboard();
                navigation.replace('Login');
              }}>
              <ResponsiveText style={styles.nextText}>Done </ResponsiveText>
            </TouchableOpacity>
          );
        }}
        NextButtonComponent={() => {
          return (
            <TouchableOpacity
              style={styles.nextBtn}
              onPress={() => onboardingRef.current.goNext()}>
              <ResponsiveText style={styles.nextText}>Next </ResponsiveText>
            </TouchableOpacity>
          );
        }}
      />
    </>
  );
}

export default OnboardingScreen;
