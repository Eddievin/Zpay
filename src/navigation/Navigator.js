import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import Registration from '../screens/Registration';
import Login from '../screens/Login';
import Profile from '../screens/Profile';
import Settings from '../screens/Settings';
import Welcome from '../screens/Welcome';


const Stack = createStackNavigator();

const screenOptionStyle = {
    headerShown: false,
};

export default function HomeStackNavigator(){
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="Profile" component={Profile} />
            
            
            
            <Stack.Screen name="Registration" component={Registration} />
            <Stack.Screen name="Login" component={Login} />
            
        </Stack.Navigator>
    );
}
