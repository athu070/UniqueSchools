/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './Screens/LoginScreen';
import HomeScreen from './Screens/HomeScreen';

// Create a Drawer Navigator
const Drawer = createDrawerNavigator();

// Create a Stack Navigator for Login flow
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeDrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Drawer navigator for home screen
const HomeDrawerNavigator = () => (
  <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen name="Home" component={HomeScreen} />
    {/* Add more screens to the drawer if needed */}
   
  </Drawer.Navigator>
);

export default App;
