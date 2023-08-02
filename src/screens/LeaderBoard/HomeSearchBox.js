import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { useThemeAwareObject } from '../../theme';
import { hp, wp } from '../../utils';
import ResponsiveText from '../../components/RText';

const iconsArray = [{
  name: "tshirt-crew",
  title: "Clothes",
  type: "material-community",
  screen: ""
},
{
  name: "shoe-heel",
  title: "Footwear",
  type: "material-community",
  screen: ""
},
{
  name: "food",
  title: "Food",
  type: "material-community",
  screen: ""
},
{
  name: "more-horiz",
  title: "More",
  type: "material-icon",
  screen: ""
}]

const createStyles = theme => {
  const styles = StyleSheet.create({
    container: {
      borderRadius: 4,
      backgroundColor: theme.color.background,
      height: hp(18),
      width: wp(95.4),
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
      elevation: 7,
      top: hp(-2)
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
      backgroundColor: theme.color.lightContainer,
      height: wp(12),
      width: wp(12),
      borderRadius: wp(12),
    },
    iconWrapper: {
      justifyContent: 'center',
      alignItems: 'center'
    },
    iconTitle: {
      color: theme.color.divider,
      fontSize: theme.fontSize.medium
    },
    iconColor: theme.color.icon,
    iconSize: hp(4),
  });

  return styles;
};

const renderIcon = (icon) => {
  const styles = useThemeAwareObject(createStyles);
  return (
    <TouchableOpacity
      onPress={() => {
        // this.props.navigation.navigate('Category', {name: 'clothes'});
      }}
      style={styles.iconWrapper}
    >
      <Icon
        name={icon.name}
        type={icon.type}
        size={styles.iconSize}
        color={styles.iconColor}
        style={styles.icon}
      />
      <ResponsiveText style={styles.iconTitle}>{icon.title}</ResponsiveText>
    </TouchableOpacity>
  )
}
const Poster = props => {
  const styles = useThemeAwareObject(createStyles);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.searchBar}
        onPress={() => {
          // this.props.navigation.navigate('Sales', {
          //   screen: 'sales',
          //   // params: {screenName: 'Home'},
          // });
        }}>
        <ResponsiveText style={{}}>What are you looking for?</ResponsiveText>
      </TouchableOpacity>

      <View style={styles.iconContainer}>
        {iconsArray.map((icon) => {
          return renderIcon(icon)
        })
        }
      </View>
    </View>
  );
};

export default Poster;
