// src/screens/DashboardScreen.js

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Komponen kartu untuk item sejarah
const HistoryCard = ({ title, imageSource, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <Image source={imageSource} style={styles.cardImage} />
    <View style={styles.cardTextContainer}>
      <Text style={styles.cardTitle}>{title}</Text>
    </View>
  </TouchableOpacity>
);

const DashboardScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <Text style={styles.headerTitle}>Discover</Text> [cite: 52]
        {/* Contoh Kartu Sejarah */}
        <HistoryCard
          title="Sejarah Kartini"
          imageSource={{
            uri: 'https://i.pinimg.com/originals/11/4a/5b/114a5b035978252445e93345e69145b5.jpg',
          }} // URL Gambar Kartini
          onPress={() => alert('Membuka Sejarah Kartini...')}
        />
        <HistoryCard
          title="Perang Diponegoro"
          imageSource={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Capture_of_Prince_Diponegoro.jpg/1200px-Capture_of_Prince_Diponegoro.jpg',
          }}
          onPress={() => alert('Membuka Perang Diponegoro...')}
        />
        <HistoryCard
          title="Kerajaan Majapahit"
          imageSource={{
            uri: 'https://cdn.idntimes.com/content-images/community/2019/07/candi-penataran-blitar-jawa-timur-komplek-candi-peninggalan-kerajaan-majapahit-e43501a6b052d9a973a8f15d70b72a6b.jpg',
          }}
          onPress={() => alert('Membuka Kerajaan Majapahit...')}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontFamily: 'Urbanist-Bold',
    fontSize: 34,
    color: '#2C3E50',
    marginTop: 20,
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardImage: {
    width: '100%',
    height: 180,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  cardTextContainer: {
    padding: 15,
  },
  cardTitle: {
    fontFamily: 'Urbanist-Bold',
    fontSize: 20,
    color: '#2C3E50',
  },
});

export default DashboardScreen;
