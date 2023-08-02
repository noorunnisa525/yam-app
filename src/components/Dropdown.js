import React, { useState } from 'react';
import { StyleSheet, FlatList, Text, TouchableOpacity, View } from 'react-native';
import { useThemeAwareObject } from '../theme';
import { hp, wp } from '../utils';
import { Dialog } from 'react-native-simple-dialogs';
import RnTextInput from './TextInput';


const Dropdown = props => {

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
            valueText:{
                color: theme.color.mainText,
                fontFamily: theme.fontWeight.regular,
            },
            iconColor: theme.color.icon,

            placeholderColor: {
                color: theme.color.mainText,
            },

            textSize: {
                fontSize: hp(theme.fontSize.xsmall - 0.5),
            },
            searchBar: {
                justifyContent: 'center',
                backgroundColor: theme.color.lightContainer,
                padding: wp(1),
                paddingHorizontal: wp(2),
                borderRadius: wp(2),
                marginBottom: wp(2),
                height: hp(5),

            },
            iconSize: 2.5,
        });
        return styles;
    };

    const styles = useThemeAwareObject(createStyles);
    const [filteredData, setFilteredData] = useState(props.data)
    const [show, setShow] = useState(false);

    const filter = (searchText) => {
        if (searchText == '') {
            setFilteredData(props.data)
        } else {
            let results = props.data.filter(function (item) {
                return item.name.toLowerCase().includes(searchText.toLowerCase());
            });
            setFilteredData(results)
        }
    }
    return (
        <TouchableOpacity style={props.style} onPress={() => setShow(true)}>
            <View style={[styles.textInputView, props.textInputView]}>
                {props.leftIcon && props.leftIcon}
                {props.value == ''
                    ?
                <View style={{ flex: 1,marginLeft:wp(1)}}>
                        <Text style={[styles.placeholderColor,props.placeholderStyle]}>{props.placeholder}</Text>
                    </View>
                    :
                    <View style={{ flex: 1,marginLeft:wp(1) }}>
                        <Text style={styles.valueText}>{props.value}</Text>
                    </View>
                }

                {props.rightIcon && props.rightIcon}
            </View>

            <Dialog
                visible={show}
                title={props.placeholder}
                onTouchOutside={() => setShow(false)}
                onRequestClose={() => setShow(false)}
                dialogStyle={{ height: '90%' }}
            >
                <View style={{ height: '95%' }}>
                    {props.showSearchBar &&
                        <RnTextInput
                            placeholder={'Type to refine search'}
                            style={styles.searchBar}
                            onChangeText={(text) => filter(text)}
                        />
                    }
                    <FlatList
                        keyExtractor={(item, index) => index}
                        showsVerticalScrollIndicator={false}
                        data={filteredData}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity style={{ paddingVertical: 3 }} onPress={() => { props.onChangeValue(item.name); setShow(false) }}>
                                    <Text style={{ fontSize: 16, paddingVertical: 0 }}>{item.name}</Text>
                                </TouchableOpacity>
                            );
                        }}
                    />
                </View>
            </Dialog>
        </TouchableOpacity>
    );
};

export default Dropdown;