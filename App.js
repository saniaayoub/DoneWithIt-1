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
  

  return (
    <>
      <AppContainer/>
    </>
    
  );
};

export default App;
