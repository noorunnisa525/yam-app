import NetInfo from '@react-native-community/netinfo';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {StyleSheet, useColorScheme, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import Modal from 'react-native-modal';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Text from '../components/RText';
import {fetchBanks} from '../firebase/tracker/bankTracker';
import {fetchDiscounts} from '../firebase/tracker/discountTracker';
import Account from '../screens/Account';
import ForgotPassword from '../screens/Authentication/ForgotPassword';
import Loading from '../screens/Authentication/Loading';
import Login from '../screens/Authentication/Login';
import Signup from '../screens/Authentication/Signup';
import Banks from '../screens/Discounts/Banks';
import Listing from '../screens/Discounts/Listing';
import DiscountDetails from '../screens/Discounts/Listing/DiscountDetails';
import Filters from '../screens/Discounts/Listing/Filters';
import EditAccount from '../screens/EditAccount';
import Favourites from '../screens/Favourites';
import Home from '../screens/Home';
import Onboarding from '../screens/Onboarding';
import SaleDetails from '../screens/SaleDetails';
import Sales from '../screens/Sales';
import {
  DEFAULT_DARK_THEME,
  DEFAULT_LIGHT_THEME,
  useTheme,
  useThemeAwareObject,
} from '../theme';
import {wp} from '../utils';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const createStyles = theme => {
  const styles = StyleSheet.create({
    iconColor: theme.color.primary,
    iconSize: wp(7),
    imgContainer: {
      flex: 0.4,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
    },
    noInternetImg: {width: wp(60), height: wp(50)},
    modalStyle: {justifyContent: 'flex-end', margin: 0},
  });
  return styles;
};

const OnBoardNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'Onboarding'}>
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        navigator={navigator}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        navigator={navigator}
        options={{gestureEnabled: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={Signup}
        navigator={navigator}
        options={{gestureEnabled: false}}
      />

      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        navigator={navigator}
        options={{gestureEnabled: false}}
      />
    </Stack.Navigator>
  );
};

const AuthenticationNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'Loading'}>
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        navigator={navigator}
      />

      <Stack.Screen name="Loading" component={Loading} navigator={navigator} />

      <Stack.Screen
        name="Login"
        component={Login}
        navigator={navigator}
        options={{gestureEnabled: false}}
      />

      <Stack.Screen
        name="SignUp"
        component={Signup}
        navigator={navigator}
        options={{gestureEnabled: false}}
      />

      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        navigator={navigator}
        options={{gestureEnabled: false}}
      />
    </Stack.Navigator>
  );
};

export const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'FeaturedSales'}>
      <Stack.Screen
        name="FeaturedSales"
        component={Home}
        navigator={navigator}
        options={{gestureEnabled: false}}
      />
    </Stack.Navigator>
  );
};

export const DiscountsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'Banks'}>
      <Stack.Screen name="Banks" component={Banks} navigator={navigator} />

      <Stack.Screen name="Listing" component={Listing} navigator={navigator} />

      <Stack.Screen name="Filters" component={Filters} navigator={navigator} />
    </Stack.Navigator>
  );
};

export const SalesStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'Sales'}>
      <Stack.Screen name="Sales" component={Sales} navigator={navigator} />
    </Stack.Navigator>
  );
};
export const AccountStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'Account'}>
      <Stack.Screen
        name="Account"
        component={Account}
        navigator={navigator}
        options={{gestureEnabled: false}}
      />
    </Stack.Navigator>
  );
};
export const FavouritesStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'Favourites'}>
      <Stack.Screen
        name="Favourites"
        component={Favourites}
        navigator={navigator}
        options={{gestureEnabled: false}}
      />
    </Stack.Navigator>
  );
};

const TabNavigator = props => {
  const styles = useThemeAwareObject(createStyles);
  return (
    <Tab.Navigator
      initialRouteName="Home"
      backBehavior="firstRoute"
      screenOptions={({route}) => ({
        tabBarActiveTintColor: styles.iconColor,
        tabBarInactiveTintColor: 'gray',
        tabBarHideOnKeyboard: true,
        headerShown: false,
        unmountOnBlur: true,
      })}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={({route}) => ({
          tabBarIcon: ({focused}) =>
            focused ? (
              <FastImage
                source={require('../assets/ActiveHome.png')}
                style={{width: wp(5), height: wp(5)}}
                resizeMode={FastImage.resizeMode.contain}
              />
            ) : (
              <FastImage
                source={require('../../src/assets/Home.png')}
                style={{width: wp(5), height: wp(5)}}
                resizeMode="contain"
              />
            ),
        })}
      />
      <Tab.Screen
        name="Sales"
        component={SalesStack}
        options={({route}) => ({
          tabBarIcon: ({focused}) =>
            focused ? (
              <FastImage
                source={require('../../src/assets/ActiveSale.png')}
                style={{width: wp(5), height: wp(5)}}
                resizeMode="contain"
              />
            ) : (
              <FastImage
                source={require('../../src/assets/Sale.png')}
                style={{width: wp(5), height: wp(5)}}
                resizeMode="contain"
              />
            ),
        })}
      />
      <Tab.Screen
        name="Discounts"
        component={DiscountsStack}
        options={({route}) => ({
          tabBarIcon: ({focused}) =>
            focused ? (
              <FastImage
                source={require('../../src/assets/ActiveDiscount.png')}
                style={{width: wp(5), height: wp(5)}}
                resizeMode="contain"
              />
            ) : (
              <FastImage
                source={require('../../src/assets/Discount.png')}
                style={{width: wp(5), height: wp(5)}}
                resizeMode="contain"
              />
            ),
        })}
      />
      <Tab.Screen
        name="Favourites"
        component={FavouritesStack}
        options={({route}) => ({
          tabBarIcon: ({focused}) =>
            focused ? (
              <FastImage
                source={require('../../src/assets/ActiveHeart.png')}
                style={{width: wp(5), height: wp(5)}}
                resizeMode="contain"
              />
            ) : (
              <FastImage
                source={require('../../src/assets/Favorite.png')}
                style={{width: wp(5), height: wp(5)}}
                resizeMode="contain"
              />
            ),
        })}
      />
      <Tab.Screen
        name="Account"
        component={AccountStack}
        options={({route}) => ({
          tabBarIcon: ({focused}) =>
            focused ? (
              <FastImage
                source={require('../../src/assets/UserActive.png')}
                style={{width: wp(5), height: wp(5)}}
                resizeMode="contain"
              />
            ) : (
              <FastImage
                source={require('../../src/assets/Account.png')}
                style={{width: wp(5), height: wp(5)}}
                resizeMode="contain"
              />
            ),
        })}
      />
    </Tab.Navigator>
  );
};

export const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Tabs"
        component={TabNavigator}
        navigator={navigator}
      />

      <Stack.Screen
        name="EditAccount"
        component={EditAccount}
        navigator={navigator}
      />
      <Stack.Screen
        name="DiscountDetails"
        component={DiscountDetails}
        navigator={navigator}
      />

      <Stack.Screen
        name="SaleDetails"
        component={SaleDetails}
        navigator={navigator}
      />
    </Stack.Navigator>
  );
};

export default function Routes(props) {
  const [bottomSheet, setBottomSheet] = useState(false);
  const styles = useThemeAwareObject(createStyles);
  const colorScheme = useColorScheme();
  let {setTheme} = useTheme();

  // const fetchIsOnboard = async () => {
  //   const onboarding = await AsyncStorage.getItem('Onboarding');
  //   setIsOnBoard(onboarding);
  // };

  // useEffect(() => {
  //   fetchIsOnboard();
  // }, []);

  // function onAuthStateChanged(user) {
  //   setUser(user);
  //   fetchIsOnboard();
  //   if (!guest && user) {
  //     fetchUserData();
  //   }

  //   if (initializing) setInitializing(false);
  // }

  // useEffect(() => {
  //   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  //   return subscriber;
  // }, []);

  useEffect(() => {
    if (colorScheme == 'dark') {
      setTheme(DEFAULT_DARK_THEME);
    } else {
      setTheme(DEFAULT_LIGHT_THEME);
    }
  }, [colorScheme]);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      if (state.isConnected) {
        // fetchCarouselItems();
        // fetchFeaturedItems();
        fetchBanks();
        fetchDiscounts();
        setBottomSheet(false);
      } else {
        setBottomSheet(true);
      }
    });

    return () => {
      unsubscribe;
    };
  }, []);

  return (
    <NavigationContainer onReady={props.onReady}>
      <SafeAreaProvider>
        {/* {isOnBoard == 'true' || isOnBoard == null ? (
          <OnBoardNavigator />
        ) : userData?.email || guest ? (
          <TabNavigator props={props} />
        ) : (
          <AuthenticationNavigator />
        )} */}

        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen
            name="AuthStack"
            component={AuthenticationNavigator}
            navigator={navigator}
            options={{gestureEnabled: false}}
          />

          <Stack.Screen
            name="MainStack"
            component={MainNavigator}
            navigator={navigator}
            options={{gestureEnabled: false}}
          />
        </Stack.Navigator>

        {bottomSheet && (
          <Modal isVisible={bottomSheet} style={styles.modalStyle}>
            <View style={styles.imgContainer}>
              <FastImage
                source={require('../assets/internet.png')}
                style={styles.noInternetImg}
                resizeMode="contain"
              />
              <Text style={{color: styles.iconColor}}>
                No internet connection!
              </Text>
            </View>
          </Modal>
        )}
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
