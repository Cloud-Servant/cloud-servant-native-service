import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';

const OAuthService = () => {

    useEffect(() => {
        fetch('http://142.93.218.233:8080/oauth/token', {
            method: 'GET',
            headers: {

            }
        })
    })
    return (
        <View></View>
    );
}

const styles = StyleSheet.create({

});

export const OAuthService;