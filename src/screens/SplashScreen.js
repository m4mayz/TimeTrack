// src/screens/SplashScreen.js

import React, { useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 2500); // Durasi dipercepat sedikit
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <Text style={styles.title}>TimeTrack</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF', // Latar belakang putih [cite: 18]
  },
  title: {
    fontSize: 52,
    fontFamily: 'Urbanist-Bold', // Font sesuai desain
    color: '#2C3E50', // Warna abu-abu kebiruan gelap [cite: 9]
  },
});

export default SplashScreen;
