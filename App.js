import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import Carousel from "react-native-carousel-control";

export default function App() {
  const teachrs = [
    {
      nom: 'Stack',
      prenom: 'Marie',
      formation: 'Université de Londre',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"
    },
    {
      nom: 'Romanov',
      prenom: 'Natacha',
      formation: 'Université de Londre',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"
    },
    {
      nom: 'Bruce',
      prenom: 'Wayne',
      formation: 'Université de Londre',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"
    },
    {
      nom: 'Bruce',
      prenom: 'Baner',
      formation: 'Université de Londre',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"
    },
    {
      nom: 'Carla',
      prenom: 'Jean',
      formation: 'Université de Londre',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"
    },
    {
      nom: 'More',
      prenom: 'Marlene',
      formation: 'Université de Londre',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"
    },
    {
      nom: 'Florie',
      prenom: 'Karole',
      formation: 'Université de Londre',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"
    },
    {
      nom: 'Tyler',
      prenom: 'Jax',
      formation: 'Université de Londre',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"
    },
    {
      nom: 'Dupont',
      prenom: 'Jean',
      formation: 'Université de Londre',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"
    },
    {
      nom: 'Pyke',
      prenom: 'Justine',
      formation: 'Université de Londre',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"
    },
  ]




  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>Teach'rs favoris</Text>
      </View>
      <Carousel pageStyle={styles.carousel}>

        {
        teachrs.map((teachr,index) => 
          <View key={index} style={styles.divParent}>

            <View style={styles.flexImgNom}>
              <View style={styles.divImage}>
                <Image source={require('./image/avatar-neutre-homme-1.jpg')} style={styles.image} />

              </View>

              <View style={styles.divNom}>
                <Text>{teachr.nom} {teachr.prenom}</Text>
              </View>
            </View>

            <View style={styles.divFormDesc}>
              <View>
                <Text style={styles.textTitle}>Formation</Text>
                <Text style={styles.textContent}>{teachr.formation}</Text>
              </View>
              <View style={styles.divDesc}>
                <Text style={styles.textTitle}>Description</Text>
                <Text style={styles.textContent}>{teachr.description}</Text>
              </View>

            </View>
            <View style={styles.btn} >
              <Button title="Prendre un cours avec ce Teach'r " />
            </View>
            <View style={styles.btn} >
              <Button title="Retirer ce Teach'r de mes favoris" color="orange" />
            </View>


          </View>
        )}

      </Carousel>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    fontFamily: ''
  },
  header: {
    marginBottom: 50,
    height: 170,
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
    backgroundColor: "white",
    borderRadius: 10,
    height: 480,
    width: 250,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: 20,

  },
  divParent: {
    height: 470,
    margin: 20,

  },
  flexImgNom: {
    flex: 1,
    flexDirection: 'row',
  },
  divNom: {
    height: 70,
    width: 120,
    justifyContent: 'center',

  },
  divImage: {
    height: 100,
    marginTop: 20,

  },
  divFormDesc: {
    height: 260,

  },
  textTitle: {
    color: 'grey',
    fontSize: 15,

  },
  divDesc: {
    marginTop: 40,
  },
  textContent: {
    fontSize: 17,
    fontWeight: "bold",
  },
  btn: {
    height: 60,

  },




});
