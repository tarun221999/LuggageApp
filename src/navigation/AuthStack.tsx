import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { screenNames } from '../conifg/constants';
import Login from '../screens/AuthScreens/Login';
import SignUp from '../screens/AuthScreens/SignUp';
import Verification from '../screens/AuthScreens/Verification';


const Stack = createNativeStackNavigator();

// Main Tab Navigator
export const  AuthStack = () => {
    return (
        <Stack.Navigator  screenOptions={{ headerShown: false }}>
          <Stack.Screen name={screenNames.LOGIN_SCREEN} component={Login} />
          <Stack.Screen name={screenNames.SIGN_UP_SCREEN} component={SignUp} />
          <Stack.Screen name={screenNames.ENTER_OTP_SCREEN} component={Verification} />
        </Stack.Navigator>
      );
}


