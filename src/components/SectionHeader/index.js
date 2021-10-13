import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const SectionHeader = ({title, showAstric}) => {
  return (
    <View>
      <Text style={styles.title}>
        {title}
        {showAstric ? <Text style={{color: 'red'}}>*</Text> : null}
      </Text>
    </View>
  );
};

export default SectionHeader;

const styles = StyleSheet.create({
  title: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'grey',
  },
});
