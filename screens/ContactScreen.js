import React, {Component} from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Button
} from 'react-native';


export default class ContactScreen extends Component{
    static navigationOptions = {
        title: 'Contact'
    }
    render(){
        return (<View><Text>I'm a contact tab</Text></View>)
    }

}