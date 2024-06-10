import React from 'react';
import { View, Text, StyleSheet, Image, StatusBar } from 'react-native';
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

// Custom Drawer Content Component
const CustomDrawerContent = (props) => (
  <DrawerContentScrollView {...props}>
    <View style={styles.header}>
      <Image
        source={{ uri: 'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }}
        style={styles.logo}
      />
      <Text style={styles.name}>John Doe</Text>
      <Text style={styles.email}>ts1_teacher1@yopmail.com</Text>
      <Text style={styles.school}>Test App School 2</Text>
    </View>
    <DrawerItemList {...props} />
  </DrawerContentScrollView>
);

// Drawer Navigator containing main screens
const HomeDrawerNavigator = () => (
  <Drawer.Navigator
    initialRouteName="GalleryScreen"
    drawerContent={(props) => <CustomDrawerContent {...props} />}
  >
    <Drawer.Screen name="GalleryScreen" component={GalleryScreen} />
    <Drawer.Screen name="Navbar" component={Navbar} />
    <Drawer.Screen name="NotificationScreen" component={NotificationScreen} />
    <Drawer.Screen name="nNotification" component={HomeScreen} />
    <Drawer.Screen name="Notification" component={NewNotification} />
    <Drawer.Screen name="NewGalleryScreen" component={NewGalleryScreen} />
  </Drawer.Navigator>
);

// Main App Component
const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#fff" barStyle="light-content" translucent={true} />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#C8102E', // Red color for the header
            },
            headerTintColor: '#fff', // White color for the header text
          }}
        >
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={HomeDrawerNavigator} options={{ headerShown: false }} />
          <Stack.Screen name="GalleryScreen" component={GalleryScreen} options={{ headerShown: false }} />
          <Stack.Screen name="ImageDetails" component={ImageDetail} options={{ headerShown: false }} />
          <Stack.Screen name="DetailScreen" component={DetailScreen} options={{ headerShown: false }} />
          <Stack.Screen name="NewGalleryScreen" component={NewGalleryScreen} options={{ headerShown: false }} />
          <Stack.Screen
            name="DetailsScreen"
            component={DetailsScreen}
            options={{
              headerShown: true,
              headerStyle: {
                backgroundColor: '#C8102E',
              },
              headerTintColor: '#fff',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

// Styles for Custom Drawer Content
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#C8102E',
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
