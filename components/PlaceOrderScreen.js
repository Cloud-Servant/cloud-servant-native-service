import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import UploadCard from './UploadCard';
import { TextInput } from 'react-native-gesture-handler';
import t from 'tcomb-form-native'; // 0.6.9

const Form = t.form.Form;

const UserData = t.struct({
    title: t.String,
    orderbrief: t.String
});

const PlaceOrderScreen = ({ navigation }) => {
    return (
        <View style={styles.screen}>
            <View style={styles.formContainer}>
                <UploadCard style={styles.inputContainer}>
                    <View style={styles.textInputContainer}>
                        <TextInput placeholder="Enter the title of order" />
                    </View>
                    <View style={styles.textInputContainer}>
                        <TextInput placeholder="Description" multiline={true} numberOfLines={5} />
                    </View>
                </UploadCard>
            </View>
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button title="BACK" onPress={() => navigation.navigate('ServiceScreen')}></Button>
                </View>
                <View style={styles.button}>
                    <Button title="SUBMIT" onPress={() => { }}></Button>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    OrderContainer: { padding: 10, flexDirection: 'column', justifyContent: 'space-between', marginTop: 20},
    screen: { padding: 20, flex: 1, alignItems: 'center', marginTop: 10 },
    inputContainer: { width: 400, maxWidth: '80%', alignItems: 'center', justifyContent: 'space-between', margin: 30, height: 200, },
    buttonContainer: {
        flexDirection: 'row', width: '80%', justifyContent: 'space-between'
    },
    button: { width: 100 },
    formContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginTop: 10
    },
    textInputContainer: {
        textAlignVertical: 'top'
    }
});

export default PlaceOrderScreen;