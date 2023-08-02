import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import ResponsiveText from '../../components/RText';
import {useThemeAwareObject} from '../../theme';
import {hp, wp} from '../../utils';
import RnButton from '../../components/Button';
import {InAppBrowser} from 'react-native-inappbrowser-reborn';

const createStyles = theme => {
  const styles = StyleSheet.create({
    container: {
      marginTop: hp(4.5),
      marginBottom:hp(1.5)
    },
    logo: {
      marginHorizontal: wp(3),
      height: wp(15),
      width: wp(15),
      borderRadius: hp(1.5),
      borderWidth:wp(0.4),
      borderColor:theme.color.textInputBorder
    },
    innerContainer: {
      // justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: wp(3),
    },
    title: {
      fontSize: theme.fontSize.large,
      fontWeight: theme.fontWeight.semiBold,
      paddingLeft: wp(1.5),
    },
    subtitle: {
      fontWeight: theme.fontWeight.semiBold,
      paddingLeft: wp(1.5),
      color: theme.color.primary,
    },
  });
  return styles;
};

const TopContainer = props => {
  const styles = useThemeAwareObject(createStyles);
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image source={{uri: props.logo}} style={styles.logo} />
        <View>
          <ResponsiveText style={styles.title}>{props.title}</ResponsiveText>
          <ResponsiveText style={styles.subtitle}>
            {props.subTitle}
          </ResponsiveText>
        </View>
      </View>
    </View>
  );
};

export default TopContainer;
