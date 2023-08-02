import * as yup from 'yup';

import React, {useState} from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import {setGuest, setUser, userSelector} from '../../../redux/slices/user';
import {signInAnonymously, signUp} from '../../../firebase/api/auth';
import {useDispatch, useSelector} from 'react-redux';

import Button from '../../../components/Button';
import Cities from '../../../constants/cities.json';
import Container from '../../../components/Container';
import Dropdown from '../../../components/Dropdown';
import {Formik} from 'formik';
import Header from '../../../components/Header';
import Image from '../../../components/Image';
import ResponsiveText from '../../../components/RText';
import SnackBar from '../../../components/SnackBar';
import TextInput from '../../../components/TextInput';
import createStyles from './styles';
import {useThemeAwareObject} from '../../../theme';

const signupValidationSchema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup
    .string()
    .email('Email address must be valid')
    .required('Email address is required'),

  password: yup
    .string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required'),
  // .matches(
  //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
  //   'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character',
  // ),

  confirmPassword: yup
    .string()
    .required('Password confirmation is required')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),

  mobileNumber: yup.string().required('Mobile number is required'),
  city: yup.string().required('City is required'),
});

function Signup(props) {
  const dispatch = useDispatch();
  const {isFetching} = useSelector(userSelector);
  const [dropdownValue, setDropdownValue] = useState('');
  const styles = useThemeAwareObject(createStyles);
  const [loading, setLoading] = useState(false);

  const createUser = async values => {
    setLoading(true);
    signUp(values.email, values.password, values).then(response => {
      if (response?.user) {
        SnackBar('success', 'An Email has been sent to you for verification!');
        setLoading(false);
        props.navigation.replace('Login');
      } else {
        setLoading(false);
        SnackBar('failure', response.errorCode);
      }
    });

    // const response = await dispatch(
    //   registerUser({email: values.email, password: values.password}),
    // ).unwrap();

    // switch (response.code) {
    //   case 'auth/email-already-in-use':
    //     SnackBar('failure', 'Email is already in use');
    //     break;

    //   case 'auth/invalid-email':
    //     SnackBar('failure', 'Invalid Email');
    //     break;

    //   default:
    //     await createUserRecord(response, values, userType);
    //     SnackBar(
    //       'success',
    //       'An Email has been sent to you for verification!',
    //     );
    //     break;
    // }
  };

  const signInUserAnonymously = async () => {
    signInAnonymously().then(() => {
      dispatch(setGuest(true));
      // SnackBar('success', 'Welcome !');
    });
    // const response = await dispatch(loginAnonymous()).unwrap();
    // switch (response.code) {
    //   default:
    //     SnackBar('success', 'Welcome !');
    //     break;
    // }
  };

  return (
    <Container>
      <Header containerStyle={{height: 0}} />

      <ScrollView
        style={styles.root}
        keyboardShouldPersistTaps={'handled'}
        showsVerticalScrollIndicator={false}>
        <View style={styles.innerContainer}>
          <ResponsiveText style={styles.headerText}>
            Let's Sign Up
          </ResponsiveText>
          <ResponsiveText style={styles.subheaderText}>
            Fill in the details to create new account
          </ResponsiveText>
          <Formik
            validationSchema={signupValidationSchema}
            validateOnChange={true}
            validateOnBlur={true}
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              password: '',
              confirmPassword: '',
              mobileNumber: '',
              city: '',
            }}
            onSubmit={values => createUser(values)}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
              isValid,
              setFieldValue,
            }) => (
              <>
                <View>
                  {/* <ResponsiveText>Name</ResponsiveText> */}

                  <View style={styles.nameContainer}>
                    <View style={styles.nameErrorContainer}>
                      <TextInput
                        placeholder={'First Name'}
                        style={styles.textStyleName}
                        onChangeText={handleChange('firstName')}
                        onBlur={handleBlur('firstName')}
                        inputStyle={styles.inputStyle}
                        value={values.firstName}
                        secureTextEntry={false}
                        leftIcon={
                          <Image
                            source={require('../../../assets/Profile.png')}
                            style={styles.img}
                          />
                        }
                      />
                      {errors.firstName && touched.firstName && (
                        <ResponsiveText style={styles.errorText}>
                          {errors.firstName}
                        </ResponsiveText>
                      )}
                    </View>

                    <View style={styles.nameErrorContainer}>
                      <TextInput
                        placeholder={'Last Name'}
                        style={styles.textStyleName}
                        onChangeText={handleChange('lastName')}
                        onBlur={handleBlur('lastName')}
                        inputStyle={styles.inputStyle}
                        value={values.lastName}
                        secureTextEntry={false}
                      />
                      {errors.lastName && touched.lastName && (
                        <ResponsiveText style={styles.errorText}>
                          {errors.lastName}
                        </ResponsiveText>
                      )}
                    </View>
                  </View>
                </View>

                <View>
                  {/* <ResponsiveText>Email</ResponsiveText> */}
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
                </View>

                <View>
                  {/* <ResponsiveText>Password</ResponsiveText> */}
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
                </View>

                <View>
                  {/* <ResponsiveText>Confirm Password</ResponsiveText> */}
                  <TextInput
                    placeholder={'Password'}
                    style={styles.textStyle}
                    hideIcon
                    onChangeText={handleChange('confirmPassword')}
                    onBlur={handleBlur('confirmPassword')}
                    inputStyle={styles.inputStyle}
                    value={values.confirmPassword}
                    secureTextEntry={true}
                    leftIcon={
                      <Image
                        source={require('../../../assets/lock.png')}
                        style={styles.img}
                      />
                    }
                  />
                  {errors.confirmPassword && touched.confirmPassword && (
                    <ResponsiveText style={styles.errorText}>
                      {errors.confirmPassword}
                    </ResponsiveText>
                  )}
                </View>

                <View>
                  {/* <ResponsiveText>Mobile Number</ResponsiveText> */}
                  <TextInput
                    placeholder={'+92 333 1234567'}
                    style={styles.textStyle}
                    keyboardType="number-pad"
                    onChangeText={handleChange('mobileNumber')}
                    onBlur={handleBlur('mobileNumber')}
                    inputStyle={styles.inputStyle}
                    value={values.mobileNumber}
                    leftIcon={
                      <Image
                        source={require('../../../assets/Phone.png')}
                        style={styles.img}
                      />
                    }
                  />
                  {errors.mobileNumber && touched.mobileNumber && (
                    <ResponsiveText style={styles.errorText}>
                      {errors.mobileNumber}
                    </ResponsiveText>
                  )}
                </View>

                <View>
                  {/* <ResponsiveText>City</ResponsiveText> */}
                  <Dropdown
                    placeholder={'Select City'}
                    value={values.city}
                    style={styles.textStyle}
                    data={Cities}
                    onChangeValue={value => {
                      setDropdownValue(value);
                      setFieldValue('city', value);
                    }}
                    showSearchBar={true}
                    leftIcon={
                      <Image
                        source={require('../../../assets/Vector.png')}
                        style={styles.img}
                      />
                    }
                  />
                  {errors.city && touched.city && (
                    <ResponsiveText style={styles.errorText}>
                      {errors.city}
                    </ResponsiveText>
                  )}
                </View>

                <Button
                  title={'Sign Up'}
                  onPress={handleSubmit}
                  loading={loading}
                  disabled={!isValid}
                  hideArrow
                />

                <View style={styles.multiTextContainer}>
                  <ResponsiveText style={styles.multiTextStyle}>
                    Don’t have an account?{' '}
                  </ResponsiveText>
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate('Login')}>
                    <ResponsiveText style={{color: styles.signUpText.color}}>
                      Sign In
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
              </>
            )}
          </Formik>
        </View>
      </ScrollView>
    </Container>
  );
}

export default Signup;
