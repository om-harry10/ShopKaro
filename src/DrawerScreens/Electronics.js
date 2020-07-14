import React, { Component } from 'react';
import { Text, View, ActivityIndicator ,StyleSheet, TouchableOpacity} from 'react-native';
import HeaderCommon from '../Header';
import database from '@react-native-firebase/database';
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import {ListItem, Avatar,List} from 'react-native-elements';

export default class Electronics extends Component {

     state={
            list:[],
            loading:true,
    }
    componentDidMount(){
            database().ref('products/Electronics').on('value',snapshot=>{
                
                const data=[];
                data.push(snapshot.val());
                
                this.setState({
                    list:data,
                    loading:false
                })
                // console.log(this.state.list);
            })
    }
    // display=(item)=>{
    //         <View>
    //             <Text style={allStyle.forSubtitle}>{item['mob1'].mob_color}</Text>
    //         </View>
    // }
   
    render() {
        return (
            
            <ScrollView >
            
                <HeaderCommon nav={this.props.navigation}/>
                <View>
                    {this.state.list.map((item, i) => (
                        <ListItem
                            roundAvatar
                            leftAvatar={<Avatar   size= "large" source={require('../images/realme5pro.jpg')}/>}
                            title={item['mob1'].mob_name}
                            key={i}
                            subtitle={<View>
                                <Text>{item['mob1'].mob_color}</Text>
                                <Text>{item['mob1'].mob_specs}</Text>
                                <Text>{item['mob1'].mob_price}</Text>
                                <TouchableOpacity style={{height:50, width:100, backgroundColor:'orange'}}>
                                    <Text style={{color:'#fff', padding:10, fontWeight:'bold', fontSize:15}}>BUY NOW</Text>
                                </TouchableOpacity>
                            </View> }
                            
                            containerStyle={allStyle.forSubtitle}
                            bottomDivider
                    />
                     
        ))}
      </View>
      <View>
                    {this.state.list.map((item, i) => (
                        <ListItem
                            roundAvatar
                            leftAvatar={<Avatar  size= "large" source={require('../images/redmi9pro.jpg')}/>}
                            title={item['mob2'].mob_name}
                            key={i}
                            subtitle={<View>
                                <Text>{item['mob2'].mob_color}</Text>
                                <Text>{item['mob2'].mob_specs}</Text>
                                <Text>{item['mob2'].mob_price}</Text>
                                <TouchableOpacity style={{height:50, width:100, backgroundColor:'orange'}}>
                                    <Text style={{color:'#fff', padding:10, fontWeight:'bold', fontSize:15}}>BUY NOW</Text>
                                </TouchableOpacity>
                            </View>}
                            
                            containerStyle={allStyle.forSubtitle}
                            bottomDivider
                    />
                     
        ))}
      </View>
      <View>
                    {this.state.list.map((item, i) => (
                        <ListItem
                            roundAvatar
                            leftAvatar={<Avatar  size= "large" source={require('../images/samsungA21.jpeg')}/>}
                            title={item['mob3'].mob_name}
                            key={i}
                            subtitle={<View>
                                <Text>{item['mob3'].mob_color}</Text>
                                <Text>{item['mob3'].mob_specs}</Text>
                                <Text>{item['mob3'].mob_price}</Text>
                                <TouchableOpacity style={{height:50, width:100, backgroundColor:'orange'}}>
                                    <Text style={{color:'#fff', padding:10, fontWeight:'bold', fontSize:15}}>BUY NOW</Text>
                                </TouchableOpacity>
                            </View>}
                            
                            containerStyle={allStyle.forSubtitle}
                            bottomDivider
                    />
                     
        ))}
      </View>
      <View>
                    {this.state.list.map((item, i) => (
                        <ListItem
                            roundAvatar
                            leftAvatar={<Avatar   size= "large" source={require('../images/samsungM11.jpeg')}/>}
                            title={item['mob4'].mob_name}
                            key={i}
                            subtitle={<View>
                                <Text>{item['mob4'].mob_color}</Text>
                                <Text>{item['mob4'].mob_specs}</Text>
                                <Text>{item['mob4'].mob_price}</Text>
                                <TouchableOpacity style={{height:50, width:100, backgroundColor:'orange'}}>
                                    <Text style={{color:'#fff', padding:10, fontWeight:'bold', fontSize:15}}>BUY NOW</Text>
                                </TouchableOpacity>
                            </View>}
                            
                            containerStyle={allStyle.forSubtitle}
                            bottomDivider
                    />
                     
        ))}
      </View>
      <View>
                    {this.state.list.map((item, i) => (
                        <ListItem
                            roundAvatar
                            leftAvatar={<Avatar size= "large" source={require('../images/oppoF9.jpeg')}/>}
                            title={item['mob5'].mob_name}
                            key={i}
                            subtitle={<View>
                                <Text>{item['mob5'].mob_color}</Text>
                                <Text>{item['mob5'].mob_specs}</Text>
                                <Text>{item['mob5'].mob_price}</Text>
                                <TouchableOpacity style={{height:50, width:100, backgroundColor:'orange'}}>
                                    <Text style={{color:'#fff', padding:10, fontWeight:'bold', fontSize:15}}>BUY NOW</Text>
                                </TouchableOpacity>
                            </View>}
                            
                            containerStyle={allStyle.forSubtitle}
                            bottomDivider
                    />
                     
        ))}
      </View>
      
               </ScrollView>
        )
    }
}

const allStyle= StyleSheet.create({
    forSubtitle: {
        height: 180,
        justifyContent: 'center',
        marginTop:10,
      },
     
})