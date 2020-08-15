import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import UploadCard from './UploadCard';

const CallMeScreen = ({ navigation }) => {

    const apiCallDemo = async () => {
        try {
            let response = await fetch('');
            let json = await response.json();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <View style={styles.homeScreen}>
            <View style={styles.buttonContainer}>
                <Text style={styles.CircleButtonView} onPress={() => navigation.navigate('CallMeScreen')}>Callback</Text>
                <Text style={styles.CircleButtonView1} onPress={() => navigation.navigate('AttendAtHomeScreen')}>Attend At Home</Text>
                <Text style={styles.CircleButtonView2} onPress={() => navigation.navigate('UploadScreen')}>Upload</Text>
            </View>
            <View style={styles.serviceBooking}>
                <View style={styles.serviceContainer}>
                    <Text style={styles.CircleButtonView3} onPress={() => navigation.navigate('CallMeScreen')}>Book a Service</Text>
                    <Text style={styles.CircleButtonView4} onPress={() => navigation.navigate('AttendAtHomeScreen')}>Shop My Item</Text>
                </View>
            </View>
            <View style={styles.messageContainer}>
                <Text style={styles.textContainer}>Your Request has been created with Request Number
                    <Text style={styles.innerTextContainer}> #101</Text>. 
                    Agent Will be reaching your location soon.
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    homeScreen: {
        flex: 1,
        paddingTop: 20,
        alignItems: 'center',
    },
    messageContainer: {
        textAlign: 'center',
        margin: 20,
        marginTop: 30
    },
    innerTextContainer: {
        color: 'red'
    },
    textContainer: {
        color: 'green',
        textAlign: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 7,
        backgroundColor: 'white',
        elevation: 5,
        padding: 30,
        borderRadius: 70,
        fontSize: 15,
        fontFamily: 'sans-serif-light',
        fontWeight: 'bold'
    },
    serviceBooking: {
        padding: 30,
    },
    serviceContainer: {
        flexDirection: 'row',
        alignItems: 'stretch',
        padding: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    },
    CircleButtonView: {
        width: 90,
        height: 90,
        textAlignVertical: 'center',
        textAlign: 'center',
        color: '#ffffff',
        borderRadius: 150 / 2,
        backgroundColor: '#447245'
    },
    CircleButtonView1: {
        width: 90,
        height: 90,
        textAlignVertical: 'center',
        textAlign: 'center',
        color: '#ffffff',
        borderRadius: 150 / 2,
        backgroundColor: '#c9b45b'
    },
    CircleButtonView2: {
        width: 90,
        height: 90,
        textAlignVertical: 'center',
        textAlign: 'center',
        color: '#ffffff',
        borderRadius: 150 / 2,
        backgroundColor: '#f20d07'
    },
    CircleButtonView3: {
        width: 90,
        height: 90,
        textAlignVertical: 'center',
        textAlign: 'center',
        color: '#ffffff',
        borderRadius: 150 / 2,
        backgroundColor: '#f35820'
    },
    CircleButtonView4: {
        width: 90,
        height: 90,
        textAlignVertical: 'center',
        textAlign: 'center',
        color: '#ffffff',
        borderRadius: 150 / 2,
        backgroundColor: '#baaca6' //'#2a89bd'
    }
})

export default CallMeScreen;