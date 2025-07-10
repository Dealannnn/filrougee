import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

const HomeScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://yourdomain.com/images/cyna_it_logo.jpeg' }}
          style={styles.logo}
        />
        <Text style={styles.headerText}>Bienvenue sur Cyna</Text>
      </View>

      {/* CAROUSEL SIMPLIFIÉ */}
      <ScrollView horizontal pagingEnabled style={styles.carousel}>
        {['carousel1.webp', 'carousel2.jpeg', 'paysage2.jpg'].map((img, i) => (
          <Image
            key={i}
            source={{ uri: `https://yourdomain.com/images/${img}` }}
            style={[styles.carouselImage, { width }]}
          />
        ))}
      </ScrollView>

      {/* PRODUITS */}
      <Text style={styles.sectionTitle}>Nos Produits</Text>
      {['Produit 1', 'Produit 2', 'Produit 3'].map((title, i) => (
        <View key={i} style={styles.productCard}>
          <Image
            source={{ uri: `https://yourdomain.com/images/carousel${(i % 2) + 1}.webp` }}
            style={styles.productImage}
          />
          <Text style={styles.productTitle}>{title}</Text>
          <Text style={styles.productText}>
            {i === 0
              ? 'Parfait pour votre quotidien.'
              : i === 1
              ? 'Technologie à petit prix.'
              : 'Qualité et fiabilité garanties.'}
          </Text>
          <TouchableOpacity>
            <Text style={styles.link}>Voir détails</Text>
          </TouchableOpacity>
        </View>
      ))}

      {/* FEATURETTE */}
      <View style={styles.featurette}>
        <Text style={styles.featureTitle}>
          Une expérience unique. <Text style={styles.textMuted}>Rapide et efficace.</Text>
        </Text>
        <Text style={styles.featureText}>
          Découvrez notre sélection de produits choisis avec soin pour répondre à tous vos besoins.
        </Text>
        <Image
          source={{ uri: 'https://yourdomain.com/images/paysage.jpg' }}
          style={styles.featureImage}
        />
      </View>

      {/* FOOTER */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2025 Cyna</Text>
        <Text style={styles.footerLink}>Accueil</Text>
        <Text style={styles.footerLink}>Contact</Text>
        <Text style={styles.footerLink}>Conditions</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 80,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 60,
    height: 60,
    marginBottom: 8,
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  carousel: {
    height: 200,
    marginBottom: 24,
  },
  carouselImage: {
    height: 200,
    resizeMode: 'cover',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 12,
    color: '#6A0DAD',
  },
  productCard: {
    marginBottom: 24,
    backgroundColor: '#f2f2f2',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productText: {
    textAlign: 'center',
    marginVertical: 6,
  },
  link: {
    color: '#007bff',
    fontWeight: '600',
  },
  featurette: {
    marginTop: 32,
    alignItems: 'center',
  },
  featureTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textMuted: {
    color: '#888',
  },
  featureText: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 12,
  },
  featureImage: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  footer: {
    marginTop: 32,
    alignItems: 'center',
  },
  footerText: {
    color: '#666',
    marginBottom: 8,
  },
  footerLink: {
    fontSize: 14,
    color: '#6A0DAD',
    marginBottom: 4,
  },
});

export default HomeScreen;
