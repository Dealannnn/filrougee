
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function AdminDashboardScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Dashboard Admin</Text>
      <Text style={styles.subtitle}>
        Bienvenue dans votre espace sécurisé.
      </Text>

      {/* Tu peux ajouter ici tes composants de gestion (ex. produits, commandes, stats, etc.) */}

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Produits</Text>
        <Text style={styles.cardText}>Gérez votre catalogue produit ici.</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Commandes</Text>
        <Text style={styles.cardText}>Consultez et traitez les commandes clients.</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Statistiques</Text>
        <Text style={styles.cardText}>Visualisez l'activité de votre boutique.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#6A0DAD',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#333',
    marginBottom: 24,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#F3F3F3',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 6,
  },
  cardText: {
    fontSize: 14,
    color: '#555',
  },
});