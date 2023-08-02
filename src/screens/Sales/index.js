import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import {
  saleSelector
} from '../../redux/slices/sale';
import { useThemeAwareObject } from '../../theme';
import { useRoute } from '@react-navigation/native';
import Container from '../../components/Container';
import { fetchSales } from '../../firebase/tracker/saleTracker';
import SalesContainer from './SalesContainer';
import SalesSkeleton from './SalesSkeleton';
import createStyles from './styles';

function Sales({props, navigation}) {
  const {sales} = useSelector(saleSelector);
  const route = useRoute();
  const styles = useThemeAwareObject(createStyles);
  const category = route?.params?.name;
  const getSales = () => {
    fetchSales();
  };

  useEffect(() => {
    getSales();
  }, []);
  
  useEffect(() => {

    if (category) {
      if (category != 'More') {
        // selectCategory('Clothes');
        // filterFunction(category);
      }
    }
  }, []);



  return (
    <Container style={styles.mainContainer}>
    <ScrollView
    showsVerticalScrollIndicator={false}
    contentContainerStyle={styles.scrollViewContainer}>
      {sales.length ? (
       <SalesContainer navigation={navigation}/>
      ) : (
     <SalesSkeleton/>
      )}
  </ScrollView>
    </Container>
  );
}

export default Sales;
