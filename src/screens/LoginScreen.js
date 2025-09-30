import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StatusBar,
  Image,
} from 'react-native';
import { FontAwesome } from '@react-native-vector-icons/fontawesome';
import styles from '../styles/styles';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Email dan Password tidak boleh kosong!');
      return;
    }
    navigation.replace('MainNavBar');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <Image source={require('../assets/img/logo-3.png')} style={styles.logo} />
      <Text style={styles.title}>Masuk ke Akun Anda</Text>
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
        <Text style={styles.buttonText}>Masuk</Text>
      </TouchableOpacity>
      <Text style={styles.dividerText}>atau</Text>
      <TouchableOpacity style={styles.socialButton} onPress={() => {}}>
        <Image
          source={require('../assets/img/google.png')}
          style={styles.icon}
        />
        <Text style={styles.socialButtonText}>Masuk dengan Google</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.linkText}>
          Belum punya akun? <Text style={styles.linkBold}>Daftar disini</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
