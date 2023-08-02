import React, {useState} from 'react';
import {FlatList, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {userSelector} from '../../redux/slices/user';
import {hp, wp} from '../../utils';

import RnButton from '../../components/Button';
import Container from '../../components/Container';
import Header from '../../components/Header';
import Image from '../../components/Image';
import ResponsiveText from '../../components/RText';
import SearchBox from '../../components/SearchBox';
import {useThemeAwareObject} from '../../theme';
import FavouritesTile from './FavouritesTile';
import createStyles from './styles';

function Discounts(props) {
  const styles = useThemeAwareObject(createStyles);
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const {user, guest} = useSelector(userSelector);
  const [flatlistData, setFlatlistData] = useState(images);

  const searchFilterFunction = search => {
    if (search) {
      const newData = images.filter(function (item) {
        const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
        const textData = search.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFlatlistData(newData);
      setSearch(search);
    } else {
      setFlatlistData(images);
      setSearch(search);
    }
  };
  return (
    <Container>
      <Header title={'Favourites'} size={20} />

      {!guest ? (
        <>
          {images.length > 0 && (
            <SearchBox
              setSearchText={searchFilterFunction}
              placeholder={'Which brand are you looking for?'}
            />
          )}
          <FlatList
            keyExtractor={(item, index) => index}
            showsVerticalScrollIndicator={false}
            data={flatlistData}
            renderItem={({item}) => {
              return <FavouritesTile data={item} />;
            }}
            ListEmptyComponent={() => (
              <View style={styles.emptyJobsContainer}>
                {images.length > 0 ? (
                  <Image
                    style={styles.logoStyle}
                    source={require('../../assets/nomatches.png')}
                    resizeMode="contain"
                  />
                ) : (
                  <Image
                    style={styles.logoStyle}
                    source={require('../../assets/nofavs.png')}
                    resizeMode="contain"
                  />
                )}
                <ResponsiveText
                  style={{
                    textAlign: 'center',
                    color: styles.themeTextColor,
                    marginTop: hp(2),
                  }}>
                  {images.length > 0
                    ? 'No favorite brands yet'
                    : 'No favorite brands yet'}
                </ResponsiveText>
              </View>
            )}
          />
        </>
      ) : (
        <View style={styles.noLoginContainer}>
          <Image
            style={styles.noFavsImg}
            source={require('../../assets/login.png')}
            resizeMode="contain"
          />
          <ResponsiveText style={styles.noLoginText}>
            You have to login first to access all features of this app.
          </ResponsiveText>

          <RnButton
            title={'Log In'}
            onPress={() =>
              props.navigation.replace('AuthStack', {screen: 'Login'})
            }
            loading={false}
            disabled={false}
            hideArrow
          />
        </View>
      )}
    </Container>
  );
}

export default Discounts;

const images = [
  {
    image: 'http://www.spicebazaar.pk/wp-content/uploads/2018/05/3.png',
    name: 'Spice Bazar',
    discount: 'Upto 20%',
  },
  {
    image: 'https://airhex.com/images/airline-logos/alt/emirates.png',
    name: 'Emirates',
    discount: 'Upto 15%',
  },
  {
    image:
      'https://www.shaditayari.pk/wp-content/uploads/cache/images/Junaid-Jamshed-opens-its-new-store-in-Bahawalpur/Junaid-Jamshed-opens-its-new-store-in-Bahawalpur-266759203.jpg',
    name: 'J.',
    discount: 'Upto 25%',
  },
  {
    image:
      'https://d2liqplnt17rh6.cloudfront.net/logoImages/9a534c86-89b1-479d-8940-9c705ce5b84f.jpg',
    name: 'Cafe Aylanto',
    discount: 'Upto 10%',
  },
  {
    image: 'http://www.spicebazaar.pk/wp-content/uploads/2018/05/3.png',
    name: 'Spice Bazar',
    discount: 'Upto 20%',
  },
  {
    image: 'https://airhex.com/images/airline-logos/alt/emirates.png',
    name: 'Emirates',
    discount: 'Upto 15%',
  },
  {
    image:
      'https://www.shaditayari.pk/wp-content/uploads/cache/images/Junaid-Jamshed-opens-its-new-store-in-Bahawalpur/Junaid-Jamshed-opens-its-new-store-in-Bahawalpur-266759203.jpg',
    name: 'J.',
    discount: 'Upto 25%',
  },
  {
    image:
      'https://d2liqplnt17rh6.cloudfront.net/logoImages/9a534c86-89b1-479d-8940-9c705ce5b84f.jpg',
    name: 'Cafe Aylanto',
    discount: 'Upto 10%',
  },
];
