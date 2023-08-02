import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {Icon} from 'react-native-elements';
import RnButton from '../../../components/Button';
import Container from '../../../components/Container';
import CustomDropDown from '../../../components/CustomDropdown';
import Dropdown from '../../../components/Dropdown';
import Header from '../../../components/Header';
import ResponsiveText from '../../../components/RText';
import RnTextInput from '../../../components/TextInput';
import Cities from '../../../constants/cities.json';
import {useThemeAwareObject} from '../../../theme';
import {hp, wp} from '../../../utils';
import createStyles from './styles';

function Filters({props, navigation}) {
  const styles = useThemeAwareObject(createStyles);
  const [dropdownValue, setDropdownValue] = useState('');
  const [cardType, setCardType] = useState('');
  const [category, setCategory] = useState('');
  const [open, setOpen] = useState(false);

  const [items, setItems] = useState([
    {label: 'Clothing', value: 'Clothing'},
    {label: 'Footwear', value: 'Footwear'},
    {label: 'Food', value: 'Food'},
  ]);
  useEffect(() => {}, []);

  return (
    <Container>
      <Header
        title={'Filters'}
        size={20}
        leftComponent={
          <Icon
            onPress={() =>
              navigation.navigate('Listing', {
                city: '',
                cardType: '',
                category: '',
              })
            }
            name={'close'}
            color={styles.leftHeaderIconStyle.color}
            size={styles.leftHeaderIconSize}
          />
        }
        rightComponent={
          <Icon
            onPress={() =>
              navigation.navigate('Listing', {
                city: '',
                cardType: '',
                category: '',
              })
            }
            name={'refresh'}
            color={styles.leftHeaderIconStyle.color}
            size={styles.leftHeaderIconSize}
          />
        }
      />
      <View style={styles.cityContainer}>
        <View>
          <ResponsiveText style={styles.headingText}>City</ResponsiveText>
          <Dropdown
            placeholder={'Select City'}
            value={dropdownValue}
            style={styles.textStyle}
            data={Cities}
            placeholderStyle={{ fontSize: hp(2)}}
            onChangeValue={value => {
              setDropdownValue(value);
            }}
            showSearchBar={true}
            leftIcon={
              <Icon
                name="place"
                size={styles.iconSize}
                color={styles.iconColor}
              />
            }
          />
        </View>

        <View>
          <ResponsiveText style={styles.headingText}>Card Type</ResponsiveText>
          <RnTextInput
            placeholder={'Select Card Type'}
            style={styles.textStyle}
            value={cardType}
            onChangeText={text => setCardType(text)}
            inputStyle={styles.inputStyle}
            leftIcon={
              <Icon
                name="credit-card"
                size={styles.iconSize}
                color={styles.iconColor}
              />
            }
          />
        </View>
        <ResponsiveText style={styles.headingText}>Category</ResponsiveText>

        <View style={styles.dropdownContainerStyle}>
          <Icon name="category" size={wp(5)} color={styles.iconColor} />
          <CustomDropDown
            value={category}
            setValue={setCategory}
            style={styles.dropdownStyle}
            placeholderStyle={{ fontSize: hp(2)}}
            open={open}
            setOpen={setOpen}
            zIndex={10}
            zIndexReverse={10}
            items={items}
            setItems={setItems}
            placeholder={'Select Category'}
          />
        </View>
      </View>
      <RnButton
        title={'Apply Filters'}
        onPress={() =>
          navigation.navigate('Listing', {
            city: dropdownValue,
            cardType,
            category,
          })
        }
        //   onPress={handleSubmit}
        //   loading={isLoading}
        //   disabled={!isValid}
        //   hideArrow
      />
    </Container>
  );
}

export default Filters;
