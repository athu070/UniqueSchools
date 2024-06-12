import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './Screens/LoginScreen';
import HomeScreen from './Screens/HomeScreen';
import GalleryScreen from './Screens/GalleryScreen';
import ImageDetail from './Screens/ImageDetail';
import DetailScreen from './Screens/DetailScreen';
import Navbar from './Screens/Navbar';
import NotificationScreen from './Screens/NotificationScreen';
import NewNotification from './Screens/NewNotification';
import NewGalleryScreen from './Screens/NewGalleryScreen';
import DetailsScreen from './Screens/DetailsScreen';


// Create a Drawer Navigator
const Drawer = createDrawerNavigator();

// Create a Stack Navigator for Login flow
const Stack = createStackNavigator();

const CustomDrawerContent = (props) => (
  <DrawerContentScrollView {...props}>
    <View style={styles.header}>
      <Image
        source={{ uri: 'https://your-logo-url.com/logo.png' }}
        style={styles.logo}
      />
      <Text style={styles.name}>John Doe</Text>
      <Text style={styles.email}>ts1_teacher1@yopmail.com</Text>
      <Text style={styles.school}>Test App School 2</Text>
    </View>
    <DrawerItemList {...props} />
  </DrawerContentScrollView>
);

const HomeDrawerNavigator = () => (
  <Drawer.Navigator
    initialRouteName="GalleryScreen"
    
    screenOptions={{
      headerStyle: {
        backgroundColor: 'red', 
      },
      headerTintColor: '#fff', 
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}
    drawerContent={(props) => <CustomDrawerContent {...props} />}
  >
    <Drawer.Screen name="GalleryScreen" component={GalleryScreen} />
    <Drawer.Screen name="Navbar" component={Navbar} />
    <Drawer.Screen name="NotificationScreen" component={NotificationScreen} />
    <Drawer.Screen name="HomeScreen" component={HomeScreen} />
    <Drawer.Screen name="NewNotification" component={NewNotification} />
    <Drawer.Screen name="NewGalleryScreen" component={NewGalleryScreen} />
  </Drawer.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeDrawerNavigator} options={{ headerShown: false }}/>
        <Stack.Screen name="GalleryScreen" component={GalleryScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="ImageDetail" component={ImageDetail} options={{ headerShown: false }}/>
        <Stack.Screen name="DetailScreen" component={DetailScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="NewGalleryScreen" component={NewGalleryScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'red',
    padding: 20,
    paddingTop: 40,
  },
  logo: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  name: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  email: {
    color: 'white',
    fontSize: 14,
  },
  school: {
    color: 'white',
    fontSize: 14,
  },
  drawerItems: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
