import React, { Component } from 'react';
import {  Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ToastAndroid, ImageBackground,Keyboard, SafeAreaView, Dimensions} from 'react-native';
    import {Input} from 'react-native-elements';
    import database from '@react-native-firebase/database';
import { ScrollView } from 'react-native-gesture-handler';
import  AsyncStorage  from "@react-native-community/async-storage";

    const USERNAME = 'abc';
    const PASSWORD = '123';


export default class Form extends Component {
    state = {
        fName: '',
        pwd: '',
      };
    
  signIn() {
    const {fName, pwd} = this.state;
    if (fName === '' || pwd === '') {
      Alert.alert('Fill up the field(s)');
      }
     else {
      database().ref('accounts/').on('child_added',snapshot=>{
        // console.log(snapshot);
        if(snapshot.val().a_email=== fName && snapshot.val().a_password=== pwd){
          AsyncStorage.setItem("username", fName);
          ToastAndroid.show('logIn successful', ToastAndroid.SHORT);
          this.props.navigation.navigate('Drawer');
        }
        else {
          ToastAndroid.show('failed to login', ToastAndroid.SHORT);
          this.setState({fName:'', pwd:''});
          Keyboard.dismiss();
       } });
    }
  }


    render() {
        return (
            <SafeAreaView style={formStyles.container} >
            <ScrollView style={{height:'100%', width:'100%',}}>
            <ImageBackground source={require('./images/i1.jpeg')} style={formStyles.image}>
            <View style={{height:'100%', width:'100%',margin:0}}>
              <Text style={formStyles.text}>Welcome !</Text>
            <Input
              labelStyle={{color:'white'}}
              inputStyle={{color:'white',}}
              placeholderTextColor='#fff'
              label=" Enter your Username or Email id"           
              value={this.state.fName}
              placeholder="Username"
              onChangeText={name => this.setState({fName: name})}
              textContentType="name"
              keyboardType="default"
              leftIcon={{
                name: 'user-circle',
                type: 'font-awesome',
                color: '#7fff00',
              }}
            />
            <Input
               labelStyle={{color:'white'}}
              label=" Enter your password"
              inputStyle={{color:'white',}}
              value={this.state.pwd}
              placeholder="Password"
              placeholderTextColor='#fff'
              onChangeText={psd => this.setState({pwd: psd})}
              textContentType="password"
              keyboardType="default"
              secureTextEntry={true}
              leftIcon={{
                name: 'key',
                type: 'font-awesome',
                color: '#7fff00',
              }}
            />
            <TouchableOpacity
              style={formStyles.formButton1}
              onPress={this.signIn.bind(this)}
              >
              <Text style={formStyles.buttonText1}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={formStyles.formButton2}
            onPress={()=>this.props.navigation.navigate('signuppage')}
              >
            <Text style={formStyles.buttonText2}>Don't have Account?Sign Up</Text>
            </TouchableOpacity>
            </View>
            </ImageBackground>
            </ScrollView>
          </SafeAreaView>
        );
    }
}

const formStyles = StyleSheet.create({
  image:{
    height:Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
    justifyContent:'center',
    
  },
  container: {
    height:'100%', 
    width:'100%',
    alignItems:'center',
    justifyContent: 'center',
  },
    formButton1: {
      width: '60%',
      justifyContent: 'center',
      backgroundColor: 'blue',
      marginLeft:70,
      height: '6%',
    },
    formButton2: {
      marginLeft:70,
      marginTop:10,
      width: '60%',
      justifyContent: 'center',
      backgroundColor: 'blue',
      height: '6%',
    },
    buttonText1: {
      color: 'white',
      fontSize: 15,
      
      alignSelf: 'center',
    },
    buttonText2: {
      color: 'white',
      fontSize: 15,
      
      alignSelf: 'center',
    },
    text:{
      fontSize: 50,
      
      fontWeight:'bold',
      color: 'yellow',
      marginLeft:100,
      marginBottom:20,
    }
  });
  