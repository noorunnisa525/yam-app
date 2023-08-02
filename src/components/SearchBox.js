import React from 'react';
import { StyleSheet, View } from 'react-native';
import SearchIcon from 'react-native-vector-icons/Ionicons';
import { useThemeAwareObject } from '../theme';
import { hp, wp } from '../utils';
import RnTextInput from './TextInput';

const createStyles = theme => {
  const styles = StyleSheet.create({
    container: {
      alignSelf: 'center',
      marginBottom: wp(1),
      backgroundColor: '#fff',
      // height: hp(18),
      width: wp(100),
      paddingHorizontal: wp(2),
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
      color: theme.color.mainText,
      fontFamily: theme.fontWeight.regular,
    },
    searchIconStyle: {
      color: theme.color.divider,
    },
    searchIconSize: hp(3),
  });

  return styles;
};

const SearchBox = props => {
  const styles = useThemeAwareObject(createStyles);

  return (
    <View style={styles.container}>
      <RnTextInput
        placeholder={props.placeholder}
        style={styles.searchBar}
        placeholderTextColor={'black'}
        onChangeText={text => props.setSearchText(text)}
        value={props.value}
        leftIcon={
          <SearchIcon
            name={'search'}
            color={styles.searchIconStyle.color}
            size={styles.searchIconSize}
          />
        }
      />
    </View>
  );
};

export default SearchBox;
