import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {hp, wp} from '../../utils';

import {Icon} from 'react-native-elements';
import React from 'react';
import ResponsiveText from '../../components/RText';
import RnTextInput from '../../components/TextInput';
import {useThemeAwareObject} from '../../theme';
import SearchIcon from 'react-native-vector-icons/Ionicons';

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
      borderRadius: 4,
      marginBottom: wp(1),
      backgroundColor: theme.color.background,
      width: wp(95.4),
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
    inputStyle: {
      fontFamily: theme.fontWeight.regular,
    },
    iconContainer: {
      paddingVertical: wp(2.5),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    icon: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    selectedIcon: {
      justifyContent: 'center',
      alignItems: 'center',
      // backgroundColor: theme.color.primary,
    },
    selectedWrapper: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      padding: wp(2),
      borderRadius: wp(10),
      // borderColor: theme.color.lightContainer,
      // borderWidth: wp(0.5),
      backgroundColor: theme.color.icon,
    },
    iconTitle: {
      color: theme.color.divider,
      fontSize: theme.fontSize.small,
      paddingHorizontal: wp(1),
    },
    selectedIconTitle: {
      color: theme.color.background,
      fontSize: theme.fontSize.small,
      paddingHorizontal: wp(1),
    },
    searchIconStyle: {
      color: theme.color.divider,
    },
    iconWrapper: {
      justifyContent: 'center',
      backgroundColor: theme.color.background,
      flexDirection: 'row',
      borderRadius: wp(10),
      // borderColor: theme.color.lightContainer,
      // borderWidth: wp(0.5),
      padding: wp(4),
      alignItems: 'center',
    },
    searchIconSize: hp(3),

    iconColor: theme.color.icon,
    whiteColor: theme.color.background,
    iconSize: hp(3),
  });

  return styles;
};

const renderIcon = (icon, category, onSelectCategory) => {
  const styles = useThemeAwareObject(createStyles);
  return (
    <>
      {category == icon.category ? (
        <TouchableOpacity
          onPress={() => {
            onSelectCategory(category);
          }}
          style={styles.selectedWrapper}>
          <Icon
            name={icon.name}
            type={icon.type}
            size={styles.iconSize}
            color={styles.whiteColor}
            style={styles.selectedIcon}
          />
          <ResponsiveText style={styles.selectedIconTitle}>
            {icon.title}
          </ResponsiveText>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => {
            onSelectCategory(icon.category);
          }}
          style={styles.iconWrapper}>
          {/* <Icon
            name={icon.name}
            type={icon.type}
            size={styles.iconSize}
            color={styles.iconColor}
            style={styles.icon}
          /> */}
          <ResponsiveText style={styles.iconTitle}>{icon.title}</ResponsiveText>
        </TouchableOpacity>
      )}
    </>
  );
};
const Poster = props => {
  const styles = useThemeAwareObject(createStyles);

  return (
    <View style={styles.container}>
      <RnTextInput
        placeholder={'Which brand are you looking for?'}
        style={styles.searchBar}
        onChangeText={text => props.setSearchText(text)}
        leftIcon={
          <SearchIcon
            name={'search'}
            color={styles.searchIconStyle.color}
            size={styles.searchIconSize}
          />
        }
      />

      <View style={styles.iconContainer}>
        {iconsArray.map(icon => {
          return renderIcon(icon, props?.category, props?.onSelectCategory);
        })}
      </View>
    </View>
  );
};

export default Poster;
