import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const AuthHeader = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Icon name="menu" size={25} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="bell" size={25} />
      </TouchableOpacity>
    </View>
  );
};

export default AuthHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
});
