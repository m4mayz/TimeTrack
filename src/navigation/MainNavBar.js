import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Image, Animated } from 'react-native';
import styles, { COLORS } from '../styles/styles';
import DashboardScreen from '../screens/DashboardScreen';
import FavScreen from '../screens/FavScreen';
import PremiumScreen from '../screens/PremiumScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { SafeAreaView } from 'react-native-safe-area-context';

// Bottom Navigation Item
const NavItem = ({ icon, label, active, onPress }) => (
  <TouchableOpacity style={styles.navItem} onPress={onPress}>
    <View style={styles.navIconContainer}>
      <Image
        source={icon}
        style={active ? styles.navIconActive : styles.navIcon}
        resizeMode="contain"
      />
    </View>
    {label && (
      <Text
        style={[
          styles.navLabel,
          active ? styles.navLabelActive : styles.navLabelInactive,
        ]}
      >
        {label}
      </Text>
    )}
  </TouchableOpacity>
);

const MainNavBar = () => {
  const [activeTab, setActiveTab] = useState(0);
  const slideAnim = useRef(new Animated.Value(0)).current;

  const handleTabPress = index => {
    Animated.spring(slideAnim, {
      toValue: index * (100 / 4), // Divide by 4 for 4 nav items
      useNativeDriver: true,
      tension: 70,
      friction: 10,
    }).start();
    setActiveTab(index);
  };

  // Screens to render based on active tab
  const renderScreen = () => {
    switch (activeTab) {
      case 0:
        return <DashboardScreen />;
      case 1:
        return <FavScreen />;
      case 2:
        return <PremiumScreen />;
      case 3:
        return <ProfileScreen />;
      default:
        return <DashboardScreen />;
    }
  };

  return (
    <SafeAreaView style={styles.NavMenuSafeArea}>
      {renderScreen()}
      <View style={[styles.bottomNav, { paddingBottom: 0 }]}>
        <NavItem
          icon={require('../assets/img/home.png')}
          label="Beranda"
          active={activeTab === 0}
          onPress={() => handleTabPress(0)}
        />
        <NavItem
          icon={require('../assets/img/heart.png')}
          label="Favorit"
          active={activeTab === 1}
          onPress={() => handleTabPress(1)}
        />
        <NavItem
          icon={require('../assets/img/crown.png')}
          label="Premium"
          active={activeTab === 2}
          onPress={() => handleTabPress(2)}
        />
        <NavItem
          icon={require('../assets/img/user.png')}
          label="Profil"
          active={activeTab === 3}
          onPress={() => handleTabPress(3)}
        />
      </View>
    </SafeAreaView>
  );
};

export default MainNavBar;
