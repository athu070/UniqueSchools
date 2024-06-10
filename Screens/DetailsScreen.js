import { View, Text, Image, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

const DetailsScreen = ({ route }) => {
  const { title, images } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      { <FlatList
      
        data={images}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={styles.image} />
        )}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      /> }
    </SafeAreaView>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    paddingTop: 1,  // Reduced paddingTop
    paddingHorizontal: 20,
    backgroundColor: '#f3f3f3',
    margin: 0,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,  // Reduced marginBottom
    color: '#333',
  },
  image: {
    width: 150,
    height: 150,
    marginRight: 10,
    borderRadius: 10,
    backgroundColor: '#D8D8D8',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
});
