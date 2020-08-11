import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ServiceScreen from '../components/ServiceScreen';
import CloudServantDrawer from '../components/CloudServantDrawer';
import NotificationIconComponent from '../components/NotificationIconComponent';

const ServiceStack = createStackNavigator();

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

export default ServiceStackDrawer; 