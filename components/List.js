import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Article from './Article'

export default function List(props) {
  
  return (
    <View style={styles.listArticle}>
         {
            props.articles.map((article, index) =>
                <Article article={article} addPanier={(id, qte) => props.addPanier(id, qte)} />
            )
        }
        
      </View>
  );
}

const styles = StyleSheet.create({
  listArticle: {
      flex: 8,
      width: '100%',
      backgroundColor: 'white'
  }
});
