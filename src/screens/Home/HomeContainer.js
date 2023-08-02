import React from 'react';
import { FlatList, ScrollView, View } from 'react-native';
import Image from 'react-native-fast-image';
import { useSelector } from 'react-redux';
import Container from '../../components/Container';
import Poster from '../../components/Poster';
import ResponsiveText from '../../components/RText';
import { carouselSelector } from '../../redux/slices/carousel';
import { featuredSelector } from '../../redux/slices/featured';
import { useThemeAwareObject } from '../../theme';
import Carousel from './Carousel';
import SearchBox from './HomeSearchBox';
import createStyles from './styles';
function HomeContainer({navigation}) {
  const carousel = useSelector(carouselSelector);
  const featured = useSelector(featuredSelector);
  const styles = useThemeAwareObject(createStyles);

  return (
    <Container style={styles.mainContainer}>
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollViewContainer}>
        <Carousel data={carousel.carouselItems.carousels} />
        <SearchBox />

          <FlatList
            keyExtractor={(item, index) => index}
            showsVerticalScrollIndicator={false}
            data={featured.featuredItems.carousels}
            contentContainerStyle={styles.flatListContainer}
            numColumns={2}
            renderItem={({item}) => {
              return (
                <Poster
                  navigation={navigation}
                  image={item.sale.brand?.logo}
                  sale={item.sale}
                  name={item?.sale?.brand?.name}
                  offerText={item?.sale?.percentage}
                  saleImage={item.sale.poster}
                  onPress={() =>
                   
                    navigation.navigate('SaleDetails', {
                      saleDetails: item.sale,
                    })
                  }
                />
              );
            }}
            ListEmptyComponent={() => (
              <View style={styles.emptyJobsContainer}>
                <Image
                  style={styles.logoStyle}
                  source={require('../../assets/nosales.png')}
                  resizeMode="contain"
                />
                <ResponsiveText
                  style={styles.noSalesText}>
                  No sale found
                </ResponsiveText>
              </View>
            )}
          />
        
    </ScrollView>
      </Container>
  );
}

export default HomeContainer;
