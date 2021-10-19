import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {AuthHeader, CustomButton} from '../../../components';
import {Styles} from '../../../utils/style';

const NewRouteHome = () => {
  return (
    <View style={Styles.container}>
      <AuthHeader title="Find a Ride" />
      <View style={Styles.container}>
        <View style={styles.mapContainer}>
          <View style={styles.container}>
            <MapView
              style={styles.mapStyle}
              initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}>
              <Marker
                draggable
                coordinate={{
                  latitude: 37.78825,
                  longitude: -122.4324,
                }}
                title={'Test Marker'}
                description={'This is a description of the marker'}
              />
            </MapView>
          </View>
          <View style={{alignItems: 'center'}}>
            <View style={styles.container1}>
              <View style={{width: '15%', alignItems: 'center'}}>
                <View
                  style={{
                    width: 16,
                    height: 16,
                    borderRadius: 8,
                    backgroundColor: 'red',
                  }}
                />
                <View
                  style={{
                    borderLeftWidth: 1,
                    height: 50,
                    borderStyle: 'dashed',
                    borderLeftColor: '#e2e2e2',
                    marginVertical: 5,
                  }}
                />

                <View
                  style={{
                    width: 16,
                    height: 16,
                    borderRadius: 8,
                    backgroundColor: 'green',
                  }}
                />
              </View>
              <View style={{width: '70%'}}>
                <TouchableOpacity
                  style={{
                    height: 50,
                    borderBottomWidth: 1,
                    borderBottomColor: '#e2e2e2',
                  }}>
                  <Text>Pickup Location</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{height: 60, justifyContent: 'center'}}>
                  <Text>Pickup Location</Text>
                </TouchableOpacity>
              </View>
              <View style={{width: '15%', alignItems: 'center'}}>
                <View style={{height: 60}}>
                  <Text>+</Text>
                </View>

                <View style={{height: 60}}>
                  <Text>-</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{position: 'absolute', bottom: -10, width: '100%'}}>
            <CustomButton
              title="Search a ride"
              defaulStyle={{borderRadius: 0, paddingVertical: 15}}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default NewRouteHome;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  mapStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  mapContainer: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  container1: {
    position: 'absolute',
    backgroundColor: 'white',
    width: '80%',
    marginVertical: 20,
    height: 120,
    flexDirection: 'row',
    justifyContent: 'center',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 10,
    borderRadius: 10,
    paddingTop: 10,
  },
});
