import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type GalleryItem = {
  id: string;
  title: string;
  date: string;
  uri: string;
};

const galleryData: GalleryItem[] = [
  {
    id: '1',
    title: 'First Item',
    date: 'Apr 23',
    uri: 'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: '2',
    title: 'Second Item',
    date: 'Apr 23',
    uri: 'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  // Add more gallery items here
  {
    id: '3',
    title: 'Third Item',
    date: 'Apr 23',
    uri: 'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: '4',
    title: 'Fourth Item',
    date: 'Apr 23',
    uri: 'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

const GalleryScreen: React.FC = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }: { item: GalleryItem }) => (
    <TouchableOpacity style={styles.itemContainer} onPress={() => navigation.navigate('DetailScreen')}>
      <Image source={{ uri: item.uri }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={galleryData}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    margin: 8,
  },
  image: {
    width: '100%',
    height: 200,
  },
  textContainer: {
    padding: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 14,
    color: 'gray',
  },
});

export default GalleryScreen;
