import React, { Component } from 'react';
import { Text, View, ImageBackground, StyleSheet} from 'react-native';
import { SearchBar } from 'react-native-elements';
import HeaderCommon from './Header';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import database from '@react-native-firebase/database';

export default class Screen1 extends Component {
    constructor(props){
        super(props);
        this.state={
            updateSearch:'',
        }
    }
   
     
    render() {
        return (
            <View>
                <HeaderCommon nav={this.props.navigation}/>
                
            <ScrollView> 
                
                    <View style={styles.image2}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Fashion')}>
                        <ImageBackground  source={require('./images/clothing.jpg')} style={styles.image}>
                        <View style={{position: 'absolute', top: 0, left: 0, right: 0,padding:10, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{color:'#fff', fontSize:25, fontStyle:'italic'}}>CLOTHING</Text>
                        </View>
                        </ImageBackground>
                        </TouchableOpacity>
                    </View>
                    
                   <View style={styles.image1}>
                   <TouchableOpacity onPress={()=>this.props.navigation.navigate('Beauty and Personal Care')}>
                        <ImageBackground source={require('./images/beauty.jpg')} style={styles.image}>
                        <View style={{position: 'absolute', top: 0, left: 0, right: 0,  justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{color:'r', fontSize:25, fontStyle:'italic'}}>BEAUTY</Text>
                        </View>
                        </ImageBackground>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.fullImage}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('SmartPhones')}>
                        <ImageBackground source={require('./images/mobile.jpg')} style={styles.image}>
                        <View style={{position: 'absolute', top: 0, left: 0, right: 0, padding:10, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{color:'#000', fontSize:25, fontStyle:'italic'}}>SMARTPHONES</Text>
                        </View>
                        </ImageBackground>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.image1}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Toys and Baby')}>
                        <ImageBackground source={require('./images/babytoys.jpg')} style={styles.image}>
                        <View style={{position: 'absolute', top: 0,left:0,right: 0, padding:10, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{color:'#fff', fontSize:25, fontStyle:'italic'}}>Baby Toys</Text>
                        </View>
                        </ImageBackground>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.image2}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Sports and Books')}>
                        <ImageBackground source={require('./images/books.jpg')} style={styles.image}>
                        <View style={{position: 'absolute', top: 0,left:0,right: 0, padding:10, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{color:'#fff', fontSize:25, fontStyle:'italic'}}>SPORTS AND BOOKS</Text>
                        </View>
                        </ImageBackground>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.fullImage}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('TVs and Appliances')}>
                        <ImageBackground source={require('./images/tv.jpg')} style={styles.image}>
                        <View style={{position: 'absolute', top: 0,left:0,right: 0, padding:10, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{color:'#fff', fontSize:25, fontStyle:'italic'}}>TVs</Text>
                        </View>
                        </ImageBackground>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.fullImage}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Home and Furniture')}>
                        <ImageBackground source={require('./images/furniture.jpg')} style={styles.image}>
                        <View style={{position: 'absolute', top: 0,left:0,right: 0, padding:10, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{color:'#fff', fontSize:25, fontStyle:'italic'}}>FURNITURE</Text>
                        </View>
                        </ImageBackground>
                        </TouchableOpacity>
                    </View>
                
              
            </ScrollView>
        </View>
        )
    }
}

const styles= StyleSheet.create({
   container:{
       flex:1,
       flexDirection:'row',
       flexWrap:'wrap',
       padding:5,
   },
   image1:{
       flex:1,
       padding:5
   },
   image2:{
       flex:2,
       padding:5
       
   },
   image:{
       
       height:200,
       justifyContent:'center'
   },
   fullImage:{
       width:'100%',
       justifyContent:'center',
       
       padding:5
   }
    
})