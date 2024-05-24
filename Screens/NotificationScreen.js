import React from 'react';
import { View, Image, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';

const { width } = Dimensions.get('window');

const images = [
  { uri: 'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', title: 'Nature' },
  { uri: 'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', title: 'Tech' },
  { uri: 'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', title: 'Architecture' },
  { uri: 'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', title: 'Architecture' },
  // Add more image objects here
];

const NotificationScreen = () => {
  return (
    <ScrollView>
      {images.map((image, index) => (
        <View key={index} style={styles.imageContainer}>
          <Image source={image.uri} style={styles.image} />
          <Text style={styles.title}>{image.title}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    marginBottom: 20, 
    alignItems: 'center', 
  },
  image: {
    width,
    height: 200,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default NotificationScreen;