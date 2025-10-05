import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [loaded] = useFonts({
        "Urbanist-Regular": require("./assets/fonts/Urbanist-Regular.ttf"),
        "Urbanist-Bold": require("./assets/fonts/Urbanist-Bold.ttf"),
        "OldStandardTT-Regular": require("./assets/fonts/OldStandardTT-Regular.ttf"),
        "OldStandardTT-Bold": require("./assets/fonts/OldStandardTT-Bold.ttf"),
        "OldStandardTT-Italic": require("./assets/fonts/OldStandardTT-Italic.ttf"),
    });

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="(auth)" />
            <Stack.Screen name="(dashboard)" />
        </Stack>
    );
}
