import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useThemeAwareObject} from '../../../theme';
import {hp, wp} from '../../../utils';
import Tags from 'react-native-tags';

const createStyles = theme => {
  const styles = StyleSheet.create({
    container: {
      marginHorizontal: wp(1),
    },
    tagTextStyle:{
      fontWeight:theme.fontWeight.medium,
      color:'#7E838F',
      fontSize:hp(1.6)
    }
  });
  return styles;
};

const LocationTile = props => {
  const styles = useThemeAwareObject(createStyles);

  return (
    <View style={styles.container}>
      <Tags
        initialTags={props.locations}
        readonly={true}
        tagContainerStyle={{
          backgroundColor: '#F5F5F5',
          borderWidth:wp(0.4),
          padding:wp(1),
          height:hp(5),
          borderRadius:wp(5),
          borderColor:'#E8E8E8'
        }}
        
        tagTextStyle={styles.tagTextStyle}
      />
    </View>
  );
};

export default LocationTile;
