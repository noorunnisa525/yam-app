import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import {useThemeAwareObject} from '../../theme';
import {hp, wp} from '../../utils';
import ResponsiveText from '../../components/RText';
import {useNavigation} from '@react-navigation/native';

const iconsArray = [
  {
    name: 'tshirt-crew',
    title: 'Clothes',
    type: 'material-community',
    screen: '',
    category: 'Clothing',
  },
  {
    name: 'shoe-heel',
    title: 'Footwear',
    type: 'material-community',
    screen: '',
    category: 'Footwear',
  },
  {
    name: 'food',
    title: 'Food',
    type: 'material-community',
    screen: '',
    category: 'Food',
  },
  {
    name: 'dots-horizontal-circle-outline',
    title: 'More',
    type: 'material-community',
    screen: '',
    category: 'More',
  },
];

const createStyles = theme => {
  const styles = StyleSheet.create({
    container: {
      borderRadius: 2,
      backgroundColor: theme.color.background,
      width: wp(100),
      paddingHorizontal: wp(3),
    },
    searchBar: {
      justifyContent: 'center',
      backgroundColor: theme.color.lightContainer,
      padding: wp(2.5),
      paddingHorizontal: wp(3),
      borderRadius: wp(2),
      margin: wp(2),
      height: hp(6),
    },
    iconContainer: {
      paddingVertical: wp(2.5),
      flexDirection: 'row',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    icon: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    iconWrapper: {
      justifyContent: 'center',
      backgroundColor: theme.color.background,
      flexDirection: 'row',
      borderRadius: wp(10),
      borderColor: theme.color.lightContainer,
      borderWidth: 1.5,
      padding: wp(2),
      alignItems: 'center',
    },
    iconTitle: {
      color: theme.color.divider,
      fontSize: theme.fontSize.small,
      paddingHorizontal: wp(1),
    },
    iconColor: theme.color.icon,
    iconSize: hp(3),
  });

  return styles;
};
const renderIcon = (icon, props) => {
  const navigation = useNavigation();
  const styles = useThemeAwareObject(createStyles);
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Sales', {
          screen: 'Sales',
          params: {name: icon.category},
        })
      }
      style={styles.iconWrapper}>
      <Icon
        name={icon.name}
        type={icon.type}
        size={styles.iconSize}
        color={styles.iconColor}
        style={styles.icon}
      />
      <ResponsiveText style={styles.iconTitle}>{icon.title}</ResponsiveText>
    </TouchableOpacity>
  );
};
const HomeSearchBox = props => {
  const styles = useThemeAwareObject(createStyles);

  return (
    <View style={styles.container}>
      {/* <TouchableOpacity
        style={styles.searchBar}
        onPress={() => {
          // this.props.navigation.navigate('Sales', {
          //   screen: 'sales',
          //   // params: {screenName: 'Home'},
          // });
        }}>
        <ResponsiveText style={{}}>What are you looking for?</ResponsiveText>
      </TouchableOpacity> */}

      <View style={styles.iconContainer}>
        {iconsArray.map(icon => {
          return renderIcon(icon, props);
        })}
      </View>
    </View>
  );
};

export default HomeSearchBox;
