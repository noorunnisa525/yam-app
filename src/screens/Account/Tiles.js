import {StyleSheet, View} from 'react-native';
import {hp, wp} from '../../utils';

import {Icon} from 'react-native-elements';
import Image from '../../components/Image';
import React from 'react';
import ResponsiveText from '../../components/RText';
import {useThemeAwareObject} from '../../theme';

const createStyles = theme => {
  const styles = StyleSheet.create({
    container: {
      alignSelf: 'center',
      width: wp(90),
      padding: wp(3),
      marginBottom: wp(3),
      borderRadius: 10,
    },
    divider: {
      backgroundColor: theme.color.divider,
      marginVertical: hp(1),
      width: wp(75),
      height: 1,
      alignSelf: 'center',
    },
    title: {
      color: theme.color.mainText,
      fontSize: theme.fontSize.small,
    },
    value: {
      color: theme.color.primary,
      fontSize: theme.fontSize.medium,
      fontWeight: theme.fontWeight.medium,
    },
    blackText: {
      color: theme.color.mainText,
      fontSize: theme.fontSize.medium,
    },
    innerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: hp(2),
      borderRadius: wp(2),
      backgroundColor: '#FCFCFC',
    },
    tileContainer: {
      marginLeft: wp(3),
      padding: wp(2),
    },
    iconSize: wp(5.5),
    iconColor: theme.color.primary,
    img: {
      width: wp(5),
      height: wp(5),
    },
  });
  return styles;
};

const Tile = props => {
  const styles = useThemeAwareObject(createStyles);

  const Divider = () => {
    return <View style={styles.divider} />;
  };

  const Tile = props => {
    return (
      <View style={styles.tileContainer}>
        {props.title && (
          <ResponsiveText style={styles.title}>{props.title}</ResponsiveText>
        )}
        <ResponsiveText style={props.title ? styles.value : styles.blackText}>
          {props.value}
        </ResponsiveText>
      </View>
    );
  };

  const {email, firstName, lastName, mobileNumber, city} = props?.data;

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image
          source={require('../../assets/Profile.png')}
          style={styles.img}
        />
        <Tile title={'Full name'} value={firstName + ' ' + lastName} />
      </View>
      {/* <Divider /> */}

      <View style={styles.innerContainer}>
        <Image
          source={require('../../assets/Message.png')}
          style={styles.img}
        />
        <Tile title={'Email'} value={email} />
      </View>
      {/* <Divider /> */}

      <View style={styles.innerContainer}>
        <Image source={require('../../assets/Phone.png')} style={styles.img} />
        <Tile title={'Phone'} value={mobileNumber} />
      </View>
      {/* <Divider /> */}

      <View style={styles.innerContainer}>
        <Image source={require('../../assets/Vector.png')} style={styles.img} />
        <Tile title={'City'} value={city} />
      </View>
      {/* <Divider /> */}

      <View style={styles.innerContainer}>
        <Image
          source={require('../../assets/notification.png')}
          style={styles.img}
        />
        <Tile title={'Notification'} value={'Every Brand'} />
      </View>
    </View>
  );
};

export default Tile;
