import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';

export default function ArticlePanier(props) {
  
    return (
        <View style={styles.article}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={{
                        uri: props.article.image,
                    }}
                />
            </View>
            
            <View style={styles.textContainer}>
                <Text style={styles.texte}>Ref: {props.article.id}</Text>
                <Text style={styles.texte}>Nom: {props.article.titre}</Text>
                <Text style={styles.texte}>Description: {props.article.description}</Text>
                <Text style={styles.texte}>Prix: {props.article.prix}</Text>
            </View>

            <View  style={styles.btnContainer}>
                <TextInput
                    style={styles.nbArticle}
                    onChangeText={text => onChangeQte(text)}
                    defaultValue={'1'}
                />
                <TouchableOpacity
                    style={styles.addArticle}
                    onPress={() => props.addPanier(props.article.id, quantite)}
                >
                    <Text style={styles.addArticleText}>Supprimer</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  article: {
      flex:1,
      borderTopWidth: 2,
      borderBottomWidth: 2,
      borderColor: 'black',
      marginBottom: 20,
      flexDirection: 'row',
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#dedede',
      paddingTop: 10,
      paddingBottom: 10
  },
  imageContainer: {
    width: 64,
    height: 64,
    paddingLeft: 10,
    paddingRight: 10
  },
  image: {
      width: 64,
      height: 64
  },
  textContainer: {
      flex: 2
  },
  texte: {
      flex:1,
      paddingLeft: 20
  },
  btnContainer: {
      display: 'flex',
      alignItems: 'center',
      padding: 10
  },
  nbArticle: { 
      borderWidth: 1,
      borderColor: 'black',
      backgroundColor: 'white',
      width: '100%',
      height: 25,
      marginBottom: 10,
      textAlign: 'center',
      borderRadius: 5
  },
  addArticle: {
      display: 'flex',
      alignItems: 'center',
      alignSelf: 'center',
      justifyContent: 'center',
      backgroundColor: '#2196F3',
      height: 40,
      width: '100%',
      paddingLeft: 10,
      paddingRight: 10,
      borderRadius: 5,
      fontWeight: "bold"
  },
  addArticleText: {
    color: "white",
    fontWeight: "bold"
  },

});
