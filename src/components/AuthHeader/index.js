import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const AuthHeader = ({title}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Icon name="menu" size={25} />
      </TouchableOpacity>
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
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
  title: {
    fontSize: 20,
  },
});
