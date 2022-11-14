import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
import AppBar from "../Components/AppBar";
import { colorScheme } from "../Styles";
import GatePicker from "../Components/GatePicker";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { AMENITY_TYPES } from "../data/amenityTypes";

/**
 * The Amenity Finder screen allows the user to select a gate
 * and type of amenity to search for. This screen will then redirect
 * them to the AmenityResults screen with the chosen filters.
 */
export default function AmenityFinder() {
    const UNSELECTED_GATE_NAME = "Select a Gate!";
    const [gateName, setGateName] = React.useState(UNSELECTED_GATE_NAME);
    const [amenityType, setAmenityType] = React.useState(AMENITY_TYPES.ANY);
    const navigation = useNavigation();

    const AMENITY_TYPE_BUTTONS = [
        { type: AMENITY_TYPES.DINING, buttonTitle: "Dining" },
        { type: AMENITY_TYPES.LOUNGES, buttonTitle: "Lounges" },
        { type: AMENITY_TYPES.MEDICAL, buttonTitle: "Medical" },
        { type: AMENITY_TYPES.RESTROOMS, buttonTitle: "Restrooms" },
        { type: AMENITY_TYPES.SHOPS, buttonTitle: "Shops" },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />
            <AppBar />
            <GatePicker
                gateName={gateName}
                setGateName={setGateName}
                isUnselected={gateName === UNSELECTED_GATE_NAME}
            />

            {AMENITY_TYPE_BUTTONS.map(({ type, buttonTitle }) => (
                <Button
                    style={
                        amenityType === type
                            ? styles.selectedAmenityButton
                            : styles.amenityTypeButton
                    }
                    mode="contained"
                    onPress={() => {
                        if (amenityType !== type) {
                            setAmenityType(type);
                        } else {
                            setAmenityType(AMENITY_TYPES.ANY);
                        }
                    }}
                    key={type}
                >
                    {buttonTitle}
                </Button>
            ))}

            <Button
                mode="contained"
                onPress={() => {
                    navigation.navigate("AmenityResults", {
                        gateName: gateName,
                    });
                }}
                disabled={gateName === UNSELECTED_GATE_NAME}
                style={styles.findAmenitiesButton}
            >
                Find{" "}
                {amenityType === AMENITY_TYPES.ANY ? "amenities" : amenityType}{" "}
                {gateName === UNSELECTED_GATE_NAME ? "" : `at ${gateName}`}
            </Button>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colorScheme.backgroundPage,
        flex: 1, // makes component take up all available space (https://reactnative.dev/docs/flexbox)
    },

    amenityTypeButton: {
        marginTop: 20,
        backgroundColor: colorScheme.primary,
    },

    selectedAmenityButton: {
        marginTop: 20,
        backgroundColor: colorScheme.light,
    },

    findAmenitiesButton: {
        marginTop: 20,
    },
});
