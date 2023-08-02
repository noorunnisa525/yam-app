import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {useThemeAwareObject} from '../theme';
import {hp, wp} from '../utils';

const createStyles = theme => {
  const styles = StyleSheet.create({
    text: {
      fontFamily: theme.fontFamily.system,
      color: theme.color.mainText,
    },
  });
  return styles;
};

const ResponsiveText = props => {
  const styles = useThemeAwareObject(createStyles);

  let fontSize = wp(4);
  const {style, children} = props;
  if (style && style.fontSize) {
    fontSize = wp(style.fontSize);
  }
  return (
    <Text
      {...props}
      style={[styles.text, style, {fontSize}]}
      allowFontScaling={false}
      adjustsFontSizeToFit>
      {children}
    </Text>
  );
};

export default ResponsiveText;
