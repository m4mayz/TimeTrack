import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../style/styles";

const PremiumScreen = () => {
    return (
        <SafeAreaView style={styles.NavMenuSafeArea}>
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Text>Premium Screen</Text>
            </View>
        </SafeAreaView>
    );
};

export default PremiumScreen;
