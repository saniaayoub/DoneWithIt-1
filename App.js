import React from 'react';
import 'react-native-gesture-handler';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {useEffect, useState, useContext, useMemo, useReducer} from 'react';
import {AuthContext} from './src/Components/context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import loginReducer from './src/reducers/loginreducer';
// import AppNavigator from './src/Navigation/AppNavigator';
// import AuthNavigator from './src/Navigation/AuthNavigator';
import AppContainer from './src/Navigation/index'

const App = () => {
  // const initialLoginState = {
  //   isLoading: true,
  //   userName: null,
  //   userToken: null,
  // };

  // const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);
  // const authContext = useMemo(
  //   () => ({
  //     signIn: async (userName, password) => {
  //       let userToken = null;

  //       if (userName == 'Sania' && password == 'pass') {
  //         userToken = 'dffgdh';
  //         try {
  //           await AsyncStorage.setItem('userToken', userToken);
  //         } catch (e) {
  //           console.log(e);
  //         }
  //       }
  //       console.log(userToken);
  //       dispatch({type: 'LOGIN', id: userName, token: userToken});
  //     },
  //     signOut: async () => {
  //       try {
  //         await AsyncStorage.removeItem('userToken');
  //       } catch (e) {
  //         console.log(e);
  //       }
  //       dispatch({type: 'LOGOUT'});
  //     },
  //   }),
  //   [],
  // );

  // useEffect(() => {
  //   setTimeout(async () => {
  //     let userToken = null;

  //     try {
  //       userToken = await AsyncStorage.getItem('userToken');
  //       console.log(userToken);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //     dispatch({type: 'RETRIEVE_TOKEN', token: userToken});
  //   }, 3000);
  // }, []);

  // if (loginState.isLoading) {
  //   return (
  //     <View
  //       style={{
  //         flex: 1,
  //         justifyContent: 'center',
  //         alignItems: 'center',
  //         backgroundColor: '#afafda',
  //       }}>
  //       <Text style={{fontSize: 50}}> DONE WITH IT </Text>
  //     </View>
  //   );
  // }

  return (
    <>
      <AppContainer/>
    </>
    // <AuthContext.Provider value={authContext}>
    //   <NavigationContainer>
    //     {loginState.userToken === null ? <AuthNavigator /> : <AppNavigator />}
    //   </NavigationContainer>
    // </AuthContext.Provider>
  );
};

export default App;
