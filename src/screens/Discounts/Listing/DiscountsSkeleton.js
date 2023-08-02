import React from 'react';
import {ScrollView, View} from 'react-native';

import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import Container from '../../../components/Container';
import ResponsiveText from '../../../components/RText';
import {hp, wp} from '../../../utils';

function DiscountsSkeleton({props, navigation}) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{flexGrow: 1}}>
      <Container style={{alignItems: 'center'}}>
        <SkeletonPlaceholder borderRadius={4}>
          <View
            style={{
              width: wp(100),
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: hp(5),
              marginTop: hp(5),
              paddingHorizontal: wp(3),

            }}>
            <View
              style={{width: wp(10), height: wp(10), borderRadius: wp(6)}}
            />
            <ResponsiveText
              style={{
                width: wp(25),
                fontSize: 14,
                lineHeight:hp(6),
              }}>
              Discounts
            </ResponsiveText>
            <View style={{width: wp(13), height: hp(7), borderRadius: wp(1)}} />
          </View>

          <View
            style={{
              width: wp(94),
              height: hp(6),
              marginTop: hp(2),
              alignSelf: 'center',
              paddingHorizontal: wp(3),
              borderRadius: wp(2),
            }}
          />
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
                width: wp(100),
                paddingHorizontal: wp(4),
                alignSelf: 'center',
                justifyContent: 'center',
              }}>
              <View style={{height: hp(20), width: wp(93), borderRadius: 20,marginBottom:hp(1)}} />
              <View style={{height: hp(20), width: wp(93), borderRadius: 20,marginBottom:hp(1)}} />
              <View style={{height: hp(20), width: wp(93), borderRadius: 20,marginBottom:hp(1)}} />
              <View style={{height: hp(20), width: wp(93), borderRadius: 20,marginBottom:hp(1)}} />
              <View style={{height: hp(20), width: wp(93), borderRadius: 20,marginBottom:hp(1)}} />

            </View>
           
          </View>
        </SkeletonPlaceholder>
      </Container>
    </ScrollView>
  );
}

export default DiscountsSkeleton;
