import { router } from "expo-router";
import React, { useEffect, useRef } from "react";
import {
    Animated,
    Dimensions,
    Image,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { COLORS, FONTS } from "./style/styles";

const { height } = Dimensions.get("window");

export default function SplashScreen() {
    const logoScale = useRef(new Animated.Value(0.3)).current;
    const logoOpacity = useRef(new Animated.Value(0)).current;
    const titleOpacity = useRef(new Animated.Value(0)).current;
    const subtitleOpacity = useRef(new Animated.Value(0)).current;
    const backgroundOpacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const animateSequence = () => {
            // Background fade in
            Animated.timing(backgroundOpacity, {
                toValue: 1,
                duration: 800,
                useNativeDriver: true,
            }).start();

            // Logo animation sequence
            Animated.sequence([
                Animated.parallel([
                    Animated.timing(logoOpacity, {
                        toValue: 1,
                        duration: 1000,
                        useNativeDriver: true,
                    }),
                    Animated.spring(logoScale, {
                        toValue: 1,
                        tension: 50,
                        friction: 7,
                        useNativeDriver: true,
                    }),
                ]),
                Animated.timing(titleOpacity, {
                    toValue: 1,
                    duration: 800,
                    delay: 300,
                    useNativeDriver: true,
                }),
                Animated.timing(subtitleOpacity, {
                    toValue: 1,
                    duration: 600,
                    delay: 200,
                    useNativeDriver: true,
                }),
            ]).start();

            // Navigate to login after animations
            setTimeout(() => {
                router.replace("/(auth)/login");
            }, 3500);
        };

        animateSequence();
    }, [
        backgroundOpacity,
        logoOpacity,
        logoScale,
        subtitleOpacity,
        titleOpacity,
    ]);

    return (
        <View style={splashStyles.container}>
            <StatusBar
                barStyle="light-content"
                backgroundColor={COLORS.primary}
            />

            <Animated.View
                style={[
                    splashStyles.backgroundContainer,
                    { opacity: backgroundOpacity },
                ]}
            >
                <View style={splashStyles.gradient}>
                    {/* Decorative circles */}
                    <View style={[splashStyles.circle, splashStyles.circle1]} />
                    <View style={[splashStyles.circle, splashStyles.circle2]} />
                    <View style={[splashStyles.circle, splashStyles.circle3]} />
                </View>
            </Animated.View>

            <View style={splashStyles.contentContainer}>
                {/* Logo Animation */}
                <Animated.View
                    style={[
                        splashStyles.logoContainer,
                        {
                            opacity: logoOpacity,
                            transform: [{ scale: logoScale }],
                        },
                    ]}
                >
                    <View style={splashStyles.logoWrapper}>
                        <Image
                            source={require("./assets/img/logo-2.png")}
                            style={splashStyles.logo}
                            resizeMode="contain"
                        />
                    </View>
                </Animated.View>

                {/* Title Animation */}
                <Animated.View
                    style={[
                        splashStyles.textContainer,
                        { opacity: titleOpacity },
                    ]}
                >
                    <Text style={splashStyles.title}>TimeTrack</Text>
                    <Text style={splashStyles.tagline}>
                        Jelajahi Sejarah Indonesia
                    </Text>
                </Animated.View>

                {/* Subtitle Animation */}
                <Animated.View
                    style={[
                        splashStyles.subtitleContainer,
                        { opacity: subtitleOpacity },
                    ]}
                >
                    <Text style={splashStyles.subtitle}>
                        Temukan cerita menarik dari masa lalu{"\n"}
                        dan tokoh-tokoh bersejarah
                    </Text>
                </Animated.View>

                {/* Loading indicator */}
                <View style={splashStyles.loadingContainer}>
                    <View style={splashStyles.loadingDots}>
                        <View style={[splashStyles.dot, splashStyles.dot1]} />
                        <View style={[splashStyles.dot, splashStyles.dot2]} />
                        <View style={[splashStyles.dot, splashStyles.dot3]} />
                    </View>
                </View>
            </View>
        </View>
    );
}

const splashStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primary,
    },
    backgroundContainer: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    gradient: {
        flex: 1,
        position: "relative",
        backgroundColor: COLORS.primary,
    },
    circle: {
        position: "absolute",
        borderRadius: 200,
        backgroundColor: "rgba(255, 255, 255, 0.05)",
    },
    circle1: {
        width: 300,
        height: 300,
        top: -100,
        right: -50,
    },
    circle2: {
        width: 200,
        height: 200,
        bottom: -50,
        left: -30,
        backgroundColor: "rgba(206, 170, 122, 0.1)",
    },
    circle3: {
        width: 150,
        height: 150,
        top: height * 0.3,
        left: -75,
        backgroundColor: "rgba(233, 226, 206, 0.08)",
    },
    contentContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 40,
    },
    logoContainer: {
        marginBottom: 40,
    },
    logoWrapper: {
        width: 200,
        height: 200,
        borderRadius: 100,
        backgroundColor: "rgba(255, 255, 255, 0)",
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.3,
        shadowRadius: 20,
        // elevation: 15,
    },
    logo: {
        tintColor: COLORS.secondary,
        width: 150,
        height: 150,
    },
    textContainer: {
        alignItems: "center",
        marginBottom: 30,
    },
    title: {
        fontFamily: FONTS.bold,
        fontSize: 42,
        color: COLORS.white,
        textAlign: "center",
        marginBottom: 8,
        letterSpacing: 1,
        textShadowColor: "rgba(0, 0, 0, 0.3)",
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 4,
    },
    tagline: {
        fontFamily: FONTS.regular,
        fontSize: 18,
        color: COLORS.secondary,
        textAlign: "center",
        letterSpacing: 0.5,
    },
    subtitleContainer: {
        alignItems: "center",
        marginBottom: 60,
    },
    subtitle: {
        fontFamily: FONTS.regular,
        fontSize: 16,
        color: "rgba(255, 255, 255, 0.8)",
        textAlign: "center",
        lineHeight: 24,
        letterSpacing: 0.3,
    },
    loadingContainer: {
        position: "absolute",
        bottom: 80,
        alignSelf: "center",
    },
    loadingDots: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: COLORS.secondary,
    },
    dot1: {
        opacity: 0.4,
    },
    dot2: {
        opacity: 0.7,
    },
    dot3: {
        opacity: 1,
    },
});
