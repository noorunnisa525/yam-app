import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { useSelector } from 'react-redux';
import Container from '../../../components/Container';
import Header from '../../../components/Header';
import ResponsiveText from '../../../components/RText';
import SearchBox from '../../../components/SearchBox';
import {
  discountSelector
} from '../../../redux/slices/discount';
import { useThemeAwareObject } from '../../../theme';
import { hp, wp } from '../../../utils';
import DiscountInfoTile from './DiscountInfoTile';
import createStyles from './styles';

function DiscountsContainer({props, navigation}) {
  const route = useRoute();
  const styles = useThemeAwareObject(createStyles);
  let {discounts} = useSelector(discountSelector);
  let discountsArray = JSON.parse(JSON.stringify(discounts));
  discountsArray = discountsArray.map(item => {
    let obj = {...item, city: 'Lahore'};
    return obj;
  });

  const [filterData, setFilterData] = useState([]);
  const [search, setSearch] = useState('');
  let city = null;
  let cardType = null;
  let category = null;
  if (route.params) {
    city = route.params.city;
    cardType = route.params.cardType;
    category = route.params.category;
  }

  const searchFilterFunction = search => {
    setSearch(search);
  };
  useEffect(() => {
    let data = discountsArray;
    if (cardType) {
      data = data.filter(item => {
        if (item.bank.name.toUpperCase() == cardType.toUpperCase()) {
          return item;
        }
        return null;
      });
    }
    if (city) {
      data = data.filter(item => {
        if (item.city.toUpperCase() == city.toUpperCase()) {
          return item;
        }
        return null;
      });
    }
    if (category) {
      data = data.filter(item => {
        if (item.brand.category.toUpperCase() == category.toUpperCase()) {
          return item;
        }
        return null;
      });
    }
    if (search) {
      data = data.filter(item =>
        item.brand.name.toUpperCase().includes(search.toUpperCase()),
      );
    }
    setFilterData(data);
  }, [cardType, city, category, search]);
  return (
    <Container style={styles.mainContainer}>
    <Header
        title={'Discounts'}
        size={20}
        leftComponent={
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => {
              navigation.goBack();
            }}>
            <Icon
              onPress={() => navigation.goBack()}
              name="chevron-left"
              type="feather"
              size={styles.iconSize}
              color={'black'}
              containerStyle={styles.iconLeft}
            />
          </TouchableOpacity>
        }
        rightComponent={
          <Icon
            onPress={() => navigation.navigate('Filters')}
            type="material-community"
            name={'tune'}
            color={styles.rightHeaderIconStyle.color}
            size={styles.leftHeaderIconSize}
          />
        }
      />

      <SearchBox
        value={search}
        setSearchText={searchFilterFunction}
        placeholder={'Which brand are you looking for?'}
      />
      <FlatList
        keyExtractor={(item, index) => index}
        showsVerticalScrollIndicator={false}
        data={
          search != '' || city || cardType || category
            ? filterData
            : discountsArray
        }
        contentContainerStyle={styles.flatListContainer}
        renderItem={({item}) => {
          return <DiscountInfoTile data={item} />;
        }}
        ListEmptyComponent={() => (
          <View style={styles.emptyJobsContainer}>
            {filterData.length == 0 &&search != ''? (
              <Image
                style={styles.logoStyle}
                source={require('../../../assets/nomatches.png')}
                resizeMode="contain"
              />
            ) : null}
            <ResponsiveText
              style={styles.noDiscountsText}>
              {filterData.length == 0 &&search != ''
                ? 'No discounts found'
                : 'No discounts found'}
            </ResponsiveText>
          </View>
        )}
      />
    </Container>
  );
}

export default DiscountsContainer;
