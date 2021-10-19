import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/NoAuth/Login';
import ForgotPassword from '../screens/NoAuth/ForgotPassword';
import UpdatePassword from '../screens/NoAuth/UpdatePassword';
import SuccessRegistrationPage from '../screens/NoAuth/SuccessRegistrationPage';
import Home from '../screens/Auth/Home';
import NewRouteHome from '../screens/Auth/NewRouteHome';

const Stack = createNativeStackNavigator();

function Route() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="UpdatePassword" component={UpdatePassword} />
      <Stack.Screen
        name="SuccessRegistrationPage"
        component={SuccessRegistrationPage}
      />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="NewRouteHome" component={NewRouteHome} />
    </Stack.Navigator>
  );
}

export default Route;
