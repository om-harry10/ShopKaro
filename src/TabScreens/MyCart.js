import React, { Component } from 'react';
import { Text, View } from 'react-native';
import HeaderCommon from '../Header';
export default class MyCart extends Component {
    render() {
        return (
            <View>
                <HeaderCommon nav={this.props.navigation}/>
                <Text> These items are in your Cart </Text>
            </View>
        )
    }
}