/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';
import Home from './Home.js';
import Charities from './Charities.js';

export default class App extends Component {
  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>
          <View style={styles.header}>
            <Image 
              source={{ uri: 'https://cdn-images-1.medium.com/max/1600/1*ypyKHfdnTbM-DZG-nZ5tRg.png' }} 
              style={{width: 128, height: 20}}
            />
          </View>
          
          <Route exact path="/" component={Home} />
          <Route path="/charties" component={Charities} />
        </View>
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 20,
    height: 60,
    justifyContent: 'center', 
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'blue',
  },

  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F5FCFF',
  }
});
