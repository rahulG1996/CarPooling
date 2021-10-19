import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import MapView, {Marker} from 'react-native-maps';
import {AuthHeader, CustomButton} from '../../../components';
import {Styles} from '../../../utils/style';

const PickupLocation = props => {
  var _mapView;
  const [state, setState] = useState({
    currentLat: 37.78825,
    currentLong: -122.4324,
    type: props?.route?.params?.type,
  });

  const selectedLocation = (data, details) => {
    console.warn(details.geometry.location.lat, details.geometry.location.lng);
    setState({
      ...state,
      currentLat: Number(details.geometry.location.lat),
      currentLong: Number(details.geometry.location.lng),
    });
  };

  useEffect(() => {
    _mapView.animateToCoordinate(
      {
        latitude: state.currentLat,
        longitude: state.currentLong,
      },
      1000,
    );
  }, [state.currentLat]);

  return (
    <View style={Styles.container}>
      <AuthHeader
        title={
          state.type === 'pickup' ? 'Pickup Location' : 'Destination Location'
        }
        back={true}
        navigation={props.navigation}
      />
      <View style={styles.mapContainer}>
        <View style={styles.container}>
          <MapView
            style={styles.mapStyle}
            ref={mapView => {
              _mapView = mapView;
            }}
            initialRegion={{
              latitude: state.currentLat,
              longitude: state.currentLong,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}>
            <Marker
              draggable
              coordinate={{
                latitude: state.currentLat,
                longitude: state.currentLong,
              }}
              title={'Test Marker'}
              description={'This is a description of the marker'}
            />
          </MapView>
        </View>

        <View
          style={{
            marginHorizontal: 40,
            marginVertical: 10,
            position: 'absolute',
            width: '80%',
          }}>
          <GooglePlacesAutocomplete
            text={'pickupLocation'}
            minLength={2} // minimum length of text to search
            autoFocus={true}
            placesholder="Enter Pickup Location"
            listViewDisplayed={false} // true/false/undefined
            returnKeyType={'search'}
            fetchDetails={true}
            filterReverseGeocodingByTypes={[
              'locality',
              'sublocality',
              'postal_code',
              'country',
              'administrative_area_level_1',
              'administrative_area_level_2',
              'administrative_area_level_3',
            ]}
            renderDescription={row => row.description} // custom description render
            onPress={(data, details = null) => {
              selectedLocation(data, details);
            }}
            getDefaultValue={() => {
              return ''; // text input default value
            }}
            query={{
              key: 'AIzaSyBxJfA-yroA-lGDQr8DfdDZwmnx8e9HBh8',
              language: 'en', // language of the results
            }}
            styles={{
              description: {
                fontWeight: 'bold',
              },
              predefinedPlacesDescription: {
                color: '#1faadb',
              },
              textInput: {
                marginLeft: 0,
                marginRight: 0,
                // fontSize: 10,
                //   padding: Platform.OS === 'ios' ? 6 : 0,
                paddingHorizontal: 5,
                marginHorizontal: 20,
                elevation: 10,
              },
            }}
            nearbyPlacesAPI="GooglePlacesSearch" // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
            GoogleReverseGeocodingQuery={{}}
            GooglePlacesSearchQuery={{
              rankby: 'distance',
              types: 'places',
            }}
            debounce={300}
          />
          {/* <View
            style={{
              alignItems: 'flex-end',
              borderWidth: 1,
              top: -10,
              zIndex: 999,
              position: 'absolute',
            }}>
            <Icon name="circle-with-cross" />
          </View> */}
        </View>
        <View style={{bottom: 58, width: '100%', position: 'absolute'}}>
          <CustomButton
            title={
              state.type === 'pickup'
                ? 'Confirm Pickup Location'
                : 'Confirm Destination Location'
            }
            defaulStyle={{borderRadius: 0, paddingVertical: 15}}
          />
        </View>
      </View>
    </View>
  );
};

export default PickupLocation;

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
});
