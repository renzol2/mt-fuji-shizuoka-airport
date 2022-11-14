import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
import AppBar from "../Components/AppBar";
import { colorScheme } from "../Styles";
import GatePicker from "../Components/GatePicker";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

/**
 * The Amenity Finder screen allows the user to select a gate
 * and type of amenity to search for. This screen will then redirect
 * them to the AmenityResults screen with the chosen filters.
 */
export default function AmenityFinder() {
    const UNSELECTED_GATE_NAME = "Select a Gate!";
    const [gateName, setGateName] = React.useState(UNSELECTED_GATE_NAME);
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />
            <AppBar />
            <GatePicker
                gateName={gateName}
                setGateName={setGateName}
            />

            <Button
                style={styles.vStackItem}
                mode="contained"
            >
                Dining
            </Button>
            <Button
                style={styles.vStackItem}
                mode="contained"
            >
                Restrooms
            </Button>
            <Button
                style={styles.vStackItem}
                mode="contained"
            >
                Medical
            </Button>
            <Button
                style={styles.vStackItem}
                mode="contained"
            >
                Lounges
            </Button>

            <Button
                mode="contained"
                onPress={() => {
                    navigation.navigate("AmenityResults", {
                        gateName: gateName,
                    });
                }}
                disabled={gateName === UNSELECTED_GATE_NAME}
            >
                Find amenities
            </Button>
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
        height: 200,
        justifyContent: "space-evenly",
        alignItems: "center",
        flex: 1,
    },

    vStackItem: {
        marginTop: 20,
        backgroundColor: colorScheme.primary,
    },
});
