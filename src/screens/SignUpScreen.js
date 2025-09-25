// src/screens/SignUpScreen.js

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
} from 'react-native';
import { FontAwesome } from '@react-native-vector-icons/fontawesome';

const SignUpScreen = ({ navigation }) => {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = () => {
    if (!nama || !email || !password) {
      Alert.alert('Error', 'Semua kolom harus diisi!');
      return;
    }
    Alert.alert('Success', 'Account created successfully!', [
      { text: 'OK', onPress: () => navigation.navigate('Login') },
    ]);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.logoText}>TimeTrack</Text>
      <Text style={styles.title}>Create Your Account</Text>

      <TextInput
        style={styles.input}
        placeholder="Full Name"
        placeholderTextColor="#95A5A6"
        value={nama}
        onChangeText={setNama}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#95A5A6"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          placeholderTextColor="#95A5A6"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          style={styles.eyeButton}
          onPress={() => setShowPassword(!showPassword)}
        >
          <FontAwesome
            name={showPassword ? 'eye' : 'eye-slash'}
            size={16}
            color="#95A5A6"
            marginTop={-2}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.linkText}>
          Already have an account? <Text style={styles.linkBold}>Login</Text>
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

// Menggunakan style yang sama dengan LoginScreen untuk konsistensi
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 25,
    justifyContent: 'center',
    paddingVertical: 20,
  },
  logoText: {
    fontFamily: 'Urbanist-Bold',
    fontSize: 42,
    color: '#2C3E50',
    textAlign: 'center',
    marginBottom: 10,
  },
  title: {
    fontFamily: 'Urbanist-Regular',
    fontSize: 20,
    color: '#2C3E50',
    textAlign: 'center',
    marginBottom: 40,
  },
  input: {
    fontFamily: 'Urbanist-Regular',
    backgroundColor: '#F8F9FA',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    marginBottom: 15,
    color: '#2C3E50',
  },
  passwordContainer: {
    position: 'relative',
    marginBottom: 15,
  },
  passwordInput: {
    fontFamily: 'Urbanist-Regular',
    backgroundColor: '#F8F9FA',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    padding: 15,
    paddingRight: 50,
    fontSize: 16,
    color: '#2C3E50',
  },
  eyeButton: {
    position: 'absolute',
    right: 15,
    top: '50%',
    transform: [{ translateY: -10 }],
    padding: 5,
  },
  button: {
    backgroundColor: '#F1C40F',
    padding: 18,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    fontFamily: 'Urbanist-Bold',
    color: '#2C3E50',
    fontSize: 16,
  },
  linkText: {
    fontFamily: 'Urbanist-Regular',
    marginTop: 25,
    color: '#2C3E50',
    textAlign: 'center',
  },
  linkBold: {
    fontFamily: 'Urbanist-Bold',
    color: '#F1C40F',
  },
});

export default SignUpScreen;
