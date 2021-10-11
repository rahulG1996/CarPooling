import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import Route from './src/navigation';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <Route />
    </NavigationContainer>
  );
};

export default App;
