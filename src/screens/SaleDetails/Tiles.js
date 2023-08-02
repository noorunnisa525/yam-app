import React from 'react';
import {StyleSheet, View} from 'react-native';
import ResponsiveText from '../../components/RText';
import {useThemeAwareObject} from '../../theme';
import {hp, wp} from '../../utils';
import moment from 'moment';
import {Icon} from 'react-native-elements';

const createStyles = theme => {
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      alignSelf: 'center',
      backgroundColor: theme.color.background,
      width: wp(90),
      padding: wp(3),
      marginBottom: wp(3),
      borderRadius: 10,
    },
    divider: {
      backgroundColor: theme.color.divider,
      marginVertical: hp(1),
      width: wp(85),
      height: hp(0.05),
      alignSelf: 'center',
    },
    title: {
      color: theme.color.icon,
    },
    value: {
      color: theme.color.mainText,
      fontSize: theme.fontSize.medium,
      marginBottom: wp(2),
      color:'#C1C3C9'
    },
    iconColor: theme.color.icon,
    iconSize: wp(5),
  });
  return styles;
};

const Tile = props => {
  let sale = props.sale;
  const styles = useThemeAwareObject(createStyles);

  const Divider = () => {
    return <View style={styles.divider} />;
  };

  const Tile = props => {
    return (
      <>
      <View style={{flexDirection:'row'}}>
     { props.icon}
        <ResponsiveText style={styles.title}>{props.title}</ResponsiveText>
        </View>
        <ResponsiveText style={styles.value}>{props.value}</ResponsiveText>
      </>
    );
  };

  return (
    <View style={styles.container}>
      <Tile
        title={'Starting From'}
        value={moment(sale.startDate).format('dddd, Do MMMM YYYY')}
      />
      <Divider />

      {sale.endDate != '' ? (
        <>
          <Tile
            title={'Valid Till'}
            value={moment(sale.endDate).format('dddd, Do MMMM YYYY')}
          />
          <Divider />
        </>
      ) : null}

      <Tile title={'Location'} value={sale.location} />
      <Divider />
     
    </View>
  );
};

export default Tile;
