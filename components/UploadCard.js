import React from 'react';
import { View, StyleSheet } from 'react-native';


const UploadCard = props => {
    return <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
}

const styles = StyleSheet.create({
    card: { shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowRadius: 7, backgroundColor: 'white', elevation: 5, padding: 30, borderRadius: 20 }
})
export default UploadCard;