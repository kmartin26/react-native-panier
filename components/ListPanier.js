import React from 'react';
import { StyleSheet, Text, View, Image, Modal, TouchableHighlight } from 'react-native';
import ArticlePanier from './ArticlePanier'

export default function ListPanier(props) {
  
  return (
    <View style={styles.centeredView}>
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.modalVisible}
          >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              {
                props.panier.map((article, index) =>
                  <>
                    <ArticlePanier article={article} />
                  </>
                )
              }
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                onPress={() => {
                  props.modalPanier(!props.modalVisible);
                }}
              >
                <Text style={styles.textStyle}>Fermer le panier</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
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
