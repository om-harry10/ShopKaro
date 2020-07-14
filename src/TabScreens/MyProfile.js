import React, { Component } from 'react';
import { Text, View } from 'react-native';
import HeaderCommon from '../Header';
import database from '@react-native-firebase/database'; 

export default class MyProfile extends Component {

    componentDidMount(){
        database().ref('accounts').on('value',snapshot=>{
            
            const data=[];
            data.push(snapshot.val());
            
            this.setState({
                list:data,
                loading:false
            })
            // console.log(this.state.list);
        })
}

    render() {
        return (
            <View>
                <HeaderCommon nav={this.props.navigation}/>
                <Text></Text>
            </View>
        )
    }
}