import React from 'react';
import { StyleSheet, View } from 'react-native';
import ResponsiveText from '../../components/RText';
import { useThemeAwareObject } from '../../theme';
import { hp, wp } from '../utils';


const createStyles = theme => {
    const styles = StyleSheet.create({
        container: {
            borderRadius: 8,
            width: ITEM_WIDTH,
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 3,
            },
            shadowOpacity: 0.29,
            shadowRadius: 4.65,
            elevation: 7,
        },
        image: {
            width: IMAGE_WIDTH,
            height: 200,
        },
        bgColor: theme.color.primary
    });

    return styles;
};

const Table = props => {
    const styles = useThemeAwareObject(createStyles);


    return (
        <>
            <View style={{ width: '100%' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', backgroundColor: styles.bgColor }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', height: 45 }}><ResponsiveText style={{ color: 'white', }}>{'Rank'}</ResponsiveText></View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', height: 45 }}><ResponsiveText style={{ color: 'white', }}>{"Name"}</ResponsiveText></View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', height: 45 }}><ResponsiveText style={{ color: 'white', }}>{"Invites"}</ResponsiveText></View>
                </View>
                {props.data.map((row, index) => {
                    if (index < 3) return
                    return (
                        index % 2 == 0 ?
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#f5f5f5' }}>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', height: 45 }}><ResponsiveText>{index + 1}</ResponsiveText></View>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', height: 45 }}><ResponsiveText>{row.name}</ResponsiveText></View>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', height: 45 }}><ResponsiveText>{row.invites}</ResponsiveText></View>
                            </View>
                            :
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', }}>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', height: 45 }}><ResponsiveText>{index + 1}</ResponsiveText></View>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', height: 45 }}><ResponsiveText>{row.name}</ResponsiveText></View>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', height: 45 }}><ResponsiveText>{row.invites}</ResponsiveText></View>
                            </View>
                    )
                })
                }
            </View>
        </>
    );
};

export default Table;
