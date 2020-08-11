import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.homeScreen}>
            <View style={styles.buttonContainer}>
                <Text style={styles.CircleButtonView} onPress={() => navigation.navigate('CallMeScreen')}>Callback</Text>
                <Text style={styles.CircleButtonView1} onPress={() => navigation.navigate('AttendAtHomeScreen')}>Attend At Home</Text>
                <Text style={styles.CircleButtonView2} onPress={() => navigation.navigate('UploadScreen')}>Upload</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    homeScreen: {
        flex: 1,
        paddingTop: 50,
        alignItems: 'center',
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
    }

})

export default HomeScreen;
