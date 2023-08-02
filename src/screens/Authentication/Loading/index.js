import {ActivityIndicator, Animated, Easing, Image, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Container from '../../../components/Container';
import Header from '../../../components/Header';
import createStyles from './styles';
import {useSelector} from 'react-redux';
import {useThemeAwareObject} from '../../../theme';
import {userSelector} from '../../../redux/slices/user';

function Loading(props) {
  const styles = useThemeAwareObject(createStyles);
  const ref = React.useRef(null);
  const animatedValue = React.useRef(new Animated.Value(0)).current;
  const [yPos, setYPos] = React.useState(null);
  const {user} = useSelector(userSelector);
  const [loading, setLoading] = useState(false);

  const startAnimation = () => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 1000,
      delay: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };

  const fetchProduct = React.useCallback(() => {
    ref.current.measure((x, y, w, h, xAbs, yAbs) => console.log(yAbs, 'asad'));
    startAnimation();
  }, []);

  const measuredRef = React.useCallback(node => {
    if (node !== null) {
      setYPos(node.getBoundingClientRect().height);
    }
  }, []);

  const checkAuthStatus = async () => {
    const isOnBoard = await AsyncStorage.getItem('Onboarding');
    if (isOnBoard == null) {
      props.navigation.replace('AuthStack', {screen: 'OnBoarding'});
      setLoading(false);
    } else {
      setTimeout(() => {
        console.log(user, 'USER');
        setLoading(true);
        if (Object.keys(user).length !== 0) {
          props.navigation.navigate('MainStack');

          setLoading(false);
        } else {
          props.navigation.replace('AuthStack', {screen: 'Login'});
          setLoading(false);
        }
      }, 1000);
    }
  };

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const translateY = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [yPos, 1],
  });

  return (
    <Container>
      <Header />

      <View style={styles.root}>
        {/* <Image style={styles.imageContainer} source={logo} /> */}

        <ActivityIndicator size={'large'} color={styles.activityStyle.color} />
      </View>
    </Container>
  );
}

export default Loading;
