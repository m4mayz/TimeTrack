import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles, { COLORS } from '../styles/styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome6 } from '@react-native-vector-icons/fontawesome6';

const FavScreen = () => {
  return (
    <SafeAreaView style={styles.NavMenuSafeArea}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default FavScreen;
