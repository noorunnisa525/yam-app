import Carousel, {Pagination, ParallaxImage} from 'react-native-snap-carousel';
import {
  Dimensions,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {hp, wp} from '../../utils';

import {useNavigation} from '@react-navigation/native';
import {useThemeAwareObject} from '../../theme';

import Image from 'react-native-fast-image';

const createStyles = theme => {
  const styles = StyleSheet.create({
    container: {
      borderRadius: 8,
      width: wp(100),
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
      elevation: 7,
    },
    image: {
      ...StyleSheet.absoluteFillObject,
      resizeMode: 'cover',
    },

    paginationContainer: {
      width: wp(15),
      height: hp(3),
      justifyContent: 'center',
      alignSelf: 'center',
    },
    inactiveStyle: {
      backgroundColor: theme.color.disabled,
    },
    dotStyle: {
      width: wp(3),
      height: wp(3),
      borderRadius: 50,
      // backgroundColor: theme.color.enabled,
    },
    imageContainer: {
      flex: 1,
      marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
      backgroundColor: 'white',
      resizeMode: 'cover',
    },
    carouselImage:{
      width: wp(100), height: hp(30)
    }
  });

  return styles;
};

const CustomCarousel = props => {
  const navigation = useNavigation();
  const renderCarouselItem = ({item}, {parallaxProps}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('SaleDetails', {
            saleDetails: item.sale,
          })
        }}>
        <Image
          source={{uri: item.sale.banner}}
          style={styles.carouselImage}
          resizeMode={Image.resizeMode.cover}
        />
        {/* <ParallaxImage
          source={{uri: item.sale.banner}}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        /> */}
      </TouchableOpacity>
    );
  };

  const isCarousel = React.useRef(null);
  const [index, setIndex] = useState(0);
  const styles = useThemeAwareObject(createStyles);

  const slideWidth = wp(100);
  const itemHorizontalMargin = wp(2);

  const sliderWidth = Dimensions.get('window').width;
  const itemWidth = slideWidth + itemHorizontalMargin * 2;

  return (
    <>
      {props.data?.length > 0 && (
        <>
          <Carousel
            layout={'default'}
            ref={isCarousel}
            data={props.data}
            renderItem={renderCarouselItem}
            sliderWidth={sliderWidth}
            itemWidth={itemWidth}
            onSnapToItem={index => setIndex(index)}
            loop={true}
            autoplay={true}
            autoplayDelay={300}
            autoplayInterval={3000}
            hasParallaxImages={true}
          />
          <View style={styles.paginationContainer}>
            <Pagination
              dotsLength={props.data.length}
              activeDotIndex={index}
              dotStyle={styles.dotStyle}
              inactiveDotStyle={styles.inactiveStyle}
              inactiveDotOpacity={0.6}
              inactiveDotScale={0.6}
              carouselRef={isCarousel}
              tappableDots={true}
              animatedDuration={50}
            />
          </View>
        </>
      )}
    </>
  );
};

export default CustomCarousel;
