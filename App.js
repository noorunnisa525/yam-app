import {DEFAULT_LIGHT_THEME, ThemeProvider} from './src/theme';
import {LogBox, SafeAreaView, StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import {persistor, store} from './src/redux/store';

import GlobalFont from 'react-native-global-font';
import OneSignal from 'react-native-onesignal';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import RNBootSplash from 'react-native-bootsplash';
import {ReduxNetworkProvider} from 'react-native-offline';
import Routes from './src/navigation/routes';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {persistStore} from 'redux-persist';

function App() {
  let persistor = persistStore(store);

  useEffect(() => {
    let fontName = 'Inter-Light';
    GlobalFont.applyGlobal(fontName);
  });

  useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide({fade: true});
    }, 2000);
  });
  useEffect(() => {
    //OneSignal Init Code
    OneSignal.setLogLevel(6, 0);
    OneSignal.setAppId('0103a55b-c001-4e1a-be16-ca31aa5bef0b');
    //END OneSignal Init Code

    //Prompt for push on iOS
    OneSignal.promptForPushNotificationsWithUserResponse(response => {});

    //Method for handling notifications received while app in foreground
    OneSignal.setNotificationWillShowInForegroundHandler(
      notificationReceivedEvent => {
        console.log(
          'OneSignal: notification will show in foreground:',
          notificationReceivedEvent,
        );
        let notification = notificationReceivedEvent.getNotification();
        console.log('notification: ', notification);
        const data = notification.additionalData;
        console.log('additionalData: ', data);
        // Complete with null means don't show a notification.
        notificationReceivedEvent.complete(notification);
      },
    );

    //Method for handling notifications opened
    OneSignal.setNotificationOpenedHandler(notification => {
      console.log('OneSignal: notification opened:', notification);
    });

  }, []);

  LogBox.ignoreAllLogs();
  return (
    <Provider store={store}>
      <ReduxNetworkProvider>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider>
            <SafeAreaProvider style={{flex: 1, backgroundColor: 'white'}}>
              <Routes onReady={() => RNBootSplash.hide()} />
            </SafeAreaProvider>
          </ThemeProvider>
        </PersistGate>
      </ReduxNetworkProvider>
    </Provider>
  );
}

export default App;
