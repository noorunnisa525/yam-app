import React,{useEffect}from 'react';
import { ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import Container from '../../../components/Container';
import { fetchDiscounts } from '../../../firebase/tracker/discountTracker';
import {
  discountSelector
} from '../../../redux/slices/discount';
import DiscountsContainer from './DiscountsContainer';
import DiscountsSkeleton from './DiscountsSkeleton';
import { useThemeAwareObject } from '../../../theme';
import createStyles from './styles';

function Discounts({props, navigation}) {
  let {discounts} = useSelector(discountSelector);
  const styles = useThemeAwareObject(createStyles);

  useEffect(() => {
    fetchDiscounts();

    return () => {};
  }, []);

  return (
    <ScrollView
    showsVerticalScrollIndicator={false}
    contentContainerStyle={styles.scrollViewContainer}>
    <Container style={{alignItems: 'center'}}>
    {discounts.length ? (
       <DiscountsContainer navigation={navigation}/>
      ) : (
     <DiscountsSkeleton/>
      )}
    </Container>
  </ScrollView>
  );
}

export default Discounts;
