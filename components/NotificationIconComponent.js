import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class NotificationIconComponent extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={require('../assets/bell-icon-2.png')}
                    style={styles.IconContainer}
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