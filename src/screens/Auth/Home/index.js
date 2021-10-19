import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  AuthHeader,
  CustomHeadingTabBar,
  CustomButton,
} from '../../../components';
import {Styles} from '../../../utils/style';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import MapView, {Marker} from 'react-native-maps';
import GetLocation from 'react-native-get-location';

const Home = props => {
  const [state, setState] = useState({
    headingTabData: [
      {title: 'Travel', isActive: true},
      {title: 'Track', isActive: false},
      {title: 'Message', isActive: false},
    ],
    currentLat: 37.78825,
    currentLong: -122.4324,
    activeTab: 'Travel',
  });

  useEffect(() => {
    getCurrentLocation();
  }, []);

  const getCurrentLocation = () => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 150000,
    })
      .then(location => {
        console.warn(location);
        setState({
          ...state,
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

  const hnadleTabBar = value => {
    let headingTabData = state.headingTabData.map(item => {
      if (item.title === value) {
        return {...item, isActive: true};
      } else {
        return {...item, isActive: false};
      }
    });
    setState({...state, headingTabData, activeTab: value});
  };

  return (
    <View style={Styles.container}>
      <AuthHeader />
      <View style={Styles.container}>
        <CustomHeadingTabBar
          data={state.headingTabData}
          hnadleTabBar={hnadleTabBar}
        />
        <KeyboardAwareScrollView keyboardShouldPersistTaps="handled">
          <View style={Styles.box}>
            <View style={styles.heading}>
              <Text style={styles.text1}>Good Morning John !</Text>
            </View>
            <Text style={{fontWeight: 'bold', paddingTop: 10}}>Around You</Text>
            <View style={styles.mapContainer}>
              <View style={styles.container}>
                <MapView
                  style={styles.mapStyle}
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
            </View>
            <View
              style={{
                flexWrap: 'wrap',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              {[1, 2, 3, 4].map((item, index) => {
                return (
                  <View style={{width: '48%'}}>
                    <CustomButton
                      title={
                        item === 1
                          ? 'Search A New Ride'
                          : item === 2
                          ? 'Saved Location'
                          : item === 3
                          ? 'Travel History'
                          : 'TRusted Contacts'
                      }
                      defaulStyle={{borderRadius: 20}}
                      onPress={() => props.navigation.navigate('NewRouteHome')}
                    />
                  </View>
                );
              })}
            </View>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </View>
  );
};

export default Home;

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
    height: 300,
    marginVertical: 30,
    borderWidth: 1,
  },
  text1: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  heading: {
    borderBottomWidth: 0.5,
    paddingBottom: 10,
    borderBottomColor: '#e2e2e2',
  },
});
