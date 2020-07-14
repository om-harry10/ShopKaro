import React, { useState, useEffect } from 'react';
import { Text, View, Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';


function Logout({navigation}){
    const [logout, calllogout]= useState(false);
    
    const  test = async ()=>{
        let a=  await AsyncStorage.removeItem('username');
        if(a==null){
            calllogout(true);
        }
    }

    useEffect( () =>{
       //let a= AsyncStorage.clear();
       
       //console.log("a",a);
       test();
      // callExit(a);

    });
        // const user=await AsyncStorage.clear();
        // if(user){
        //     Alert.alert("Cannot Sign out");
        // }else{
        //     this.props.navigation.navigate('Form');
        // }
    
    
    return(
        logout?
    
     <>{navigation.navigate('Form')}</>:<View>
            <Text>Logout screen</Text>
            </View>
    );
}

export default Logout;