import React from 'react';
import {ActivityIndicator, StyleSheet, TouchableOpacity} from 'react-native';
import {useThemeAwareObject} from '../theme';
import {hp, wp} from '../utils';
import ResponsiveText from './RText';

const createStyles = theme => {
  const styles = StyleSheet.create({
    buttonView: {
      borderRadius: theme.size.radius.radius3,
      height: hp(7),
      justifyContent: 'center',
      alignItems: 'center',
      width: wp(90),
      flexDirection: 'row',
      alignSelf: 'center',
      marginTop: hp(2),
    },

    buttonText: {
      marginLeft: 0,
      color: theme.color.buttonText,
      textAlign: 'center',
    },

    buttonEnabledColor: {
      backgroundColor: theme.color.buttonBackground,
    },

    buttonDisabledColor: {
      backgroundColor: theme.color.disabled,
    },
  });
  return styles;
};

const RnButton = props => {
  const styles = useThemeAwareObject(createStyles);

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      disabled={props.disabled}
      style={{
        ...styles.buttonView,
        ...props.buttonView,
        ...(props.disabled
          ? styles.buttonDisabledColor
          : styles.buttonEnabledColor),
      }}
      onPress={() => props.onPress()}>
      {props.loading ? (
        <ActivityIndicator size={'small'} color={'white'} />
      ) : (
        <ResponsiveText style={{...styles.buttonText, ...props.textStyle}}>
          {props.title}
        </ResponsiveText>
      )}
    </TouchableOpacity>
  );
};

export default RnButton;
