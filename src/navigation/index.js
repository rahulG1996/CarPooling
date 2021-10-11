import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/NoAuth/Login';
import ForgotPassword from '../screens/NoAuth/ForgotPassword';
import UpdatePassword from '../screens/NoAuth/UpdatePassword';

const Stack = createNativeStackNavigator();

function Route() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="UpdatePassword" component={UpdatePassword} />
    </Stack.Navigator>
  );
}

export default Route;
