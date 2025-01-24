import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { AppStack } from "./src/navigation/AppStack";
import { AuthStack } from "./src/navigation/AuthStack";
import { screenNames } from "./src/conifg/constants";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "./src/screens/SplashScreen";

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={screenNames.SPLASH_SCREEN} component={SplashScreen} />
        <Stack.Screen name={screenNames.AUTH_STACK} component={AuthStack} />
        <Stack.Screen name={screenNames.APP_STACK} component={AppStack} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;