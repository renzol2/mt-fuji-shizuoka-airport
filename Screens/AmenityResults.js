import { ScrollView, StyleSheet, Text, View } from "react-native";
import {
    Button,
    Card,
    Title,
    Paragraph,
    Surface,
    Appbar,
} from "react-native-paper";
import AppBar from "../Components/AppBar";
import { colorScheme } from "../Styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

export default function AmenityResults({ route, navigation }) {
    const { gateName } = route.params;

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />
            <AppBar />
            <Text style={{ color: "white" }}>{gateName}</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colorScheme.backgroundPage,
        flex: 1, // makes component take up all available space (https://reactnative.dev/docs/flexbox)
    },
});
