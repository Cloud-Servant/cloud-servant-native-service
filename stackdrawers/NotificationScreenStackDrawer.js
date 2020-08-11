import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NotificationScreen from '../components/NotificationScreen';
import NotificationIconComponent from '../components/NotificationIconComponent';

const NotificationScreenStack = createStackNavigator();

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

export default NotificationScreenStackDrawer;