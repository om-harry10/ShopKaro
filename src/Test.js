const { default: ActionSheet } = require("../../PracticeApp/src/ActionSheet");

ActionSheet.js

import React, { Component } from 'react';
import { Text, View , TouchableOpacity,Dimensions, StyleSheet} from 'react-native';
import {Image} from 'react-native-elements';
import AnimatedBottomSheet from './AnimatedBottomSheet';
import {ScrollView, TapGestureHandler, State} from 'react-native-gesture-handler';
import  Animated, { Value, useCode, cond, eq, set, not, interpolate }  from 'react-native-reanimated';
import {withTransition} from 'react-native-redash';
import ButtonComponent from './ButtonComponent';


const{width}=Dimensions.get('window');

export default function ActionSheet() {
    


    
        return (
            <ScrollView>
                <ButtonComponent
                
                 />
                <View style={{flex:1, justifyContent:'center',  }}>
                
                <Image source={require('./images/i1.jpg')} style={styles.image}/>
                </View>
                
            </ScrollView>
        )
    
}

const styles=StyleSheet.create({
    image:{
        
        height:550,
        width:width,
        marginRight:100,
        alignSelf:'flex-end'
    },
})

AnimatedBottomSheet.js

import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions} from 'react-native';
import {TapGestureHandler} from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';


const {height, width}=Dimensions.get('window');


export default function AnimatedBottomSheet({translateY, gestureHandler, zIndex})  {
    
        return (
            <>
            {/* <TapGestureHandler {...gestureHandler}>
            <Animated.View style={{ ...StyleSheet.absoluteFill, 
                        backgroundColor:'rgb(0,0,0,0.5)',
                        zIndex:1,
            }}/>
            </TapGestureHandler> */}
            <Animated.View style={{...styles.container,
                 transform:[{translateY:translateY}],
                 }}>
                <Text> Animated Bottom Sheet </Text>
            </Animated.View>
            </>
        )
    
}

const styles=StyleSheet.create({
    container:{
        position:'absolute',
        bottom:0,
        width: width-20,
        height:300,
        backgroundColor:'#fff',
        borderRadius:25,
        marginHorizontal:10,
        alignItems:'center'
    }
    
})


ButtonComponent.js

// import React, { Component } from 'react';
// import { Text, View, TouchableOpacity } from 'react-native';
// import {TapGestureHandler} from 'react-native-gesture-handler';
// import  Animated from 'react-native-reanimated';
// function ButtonComponent ({gestureHandler}) {
    
//         return (
//             <View>
//                <TapGestureHandler >
//               <Animated.View>
//                 <TouchableOpacity  style={{marginTop:10, marginLeft:50,  height:50, width:200, backgroundColor:'#00ffff'}}>
//                     <Text>Press to See Action Sheet</Text>
//                 </TouchableOpacity>
//               </Animated.View>
//             </TapGestureHandler>
//             </View>
//         )
    
// }
// export default ButtonComponent;

