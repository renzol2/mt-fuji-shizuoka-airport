import * as React from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
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

export default function FlightSearch() {
    const flightNum = React.useState(null);
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />
            <AppBar />
            <Text style={{ color: "white" }}>Search for a flight</Text>
            <TextInput
                style={styles.input}
                value={flightNum}
                placeholder="Flight number"
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colorScheme.backgroundPage,
        flex: 1, // makes component take up all available space (https://reactnative.dev/docs/flexbox)
    },

    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderColor: "white",
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
