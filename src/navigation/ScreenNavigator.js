// src/navigation/ScreenNavigator.js (Update)

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import MainNavBar from './MainNavBar';

const Stack = createNativeStackNavigator();

const ScreenNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#FFFFFF',
          },
          headerTintColor: '#21262E',
          headerTitleStyle: {
            fontFamily: 'Urbanist-Bold', // Gunakan font custom di header
          },
          headerShadowVisible: false, // Menghilangkan bayangan di bawah header
        }}
      >
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MainNavBar"
          component={MainNavBar}
          options={{ headerShown: false }} // Halaman utama biasanya tidak pakai header default
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ScreenNavigator;
