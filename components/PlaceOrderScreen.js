import React, { useState } from 'react';
import { View, StyleSheet, Button, Text, TextInput, Dimensions, Platform, TouchableOpacity, ScrollView, ActivityIndicator, Image, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { IconButton, Colors } from 'react-native-paper';
// import Spinner from 'react-native-spinkit';
// import Spinner from 'react-native-spinkit';
// import Spinner from 'react-native-spinkit';
// import { CubeGrid } from 'styled-loaders-react';
// import Spinner from 'react-native-spinkit';
// import AnimatedLoader from 'react-native-animated-loader';
import LottieView from 'lottie-react-native';

const { width: WIDTH } = Dimensions.get('window');

const PlaceOrderScreen = ({ navigation }) => {
    const [order, setOrder] = useState('');
    const [metrics, setMetrics] = useState([]);
    const [ismetricLoader, setMetricLoader] = useState(false);
    const [quantity, setQuantity] = useState(0);
    const [itemDisplay, setItemDisplaying] = useState(false);

    const metricPredictor = () => {
        // console.log('order',order)
        // metrics = []

        const orderTracker = [];
        if (!order) {
            // setMetrics(['fuckoff'])
            alert('Please Enter the Order First')
            setMetricLoader(false)
        }
        // console.log('Order ', order);
        // console.log('Metrics', metrics)
        if (order.length === 1) {
            console.log('Hi');
            setMetricLoader(false);
        }

        orderTracker.push(order);
        if (
            order.search(/rice/i) >= 0 ||
            order.search(/basmati/i) >= 0 ||
            (order.search(/brown/i) >= 0 && order.includes('rice')) ||
            order.search(/biryani/i) >= 0 ||
            order.search(/sona/i) >= 0 || order.search(/ravva/i) >= 0 ||
            order.search(/pindi/i) >= 0 ||
            order.search(/maida/i) >= 0
        ) {
            // return metrics.push(['kgs', 'gms']);
            // console.log(order)
            setMetrics(['kgs', 'gms']);
            setMetricLoader(true);
        }

        if (order.search(/bread/i) >= 0) {
            setMetrics(['pkts'])
            setMetricLoader(true);
        }
        if (order.search(/milk/i) >= 0) {
            // console.log('milk', order)
            setMetrics(['lts', 'mls']);
            setMetricLoader(true);
        }

        if (order.search(/eggs/i) >= 0 || order.search(/egg/i) >= 0) {
            setMetrics(['dzns']);
            setMetricLoader(true);
        }

        /*else {
            alert('Please Enter Right Order')
        }*/
        // return metrics;
    }

    const metricNumPredictor = () => {
        if (!quantity) {
            alert('Please Enter Your Desired Quantity');
            setMetricLoader(false);
        }

        // console.log(quantity);
        if (metrics[0] === 'kgs' && quantity < 1000) {
            // console.log('Quantity Less');
            setMetrics(['gms']);
        }

        // console.log('cool metrics', metrics[0])
        if (metrics[0] === 'kgs' && quantity >= 1000) {
            console.log('Quantity Cool');
            setMetrics(['kgs']);
        }

        if (metrics[0] === 'lts' && quantity < 1000) {
            // console.log('Quantity Less');
            setMetrics(['mls']);
        }

        if (metrics[0] === 'lts' && quantity >= 1000) {
            // console.log('Quantity Less');
            setMetrics(['lts']);
        }
    }

    const itemDisplayer = () => {
        if (!order || !quantity || quantity < 0) {
            alert('Please Enter the Order and Quantity to place an Order');
            setMetricLoader(false);
        }
        // console.log('Im here');
        setItemDisplaying(true);
        // console.log(itemDisplay);
    }

    return (
        <ScrollView>
            <View style={styles.homeScreen}>
                <View style={styles.buttonContainer}>
                    <Text style={styles.CircleButtonView} onPress={() => navigation.navigate('CallMeScreen')}>Callback</Text>
                    <Text style={styles.CircleButtonView1} onPress={() => navigation.navigate('AttendAtHomeScreen')}>Attend At Home</Text>
                    <Text style={styles.CircleButtonView2} onPress={() => navigation.navigate('UploadScreen')}>Upload</Text>
                </View>
                <View style={styles.placeOrder}>
                    <TextInput
                        style={styles.textInput}
                        placeholder={'Enter Your Order'}
                        placeholderTextColor='green'
                        underlineColorAndroid='transparent'
                        keyboardAppearance={'dark'}
                        onChangeText={(userOrder) => {
                            if (userOrder.length === 0) {
                                console.log('Rice Order');
                                setOrder('');
                                metricPredictor();
                            }
                            else setOrder(userOrder)
                        }}
                        onEndEditing={metricPredictor}
                        blurOnSubmit={true}
                    />
                    <View style={styles.metricsD}>
                        <TextInput
                            style={styles.metricsAnalyzer}
                            placeholder={'quantity'}
                            placeholderTextColor='green'
                            underlineColorAndroid='transparent'
                            keyboardAppearance='dark'
                            keyboardType={'number-pad'}
                            blurOnSubmit={true}
                            editable={true}
                            onChangeText={(userQuantity) => setQuantity(userQuantity)}
                            onEndEditing={metricNumPredictor}
                        />
                        {ismetricLoader ?
                            <TextInput
                                style={styles.metrics}
                                placeholder={
                                    metrics.length > 1 ?
                                        metrics[0] : metrics[0]
                                }
                                onChangeText={(userMetric) => setMetrics(userMetric)}
                                placeholderTextColor='green'
                                underlineColorAndroid='transparent'
                                editable={true}
                            /> :
                            <View style={styles.balanceMetrics}>
                                <Image
                                    source={{ uri: 'https://i.pinimg.com/originals/2a/c2/6a/2ac26a16de4b80e721206632fbd055e5.gif' }}
                                    style={{
                                        width: 30,
                                        height: 30
                                    }}
                                />
                            </View>
                        }
                    </View>
                    <IconButton
                        icon="plus"
                        color={Colors.green500}
                        size={35}
                        onPress={itemDisplayer}
                    />
                </View>
                <View style={styles.button}>
                    <Button title="PLACE ORDER" color="green"></Button>
                </View>
                {
                    itemDisplay ?
                        <View style={styles.orderDisplayer}>
                            <Text style={styles.orderText}>{order}{' '}{' - '}{quantity}{' - '}{metrics[0]}</Text>
                        </View>
                        :
                        null
                }
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    homeScreen: {
        flex: 1,
        paddingTop: 10,
        alignItems: 'center',
    },
    orderDisplayer: {
        marginTop: 100,
    },
    orderText: {
        fontWeight: 'bold',
        fontSize: 20
    },
    balanceMetrics: {

    },
    button: {
        width: '90%',
        borderRadius: 50,
    },
    icon: {
        marginHorizontal: 10
    },
    lottie: { width: 100, height: 100, },
    metricsD: {
        flexDirection: 'row',
        alignItems: 'center'

    },
    orderViewer: {
        flex: 2,
        alignItems: 'center',
        marginTop: 30
    },
    metrics: {
        width: WIDTH - 800,
        height: 45,
        fontSize: 10,
        backgroundColor: 'white',
        borderRadius: 5,
        color: '#70be2b',
        textAlign: 'center'
    },
    metricsAnalyzer: {
        width: WIDTH - 800,
        height: 45,
        borderBottomColor: 'red',
        borderColor: 'red',
        borderRadius: 5,
        borderEndColor: 'red',
        borderColor: '#85d711',
        fontSize: 16,
        backgroundColor: 'white',
        color: '#70be2b',
        textAlign: 'center'
    },

    placeOrder: {
        margin: 10,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderColor: 'red',
    },
    textInput: {
        width: WIDTH - 170,
        height: 45,
        borderRadius: 5,
        fontSize: 16,
        paddingLeft: 35,
        backgroundColor: 'white',
        color: '#70be2b',
        borderColor: '#fff',
        marginHorizontal: 20
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

});

export default PlaceOrderScreen;