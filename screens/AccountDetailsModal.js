import React, { Component } from "react";
import { Text, TextInput, TouchableOpacity, View, StyleSheet, KeyboardAvoidingView } from "react-native";
import Modal from "react-native-modal";


export default class AccountDetailsModal extends Component {
    accountConfirmation = () => {
        alert("I've been confirmed!");
    }

    render(){
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <View>
                    <TouchableOpacity onPress={this.accountConfirmation}>
                        <Text style={styles.account}>Add An Account</Text>
                    <TextInput placeholder={"Account Name"} editable={true} style={styles.input} />
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 300,
    },

    account:{
        padding: 15,
        fontSize: 15,
        color: 'green'
    },
    
    input:{
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 5,
        padding: 6
    }
})