import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/login';
import SignUp from '../screens/signUp';
import ForgetPassword from '../screens/forgetPassword';

const loginStack = createStackNavigator();

const AuthNavigator = () => {
    return (
        <loginStack.Navigator>
            <loginStack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <loginStack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
            <loginStack.Screen name="ForgetPassword" component={ForgetPassword} options={{ headerShown: false }} />
        </loginStack.Navigator>
    )
}

export default AuthNavigator;