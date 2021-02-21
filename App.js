import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Carousel from "react-native-carousel-control";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{marginBottom: 50,height:190,backgroundColor: '#1E90FF'}}>
      <Text>Teach'rs favoris</Text>
      </View>
      <Carousel  pageStyle={ {backgroundColor: "blue", borderRadius: 10,height : 400} }>
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
 
});
