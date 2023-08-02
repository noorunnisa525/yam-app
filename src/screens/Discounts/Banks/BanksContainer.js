import { useNavigation } from '@react-navigation/native';
import React, { useRef, useState } from 'react';
import { FlatList, Image, View } from 'react-native';
import DropdownAlert from 'react-native-dropdownalert';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../../../components/Container';
import Header from '../../../components/Header';
import ResponsiveText from '../../../components/RText';
import SearchBox from '../../../components/SearchBox';
import { fetchBanks } from '../../../firebase/tracker/bankTracker';
import { bankSelector, setSearchBanks } from '../../../redux/slices/bank';
import { useThemeAwareObject } from '../../../theme';
import BankTile from './BankTile';
import createStyles from './styles';

function BanksContainer(props) {
  const navigation = useNavigation();
  const styles = useThemeAwareObject(createStyles);
  const dispatch = useDispatch();
  let dropDownAlertRef = useRef();
  const {banks, searchData} = useSelector(bankSelector);
  const [queueSize, setQueueSize] = useState(0);
  const [search, setSearch] = useState('');

  // const netInfo = useNetInfo();

  const getBanks = () => {
    fetchBanks();
  };

  const _updateQueueSize = () => {
    setQueueSize(dropDownAlertRef.getQueueSize());
  };

  const searchFilterFunction = search => {
    if (search) {
      const newData = banks.filter(function (item) {
        const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
        const textData = search.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });

      dispatch(setSearchBanks(newData));
      // setFilteredDataSource(newData);
      setSearch(search);
    } else {
      dispatch(setSearchBanks(banks));

      // setFilteredDataSource(jobs);
      setSearch(search);
    }
  };

  // useEffect(() => {
  //   const unsubscribe = NetInfo.addEventListener(state => {
  //     console.log('Connection type', state.type);
  //     console.log('Is connected?', state.isConnected);
  //     if (state.isConnected) {
  //       getBanks();
  //     } else {
  //       dropDownAlertRef.alertWithType('error', 'Error', 'No Internet');
  //     }
  //   });

  //   return () => {
  //     unsubscribe;
  //   };
  // }, []);

  return (
    <>
      <Container style={styles.mainContainer}>
        <Header title={'Banks'} size={20} />

        {banks.length > 0 && (
          <SearchBox
            setSearchText={searchFilterFunction}
            placeholder={'Search bank'}
          />
        )}
        <FlatList
          keyExtractor={(item, index) => index}
          showsVerticalScrollIndicator={false}
          data={search == '' ? banks : searchData}
          numColumns={2}
          contentContainerStyle={styles.flatListContainer}
          renderItem={({item}) => {
            return <BankTile data={item} />;
          }}
          ListEmptyComponent={() => (
            <View style={styles.emptyJobsContainer}>
              {searchData.length == 0 ? (
                <Image
                  style={styles.logoStyle}
                  source={require('../../../assets/nomatches.png')}
                  resizeMode="contain"
                />
              ) : null}
              <ResponsiveText
                style={styles.noBanksText}>
                {searchData.length ==0 ? 'No bank found' : 'No bank found'}
              </ResponsiveText>
            </View>
          )}
        />
      </Container>
      <DropdownAlert
        ref={ref => {
          if (ref) {
            dropDownAlertRef = ref;
          }
        }}
        showCancel={true}
        titleNumOfLines={2}
        messageNumOfLines={0}
      />
    </>
  );
}

export default BanksContainer;
