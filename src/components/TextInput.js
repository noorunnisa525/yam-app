import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {hp, wp} from '../utils';

import {Icon} from 'react-native-elements';
import {useThemeAwareObject} from '../theme';

const createStyles = theme => {
  const styles = StyleSheet.create({
    textInputView: {
      flexDirection: 'row',

      height: wp(11),
      alignItems: 'center',
    },

    iconStyle: {
      marginRight: wp(3),
    },

    iconColor: theme.color.icon,

    placeholderColor: {
      color: theme.color.mainText,
    },

    textSize: {
      fontSize: hp(theme.fontSize.small - 1),
    },
    img: {
      width: wp(5),
      height: wp(5),
    },
    iconSize: 3,
  });
  return styles;
};

const RnTextInput = props => {
  const styles = useThemeAwareObject(createStyles);

  const [show, setShow] = useState(false);

  return (
    <View style={props.style}>
      {/* {props.title && <ResponsiveText style={{}}>{props.title}</ResponsiveText>} */}
      <View style={[styles.textInputView, props.textInputView]}>
        {props.leftIcon && props.leftIcon}
        <TextInput
          {...props}
          placeholder={props.placeholder}
          style={{
            ...{
              flex: 1,

              textAlign: 'left',
              fontSize: styles.textSize.fontSize,
            },
            ...props.inputStyle,
          }}
          placeholderTextColor={styles.placeholderColor.color}
          value={props.value}
          editable={props.editable}
          allowFontScaling={false}
          onChangeText={props.onChangeText}
          secureTextEntry={!props.hideIcon ? false : !show}
          onSubmitEditing={props.onSubmit}
        />
        {props.hideIcon && (
          <View>
            {show ? (
              <TouchableOpacity onPress={() => setShow(false)}>
                <Image
                  source={require('../assets/Eye.png')}
                  style={styles.img}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => setShow(true)}>
                <Image
                  source={require('../assets/Eye-off.png')}
                  style={styles.img}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            )}
          </View>
        )}
      </View>
    </View>
  );
};

export default RnTextInput;
