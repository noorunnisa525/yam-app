import React from 'react';
import {ScrollView, View} from 'react-native';
import Container from '../../../components/Container';
import ResponsiveText from '../../../components/RText';
import {useThemeAwareObject} from '../../../theme';
import DiscountDetailsTile from './DiscountDetailsTile';
import Header from './Header';
import LocationTile from './LocationTile';
import createStyles from './styles';
import TopContainer from './TopContainer';

function DiscountDetails(props) {
  const discounts = props.route.params.discounts;
  const styles = useThemeAwareObject(createStyles);
  const Divider = () => {
    return <View style={styles.divider} />;
  };

  return (
    <Container>
      <ScrollView contentContainerStyle={styles.container}>
        <Header banner={discounts.image} />
        <TopContainer
          logo={discounts?.brand?.logo}
          title={discounts?.brand?.name}
        />
        {/* <ResponsiveText style={styles.title}>Offers</ResponsiveText> */}
        {discounts?.discounts?.map(discount => {
          return (
            <DiscountDetailsTile
              value={discount?.percentage}
              cards={discount?.cards}
            />
          );
        })}
        {discounts.days && (
          <>
            <ResponsiveText style={styles.title}>Available on</ResponsiveText>
            <LocationTile locations={discounts.days} />
          </>
        )}
        <Divider />

        <ResponsiveText style={styles.title}>Available at</ResponsiveText>
        <LocationTile locations={discounts.locations} />
        <Divider />

        <ResponsiveText style={styles.termsText}>
          Terms & Conditions
        </ResponsiveText>
      </ScrollView>
    </Container>
  );
}

export default DiscountDetails;
