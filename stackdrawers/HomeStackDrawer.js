import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../components/HomeScreen';
import CloudServantDrawer from '../components/CloudServantDrawer';
import NotificationIconComponent from '../components/NotificationIconComponent';

const HomeStack = createStackNavigator();

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

export default HomeStackDrawer; 