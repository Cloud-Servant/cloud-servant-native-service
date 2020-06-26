import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CallMeScreen from '../components/CallMeScreen';
import NotificationIconComponent from '../components/NotificationIconComponent';

const CallMeScreenStack = createStackNavigator();

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

export default CallMeScreenStackDrawer;