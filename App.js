import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal, TouchableHighlight } from 'react-native';
import Header from './components/Header'
import List from './components/List'
import ListPanier from './components/ListPanier'


export default function App() {
  const [Articles, setArticles] = useState([
    {
      id: 15433,
      image: 'https://reactnative.dev/img/tiny_logo.png',
      titre: 'Pomme',
      description: 'This is an Apple!',
      prix: 20
    },
    {
      id: 75235,
      image: 'https://reactnative.dev/img/tiny_logo.png',
      titre: 'Poire',
      description: 'Je suis mûre !',
      prix: 20
    },
    {
      id: 93324,
      image: 'https://reactnative.dev/img/tiny_logo.png',
      titre: 'Banane',
      description: 'Un banane toute jaune',
      prix: 20
    },
    {
      id: 26651,
      image: 'https://reactnative.dev/img/tiny_logo.png',
      titre: 'Fraise',
      description: 'Beau fruit bien rouge',
      prix: 20
    }
  ])

  const [Panier, setPanier] = useState([])
  const [modalVisible, setModalVisible] = useState(false)

  const addPanier = (id, qte) => {

    if (qte === 0) return // Si la quantite est vide on ne fait rien

    let currentPanier = Panier.slice() // Copie le panier courant
    let monArticle = [{id: id, quantite: qte}] // Prépare mon nouvel article

    if (currentPanier.length > 0) { // On verifie si le panier est déjà rempli
      for (let i = 0; i < currentPanier.length; i++) {
        const pArticle = currentPanier[i].id 
  
        if (pArticle === id) { // Je vérifie si mon article est déjà présent
          currentPanier[i].quantite += qte // Si oui je rajoute la quantite
          setPanier(currentPanier) // Je met à jour mon panier
          return // Je m'arrête la
        }          
      }
    }

    // Si le panier est vide || si l'article n'est pas deja dedans
    // je rajoute directement mon produit à mon panier
    setPanier(currentPanier.concat(monArticle))
  }

  const getPanier = () => {

    let currentPanier = Panier.slice()
    let listArticles = Articles.slice()
    let extendPanier = []

    for (let i = 0; i < currentPanier.length; i++) {
      let pArticle = currentPanier[i]

      for (let j = 0; j < listArticles.length; j++) {
        let lArticle = listArticles[j]

        if (pArticle.id === lArticle.id) { 
          extendPanier[i] = {
            id: lArticle.id,
            titre: lArticle.titre,
            qte: pArticle.quantite
          }
        }          
      }
    }
    return extendPanier
  }

  const PanierArticles = getPanier()

  console.log(PanierArticles)

  return (
    <>
      <View style={styles.container}>
        <Header panier={Panier}  onPress={() => {setModalVisible(true)}}/>
        <List articles={Articles} addPanier={(id, qte) => addPanier(id, qte)} />
        <ListPanier modalVisible={modalVisible} panier={PanierArticles} addPanier={(id, qte) => addPanier(id, qte)} modalPanier={(state) => {setModalVisible(state)}} />
        <StatusBar style="auto" />
      </View>
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20
  },
  centeredView: {
    display: 'flex',
    height: 0
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    position: "absolute",
    left: 0,
    top: 25,
    right: 0,
    width: 'auto'
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
