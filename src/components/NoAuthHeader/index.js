import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

const NoAuthHeader = ({}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerImage}>
        <Image
          source={require('../../assets/images/Pin.png')}
          style={{height: 40, width: 40}}
          resizeMode="contain"
        />
      </View>
      <View>
        <Text style={styles.title}>Shareit</Text>
      </View>
    </View>
  );
};

export default NoAuthHeader;

const styles = StyleSheet.create({
  headerImage: {
    width: 40,
    height: 40,
    marginHorizontal: 20,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 20,
  },
  title: {
    color: colors.blue,
    fontWeight: 'bold',
    fontSize: 20,
  },
});
