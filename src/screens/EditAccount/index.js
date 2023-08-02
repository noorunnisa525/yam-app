import * as yup from 'yup';

import {Formik} from 'formik';
import React, {useState} from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import {Icon} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import Button from '../../components/Button';
import Container from '../../components/Container';
import CustomDropDown from '../../components/CustomDropdown';
import Dropdown from '../../components/Dropdown';
import CustomHeader from '../../components/Header';
import Image from '../../components/Image';
import ResponsiveText from '../../components/RText';
import SnackBar from '../../components/SnackBar';
import TextInput from '../../components/TextInput';
import Cities from '../../constants/cities.json';
import {signInAnonymously, signUp} from '../../firebase/api/auth';
import {setGuest, userSelector} from '../../redux/slices/user';
import {useThemeAwareObject} from '../../theme';
import {hp, wp} from '../../utils';
import createStyles from './styles';

const signupValidationSchema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup
    .string()
    .email('Please enter valid email')
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
  notification: yup.string().required('Notification is required'),
});

function EditAccount({props, navigation}) {
  const dispatch = useDispatch();
  const [dropdownValue, setDropdownValue] = useState('');
  const styles = useThemeAwareObject(createStyles);
  const [loading, setLoading] = useState(false);
  const {user, guest} = useSelector(userSelector);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState();
  const [items, setItems] = useState([
    {label: 'Every brand', value: 'Every brand'},
    {label: 'Favorite Brands', value: 'Favorite Brands'},
    {label: 'None', value: 'None'},
  ]);
  const createUser = async values => {
    signUp(values.email, values.password, values).then(response => {
      if (response?.user) {
        const user = response;
        //  props.setUserData(user);
        SnackBar('success', 'Your account has been successfully created!');
        setLoading(false);

        // props.navigation.navigate('MainStack', {user: user});
      } else {
        setLoading(false);

        SnackBar('failure', response.errorCode);
      }
    });
  };

  const signInUserAnonymously = async () => {
    signInAnonymously().then(() => {
      dispatch(setGuest(true));
      // SnackBar('success', 'Welcome !');
    });
  };
  return (
    <Container>
      <CustomHeader
        leftComponent={
          <TouchableOpacity style={styles.iconContainer}>
            <Icon
              onPress={() => navigation.goBack()}
              name="chevron-left"
              type="feather"
              size={styles.iconSize}
              color={'black'}
              containerStyle={styles.iconLeft}
            />
          </TouchableOpacity>
        }
        title={'Edit Account'}
        size={20}
      />

      <ScrollView
        style={styles.root}
        keyboardShouldPersistTaps={'handled'}
        showsVerticalScrollIndicator={false}>
        <View style={styles.innerContainer}>
          <Formik
            validationSchema={signupValidationSchema}
            validateOnChange={false}
            validateOnBlur={false}
            initialValues={{
              firstName: user?.firstName,
              lastName: user.lastName,
              email: user.email,

              mobileNumber: user?.mobileNumber,
              city: user?.city,
              notification: '',
            }}
            onSubmit={values => {
              //  navigation.navigate('Account')
            }}>
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
                            source={require('../../assets/Profile.png')}
                            style={styles.img}
                          />
                        }
                      />

                      <ResponsiveText style={styles.errorText}>
                        {errors.firstName}
                      </ResponsiveText>
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

                      <ResponsiveText style={styles.errorText}>
                        {errors.lastName}
                      </ResponsiveText>
                    </View>
                  </View>
                </View>

                <View>
                  <TextInput
                    placeholder={'Email'}
                    style={styles.textStyle}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    inputStyle={styles.inputStyle}
                    editable={false}
                    value={values.email}
                    keyboardType="email-address"
                    secureTextEntry={false}
                    leftIcon={
                      <Image
                        source={require('../../assets/Message.png')}
                        style={styles.img}
                      />
                    }
                  />

                  <ResponsiveText style={styles.errorText}>
                    {errors.email}
                  </ResponsiveText>
                </View>

                <View>
                  <TextInput
                    placeholder={'+92 333 1234567'}
                    style={styles.textStyle}
                    keyboardType="number-pad"
                    onChangeText={handleChange('mobileNumber')}
                    onBlur={handleBlur('mobileNumber')}
                    // editable={false}
                    inputStyle={styles.inputStyle}
                    value={values.mobileNumber}
                    leftIcon={
                      <Image
                        source={require('../../assets/Phone.png')}
                        style={styles.img}
                      />
                    }
                  />

                  <ResponsiveText style={styles.errorText}>
                    {errors.mobileNumber}
                  </ResponsiveText>
                </View>

                <View>
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
                        source={require('../../assets/Vector.png')}
                        style={styles.img}
                      />
                    }
                    rightIcon={
                      <Icon
                        name="chevron-down"
                        type="evilicon"
                        color="black"
                        size={wp(8.5)}
                      />
                    }
                  />

                  <ResponsiveText style={styles.errorText}>
                    {errors.city}
                  </ResponsiveText>
                </View>
                <View>
                  <View style={styles.dropdownContainerStyle}>
                    <Image
                      source={require('../../assets/notification.png')}
                      style={styles.img}
                    />
                    <CustomDropDown
                      value={value}
                      setValue={setValue}
                      style={styles.dropdownStyle}
                      open={open}
                      setOpen={setOpen}
                      zIndex={10}
                      zIndexReverse={10}
                      items={items}
                      setItems={setItems}
                      placeholder={'Notifications'}
                    />
                  </View>
                  {/* <ResponsiveText>Mobile Number</ResponsiveText> */}
                  {/*                 
                  <ResponsiveText style={styles.errorText}>
                    {errors.notification}
                  </ResponsiveText> */}
                </View>

                <Button
                  onPress={handleSubmit}
                  loading={false}
                  hideArrow
                  title={'Save'}
                  disabled={false}
                  buttonView={{marginTop: hp(23)}}
                />
              </>
            )}
          </Formik>
        </View>
      </ScrollView>
    </Container>
  );
}

export default EditAccount;
