import {hp, wp} from '../utils';

import {Header} from 'react-native-elements';
import React from 'react';
import {StyleSheet} from 'react-native';
import {useThemeAwareObject} from '../theme';

const createStyles = theme => {
  const styles = StyleSheet.create({
    headerColor: {
      backgroundColor: '#fff',
    },

    headerSize: {
      fontSize: hp(theme.fontSize.normal),
    },

    headerText: {
      fontWeight: theme.fontWeight.black,
    },

    leftStyle: {
      marginLeft: wp(0.5),
      marginTop: hp(0.5),
    },

    rightStyle: {
      marginRight: wp(0.5),
      marginTop: hp(0.5),
    },
    titleColor: theme.color.mainText,
  });
  return styles;
};

function CustomHeader(props) {
  const styles = useThemeAwareObject(createStyles);

  const {title, size} = props;

  return (
    <Header
      statusBarProps={{
        barStyle: 'dark-content',
        translucent: true,
        backgroundColor: '#fff',
      }}
      leftComponent={props.leftComponent}
      leftContainerStyle={[props.leftContainerStyle, styles.leftStyle]}
      barStyle="light-content"
      centerComponent={{
        text: title,
        style: {
          color: styles.titleColor,
          fontSize: size ? size : styles.headerSize.fontSize,
          fontWeight: styles.headerText.fontWeight,
        },
      }}
      rightContainerStyle={[props.rightContainerStyle, styles.rightStyle]}
      rightComponent={props.rightComponent}
      containerStyle={{
        backgroundColor: styles.headerColor.backgroundColor,
        justifyContent: 'space-around',
        borderBottomWidth: 0,
        // marginTop: hp(4),
        marginLeft: wp(2),
        // marginBottom: hp(1),
        alignItems: 'center',
        // paddingTop: 0,
      }}
      {...props}
    />
  );
}

export default CustomHeader;
