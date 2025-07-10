import React, { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator, Text, StyleSheet } from 'react-native';
import { getCategories } from '../services/CategorieService';
import { ICategorie } from '../models/ICategorie';
import  CategorieItem from '../components/CategorieItem';

const CategorieListScreen: React.FC = () => {
  const [categories, setCategories] = useState<ICategorie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" style={styles.loader} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.idCat.toString()}
        renderItem={({ item }) => <CategorieItem categorie={item} />}
        ListEmptyComponent={<Text>Aucune catégorie trouvée.</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default CategorieListScreen;
