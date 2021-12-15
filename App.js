import React from 'react'
import 'react-native-gesture-handler'
import { View, Text, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from './src/screens/Profile';
import Login from './src/screens/login';
import Home from './src/screens/Home';
import cart from './src/screens/cart';
import Productdetails from './src/screens/productdetails';
// import DrawerContent from './src/screens/drawercontent';
import { useEffect, useState,useContext, useMemo, useReducer} from 'react';
import { AuthContext } from './src/screens/context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import loginReducer from './src/reducers/loginreducer'

const loginStack = createStackNavigator();

const HomeTabs = createBottomTabNavigator();
 
const HomeStack = createStackNavigator();

const Drawer = createDrawerNavigator();

const profileStackScreen = () => {
  return(<profileStack.Navigator>
    <profileStack.Screen name="Profile" component={Profile}/>
  </profileStack.Navigator>);
}

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
        <HomeStack.Screen name="ProductList" component={Home} options={{title: "Product List"}} />
        <HomeStack.Screen name="Productdetails" component={Productdetails} />  
    </HomeStack.Navigator>);
}


const HomeTabScreen= () => {
 return(
    <HomeTabs.Navigator initialRouteName={"Home"}>
      <HomeTabs.Screen name="Profile" component={Profile} options={{headerShown: false}}/>
      <HomeTabs.Screen name="Home" component={HomeStackScreen} options={{headerShown: false}}/>
      <HomeTabs.Screen name="Cart" component={cart} />
    </HomeTabs.Navigator>
 );
}


const App = () => {
  // const [isLoading, setIsLoading] = useState(true);
  // const [userToken, setUserToken] = useState(null);

   const initialLoginState = {
      isLoading: true,
      userName: null,
      userToken: null,
    }


  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);
  const authContext = useMemo(() => ({
    signIn:async(userName, password) => {
      // setUserToken('fgkg');
      // setIsLoading(false);
      let userToken = null;
      
      if(userName == "Sania" && password == 'pass'){
        userToken = "dffgdh";
        try{
          await AsyncStorage.setItem('userToken', userToken);
        }catch(e){
          console.log(e);
        }
      } 
      console.log(userToken);
      dispatch({type: 'LOGIN', id: userName, token: userToken});
      
    },
    signOut: async() => {
      try {
        await AsyncStorage.removeItem('userToken');
      } catch (e) {
        console.log(e);
      }
       dispatch({type: 'LOGOUT'});
    }
  }), []);

  useEffect(()=> {
    setTimeout(async() => {
      // setIsLoading(false);
      let userToken = null;
      
      try {
        userToken = await AsyncStorage.getItem('userToken');
        console.log(userToken);
      } catch (e) {
        console.log(e);
      }
      dispatch({ type: 'RETRIEVE_TOKEN',  token: userToken });
    }, 3000)
  }, []);

  if(loginState.isLoading){
    return(
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#afafda'}}>
        <Text style={{fontSize: 50}}> DONE WITH IT  </Text>
      </View>
    )
  }

  return (
    <AuthContext.Provider value={authContext}>    
      <NavigationContainer>
        {loginState.userToken === null ?
          (<loginStack.Navigator>
            <loginStack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          </loginStack.Navigator>
          ):(
            <Drawer.Navigator>
              <Drawer.Screen name="App" component={HomeTabScreen} />
            </Drawer.Navigator>
          )
      }
      </NavigationContainer>
    </AuthContext.Provider>

  );
}

export default App;