import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import{Text, View, StyleSheet, ScrollView, Animated} from 'react-native';
const countries= [
    {
        country: 'India',
        capital: 'New Delhi',
    },
    {
        country: 'USA ',
        capital: 'Washington DC',
    },
    {
        country: 'Sri Lanka',
        capital: 'Colombo',
    },
    {
        country: 'Germany ',
        capital: 'Berlin',
    },
    {
        country: 'China ',
        capital: 'Beijing',
    },
    {
        country: 'Russia',
        capital: 'Moscow',
    },
    {
        country: 'Argentina',
        capital: 'Bueno aires',
    },
    {
        country: 'Japan',
        capital: 'Tokyo',
    },
  ]

const Tab = createBottomTabNavigator();

const scrollY=new Animated.Value(0);
const diffClamp= Animated.diffClamp(scrollY,0,50);
const translateY=diffClamp.interpolate({
  inputRange:[0,50],
  outputRange:[0,50]
})
function Home() {
      
    return (
        
        <View >
        <ScrollView 
        onScroll={(e)=>{scrollY.setValue(e.nativeEvent.contentOffset.y)}}>
            {countries.map((item,i)=>(
                    <View style={styles.display}>
                        <Text style={styles.text} >{item.country}</Text>
                        <Text style={styles.text}>{item.capital}</Text>
                    </View>
                )
            )}
        </ScrollView>
        </View>
    )
  }
function Screen1(){
  return (
    <View style={styles.display1}>
        <Text style={styles.text}> This is Screen1 </Text>
    </View>
)
}
function Screen2(){
    return (
        <View style={styles.display2}>
            <Text style={styles.text}> This is Screen2 </Text>
        </View>
    )
}

function App() {
      return (
        <View  style={{width:'100%', height:'100%',}}>
            <Animated.View style={[styles.normalDot,{transform:[{translateY:translateY}]}]}>
                  <NavigationContainer>
                  
                  <Tab.Navigator 
                        screenOptions={({route}) => ({
                        tabBarIcon: ({focused, color, size}) => {
                          let iconName;
                
                          if (route.name === 'Home') {
                            iconName = focused ? 'home' : 'home';
                          } else if (route.name === 'Screen1') {
                            iconName = focused ? 'arrow-circle-right' : 'arrow-circle-right';
                          }else if (route.name === 'Screen2') {
                            iconName = focused ? 'telegram' : 'telegram';
                          }
                
                          // You can return any component that you like here!
                          return <Icon name={iconName} size={25} color={color} scrollEnabled={true}/>;
                        },
                      })}
                      tabBarOptions={{
                        activeTintColor: 'tomato',
                        inactiveTintColor: 'green',
                        style:{height: 50},
                        
                      }}>
                      
                    <Tab.Screen name="Home" component={Home} />
                    <Tab.Screen name="Screen1" component={Screen1} />
                    <Tab.Screen name="Screen2" component={Screen2} />
                    
                  </Tab.Navigator>
                  
                  </NavigationContainer>
            </Animated.View>
        </View>
      );
    }

    
      const styles= StyleSheet.create({
        normalDot: {
          height: '100%',
          width: '100%',
          
        },
        display:{
            
            padding: 45,
            backgroundColor: 'pink',
            alignItems: 'center',
        },
        text:{
            fontSize: 20,
        },
        container: {
          
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          //backgroundColor: 'white',
          elevation: 8,
        },
        display1: {
            marginTop: 250,
            backgroundColor: 'yellow',
            padding: 50,
            alignItems:'center',
        },
        display2: {
            marginTop: 250,
            backgroundColor: 'red',
            padding: 50,
            alignItems:'center',
        },
    })
    export default App;
    //onScroll={(e)=>{scrollY.setValue(e.nativeEvent.contentOffset.y)}}>
    // const scrollY=new Animated.Value(0);
//const diffClamp= Animated.diffClamp(scrollY,0,50);
// const translateY=diffClamp.interpolate({
//   inputRange:[0,50],
//   outputRange:[0,50]
// })