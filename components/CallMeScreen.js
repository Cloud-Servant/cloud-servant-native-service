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
        <View style={styles.CallMeContainer}>
            <UploadCard style={styles.textContainer}>
                <Text>Your Request has been accepted, you will receive call from the agent</Text>
            </UploadCard>
            <Button title="BACK" onPress={() => navigation.navigate('PlaceOrderScreen')} ></Button>
        </View>
    );
};

const styles = StyleSheet.create({
    CallMeContainer: {
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
})

export default CallMeScreen;