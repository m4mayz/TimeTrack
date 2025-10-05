import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import {
    Alert,
    Image,
    StatusBar,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import styles from "../style/styles";

const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = () => {
        if (!email || !password) {
            Alert.alert("Error", "Email dan Password tidak boleh kosong!");
            return;
        }
        router.replace("/(dashboard)/home");
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
            <Image
                source={require("../assets/img/logo-3.png")}
                style={styles.logo}
            />
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
                        name={showPassword ? "eye" : "eye-slash"}
                        size={16}
                        color="#95A5A6"
                        style={{ marginTop: -2 }}
                    />
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Masuk</Text>
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
                <Text style={styles.socialButtonText}>Masuk dengan Google</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push("/(auth)/signup")}>
                <Text style={styles.linkText}>
                    Belum punya akun?{" "}
                    <Text style={styles.linkBold}>Daftar disini</Text>
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default LoginScreen;
