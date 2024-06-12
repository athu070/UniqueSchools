import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const notifications = [
  {
    id: '1',
    avatar: require('../src/assests/logo_pastpupil.png'),
    text: 'This is a test notification',
    timestamp: 'Yesterday',
  },
  // Add more notifications here
  {
    id: '1',
    avatar: require('../src/assests/logo_pastpupil.png'),
    text: 'This is a test notification',
    timestamp: 'Yesterday',
  },
  {
    id: '1',
    avatar: require('../src/assests/logo_pastpupil.png'),
    text: 'This is a test notification',
    timestamp: 'Yesterday',
  },
  {
    id: '1',
    avatar: require('../src/assests/logo_pastpupil.png'),
    text: 'This is a test notification',
    timestamp: 'Yesterday',
  },
  {
    id: '1',
    avatar: require('../src/assests/logo_pastpupil.png'),
    text: 'This is a test notification',
    timestamp: 'Yesterday',
  },
  {
    id: '1',
    avatar: require('../src/assests/logo_pastpupil.png'),
    text: 'This is a test notification',
    timestamp: 'Yesterday',
  },
  {
    id: '1',
    avatar: require('../src/assests/logo_pastpupil.png'),
    text: 'This is a test notification',
    timestamp: 'Yesterday',
  },
  {
    id: '1',
    avatar: require('../src/assests/logo_pastpupil.png'),
    text: 'This is a test notification',
    timestamp: 'Yesterday',
  },
  {
    id: '1',
    avatar: require('../src/assests/logo_pastpupil.png'),
    text: 'This is a test notification',
    timestamp: 'Yesterday',
  },
  {
    id: '1',
    avatar: require('../src/assests/logo_pastpupil.png'),
    text: 'This is a test notification',
    timestamp: 'Yesterday',
  },
  {
    id: '1',
    avatar: require('../src/assests/logo_pastpupil.png'),
    text: 'This is a test notification',
    timestamp: 'Yesterday',
  },
  {
    id: '1',
    avatar: require('../src/assests/logo_pastpupil.png'),
    text: 'This is a test notification',
    timestamp: 'Yesterday',
  },
];

const NotificationScreen = () => {
  return (
    <View style={styles.container}>
      
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.notificationItem}>
            <Image source={item.avatar} style={styles.avatar} />
            <View style={styles.notificationText}>
              <Text>{item.text}</Text>
              <Text>{item.timestamp}</Text>
            </View>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: 'red',
    paddingVertical: 10,
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  notificationText: {
    flex: 1,
  },
  separator: {
    height: 1,
    backgroundColor: '#E0E0E0',
  },
});

export default NotificationScreen;
