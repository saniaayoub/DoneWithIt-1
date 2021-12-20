import React from 'react';
import {View, Text} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Profile from '../screens/Profile';
import Home from '../screens/Home';
import cart from '../screens/cart';
import Productdetails from '../screens/productdetails';
import DrawerContent from '../screens/drawercontent';
import Header from '../Components/header';

const HomeTabs = createBottomTabNavigator();

const HomeStack = createStackNavigator();

const Drawer = createDrawerNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      initialRouteName={'ProductList'}
      screenOptions={(route, navigation) => Header(route, navigation)}>
      <HomeStack.Screen name="Product List" component={Home} />
      <HomeStack.Screen name="Product Details" component={Productdetails} />
    </HomeStack.Navigator>
  );
};

const HomeTabScreen = () => {
  return (
    <HomeTabs.Navigator
      initialRouteName={'Home'}
      screenOptions={(route, navigation) => Header(route, navigation)}>
      <HomeTabs.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({}) => {
            return (
              <Icon
                name="user"
                color={'#0fadad'}
                size={25}
                style={{paddingHorizontal: 5}}
              />
            );
          },
        }}
      />
      <HomeTabs.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({}) => {
            return (
              <Icon
                name="home"
                color={'#0fadad'}
                size={25}
                style={{paddingHorizontal: 5}}
              />
            );
          },
          headerShown: false,
        }}
      />
      <HomeTabs.Screen
        name="Cart"
        component={cart}
        options={{
          tabBarIcon: ({}) => {
            return (
              <Icon
                name="cart-arrow-down"
                color={'#0fadad'}
                size={25}
                style={{paddingHorizontal: 5}}
              />
            );
          },
        }}
      />
    </HomeTabs.Navigator>
  );
};

const AppNavigator = () => {
  return (
    
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#c6cbef',
          width: 200,
        },
      }}>
      <Drawer.Screen
        name="App"
        component={HomeTabScreen}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

export default AppNavigator;
