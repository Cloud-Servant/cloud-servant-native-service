import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AttendAtHome from '../components/AttendAtHome';
import NotificationIconComponent from '../components/NotificationIconComponent';


const AttendAtHomeStack = createStackNavigator();

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

export default AttendAtHomeStackDrawer;