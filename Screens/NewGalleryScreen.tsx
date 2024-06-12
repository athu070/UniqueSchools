import React, { useEffect, useState, useLayoutEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, ActivityIndicator, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const NewGalleryScreen = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    console.log("Fetch called");
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('https://dummyjson.com/products/');
      setData(response.data.products);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: 'red',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    });
  }, [navigation]);

  const renderItem = ({ item }) => (
    <TouchableOpacity 
      key={item.id} 
      style={styles.itemContainer} 
      onPress={() => navigation.navigate('DetailsScreen', { title: item.title, images: item.images })}
    >
      <Image source={{ uri: item.images[0] }} style={styles.image} />
      <View style={styles.numberContainer}>
        <Text style={styles.number}>{item.images.length}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.date}>Apr 23</Text>
        <Text style={styles.subtext}>Priya Pandey</Text>
      </View>
    </TouchableOpacity>
  );

  if (loading) {
    return <ActivityIndicator size="large" style={styles.loadingIndicator} />;
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Error: {error}</Text>
        <TouchableOpacity style={styles.retryButton} onPress={fetchData}>
          <Text style={styles.retryButtonText}>Retry</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.screenContainer}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.container}
      />
    </View>
  );
};

export default NewGalleryScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#fff',  // You can change this to any color you want for the main screen background
  },
  container: {
    padding: 6,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: 6,  // Decreased the margin between rows
  },
  itemContainer: {
    width: Dimensions.get('window').width / 2 - 9,  // Adjusted width to decrease space between columns
    backgroundColor: '#C5C5C5',
    marginBottom: 3,  // Decreased the margin between items
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: 150,  // Increased the height for better visibility
    borderRadius: 10,
  },
  number: {
    color: '#ffffff',
    fontSize: 13,
    textAlign: 'center',
  },
  numberContainer: {
    position: 'absolute',
    right: 10,
    bottom: 70,
    backgroundColor: '#737373',
    width: 30,
    height: 30,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
    fontFamily: 'WorkSans-Medium',
    marginLeft: 5,
  },
  textContainer: {
    margin: 0,
    padding: 5,
    backgroundColor: '#D8D8D8',  // Slightly lighter color than #C5C5C5
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  subtext: {
    fontFamily: 'WorkSans-Regular',
    fontSize: 13,
    marginLeft: 5,
  },
  date: {
    fontFamily: 'WorkSans-Regular',
    fontSize: 9,
    marginLeft: 5,
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  retryButton: {
    padding: 10,
    backgroundColor: '#737373',
    borderRadius: 5,
  },
  retryButtonText: {
    color: '#fff',
  },
});
