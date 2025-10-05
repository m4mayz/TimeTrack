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

const SignUpScreen = () => {
    const [nama, setNama] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
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

    const handleSignUp = async () => {
        if (!nama || !email || !password || !confirmPassword) {
            Alert.alert("Error", "Semua kolom harus diisi!");
            return;
        }

        if (password !== confirmPassword) {
            Alert.alert(
                "Error",
                "Password dan konfirmasi password tidak sama!"
            );
            return;
        }

        if (password.length < 6) {
            Alert.alert("Error", "Password minimal 6 karakter!");
            return;
        }

        setIsLoading(true);

        // Simulate signup process
        setTimeout(() => {
            setIsLoading(false);
            Alert.alert("Berhasil", "Akun berhasil dibuat!", [
                { text: "OK", onPress: () => router.push("/(auth)/login") },
            ]);
        }, 1500);
    };

    return (
        <View style={signupStyles.container}>
            <StatusBar
                barStyle="light-content"
                backgroundColor={COLORS.primary}
            />

            {/* Background */}
            <View style={signupStyles.backgroundGradient}>
                {/* Decorative Elements */}
                <View
                    style={[
                        signupStyles.decorativeCircle,
                        signupStyles.circle1,
                    ]}
                />
                <View
                    style={[
                        signupStyles.decorativeCircle,
                        signupStyles.circle2,
                    ]}
                />
            </View>

            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={signupStyles.keyboardView}
            >
                <ScrollView
                    contentContainerStyle={signupStyles.scrollContent}
                    showsVerticalScrollIndicator={false}
                >
                    <Animated.View
                        style={[
                            signupStyles.contentContainer,
                            {
                                opacity: fadeAnim,
                                transform: [{ translateY: slideAnim }],
                            },
                        ]}
                    >
                        {/* Logo Section */}
                        <Animated.View
                            style={[
                                signupStyles.logoSection,
                                { transform: [{ scale: logoScale }] },
                            ]}
                        >
                            <Text style={signupStyles.welcomeTitle}>
                                Buat Akun Baru
                            </Text>
                            <Text style={signupStyles.welcomeSubtitle}>
                                Bergabung dengan TimeTrack sekarang
                            </Text>
                        </Animated.View>

                        {/* Form Section */}
                        <View style={signupStyles.formContainer}>
                            {/* Name Input */}
                            <View style={signupStyles.inputGroup}>
                                <View style={signupStyles.inputWrapper}>
                                    <Ionicons
                                        name="person-outline"
                                        size={20}
                                        color={COLORS.secondary}
                                        style={signupStyles.inputIcon}
                                    />
                                    <TextInput
                                        style={signupStyles.input}
                                        placeholder="Nama Lengkap"
                                        placeholderTextColor="rgba(255, 255, 255, 0.6)"
                                        autoCapitalize="words"
                                        value={nama}
                                        onChangeText={setNama}
                                    />
                                </View>
                            </View>

                            {/* Email Input */}
                            <View style={signupStyles.inputGroup}>
                                <View style={signupStyles.inputWrapper}>
                                    <Ionicons
                                        name="mail-outline"
                                        size={20}
                                        color={COLORS.secondary}
                                        style={signupStyles.inputIcon}
                                    />
                                    <TextInput
                                        style={signupStyles.input}
                                        placeholder="Email"
                                        placeholderTextColor="rgba(255, 255, 255, 0.6)"
                                        keyboardType="email-address"
                                        autoCapitalize="none"
                                        value={email}
                                        onChangeText={setEmail}
                                    />
                                </View>
                            </View>

                            {/* Password Input */}
                            <View style={signupStyles.inputGroup}>
                                <View style={signupStyles.inputWrapper}>
                                    <Ionicons
                                        name="lock-closed-outline"
                                        size={20}
                                        color={COLORS.secondary}
                                        style={signupStyles.inputIcon}
                                    />
                                    <TextInput
                                        style={signupStyles.input}
                                        placeholder="Password"
                                        placeholderTextColor="rgba(255, 255, 255, 0.6)"
                                        secureTextEntry={!showPassword}
                                        value={password}
                                        onChangeText={setPassword}
                                    />
                                    <TouchableOpacity
                                        style={signupStyles.eyeButton}
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

                            {/* Confirm Password Input */}
                            <View style={signupStyles.inputGroup}>
                                <View style={signupStyles.inputWrapper}>
                                    <Ionicons
                                        name="lock-closed-outline"
                                        size={20}
                                        color={COLORS.secondary}
                                        style={signupStyles.inputIcon}
                                    />
                                    <TextInput
                                        style={signupStyles.input}
                                        placeholder="Konfirmasi Password"
                                        placeholderTextColor="rgba(255, 255, 255, 0.6)"
                                        secureTextEntry={!showConfirmPassword}
                                        value={confirmPassword}
                                        onChangeText={setConfirmPassword}
                                    />
                                    <TouchableOpacity
                                        style={signupStyles.eyeButton}
                                        onPress={() =>
                                            setShowConfirmPassword(
                                                !showConfirmPassword
                                            )
                                        }
                                    >
                                        <Ionicons
                                            name={
                                                showConfirmPassword
                                                    ? "eye-outline"
                                                    : "eye-off-outline"
                                            }
                                            size={20}
                                            color={COLORS.secondary}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>

                            {/* Sign Up Button */}
                            <TouchableOpacity
                                style={[
                                    signupStyles.signupButton,
                                    isLoading && signupStyles.buttonDisabled,
                                ]}
                                onPress={handleSignUp}
                                disabled={isLoading}
                            >
                                <View style={signupStyles.buttonGradient}>
                                    {isLoading ? (
                                        <View
                                            style={
                                                signupStyles.loadingContainer
                                            }
                                        >
                                            <Text
                                                style={signupStyles.buttonText}
                                            >
                                                Mendaftar...
                                            </Text>
                                        </View>
                                    ) : (
                                        <Text style={signupStyles.buttonText}>
                                            Daftar
                                        </Text>
                                    )}
                                </View>
                            </TouchableOpacity>

                            {/* Divider */}
                            <View style={signupStyles.dividerContainer}>
                                <View style={signupStyles.dividerLine} />
                                <Text style={signupStyles.dividerText}>
                                    atau
                                </Text>
                                <View style={signupStyles.dividerLine} />
                            </View>

                            {/* Google Signup */}
                            <TouchableOpacity style={signupStyles.socialButton}>
                                <View style={signupStyles.socialButtonContent}>
                                    <Image
                                        source={require("../assets/img/google.png")}
                                        style={signupStyles.socialIcon}
                                    />
                                    <Text style={signupStyles.socialButtonText}>
                                        Daftar dengan Google
                                    </Text>
                                </View>
                            </TouchableOpacity>

                            {/* Terms and Privacy */}
                            <Text style={signupStyles.termsText}>
                                Dengan mendaftar, Anda menyetujui{" "}
                                <Text style={signupStyles.termsLink}>
                                    Ketentuan Layanan
                                </Text>{" "}
                                dan{" "}
                                <Text style={signupStyles.termsLink}>
                                    Kebijakan Privasi
                                </Text>{" "}
                                kami.
                            </Text>

                            {/* Login Link */}
                            <View style={signupStyles.linkContainer}>
                                <Text style={signupStyles.linkText}>
                                    Sudah punya akun?{" "}
                                </Text>
                                <TouchableOpacity onPress={() => router.back()}>
                                    <Text style={signupStyles.linkBold}>
                                        Masuk disini
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

const signupStyles = StyleSheet.create({
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
        backgroundColor: "rgba(255, 255, 255, 0.15)",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.3,
        shadowRadius: 16,
        elevation: 12,
    },
    logo: {
        width: 80,
        height: 80,
    },
    welcomeTitle: {
        marginTop: 80,
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
    signupButton: {
        borderRadius: 16,
        marginBottom: 25,
        marginTop: 10,
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
        marginBottom: 20,
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
    termsText: {
        fontFamily: FONTS.regular,
        fontSize: 12,
        color: COLORS.secondary,
        textAlign: "center",
        lineHeight: 18,
        marginBottom: 25,
        paddingHorizontal: 10,
    },
    termsLink: {
        fontFamily: FONTS.bold,
        color: COLORS.white,
        textDecorationLine: "underline",
    },
    linkContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
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

export default SignUpScreen;
