import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import UploadCard from './UploadCard';

const ServiceScreen = ({ navigation }) => {
    return (
        <View style={styles.homeScreen}>
            <Text style={styles.textContainer}>Types of Requests</Text>
            <UploadCard style={styles.homeContainer}>
                <View style={styles.buttonContainer}>
                    <Button title="CALL ME" onPress={() => navigation.navigate('CallMeScreen')}></Button>
                    <Button title="UPLOAD" onPress={() => navigation.navigate('UploadScreen')}></Button>
                    <Button title="PLACE ORDER" onPress={() => navigation.navigate('PlaceOrderScreen')}></Button>
                    <Button title="ATTEND AT HOME" onPress={() => navigation.navigate('AttendAtHomeScreen')}></Button>
                </View>
            </UploadCard>
        </View>
    );
};

const styles = StyleSheet.create({
    homeContainer: {
        width: 300, maxWidth: '80%', alignItems: 'center'
    },
    homeScreen: {
        flex: 1,
        paddingTop: 10,
        alignItems: 'center',
        marginTop: 50,
        justifyContent: 'center'
    },
    textContainer: {
        fontSize: 20,
    },
    buttonContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: 200,
        height: 200,
        marginVertical: 50,
        marginTop: 50
    }
})

export default ServiceScreen;