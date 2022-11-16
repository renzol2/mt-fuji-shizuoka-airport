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
import { UNSELECTED_GATE_NAME } from "../data/gates";

/**
 * The Amenity Finder screen allows the user to select a gate
 * and type of amenity to search for. This screen will then redirect
 * them to the AmenityResults screen with the chosen filters.
 */
export default function AmenityFinder() {
    const [gateName, setGateName] = React.useState(UNSELECTED_GATE_NAME);
    const navigation = useNavigation();

    // These objects are mapped to buttons.
    // We can add another object to the array to add more amenity types
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

            {/* Gate picker component */}
            <GatePicker
                gateName={gateName}
                setGateName={setGateName}
                isUnselected={gateName === UNSELECTED_GATE_NAME}
            />

            {/* List of all amenity type buttons */}
            <View style={styles.amenityTypeButtonContainer}>
                {AMENITY_TYPE_BUTTONS.map(({ type, buttonTitle }) => (
                    <Button
                        style={styles.amenityTypeButton}
                        mode="contained"
                        onPress={() => {
                            navigation.navigate("AmenityResults", {
                                gateName: gateName,
                                amenityType: type,
                            });
                        }}
                        key={type}
                    >
                        {buttonTitle}
                    </Button>
                ))}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colorScheme.backgroundPage,
        flex: 1, // makes component take up all available space (https://reactnative.dev/docs/flexbox)
    },

    amenityTypeButtonContainer: {
        paddingHorizontal: 50,
    },

    amenityTypeButton: {
        marginTop: 25,
        paddingVertical: 5,
        backgroundColor: colorScheme.primary,
    },

    selectedAmenityButton: {
        marginTop: 25,
        paddingVertical: 5,
        backgroundColor: colorScheme.light,
    },

    findAmenitiesButton: {
        marginTop: 25,
        paddingVertical: 5,
    },
});
