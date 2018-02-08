import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';

export default class Home extends Component {
    goToCharitiesPage() {

    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to Donation app!
                </Text>
                <Button title="Donate now" onPress={this.goToCharitiesPage}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        backgroundColor: '#005ad7'
    }
});