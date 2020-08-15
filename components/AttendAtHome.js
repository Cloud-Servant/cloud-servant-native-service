import React from 'react';
import { View, StyleSheet, Text, Button, Image } from 'react-native';
import UploadCard from './UploadCard';

const AttendAtHome = ({ navigation }) => {
    return (
        /*<View style={styles.HomeContainer}>
            <UploadCard style={styles.textContainer}>
                <Text>Your Agent will be Arriving Soon!!</Text>
            </UploadCard>
            <Button title="BACK" onPress={() => navigation.navigate('PlaceOrderScreen')}></Button>
            https://i.pinimg.com/originals/51/ce/e6/51cee67564790d275cac21c4b754d8bb.gif
        </View>*/
        <View style={styles.attendAtHomeContainer}>
            <Image 
                source={{
                    uri: 'https://cdn.dribbble.com/users/1226927/screenshots/3934449/ph_dribbble.gif'
                }}
                style={{
                    width: 100,
                    height: 150
                }}
            />
            <View style={styles.messageContainer}>
                <Text style={styles.textContainer}>Agent will be at
                    <Text style={styles.innerTextContainer}> Your</Text>.
                    Service in no time.
                </Text>
            </View>

            <Button></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    attendAtHomeContainer: {
        flex: 1,
        paddingTop: 40,
        padding: 2,
        alignItems: 'center',
        backgroundColor: 'white'
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
        textAlign: 'center',
        shadowRadius: 7,
        backgroundColor: '#baaca6',
        elevation: 50,
        padding: 30,
        fontSize: 20,
        fontFamily: 'sans-serif-light',
    }
});

export default AttendAtHome;