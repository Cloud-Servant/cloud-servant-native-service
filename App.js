import React from 'react';
import { createAppContainer, StackActions } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import NotificationScreen from './components/NotificationScreen';
import ServiceScreen from './components/ServiceScreen';
import CloudServantDrawer from './components/CloudServantDrawer';
import CallMeScreen from './components/CallMeScreen';
import UploadScreen from './components/UploadScreen';
import PlaceOrderScreen from './components/PlaceOrderScreen';
import NotificationIconComponent from './components/NotificationIconComponent';
import AttendAtHome from './components/AttendAtHome';
import { NavigationContainer } from '@react-navigation/native';

const HomeStack = createStackNavigator();
const ServiceStack = createStackNavigator();
const AttendAtHomeStack = createStackNavigator();
const PlaceOrderStack = createStackNavigator();
const UploadStack = createStackNavigator();
const CallMeScreenStack = createStackNavigator();
const NotificationScreenStack = createStackNavigator();
/*
({ navigation }) => ({
      title: 'Service',
      headerLeft: () => <CloudServantDrawer navigationProps={navigation} />,
      headerRight: () => <NotificationIconComponent navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF4136',
      },
    }),
*/
const HomeStackDrawer = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen}
        options={({ navigation }) => ({
          title: 'Home',
          headerLeft: () => <CloudServantDrawer navigationProps={navigation} />,
          headerRight: () => <NotificationIconComponent navigationProps={navigation} />,
          headerStyle: {
            backgroundColor: '#ffffff',
          },
        })}
      ></HomeStack.Screen>
    </HomeStack.Navigator>
  );
}

const ServiceStackDrawer = () => {
  return (
    <ServiceStack.Navigator>
      <ServiceStack.Screen name="ServiceScreen" component={ServiceScreen} options={({ navigation }) => ({
        title: 'Service',
        headerLeft: () => <CloudServantDrawer navigationProps={navigation} />,
        headerRight: () => <NotificationIconComponent navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#ffffff',
        },
      })}>
      </ServiceStack.Screen>
    </ServiceStack.Navigator>
  );
}

const AttendAtHomeStackDrawer = () => {
  return (
    <AttendAtHomeStack.Navigator>
      <AttendAtHomeStack.Screen name="AttendAtHome" component={AttendAtHome} options={({ navigation }) => ({
        title: 'Attend At Home',
        headerStyle: {
          backgroundColor: '#ffffff',
        },
        headerRight: () => <NotificationIconComponent navigationProps={navigation} />,
      })}>
      </AttendAtHomeStack.Screen>
    </AttendAtHomeStack.Navigator>
  );
}

const PlaceOrderStackDrawer = () => {
  return (
    <PlaceOrderStack.Navigator>
      <PlaceOrderStack.Screen name="AttendAtHome" component={AttendAtHome} options={({ navigation }) => ({
        title: 'Place Order',
        headerStyle: {
          backgroundColor: '#ffffff',
        },
        headerRight: () => <NotificationIconComponent navigationProps={navigation} />,
      })}>
      </PlaceOrderStack.Screen>
    </PlaceOrderStack.Navigator>
  );
}

const UploadStackDrawer = () => {
  return (
    <UploadStack.Navigator>
      <UploadStack.Screen name="Upload Screen" component={UploadScreen} options={({ navigation }) => ({
        title: 'Upload',
        headerStyle: {
          backgroundColor: '#ffffff',
        },
        headerRight: () => <NotificationIconComponent navigationProps={navigation} />,
      })}>
      </UploadStack.Screen>
    </UploadStack.Navigator>
  );
}

const CallMeScreenStackDrawer = () => {
  return (
    <CallMeScreenStack.Navigator>
      <CallMeScreenStack.Screen name="Call Me Screen" component={CallMeScreen} options={({ navigation }) => ({
        title: 'Call Me Screen',
        headerStyle: {
          backgroundColor: '#ffffff',
        },
        headerRight: () => <NotificationIconComponent navigationProps={navigation} />,
      })}>
      </CallMeScreenStack.Screen>
    </CallMeScreenStack.Navigator>
  );
}

const NotificationScreenStackDrawer = () => {
  return (
    <NotificationScreenStack.Navigator>
      <NotificationScreenStack.Screen name="Notification Screen" component={NotificationScreen} options={({ navigation }) => ({
        title: 'Notification Screen',
        headerStyle: {
          backgroundColor: '#ffffff',
        },
        headerRight: () => <NotificationIconComponent navigationProps={navigation} />,
      })}>
      </NotificationScreenStack.Screen>
    </NotificationScreenStack.Navigator>
  );
}
function App() {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStackDrawer} />
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
export default App;