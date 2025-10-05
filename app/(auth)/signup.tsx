// src/screens/SignUpScreen.js

import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import {
    Alert,
    Image,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import styles from "../style/styles";

const SignUpScreen = () => {
    const [nama, setNama] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleSignUp = () => {
        if (!nama || !email || !password) {
            Alert.alert("Error", "Semua kolom harus diisi!");
            return;
        }
        Alert.alert("Success", "Akun berhasil dibuat!", [
            { text: "OK", onPress: () => router.push("/(auth)/login") },
        ]);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Membuat Akun Baru</Text>

            <TextInput
                style={styles.input}
                placeholder="Nama Lengkap"
                placeholderTextColor="#95A5A6"
                value={nama}
                onChangeText={setNama}
            />
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
                        name={showPassword ? "eye" : "eye-slash"}
                        size={16}
                        color="#95A5A6"
                        style={{ marginTop: -2 }}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.passwordContainer}>
                <TextInput
                    style={styles.passwordInput}
                    placeholder="Konfirmasi Password"
                    placeholderTextColor="#95A5A6"
                    secureTextEntry={!showConfirmPassword}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                />
                <TouchableOpacity
                    style={styles.eyeButton}
                    onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                    <FontAwesome
                        name={showConfirmPassword ? "eye" : "eye-slash"}
                        size={16}
                        color="#95A5A6"
                        style={{ marginTop: -2 }}
                    />
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                <Text style={styles.buttonText}>Daftar</Text>
            </TouchableOpacity>
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginVertical: 10,
                    width: "90%",
                    alignSelf: "center",
                }}
            >
                <View style={styles.linedivider} />
                <Text style={styles.dividerText}>atau</Text>
                <View style={styles.linedivider} />
            </View>

            <TouchableOpacity style={styles.socialButton} onPress={() => {}}>
                <Image
                    source={require("../assets/img/google.png")}
                    style={styles.icon}
                />
                <Text style={styles.socialButtonText}>
                    Daftar dengan Google
                </Text>
            </TouchableOpacity>
            <Text style={{ ...styles.linkText, marginTop: 20, fontSize: 14 }}>
                Dengan mengklik daftar, Anda menyetujui{" "}
                <Text style={styles.linkBold}>
                    Ketentuan Layanan dan Kebijakan Privasi kami.
                </Text>
            </Text>
            <TouchableOpacity onPress={() => router.back()}>
                <Text style={styles.linkText}>
                    Sudah punya akun?{" "}
                    <Text style={styles.linkBold}>Kembali ke Login</Text>
                </Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default SignUpScreen;
