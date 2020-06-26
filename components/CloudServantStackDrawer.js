import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeStackDrawer from '../stackdrawers/HomeStackDrawer';
import ServiceStackDrawer from '../stackdrawers/ServiceStackDrawer';
import AttendAtHomeStackDrawer from '../stackdrawers/AttendAtHomeStackDrawer';
import PlaceOrderStackDrawer from '../stackdrawers/PlaceOrderStackDrawer';
import UploadStackDrawer from '../stackdrawers/UploadStackDrawer';
import CallMeScreenStackDrawer from '../stackdrawers/CallMeScreenStackDrawer';
import NotificationScreenStackDrawer from '../stackdrawers/NotificationScreenStackDrawer';



const AppDrawer = () => {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="HomeScreen">
        <Drawer.Screen name="HomeScreen" component={HomeStackDrawer} />
        <Drawer.Screen name="CallMeScreen" component={CallMeScreenStackDrawer} />
        <Drawer.Screen name="NotificationScreen" component={NotificationScreenStackDrawer} />
        <Drawer.Screen name="ServiceScreen" component={ServiceStackDrawer} />
        <Drawer.Screen name="AttendAtHomeScreen" component={AttendAtHomeStackDrawer} />
        <Drawer.Screen name="UploadScreen" component={UploadStackDrawer} />
        <Drawer.Screen name="PlaceOrderScreen" component={PlaceOrderStackDrawer} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default AppDrawer;