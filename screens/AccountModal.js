import React, { Component } from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import AccountDetailsModal from './AccountDetailsModal';

export default class AccountModal extends Component {
    state = {
        isVisible: false
    };

    _toggleModal = () =>
        this.setState({ isVisible: !this.state.isVisible });

    render() {
        return (
            <View>
                <TouchableOpacity onPress={this._toggleModal}>
                    <Text style={styles.title}> Add An Account</Text>
                </TouchableOpacity>
                <Modal isVisible={this.state.isVisible}>
                    <View style={{ flex: 1 }}>
                        <AccountDetailsModal isVisible={this.state.isVisible} style={styles.modal}/>
                        <TouchableOpacity onPress={this._toggleModal}>
                            <Text style={styles.cancel}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </View>
        );
    }
}

const styles= StyleSheet.create({
    title: {
    color: 'green',
    fontSize: 18, 
    textAlign: 'center'
    },

    cancel:{
    color: 'white',
    },
    
    modal: {
        justifyContent: 'flex-end'
    }
});