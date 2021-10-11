import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const CustomHeadingTabBar = ({data, hnadleTabBar}) => {
  return (
    <View style={styles.container}>
      {data.map((item, index) => {
        return (
          <TouchableOpacity
            onPress={() => hnadleTabBar(item.title)}
            style={[
              styles.btn,
              {
                borderBottomColor: item.isActive ? '#0066FF' : 'transparent',
                borderBottomWidth: 1,
                flex: 1 / data.length,
                borderRightWidth: index < data.length - 1 ? 1 : null,
                borderRightColor: '#e2e2e2',
              },
            ]}>
            <Text>{item.title}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CustomHeadingTabBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  title: {
    color: '#0066FF',
    fontWeight: 'bold',
    fontSize: 20,
  },
  btn: {
    alignItems: 'center',
    paddingVertical: 20,
  },
});
