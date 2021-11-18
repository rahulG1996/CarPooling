import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import Route from './src/navigation';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {store} from './src/redux/store';
import {Provider} from 'react-redux';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
          <Provider store={store}>
            <Route />
          </Provider>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
