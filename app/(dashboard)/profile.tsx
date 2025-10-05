import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../style/styles";

const ProfileScreen = () => {
    return (
        <SafeAreaView style={styles.NavMenuSafeArea}>
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Text>Fav Screen</Text>
            </View>
        </SafeAreaView>
    );
};

export default ProfileScreen;
