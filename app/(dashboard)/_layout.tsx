import { Image, View } from "react-native";

import { Tabs } from "expo-router";

import { COLORS } from "../style/styles";

export default function TabLayout() {
    return (
        <View style={layoutStyles.container}>
            <Tabs
                screenOptions={{
                    tabBarActiveTintColor: COLORS.white,
                    tabBarInactiveTintColor: COLORS.secondary,
                    tabBarStyle: layoutStyles.tabBar,
                    tabBarLabelStyle: layoutStyles.tabLabel,
                    tabBarItemStyle: layoutStyles.tabItem,
                    headerShown: false,
                }}
            >
                <Tabs.Screen
                    name="home"
                    options={{
                        title: "Beranda",
                        tabBarIcon: ({ focused }) => (
                            <View
                                style={[
                                    tabIconStyles.container,
                                    {
                                        backgroundColor: focused
                                            ? "rgba(255, 255, 255, 0.15)"
                                            : "transparent",
                                    },
                                ]}
                            >
                                <Image
                                    source={require("../assets/img/home.png")}
                                    style={[
                                        tabIconStyles.icon,
                                        {
                                            width: focused ? 26 : 24,
                                            height: focused ? 26 : 24,
                                            tintColor: focused
                                                ? COLORS.white
                                                : COLORS.secondary,
                                        },
                                    ]}
                                />
                            </View>
                        ),
                    }}
                />
                <Tabs.Screen
                    name="fav"
                    options={{
                        title: "Favorit",
                        tabBarIcon: ({ focused }) => (
                            <View
                                style={[
                                    tabIconStyles.container,
                                    {
                                        backgroundColor: focused
                                            ? "rgba(255, 255, 255, 0.15)"
                                            : "transparent",
                                    },
                                ]}
                            >
                                <Image
                                    source={require("../assets/img/heart.png")}
                                    style={[
                                        tabIconStyles.icon,
                                        {
                                            width: focused ? 26 : 24,
                                            height: focused ? 26 : 24,
                                            tintColor: focused
                                                ? COLORS.white
                                                : COLORS.secondary,
                                        },
                                    ]}
                                />
                            </View>
                        ),
                    }}
                />
                <Tabs.Screen
                    name="premium"
                    options={{
                        title: "Premium",
                        tabBarIcon: ({ focused }) => (
                            <View
                                style={[
                                    tabIconStyles.container,
                                    {
                                        backgroundColor: focused
                                            ? "rgba(255, 255, 255, 0.15)"
                                            : "transparent",
                                    },
                                ]}
                            >
                                <Image
                                    source={require("../assets/img/crown.png")}
                                    style={[
                                        tabIconStyles.icon,
                                        {
                                            width: focused ? 26 : 24,
                                            height: focused ? 26 : 24,
                                            tintColor: focused
                                                ? COLORS.white
                                                : COLORS.secondary,
                                        },
                                    ]}
                                />
                                {/* Premium Badge */}
                                {focused && (
                                    <View style={tabIconStyles.premiumBadge} />
                                )}
                            </View>
                        ),
                    }}
                />
                <Tabs.Screen
                    name="profile"
                    options={{
                        title: "Profil",
                        tabBarIcon: ({ focused }) => (
                            <View
                                style={[
                                    tabIconStyles.container,
                                    {
                                        backgroundColor: focused
                                            ? "rgba(255, 255, 255, 0.15)"
                                            : "transparent",
                                    },
                                ]}
                            >
                                <Image
                                    source={require("../assets/img/user.png")}
                                    style={[
                                        tabIconStyles.icon,
                                        {
                                            width: focused ? 26 : 24,
                                            height: focused ? 26 : 24,
                                            tintColor: focused
                                                ? COLORS.white
                                                : COLORS.secondary,
                                        },
                                    ]}
                                />
                            </View>
                        ),
                    }}
                />
            </Tabs>
        </View>
    );
}

// Layout Styles
const layoutStyles = {
    container: {
        flex: 1,
        backgroundColor: COLORS.primary,
        paddingTop: 30,
    },
    tabBar: {
        backgroundColor: COLORS.primary,
        borderTopWidth: 0,
        paddingTop: 8,
        paddingBottom: 12,
        height: 80,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: -4 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 10,
    },
    tabLabel: {
        fontSize: 11,
        fontFamily: "Urbanist-Bold",
        marginTop: 4,
        letterSpacing: 0.3,
    },
    tabItem: {
        paddingVertical: 4,
        borderRadius: 12,
        marginHorizontal: 4,
    },
};

// Tab Icon Styles
const tabIconStyles = {
    container: {
        alignItems: "center" as const,
        justifyContent: "center" as const,
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    icon: {
        // Dynamic width and height will be applied inline
    },
    premiumBadge: {
        position: "absolute" as const,
        top: -2,
        right: -2,
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: "#FFD700",
        borderWidth: 1,
        borderColor: COLORS.white,
    },
};
