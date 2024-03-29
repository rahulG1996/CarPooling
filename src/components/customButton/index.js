import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

const CustomButton = ({title, onPress, defaulStyle}) => {
  return (
    <TouchableOpacity style={[styles.btn, {...defaulStyle}]} onPress={onPress}>
      <Text numberOfLines={1} style={styles.btnText}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: colors.blue,
    padding: 10,
    borderRadius: 8,
    marginVertical: 10,
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
  },
});
