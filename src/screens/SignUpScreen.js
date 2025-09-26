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
  Image,
} from 'react-native';
import { FontAwesome } from '@react-native-vector-icons/fontawesome';

const SignUpScreen = ({ navigation }) => {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSignUp = () => {
    if (!nama || !email || !password) {
      Alert.alert('Error', 'Semua kolom harus diisi!');
      return;
    }
    Alert.alert('Success', 'Akun berhasil dibuat!', [
      { text: 'OK', onPress: () => navigation.navigate('Login') },
    ]);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.logoText}>TimeTrack</Text>
      <Text style={styles.title}>Buat akun baru</Text>

      <TextInput
        style={styles.input}
        placeholder="Nama Lengkap"
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
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Konfirmasi Password"
          placeholderTextColor="#95A5A6"
          secureTextEntry={!showConfirmPassword}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity
          style={styles.eyeButton}
          onPress={() => setShowConfirmPassword(!showConfirmPassword)}
        >
          <FontAwesome
            name={showConfirmPassword ? 'eye' : 'eye-slash'}
            size={16}
            color="#95A5A6"
            marginTop={-2}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <Text style={styles.dividerText}>atau daftar dengan</Text>
      <TouchableOpacity style={styles.socialButton} onPress={() => {}}>
        <Image
          source={require('../assets/img/google.png')}
          style={styles.icon}
        />
        <Text style={styles.socialButtonText}>Google</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.linkText}>
          Sudah punya akun? <Text style={styles.linkBold}>Login</Text>
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
    color: '#21262E',
    textAlign: 'center',
    marginBottom: 10,
  },
  title: {
    fontFamily: 'Urbanist-Regular',
    fontSize: 20,
    color: '#21262E',
    textAlign: 'center',
    marginBottom: 40,
  },
  input: {
    fontFamily: 'Urbanist-Bold',
    backgroundColor: '#F8F9FA',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 20,
    padding: 15,
    fontSize: 16,
    marginBottom: 15,
    color: '#21262E',
  },
  passwordContainer: {
    position: 'relative',
    marginBottom: 15,
  },
  passwordInput: {
    fontFamily: 'Urbanist-Bold',
    backgroundColor: '#F8F9FA',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 20,
    padding: 15,
    paddingRight: 50,
    fontSize: 16,
    color: '#21262E',
  },
  eyeButton: {
    position: 'absolute',
    right: 15,
    top: '50%',
    transform: [{ translateY: -10 }],
    padding: 5,
  },
  button: {
    backgroundColor: '#FFD800',
    padding: 18,
    borderRadius: 20,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    fontFamily: 'Urbanist-Bold',
    color: '#21262E',
    fontSize: 16,
  },
  linkText: {
    fontFamily: 'Urbanist-Regular',
    marginTop: 25,
    color: '#21262E',
    textAlign: 'center',
  },
  linkBold: {
    fontFamily: 'Urbanist-Bold',
    color: '#FFD800',
  },
  dividerText: {
    fontFamily: 'Urbanist-Regular',
    color: '#95A5A6',
    textAlign: 'center',
    marginVertical: 20,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    padding: 15,
    borderRadius: 20,
  },
  socialButtonText: {
    fontFamily: 'Urbanist-Bold',
    color: '#21262E',
    fontSize: 16,
    marginLeft: 10,
  },
  icon: {
    height: 24,
    width: 24,
  },
});

export default SignUpScreen;
