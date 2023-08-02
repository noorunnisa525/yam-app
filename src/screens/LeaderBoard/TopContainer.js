import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import RnButton from '../../components/Button';
import ResponsiveText from '../../components/RText';
import { useThemeAwareObject } from '../../theme';
import { hp, wp } from '../../utils';
import { Icon } from 'react-native-elements';


const createStyles = theme => {
    const styles = StyleSheet.create({
        container: {
            // backgroundColor: theme.color.primary,
            height: hp(28),
            width: wp(100)
        },
        title: {
            color: theme.color.background,
            fontSize: theme.fontSize.large,
            alignSelf: 'center',
            marginTop: hp(3)
        },
        subTitle: {
            color: theme.color.background,
            fontSize: theme.fontSize.medium,
            alignSelf: 'center',
            marginTop: hp(1)
        },
        winnersContainer: {
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'flex-end',
            // backgroundColor:'red',
            flex: 1,
            marginBottom: 10
        },
        innerConatiner: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
        },
        iconColor: theme.color.primary,
        text: {
            color: theme.color.primary,
            marginLeft: 10
        },
        text1: {
            color: theme.color.primary,
            marginLeft: 10,
            fontSize: 5,
            fontWeight: 'bold'
        },
        rank: {
            color: theme.color.primary,
            fontSize: theme.fontSize.large,
            fontWeight: theme.fontWeight.bold,
            marginRight: wp(2)
        },
        backgroundColor: theme.color.primary

    });

    return styles;
};






const TopContainer = props => {
    const styles = useThemeAwareObject(createStyles);

    return (
        <View style={styles.container}>
            <View style={{ backgroundColor: styles.backgroundColor,paddingBottom:10 }}>

                <ResponsiveText style={styles.title}>Leaderboard</ResponsiveText>
                <ResponsiveText style={styles.subTitle}>Invite most friends to win iPhone 13</ResponsiveText>
            </View>
            <View style={styles.winnersContainer}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <View style={styles.innerConatiner}>
                        <Image source={require('./2.png')} style={{ height: 35, width: 35, borderColor: 'white', backgroundColor: 'white', borderRadius: 25, borderWidth: 1 }} />

                    </View>
                    <ResponsiveText style={styles.text}>Hasnain</ResponsiveText>
                    <ResponsiveText style={styles.text}>205 Invites</ResponsiveText>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <View style={styles.innerConatiner}>
                        <Image source={require('./1.png')} style={{ height: 45, width: 45, borderColor: 'white', backgroundColor: 'white', borderRadius: 25, borderWidth: 1 }} />

                    </View>
                    <ResponsiveText style={styles.text1}>Hasnain</ResponsiveText>
                    <ResponsiveText style={styles.text1}>235 Invites</ResponsiveText>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <View style={styles.innerConatiner}>
                        <Image source={require('./3.png')} style={{ height: 25, width: 25, borderColor: 'white', backgroundColor: 'white', borderRadius: 25, borderWidth: 1 }} />

                    </View>
                    <ResponsiveText style={styles.text}>Hasnain</ResponsiveText>
                    <ResponsiveText style={styles.text}>135 Invites</ResponsiveText>
                </View>
            </View>
        </View>
    );
};

export default TopContainer;
