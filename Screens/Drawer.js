import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, Image, StyleSheet } from 'react-native';

const Drawer = createDrawerNavigator();

const DrawerContent = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <Text style={styles.time}>12:31</Text>
        <Text style={styles.battery}>86%</Text>
        <Image source={require('./user_profile.png')} style={styles.userImage} />
        <Text style={styles.userName}>John Doe</Text>
        <Text style={styles.userEmail}>ts1_teacher1@yopmail.com</Text>
        <Text style={styles.schoolName}>Test App School 2</Text>
      </View>
      <View style={styles.menuItems}>
        {/* Menu items here */}
      </View>
    </View>
  );
};

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
};

const NotificationsScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications Screen</Text>
    </View>
  );
};

// Other screens...

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        {/* Other screens */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfo: {
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  time: {
    fontSize: 12,
  },
  battery: {
    fontSize: 12,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  }
});

export default DrawerContent;