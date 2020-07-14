import React, { Component } from 'react';
import { Text, View , StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import { ListItem, Avatar,List} from 'react-native-elements';
import HeaderCommon from '../Header';
import database from '@react-native-firebase/database'; 

export default class Books extends Component {

    state={
        list:[],
        loading:true,
}
    componentDidMount(){
        database().ref('products/Home').on('value',snapshot=>{
            
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
            
            <ScrollView>
            
                <HeaderCommon nav={this.props.navigation}/>
                <View>
                    {this.state.list.map((item, i) => (
                        <ListItem
                            roundAvatar
                            leftAvatar={<Avatar    size= "large" source={require('../images/Hitem1.jpeg')}/>}
                            title={item['item1'].name}
                            key={i}
                            subtitle={<View>
                                <Text>{item['item1'].details}</Text>
                                <Text>{item['item1'].price}</Text>
                                <TouchableOpacity style={{height:50, width:100, backgroundColor:'orange'}}>
                                    <Text style={{color:'#fff', padding:10, fontWeight:'bold', fontSize:15}}>BUY NOW</Text>
                                </TouchableOpacity>
                            </View> 
                        }
                            
                            containerStyle={allStyle.forSubtitle}
                            bottomDivider
                    />
                     
        ))}
      </View>
            
            <View>
                    {this.state.list.map((item, i) => (
                        <ListItem
                            roundAvatar
                            leftAvatar={<Avatar   size= "large" source={require('../images/Hitem2.jpeg')}/>}
                            title={item['item2'].name}
                            key={i}
                            subtitle={<View>
                                <Text>{item['item2'].details}</Text>
                                <Text>{item['item2'].price}</Text>
                                <TouchableOpacity style={{height:50, width:100, backgroundColor:'orange'}}>
                                    <Text style={{color:'#fff', padding:10, fontWeight:'bold', fontSize:15}}>BUY NOW</Text>
                                </TouchableOpacity>
                            </View> 
                                                      }
                            
                            containerStyle={allStyle.forSubtitle}
                            bottomDivider
                    />
                     
        ))}
      </View>
      
      <View>
                    {this.state.list.map((item, i) => (
                        <ListItem
                            roundAvatar
                            leftAvatar={<Avatar    size= "large" source={require('../images/Hitem3.jpeg')}/>}
                            title={item['item3'].name}
                            key={i}
                            subtitle={<View>
                                <Text>{item['item3'].details}</Text>
                                <Text>{item['item3'].price}</Text>
                                <TouchableOpacity style={{height:50, width:100, backgroundColor:'orange'}}>
                                    <Text style={{color:'#fff', padding:10, fontWeight:'bold', fontSize:15}}>BUY NOW</Text>
                                </TouchableOpacity>
                            </View> 
                        }
                            
                            containerStyle={allStyle.forSubtitle}
                            bottomDivider
                    />
                     
        ))}
      </View>
      <View>
                    {this.state.list.map((item, i) => (
                        <ListItem
                            roundAvatar
                            leftAvatar={<Avatar    size= "large" source={require('../images/Hitem4.jpeg')}/>}
                            title={item['item4'].name}
                            key={i}
                            subtitle={<View>
                                <Text>{item['item4'].details}</Text>
                                <Text>{item['item4'].price}</Text>
                                <TouchableOpacity style={{height:50, width:100, backgroundColor:'orange'}}>
                                    <Text style={{color:'#fff', padding:10, fontWeight:'bold', fontSize:15}}>BUY NOW</Text>
                                </TouchableOpacity>
                            </View> 
                                                      }
                            
                            containerStyle={allStyle.forSubtitle}
                            bottomDivider
                    />
                     
        ))}
      </View>
      <View>
                    {this.state.list.map((item, i) => (
                        <ListItem
                            roundAvatar
                            leftAvatar={<Avatar  size= "large" source={require('../images/Hitem5.jpeg')}/>}
                            title={item['item5'].name}
                            key={i}
                            subtitle={<View>
                                <Text>{item['item5'].details}</Text>
                                <Text>{item['item5'].price}</Text>
                                <TouchableOpacity style={{height:50, width:100, backgroundColor:'orange'}}>
                                    <Text style={{color:'#fff', padding:10, fontWeight:'bold', fontSize:15}}>BUY NOW</Text>
                                </TouchableOpacity>
                            </View> 
                                                      }
                            
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
        height: 200,
        justifyContent: 'center',
        alignSelf:'center',
        
        marginTop:10,
      },
     
})