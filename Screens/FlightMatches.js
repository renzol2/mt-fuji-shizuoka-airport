import * as React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import AppBar from "../Components/AppBar";
import { colorScheme } from "../Styles";

export default function FlightMatches({ route }) {
    const { number, departure, arrival, date } = route.params;

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />
            <AppBar />
            <ScrollView>
                <Text style={styles.header}>Matching Flights</Text>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colorScheme.backgroundPage,
        flex: 1, // makes component take up all available space (https://reactnative.dev/docs/flexbox)
    },
    header: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        color: "white",
        marginTop: 20,
    },
    amenityType: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        color: "white",
        marginVertical: 20,
    },
});
