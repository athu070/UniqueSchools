import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerContentComponentProps } from '@react-navigation/drawer';
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

type DrawerParamList = {
  GalleryScreen: undefined;
  Navbar: undefined;
  NotificationScreen: undefined;
  HomeScreen: undefined;
  NewNotification: undefined;
  NewGalleryScreen: undefined;
};

type StackParamList = {
  Login: undefined;
  Home: undefined;
  ImageDetail: undefined;
  DetailScreen: undefined;
  DetailsScreen: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();
const Stack = createStackNavigator<StackParamList>();

const CustomDrawerContent: React.FC<DrawerContentComponentProps> = (props) => (
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

const HomeDrawerNavigator: React.FC = () => (
  <Drawer.Navigator
    initialRouteName="GalleryScreen"
    screenOptions={{
      headerStyle: { backgroundColor: 'red' },
      headerTintColor: '#fff',
      headerTitleStyle: { fontWeight: 'bold' },
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

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeDrawerNavigator} />
        <Stack.Screen name="ImageDetail" component={ImageDetail} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
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
    alignItems: 'center',
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
});

export default App;
