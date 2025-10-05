import { Redirect } from "expo-router";

export default function Index() {
    // You can add authentication logic here
    // For now, redirect to login
    return <Redirect href="/(auth)/login" />;
}
