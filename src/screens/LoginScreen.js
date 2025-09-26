import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  StatusBar,
  Image,
} from 'react-native';
import { FontAwesome } from '@react-native-vector-icons/fontawesome';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Email dan Password tidak boleh kosong!');
      return;
    }
    navigation.replace('Dashboard');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <Text style={styles.logoText}>TimeTrack</Text>
      <Text style={styles.title}>Login ke Akun Anda</Text>
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
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.dividerText}>atau login dengan</Text>
      <TouchableOpacity style={styles.socialButton} onPress={() => {}}>
        <Image
          source={require('../assets/img/google.png')}
          style={styles.icon}
        />
        <Text style={styles.socialButtonText}>Google</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.linkText}>
          Belum punya akun? <Text style={styles.linkBold}>Daftar disini</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 25,
    justifyContent: 'center',
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
  icon: {
    height: 24,
    width: 24,
  },
});

export default LoginScreen;
