import React from 'react';
import {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';

import auth from '@react-native-firebase/auth';

export default AppContainer = () => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState("");
  
    // Handle user state changes
  function onAuthStateChanged(user) {
      setUser(user);
      console.log(user);
    if (initializing) setInitializing(false);
    }
    
    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);
    
    if (initializing) return null;
    return (
        <NavigationContainer>
            {user ?  <AppNavigator/> : <AuthNavigator/>}
        </NavigationContainer>
    )
};
