import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {useThemeAwareObject} from '../theme';

const TextField = ({children, style, numberOfLines, onPress}) => {
  const createStyles = theme => {
    const themeStyles = StyleSheet.create({
      textStyle: {
        color: theme.color.textBlack,
        fontFamily: theme.fontWeight.regular,
        fontSize: theme.size.xSmall,
      },
    });
    return themeStyles;
  };
  const styles = useThemeAwareObject(createStyles);
  return (
    <Text
      style={[styles.textStyle, style]}
      numberOfLines={numberOfLines ?? null}
      onPress={onPress}
      allowFontScaling={false}>
      {children}
    </Text>
  );
};

export default TextField;
