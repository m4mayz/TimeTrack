// src/screens/SplashScreen.js

import React, { useEffect } from 'react';
import { View, StyleSheet, StatusBar, Image } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 2500); // Durasi dipercepat sedikit
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <Image
        source={require('../assets/img/splash.png')}
        style={{
          height: 250,
          resizeMode: 'contain',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6a453b',
  },
});

export default SplashScreen;
