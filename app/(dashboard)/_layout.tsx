import { Image, View } from "react-native";

import { Tabs } from "expo-router";

import { COLORS } from "../style/styles";

export default function TabLayout() {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.primary,
                paddingTop: 30,
                paddingBottom: 10,
            }}
        >
            <Tabs
                screenOptions={{
                    tabBarActiveTintColor: COLORS.white,
                    tabBarInactiveTintColor: COLORS.secondary,
                    tabBarStyle: {
                        paddingTop: 5,
                        backgroundColor: COLORS.primary,
                        borderTopWidth: 0,
                    },
                    tabBarLabelStyle: {
                        fontSize: 12,
                        fontFamily: "Urbanist-Regular",
                        marginBottom: 5,
                    },
                    headerShown: false,
                }}
            >
                <Tabs.Screen
                    name="home"
                    options={{
                        title: "Beranda",
                        tabBarIcon: ({ focused }) => (
                            <Image
                                source={require("../assets/img/home.png")}
                                style={{
                                    width: 24,
                                    height: 24,
                                    tintColor: focused
                                        ? COLORS.white
                                        : COLORS.secondary,
                                }}
                            />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="fav"
                    options={{
                        title: "Favorit",
                        tabBarIcon: ({ focused }) => (
                            <Image
                                source={require("../assets/img/heart.png")}
                                style={{
                                    width: 24,
                                    height: 24,
                                    tintColor: focused
                                        ? COLORS.white
                                        : COLORS.secondary,
                                }}
                            />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="premium"
                    options={{
                        title: "Premium",
                        tabBarIcon: ({ focused }) => (
                            <Image
                                source={require("../assets/img/crown.png")}
                                style={{
                                    width: 24,
                                    height: 24,
                                    tintColor: focused
                                        ? COLORS.white
                                        : COLORS.secondary,
                                }}
                            />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="profile"
                    options={{
                        title: "Profil",
                        tabBarIcon: ({ focused }) => (
                            <Image
                                source={require("../assets/img/user.png")}
                                style={{
                                    width: 24,
                                    height: 24,
                                    tintColor: focused
                                        ? COLORS.white
                                        : COLORS.secondary,
                                }}
                            />
                        ),
                    }}
                />
            </Tabs>
        </View>
    );
}
