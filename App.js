import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
 import Navscreen from './src/Navscreen';


export default class App extends Component {
  render() {
    return (
      <View style={styles.rootView}>
        <Navscreen />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  rootView: {
    height: '100%',
    width: '100%',
    backgroundColor: '#000',
    justifyContent: 'center',
  },
});