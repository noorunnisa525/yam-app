import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import Container from '../../../components/Container';
import { fetchBanks } from '../../../firebase/tracker/bankTracker';
import { bankSelector } from '../../../redux/slices/bank';
import { useThemeAwareObject } from '../../../theme';
import BanksContainer from './BanksContainer';
import BanksSkeleton from './BanksSkeleton';
import createStyles from './styles';

function Banks(props) {
  const navigation = useNavigation();
  const {banks, searchData} = useSelector(bankSelector);
  const styles = useThemeAwareObject(createStyles);

  useEffect(() => {
    fetchBanks();

    return () => {};
  }, []);

  return (
    <ScrollView
    showsVerticalScrollIndicator={false}
    contentContainerStyle={styles.scrollViewContainer}>
    <Container style={{alignItems: 'center'}}>
      {banks.length ? (
       <BanksContainer navigation={navigation}/>
      ) : (
     <BanksSkeleton/>
      )}
    </Container>
  </ScrollView>
  );
}

export default Banks;
