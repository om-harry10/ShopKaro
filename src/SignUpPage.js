import React, {Component} from 'react';
import { Text, View, TouchableOpacity,StyleSheet, Alert, ImageBackground, Dimensions } from 'react-native';
import {Input} from 'react-native-elements';
import database from '@react-native-firebase/database';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

const nameRegEx= RegExp(/^[a-zA-Z]+\s[a-zA-Z]+$/);
const emailRegEx= RegExp(/^[a-zA-Z0-9\.!#$%&’*+/=?^_`{|}~-]+@gmail.com$/);
//const pwdRegEx= RegExp(/^[a-zA-Z0-9\.!#$%&’*+/=?^_`{|}~-@]+/)

class SignUp extends Component{
   constructor(props){
       super(props);
       this.state={
        fName: '',
        fNameError: '',
        email: '',
        emailError: '',
        pwd: '',
        pwdError: '',
        cpwd: '',
        mob:'',
    };
   }

    
   registration(){
      const{fName,email,pwd,cpwd,mob}= this.state;
      if(fName==="" || email==="" || pwd==="" || cpwd==="" || mob===""){
        if(!(fName==="")){
            if(!(nameRegEx.test(fName))){
              this.setState({fNameError:"Name should be only Alphabetical"})
            }else{
              this.setState({fNameError:""})
            }
            }else{
              this.setState({fNameError:"Name cannot be empty"})
            }
        if(!(email==="")){
              if(!(emailRegEx.test(email))){
                this.setState({emailError:"Please Enter valid email id"})
              }else{
                this.setState({emailError:""})
              }
            }else{
            this.setState({emailError:"Email id cannot be empty"})
            }
          
          // if(!(pwd==="")){
          //       if(!(pwdRegEx.test(pwd))){
          //         this.setState({pwdError:"Please Enter valid email id"})
          //       }else{
          //         this.setState({pwdError:""})
          //       }
          //     }else{
          //     this.setState({pwdError:"Email id cannot be empty"});
          //     }
      }
  
  else{
    
      console.log("Fname:"+ fName, "email:"+ email, "passwd:"+ pwd);
      database().ref('accounts/a'+ (Math.floor(Math.random()*100)+1)).set({
        a_name: fName,
        a_email: email,
        a_password: pwd,
        a_mobile: mob,
      }).then(()=> {
        Alert.alert("Registration Successful");
        this.props.navigation.navigate('Form');
    })
      .catch((err)=>console.log(err));
   }
   }
  
    render(){
    return(
        <SafeAreaView style={{height:'100%', width:'100%', justifyContent:'center'}}>
        <ScrollView style={{height:'100%', width:'100%'}}>
          <ImageBackground source={require('./images/i2.jpg')} style={styles.image}>
          <View style={{height:'100%', width:'100%',margin:20}}>
            <Input
            labelStyle={{color:'white'}}
              label=" Enter your full name"
              inputStyle={{color:'white'}}
              value={this.state.fName}
              placeholder="Full Name"
              
              placeholderTextColor='#fffacd'
              onChangeText={name => this.setState({fName: name})}
              textContentType="name"
              keyboardType="default"
              leftIcon={{
                name: 'user-circle',
                type: 'font-awesome',
                color: '#00ffff',
              }}
            />
            <Text style={{color:'yellow', marginLeft:20, fontSize:20}}>{this.state.fNameError}</Text>
            <Input
              labelStyle={{color:'white', marginTop: 10,}}
              label=" Enter your EmailId"
              inputStyle={{color:'white',}}
              value={this.state.email}
              placeholder="abc@gmail.com"
              
              
              placeholderTextColor='#fffacd'
              onChangeText={emailid => this.setState({email: emailid})}
              textContentType="emailAddress"
              keyboardType="email-address"
              leftIcon={{
                name: 'envelope',
                type: 'font-awesome',
                color: '#00ffff',
              }}
            />
            <Text style={{color:'yellow', marginLeft:20, fontSize:20}}>{this.state.emailError}</Text>
            <Input
            labelStyle={{color:'white', marginTop: 10,}}
              label=" Enter your password"
              inputStyle={{color:'white'}}
              value={this.state.pwd}
              placeholder="Password"
              
              
              placeholderTextColor='#fffacd'
            
              onChangeText={psd => this.setState({pwd: psd})}
              textContentType="password"
              keyboardType='numeric'
              secureTextEntry={true}
              maxLength={6}
              leftIcon={{
                name: 'key',
                type: 'font-awesome',
                color: '#00ffff',
              }}
            />
            <Input
              labelStyle={{color:'white', marginTop: 10,}}
              label=" Confirm password"
              inputStyle={{color:'white',}}
              value={this.state.cpwd}
              placeholder="Password"
              
              
              placeholderTextColor='#fffacd'
              onChangeText={cpsd => this.setState({cpwd: cpsd})}
              textContentType="password"
              keyboardType="numeric"
              maxLength={6}
              secureTextEntry={true}
              leftIcon={{
                name: 'key',
                type: 'font-awesome',
                color: '#00ffff',
              }}
            />
             <Input
              labelStyle={{color:'white',marginTop: 10,}}
              label=" Enter your Mobile Number"
              inputStyle={{color:'white',}}
              value={this.state.mob}
              placeholder="Mobile Number"
              
              
              placeholderTextColor='#fffacd'
              onChangeText={mob => this.setState({mob: mob})}
              textContentType="telephoneNumber"
              keyboardType="numeric"
              leftIcon={{
                name: 'mobile',
                type: 'font-awesome',
                size:35,
                color: '#00ffff',
              }}
            />
            <TouchableOpacity 
                style={styles.formButton}
                onPress={()=>this.registration()}>
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
            </View>
            </ImageBackground>
            </ScrollView>
        </SafeAreaView>
    );
}
}

export default SignUp;
const styles = StyleSheet.create({
  image:{
    height:Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
    
    resizeMode:'contain',
  },
    formButton: {
        width:'65%',
        justifyContent: 'center',
        backgroundColor: 'blue',
        marginLeft:60,
        height: '5%',
      },
      buttonText: {
        color: 'white',
        fontSize: 20,
        fontStyle: 'italic',
        alignSelf: 'center',
      },
    });