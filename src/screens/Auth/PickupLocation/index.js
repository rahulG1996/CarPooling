import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {AuthHeader, CustomButton} from '../../../components';
import {Styles} from '../../../utils/style';

const PickupLocation = props => {
  return (
    <View style={Styles.container}>
      <AuthHeader
        title="Pickup Location"
        back={true}
        navigation={props.navigation}
      />
      <View style={Styles.container}></View>
    </View>
  );
};

export default PickupLocation;
