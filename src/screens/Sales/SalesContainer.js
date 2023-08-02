import React, { useEffect, useState } from 'react';
import { FlatList, Image, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  saleSelector,
  setFilterData,
  setSearchSales
} from '../../redux/slices/sale';
import { useRoute } from '@react-navigation/native';
import Header from '../../components/Header';
import Poster from '../../components/Poster';
import ResponsiveText from '../../components/RText';
import { fetchSales } from '../../firebase/tracker/saleTracker';
import { useThemeAwareObject } from '../../theme';
import { wp } from '../../utils';
import SearchBox from './SalesSearchBox';
import createStyles from './styles';

function SalesContainer({props, navigation}) {
  const dispatch = useDispatch();
  const styles = useThemeAwareObject(createStyles);
  const {sales,filterData} = useSelector(saleSelector);
  const route = useRoute();
  const [queueSize, setQueueSize] = useState(0);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');
  const [salesData, setSalesData] = useState(filterData);
  const category = route?.params?.name;
  const getSales = () => {
    fetchSales();
  };

  useEffect(() => {
    getSales();

    if (category) {
      if (category != 'More') {
        // selectCategory('Clothes');
        // filterFunction(category);
      }
    }
  }, []);

  useEffect(() => {
    if (sales.length > 0) {
      setSalesData(sales);
    }
    if (category) {
      filterFunction(category);
    }
  }, [sales, category]);

  const searchFilterFunction = search => {
    if (search) {
      const newData = filterData.filter(function (item) {
        const itemData = item.brand.name
          ? item.brand.name.toUpperCase()
          : ''.toUpperCase();
        const textData = search.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      dispatch(setSearchSales(newData));
      setSalesData(newData);
      setSearch(search);

    } else {
      dispatch(setSearchSales(sales));
      setSalesData(sales);
      setSearch(search);
      setFilter('');

    }
  };

  const filterFunction = filterText => {
    if (filterText) {
      const newData = sales.filter(function (item) {
        const itemData = item.brand.category
          ? item.brand.category.toUpperCase()
          : ''.toUpperCase();
        const textData = filterText.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });

      dispatch(setFilterData(newData));
      setSalesData(newData);
      setFilter(filterText);

    } else {
      dispatch(setFilterData(sales));
      setFilter(filterText);
    }
  };

  const selectCategory = category => {
    if (category == 'More') {
      setSalesData(sales);
      setFilter('More');
    } else if (category == filter) {
      setSalesData(sales);
      setFilter('');
    } else {
      filterFunction(category);
    }
  };
  return (
    <View style={{paddingHorizontal:wp(2)}}>
      <Header title={'Sales'} size={20} />
      {sales.length > 0 && (
        <SearchBox
          category={filter}
          onSelectCategory={selectCategory}
          setSearchText={searchFilterFunction}
        />
      )}
      <FlatList
        keyExtractor={(item, index) => item.title + index}
        showsVerticalScrollIndicator={false}
        data={salesData}
        contentContainerStyle={styles.flatListContainer}
        numColumns={2}
        renderItem={({item}) => {
          return (
            <Poster
              image={item?.brand?.logo}
              sale={item}
              name={item?.brand?.name}
              offerText={item?.percentage}
              saleImage={item?.poster}
              onPress={() =>
                navigation.navigate('SaleDetails', {
                  saleDetails: item,
                })
              }
            />
          );
        }}
        ListEmptyComponent={() => (
          <View style={styles.emptyJobsContainer}>
            {salesData.length == 0 && search != '' ? (
              <Image
                style={styles.logoStyle}
                source={require('../../assets/nomatches.png')}
                resizeMode="contain"
              />
            ) : (
              <Image
                style={styles.logoStyle}
                source={require('../../assets/nosales.png')}
                resizeMode="contain"
              />
            )}
            <ResponsiveText
              style={styles.noSalesText}>
              {salesData.length == 0 && search != ''
                ? 'No sale found'
                : 'No sale found'}
            </ResponsiveText>
          </View>
        )}
      />
    </View>
  );
}

export default SalesContainer;

