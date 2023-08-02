import React, {useEffect} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {clearUser, userSelector} from '../../redux/slices/user';
import {fetchUserData, unsubscribe} from '../../firebase/tracker/userTracker';
import {useDispatch, useSelector} from 'react-redux';

import Container from '../../components/Container';
import CustomHeader from '../../components/Header';
import Image from '../../components/Image';
import ResponsiveText from '../../components/RText';
import RnButton from '../../components/Button';
import Tiles from './Tiles';
import auth from '@react-native-firebase/auth';
import createStyles from './styles';
import {hp} from '../../utils';
import {useThemeAwareObject} from '../../theme';

function Account({navigation, route, props}) {
  const dispatch = useDispatch();

  const {user, guest} = useSelector(userSelector);

  const styles = useThemeAwareObject(createStyles);

  const getUser = () => {
    fetchUserData(user.uid);
  };

  useEffect(() => {
    if (!guest) {
      getUser();
    }

    return () => {
      unsubscribe();
    };
  }, []);

  const signOutUser = () => {
    auth()
      .signOut()
      .then(() => {
        dispatch(clearUser());
        // SnackBar('success', ' Successfully logged out!');
        navigation.replace('AuthStack', {screen: 'Login'});
      })
      .catch(e => console.log(e, 'err'));
  };

  return (
    <Container>
      <CustomHeader
        rightComponent={
          guest ? null : (
            <TouchableOpacity
              onPress={() => navigation.navigate('EditAccount')}>
              <Image
                source={require('../../assets/renameEdit.png')}
                style={styles.img}
              />
            </TouchableOpacity>
          )
        }
        title={'My Account'}
        size={20}
      />

      {guest ? (
        <View
          style={styles.noLoginContainer}>
          <Image
            style={styles.logoStyle}
            source={require('../../assets/signup.png')}
            resizeMode="contain"
          />
          <ResponsiveText
            style={styles.noLoginText}>
            You have to login first to access all{'\n'} features of this app.
          </ResponsiveText>

          <RnButton
            title={'Sign Up'}
            onPress={() => signOutUser()}
            loading={false}
            disabled={false}
            hideArrow
          />
        </View>
      ) : (
        <>
          <Tiles data={user} />

          <View style={styles.logOutButtonContainer}>
            <RnButton
              title={'Logout'}
              onPress={() => signOutUser()}
              hideArrow
            />
          </View>
        </>
      )}
    </Container>
  );
}

export default Account;
