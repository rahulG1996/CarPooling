import React, {Component, useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {AuthHeader, CustomButton} from '../../../components';
import {Styles} from '../../../utils/style';
import GetLocation from 'react-native-get-location';
import MapViewDirections from 'react-native-maps-directions';
import {connect} from 'react-redux';
import {colors} from '../../../utils/colors';

const GOOGLE_MAPS_APIKEY = 'AIzaSyBxJfA-yroA-lGDQr8DfdDZwmnx8e9HBh8';
var _mapView;
class NewRouteHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLat: 37.78825,
      currentLong: -122.4324,
    };
  }

  // useEffect(() => {
  //   if (Object.keys(userPickupLocation).length) {
  //     setState({
  //       ...state,
  //       currentLat: userPickupLocation.pickupLat,
  //       currentLong: userPickupLocation.pickupLong,
  //     });
  //   }
  // }, [userPickupLocation]);

  componentDidMount() {
    if (!this.props.userPickupLocation) {
      this.getCurrentLocation();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentLat !== this.state.currentLat) {
      _mapView.animateToCoordinate(
        {
          latitude: this.statestate.currentLat,
          longitude: this.state.currentLong,
        },
        1000,
      );
    }
  }

  getCurrentLocation = () => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 150000,
    })
      .then(location => {
        this.statesetState({
          currentLat: Number(location.latitude),
          currentLong: Number(location.longitude),
        });
      })
      .catch(ex => {
        console.warn(ex);
        const {code, message} = ex;
        // setState({...state, showMap: false}, () => {
        //   alert('To track your direction , please click allow access');
        // });
      });
  };

  render() {
    return (
      <View style={Styles.container}>
        <AuthHeader title="Find a Ride" />
        <View style={Styles.container}>
          <View style={styles.mapContainer}>
            <View style={styles.container}>
              <MapView
                // mapType="terrain"
                style={styles.mapStyle}
                ref={mapView => {
                  _mapView = mapView;
                }}
                initialRegion={{
                  latitude: this.state.currentLat,
                  longitude: this.state.currentLong,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}>
                <Marker
                  coordinate={{
                    latitude: this.state.currentLat,
                    longitude: this.state.currentLong,
                  }}
                />
                {!!this.props.userDestiLocation && (
                  <MapView.Marker
                    coordinate={{
                      latitude: this.props.userDestiLocation.destinationLat,
                      longitude: this.props.userDestiLocation.destinationLong,
                    }}
                  />
                )}
                {!!this.props.userPickupLocation &&
                !!this.props.userDestiLocation ? (
                  <MapViewDirections
                    origin={{
                      latitude: this.props.userPickupLocation.pickupLat,
                      longitude: this.props.userPickupLocation.pickupLong,
                    }}
                    destination={{
                      latitude: this.props.userDestiLocation.destinationLat,
                      longitude: this.props.userDestiLocation.destinationLong,
                    }}
                    precision="high"
                    apikey={GOOGLE_MAPS_APIKEY}
                    strokeWidth={5}
                    strokeColor={colors.blue}
                    timePrecision="now"
                  />
                ) : null}
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
                    onPress={() =>
                      this.props.navigation.navigate('PickupLocation', {
                        type: 'pickup',
                      })
                    }
                    style={{
                      height: 50,
                      borderBottomWidth: 1,
                      borderBottomColor: '#e2e2e2',
                    }}>
                    <Text>Pickup Location</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate('PickupLocation', {
                        type: 'destination',
                      })
                    }
                    style={{height: 60, justifyContent: 'center'}}>
                    <Text>Destination Location</Text>
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
  }
}

export default connect(
  state => ({
    userPickupLocation: state.LocationReducer.userPickupLocation,
    userDestiLocation: state.LocationReducer.userDestiLocation,
  }),
  null,
)(NewRouteHome);

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
