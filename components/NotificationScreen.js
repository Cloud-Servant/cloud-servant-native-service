import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const HomeScreen = props => {
    return (
        <View style={styles.homeScreen}>
            <Text style={styles.textContainer}>Notification Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    homeScreen: {
        flex: 1,
        paddingTop: 20,
        alignItems: 'center',
        marginTop: 50,
        justifyContent: 'center'
    },
    textContainer:{
        fontSize: 20
    }
})

export default HomeScreen;
