import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
    Alert,
    Animated,
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { COLORS, FONTS } from "../style/styles";

const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // Animation values
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const slideAnim = useRef(new Animated.Value(50)).current;
    const logoScale = useRef(new Animated.Value(0.8)).current;

    useEffect(() => {
        // Entrance animations
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.timing(slideAnim, {
                toValue: 0,
                duration: 800,
                useNativeDriver: true,
            }),
            Animated.spring(logoScale, {
                toValue: 1,
                tension: 50,
                friction: 7,
                useNativeDriver: true,
            }),
        ]).start();
    }, [fadeAnim, slideAnim, logoScale]);

    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert("Error", "Email dan Password tidak boleh kosong!");
            return;
        }

        setIsLoading(true);

        // Simulate login process
        setTimeout(() => {
            setIsLoading(false);
            router.replace("/(dashboard)/home");
        }, 1500);
    };

    return (
        <View style={authStyles.container}>
            <StatusBar
                barStyle="light-content"
                backgroundColor={COLORS.primary}
            />

            {/* Background */}
            <View style={authStyles.backgroundGradient}>
                {/* Decorative Elements */}
                <View
                    style={[authStyles.decorativeCircle, authStyles.circle1]}
                />
                <View
                    style={[authStyles.decorativeCircle, authStyles.circle2]}
                />
            </View>

            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={authStyles.keyboardView}
            >
                <ScrollView
                    contentContainerStyle={authStyles.scrollContent}
                    showsVerticalScrollIndicator={false}
                >
                    <Animated.View
                        style={[
                            authStyles.contentContainer,
                            {
                                opacity: fadeAnim,
                                transform: [{ translateY: slideAnim }],
                            },
                        ]}
                    >
                        {/* Logo Section */}
                        <Animated.View
                            style={[
                                authStyles.logoSection,
                                { transform: [{ scale: logoScale }] },
                            ]}
                        >
                            <View style={authStyles.logoContainer}>
                                <Image
                                    source={require("../assets/img/logo-3.png")}
                                    style={authStyles.logo}
                                    resizeMode="contain"
                                />
                            </View>
                            <Text style={authStyles.welcomeTitle}>
                                Selamat Datang
                            </Text>
                            <Text style={authStyles.welcomeSubtitle}>
                                Masuk ke akun TimeTrack Anda
                            </Text>
                        </Animated.View>

                        {/* Form Section */}
                        <View style={authStyles.formContainer}>
                            <View style={authStyles.inputGroup}>
                                <View style={authStyles.inputWrapper}>
                                    <Ionicons
                                        name="mail-outline"
                                        size={20}
                                        color={COLORS.secondary}
                                        style={authStyles.inputIcon}
                                    />
                                    <TextInput
                                        style={authStyles.input}
                                        placeholder="Email"
                                        placeholderTextColor="rgba(255, 255, 255, 0.6)"
                                        keyboardType="email-address"
                                        autoCapitalize="none"
                                        value={email}
                                        onChangeText={setEmail}
                                    />
                                </View>
                            </View>

                            <View style={authStyles.inputGroup}>
                                <View style={authStyles.inputWrapper}>
                                    <Ionicons
                                        name="lock-closed-outline"
                                        size={20}
                                        color={COLORS.secondary}
                                        style={authStyles.inputIcon}
                                    />
                                    <TextInput
                                        style={authStyles.input}
                                        placeholder="Password"
                                        placeholderTextColor="rgba(255, 255, 255, 0.6)"
                                        secureTextEntry={!showPassword}
                                        value={password}
                                        onChangeText={setPassword}
                                    />
                                    <TouchableOpacity
                                        style={authStyles.eyeButton}
                                        onPress={() =>
                                            setShowPassword(!showPassword)
                                        }
                                    >
                                        <Ionicons
                                            name={
                                                showPassword
                                                    ? "eye-outline"
                                                    : "eye-off-outline"
                                            }
                                            size={20}
                                            color={COLORS.secondary}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>

                            {/* Forgot Password */}
                            <TouchableOpacity
                                style={authStyles.forgotContainer}
                            >
                                <Text style={authStyles.forgotText}>
                                    Lupa Password?
                                </Text>
                            </TouchableOpacity>

                            {/* Login Button */}
                            <TouchableOpacity
                                style={[
                                    authStyles.loginButton,
                                    isLoading && authStyles.buttonDisabled,
                                ]}
                                onPress={handleLogin}
                                disabled={isLoading}
                            >
                                <View style={authStyles.buttonGradient}>
                                    {isLoading ? (
                                        <View
                                            style={authStyles.loadingContainer}
                                        >
                                            <Text style={authStyles.buttonText}>
                                                Masuk...
                                            </Text>
                                        </View>
                                    ) : (
                                        <Text style={authStyles.buttonText}>
                                            Masuk
                                        </Text>
                                    )}
                                </View>
                            </TouchableOpacity>

                            {/* Divider */}
                            <View style={authStyles.dividerContainer}>
                                <View style={authStyles.dividerLine} />
                                <Text style={authStyles.dividerText}>atau</Text>
                                <View style={authStyles.dividerLine} />
                            </View>

                            {/* Google Login */}
                            <TouchableOpacity style={authStyles.socialButton}>
                                <View style={authStyles.socialButtonContent}>
                                    <Image
                                        source={require("../assets/img/google.png")}
                                        style={authStyles.socialIcon}
                                    />
                                    <Text style={authStyles.socialButtonText}>
                                        Masuk dengan Google
                                    </Text>
                                </View>
                            </TouchableOpacity>

                            {/* Sign Up Link */}
                            <View style={authStyles.linkContainer}>
                                <Text style={authStyles.linkText}>
                                    Belum punya akun?{" "}
                                </Text>
                                <TouchableOpacity
                                    onPress={() =>
                                        router.push("/(auth)/signup")
                                    }
                                >
                                    <Text style={authStyles.linkBold}>
                                        Daftar disini
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Animated.View>
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    );
};

const authStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primary,
    },
    backgroundGradient: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: COLORS.primary,
    },
    decorativeCircle: {
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
    keyboardView: {
        flex: 1,
    },
    scrollContent: {
        flexGrow: 1,
        justifyContent: "center",
        paddingVertical: 40,
    },
    contentContainer: {
        paddingHorizontal: 30,
    },
    logoSection: {
        alignItems: "center",
        marginBottom: 40,
    },
    logoContainer: {
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: "rgba(255, 255, 255, 0)",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 50,
        marginTop: 50,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.3,
    },
    logo: {
        tintColor: COLORS.secondary,
        width: 120,
        height: 120,
    },
    welcomeTitle: {
        fontFamily: FONTS.bold,
        fontSize: 28,
        color: COLORS.white,
        textAlign: "center",
        marginBottom: 8,
        letterSpacing: 0.5,
    },
    welcomeSubtitle: {
        fontFamily: FONTS.regular,
        fontSize: 16,
        color: COLORS.secondary,
        textAlign: "center",
        letterSpacing: 0.3,
    },
    formContainer: {
        width: "100%",
    },
    inputGroup: {
        marginBottom: 20,
    },
    inputWrapper: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, 0.15)",
        borderRadius: 16,
        paddingHorizontal: 16,
        paddingVertical: 4,
        borderWidth: 1,
        borderColor: "rgba(255, 255, 255, 0.2)",
    },
    inputIcon: {
        marginRight: 12,
    },
    input: {
        flex: 1,
        fontFamily: FONTS.regular,
        fontSize: 16,
        color: COLORS.white,
        paddingVertical: 14,
    },
    eyeButton: {
        padding: 8,
    },
    forgotContainer: {
        alignItems: "flex-end",
        marginBottom: 25,
    },
    forgotText: {
        fontFamily: FONTS.regular,
        fontSize: 14,
        color: COLORS.secondary,
        textDecorationLine: "underline",
    },
    loginButton: {
        borderRadius: 16,
        marginBottom: 25,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 6,
    },
    buttonGradient: {
        paddingVertical: 16,
        borderRadius: 16,
        alignItems: "center",
        backgroundColor: "#ffffff",
    },
    buttonText: {
        fontFamily: FONTS.bold,
        fontSize: 16,
        color: COLORS.primary,
        letterSpacing: 0.5,
    },
    buttonDisabled: {
        opacity: 0.7,
    },
    loadingContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    dividerContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 25,
    },
    dividerLine: {
        flex: 1,
        height: 1,
        backgroundColor: "rgba(255, 255, 255, 0.3)",
    },
    dividerText: {
        fontFamily: FONTS.regular,
        fontSize: 14,
        color: COLORS.secondary,
        marginHorizontal: 16,
    },
    socialButton: {
        borderRadius: 16,
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        marginBottom: 30,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    socialButtonContent: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 14,
        paddingHorizontal: 20,
    },
    socialIcon: {
        width: 24,
        height: 24,
        marginRight: 12,
    },
    socialButtonText: {
        fontFamily: FONTS.bold,
        fontSize: 16,
        color: COLORS.primary,
        letterSpacing: 0.3,
    },
    linkContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    linkText: {
        fontFamily: FONTS.regular,
        fontSize: 14,
        color: COLORS.secondary,
    },
    linkBold: {
        fontFamily: FONTS.bold,
        fontSize: 14,
        color: COLORS.white,
        textDecorationLine: "underline",
    },
});

export default LoginScreen;
