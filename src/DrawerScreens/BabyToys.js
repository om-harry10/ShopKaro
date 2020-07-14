import React, { Component } from 'react';
import { Text, View , StyleSheet, TouchableOpacity} from 'react-native';
import { ListItem, Avatar} from 'react-native-elements';
import HeaderCommon from '../Header';
import database from '@react-native-firebase/database'; 

export default class Clothig extends Component {

    state={
        list:[],
        loading:true,
}
    componentDidMount(){
        database().ref('products/Baby Toys').on('value',snapshot=>{
            
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
                <View>
                    {this.state.list.map((item, i) => (
                        <ListItem
                            roundAvatar
                            leftAvatar={<Avatar  size= "large" source={require('../images/item1.jpeg')}/>}
                            title={item['item1'].name}
                            key={i}
                            subtitle={<View>
                                <Text>{item['item1'].details}</Text>
                                <Text>{item['item1'].price}</Text>
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
                            leftAvatar={<Avatar   size= "large" source={require('../images/item2.jpeg')}/>}
                            title={item['item2'].name}
                            key={i}
                            subtitle={<View>
                                <Text>{item['item2'].details}</Text>
                                <Text>{item['item2'].price}</Text>
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
                            leftAvatar={<Avatar  size= "large" source={require('../images/item3.jpeg')}/>}
                            title={item['item3'].name}
                            key={i}
                            subtitle={<View>
                                <Text>{item['item3'].details}</Text>
                                <Text>{item['item3'].price}</Text>
                                <TouchableOpacity style={{height:50, width:100, backgroundColor:'orange'}}>
                                    <Text style={{color:'#fff', padding:10, fontWeight:'bold', fontSize:15}}>BUY NOW</Text>
                                </TouchableOpacity>
                            </View> }
                            
                            containerStyle={allStyle.forSubtitle}
                            bottomDivider
                    />
                     
        ))}
      </View>
            </View>
        )
    }
}

const allStyle= StyleSheet.create({
    forSubtitle: {
        height: 150,
        justifyContent: 'center',
        marginTop:10,
      },
     
})