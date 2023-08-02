import {SafeAreaView, StyleSheet, View} from 'react-native';

import React from 'react';
import {useThemeAwareObject} from '../theme';

const createStyles = theme => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      // justifyContent: 'center',
      alignItems: 'center',
    },
  });
  return styles;
};

function Container(props) {
  const styles = useThemeAwareObject(createStyles);

  return (
    <View style={[props.style, styles.container]}>{props.children}</View>
  );
}

export default Container;
