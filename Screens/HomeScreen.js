/*import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFA500',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default HomeScreen;*/

import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

// Sample data for posts
const posts = [
  { id: 1, image: 'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', caption: 'Caption 1' },
  { id: 2, image: 'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', caption: 'Caption 2' },
  { id: 3, image: 'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', caption: 'Caption 3' },
  { id: 4, image: 'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', caption: 'Caption 4' },
  { id: 5, image: 'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', caption: 'Caption 5' },
];

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {posts.map((post) => (
        <View key={post.id} style={styles.post}>
          <Image source={{ uri: post.image }} style={styles.image} />
          <Text style={styles.caption}>{post.caption}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  post: {
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
  },
  caption: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default HomeScreen;


