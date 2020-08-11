import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { IconButton, Colors } from 'react-native-paper'

class NotificationIconComponent extends Component {
    render() {
        return (
            <View style={styles.container}>
                <IconButton
                    icon="bell"
                    color={Colors.black}
                    size={25}
                    onPress={() => console.log('Bell Pressed')}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    IconContainer: {
        width: 25, height: 25, marginRight: 7
    }
})
export default NotificationIconComponent;