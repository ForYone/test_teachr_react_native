import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Carousel from "react-native-carousel-control";

export default function App() {


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>Teach'rs favoris</Text>
      </View>
      <Carousel pageStyle={styles.carousel}>
        <Text>Hello</Text>
        <Text>World!</Text>
        <Text>From carousel</Text>
      </Carousel>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  header: {
    marginBottom: 50,
    height: 190,
    backgroundColor: '#0099FF',

  },
  textHeader: {
    position: 'relative',
    top: 120,
    marginLeft: 20,
    color: 'white',
    fontSize: 30,
    fontWeight: "bold",
  },
  carousel: {
    backgroundColor: "blue",
    borderRadius: 10,
    height: 400,
    width: 250,
  }
});
