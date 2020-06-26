import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PlaceOrderScreen from '../components/PlaceOrderScreen';
import NotificationIconComponent from '../components/NotificationIconComponent';

const PlaceOrderStack = createStackNavigator();

const PlaceOrderStackDrawer = () => {
    return (
        <PlaceOrderStack.Navigator>
            <PlaceOrderStack.Screen name="PlaceOrder" component={PlaceOrderScreen} options={({ navigation }) => ({
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

export default PlaceOrderStackDrawer;