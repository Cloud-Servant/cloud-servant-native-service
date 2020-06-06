import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import UploadCard from './UploadCard';

const AttendAtHome = ({ navigation }) => {
    return (
        <View style={styles.HomeContainer}>
            <UploadCard style={styles.textContainer}>
                <Text>Your Agent will be Arriving Soon!!</Text>
            </UploadCard>
            <Button title="BACK" onPress={() => navigation.navigate('ServiceScreen')}></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    HomeContainer: {
        alignItems: 'center',
        marginTop: 140,
        justifyContent: 'center'
    },
    textContainer: {
        fontSize: 300,
        margin: 50,
        borderBottomColor: 'grey',
        borderColor: 'black'
    }
});

export default AttendAtHome;