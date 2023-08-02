import React from 'react';
import { ScrollView, View } from 'react-native';

import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import Container from '../../components/Container';
import ResponsiveText from '../../components/RText';
import { hp, wp } from '../../utils';

function SalesSkeleton({props, navigation}) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{flexGrow: 1}}>
      <Container style={{alignItems: 'center'}}>
        <SkeletonPlaceholder borderRadius={4}>

          <ResponsiveText
            style={{
              width:wp(20),
              marginTop: 6,
              fontSize: 14,
              lineHeight: hp(5),
              TextAlign: 'center',
              alignSelf:"center"
            }}>
            Sales
          </ResponsiveText>

          <View
            style={{
              width: wp(94),
              height:hp(6),
              marginTop: hp(2),
              alignSelf: 'center',
              paddingHorizontal: wp(3),
              borderRadius: wp(2)

            }}/>
           

          <View
            style={{
              width: wp(100),
              marginTop: hp(2),
              alignSelf: 'center',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
              paddingHorizontal: wp(3),
            }}>
            <View
              style={{width: wp(22), height: hp(5), borderRadius: wp(10)}}
            />
            <View
              style={{width: wp(22), height: hp(5), borderRadius: wp(10)}}
            />
            <View
              style={{width: wp(22), height: hp(5), borderRadius: wp(10)}}
            />
            <View
              style={{width: wp(22), height: hp(5), borderRadius: wp(10)}}
            />
          </View>

          <View
            style={{
              width: wp(100),
              marginTop: hp(2),
              alignSelf: 'center',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: wp(4),
            }}>
            <View
              style={{
                flexDirection: 'row',
                width: wp(100),
                marginTop: hp(2),
                paddingHorizontal: wp(4),
                alignSelf: 'center',
                justifyContent: 'space-between',
              }}>
              <View style={{height: hp(22), width: wp(44), borderRadius: 20}} />
              <View style={{height: hp(22), width: wp(44), borderRadius: 20}} />
            </View>
            <View
              style={{
                flexDirection: 'row',
                width: wp(100),
                marginTop: hp(2),
                paddingHorizontal: wp(4),
                alignSelf: 'center',
                justifyContent: 'space-between',
              }}>
              <View style={{height: hp(22), width: wp(44), borderRadius: 20}} />
              <View style={{height: hp(22), width: wp(44), borderRadius: 20}} />
            </View>
          </View>
          <View
              style={{
                flexDirection: 'row',
                width: wp(100),
                marginTop: hp(2),
                paddingHorizontal: wp(4),
                alignSelf: 'center',
                justifyContent: 'space-between',
              }}>
              <View style={{height: hp(22), width: wp(44), borderRadius: 20}} />
              <View style={{height: hp(22), width: wp(44), borderRadius: 20}} />
            </View>
            <View
              style={{
                flexDirection: 'row',
                width: wp(100),
                marginTop: hp(2),
                paddingHorizontal: wp(4),
                alignSelf: 'center',
                justifyContent: 'space-between',
              }}>
              <View style={{height: hp(22), width: wp(44), borderRadius: 20}} />
              <View style={{height: hp(22), width: wp(44), borderRadius: 20}} />
            </View>
        </SkeletonPlaceholder>
      </Container>
    </ScrollView>
  );
}

export default SalesSkeleton;
