import React, { Component } from 'react'
import { Text, View } from 'react-native'
import HeaderCommon from '../Header';

export default class Settings extends Component {
    render() {
        return (
            <View>
                <HeaderCommon nav={this.props.navigation}/>
                <Text> textInComponent </Text>
            </View>
        )
    }
}
