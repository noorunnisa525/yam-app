import React from 'react';
import {StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {useThemeAwareObject} from '../theme';
import { hp, wp } from '../utils';

function CustomDropDown(props) {
  const createStyles = theme => {
    const themeStyles = StyleSheet.create({
      dropdownPlaceholderStyle: {
        color: theme.color.mainText,
      },
      style: {
        backgroundColor: theme.color.secondaryText,
        borderColor: theme.color.secondaryText,
        borderRadius:wp(4),
      },
      dropDownContainerStyle: {
        backgroundColor: theme.color.secondaryText,
        borderColor: theme.color.secondaryText,
        borderRadius: wp(4),
        width:wp(92),
        marginTop:-hp(1),
        marginHorizontal:-wp(7.3),
        borderWidth:1,
        zIndex:100,
        borderColor:theme.color.textInputBorder
      },
      dropdownText: {
        fontWeight: theme.fontWeight.normal,
      },
      selectedItemStyle: {
        fontWeight: theme.fontWeight.bold,


      },
    });
    return themeStyles;
  };
  const styles = useThemeAwareObject(createStyles);

  return (
    <DropDownPicker
      onOpen={props.onOpen}
      listMode="SCROLLVIEW"
      mode="BADGE"
      value={props.value}
      items={props.items}
      open={props.open}
      multiple={props.multiple}
      min={props.min}
      max={props.max}
      zIndex={props.zIndex}
      zIndexInverse={props.zIndexInverse}
      containerStyle={[styles.containerStyle, props.containerStyle]}
      placeholder={props.placeholder}
      placeholderStyle={[
        styles.dropdownPlaceholderStyle,
        props.placeholderStyle,
      ]}
      onChangeValue={props.onChangeValue}
      labelStyle={styles.dropdownText}
      style={[styles.style, props.style]}
      dropDownContainerStyle={[
        styles.dropDownContainerStyle,
        props.dropDownContainerStyle,
      ]}
      disabled={props.disabled}
      selectedItemLabelStyle={styles.selectedItemStyle}
      listItemLabelStyle={styles.dropdownText}
      setOpen={props.setOpen}
      setItems={props.setItems}
      setValue={props.setValue}
    />
  );
}

export default CustomDropDown;
