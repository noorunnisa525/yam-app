import * as yup from 'yup';

import { Formik } from 'formik';
import React, { useState } from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../components/Button';
import Container from '../../../components/Container';
import Header from '../../../components/Header';
import Image from '../../../components/Image';
import ResponsiveText from '../../../components/RText';
import SnackBar from '../../../components/SnackBar';
import TextInput from '../../../components/TextInput';
import { sendPasswordReset } from '../../../firebase/api/auth';
import { userSelector } from '../../../redux/slices/user';
import { useThemeAwareObject } from '../../../theme';
import { wp } from '../../../utils';
import createStyles from './styles';

const emailValidation = yup.object().shape({
  email: yup
    .string()
    .email('Email address must be valid')
    .required('Email address is required'),
});

function ForgotPassword({props, navigation}) {
  const styles = useThemeAwareObject(createStyles);
  const dispatch = useDispatch();
  const {isFetching} = useSelector(userSelector);
  const [loading, setLoading] = useState(false);

  const sendCode = async values => {
    setLoading(true);

    sendPasswordReset(values.email).then(response => {
      if (response?.user) {
        SnackBar('success', 'Reset Password Link has been sent to your email!');
        setLoading(false);
        navigation.replace('Login');
      } else {
        setLoading(false);

        SnackBar('failure', response.errorCode);
      }
    });
  };

  return (
    <Container>
      <Header
        leftComponent={
          <TouchableOpacity style={styles.iconContainer}>
             <Icon
              name={'arrow-back'}
              color={'black'}
              size={wp(6)}
              onPress={() => {
                navigation.goBack();
              }}
            />
     
          </TouchableOpacity>
        }
      />
      <ScrollView
        style={styles.root}
        keyboardShouldPersistTaps={'handled'}
        showsVerticalScrollIndicator={false}>
        <View style={styles.innerContainer}>
          <ResponsiveText style={styles.mainHeadingText}>
            Forgot Password?
          </ResponsiveText>
          <ResponsiveText style={styles.semiHeadingText}>
            Please enter the email address associated with{'\n'}your account.
          </ResponsiveText>

          <Formik
            validationSchema={emailValidation}
            initialValues={{email: ''}}
            validateOnChange={true}
            validateOnBlur={true}
            onSubmit={values => sendCode(values)}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
              isValid,
            }) => (
              <>
                <TextInput
                  placeholder={'Email'}
                  style={styles.textStyle}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  keyboardType="email-address"
                  inputStyle={styles.inputStyle}
                  secureTextEntry={false}
                  leftIcon={
                    <Image
                      source={require('../../../assets/Message.png')}
                      style={styles.img}
                    />
                  }
                />

                <ResponsiveText style={styles.errorText}>
                  {errors.email}
                </ResponsiveText>

                <View style={styles.divider} />

                <Button
                  textStyle={{marginLeft: 0}}
                  title={'Send Email'}
                  onPress={handleSubmit}
                  loading={loading}
                  disabled={!isValid}
                  hideArrow
                />
              </>
            )}
          </Formik>
        </View>
      </ScrollView>
    </Container>
  );
}

export default ForgotPassword;
