import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator, DrawerItem, DrawerContentScrollView} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import WelcomePage from './WelcomePage';
import Form from './Form';
import signup from './SignUpPage';

import Display from './Display';
import Screen1 from './Screen1';
import Electronics from './DrawerScreens/Electronics';
import BabyToys from './DrawerScreens/BabyToys';
import BeautyCare from './DrawerScreens/BeautyCare';
import BooksSports from './DrawerScreens/BooksSports';
import Clothing from './DrawerScreens/Clothig';
import HomeFurniture from './DrawerScreens/HomeFurniture';
import TvAppliances from './DrawerScreens/TvAppliances';
import Settings from './DrawerScreens/Settings';
import Logout from './Logout';
import MyCart from './TabScreens/MyCart';
import MyProfile from './TabScreens/MyProfile';
import { View } from 'react-native';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

// export function DrawerContent(props){
//   return(
//     <DrawerContentScrollView {...props}>
//     <View>
//     <Drawer.Section>
//       <DrawerItem iconName="home" label="home"/>
//     </Drawer.Section>
//     </View>
//   </DrawerContentScrollView>
//   )
// }
function DrawerScreen() {
  return (
    <Drawer.Navigator >
   
      <Drawer.Screen Icon="home" 
      component={Screen1} name="Home" />
      <Drawer.Screen component={Electronics} name="SmartPhones" />
      <Drawer.Screen component={Clothing} name="Fashion" />
      <Drawer.Screen component={HomeFurniture} name="Home and Furniture" />
      <Drawer.Screen component={TvAppliances} name="TVs and Appliances" />
      <Drawer.Screen component={BabyToys} name="Toys and Baby" />
      <Drawer.Screen component={BeautyCare} name="Beauty and Personal Care" />
      <Drawer.Screen component={BooksSports} name="Sports and Books" />
      <Drawer.Screen component={Settings} name="Settings" />
      <Drawer.Screen component={Logout} name="Logout"/>
    </Drawer.Navigator>

    
  );
}

// function ScreenTabs() {
//   return (
//     <Tab.Navigator
//       screenOptions={({route}) => ({
//         tabBarIcon: ({focused, color, size}) => {
//           let iconName;

//           if (route.name === 'Home') {
//             iconName = focused ? 'home' : 'home';
//           } else if (route.name === 'Cart') {
//             iconName = focused ? 'shopping_cart' : 'shopping_cart';
//           }else if (route.name === 'Profile') {
//             iconName = focused ? 'user' : 'user';
//           }

//           // You can return any component that you like here!
//           return <Icon name={iconName} size={size} color={color} />;
//         },
//       })}
//       tabBarOptions={{
//         activeTintColor: 'tomato',
//         inactiveTintColor: 'green',
//       }}>
//       <Tab.Screen component={Screen1} name="Home" />
      
//       <Tab.Screen component={MyProfile} name="Profile" />
//     </Tab.Navigator>
//   );
// }

function Navscreen() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen component={Form} name="Form" options={{headerShown: false}} />
          <Stack.Screen component={Display} name="Display" options={{title: ''}} />
          <Stack.Screen
            component={WelcomePage}
            name="Welcome"
            options={{headerShown: false}} />
            <Stack.Screen
            component={DrawerScreen} name="Drawer" options={{headerShown: false}}/>
          <Stack.Screen
            component={signup}
            name="signuppage"
            options={{headerShown: false}} />
        
        
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default Navscreen;