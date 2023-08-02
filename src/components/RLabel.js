import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ResponsiveText from './RText';
import {useThemeAwareObject} from '../theme';
import {hp, wp} from '../utils';

const createStyles = theme => {
  const styles = StyleSheet.create({
    textInputView: {
      flexDirection: 'row',

      height: wp(11),
      alignItems: 'center',
    },

    iconStyle: {
      marginRight: 10,
    },

    placeholderColor: {
      color: theme.color.placeholder,
    },

    textStyle: {
      fontSize: theme.fontSize.medium,
      color: theme.color.placeholder,
      fontFamily: theme.fontWeight.bold,
      marginLeft: 5,
    },

    iconSize: 3,
  });
  return styles;
};

function RNLabel(props) {
  const styles = useThemeAwareObject(createStyles);

  return (
    <View style={[{marginBottom: 5}, props.style]}>
      <ResponsiveText style={styles.textStyle}>{props.label}</ResponsiveText>
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  labelText: {},
});

export default RNLabel;
