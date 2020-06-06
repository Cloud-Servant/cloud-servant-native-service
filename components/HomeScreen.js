import React, { Component } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import ServiceScreen from './ServiceScreen';
import { createStackNavigator } from 'react-navigation-stack';
import CloudServantDrawer from './CloudServantDrawer';
import { createAppContainer } from 'react-navigation';
import UploadCard from './UploadCard';
import { NavigationContainer, StackActions } from '@react-navigation/native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.homeScreen}>
            <UploadCard style={styles.homeCard}>
                <View style={styles.buttonContainer}>
                    <Button title="REQUEST" onPress={() => navigation.navigate('ServiceScreen')}></Button>
                    <Button title="ORDER" onPress={() => { }}></Button>
                </View>
            </UploadCard>
        </View>
    )
}

const styles = StyleSheet.create({
    homeCard: {
        width: 300, maxWidth: '80%', height: '50%', alignItems: 'center', justifyContent: 'space-around'
    },
    homeScreen: {
        flex: 1,
        paddingTop: 20,
        alignItems: 'center',
        marginTop: 10,
        justifyContent: 'center'
    },
    textContainer: {
        fontSize: 20
    },
    buttonContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: 180,
        height: 180,
    }
})

export default HomeScreen;
