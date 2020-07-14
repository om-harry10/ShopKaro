import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, SafeAreaView, ImageBackground, ActivityIndicator} from 'react-native';
import  AsyncStorage  from "@react-native-community/async-storage";

 
function WelcomePage({navigation}) {
  const [checkIn, setCheckIn] = useState(true);

  const [currentUser, setcurrentUser]= useState(false);

  
  useEffect(() => {
    setTimeout(() => {
     let a= AsyncStorage.getItem("username");
     //console.log("a",a);
     if(a==null){
       setcurrentUser(true);
     }
     
      setCheckIn(false);
    }, 2000);
  });

  if (checkIn) {
    return (
      <SafeAreaView style={styles.safeView}>
        <ImageBackground
          source={require('./Welcome.png')}
          style={styles.imageBgStyle}>
          
          <ActivityIndicator size="large" style={styles.indicatorStyle} />
        </ImageBackground>
      </SafeAreaView>
    );
  } else {
    return <>{
      currentUser?navigation.navigate('Drawer'):navigation.navigate('Form')}</>;
  }
}

export default WelcomePage;


// export default class WelcomePage extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//           timePassed: false
//         };
//       }
//       componentdidMount(setTimeout( () =>{
//         {
//             this.setState({timePassed: true});
//         },
//         5000 });
//     render() {
        
//           if(this.state.timePassed){
//                return (
//                 <SafeAreaView style={styles.SafeArea}>
//                 <ImageBackground
//                     source={require('./Welcome.png')}
//                     style={styles.imageBgStyle}>
//                     <ActivityIndicator size="large" style={styles.indicatorStyle} />
//                 </ImageBackground>
    
//                 </SafeAreaView>
//          );
//         } else{
//             return <>{this.props.navigation.navigate('Form')}</>;
//          }
       
//     }
// }

const styles = StyleSheet.create({
    SafeArea: {
        flex:1,
        justifyContent: 'center',
    },
    imageBgStyle: {
        width: '100%',
        height: '100%',
      },
    indicatorStyle: {
        color: 'red',
        alignSelf: 'center',
      },
});