import * as yup from 'yup';

import React, {useEffect, useState} from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import {setGuest, setUser, userSelector} from '../../../redux/slices/user';
import {signIn, signInAnonymously} from '../../../firebase/api/auth';
import {useDispatch, useSelector} from 'react-redux';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from '../../../components/Button';
import Container from '../../../components/Container';
import CustomHeader from '../../../components/Header';
import {Formik} from 'formik';
import Image from '../../../components/Image';
import ResponsiveText from '../../../components/RText';
import SnackBar from '../../../components/SnackBar';
import TextInput from '../../../components/TextInput';
import createStyles from './styles';
import {useFocusEffect} from '@react-navigation/native';
import {useRef} from 'react';
import {useThemeAwareObject} from '../../../theme';

const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Email address must be valid')
    .required('Email address is required'),
  password: yup
    .string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required'),
});

function Login({props, navigation}) {
  const dispatch = useDispatch();
  const {isFetching} = useSelector(userSelector);
  const styles = useThemeAwareObject(createStyles);
  const [loading, setLoading] = useState(false);
  const formikRef = React.createRef();
  const signInUserAnonymously = async () => {
    signInAnonymously().then(() => {
      dispatch(setGuest(true));
      SnackBar('success', 'Welcome !');
      navigation.navigate('MainStack');
    });
  };

  const signInUser = async values => {
    setLoading(true);

    signIn(values.email, values.password).then(response => {
      if (response?.user) {
        dispatch(setUser(response?.user));
        dispatch(setGuest(false));
        SnackBar('success', 'Successfully Logged in !');
        setLoading(false);
        navigation.navigate('MainStack');
      } else {
        setLoading(false);
        SnackBar('failure', response.errorCode);
      }
    });
  };
useEffect(()=>{if (formikRef.current) {
  formikRef.current?.resetForm();
}},[]);

  return (
    <Container>
      <CustomHeader containerStyle={{height: 0}} />

      <ScrollView
        style={styles.root}
        keyboardShouldPersistTaps={'handled'}
        showsVerticalScrollIndicator={false}>
        <View style={styles.innerContainer}>
          <ResponsiveText style={styles.headerText}>
            Let's sign you in
          </ResponsiveText>
          <ResponsiveText style={styles.subheaderText}>
            Login with your account to continue
          </ResponsiveText>
          <Formik
            innerRef={formikRef}
            validationSchema={loginValidationSchema}
            validateOnChange={true}
            validateOnBlur={true}
            initialValues={{
              email: '',
              password: '',
            }}
            onSubmit={values => signInUser(values)}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
              isValid,
            }) => (
              <View>
                <TextInput
                  placeholder={'Email'}
                  style={styles.textStyle}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  inputStyle={styles.inputStyle}
                  value={values.email}
                  keyboardType="email-address"
                  secureTextEntry={false}
                  leftIcon={
                    <Image
                      source={require('../../../assets/Message.png')}
                      style={styles.img}
                    />
                  }
                />
                {errors.email && touched.email && (
                  <ResponsiveText style={styles.errorText}>
                    {errors.email}
                  </ResponsiveText>
                )}
                <TextInput
                  placeholder={'Password'}
                  style={styles.textStyle}
                  hideIcon
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  inputStyle={styles.inputStyle}
                  value={values.password}
                  secureTextEntry={true}
                  leftIcon={
                    <Image
                      source={require('../../../assets/lock.png')}
                      style={styles.img}
                    />
                  }
                />
                {errors.password && touched.password && (
                  <ResponsiveText style={styles.errorText}>
                    {errors.password}
                  </ResponsiveText>
                )}

                <TouchableOpacity
                  style={styles.forgetPassContainer}
                  onPress={() => {
                    navigation.navigate('ForgotPassword');

                  }}>
                  <ResponsiveText style={styles.forgetPassText}>
                    Forgot password?
                  </ResponsiveText>
                </TouchableOpacity>

                <Button
                  title={'Sign In'}
                  onPress={handleSubmit}
                  loading={loading}
                  disabled={!isValid}
                  hideArrow
                />

                <View style={styles.multiTextContainer}>
                  <ResponsiveText style={styles.multiTextStyle}>
                    Already have an account?{' '}
                  </ResponsiveText>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('SignUp');
                    }}>
                    <ResponsiveText style={{color: styles.signUpText.color}}>
                      Sign Up
                    </ResponsiveText>
                  </TouchableOpacity>
                </View>

                <TouchableOpacity
                  style={styles.multiTextContainer}
                  onPress={() => signInUserAnonymously()}>
                  <ResponsiveText style={styles.signUpText}>
                    Proceed as Guest
                  </ResponsiveText>
                </TouchableOpacity>
              </View>
            )}
          </Formik>
        </View>
      </ScrollView>
    </Container>
  );
}

export default Login;
