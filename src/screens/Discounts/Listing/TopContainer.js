import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import ResponsiveText from '../../../components/RText';
import {useThemeAwareObject} from '../../../theme';
import {hp, wp} from '../../../utils';

const createStyles = theme => {
  const styles = StyleSheet.create({
    container: {
      margin: wp(2),
      marginTop: wp(2),
      backgroundColor: theme.color.background,
      flexDirection: 'row',
      alignItems: 'center',
    },
    logo: {
      marginRight: wp(2.5),
      height: wp(15),
      width: wp(15),
      borderRadius: hp(1.5),
      borderWidth:wp(0.4),
      borderColor:theme.color.textInputBorder
    },
    innerContainer: {
      justifyContent: 'flex-start',
    },
    title: {
      fontSize: theme.fontSize.large,
      fontWeight: theme.fontWeight.semiBold,
      color: theme.color.mainText,
    },
    subTitle: {
      fontSize: theme.fontSize.large,
      color: theme.color.primary,
    },
  });
  return styles;
};

const TopContainer = props => {
  const styles = useThemeAwareObject(createStyles);
  return (
    <View style={styles.container}>
      <Image source={{uri: props.logo}} style={styles.logo} />
      <View style={styles.innerContainer}>
        <ResponsiveText style={styles.title}>{props.title}</ResponsiveText>
      </View>
    </View>
  );
};

export default TopContainer;
