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
import GatePicker from "../Components/GatePicker";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";

export default function AmenityFinder() {
    const [gate, setGate] = useState("");

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />
            <AppBar />
            <GatePicker />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colorScheme.backgroundPage,
        flex: 1, // makes component take up all available space (https://reactnative.dev/docs/flexbox)
    },

    hStack: {
        flexDirection: "row",
        marginBottom: 50,
        justifyContent: "space-evenly",
        marginTop: 70,
    },

    vStack: {
        flexDirection: "column",
        height: 400,
        justifyContent: "space-evenly",
        alignItems: "center",
    },

    hStackItem: {
        width: 150,
        backgroundColor: colorScheme.primary,
    },

    vStackItem: {
        width: 300,
        padding: 10,
        backgroundColor: colorScheme.primary,
    },

    buttonText: {
        fontSize: 20,
    },
    card: {
        backgroundColor: colorScheme.light,
    },
    cardBody: {
        fontSize: 20,
    },
    cardBodyRight: {
        alignContent: "flex-end",
        fontSize: 25,
    },
});
