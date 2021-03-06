/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import FBSDK, { LoginManager } from 'react-native-fbsdk'

export default class App extends Component {

_fbAuth(){
  LoginManager.logInWithReadPermissions(['public_profile']).them(function(result) {
    if (result.isCancelled) {
      console.log('Login was cancelled');
    }else {
      console.log('Login was successful');
    }
  })

}

  render() {
    return (
      <View style={styles.container}>
       <TouchableOpacity onPress={this._fbAuth()}>
       </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
