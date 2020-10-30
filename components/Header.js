import React from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';

export default function Header(props) {

    let Panier = props.panier
    let nbArticle = Panier.length
    let affNbArticle = ""

    if(nbArticle === 0) {
        affNbArticle = "aucun article"
    } else if (nbArticle === 1) {
        affNbArticle = nbArticle + " article"
    } else if(nbArticle > 1) {
        affNbArticle = nbArticle + " articles"
    }
  
    return (
        <TouchableHighlight style={styles.header} onPress={() => props.onPress()}>
            <Text style={styles.headerText}>Mon panier: {affNbArticle}</Text>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        alignSelf: 'stretch',
        textAlign: 'center',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'purple',
        paddingTop: 5,
        paddingBottom: 5
    },
    headerText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
});
