import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import UploadScreen from '../components/UploadScreen';
import NotificationIconComponent from '../components/NotificationIconComponent';

const UploadStack = createStackNavigator();

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

export default UploadStackDrawer;
