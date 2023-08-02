import { ScrollView } from 'react-native';

import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { useSelector } from 'react-redux';
import Container from '../../components/Container';
import { fetchCarouselItems } from '../../firebase/tracker/carouselTracker';
import { fetchFeaturedItems } from '../../firebase/tracker/featuredTracker';
import { carouselSelector } from '../../redux/slices/carousel';
import { featuredSelector } from '../../redux/slices/featured';
import { useThemeAwareObject } from '../../theme';
import HomeContainer from './HomeContainer';
import HomeSkeleton from './HomeSkeleton';
import createStyles from './styles';

function Home({navigation}) {
  const carousel = useSelector(carouselSelector);
  const featured = useSelector(featuredSelector);
  const styles = useThemeAwareObject(createStyles);

  useEffect(() => {
    fetchCarouselItems();
    fetchFeaturedItems();

    return () => {};
  }, []);
  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor="white" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.mainContainer}>
        {featured?.featuredItems?.carousels?.length ? (
          <HomeContainer navigation={navigation} />
        ) : (
          <HomeSkeleton />
        )}
      </ScrollView>
    </Container>
  );
}

export default Home;
