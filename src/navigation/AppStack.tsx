import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/HomeTabScreens/home';
import Profile from '../screens/ProfileTabScreens/profile';
import CreateRequest from '../screens/HomeTabScreens/createRequest';
import ConfirmRequest from '../screens/HomeTabScreens/confirmRequest';
import PaymentHistory from '../screens/ProfileTabScreens/paymentHistory';
import Support from '../screens/ProfileTabScreens/support';
import InviteFriends from '../screens/ProfileTabScreens/inviteFriends';
import RequestHistory from '../screens/HistoryTabScreens/requestHistory';
import RequestDetail from '../screens/HistoryTabScreens/requestDetail';
import { screenNames } from '../conifg/constants';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


// Stack navigator for Home
function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={screenNames.HOME_SCREEN} component={Home} />
      <Stack.Screen name={screenNames.CREATE_REQUEST_SCREEN} component={CreateRequest} />
      <Stack.Screen name={screenNames.CONFIRM_REQUEST_SCREEN} component={ConfirmRequest} />
    </Stack.Navigator>
  );
}

// Stack navigator for History
function HistoryStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={screenNames.HISTORY_SCREEN} component={RequestHistory} />
      <Stack.Screen name={screenNames.REQUEST_DETAIL_SCREEN} component={RequestDetail} />
    </Stack.Navigator>
  );
}

// Stack navigator for Profile
function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={screenNames.PROFILE_SCREEN} component={Profile} />
      <Stack.Screen name={screenNames.PAYMENT_HISTORY_SCREEN} component={PaymentHistory} />
      <Stack.Screen name={screenNames.SUPPORT_SCREEN} component={Support} />
      <Stack.Screen name={screenNames.INVITE_SCREEN} component={InviteFriends} />
    </Stack.Navigator>
  );
}

// Main Tab Navigator
export const  AppStack = () => {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false
    }}>
      <Tab.Screen
        options={{
          title: "HOME"
        }}
        name={screenNames.HOME_TAB_SCREEN}
        component={HomeStack}
      />
      <Tab.Screen
        options={{
          title: "HISTORY"
        }}
        name={screenNames.HISTORY_TAB_SCREEN}
        component={HistoryStack}
      />
      <Tab.Screen
        options={{
          title: "PROFILE"
        }}
        name={screenNames.PROFILE_TAB_SCREEN}
        component={ProfileStack}
      />
    </Tab.Navigator>
  );
}


