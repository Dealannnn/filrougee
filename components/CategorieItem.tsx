import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ICategorie } from '../models/ICategorie';

interface Props {
  categorie: ICategorie;
}

const CategorieItem: React.FC<Props> = ({ categorie }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{categorie.nomCat}</Text>
      <Text>{categorie.descriptionCat}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});


export default CategorieItem;
