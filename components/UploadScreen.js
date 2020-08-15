import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { IconButton, Colors } from 'react-native-paper';
import UploadCard from './UploadCard';

const UploadScreen = ({ navigation }) => {
    return (
        <View style={styles.homeScreen}>
            <View style={styles.buttonContainer}>
                <Text style={styles.CircleButtonView} onPress={() => navigation.navigate('CallMeScreen')}>Callback</Text>
                <Text style={styles.CircleButtonView1} onPress={() => navigation.navigate('AttendAtHomeScreen')}>Attend At Home</Text>
                <Text style={styles.CircleButtonView2} onPress={() => navigation.navigate('UploadScreen')}>Upload</Text>
            </View>
            <View style={styles.fiyMessage}>
                <Text style={styles.textContainer}>Please Upload Your Request in PDF or JPEG format.
                <Text style={styles.innerTextContainer}>Max 3 files allowed per Order</Text>
                </Text>
            </View>
            <View style={styles.iconButtonContainer}>
                <IconButton
                    style={styles.cameraIconStyles}
                    icon="camera"
                    color={Colors.black}
                    size={45}
                    onPress={() => console.log('Pressed')}
                />
            </View>
            <View style={styles.iconCloudContainer}>
                <IconButton
                    style={styles.cloudIconStyles}
                    icon="cloud-upload"
                    color={Colors.black}
                    size={45}
                    onPress={() => console.log('Pressed')}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    homeScreen: {
        flex: 1,
        paddingTop: 30,
        alignItems: 'center',
    },
    iconButtonContainer: {
        margin: 20
    },
    iconCloudContainer: {
        margin: 20
    },
    cloudIconStyles: {
        flexDirection: 'row',
        marginLeft: 200
    },
    cameraIconStyles: {
        flexDirection: 'row',
        // justifyContent: 'flex-end'
        marginRight: 180
    },
    fiyMessage: {
        margin: 40
    },
    textContainer: {
        textAlign: 'center'
    },
    innerTextContainer: {
        color: 'red'
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

export default UploadScreen;