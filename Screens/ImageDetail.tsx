import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

interface ImageDetailProps {
  route: {
    params: {
      item: {
        uri: string;
        title: string;
        date: string;
      };
    };
  };
}

const ImageDetail: React.FC<ImageDetailProps> = ({ route }) => {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: item.uri }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 300,
  },
  textContainer: {
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 16,
    color: 'gray',
  },
});

export default ImageDetail;
