import React from 'react';
import { ScrollView, View } from 'react-native';
import Image from 'react-native-fast-image';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import Container from '../../components/Container';
import { hp, wp } from '../../utils';

function HomeSkeleton({navigation}) {
 

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{flexGrow: 1}}>
      <Container style={{alignItems: 'center'}}>
        <SkeletonPlaceholder borderRadius={4}>
          <Image style={{width: wp(100), height: hp(25)}} />
          <View
            style={{
              width: wp(10),
              marginTop: hp(1),
              alignSelf: 'center',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <View style={{width: 10, height: 10, borderRadius: 10}} />
            <View style={{width: 10, height: 10, borderRadius: 10}} />
            <View style={{width: 10, height: 10, borderRadius: 10}} />
          </View>

          <View
            style={{
              width: wp(100),
              marginTop: hp(2),
              alignSelf: 'center',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
              paddingHorizontal: wp(2),
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
                paddingHorizontal:wp(4),
                alignSelf: 'center',
                justifyContent: 'space-between',
              }}>
              <View
                style={{height: hp(22), width: wp(44), borderRadius:20}}
                />
              <View
                style={{height: hp(22), width: wp(44), borderRadius:20}}
                />
            </View>
            <View
              style={{
                flexDirection: 'row',
                width: wp(100),
                marginTop: hp(2),
                paddingHorizontal:wp(4),
                alignSelf: 'center',
                justifyContent: 'space-between',
              }}>
              <View
                style={{height: hp(22), width: wp(44), borderRadius: 20}}
              />
              <View
                style={{height: hp(22), width: wp(44), borderRadius:20}}
              />
            </View>
          </View>
        </SkeletonPlaceholder>
      </Container>
    </ScrollView>

  );
}

export default HomeSkeleton;
